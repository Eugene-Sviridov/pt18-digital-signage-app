"use strict";var precacheConfig=[["/assets/agenda/agenda.png","30a5c151522e3d93a0f17370bcdb23e2"],["/assets/background.jpg","fb7ba9c0308e8456a3fa7b70bc597924"],["/assets/credit-black.png","2e14a4508ddb2273a77542c587086842"],["/assets/credit-white.png","2fcc8933987dda7db4c06c6c868bac2d"],["/assets/favicon.ico","53ac170e970ad034a55ee15ce198708c"],["/assets/fonts/Interstate-Bold.woff2","c14221fd3d4fdadd2196f1b89f9ac9c1"],["/assets/fonts/Interstate-Regular.woff2","6759e90ea1cfe7c6e725f47e8bec5464"],["/assets/icons/logo.svg","cb228bf3eebd48369e07a6950e8847de"],["/assets/icons/pt_back_icon.svg","32a4def37387364710a0d2b0f724cf2f"],["/assets/icons/pt_home_icon.svg","644fdcaae3fa90a0fc215be3bb2ade51"],["/assets/logos/dellemc.png","4a576005bfba408d94b0266225e60e49"],["/assets/logos/hp.png","2c2ca5eead6fcbe8d20b1846fe7227d7"],["/assets/logos/mimecast.png","14458cc7adb363898ac507596a0ec9f9"],["/assets/navigation/agenda_button.png","8e3c2bb0fd1376bbf2877be540eb0336"],["/assets/navigation/prizes.png","4867b9f512102602c3fef5c48bade99e"],["/assets/navigation/speakers_button.png","998ec4824db7e384d5d216ad5842dd0f"],["/assets/navigation/topics.png","6c4064eb514f8499ee24cb34a9e5356e"],["/assets/navigation/vendors.png","4d20183156b6a5ba3d8131d3761d7d3a"],["/assets/prizes-navigation/drone racing@3x.png","08e6c2d082dcf5a5b4f01bd49d45174c"],["/assets/prizes-navigation/keep in touch@3x.png","84148f3e15301e65fc8c2ca3be4a4daa"],["/assets/prizes-navigation/pure lotto@3x.png","2c1647122f88f085c78bad8dae9f0483"],["/assets/prizes-navigation/raffle@3x.png","9443d209abcd67ae2f744f2039750261"],["/assets/prizes-navigation/top 3 social@3x.png","1d8b5dc1a8d253928901bd0d81fb69a2"],["/assets/prizes/1186d760894399.png","f3caa9591bf2e5668271e94e2da07482"],["/assets/prizes/6car_track_day.png","7ec0d6ad346a6fe3b0810a45ca945dd7"],["/assets/prizes/Beats_X_.png","744cf8122f5d801c2c4ec7706f8cb821"],["/assets/prizes/Canon_printer.png","a14bd0ec43a2bf0bd5165bd3e4dbea3e"],["/assets/prizes/DELL_v_laptop.png","b2c27087bd783885449b94ae039d4d3c"],["/assets/prizes/DJI_Trello.png","513ba94db300a8be6deffa5bd9be620f"],["/assets/prizes/F-secure_sense.png","170d60f8e0fddeef475949f21d552f92"],["/assets/prizes/XYZ_3d_printer.png","d204cac0b0534a36becc0f4dd3f64f44"],["/assets/prizes/bitdefender_box_2.png","eadae13f1a834fd4135311f65cfda830"],["/assets/prizes/cyber_essentials.png","9db914c09976dd41f5a79d7b70e13f44"],["/assets/prizes/nomad_wallet.png","39ad58f98dd4284bace75bebb6d9c92f"],["/assets/prizes/the_ivy_.png","4c85a4cc95cd7116255aa8614fd30048"],["/assets/prizes/theman_behind_the_curtain.png","54166b273bc9bab8506200e1533c700c"],["/assets/shape.png","6257746e1e53fce2b5f07a219c982f62"],["/assets/speakers/david-and-liam.png","77c342cd9fa3facce986118586c4800b"],["/assets/speakers/jamie-bartlett.png","d9801ca17c7019edcbee6ae8d14a61b9"],["/assets/speakers/neil.png","4feb0c2f4b99a7c7356a915cca2eb3d8"],["/assets/speakers/sarah.png","69221acaf9a6d53bf74f4604e5c12ccd"],["/assets/speakers/will-greenwood.png","9188f541a658c8bb8bf2d369da46f870"],["/assets/sponsors/Dell EMC Partner Logos-02.png","eb1d543681d32f5326160344c3198c54"],["/assets/sponsors/DigitalXRAID.png","99d9eaf72c6db38a40edf1fe7cabe198"],["/assets/sponsors/HP Partner Logos-03.png","5cebfb17ef71003d874f55c5cf658ab4"],["/assets/sponsors/Huawei Partner Logos-04.png","b2b1aa9466f81079c0159dba0f2a1cc4"],["/assets/sponsors/LOGO - Bitdefender whiteout 001.png","2e3c7efb68a3a11a575c8f00d5ead890"],["/assets/sponsors/LOGO - Canon white.png","6998fe5cafef43eee87581c6507d9672"],["/assets/sponsors/LOGO - DJI whiteout 001.png","5aa934375339596e08fa2627b212265d"],["/assets/sponsors/LOGO - F-secure whiteout 001.png","1434cab7c89985a0670a9e8260051c42"],["/assets/sponsors/LOGO - Tesla whiteout 001.png","b5686d25b24107b8c6c6f97d80ae367c"],["/assets/sponsors/LOGO - microsoft whiteout 001.png","ed299804f194ad4dfd116ca351dc0c9f"],["/assets/sponsors/LOGO - powervision - whiteout 001.png","fca98afc34dab1578dcb5ac48a4c474d"],["/assets/sponsors/LOGO - ubtech - whiteout 001.png","5f47658ee25d6a0e9ad3fd79bb3d2a4c"],["/assets/sponsors/LOGO -Toshiba white out 001.png","a56c92d51a0df31fe0c77b74c51d84ef"],["/assets/sponsors/LOGO YHRCCU (police) whiteout 001.png","e6fe6abd1b5f9b10c36ca4c156969e5c"],["/assets/sponsors/S2S logo.png","c7d8d4a5cf42b9b387083e1836f2bf3f"],["/assets/sponsors/Sphero - whiteout 001.png","b2b21e5ce96b8a5a14fd5b1032bc5a95"],["/assets/sponsors/Vapour Partner Logos-11.png","e5010d2f72817091461bf3e1da729a57"],["/assets/sponsors/Zen Office Main Logo B+W - reversed.png","4548b62d544d14d730255682a957b95e"],["/assets/sponsors/barracuda.png","271db544b9fc8cc84e24eece9a29d3dd"],["/assets/sponsors/citrix.png","83c84b8513ebd725559ca6f32c3d42c1"],["/assets/sponsors/ikonic logo.png","f8b6dfde0e971cc5356f7afdbdaa072e"],["/assets/sponsors/jct600 - logo.png","e7dd48893bcdd9c049c6fe007d8ceade"],["/assets/sponsors/lenovo.png","c6312e658ce80d638efa34112d4ae585"],["/assets/sponsors/mclaren - logo whiteout.png","9bbf33126b8b92ae79a0689006fe19f9"],["/assets/sponsors/mimecast.png","444c540174500d09f6124cec2dd3d584"],["/assets/sponsors/pt18_black_marble.png","e2b000d2d7bed6cda92fd429875e3192"],["/assets/sponsors/pt18_symantec.png","9dc14ac20aeff38547522f580d730252"],["/assets/sponsors/virtual college logo.png","5f67af977b1b6c34c3917cf9db491aac"],["/assets/title/tab.png","a53b6d5350f3b8a61e2acd90466512d2"],["/assets/topics/blockchain.png","2443c0c695ec6ab1f30b07c3548784e2"],["/assets/topics/communication.png","76cc0f28d0e5864415e4e3a479b416c3"],["/assets/topics/drones.png","c6198cd5c2695db8ddc5a806f227c087"],["/assets/topics/hyperconvergence.png","b8803959a114f0d81928cbeb9889f59f"],["/assets/topics/machine-learning.png","536f0fd5dc15d0309cb5766fc3f86c62"],["/assets/topics/mobility.png","10aa6569d053d328b9765343844acc79"],["/assets/topics/security.png","d5d5ab64d06ce40bab5a044392f7dea6"],["/assets/topics/things-of-interest.png","f9bfa2bb2973fcb8961fcc41a45f5ca3"],["/assets/topics/virtual-reality.png","b797f4e390e611ea14f6508b09472241"],["/bundle.1dcfc.js","15b6a99526004891d6b7da6f9fa558ce"],["/favicon.ico","53ac170e970ad034a55ee15ce198708c"],["/index.html","de526400f65d04e4aa384582a20ae97f"],["/manifest.json","ac6d47f58644e1f38fd8356dffd11c0f"],["/route-Agenda.chunk.3dd68.js","a072e0a14c0f611c661e05ddc28f8aa1"],["/route-DroneRacing.chunk.110b1.js","ac2250a9a67bec33ea6d12fcbca75992"],["/route-Home.chunk.1f71c.js","2e6d00a46ec2aeffdbf1b78c0bbead6e"],["/route-KeepInTouch.chunk.49582.js","a11ecff892ca51968d4f0a860cf6154c"],["/route-Prizes.chunk.363d2.js","c6af6c48557fcdaebd5c2b1760385523"],["/route-PureLotto.chunk.1388d.js","ad28aa384d5f5759b1f02bd26c26254c"],["/route-Raffle.chunk.9140a.js","7e0c99a81f0cfc0148d6d11189285ba6"],["/route-SocialPosts.chunk.6f765.js","103c1791dc33931ecfb16bb1be31a6a2"],["/route-Speaker.chunk.91e7d.js","22cef439f13242d2469fe14a7e293b91"],["/route-Speakers.chunk.0c176.js","e4ad11b9eb60a3878405752109966da5"],["/route-Topic.chunk.21dcf.js","f88bf357f81ed4a0deba38bca9e10b79"],["/route-Topics.chunk.407b8.js","7bae77a44f3c8041db89e78a7b787f4c"],["/route-Vendors.chunk.92000.js","acf82232f51509343713ac9b943e5d31"],["/style.3a17d.css","67fa9856e89687bc6aba8dd011892b80"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,s){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=s),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(s){return new Response(s,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,s,a,c){var t=new URL(e);return c&&t.pathname.match(c)||(t.search+=(t.search?"&":"")+encodeURIComponent(s)+"="+encodeURIComponent(a)),t.toString()},isPathWhitelisted=function(e,s){if(0===e.length)return!0;var a=new URL(s).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,s){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return s.every(function(s){return!s.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var s=e[0],a=e[1],c=new URL(s,self.location),t=createCacheKey(c,hashParamName,a,!1);return[c.toString(),t]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(s){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!s.has(a)){var c=new Request(a,{credentials:"same-origin"});return fetch(c).then(function(s){if(!s.ok)throw new Error("Request for "+a+" returned a response with status "+s.status);return cleanResponse(s).then(function(s){return e.put(a,s)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var s=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!s.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var s,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(s=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,"index.html"),s=urlsToCacheKeys.has(a));!s&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL("index.html",self.location).toString(),s=urlsToCacheKeys.has(a)),s&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(s){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,s),fetch(e.request)}))}});