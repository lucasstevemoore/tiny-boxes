import dotenv from 'dotenv'
import Web3 from 'web3'
import Readable from 'stream'
import pinataSDK from '@pinata/sdk'
import axios from 'axios'
import FormData, { Stream } from 'form-data'
import { tinyboxesABI } from '../tinyboxes-contract'
import { resolve } from 'path'
import fs from 'fs'
dotenv.config()

const {
  PINATA_API_KEY,
  PINATA_API_SECRET,
  WALLET_PRIVATE_KEY,
  EXTERNAL_URL_BASE,
  WEB3_PROVIDER_ENDPOINT,
  CONTRACT_ADDRESS,
} = process.env

// init web3 provider and load contract
var web3 = new Web3(WEB3_PROVIDER_ENDPOINT)
const tinyboxesContract = new web3.eth.Contract(
  tinyboxesABI,
  CONTRACT_ADDRESS,
)

const generateResponse = (body, statusCode) => {
  return {
    statusCode: statusCode,
    body: JSON.stringify(body),
  }
}

class ReadableString extends Readable {
  sent = false

  constructor(str) {
    super();
  }

  _read() {
    if (!this.sent) {
      this.push(Buffer.from(this.str));
      this.sent = true
    }
    else {
      this.push(null)
    }
  }
}

function lookupMintedBlock(id) {
  return new Promise((resolve, reject) => {
    web3.eth
      .subscribe('logs', {
        address: CONTRACT_ADDRESS,
        fromBlock: 0,
        topics: [
          '0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef',
          '0x0000000000000000000000000000000000000000000000000000000000000000',
          null,
          '0x' + id.toString(16).padStart(64, '0'),
        ],
      })
      .on("data", async (log) => {
        console.log('...Minted Block...')
        web3.eth.getBlock(log.blockNumber, (err, response) => {
          if (err) reject(err);
          else resolve(response);
        })
      });
  })
}

