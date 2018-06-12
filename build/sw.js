"use strict";var precacheConfig=[["/assets/agenda/agenda.png","30a5c151522e3d93a0f17370bcdb23e2"],["/assets/background.jpg","fb7ba9c0308e8456a3fa7b70bc597924"],["/assets/credit-black.png","2e14a4508ddb2273a77542c587086842"],["/assets/credit-white.png","2fcc8933987dda7db4c06c6c868bac2d"],["/assets/favicon.ico","53ac170e970ad034a55ee15ce198708c"],["/assets/fonts/Interstate-Bold.woff2","c14221fd3d4fdadd2196f1b89f9ac9c1"],["/assets/fonts/Interstate-Regular.woff2","6759e90ea1cfe7c6e725f47e8bec5464"],["/assets/icons/logo.svg","cb228bf3eebd48369e07a6950e8847de"],["/assets/icons/pt_back_icon.svg","32a4def37387364710a0d2b0f724cf2f"],["/assets/icons/pt_home_icon.svg","644fdcaae3fa90a0fc215be3bb2ade51"],["/assets/logos/dellemc.png","4a576005bfba408d94b0266225e60e49"],["/assets/logos/hp.png","2c2ca5eead6fcbe8d20b1846fe7227d7"],["/assets/logos/mimecast.png","14458cc7adb363898ac507596a0ec9f9"],["/assets/navigation/agenda_button.png","8e3c2bb0fd1376bbf2877be540eb0336"],["/assets/navigation/speakers_button.png","998ec4824db7e384d5d216ad5842dd0f"],["/assets/navigation/topics.png","6c4064eb514f8499ee24cb34a9e5356e"],["/assets/navigation/vendors.png","4d20183156b6a5ba3d8131d3761d7d3a"],["/assets/shape.png","6257746e1e53fce2b5f07a219c982f62"],["/assets/speakers/david-and-liam.png","77c342cd9fa3facce986118586c4800b"],["/assets/speakers/jamie-bartlett.png","d9801ca17c7019edcbee6ae8d14a61b9"],["/assets/speakers/neil.png","4feb0c2f4b99a7c7356a915cca2eb3d8"],["/assets/speakers/sarah.png","69221acaf9a6d53bf74f4604e5c12ccd"],["/assets/speakers/will-greenwood.png","9188f541a658c8bb8bf2d369da46f870"],["/assets/sponsors/Dell EMC Partner Logos-02.png","eb1d543681d32f5326160344c3198c54"],["/assets/sponsors/DigitalXRAID.png","99d9eaf72c6db38a40edf1fe7cabe198"],["/assets/sponsors/HP Partner Logos-03.png","5cebfb17ef71003d874f55c5cf658ab4"],["/assets/sponsors/Huawei Partner Logos-04.png","b2b1aa9466f81079c0159dba0f2a1cc4"],["/assets/sponsors/LOGO - Bitdefender whiteout 001.png","2e3c7efb68a3a11a575c8f00d5ead890"],["/assets/sponsors/LOGO - Canon white.png","6998fe5cafef43eee87581c6507d9672"],["/assets/sponsors/LOGO - DJI whiteout 001.png","5aa934375339596e08fa2627b212265d"],["/assets/sponsors/LOGO - F-secure whiteout 001.png","1434cab7c89985a0670a9e8260051c42"],["/assets/sponsors/LOGO - Tesla whiteout 001.png","b5686d25b24107b8c6c6f97d80ae367c"],["/assets/sponsors/LOGO - microsoft whiteout 001.png","ed299804f194ad4dfd116ca351dc0c9f"],["/assets/sponsors/LOGO - powervision - whiteout 001.png","a6bae52ad8c5f212396696cf5efe4929"],["/assets/sponsors/LOGO - ubtech - whiteout 001.png","5f47658ee25d6a0e9ad3fd79bb3d2a4c"],["/assets/sponsors/LOGO -Toshiba white out 001.png","a56c92d51a0df31fe0c77b74c51d84ef"],["/assets/sponsors/LOGO YHRCCU (police) whiteout 001.png","e6fe6abd1b5f9b10c36ca4c156969e5c"],["/assets/sponsors/S2S logo.png","c7d8d4a5cf42b9b387083e1836f2bf3f"],["/assets/sponsors/Sphero - whiteout 001.png","b2b21e5ce96b8a5a14fd5b1032bc5a95"],["/assets/sponsors/Vapour Partner Logos-11.png","e5010d2f72817091461bf3e1da729a57"],["/assets/sponsors/Zen Office Main Logo B+W - reversed.png","4548b62d544d14d730255682a957b95e"],["/assets/sponsors/barracuda.png","271db544b9fc8cc84e24eece9a29d3dd"],["/assets/sponsors/citrix.png","83c84b8513ebd725559ca6f32c3d42c1"],["/assets/sponsors/ikonic logo.png","f8b6dfde0e971cc5356f7afdbdaa072e"],["/assets/sponsors/jct600 - logo.png","e7dd48893bcdd9c049c6fe007d8ceade"],["/assets/sponsors/lenovo.png","c6312e658ce80d638efa34112d4ae585"],["/assets/sponsors/mclaren - logo whiteout.png","9bbf33126b8b92ae79a0689006fe19f9"],["/assets/sponsors/mimecast.png","444c540174500d09f6124cec2dd3d584"],["/assets/sponsors/pt18_black_marble.png","e2b000d2d7bed6cda92fd429875e3192"],["/assets/sponsors/pt18_symantec.png","9dc14ac20aeff38547522f580d730252"],["/assets/sponsors/virtual college logo.png","5f67af977b1b6c34c3917cf9db491aac"],["/assets/title/tab.png","a53b6d5350f3b8a61e2acd90466512d2"],["/assets/topics/blockchain.png","2443c0c695ec6ab1f30b07c3548784e2"],["/assets/topics/communication.png","76cc0f28d0e5864415e4e3a479b416c3"],["/assets/topics/drones.png","c6198cd5c2695db8ddc5a806f227c087"],["/assets/topics/hyperconvergence.png","b8803959a114f0d81928cbeb9889f59f"],["/assets/topics/machine-learning.png","536f0fd5dc15d0309cb5766fc3f86c62"],["/assets/topics/mobility.png","10aa6569d053d328b9765343844acc79"],["/assets/topics/security.png","d5d5ab64d06ce40bab5a044392f7dea6"],["/assets/topics/things-of-interest.png","f9bfa2bb2973fcb8961fcc41a45f5ca3"],["/assets/topics/virtual-reality.png","b797f4e390e611ea14f6508b09472241"],["/bundle.e3153.js","dce8f742c272b89edc0d9ed70091f888"],["/favicon.ico","53ac170e970ad034a55ee15ce198708c"],["/index.html","273eafa4a8d02673c45b3b96fac4e4dd"],["/manifest.json","ac6d47f58644e1f38fd8356dffd11c0f"],["/route-Agenda.chunk.737de.js","511b88d53653c4696591df5bd6e68107"],["/route-Home.chunk.772a2.js","2d75fe98aa0701fbaf16c6c325ebe2dc"],["/route-Speaker.chunk.fa9bb.js","eeb3751c9620c22fdb108596f4bed26f"],["/route-Speakers.chunk.3df9a.js","17b67e66b2c57e175189c163d092fcd8"],["/route-Topic.chunk.fdae1.js","978fd707fa66b52d6f5f2e5510cc12ef"],["/route-Topics.chunk.e062f.js","7caa114dee220e3591cfdbe077ecb913"],["/route-Vendors.chunk.92000.js","acf82232f51509343713ac9b943e5d31"],["/style.6f6b4.css","f6ad24bd3bbf940f975a7c48a10b2802"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,s){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=s),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(s){return new Response(s,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,s,a,t){var n=new URL(e);return t&&n.pathname.match(t)||(n.search+=(n.search?"&":"")+encodeURIComponent(s)+"="+encodeURIComponent(a)),n.toString()},isPathWhitelisted=function(e,s){if(0===e.length)return!0;var a=new URL(s).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,s){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return s.every(function(s){return!s.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var s=e[0],a=e[1],t=new URL(s,self.location),n=createCacheKey(t,hashParamName,a,!1);return[t.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(s){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!s.has(a)){var t=new Request(a,{credentials:"same-origin"});return fetch(t).then(function(s){if(!s.ok)throw new Error("Request for "+a+" returned a response with status "+s.status);return cleanResponse(s).then(function(s){return e.put(a,s)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var s=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!s.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var s,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(s=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,"index.html"),s=urlsToCacheKeys.has(a));!s&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL("index.html",self.location).toString(),s=urlsToCacheKeys.has(a)),s&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(s){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,s),fetch(e.request)}))}});