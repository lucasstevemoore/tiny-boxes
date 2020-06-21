!function(e,t){for(var n in t)e[n]=t[n]}(exports,function(e){var t={};function n(i){if(t[i])return t[i].exports;var a=t[i]={i:i,l:!1,exports:{}};return e[i].call(a.exports,a,a.exports,n),a.l=!0,a.exports}return n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(i,a,function(t){return e[t]}.bind(null,a));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=4)}([function(e,t){e.exports=require("web3")},function(e,t){e.exports=require("regenerator-runtime/runtime")},function(e,t){e.exports=require("dotenv")},function(e,t){e.exports=require("querystring")},function(e,t,n){"use strict";n.r(t);n(1);function i(e,t,n,i,a,r,p){try{var u=e[r](p),s=u.value}catch(e){return void n(e)}u.done?t(s):Promise.resolve(s).then(i,a)}n(3);var a=n(0),r=n.n(a),p=[{inputs:[],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"approved",type:"address"},{indexed:!0,internalType:"uint256",name:"tokenId",type:"uint256"}],name:"Approval",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"operator",type:"address"},{indexed:!1,internalType:"bool",name:"approved",type:"bool"}],name:"ApprovalForAll",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!0,internalType:"uint256",name:"tokenId",type:"uint256"}],name:"Transfer",type:"event"},{inputs:[],name:"ANIMATION_COUNT",outputs:[{internalType:"int256",name:"",type:"int256"}],stateMutability:"view",type:"function"},{inputs:[],name:"ARTIST_PRINTS",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"TOKEN_LIMIT",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"approve",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"}],name:"balanceOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"baseURI",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"string",name:"seed",type:"string"},{internalType:"uint256[2]",name:"counts",type:"uint256[2]"},{internalType:"int256[13]",name:"dials",type:"int256[13]"},{internalType:"bool[3]",name:"switches",type:"bool[3]"}],name:"createBox",outputs:[],stateMutability:"payable",type:"function"},{inputs:[],name:"creator",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"currentPrice",outputs:[{internalType:"uint256",name:"price",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"getApproved",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"},{internalType:"address",name:"operator",type:"address"}],name:"isApprovedForAll",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"name",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"ownerOf",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"_id",type:"uint256"},{internalType:"string",name:"seed",type:"string"},{internalType:"uint256[2]",name:"counts",type:"uint256[2]"},{internalType:"int256[13]",name:"dials",type:"int256[13]"},{internalType:"bool[3]",name:"switches",type:"bool[3]"},{internalType:"uint256",name:"animation",type:"uint256"},{internalType:"uint256",name:"frame",type:"uint256"}],name:"perpetualRenderer",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"_id",type:"uint256"}],name:"priceAt",outputs:[{internalType:"uint256",name:"price",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"safeTransferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"bytes",name:"_data",type:"bytes"}],name:"safeTransferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"operator",type:"address"},{internalType:"bool",name:"approved",type:"bool"}],name:"setApprovalForAll",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bytes4",name:"interfaceId",type:"bytes4"}],name:"supportsInterface",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"symbol",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"_id",type:"uint256"}],name:"tokenAnimation",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"_id",type:"uint256"}],name:"tokenArt",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"index",type:"uint256"}],name:"tokenByIndex",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"_id",type:"uint256"}],name:"tokenCounts",outputs:[{internalType:"uint256[]",name:"",type:"uint256[]"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"_id",type:"uint256"}],name:"tokenData",outputs:[{internalType:"uint256",name:"seed",type:"uint256"},{internalType:"uint256",name:"animation",type:"uint256"},{internalType:"uint256[]",name:"counts",type:"uint256[]"},{internalType:"int256[]",name:"dials",type:"int256[]"},{internalType:"bool[]",name:"switches",type:"bool[]"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"_id",type:"uint256"}],name:"tokenDials",outputs:[{internalType:"int256[]",name:"",type:"int256[]"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"_id",type:"uint256"},{internalType:"uint256",name:"_frame",type:"uint256"}],name:"tokenFrame",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"},{internalType:"uint256",name:"index",type:"uint256"}],name:"tokenOfOwnerByIndex",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"_id",type:"uint256"}],name:"tokenSeed",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"_id",type:"uint256"}],name:"tokenSwitches",outputs:[{internalType:"bool[]",name:"",type:"bool[]"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"tokenURI",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"totalSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"transferFrom",outputs:[],stateMutability:"nonpayable",type:"function"}];n(2).config();var u=process.env,s=(u.PINATA_API_KEY,u.PINATA_API_SECRET,u.WALLET_PRIVATE_KEY,u.EXTERNAL_URL_BASE),o=u.WEB3_PROVIDER_ENDPOINT,y=u.CONTRACT_ADDRESS,l=function(e,t){return{statusCode:t,body:JSON.stringify(e)}};exports.handler=function(){var e,t=(e=regeneratorRuntime.mark((function e(t,n){var i,a,u,d,m,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i=t.queryStringParameters.id,"GET"===t.httpMethod){e.next=6;break}return console.log("Bad method:",t.httpMethod),e.abrupt("return",l("Method Not Allowed",405));case 6:if(void 0!==i){e.next=9;break}return console.log("Undefined ID parameter is required"),e.abrupt("return",l("Invalid Request",204));case 9:return console.log("Loading Web3"),a=new r.a(o),u=new a.eth.Contract(p,y),e.next=14,u.methods.tokenData(i).call();case 14:return d=e.sent,e.next=17,u.methods.tokenArt(i).call();case 17:return m=e.sent,c={description:"A scattering of tiny boxes, Aranged in patterns ranging from mundane to magnificent.",external_url:s+i,image_data:m,name:"Token "+i,attributes:[{display_type:"number",trait_type:"Animation",value:d.animation},{display_type:"number",trait_type:"Seed",value:d.seed},{trait_type:"Colors",value:d.counts[0]},{trait_type:"Shapes",value:d.counts[1]},{trait_type:"Hatching",value:d.dials[8]}],background_color:"121212",animation_url:""},console.log("Metadata of token "+i),console.log(c),e.abrupt("return",l({metadata:c},200));case 24:case"end":return e.stop()}}),e)})),function(){var t=this,n=arguments;return new Promise((function(a,r){var p=e.apply(t,n);function u(e){i(p,a,r,u,s,"next",e)}function s(e){i(p,a,r,u,s,"throw",e)}u(void 0)}))});return function(e,n){return t.apply(this,arguments)}}()}]));