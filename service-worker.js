/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["/404.html","efa04dada44e2cc6cc0501e00b6334ec"],["/First-Post/index.html","8175d174f9d22cd4a339213532f82dd6"],["/K/index.html","7378c9779e6d8b0204e0c2a5230f596e"],["/MusicList/index.html","c32cf14ac6ec806071fb807f700b95f9"],["/about/index.html","d7303d74603bceacb5cf9c5156a897ac"],["/archives/1997/11/index.html","2c11d17c7ff98455751a09e28d604414"],["/archives/1997/index.html","665027fb653b5b93e6cbb3977ba15059"],["/archives/2018/11/index.html","8167de9dce4b55da760fe2918d0cf3da"],["/archives/2018/index.html","1217dad06560db773fd52e24a6c064a2"],["/archives/index.html","e14d848673b898ecdef3971b2b95c652"],["/atom.xml","5a228bf2b684f4dac97a0ca8e5bd7f87"],["/categories/index.html","b3423db094040f4c22ed27bcc11a7cd0"],["/content.json","49b97c26165e10027f0b7c4f7e30dccf"],["/content.zh-cn.json","e966f486c733f5f2f385400a3a397889"],["/css/insight.css","2bdc5c53bf7340ce9b848d36cc72fe11"],["/css/style.css","380f0825c2bcbfdef4d539efb4a11fd1"],["/hello-world/index.html","056be4cd8f98e9d16a719fb4008792a8"],["/images/MiNE.jpg","b34116ce8ea5f8540795c928f5ba3bf4"],["/images/NOeSIS-01.jpg","b3c42af56be98a2441296e86e9068e81"],["/images/Persona-5-the-Animation.jpg","a6c3f7a7e7066f84d22670eb1c41ce07"],["/images/RIME.jpg","fba5841a48f1123410b709c93c87187c"],["/images/This-Girl.jpg","97275325a967782bf661626a88d08334"],["/images/This-Girl.png","8a721c22ac1fd3fb7cc1a8a252717c1c"],["/images/avatar.jpg","691ad2314946a927930cb8386adbc5d3"],["/images/check.svg","187eebb73566f943f0ecfd69d719d9cd"],["/images/cmus.jpg","60a6aa157c3a468b5f1d2b9c4f7b1b01"],["/images/exclamation.svg","956144288533fd92a2f86a119a3489c6"],["/images/icons/icon-128x128.png","2eedbac54fc268b503e0addb2b85cad3"],["/images/icons/icon-144x144.png","b2eb1925cf891c20c4a6031cbd775609"],["/images/icons/icon-152x152.png","9bcd2ffcf6a798da67eaeb98d9b5a392"],["/images/icons/icon-192x192.png","445fdc745d8fff987df3436181fb6bda"],["/images/icons/icon-384x384.png","e2a820a323967dc72e60d3495d682eff"],["/images/icons/icon-512x512.png","f315d72dfd328c438aba4b0915f6fd18"],["/images/icons/icon-72x72.png","1e8a8773e7f5cc30cc8fd94ea8afad67"],["/images/icons/icon-96x96.png","17f8b739ce28269c4c220fe361eb8770"],["/images/info.svg","855fb51e1d183211eca3f3383e46f0d4"],["/images/logo.png","8a97aec8a1353996a5c15349b47ebff0"],["/images/question.svg","3d7889573812152e2edbb4fd8d7fc6e6"],["/images/quote-left.svg","a2015d7d8325ae4924bdfea582bef687"],["/index.html","fead22d2253066a419f321cfcb4155bb"],["/js/insight.js","17eafb6bba4b66084e667c762a7f231e"],["/js/script.js","c5672a326a446dc60e35f05133525146"],["/manifest.json","4cc8784cf884415193f26f6526a8f960"],["/source/manifest.json","e0b964b88dabd909ea0a37a74707aded"],["/sw.js","c1179dd1862b763e0863168357253826"],["/tags/index.html","67142d2859d7393277394620e494b4e5"],["/zh-cn/404.html","12cb6451269f375204c186de84a2e607"],["/zh-cn/First-Post/index.html","ae63fc422d4a5c3d18850ac0a53d1760"],["/zh-cn/about/index.html","25aa8b7557cbe80afcb2afa62b086b3e"],["/zh-cn/archives/2018/11/index.html","498c20075e36ef4eb6173bde5e270379"],["/zh-cn/archives/2018/index.html","ef685a2ae5854755e9cade7ed961b585"],["/zh-cn/archives/index.html","d566009b674fe276e1e6799bbe87dcc9"],["/zh-cn/categories/index.html","edadad23de863ee8ebbed776f0b98697"],["/zh-cn/index.html","ce9c18c7013a84b273f38d47a4c1354d"],["/zh-cn/tags/index.html","9e8df515b01ce0a1610c0d022be3df32"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







