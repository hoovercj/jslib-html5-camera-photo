!function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n={};e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/jslib-html5-camera-photo/",e(e.s=4)}([function(t,e,n){"use strict";n.d(e,"b",function(){return i}),n.d(e,"c",function(){return a});var r=n(2),o=n(17);n.d(e,"a",function(){return o.a});var i=r.a.FACING_MODES,a=r.a.IMAGE_TYPES},function(t,e,n){"use strict";function r(){}function o(t){try{return t.then}catch(t){return v=t,g}}function i(t,e){try{return t(e)}catch(t){return v=t,g}}function a(t,e,n){try{t(e,n)}catch(t){return v=t,g}}function u(t){if("object"!==typeof this)throw new TypeError("Promises must be constructed via new");if("function"!==typeof t)throw new TypeError("Promise constructor's argument is not a function");this._75=0,this._83=0,this._18=null,this._38=null,t!==r&&p(t,this)}function s(t,e,n){return new t.constructor(function(o,i){var a=new u(r);a.then(o,i),c(t,new m(e,n,a))})}function c(t,e){for(;3===t._83;)t=t._18;if(u._47&&u._47(t),0===t._83)return 0===t._75?(t._75=1,void(t._38=e)):1===t._75?(t._75=2,void(t._38=[t._38,e])):void t._38.push(e);f(t,e)}function f(t,e){y(function(){var n=1===t._83?e.onFulfilled:e.onRejected;if(null===n)return void(1===t._83?l(e.promise,t._18):d(e.promise,t._18));var r=i(n,t._18);r===g?d(e.promise,v):l(e.promise,r)})}function l(t,e){if(e===t)return d(t,new TypeError("A promise cannot be resolved with itself."));if(e&&("object"===typeof e||"function"===typeof e)){var n=o(e);if(n===g)return d(t,v);if(n===t.then&&e instanceof u)return t._83=3,t._18=e,void h(t);if("function"===typeof n)return void p(n.bind(e),t)}t._83=1,t._18=e,h(t)}function d(t,e){t._83=2,t._18=e,u._71&&u._71(t,e),h(t)}function h(t){if(1===t._75&&(c(t,t._38),t._38=null),2===t._75){for(var e=0;e<t._38.length;e++)c(t,t._38[e]);t._38=null}}function m(t,e,n){this.onFulfilled="function"===typeof t?t:null,this.onRejected="function"===typeof e?e:null,this.promise=n}function p(t,e){var n=!1,r=a(t,function(t){n||(n=!0,l(e,t))},function(t){n||(n=!0,d(e,t))});n||r!==g||(n=!0,d(e,v))}var y=n(7),v=null,g={};t.exports=u,u._47=null,u._71=null,u._44=r,u.prototype.then=function(t,e){if(this.constructor!==u)return s(this,t,e);var n=new u(r);return c(this,new m(t,e,n)),n}},function(t,e,n){"use strict";var r=n(15);n.d(e,"a",function(){return r.a})},function(t,e,n){"use strict";function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}n.d(e,"e",function(){return i}),n.d(e,"a",function(){return a}),n.d(e,"f",function(){return u}),n.d(e,"c",function(){return s}),n.d(e,"b",function(){return c}),n.d(e,"d",function(){return f});var o,i=["user","environment"],a={USER:"user",ENVIRONMENT:"environment"},u=["jpg","png"],s={PNG:"png",JPG:"jpg"},c=(o={},r(o,"jpg","image/jpeg"),r(o,"png","image/png"),o),f={audio:!1,video:!0}},function(t,e,n){n(5),t.exports=n(12)},function(t,e,n){"use strict";"undefined"===typeof Promise&&(n(6).enable(),window.Promise=n(9)),n(10),Object.assign=n(11)},function(t,e,n){"use strict";function r(){c=!1,u._47=null,u._71=null}function o(t){function e(e){(t.allRejections||a(l[e].error,t.whitelist||s))&&(l[e].displayId=f++,t.onUnhandled?(l[e].logged=!0,t.onUnhandled(l[e].displayId,l[e].error)):(l[e].logged=!0,i(l[e].displayId,l[e].error)))}function n(e){l[e].logged&&(t.onHandled?t.onHandled(l[e].displayId,l[e].error):l[e].onUnhandled||(console.warn("Promise Rejection Handled (id: "+l[e].displayId+"):"),console.warn('  This means you can ignore any previous messages of the form "Possible Unhandled Promise Rejection" with id '+l[e].displayId+".")))}t=t||{},c&&r(),c=!0;var o=0,f=0,l={};u._47=function(t){2===t._83&&l[t._56]&&(l[t._56].logged?n(t._56):clearTimeout(l[t._56].timeout),delete l[t._56])},u._71=function(t,n){0===t._75&&(t._56=o++,l[t._56]={displayId:null,error:n,timeout:setTimeout(e.bind(null,t._56),a(n,s)?100:2e3),logged:!1})}}function i(t,e){console.warn("Possible Unhandled Promise Rejection (id: "+t+"):"),((e&&(e.stack||e))+"").split("\n").forEach(function(t){console.warn("  "+t)})}function a(t,e){return e.some(function(e){return t instanceof e})}var u=n(1),s=[ReferenceError,TypeError,RangeError],c=!1;e.disable=r,e.enable=o},function(t,e,n){"use strict";(function(e){function n(t){a.length||(i(),u=!0),a[a.length]=t}function r(){for(;s<a.length;){var t=s;if(s+=1,a[t].call(),s>c){for(var e=0,n=a.length-s;e<n;e++)a[e]=a[e+s];a.length-=s,s=0}}a.length=0,s=0,u=!1}function o(t){return function(){function e(){clearTimeout(n),clearInterval(r),t()}var n=setTimeout(e,0),r=setInterval(e,50)}}t.exports=n;var i,a=[],u=!1,s=0,c=1024,f="undefined"!==typeof e?e:self,l=f.MutationObserver||f.WebKitMutationObserver;i="function"===typeof l?function(t){var e=1,n=new l(t),r=document.createTextNode("");return n.observe(r,{characterData:!0}),function(){e=-e,r.data=e}}(r):o(r),n.requestFlush=i,n.makeRequestCallFromTimer=o}).call(e,n(8))},function(t,e){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(t){"object"===typeof window&&(n=window)}t.exports=n},function(t,e,n){"use strict";function r(t){var e=new o(o._44);return e._83=1,e._18=t,e}var o=n(1);t.exports=o;var i=r(!0),a=r(!1),u=r(null),s=r(void 0),c=r(0),f=r("");o.resolve=function(t){if(t instanceof o)return t;if(null===t)return u;if(void 0===t)return s;if(!0===t)return i;if(!1===t)return a;if(0===t)return c;if(""===t)return f;if("object"===typeof t||"function"===typeof t)try{var e=t.then;if("function"===typeof e)return new o(e.bind(t))}catch(t){return new o(function(e,n){n(t)})}return r(t)},o.all=function(t){var e=Array.prototype.slice.call(t);return new o(function(t,n){function r(a,u){if(u&&("object"===typeof u||"function"===typeof u)){if(u instanceof o&&u.then===o.prototype.then){for(;3===u._83;)u=u._18;return 1===u._83?r(a,u._18):(2===u._83&&n(u._18),void u.then(function(t){r(a,t)},n))}var s=u.then;if("function"===typeof s){return void new o(s.bind(u)).then(function(t){r(a,t)},n)}}e[a]=u,0===--i&&t(e)}if(0===e.length)return t([]);for(var i=e.length,a=0;a<e.length;a++)r(a,e[a])})},o.reject=function(t){return new o(function(e,n){n(t)})},o.race=function(t){return new o(function(e,n){t.forEach(function(t){o.resolve(t).then(e,n)})})},o.prototype.catch=function(t){return this.then(null,t)}},function(t,e){!function(t){"use strict";function e(t){if("string"!==typeof t&&(t=String(t)),/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(t))throw new TypeError("Invalid character in header field name");return t.toLowerCase()}function n(t){return"string"!==typeof t&&(t=String(t)),t}function r(t){var e={next:function(){var e=t.shift();return{done:void 0===e,value:e}}};return v.iterable&&(e[Symbol.iterator]=function(){return e}),e}function o(t){this.map={},t instanceof o?t.forEach(function(t,e){this.append(e,t)},this):Array.isArray(t)?t.forEach(function(t){this.append(t[0],t[1])},this):t&&Object.getOwnPropertyNames(t).forEach(function(e){this.append(e,t[e])},this)}function i(t){if(t.bodyUsed)return Promise.reject(new TypeError("Already read"));t.bodyUsed=!0}function a(t){return new Promise(function(e,n){t.onload=function(){e(t.result)},t.onerror=function(){n(t.error)}})}function u(t){var e=new FileReader,n=a(e);return e.readAsArrayBuffer(t),n}function s(t){var e=new FileReader,n=a(e);return e.readAsText(t),n}function c(t){for(var e=new Uint8Array(t),n=new Array(e.length),r=0;r<e.length;r++)n[r]=String.fromCharCode(e[r]);return n.join("")}function f(t){if(t.slice)return t.slice(0);var e=new Uint8Array(t.byteLength);return e.set(new Uint8Array(t)),e.buffer}function l(){return this.bodyUsed=!1,this._initBody=function(t){if(this._bodyInit=t,t)if("string"===typeof t)this._bodyText=t;else if(v.blob&&Blob.prototype.isPrototypeOf(t))this._bodyBlob=t;else if(v.formData&&FormData.prototype.isPrototypeOf(t))this._bodyFormData=t;else if(v.searchParams&&URLSearchParams.prototype.isPrototypeOf(t))this._bodyText=t.toString();else if(v.arrayBuffer&&v.blob&&b(t))this._bodyArrayBuffer=f(t.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer]);else{if(!v.arrayBuffer||!ArrayBuffer.prototype.isPrototypeOf(t)&&!w(t))throw new Error("unsupported BodyInit type");this._bodyArrayBuffer=f(t)}else this._bodyText="";this.headers.get("content-type")||("string"===typeof t?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):v.searchParams&&URLSearchParams.prototype.isPrototypeOf(t)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},v.blob&&(this.blob=function(){var t=i(this);if(t)return t;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?i(this)||Promise.resolve(this._bodyArrayBuffer):this.blob().then(u)}),this.text=function(){var t=i(this);if(t)return t;if(this._bodyBlob)return s(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(c(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},v.formData&&(this.formData=function(){return this.text().then(m)}),this.json=function(){return this.text().then(JSON.parse)},this}function d(t){var e=t.toUpperCase();return _.indexOf(e)>-1?e:t}function h(t,e){e=e||{};var n=e.body;if(t instanceof h){if(t.bodyUsed)throw new TypeError("Already read");this.url=t.url,this.credentials=t.credentials,e.headers||(this.headers=new o(t.headers)),this.method=t.method,this.mode=t.mode,n||null==t._bodyInit||(n=t._bodyInit,t.bodyUsed=!0)}else this.url=String(t);if(this.credentials=e.credentials||this.credentials||"omit",!e.headers&&this.headers||(this.headers=new o(e.headers)),this.method=d(e.method||this.method||"GET"),this.mode=e.mode||this.mode||null,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&n)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(n)}function m(t){var e=new FormData;return t.trim().split("&").forEach(function(t){if(t){var n=t.split("="),r=n.shift().replace(/\+/g," "),o=n.join("=").replace(/\+/g," ");e.append(decodeURIComponent(r),decodeURIComponent(o))}}),e}function p(t){var e=new o;return t.split(/\r?\n/).forEach(function(t){var n=t.split(":"),r=n.shift().trim();if(r){var o=n.join(":").trim();e.append(r,o)}}),e}function y(t,e){e||(e={}),this.type="default",this.status="status"in e?e.status:200,this.ok=this.status>=200&&this.status<300,this.statusText="statusText"in e?e.statusText:"OK",this.headers=new o(e.headers),this.url=e.url||"",this._initBody(t)}if(!t.fetch){var v={searchParams:"URLSearchParams"in t,iterable:"Symbol"in t&&"iterator"in Symbol,blob:"FileReader"in t&&"Blob"in t&&function(){try{return new Blob,!0}catch(t){return!1}}(),formData:"FormData"in t,arrayBuffer:"ArrayBuffer"in t};if(v.arrayBuffer)var g=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],b=function(t){return t&&DataView.prototype.isPrototypeOf(t)},w=ArrayBuffer.isView||function(t){return t&&g.indexOf(Object.prototype.toString.call(t))>-1};o.prototype.append=function(t,r){t=e(t),r=n(r);var o=this.map[t];this.map[t]=o?o+","+r:r},o.prototype.delete=function(t){delete this.map[e(t)]},o.prototype.get=function(t){return t=e(t),this.has(t)?this.map[t]:null},o.prototype.has=function(t){return this.map.hasOwnProperty(e(t))},o.prototype.set=function(t,r){this.map[e(t)]=n(r)},o.prototype.forEach=function(t,e){for(var n in this.map)this.map.hasOwnProperty(n)&&t.call(e,this.map[n],n,this)},o.prototype.keys=function(){var t=[];return this.forEach(function(e,n){t.push(n)}),r(t)},o.prototype.values=function(){var t=[];return this.forEach(function(e){t.push(e)}),r(t)},o.prototype.entries=function(){var t=[];return this.forEach(function(e,n){t.push([n,e])}),r(t)},v.iterable&&(o.prototype[Symbol.iterator]=o.prototype.entries);var _=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];h.prototype.clone=function(){return new h(this,{body:this._bodyInit})},l.call(h.prototype),l.call(y.prototype),y.prototype.clone=function(){return new y(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new o(this.headers),url:this.url})},y.error=function(){var t=new y(null,{status:0,statusText:""});return t.type="error",t};var E=[301,302,303,307,308];y.redirect=function(t,e){if(-1===E.indexOf(e))throw new RangeError("Invalid status code");return new y(null,{status:e,headers:{location:t}})},t.Headers=o,t.Request=h,t.Response=y,t.fetch=function(t,e){return new Promise(function(n,r){var o=new h(t,e),i=new XMLHttpRequest;i.onload=function(){var t={status:i.status,statusText:i.statusText,headers:p(i.getAllResponseHeaders()||"")};t.url="responseURL"in i?i.responseURL:t.headers.get("X-Request-URL");var e="response"in i?i.response:i.responseText;n(new y(e,t))},i.onerror=function(){r(new TypeError("Network request failed"))},i.ontimeout=function(){r(new TypeError("Network request failed"))},i.open(o.method,o.url,!0),"include"===o.credentials&&(i.withCredentials=!0),"responseType"in i&&v.blob&&(i.responseType="blob"),o.headers.forEach(function(t,e){i.setRequestHeader(e,t)}),i.send("undefined"===typeof o._bodyInit?null:o._bodyInit)})},t.fetch.polyfill=!0}}("undefined"!==typeof self?self:this)},function(t,e,n){"use strict";function r(t){if(null===t||void 0===t)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(t)}var o=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable;t.exports=function(){try{if(!Object.assign)return!1;var t=new String("abc");if(t[5]="de","5"===Object.getOwnPropertyNames(t)[0])return!1;for(var e={},n=0;n<10;n++)e["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(e).map(function(t){return e[t]}).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach(function(t){r[t]=t}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(t){return!1}}()?Object.assign:function(t,e){for(var n,u,s=r(t),c=1;c<arguments.length;c++){n=Object(arguments[c]);for(var f in n)i.call(n,f)&&(s[f]=n[f]);if(o){u=o(n);for(var l=0;l<u.length;l++)a.call(n,u[l])&&(s[u[l]]=n[u[l]])}}return s}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});n(13)},function(t,e,n){"use strict";function r(){T.startCamera().then(function(){console.log("Camera started with default All")}).catch(function(t){console.error("Camera not started!",t)})}function o(){var t=y.value;T.startCamera(d.a[t]).then(function(){var e="Camera started with default resolution and prefered facingMode : "+t;console.log(e)}).catch(function(t){console.error("Camera not started!",t)})}function i(){var t=d.b.JPG,e={sizeFactor:1,imageType:t,imageCompression:1},n=T.getDataUri(e);p.src=n}function a(){var t=d.b.JPG,e={sizeFactor:1,imageType:t,imageCompression:1},n=T.getDataUri(e);Object(d.d)(n,"myPhoto",1),p.src=n}function u(){var t=T.getCameraSettings(),e="No active camera";if(t){e="\n        <b>Current active camera:</b>\n        aspectRatio:"+t.aspectRatio+"\n        frameRate: "+t.frameRate+"\n        height: "+t.height+"\n        width: "+t.width+"\n    "}I.innerHTML=e}function s(){T.enumerateCameras().then(function(t){if(t&&t.length>0){var e=document.getElementById("cameraButtonsContainerId");e.innerHTML="";var n=document.createElement("h3");n.innerText="Choose your camera :",e.appendChild(n),t.forEach(function(t){var n=t.kind,r=t.label,o=t.deviceId,i=document.createElement("button");i.innerHTML="\n            kind: "+n+" <br/>\n            label: "+r+" <br/>\n            deviceId: "+o+"\n          ",function(t){i.addEventListener("click",function(){console.log("click on",t),f(t)})}(o),e.appendChild(i)})}})}function c(){T.stopCamera().then(function(){console.log("Camera stoped!")}).catch(function(t){console.log("No camera to stop!:",t)})}function f(t){T.startCameraMaxResolution(t).then(function(){var e="Camera started with maximum resoluton and prefered deviceId: "+t+" ";console.log(e)}).catch(function(t){console.error("Camera not started!",t)})}function l(){var t=y.value;T.startCameraMaxResolution(d.a[t]).then(function(){var e="Camera started with maximum resoluton and prefered facingMode: "+t+" ";console.log(e)}).catch(function(t){console.error("Camera not started!",t)})}var d=n(14),h=n(21),m=(n.n(h),document.getElementById("videoId")),p=document.getElementById("imgId"),y=document.getElementById("facingModeSelectId"),v=document.getElementById("startDefaultAllButtonId"),g=document.getElementById("startDefaultResolutionButtonId"),b=document.getElementById("startMaxResolutionId"),w=document.getElementById("takePhotoButtonId"),_=document.getElementById("takePhotoAndDownloadButtonId"),E=document.getElementById("stopCameraButtonId"),I=document.getElementById("cameraSettingsId"),P=document.getElementById("showSwitchCameraButtonsId"),T=new d.c(m);document.addEventListener("DOMContentLoaded",function(){setInterval(function(){u()},500),v.onclick=r,g.onclick=o,b.onclick=l,w.onclick=i,_.onclick=a,E.onclick=c,P.onclick=s})},function(t,e,n){"use strict";var r=n(0);n.d(e,"a",function(){return r.b}),n.d(e,"b",function(){return r.c});var o=n(19);n.d(e,"d",function(){return o.a}),e.c=r.a},function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}n.d(e,"a",function(){return u});var o=n(16),i=n(3),a=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),u=function(){function t(){r(this,t)}return a(t,null,[{key:"getDataUri",value:function(t,e){var n=e.sizeFactor,r=e.imageType,i=e.imageCompression,a=e.isImageMirror,u=t.videoWidth,s=t.videoHeight,c=Object(o.b)(u,s,n),f=c.imageWidth,l=c.imageHeight,d=document.createElement("canvas");d.width=f,d.height=l;var h=d.getContext("2d");return a&&h.setTransform(-1,0,0,1,d.width,0),h.drawImage(t,0,0,f,l),Object(o.a)(d,r,i)}},{key:"getWindowURL",value:function(){return window.URL||window.webkitURL||window.mozURL||window.msURL}},{key:"getNavigatorMediaDevices",value:function(){var t=null,e=!(!navigator.mediaDevices||!navigator.mediaDevices.getUserMedia),n=!(!navigator.mozGetUserMedia&&!navigator.webkitGetUserMedia);if(e)t=navigator.mediaDevices;else if(n){var r=navigator.mozGetUserMedia||navigator.webkitGetUserMedia,o={getUserMedia:function(t){return new Promise(function(e,n){r.call(navigator,t,e,n)})}};t=Object.assign(r,o)}return t}},{key:"isSupportedFacingMode",value:function(){return t.getNavigatorMediaDevices().getSupportedConstraints().facingMode}},{key:"getIdealConstraints",value:function(e,n){var r={audio:!1,video:{}};if(Object(o.c)(e,n))return i.d;var a=t.getNavigatorMediaDevices().getSupportedConstraints();if(!a.width||!a.height)return console.error("Constraint width or height not supported! fallback to default resolution"),i.d;if(e){i.e.includes(e)?r.video.facingMode=e:r.video.deviceId={exact:e}}return n&&n.width&&(r.video.width=n.width),n&&n.height&&(r.video.height=n.height),r}},{key:"getMaxResolutionFallBackConstraints",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=arguments[1],r=t.getIdealConstraints(e),o=[{width:{min:640}},{width:{min:800}},{width:{min:900}},{width:{min:1024}},{width:{min:1080}},{width:{min:1280}},{width:{min:1920}},{width:{min:2560}},{width:{min:3840}}];if(n>=o.length)return null;var i=o.slice(0,-n);return r.video.advanced=i,r}},{key:"getMaxResolutionConstraints",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=arguments[1];if(n>1)return t.getMaxResolutionFallBackConstraints(e,n);var r={width:{min:640,ideal:3840},height:{min:480,ideal:2160}};return t.getIdealConstraints(e,r)}},{key:"FACING_MODES",get:function(){return i.a}},{key:"IMAGE_TYPES",get:function(){return i.c}}]),t}()},function(t,e,n){"use strict";function r(t,e){if(!(e>=0&&e<=1))throw new Error(e+" is invalid imageCompression, choose between: [0, 1]");if(!c.f.includes(t))throw new Error(t+" is invalid imageType, choose between: "+c.f.join(", "));return!0}function o(t,e){var n={};try{r(t,e),n.imageType=t,n.imageCompression=e}catch(t){console.error(t),console.error("default value of "+c.c.PNG+" is used"),n.imageType=c.c.PNG,n.imageCompression=null}return n}function i(t,e,n){var r=t*parseFloat(n);return{imageWidth:r,imageHeight:e/(t/r)}}function a(t,e,n){return o(e,n).imageType===c.c.JPG?n?t.toDataURL(c.b[c.c.JPG],n):t.toDataURL(c.b[c.c.JPG]):t.toDataURL(c.b[e])}function u(t){if("object"===("undefined"===typeof t?"undefined":f(t)))for(var e in t)if(t.hasOwnProperty(e))return!1;return!0}function s(t,e){return!(t||e&&!u(e))}e.b=i,e.a=a,e.c=s;var c=n(3),f="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t}},function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}n.d(e,"a",function(){return s});var o=n(2),i=n(18),a=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),u=o.a.IMAGE_TYPES.PNG,s=function(){function t(e){r(this,t),this.videoElement=e,this.stream=null,this.numberOfMaxResolutionTry=1,this.settings=null,this.cameras=[],this.windowURL=o.a.getWindowURL(),this.mediaDevices=o.a.getNavigatorMediaDevices()}return a(t,[{key:"_getStreamDevice",value:function(t,e){var n=this;return new Promise(function(r,i){var a=o.a.getIdealConstraints(t,e);n.mediaDevices.getUserMedia(a).then(function(t){n._gotStream(t),n._enumerateCamerasPromise().then(function(t){n.cameras=t}).catch(function(){}).then(function(){r(t,n.cameras)})}).catch(function(t){i(t)})})}},{key:"_getStreamDeviceMaxResolution",value:function(t){var e=this,n=o.a.getMaxResolutionConstraints(t,this.numberOfMaxResolutionTry);if(null==n){var r={};return this._getStreamDevice(t,r)}return new Promise(function(r,o){e.mediaDevices.getUserMedia(n).then(function(t){e._gotStream(t),e._enumerateCamerasPromise().then(function(t){e.cameras=t}).catch(function(){}).then(function(){r(t,e.cameras)})}).catch(function(n){setTimeout(function(){e.numberOfMaxResolutionTry+=1,e._getStreamDeviceMaxResolution(t).catch(function(){o(n)})},20)})})}},{key:"_setVideoSrc",value:function(t){if("srcObject"in this.videoElement)this.videoElement.srcObject=t;else{var e=this.windowURL.createObjectURL(t);this.videoElement.src=e}}},{key:"_setSettings",value:function(t){this.settings=null;var e=t&&t.getTracks?t.getTracks():[];e.length>0&&e[0].getSettings&&(this.settings=e[0].getSettings())}},{key:"_enumerateCamerasPromise",value:function(){var t=this;return new Promise(function(e,n){var r=[];t.mediaDevices.enumerateDevices().then(function(t){t.forEach(function(t){"videoinput"===t.kind&&t.deviceId&&r.push(t)}),e(r)}).catch(function(t){n(t)})})}},{key:"_gotStream",value:function(t){this.stream=t,this._setSettings(t),this._setVideoSrc(t)}},{key:"getCameraSettings",value:function(){return this.settings}},{key:"getInputVideoDeviceInfos",value:function(){return console.warn("Warning!: method getInputVideoDeviceInfos() will be depreciate"),this.cameras}},{key:"enumerateCameras",value:function(){var t=this;return this.stream?this._enumerateCamerasPromise():this.stopCamera().then(function(){}).catch(function(){}).then(function(){var e={video:!0};return t.mediaDevices.getUserMedia(e).then(function(t){setTimeout(function(){t.getTracks().forEach(function(t){t.stop()})},20)}).then(function(){}).catch(function(){}).then(function(){return t._enumerateCamerasPromise()})})}},{key:"startCamera",value:function(t,e){var n=this;return this.stopCamera().then(function(){}).catch(function(){}).then(function(){return n._getStreamDevice(t,e)})}},{key:"startCameraMaxResolution",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return this.stopCamera().then(function(){}).catch(function(){}).then(function(){return t._getStreamDeviceMaxResolution(e)})}},{key:"getDataUri",value:function(t){var e={sizeFactor:void 0===t.sizeFactor?i.c:t.sizeFactor,imageType:void 0===t.imageType?u:t.imageType,imageCompression:void 0===t.imageCompression?i.a:t.imageCompression,isImageMirror:void 0===t.isImageMirror?i.b:t.isImageMirror};return o.a.getDataUri(this.videoElement,e)}},{key:"stopCamera",value:function(){var t=this;return new Promise(function(e,n){t.stream&&(t.stream.getTracks().forEach(function(t){t.stop()}),t.videoElement.src="",t.stream=null,t._setSettings(null),e()),n(Error("no stream to stop!"))})}}]),t}()},function(t,e,n){"use strict";n.d(e,"c",function(){return r}),n.d(e,"a",function(){return o}),n.d(e,"b",function(){return i});var r=1,o=null,i=!1},function(t,e,n){"use strict";var r=n(20);n.d(e,"a",function(){return r.a})},function(t,e,n){"use strict";function r(t){for(var e=atob(t.split(",")[1]),n=t.split(",")[0].split(":")[1].split(";")[0],r=new ArrayBuffer(e.length),o=new Uint8Array(r),i=0;i<e.length;i++)o[i]=e.charCodeAt(i);return new Blob([r],{type:n})}function o(t,e){return t+="",t.length>=e?t:new Array(e-t.length+1).join("0")+t}function i(t){var e=c.c.PNG;return"image/jpeg"===t&&(e=c.c.JPG),e}function a(t,e,n){return t+"-"+o(e,4)+"."+i(n)}function u(t,e,n){window.URL=window.webkitURL||window.URL;var r=document.createElement("a");r.download=a(e,n,t.type),r.href=window.URL.createObjectURL(t);var o=document.createEvent("MouseEvents");o.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,0,null),r.dispatchEvent(o)}function s(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"photo",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;u(r(t),e,n)}e.a=s;var c=n(0)},function(t,e){}]);
//# sourceMappingURL=main.d1502744.js.map