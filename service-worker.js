"use strict";var precacheConfig=[["/index.html","008ebce0f4c03c45a5331c796acd693c"],["/static/css/main.9710c483.css","3a6575555a47601eb1265cb5fe098de7"],["/static/js/main.5933a95e.js","d5eace03455a7d13d1e391afbebf7e90"],["/static/media/DevIcons-01.0c3a2bb9.svg","0c3a2bb9ca1c674069cf44b85b5ae7e4"],["/static/media/DevIcons-03.7b72a91f.svg","7b72a91ff9b901c6324b5548146555d6"],["/static/media/DevIcons-04.2a47d0b2.svg","2a47d0b226b0a3136a6c87acd7b19a51"],["/static/media/DevIcons-05.42be3ee9.svg","42be3ee965fc5257a58276886ba01b70"],["/static/media/DevIcons-06.465a6879.svg","465a6879c54f9fcd885bea12b733b4f3"],["/static/media/DevIcons-07.7d9becbd.svg","7d9becbd0026c539d7b8bb6cdbd1bc0c"],["/static/media/DevIcons-08.cae35285.svg","cae352852a6472c147c7fac5da7c9d72"],["/static/media/DevIcons-09.81214897.svg","81214897760f08124fb96107a0b99a34"],["/static/media/DevIcons-10.f12019c1.svg","f12019c1fe2c3f6e6a33e465d7cd2d5b"],["/static/media/DevIcons-11.af46b145.svg","af46b145f2163b14a47ce4de9e3ecceb"],["/static/media/DevIcons-12.d879fa81.svg","d879fa81edf7b4f81fa8d4c411928d27"],["/static/media/DevIcons-13.7963a678.svg","7963a67853a3c652b40a6e41816e2609"],["/static/media/DevIcons-14.edd89d41.svg","edd89d41981b3d8ae5d16a42c7820e42"],["/static/media/DevIcons-15.5b9ab947.svg","5b9ab94730f449c4844b19c77922e1f1"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,n){var c=new URL(e);return n&&c.pathname.match(n)||(c.search+=(c.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),c.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),c=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),c]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),e=urlsToCacheKeys.has(a));var c="/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(c,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});