"use strict";var precacheConfig=[["/assets/agenda/agenda.png","30a5c151522e3d93a0f17370bcdb23e2"],["/assets/background.jpg","fb7ba9c0308e8456a3fa7b70bc597924"],["/assets/credit-black.png","2e14a4508ddb2273a77542c587086842"],["/assets/credit-white.png","2fcc8933987dda7db4c06c6c868bac2d"],["/assets/favicon.ico","53ac170e970ad034a55ee15ce198708c"],["/assets/fonts/Interstate-Bold.woff2","c14221fd3d4fdadd2196f1b89f9ac9c1"],["/assets/fonts/Interstate-Regular.woff2","6759e90ea1cfe7c6e725f47e8bec5464"],["/assets/icons/logo.svg","cb228bf3eebd48369e07a6950e8847de"],["/assets/icons/pt_back_icon.svg","32a4def37387364710a0d2b0f724cf2f"],["/assets/icons/pt_home_icon.svg","644fdcaae3fa90a0fc215be3bb2ade51"],["/assets/logos/dellemc.png","4a576005bfba408d94b0266225e60e49"],["/assets/logos/hp.png","2c2ca5eead6fcbe8d20b1846fe7227d7"],["/assets/logos/mimecast.png","14458cc7adb363898ac507596a0ec9f9"],["/assets/navigation/agenda_button.png","cb65f29a5592bc7d0b7a33cb26155c38"],["/assets/navigation/speakers_button.png","dac084b37dc23a1ec0451eb91bcf64ca"],["/assets/navigation/topics.png","69dae96217fb0844b573b7b0f8a5b524"],["/assets/navigation/vendors.png","64b91fec7c1a8a18241a3675be3daad3"],["/assets/shape.png","6257746e1e53fce2b5f07a219c982f62"],["/assets/speakers/david-and-liam.png","ea9e54d065e267f3d603768cd41bf6f5"],["/assets/speakers/jamie-bartlett.png","041d5611269c70b108b264a1de3cdaca"],["/assets/speakers/neil.png","30b76aa325087336d7ff3b9e1108f9e8"],["/assets/speakers/sarah.png","af8ff928660bc177ee40bba7bb42652a"],["/assets/speakers/will-greenwood.png","9a9de32cd4383ae991ca74e5bd0f2eb7"],["/assets/sponsors/DJI.png","ae93df51ff67a4ce8b9779b60568b5d2"],["/assets/sponsors/DigitalXRAID.png","1cd6d3ce3ce1b77bd1f6893017001a28"],["/assets/sponsors/YHRCCU.png","f46c274382d2fa30d5e85934fb4f4315"],["/assets/sponsors/barracuda.png","875f6e23731c682936868a8292ba2121"],["/assets/sponsors/bitdefender.png","c2f4138e3f773dcc66f91a406b48b834"],["/assets/sponsors/black-marble.png","0f42fb71ed928d964841febd63411177"],["/assets/sponsors/canon.png","150b18dad6e64326801a5d54570f3767"],["/assets/sponsors/citrix.png","3977f64a25e7e3a765d573f2c124b6ae"],["/assets/sponsors/dellemc.png","8dc059759c4f869bd0bfff60b110b0dc"],["/assets/sponsors/f-secure.png","69ad917a34557a356242d4c065b51475"],["/assets/sponsors/hp.png","ca8d8fb8280289db08a9f0a63c4219ba"],["/assets/sponsors/huawei.png","c0689fa03771a33f568606c3352cd25b"],["/assets/sponsors/ikonic.png","46e449177d72164a8511c224ed236fb4"],["/assets/sponsors/jct600.png","0ad032df36dad5638dd8fd9e01e00cb9"],["/assets/sponsors/lenovo.png","4a2c7579ddd1dbf1bef90e97635ea8ff"],["/assets/sponsors/microsoft.png","e59df7109867316dd1e380f7b3624db9"],["/assets/sponsors/mimecast.png","35c6679ebfae5bc85a0e0f6714c0afb6"],["/assets/sponsors/powervision.png","5079b8916b5ed2a0f59bb806b915d139"],["/assets/sponsors/s2s.png","11e3f7890b707057078d5f81fe0bcaa8"],["/assets/sponsors/symantec.png","70c6bb1a5d66d8790c4dbb509d7fc2d8"],["/assets/sponsors/tesla.png","ba3db71565dcec1c0efdcf0e8ef1a010"],["/assets/sponsors/toshiba.png","7931ca178ea9c3926d323a68adc9372e"],["/assets/sponsors/ubtech.png","ccc38bc7934673afaac75b9e21577f21"],["/assets/sponsors/vapour-partner.png","c3210c1c419a965b3b3ff7d7232d858b"],["/assets/sponsors/virtual-college.png","993caa36707eac70bef5ed4ad3a9a2f9"],["/assets/sponsors/zen.png","f183650b5bdffa1d3e48e7c8c386e7ce"],["/assets/title/tab.png","a53b6d5350f3b8a61e2acd90466512d2"],["/assets/topics/blockchain.png","2443c0c695ec6ab1f30b07c3548784e2"],["/assets/topics/communication.png","76cc0f28d0e5864415e4e3a479b416c3"],["/assets/topics/drones.png","c6198cd5c2695db8ddc5a806f227c087"],["/assets/topics/hyperconvergence.png","b8803959a114f0d81928cbeb9889f59f"],["/assets/topics/machine-learning.png","536f0fd5dc15d0309cb5766fc3f86c62"],["/assets/topics/mobility.png","10aa6569d053d328b9765343844acc79"],["/assets/topics/security.png","d5d5ab64d06ce40bab5a044392f7dea6"],["/assets/topics/things-of-interest.png","f9bfa2bb2973fcb8961fcc41a45f5ca3"],["/assets/topics/virtual-reality.png","b797f4e390e611ea14f6508b09472241"],["/bundle.cd49a.js","49faee91b83def9342d50b6542350fa0"],["/favicon.ico","53ac170e970ad034a55ee15ce198708c"],["/index.html","e714b5509186946419307852b84bfc24"],["/manifest.json","ac6d47f58644e1f38fd8356dffd11c0f"],["/route-Agenda.chunk.95654.js","1762963389bc27136fa23aca042fd4d8"],["/route-Home.chunk.9b893.js","683b16fce7d3f309ce96d51176151ce2"],["/route-Speaker.chunk.99300.js","ab234df5cb258f8e2deeaf4529711784"],["/route-Speakers.chunk.e7aee.js","6a895339da0233e9b20d522c043d5b38"],["/route-Topic.chunk.9c75d.js","55b72a53a7f83ccccad990561cfaee32"],["/route-Topics.chunk.691b1.js","644a6188dbae25d750e9693082a230c3"],["/route-Vendors.chunk.5af70.js","2be737addf589935af258bda304a6bdf"],["/style.5e1f3.css","0bf8682d9d9043a331779297b55190f3"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,s){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=s),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(s){return new Response(s,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,s,a,n){var t=new URL(e);return n&&t.pathname.match(n)||(t.search+=(t.search?"&":"")+encodeURIComponent(s)+"="+encodeURIComponent(a)),t.toString()},isPathWhitelisted=function(e,s){if(0===e.length)return!0;var a=new URL(s).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,s){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return s.every(function(s){return!s.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var s=e[0],a=e[1],n=new URL(s,self.location),t=createCacheKey(n,hashParamName,a,!1);return[n.toString(),t]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(s){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!s.has(a)){var n=new Request(a,{credentials:"same-origin"});return fetch(n).then(function(s){if(!s.ok)throw new Error("Request for "+a+" returned a response with status "+s.status);return cleanResponse(s).then(function(s){return e.put(a,s)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var s=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!s.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var s,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(s=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,"index.html"),s=urlsToCacheKeys.has(a));!s&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL("index.html",self.location).toString(),s=urlsToCacheKeys.has(a)),s&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(s){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,s),fetch(e.request)}))}});