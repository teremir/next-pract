if(!self.define){let e,s={};const a=(a,n)=>(a=new URL(a+".js",n).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(n,t)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let c={};const r=e=>a(e,i),o={module:{uri:i},exports:c,require:r};s[i]=Promise.all(n.map((e=>o[e]||r(e)))).then((e=>(t(...e),c)))}}define(["./workbox-1846d813"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/4vDf9JBQwYxPNPnItafZB/_buildManifest.js",revision:"4vDf9JBQwYxPNPnItafZB"},{url:"/_next/static/4vDf9JBQwYxPNPnItafZB/_ssgManifest.js",revision:"4vDf9JBQwYxPNPnItafZB"},{url:"/_next/static/chunks/542-29e0a9a1ad70e0210c2e.js",revision:"4vDf9JBQwYxPNPnItafZB"},{url:"/_next/static/chunks/framework-895f067827ebe11ffe45.js",revision:"4vDf9JBQwYxPNPnItafZB"},{url:"/_next/static/chunks/main-d29cdecb75b98670777f.js",revision:"4vDf9JBQwYxPNPnItafZB"},{url:"/_next/static/chunks/pages/_app-6a7c9ef46df646f99424.js",revision:"4vDf9JBQwYxPNPnItafZB"},{url:"/_next/static/chunks/pages/_error-737a04e9a0da63c9d162.js",revision:"4vDf9JBQwYxPNPnItafZB"},{url:"/_next/static/chunks/pages/checkout-6ddf19aa5a0acac2666e.js",revision:"4vDf9JBQwYxPNPnItafZB"},{url:"/_next/static/chunks/pages/index-9e3a60c7fed3129f5827.js",revision:"4vDf9JBQwYxPNPnItafZB"},{url:"/_next/static/chunks/polyfills-a40ef1678bae11e696dba45124eadd70.js",revision:"4vDf9JBQwYxPNPnItafZB"},{url:"/_next/static/chunks/webpack-fb76148cfcfb42ca18eb.js",revision:"4vDf9JBQwYxPNPnItafZB"},{url:"/_next/static/css/0ff67a35ecff5ba292a1.css",revision:"4vDf9JBQwYxPNPnItafZB"},{url:"/_next/static/css/b41cbecdc286472392b5.css",revision:"4vDf9JBQwYxPNPnItafZB"},{url:"/_next/static/css/d712b25cc4a5d9a68f00.css",revision:"4vDf9JBQwYxPNPnItafZB"},{url:"/_next/static/image/src/assets/icons/bt_add_to_cart.c13587f7a917cacfc4722859eba06bca.svg",revision:"4vDf9JBQwYxPNPnItafZB"},{url:"/_next/static/image/src/assets/icons/bt_added_to_cart.ac33eec52215a7cb4613b5daa37f0532.svg",revision:"4vDf9JBQwYxPNPnItafZB"},{url:"/_next/static/image/src/assets/icons/flechita.e419d8c93e852173b9b8261835467277.svg",revision:"4vDf9JBQwYxPNPnItafZB"},{url:"/_next/static/image/src/assets/icons/icon_close.89e14351a9bf76ce26de370b3c8b8112.png",revision:"4vDf9JBQwYxPNPnItafZB"},{url:"/_next/static/image/src/assets/icons/icon_menu.3aa38c5e16715afedfa9b1adb8607b7d.svg",revision:"4vDf9JBQwYxPNPnItafZB"},{url:"/_next/static/image/src/assets/icons/icon_shopping_cart.6ee019074975f25fb7927a83133327c4.svg",revision:"4vDf9JBQwYxPNPnItafZB"},{url:"/_next/static/image/src/assets/logos/logo_yard_sale.f5c1d07e0dba172463639e02bacccd32.svg",revision:"4vDf9JBQwYxPNPnItafZB"},{url:"/favicon.ico",revision:"c30c7d42707a47a3f4591831641e50dc"},{url:"/icon-192x192.png",revision:"b67b6a38de26c9bf7b95814e85aad7de"},{url:"/icon-256x256.png",revision:"55c4e1619b58ea87e9f1de5317a3b269"},{url:"/icon-384x384.png",revision:"88cbc6d9b31ee623f51fb963abe82113"},{url:"/icon-512x512.png",revision:"15e667ae0e5be4761a7df8f0caa4cf04"},{url:"/manifest.json",revision:"d8aa120f026c59832bfc2d908abd3a04"},{url:"/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:n})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
