require('dotenv').config()
require('querystring')

const {
  PINATA_API_KEY,
  PINATA_API_SECRET,
  WALLET_PRIVATE_KEY,
  EXTERNAL_URL_BASE,
  WEB3_PROVIDER_ENDPOINT,
  CONTRACT_ADDRESS,
} = process.env

const tinyboxesRef = require('../tinyboxes-contract.ts')

var web3 = new Web3(WEB3_PROVIDER_ENDPOINT)
tinyboxesContract = new web3.eth.Contract(
  tinyboxesRef.tinyboxesABI,
  CONTRACT_ADDRESS,
)

const generateResponse = (body, statusCode) => {
  return {
    statusCode: statusCode,
    body: JSON.stringify(body),
  }
}

exports.handler = function (event, context, callback) {
  const id = event.queryStringParameters.id

  if (event.httpMethod !== 'GET') {
    // Only GET requests allowed
    console.log('Bad method:', event.httpMethod)
    return callback(null, generateResponse('Method Not Allowed', 405))
  } else if (id === undefined) {
    // complain if id is missing
    console.log('Undefined ID parameter is required')
    return callback(null, generateResponse('Invalid Request', 204))
  }

  // lookup token data
  tinyboxesContract.methods.tokenData(id).call(function (result) {
    console.log(result)
  })

  // build the metadata object from the token data
  const image = ''
  const animationHash = ''
  let metadata = {
    description:
      'A scattering of tiny boxes, Aranged in patterns ranging from mundane to magnificent.',
    external_url: EXTERNAL_URL_BASE + id,
    image: image,
    name: 'Token ' + id,
    attributes: [],
    background_color: '121212',
    animation_url: animationHash,
  }

  // on internal error return this
  //generateResponse('Server Error', 500)

  return callback(null, generateResponse({ metadata }, 200))
}