exports.handler = async (event, context) => {
  // wrap things with error catching
  try {
    const id = parseInt(event.queryStringParameters.id, 10)

    console.log(CONTRACT_ADDRESS);

    if (event.httpMethod !== 'GET') {
      // Only GET requests allowed
      console.log('Bad method:', event.httpMethod)
      return generateResponse('Bad method:' + event.httpMethod, 405)
    } else if (id === undefined) {
      // complain if id is missing
      console.log('Undefined ID parameter is required')
      return generateResponse('Undefined ID parameter is required', 204)
    }

    // check token exists and get owner
    console.log('Checking token of ID ', id, ' exists')
    const owner = await tinyboxesContract.methods.ownerOf(id).call()
    if (owner === '0x0000000000000000000000000000000000000000') {
      // complain if token is missing
      console.log('Token ' + id + " dosn't exist")
      return generateResponse('Token ' + id + " dosn't exist", 204)
    }

    // concurently lookup token data, palette, art & timestamp
    console.log('Looking Up Token...')
    console.log('...Data...')
    const dataPromise = tinyboxesContract.methods.tokenData(id).call()
    console.log('...Art...')
    const artPromise = tinyboxesContract.methods.tokenArt(id).call()
    console.log('...Mined Block Number...')
    const blockPromise = lookupMintedBlock(id);
    

    // await token data
    console.log("Awaiting requests...");
    let [data, art, animation, block] = ['', '', '', '']
    data = await dataPromise
      .catch((err) => console.error(err))
    art = await artPromise
      .catch((err) => console.error(err))
    block = await blockPromise
      .catch((err) => console.error(err))

    if (data === undefined || art === undefined) return generateResponse('Server Error', 500)
    
    console.log('Lookup Complete!')

    // convert static art from SVG to PNG

    // capture MP4 video of SVG animation

    // console.log('Creating ReadableStrings')
    // // needs to be converted to a file without writing to fs
    // const artStream = new File(art, ("TinyBox#"+id+"-art.svg"))
    // //Blob(art, {type : 'image/svg+xml'})
    // const animationStream = new ReadableString(animation)

    // load Pinata SDK
    console.log('Connecting to Pinata SDK...')
    const pinata = pinataSDK(PINATA_API_KEY, PINATA_API_SECRET)

    // const imageHash = (await pinata.pinFileToIPFS(artStream)).IpfsHash
    // const animationHash = (await pinata.pinFileToIPFS(animationStream)).IpfsHash
    // console.log('IPFS Hashes: ')
    // console.log(imageHash)
    // console.log(animationHash)

    // build the metadata object from the token data and IPFS hashes
    console.log("Building Metadata");
    const animationTitles = [
      "Snap Spin 90",
      "Snap Spin 180",
      "Snap Spin 270",
      "Snap Spin Tri",
      "Snap Spin Quad",
      "Snap Spin Tetra",
      "Spin",
      "Slow Mo",
      "Clockwork",
      "Spread",
      "Staggered Spread",
      "Jitter",
      "Giggle",
      "Jolt",
      "Grow n Shrink",
      "Squash n Stretch",
      "Round",
      "Glide",
      "Wave",
      "Fade",
      "Skew X",
      "Skew Y",
      "Stretch",
      "Jello"
    ];
    const schemeTitles = [
      "Triadic",
      "Complimentary",
      "Tetradic",
      "Analogous",
      "Analogous and Complimentary",
      "Split Complimentary",
      "Complimentary and Analogous",
      "Series",
      "Square",
      "Mono",
    ];
    const metadata = {
      name: 'TinyBox #' + id,
      description:
        'A scattering of tiny boxes, Arranged in patterns ranging from mundane to magnificent.',
      external_url: EXTERNAL_URL_BASE + id,
      image_data: art,
      background_color: '121212',
      attributes: [
        {
          display_type: 'number',
          trait_type: 'Shapes',
          value: parseInt(data.shapes),
        },
        {
          display_type: 'number',
          trait_type: 'Hatching',
          value: data.hatching,
        },
        {
          display_type: 'number',
          trait_type: 'Spread',
          value: data.spacing[0],
        },
        {
          display_type: 'number',
          trait_type: 'Rows',
          value: data.spacing[1] % 16,
        },
        {
          display_type: 'number',
          trait_type: 'Columns',
          value: data.spacing[1] / 16,
        },
        {
          display_type: 'number',
          trait_type: 'Hue',
          value: parseInt(data.palette[0]),
        },
        {
          display_type: 'number',
          trait_type: 'Saturation',
          value: parseInt(data.palette[1]),
        },
        {
          display_type: 'number',
          trait_type: 'Lightness',
          value: parseInt(data.palette[2]),
        },
        {
          display_type: 'number',
          trait_type: 'Contrast',
          value: parseInt(data.palette[3]),
        },
        {
          display_type: 'number',
          trait_type: 'Shades',
          value: parseInt(data.shades),
        },
        {
          display_type: 'number',
          trait_type: 'Scheme',
          value:  schemeTitles[data.scheme],
        },
        {
          display_type: 'number',
          trait_type: 'Animation',
          value: animationTitles[data.animation],
        },
        {
          display_type: 'number',
          trait_type: 'Mirroring',
          value: data.mirroring,
        },
        {
          display_type: 'date',
          trait_type: 'Created',
          value: block.timestamp,
        },
        {
          display_type: 'date',
          trait_type: 'Rendered',
          value: Date.now(),
        },
      ],
    }

    // log metadata to console
    console.log('Metadata of token ' + id)
    console.log(metadata)

    // upload metadata JSON object to IPFS
    // console.log('Writing metadata to IPFS')
    // const options = {
    //   pinataMetadata: {
    //       name: "TinyBox #"+id+" Metadata"
    //   }
    // };

    // const metadataHash = (await pinata.pinJSONToIPFS(metadata, options)).IpfsHash
    // console.log(metadataHash)

    // update token with the metadataHash
    // can happen after response

    return generateResponse(metadata, 200)
  } catch (err) {
    console.log(err)
    return generateResponse('Server Error', 500)
  }
}
