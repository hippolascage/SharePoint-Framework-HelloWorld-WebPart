var debugManifests=function(s){function e(r){if(t[r])return t[r].exports;var i=t[r]={exports:{},id:r,loaded:!1};return s[r].call(i.exports,i,i.exports,e),i.loaded=!0,i.exports}var t={};return e.m=s,e.c=t,e.p="",e(0)}([function(s,e,t){"use strict";function r(){var s=JSON.parse(JSON.stringify(o));return s.forEach(function(s){var e=s.loaderConfig.internalModuleBaseUrls,t=n.parse(e[0]);e[0]=t.path}),s}function i(){return o}var n=t(1),o=t(7);e.getLocalPageManifests=r,e.getManifests=i},function(s,e,t){function r(){this.protocol=null,this.slashes=null,this.auth=null,this.host=null,this.port=null,this.hostname=null,this.hash=null,this.search=null,this.query=null,this.pathname=null,this.path=null,this.href=null}function i(s,e,t){if(s&&h(s)&&s instanceof r)return s;var i=new r;return i.parse(s,e,t),i}function n(s){return l(s)&&(s=i(s)),s instanceof r?s.format():r.prototype.format.call(s)}function o(s,e){return i(s,!1,!0).resolve(e)}function a(s,e){return s?i(s,!1,!0).resolveObject(e):e}function l(s){return"string"==typeof s}function h(s){return"object"==typeof s&&null!==s}function c(s){return null===s}function p(s){return null==s}var f=t(2);e.parse=i,e.resolve=o,e.resolveObject=a,e.format=n,e.Url=r;var u=/^([a-z0-9.+-]+:)/i,d=/:[0-9]*$/,b=["<",">",'"',"`"," ","\r","\n","	"],m=["{","}","|","\\","^","`"].concat(b),g=["'"].concat(m),j=["%","/","?",";","#"].concat(g),v=["/","?","#"],x=255,y=/^[a-z0-9A-Z_-]{0,63}$/,k=/^([a-z0-9A-Z_-]{0,63})(.*)$/,w={javascript:!0,"javascript:":!0},C={javascript:!0,"javascript:":!0},z={http:!0,https:!0,ftp:!0,gopher:!0,file:!0,"http:":!0,"https:":!0,"ftp:":!0,"gopher:":!0,"file:":!0},P=t(4);r.prototype.parse=function(s,e,t){if(!l(s))throw new TypeError("Parameter 'url' must be a string, not "+typeof s);var r=s;r=r.trim();var i=u.exec(r);if(i){i=i[0];var n=i.toLowerCase();this.protocol=n,r=r.substr(i.length)}if(t||i||r.match(/^\/\/[^@\/]+@[^@\/]+/)){var o="//"===r.substr(0,2);!o||i&&C[i]||(r=r.substr(2),this.slashes=!0)}if(!C[i]&&(o||i&&!z[i])){for(var a=-1,h=0;h<v.length;h++){var c=r.indexOf(v[h]);-1!==c&&(-1===a||a>c)&&(a=c)}var p,d;d=-1===a?r.lastIndexOf("@"):r.lastIndexOf("@",a),-1!==d&&(p=r.slice(0,d),r=r.slice(d+1),this.auth=decodeURIComponent(p)),a=-1;for(var h=0;h<j.length;h++){var c=r.indexOf(j[h]);-1!==c&&(-1===a||a>c)&&(a=c)}-1===a&&(a=r.length),this.host=r.slice(0,a),r=r.slice(a),this.parseHost(),this.hostname=this.hostname||"";var b="["===this.hostname[0]&&"]"===this.hostname[this.hostname.length-1];if(!b)for(var m=this.hostname.split(/\./),h=0,I=m.length;I>h;h++){var O=m[h];if(O&&!O.match(y)){for(var q="",A=0,_=O.length;_>A;A++)q+=O.charCodeAt(A)>127?"x":O[A];if(!q.match(y)){var U=m.slice(0,h),M=m.slice(h+1),R=O.match(k);R&&(U.push(R[1]),M.unshift(R[2])),M.length&&(r="/"+M.join(".")+r),this.hostname=U.join(".");break}}}if(this.hostname.length>x?this.hostname="":this.hostname=this.hostname.toLowerCase(),!b){for(var L=this.hostname.split("."),E=[],h=0;h<L.length;++h){var T=L[h];E.push(T.match(/[^A-Za-z0-9_-]/)?"xn--"+f.encode(T):T)}this.hostname=E.join(".")}var W=this.port?":"+this.port:"",B=this.hostname||"";this.host=B+W,this.href+=this.host,b&&(this.hostname=this.hostname.substr(1,this.hostname.length-2),"/"!==r[0]&&(r="/"+r))}if(!w[n])for(var h=0,I=g.length;I>h;h++){var F=g[h],V=encodeURIComponent(F);V===F&&(V=escape(F)),r=r.split(F).join(V)}var H=r.indexOf("#");-1!==H&&(this.hash=r.substr(H),r=r.slice(0,H));var S=r.indexOf("?");if(-1!==S?(this.search=r.substr(S),this.query=r.substr(S+1),e&&(this.query=P.parse(this.query)),r=r.slice(0,S)):e&&(this.search="",this.query={}),r&&(this.pathname=r),z[n]&&this.hostname&&!this.pathname&&(this.pathname="/"),this.pathname||this.search){var W=this.pathname||"",T=this.search||"";this.path=W+T}return this.href=this.format(),this},r.prototype.format=function(){var s=this.auth||"";s&&(s=encodeURIComponent(s),s=s.replace(/%3A/i,":"),s+="@");var e=this.protocol||"",t=this.pathname||"",r=this.hash||"",i=!1,n="";this.host?i=s+this.host:this.hostname&&(i=s+(-1===this.hostname.indexOf(":")?this.hostname:"["+this.hostname+"]"),this.port&&(i+=":"+this.port)),this.query&&h(this.query)&&Object.keys(this.query).length&&(n=P.stringify(this.query));var o=this.search||n&&"?"+n||"";return e&&":"!==e.substr(-1)&&(e+=":"),this.slashes||(!e||z[e])&&i!==!1?(i="//"+(i||""),t&&"/"!==t.charAt(0)&&(t="/"+t)):i||(i=""),r&&"#"!==r.charAt(0)&&(r="#"+r),o&&"?"!==o.charAt(0)&&(o="?"+o),t=t.replace(/[?#]/g,function(s){return encodeURIComponent(s)}),o=o.replace("#","%23"),e+i+t+o+r},r.prototype.resolve=function(s){return this.resolveObject(i(s,!1,!0)).format()},r.prototype.resolveObject=function(s){if(l(s)){var e=new r;e.parse(s,!1,!0),s=e}var t=new r;if(Object.keys(this).forEach(function(s){t[s]=this[s]},this),t.hash=s.hash,""===s.href)return t.href=t.format(),t;if(s.slashes&&!s.protocol)return Object.keys(s).forEach(function(e){"protocol"!==e&&(t[e]=s[e])}),z[t.protocol]&&t.hostname&&!t.pathname&&(t.path=t.pathname="/"),t.href=t.format(),t;if(s.protocol&&s.protocol!==t.protocol){if(!z[s.protocol])return Object.keys(s).forEach(function(e){t[e]=s[e]}),t.href=t.format(),t;if(t.protocol=s.protocol,s.host||C[s.protocol])t.pathname=s.pathname;else{for(var i=(s.pathname||"").split("/");i.length&&!(s.host=i.shift()););s.host||(s.host=""),s.hostname||(s.hostname=""),""!==i[0]&&i.unshift(""),i.length<2&&i.unshift(""),t.pathname=i.join("/")}if(t.search=s.search,t.query=s.query,t.host=s.host||"",t.auth=s.auth,t.hostname=s.hostname||s.host,t.port=s.port,t.pathname||t.search){var n=t.pathname||"",o=t.search||"";t.path=n+o}return t.slashes=t.slashes||s.slashes,t.href=t.format(),t}var a=t.pathname&&"/"===t.pathname.charAt(0),h=s.host||s.pathname&&"/"===s.pathname.charAt(0),f=h||a||t.host&&s.pathname,u=f,d=t.pathname&&t.pathname.split("/")||[],i=s.pathname&&s.pathname.split("/")||[],b=t.protocol&&!z[t.protocol];if(b&&(t.hostname="",t.port=null,t.host&&(""===d[0]?d[0]=t.host:d.unshift(t.host)),t.host="",s.protocol&&(s.hostname=null,s.port=null,s.host&&(""===i[0]?i[0]=s.host:i.unshift(s.host)),s.host=null),f=f&&(""===i[0]||""===d[0])),h)t.host=s.host||""===s.host?s.host:t.host,t.hostname=s.hostname||""===s.hostname?s.hostname:t.hostname,t.search=s.search,t.query=s.query,d=i;else if(i.length)d||(d=[]),d.pop(),d=d.concat(i),t.search=s.search,t.query=s.query;else if(!p(s.search)){if(b){t.hostname=t.host=d.shift();var m=t.host&&t.host.indexOf("@")>0?t.host.split("@"):!1;m&&(t.auth=m.shift(),t.host=t.hostname=m.shift())}return t.search=s.search,t.query=s.query,c(t.pathname)&&c(t.search)||(t.path=(t.pathname?t.pathname:"")+(t.search?t.search:"")),t.href=t.format(),t}if(!d.length)return t.pathname=null,t.search?t.path="/"+t.search:t.path=null,t.href=t.format(),t;for(var g=d.slice(-1)[0],j=(t.host||s.host)&&("."===g||".."===g)||""===g,v=0,x=d.length;x>=0;x--)g=d[x],"."==g?d.splice(x,1):".."===g?(d.splice(x,1),v++):v&&(d.splice(x,1),v--);if(!f&&!u)for(;v--;v)d.unshift("..");!f||""===d[0]||d[0]&&"/"===d[0].charAt(0)||d.unshift(""),j&&"/"!==d.join("/").substr(-1)&&d.push("");var y=""===d[0]||d[0]&&"/"===d[0].charAt(0);if(b){t.hostname=t.host=y?"":d.length?d.shift():"";var m=t.host&&t.host.indexOf("@")>0?t.host.split("@"):!1;m&&(t.auth=m.shift(),t.host=t.hostname=m.shift())}return f=f||t.host&&d.length,f&&!y&&d.unshift(""),d.length?t.pathname=d.join("/"):(t.pathname=null,t.path=null),c(t.pathname)&&c(t.search)||(t.path=(t.pathname?t.pathname:"")+(t.search?t.search:"")),t.auth=s.auth||t.auth,t.slashes=t.slashes||s.slashes,t.href=t.format(),t},r.prototype.parseHost=function(){var s=this.host,e=d.exec(s);e&&(e=e[0],":"!==e&&(this.port=e.substr(1)),s=s.substr(0,s.length-e.length)),s&&(this.hostname=s)}},function(s,e,t){var r;(function(s,i){!function(n){function o(s){throw RangeError(U[s])}function a(s,e){for(var t=s.length,r=[];t--;)r[t]=e(s[t]);return r}function l(s,e){var t=s.split("@"),r="";t.length>1&&(r=t[0]+"@",s=t[1]),s=s.replace(_,".");var i=s.split("."),n=a(i,e).join(".");return r+n}function h(s){for(var e,t,r=[],i=0,n=s.length;n>i;)e=s.charCodeAt(i++),e>=55296&&56319>=e&&n>i?(t=s.charCodeAt(i++),56320==(64512&t)?r.push(((1023&e)<<10)+(1023&t)+65536):(r.push(e),i--)):r.push(e);return r}function c(s){return a(s,function(s){var e="";return s>65535&&(s-=65536,e+=L(s>>>10&1023|55296),s=56320|1023&s),e+=L(s)}).join("")}function p(s){return 10>s-48?s-22:26>s-65?s-65:26>s-97?s-97:y}function f(s,e){return s+22+75*(26>s)-((0!=e)<<5)}function u(s,e,t){var r=0;for(s=t?R(s/z):s>>1,s+=R(s/e);s>M*w>>1;r+=y)s=R(s/M);return R(r+(M+1)*s/(s+C))}function d(s){var e,t,r,i,n,a,l,h,f,d,b=[],m=s.length,g=0,j=I,v=P;for(t=s.lastIndexOf(O),0>t&&(t=0),r=0;t>r;++r)s.charCodeAt(r)>=128&&o("not-basic"),b.push(s.charCodeAt(r));for(i=t>0?t+1:0;m>i;){for(n=g,a=1,l=y;i>=m&&o("invalid-input"),h=p(s.charCodeAt(i++)),(h>=y||h>R((x-g)/a))&&o("overflow"),g+=h*a,f=v>=l?k:l>=v+w?w:l-v,!(f>h);l+=y)d=y-f,a>R(x/d)&&o("overflow"),a*=d;e=b.length+1,v=u(g-n,e,0==n),R(g/e)>x-j&&o("overflow"),j+=R(g/e),g%=e,b.splice(g++,0,j)}return c(b)}function b(s){var e,t,r,i,n,a,l,c,p,d,b,m,g,j,v,C=[];for(s=h(s),m=s.length,e=I,t=0,n=P,a=0;m>a;++a)b=s[a],128>b&&C.push(L(b));for(r=i=C.length,i&&C.push(O);m>r;){for(l=x,a=0;m>a;++a)b=s[a],b>=e&&l>b&&(l=b);for(g=r+1,l-e>R((x-t)/g)&&o("overflow"),t+=(l-e)*g,e=l,a=0;m>a;++a)if(b=s[a],e>b&&++t>x&&o("overflow"),b==e){for(c=t,p=y;d=n>=p?k:p>=n+w?w:p-n,!(d>c);p+=y)v=c-d,j=y-d,C.push(L(f(d+v%j,0))),c=R(v/j);C.push(L(f(c,0))),n=u(t,g,r==i),t=0,++r}++t,++e}return C.join("")}function m(s){return l(s,function(s){return q.test(s)?d(s.slice(4).toLowerCase()):s})}function g(s){return l(s,function(s){return A.test(s)?"xn--"+b(s):s})}var j=("object"==typeof e&&e&&!e.nodeType&&e,"object"==typeof s&&s&&!s.nodeType&&s,"object"==typeof i&&i);j.global!==j&&j.window!==j&&j.self!==j||(n=j);var v,x=2147483647,y=36,k=1,w=26,C=38,z=700,P=72,I=128,O="-",q=/^xn--/,A=/[^\x20-\x7E]/,_=/[\x2E\u3002\uFF0E\uFF61]/g,U={overflow:"Overflow: input needs wider integers to process","not-basic":"Illegal input >= 0x80 (not a basic code point)","invalid-input":"Invalid input"},M=y-k,R=Math.floor,L=String.fromCharCode;v={version:"1.3.2",ucs2:{decode:h,encode:c},decode:d,encode:b,toASCII:g,toUnicode:m},r=function(){return v}.call(e,t,e,s),!(void 0!==r&&(s.exports=r))}(this)}).call(e,t(3)(s),function(){return this}())},function(s,e){s.exports=function(s){return s.webpackPolyfill||(s.deprecate=function(){},s.paths=[],s.children=[],s.webpackPolyfill=1),s}},function(s,e,t){"use strict";e.decode=e.parse=t(5),e.encode=e.stringify=t(6)},function(s,e){"use strict";function t(s,e){return Object.prototype.hasOwnProperty.call(s,e)}s.exports=function(s,e,r,i){e=e||"&",r=r||"=";var n={};if("string"!=typeof s||0===s.length)return n;var o=/\+/g;s=s.split(e);var a=1e3;i&&"number"==typeof i.maxKeys&&(a=i.maxKeys);var l=s.length;a>0&&l>a&&(l=a);for(var h=0;l>h;++h){var c,p,f,u,d=s[h].replace(o,"%20"),b=d.indexOf(r);b>=0?(c=d.substr(0,b),p=d.substr(b+1)):(c=d,p=""),f=decodeURIComponent(c),u=decodeURIComponent(p),t(n,f)?Array.isArray(n[f])?n[f].push(u):n[f]=[n[f],u]:n[f]=u}return n}},function(s,e){"use strict";var t=function(s){switch(typeof s){case"string":return s;case"boolean":return s?"true":"false";case"number":return isFinite(s)?s:"";default:return""}};s.exports=function(s,e,r,i){return e=e||"&",r=r||"=",null===s&&(s=void 0),"object"==typeof s?Object.keys(s).map(function(i){var n=encodeURIComponent(t(i))+r;return Array.isArray(s[i])?s[i].map(function(s){return n+encodeURIComponent(t(s))}).join(e):n+encodeURIComponent(t(s[i]))}).join(e):i?encodeURIComponent(t(i))+r+encodeURIComponent(t(s)):""}},function(s,e){s.exports=[{id:"73e1dc6c-8441-42cc-ad47-4bd3659f8a3a",componentType:"Library",version:"0.0.1",manifestVersion:2,loaderConfig:{entryModuleId:"sp-lodash-subset",internalModuleBaseUrls:["http://airbus-a380.local:4321/node_modules/@microsoft/sp-lodash-subset/"],scriptResources:{"sp-lodash-subset":{type:"internal",path:"dist/sp-lodash-subset.js"}}}},{id:"1c6c9123-7aac-41f3-a376-3caea41ed83f",componentType:"Library",version:"0.0.1",manifestVersion:2,loaderConfig:{entryModuleId:"sp-module-loader",internalModuleBaseUrls:["http://airbus-a380.local:4321/node_modules/@microsoft/sp-module-loader/"],scriptResources:{"sp-module-loader":{type:"internal",path:"dist/sp-module-loader.js"}}}},{id:"af59c2b3-2da7-41fd-8b72-3939817960af",componentType:"Library",version:"0.0.1",manifestVersion:2,loaderConfig:{entryModuleId:"sp-client-base",internalModuleBaseUrls:["http://airbus-a380.local:4321/node_modules/@microsoft/sp-client-base/"],scriptResources:{"sp-client-base":{type:"internal",path:"dist/sp-client-base.js"},"@microsoft/sp-lodash-subset":{type:"framework",version:"latest",failoverPath:"node_modules/@microsoft/sp-lodash-subset/dist/sp-lodash-subset.js"}}}},{id:"02a01e42-69ab-403d-8a16-acd128661f8e",componentType:"Library",version:"0.0.1",manifestVersion:2,loaderConfig:{entryModuleId:"office-ui-fabric-react.bundle",internalModuleBaseUrls:["http://airbus-a380.local:4321/node_modules/@microsoft/office-ui-fabric-react-bundle/"],scriptResources:{"office-ui-fabric-react.bundle":{type:"internal",path:"dist/office-ui-fabric-react.bundle.js"},react:{type:"framework",version:"latest",failoverPath:"node_modules/react/dist/react.min.js"},"react-dom":{type:"framework",version:"latest",failoverPath:"node_modules/react-dom/dist/react-dom.min.js"}}}},{id:"4d5eb168-6729-49a8-aec7-0e397f486b6e",componentType:"Library",version:"1.0.0",manifestVersion:2,loaderConfig:{entryModuleId:"sp-client-preview",internalModuleBaseUrls:["http://airbus-a380.local:4321/node_modules/@microsoft/sp-client-preview/"],scriptResources:{"sp-client-preview":{type:"internal",path:"dist/sp-client-preview.js"},"4d5eb168-6729-49a8-aec7-0e397f486b6e_strings":{defaultPath:"lib/resx-strings/en-us.js",type:"localized",paths:{"ar-sa":"lib/resx-strings/ar-sa.js","az-latn-az":"lib/resx-strings/az-latn-az.js","bg-bg":"lib/resx-strings/bg-bg.js","bs-latn-ba":"lib/resx-strings/bs-latn-ba.js","ca-es":"lib/resx-strings/ca-es.js","cs-cz":"lib/resx-strings/cs-cz.js","cy-gb":"lib/resx-strings/cy-gb.js","da-dk":"lib/resx-strings/da-dk.js","de-de":"lib/resx-strings/de-de.js","el-gr":"lib/resx-strings/el-gr.js","es-es":"lib/resx-strings/es-es.js","et-ee":"lib/resx-strings/et-ee.js","eu-es":"lib/resx-strings/eu-es.js","fi-fi":"lib/resx-strings/fi-fi.js","fr-fr":"lib/resx-strings/fr-fr.js","ga-ie":"lib/resx-strings/ga-ie.js","gl-es":"lib/resx-strings/gl-es.js","he-il":"lib/resx-strings/he-il.js","hi-in":"lib/resx-strings/hi-in.js","hr-hr":"lib/resx-strings/hr-hr.js","hu-hu":"lib/resx-strings/hu-hu.js","id-id":"lib/resx-strings/id-id.js","it-it":"lib/resx-strings/it-it.js","ja-jp":"lib/resx-strings/ja-jp.js","kk-kz":"lib/resx-strings/kk-kz.js","ko-kr":"lib/resx-strings/ko-kr.js","lt-lt":"lib/resx-strings/lt-lt.js","lv-lv":"lib/resx-strings/lv-lv.js","mk-mk":"lib/resx-strings/mk-mk.js","ms-my":"lib/resx-strings/ms-my.js","nb-no":"lib/resx-strings/nb-no.js","nl-nl":"lib/resx-strings/nl-nl.js","pl-pl":"lib/resx-strings/pl-pl.js","prs-af":"lib/resx-strings/prs-af.js","pt-br":"lib/resx-strings/pt-br.js","pt-pt":"lib/resx-strings/pt-pt.js","qps-ploc":"lib/resx-strings/qps-ploc.js","qps-ploca":"lib/resx-strings/qps-ploca.js","ro-ro":"lib/resx-strings/ro-ro.js","ru-ru":"lib/resx-strings/ru-ru.js","sk-sk":"lib/resx-strings/sk-sk.js","sl-si":"lib/resx-strings/sl-si.js","sr-cyrl-rs":"lib/resx-strings/sr-cyrl-rs.js","sr-latn-rs":"lib/resx-strings/sr-latn-rs.js","sv-se":"lib/resx-strings/sv-se.js","th-th":"lib/resx-strings/th-th.js","tr-tr":"lib/resx-strings/tr-tr.js","uk-ua":"lib/resx-strings/uk-ua.js","vi-vn":"lib/resx-strings/vi-vn.js","zh-cn":"lib/resx-strings/zh-cn.js","zh-tw":"lib/resx-strings/zh-tw.js"}},"@microsoft/sp-lodash-subset":{type:"framework",version:"latest",failoverPath:"node_modules/@microsoft/sp-lodash-subset/dist/sp-lodash-subset.js"},"@microsoft/sp-client-base":{type:"framework",version:"latest",failoverPath:"node_modules/@microsoft/sp-client-base/dist/sp-client-base.js"},react:{type:"framework",version:"latest",failoverPath:"node_modules/react/dist/react.js"},"react-dom":{type:"framework",version:"latest",failoverPath:"node_modules/react-dom/dist/react-dom.js"},"office-ui-fabric-react":{type:"framework",version:"latest",failoverPath:"node_modules/office-ui-fabric-react/dist/office-ui-fabric-react.js"}}}},{id:"8be81a5c-af38-4bb2-af97-afa3b64dfbed",componentType:"Application",version:"1.0.0",manifestVersion:2,title:{"default":"WebpartWorkbench"},description:{"default":"WebpartWorkbench"},preloadComponents:["6aeaab4a-4d96-47fe-a0c2-9e063a2efda4","4d5eb168-6729-49a8-aec7-0e397f486b6e","a8c07ea7-3ee8-4376-8afa-e0c5098615eb","02a01e42-69ab-403d-8a16-acd128661f8e"],preloadOptions:{shouldPreloadWeb:!1,shouldPreloadUser:!0,shouldPreloadList:!1,shouldPreloadItem:!0,shouldPreloadQuickLaunch:!0},loaderConfig:{entryModuleId:"sp-webpart-workbench",internalModuleBaseUrls:["http://airbus-a380.local:4321/node_modules/@microsoft/sp-webpart-workbench/"],scriptResources:{"sp-webpart-workbench":{type:"internal",path:"dist/sp-webpart-workbench.js"},"8be81a5c-af38-4bb2-af97-afa3b64dfbed_strings":{defaultPath:"lib/resx-strings/en-us.js",type:"localized",paths:{"ar-sa":"lib/resx-strings/ar-sa.js","az-latn-az":"lib/resx-strings/az-latn-az.js","bg-bg":"lib/resx-strings/bg-bg.js","bs-latn-ba":"lib/resx-strings/bs-latn-ba.js","ca-es":"lib/resx-strings/ca-es.js","cs-cz":"lib/resx-strings/cs-cz.js","cy-gb":"lib/resx-strings/cy-gb.js","da-dk":"lib/resx-strings/da-dk.js","de-de":"lib/resx-strings/de-de.js","el-gr":"lib/resx-strings/el-gr.js","es-es":"lib/resx-strings/es-es.js","et-ee":"lib/resx-strings/et-ee.js","eu-es":"lib/resx-strings/eu-es.js","fi-fi":"lib/resx-strings/fi-fi.js","fr-fr":"lib/resx-strings/fr-fr.js","ga-ie":"lib/resx-strings/ga-ie.js","gl-es":"lib/resx-strings/gl-es.js","he-il":"lib/resx-strings/he-il.js","hi-in":"lib/resx-strings/hi-in.js","hr-hr":"lib/resx-strings/hr-hr.js","hu-hu":"lib/resx-strings/hu-hu.js","id-id":"lib/resx-strings/id-id.js","it-it":"lib/resx-strings/it-it.js","ja-jp":"lib/resx-strings/ja-jp.js","kk-kz":"lib/resx-strings/kk-kz.js","ko-kr":"lib/resx-strings/ko-kr.js","lt-lt":"lib/resx-strings/lt-lt.js","lv-lv":"lib/resx-strings/lv-lv.js","mk-mk":"lib/resx-strings/mk-mk.js","ms-my":"lib/resx-strings/ms-my.js","nb-no":"lib/resx-strings/nb-no.js","nl-nl":"lib/resx-strings/nl-nl.js","pl-pl":"lib/resx-strings/pl-pl.js","prs-af":"lib/resx-strings/prs-af.js","pt-br":"lib/resx-strings/pt-br.js","pt-pt":"lib/resx-strings/pt-pt.js","qps-ploc":"lib/resx-strings/qps-ploc.js","qps-ploca":"lib/resx-strings/qps-ploca.js","ro-ro":"lib/resx-strings/ro-ro.js","ru-ru":"lib/resx-strings/ru-ru.js","sk-sk":"lib/resx-strings/sk-sk.js","sl-si":"lib/resx-strings/sl-si.js","sr-cyrl-rs":"lib/resx-strings/sr-cyrl-rs.js","sr-latn-rs":"lib/resx-strings/sr-latn-rs.js","sv-se":"lib/resx-strings/sv-se.js","th-th":"lib/resx-strings/th-th.js","tr-tr":"lib/resx-strings/tr-tr.js","uk-ua":"lib/resx-strings/uk-ua.js","vi-vn":"lib/resx-strings/vi-vn.js","zh-cn":"lib/resx-strings/zh-cn.js","zh-tw":"lib/resx-strings/zh-tw.js"}},react:{type:"framework",version:"latest",failoverPath:"node_modules/react/dist/react.min.js"},"react-dom":{type:"framework",version:"latest",failoverPath:"node_modules/react-dom/dist/react-dom.min.js"},"@microsoft/sp-client-preview":{type:"framework",version:"latest",failoverPath:"node_modules/@microsoft/sp-client-preview/dist/sp-client-preview.js"},"@microsoft/sp-client-base":{type:"framework",version:"latest",failoverPath:"node_modules/@microsoft/sp-client-base/dist/sp-client-base.js"},"office-ui-fabric-react":{type:"framework",version:"latest",failoverPath:"node_modules/office-ui-fabric-react/dist/office-ui-fabric-react.min.js"}}}},{id:"f99a0b0a-9f68-409a-8eeb-2ae10a1f9f4c",componentType:"WebPart",version:"0.0.1",manifestVersion:2,preconfiguredEntries:[{groupId:"f99a0b0a-9f68-409a-8eeb-2ae10a1f9f4c",group:{"default":"Under Development"},title:{"default":"HelloWorld"},description:{"default":"HelloWorld description"},officeFabricIconFontName:"Page",properties:{description:"HelloWorld"}}],loaderConfig:{entryModuleId:"hello-world.bundle",internalModuleBaseUrls:["http://Airbus-A380.local:4321/"],scriptResources:{"hello-world.bundle":{type:"internal",path:"dist/hello-world.bundle.js"},mystrings:{defaultPath:"lib/webparts/helloWorld/loc/en-us.js",type:"localized",paths:{}},"@microsoft/sp-client-preview":{type:"framework",version:"latest",failoverPath:"node_modules/@microsoft/sp-client-preview/dist/sp-client-preview.js"}}}}]}]);