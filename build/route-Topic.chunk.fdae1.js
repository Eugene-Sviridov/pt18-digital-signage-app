webpackJsonp([0],{"1N9l":function(e){e.exports={speakerInfo:"speakerInfo__1Bkim"}},"2oXY":function(e){e.exports={infoContainer:"infoContainer__4W0G8",fadeIn:"fadeIn__3OMEk",isSpeaker:"isSpeaker__3eoj5",infoImg:"infoImg__2hw3g",infoHeader:"infoHeader__hLzAt",even:"even__mgbcz",odd:"odd__3laq8",imgWrapper:"imgWrapper__3yq-T",descriptionContainer:"descriptionContainer__pIb-2",descriptionWrapper:"descriptionWrapper__2pFtL",name:"name__2Q9Ft",title:"title__2ixCZ",smallTitle:"smallTitle__2WkU4",info:"info__yRbpd"}},XZzT:function(){},Y5KC:function(e,t,n){"use strict";function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function p(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var u=n("KM04"),f=n("2oXY"),d=n.n(f),h=n("9qb7"),y=n.n(h),b=function(e){function t(){return o(this,e.apply(this,arguments))}return i(t,e),t.prototype.render=function(e){var t,n=e.src,o=e.odd,i=y()(d.a.infoHeader,(t={},t[d.a.odd]=o,t[d.a.even]=!o,t));return Object(u.h)("div",{className:i},Object(u.h)("div",{className:d.a.imgWrapper},Object(u.h)("img",{className:d.a.infoImg,src:n})))},t}(u.Component),m=function(e){function t(){return r(this,t),a(this,e.apply(this,arguments))}return s(t,e),t.prototype.render=function(e){var t,n=e.name,o=e.title,i=e.smallTitle,r=e.info,a=e.odd,s=y()(d.a.descriptionWrapper,(t={},t[d.a.odd]=a,t[d.a.even]=!a,t));return Object(u.h)("div",{className:d.a.descriptionContainer},Object(u.h)("div",{className:s},Object(u.h)("div",{className:d.a.name},n),Object(u.h)("div",{className:d.a.title},o),Object(u.h)("div",{className:d.a.smallTitle},i),Object(u.h)("div",{className:d.a.info},r)))},t}(u.Component);n.d(t,"a",function(){return g});var g=function(e){function t(){return c(this,t),l(this,e.apply(this,arguments))}return p(t,e),t.prototype.render=function(e){var t,n=e.item,o=e.odd,i=e.imgBorder,r=e.isSpeaker,a=n.src,s=n.title,c=n.smallTitle,l=n.name,p=n.info,f=y()(d.a.infoContainer,(t={},t[d.a.isSpeaker]=r,t));return Object(u.h)("div",{class:f},Object(u.h)(b,{src:a,odd:o,imgBorder:i}),Object(u.h)(m,{name:l,title:s,smallTitle:c,info:p,odd:o}))},t}(u.Component)},cC0U:function(e,t,n){"use strict";function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var c=n("KM04"),l=(n("XZzT"),n("5tJ/")),p=n("wRQ8"),u=(n("1N9l"),n("Y5KC")),f=function(e){function t(){return o(this,e.apply(this,arguments))}return i(t,e),t.prototype.render=function(e){var t=e.topic;return Object(c.h)(u.a,{item:t,odd:!0,imgBorder:!0})},t}(c.Component),d=n("UiAd");n.d(t,"default",function(){return h});var h=function(e){function t(){return r(this,t),a(this,e.apply(this,arguments))}return s(t,e),t.prototype.render=function(e){var t=e.url,n=Object(d.a)(t,p.a);return Object(c.h)(l.a,{shape:!0,thirdStyle:!0},Object(c.h)(f,{topic:n}))},t}(c.Component)},wRQ8:function(e,t){"use strict";t.a=[{src:"../../assets/topics/machine-learning.png",title:"AI & Advanced Machine Learning.",info:"AI changes the world. There is no doubt that digital applications are becoming increasingly complex and capable. In the USA, AI is already being used to fashion legal documents, doctors are using AI for diagnosis and treatment. Whether the digital assistant is called Alexa, Cortana or Siri, a measure of AI is always involved. At pt18 visitors can see how the unlimited opportunities offered by AI translate into new business.",id:"1"},{src:"../../assets/topics/virtual-reality.png",title:"augmented and virtual reality.",info:"By 2018, the total number of active virtual reality users is expected to reach 171 million. Revenue generated from virtual reality products worldwide is forecast to reach £4 billion by that time. In less than 10 years, the global market is expected to rival today’s market for PCs. And indeed, there appear to be no limits on the commercial benefits attached to using VR. pt18 will feature the latest innovations in Augmented and Virtual Reality.",id:"2"},{src:"../../assets/topics/blockchain.png",title:"blockchain.",info:"2017 was an exciting year for Blockchain. Today, we see adopters in business environments in nearly every industry, ranging from financial and banking, through to manufacturing and supply chain all the way to intellectual property, healthcare or real estate. At pt18 you’ll see not only see the disruptive potential of Blockchain, but some of the latest currencies and applications using this decentralised and forgery-proof database.",id:"3"},{src:"../../assets/topics/drones.png",title:"drones.",info:"Until just a few years ago, drones or unmanned aerial vehicles (UAV) were restricted to military use. Today they’re a mass phenomenon. Controlled via smartphone and equipped with high-resolution cameras, they have applications for business as well as personal use. The potential is huge – and is likely to grow at a rapid pace. At pt18 you can gets hands on with the latest drone technology from the world’s leading brands.",id:"4"},{src:"../../assets/topics/hyperconvergence.png",title:"hyperconvergence.",info:"IT infrastructure has previously relied on interoperability between network, compute, storage and control but this approach adds complexity and cost. A converged design can reduce recurring costs for power, cooling and space whilst making support much easier through a ‘single pane of glass’. At pt18 find out more about what Hyperconvergence is and how future converged technology can help you achieve simplicity.",id:"5"},{src:"../../assets/topics/things-of-interest.png",title:"internet of things.",info:"Everything is online: by 2020 some 50 billion devices will be connected – resulting in countless new applications, business ideas and opportunities. Connected devices are appearing everywhere, transforming business models and our daily lives. From smart homes to smart offices, welcome to the IoT era. At pt18 learn more about the future of SMART everything, see the latest products and find out what IoT will mean to you.",id:"6"},{src:"../../assets/topics/mobility.png",title:"mobility.",info:"Uber, Mytaxi, eMobility, autonomous driving and global car manufacturers that are metamorphosing into mobility service providers: In an age of digitisation, the face of mobility is changing faster than almost any other sector of industry. In the future, cars will no longer merely be a means of going from A to B, they will also function as data providers, Internet nodes and a place for entertainment. pt18 will demonstrate the face of smart mobility in our digital future.",id:"7"},{src:"../../assets/topics/security.png",title:"security.",info:"Cyber-security is one of the country’s biggest concerns, and will be one of the technology sectors biggest markets moving into 2018. Cybercrime, the Dark Web, hackers: Illegal attacks on corporate and data networks are causing billions of pounds. At pt18 discover how our 3-tier security model, backed by leading security products, stops cyber-crime in business from inception all the way through to end-point.",id:"8"},{src:"../../assets/topics/communication.png",title:"communications.",info:"Cyber-security is one of the country’s biggest concerns, and will be one of the technology sectors biggest markets moving into 2018. Cybercrime, the Dark Web, hackers: Illegal attacks on corporate and data networks are causing billions of pounds. At pt18 discover how our 3-tier security model, backed by leading security products, stops cyber-crime in business from inception all the way through to end-point.",id:"9"}]}});
//# sourceMappingURL=route-Topic.chunk.fdae1.js.map