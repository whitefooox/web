(()=>{var e,t,r={},o={};function a(e){var t=o[e];if(void 0!==t)return t.exports;var n=o[e]={exports:{}};return r[e](n,n.exports,a),n.exports}a.m=r,a.d=(e,t)=>{for(var r in t)a.o(t,r)&&!a.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},a.f={},a.e=e=>Promise.all(Object.keys(a.f).reduce(((t,r)=>(a.f[r](e,t),t)),[])),a.u=e=>e+".bundle.js",a.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),e={},t="target:",a.l=(r,o,n,i)=>{if(e[r])e[r].push(o);else{var u,l;if(void 0!==n)for(var c=document.getElementsByTagName("script"),s=0;s<c.length;s++){var d=c[s];if(d.getAttribute("src")==r||d.getAttribute("data-webpack")==t+n){u=d;break}}u||(l=!0,(u=document.createElement("script")).charset="utf-8",u.timeout=120,a.nc&&u.setAttribute("nonce",a.nc),u.setAttribute("data-webpack",t+n),u.src=r),e[r]=[o];var p=(t,o)=>{u.onerror=u.onload=null,clearTimeout(f);var a=e[r];if(delete e[r],u.parentNode&&u.parentNode.removeChild(u),a&&a.forEach((e=>e(o))),t)return t(o)},f=setTimeout(p.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=p.bind(null,u.onerror),u.onload=p.bind(null,u.onload),l&&document.head.appendChild(u)}},a.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;a.g.importScripts&&(e=a.g.location+"");var t=a.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),a.p=e})(),(()=>{var e={143:0};a.f.j=(t,r)=>{var o=a.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else{var n=new Promise(((r,a)=>o=e[t]=[r,a]));r.push(o[2]=n);var i=a.p+a.u(t),u=new Error;a.l(i,(r=>{if(a.o(e,t)&&(0!==(o=e[t])&&(e[t]=void 0),o)){var n=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;u.message="Loading chunk "+t+" failed.\n("+n+": "+i+")",u.name="ChunkLoadError",u.type=n,u.request=i,o[1](u)}}),"chunk-"+t,t)}};var t=(t,r)=>{var o,n,[i,u,l]=r,c=0;if(i.some((t=>0!==e[t]))){for(o in u)a.o(u,o)&&(a.m[o]=u[o]);l&&l(a)}for(t&&t(r);c<i.length;c++)n=i[c],a.o(e,n)&&e[n]&&e[n][0](),e[n]=0},r=self.webpackChunktarget=self.webpackChunktarget||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})(),(async()=>{const e=(await a.e(778).then(a.bind(a,778))).RouterFactory.createInstance();e.add("auth","x-auth-page"),e.add("main","x-main-page"),e.default("auth"),e.go()})()})();