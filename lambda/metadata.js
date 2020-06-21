!function(e,t){for(var n in t)e[n]=t[n]}(exports,function(e){var t={};function n(i){if(t[i])return t[i].exports;var a=t[i]={i:i,l:!1,exports:{}};return e[i].call(a.exports,a,a.exports,n),a.l=!0,a.exports}return n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(i,a,function(t){return e[t]}.bind(null,a));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=7)}([function(e,t){e.exports=require("core-js/modules/es.object.to-string")},function(e,t){e.exports=require("core-js/modules/es.regexp.to-string")},function(e,t){e.exports=require("core-js/modules/es.string.pad-start")},function(e,t){e.exports=require("web3")},function(e,t){e.exports=require("regenerator-runtime/runtime")},function(e,t){e.exports=require("dotenv")},function(e,t){e.exports=require("querystring")},function(e,t,n){"use strict";n.r(t);n(0),n(1),n(2);function i(e){throw new Error('"'+e+'" is read-only')}n(4);function a(e,t,n,i,a,r,u){try{var p=e[r](u),s=p.value}catch(e){return void n(e)}p.done?t(s):Promise.resolve(s).then(i,a)}function r(e){return function(){var t=this,n=arguments;return new Promise((function(i,r){var u=e.apply(t,n);function p(e){a(u,i,r,p,s,"next",e)}function s(e){a(u,i,r,p,s,"throw",e)}p(void 0)}))}}n(6);var u=n(3),p=n.n(u),s=[{inputs:[],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"approved",type:"address"},{indexed:!0,internalType:"uint256",name:"tokenId",type:"uint256"}],name:"Approval",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"operator",type:"address"},{indexed:!1,internalType:"bool",name:"approved",type:"bool"}],name:"ApprovalForAll",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!0,internalType:"uint256",name:"tokenId",type:"uint256"}],name:"Transfer",type:"event"},{inputs:[],name:"ANIMATION_COUNT",outputs:[{internalType:"int256",name:"",type:"int256"}],stateMutability:"view",type:"function"},{inputs:[],name:"ARTIST_PRINTS",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"TOKEN_LIMIT",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"approve",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"}],name:"balanceOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"baseURI",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"string",name:"seed",type:"string"},{internalType:"uint256[2]",name:"counts",type:"uint256[2]"},{internalType:"int256[13]",name:"dials",type:"int256[13]"},{internalType:"bool[3]",name:"switches",type:"bool[3]"}],name:"createBox",outputs:[],stateMutability:"payable",type:"function"},{inputs:[],name:"creator",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"currentPrice",outputs:[{internalType:"uint256",name:"price",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"getApproved",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"},{internalType:"address",name:"operator",type:"address"}],name:"isApprovedForAll",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"name",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"ownerOf",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"_id",type:"uint256"},{internalType:"string",name:"seed",type:"string"},{internalType:"uint256[2]",name:"counts",type:"uint256[2]"},{internalType:"int256[13]",name:"dials",type:"int256[13]"},{internalType:"bool[3]",name:"switches",type:"bool[3]"},{internalType:"uint256",name:"animation",type:"uint256"},{internalType:"uint256",name:"frame",type:"uint256"}],name:"perpetualRenderer",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"_id",type:"uint256"}],name:"priceAt",outputs:[{internalType:"uint256",name:"price",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"safeTransferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"bytes",name:"_data",type:"bytes"}],name:"safeTransferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"operator",type:"address"},{internalType:"bool",name:"approved",type:"bool"}],name:"setApprovalForAll",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bytes4",name:"interfaceId",type:"bytes4"}],name:"supportsInterface",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"symbol",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"_id",type:"uint256"}],name:"tokenAnimation",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"_id",type:"uint256"}],name:"tokenArt",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"index",type:"uint256"}],name:"tokenByIndex",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"_id",type:"uint256"}],name:"tokenCounts",outputs:[{internalType:"uint256[]",name:"",type:"uint256[]"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"_id",type:"uint256"}],name:"tokenData",outputs:[{internalType:"uint256",name:"seed",type:"uint256"},{internalType:"uint256",name:"animation",type:"uint256"},{internalType:"uint256[]",name:"counts",type:"uint256[]"},{internalType:"int256[]",name:"dials",type:"int256[]"},{internalType:"bool[]",name:"switches",type:"bool[]"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"_id",type:"uint256"}],name:"tokenDials",outputs:[{internalType:"int256[]",name:"",type:"int256[]"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"_id",type:"uint256"},{internalType:"uint256",name:"_frame",type:"uint256"}],name:"tokenFrame",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"},{internalType:"uint256",name:"index",type:"uint256"}],name:"tokenOfOwnerByIndex",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"_id",type:"uint256"}],name:"tokenSeed",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"_id",type:"uint256"}],name:"tokenSwitches",outputs:[{internalType:"bool[]",name:"",type:"bool[]"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"tokenURI",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"totalSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"transferFrom",outputs:[],stateMutability:"nonpayable",type:"function"}];n(5).config();var o=process.env,y=(o.PINATA_API_KEY,o.PINATA_API_SECRET,o.WALLET_PRIVATE_KEY,o.EXTERNAL_URL_BASE),l=o.WEB3_PROVIDER_ENDPOINT,d=o.CONTRACT_ADDRESS,m=function(e,t){return{statusCode:t,body:JSON.stringify(e)}};exports.handler=function(){var e=r(regeneratorRuntime.mark((function e(t,n){var a,u,o,c,f,T,b;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=t.queryStringParameters.id,"GET"===t.httpMethod){e.next=6;break}return console.log("Bad method:",t.httpMethod),e.abrupt("return",m("Bad method:"+t.httpMethod,405));case 6:if(void 0!==a){e.next=9;break}return console.log("Undefined ID parameter is required"),e.abrupt("return",m("Undefined ID parameter is required",204));case 9:return console.log("Loading Web3"),u=new p.a(l),o=new u.eth.Contract(s,d),e.next=14,o.methods.ownerOf(a).call();case 14:if("0x0000000000000000000000000000000000000000"!==e.sent){e.next=18;break}return console.log("Token "+a+" dosn't exist"),e.abrupt("return",m("Token "+a+" dosn't exist",204));case 18:return e.next=20,o.methods.tokenData(a).call();case 20:return c=e.sent,e.next=23,o.methods.tokenArt(a).call();case 23:return f=e.sent,T=1546360800,u.eth.subscribe("logs",{address:d,fromBlock:0,topics:["0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef","0x0000000000000000000000000000000000000000000000000000000000000000",null,"0x"+a.toString(16).padStart(64,"0")]}).on("data",function(){var e=r(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.eth.getBlock(t.blockNumber);case 2:n=e.sent,i("minted"),T=n.timestamp;case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),"",b={description:"A scattering of tiny boxes, Aranged in patterns ranging from mundane to magnificent.",external_url:y+a,image_data:f,name:"Token "+a,attributes:[{display_type:"number",trait_type:"Colors",value:toInt(c.counts[0])},{display_type:"number",trait_type:"Shapes",value:toInt(c.counts[1])},{display_type:"number",trait_type:"Animation",value:toInt(c.animation)},{display_type:"number",trait_type:"Seed",value:toInt(c.seed)},{trait_type:"Hatching",value:c.dials[8]},{trait_type:"Mirror Level 1",value:c.switches[0]},{trait_type:"Mirror Level 2",value:c.switches[1]},{trait_type:"Mirror Level 3",value:c.switches[2]},{display_type:"date",trait_type:"Created",value:T}],background_color:"121212",animation_url:""},console.log("Metadata of token "+a),console.log(b),e.abrupt("return",m(b,200));case 32:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()}]));