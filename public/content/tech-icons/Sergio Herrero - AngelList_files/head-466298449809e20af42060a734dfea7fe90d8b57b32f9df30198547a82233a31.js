window.Modernizr=function(e,n,t){function r(e,n){return typeof e===n}function o(){var e,n,t,o,i,a,s;for(var l in x)if(x.hasOwnProperty(l)){if(e=[],n=x[l],n.name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(t=0;t<n.options.aliases.length;t++)e.push(n.options.aliases[t].toLowerCase());for(o=r(n.fn,"function")?n.fn():n.fn,i=0;i<e.length;i++)a=e[i],s=a.split("."),1===s.length?S[s[0]]=o:(!S[s[0]]||S[s[0]]instanceof Boolean||(S[s[0]]=new Boolean(S[s[0]])),S[s[0]][s[1]]=o),y.push((o?"":"no-")+s.join("-"))}}function i(e){var n=C.className,t=S._config.classPrefix||"";if(A&&(n=n.baseVal),S._config.enableJSClass){var r=new RegExp("(^|\\s)"+t+"no-js(\\s|$)");n=n.replace(r,"$1"+t+"js$2")}S._config.enableClasses&&(n+=" "+t+e.join(" "+t),A?C.className.baseVal=n:C.className=n)}function a(){return"function"!=typeof n.createElement?n.createElement(arguments[0]):A?n.createElementNS.call(n,"http://www.w3.org/2000/svg",arguments[0]):n.createElement.apply(n,arguments)}function s(){var e=n.body;return e||(e=a(A?"svg":"body"),e.fake=!0),e}function l(e,t,r,o){var i,l,u,d,c="modernizr",f=a("div"),m=s();if(parseInt(r,10))for(;r--;)u=a("div"),u.id=o?o[r]:c+(r+1),f.appendChild(u);return i=a("style"),i.type="text/css",i.id="s"+c,(m.fake?m:f).appendChild(i),m.appendChild(f),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(n.createTextNode(e)),f.id=c,m.fake&&(m.style.background="",m.style.overflow="hidden",d=C.style.overflow,C.style.overflow="hidden",C.appendChild(m)),l=t(f,e),m.fake?(m.parentNode.removeChild(m),C.style.overflow=d,C.offsetHeight):f.parentNode.removeChild(f),!!l}function u(e,n){return!!~(""+e).indexOf(n)}function d(e){return e.replace(/([a-z])-([a-z])/g,function(e,n,t){return n+t.toUpperCase()}).replace(/^-/,"")}function c(e,n){return function(){return e.apply(n,arguments)}}function f(e,n,t){var o;for(var i in e)if(e[i]in n)return t===!1?e[i]:(o=n[e[i]],r(o,"function")?c(o,t||n):o);return!1}function m(e){return e.replace(/([A-Z])/g,function(e,n){return"-"+n.toLowerCase()}).replace(/^ms-/,"-ms-")}function p(n,t,r){var o;if("getComputedStyle"in e){o=getComputedStyle.call(e,n,t);var i=e.console;if(null!==o)r&&(o=o.getPropertyValue(r));else if(i){var a=i.error?"error":"log";i[a].call(i,"getComputedStyle returning null, its possible modernizr test results are inaccurate")}}else o=!t&&n.currentStyle&&n.currentStyle[r];return o}function h(n,r){var o=n.length;if("CSS"in e&&"supports"in e.CSS){for(;o--;)if(e.CSS.supports(m(n[o]),r))return!0;return!1}if("CSSSupportsRule"in e){for(var i=[];o--;)i.push("("+m(n[o])+":"+r+")");return i=i.join(" or "),l("@supports ("+i+") { #modernizr { position: absolute; } }",function(e){return"absolute"==p(e,null,"position")})}return t}function v(e,n,o,i){function s(){c&&(delete R.style,delete R.modElem)}if(i=r(i,"undefined")?!1:i,!r(o,"undefined")){var l=h(e,o);if(!r(l,"undefined"))return l}for(var c,f,m,p,v,g=["modernizr","tspan","samp"];!R.style&&g.length;)c=!0,R.modElem=a(g.shift()),R.style=R.modElem.style;for(m=e.length,f=0;m>f;f++)if(p=e[f],v=R.style[p],u(p,"-")&&(p=d(p)),R.style[p]!==t){if(i||r(o,"undefined"))return s(),"pfx"==n?p:!0;try{R.style[p]=o}catch(w){}if(R.style[p]!=v)return s(),"pfx"==n?p:!0}return s(),!1}function g(e,n,t,o,i){var a=e.charAt(0).toUpperCase()+e.slice(1),s=(e+" "+T.join(a+" ")+a).split(" ");return r(n,"string")||r(n,"undefined")?v(s,n,o,i):(s=(e+" "+M.join(a+" ")+a).split(" "),f(s,n,t))}function w(e,n,r){return g(e,t,t,n,r)}var y=[],x=[],E={_version:"3.6.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var t=this;setTimeout(function(){n(t[e])},0)},addTest:function(e,n,t){x.push({name:e,fn:n,options:t})},addAsyncTest:function(e){x.push({name:null,fn:e})}},S=function(){};S.prototype=E,S=new S,S.addTest("filereader",!!(e.File&&e.FileList&&e.FileReader));var b=E._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):["",""];E._prefixes=b;var C=n.documentElement,A="svg"===C.nodeName.toLowerCase(),L="Moz O ms Webkit",M=E._config.usePrefixes?L.toLowerCase().split(" "):[];E._domPrefixes=M;var _=function(){function e(e,n){var o;return e?(n&&"string"!=typeof n||(n=a(n||"div")),e="on"+e,o=e in n,!o&&r&&(n.setAttribute||(n=a("div")),n.setAttribute(e,""),o="function"==typeof n[e],n[e]!==t&&(n[e]=t),n.removeAttribute(e)),o):!1}var r=!("onblur"in n.documentElement);return e}();E.hasEvent=_;var N={}.toString;S.addTest("smil",function(){return!!n.createElementNS&&/SVGAnimate/.test(N.call(n.createElementNS("http://www.w3.org/2000/svg","animate")))});var z=function(){var n=e.matchMedia||e.msMatchMedia;return n?function(e){var t=n(e);return t&&t.matches||!1}:function(n){var t=!1;return l("@media "+n+" { #modernizr { position: absolute; } }",function(n){t="absolute"==(e.getComputedStyle?e.getComputedStyle(n,null):n.currentStyle).position}),t}}();E.mq=z;var k=E.testStyles=l;S.addTest("touchevents",function(){var t;if("ontouchstart"in e||e.DocumentTouch&&n instanceof DocumentTouch)t=!0;else{var r=["@media (",b.join("touch-enabled),("),"heartz",")","{#modernizr{top:9px;position:absolute}}"].join("");k(r,function(e){t=9===e.offsetTop})}return t});var T=E._config.usePrefixes?L.split(" "):[];E._cssomPrefixes=T;var P={elem:a("modernizr")};S._q.push(function(){delete P.elem});var R={style:P.elem.style};S._q.unshift(function(){delete R.style});E.testProp=function(e,n,r){return v([e],t,n,r)};E.testAllProps=g,E.testAllProps=w,S.addTest("overflowscrolling",w("overflowScrolling","touch",!0)),S.addTest("csstransforms",function(){return-1===navigator.userAgent.indexOf("Android 2.")&&w("transform","scale(1)",!0)}),S.addTest("csstransitions",w("transition","all",!0)),o(),i(y),delete E.addTest,delete E.addAsyncTest;for(var $=0;$<S._q.length;$++)S._q[$]();return S}(this,this.document),function(){var e,n,t,r,o,i,a,s,l,u,d,c,f,m,p,h,v,g;try{if(null==window.Modernizr)throw new Error("Modernizr must be loaded");if(null!=window._mediaDependency)throw new Error("Media object already defined");if(f=function(e){var n,t,r,o,i;for(o=e+"=",i=document.cookie.split(";"),t=0,r=i.length;r>t;t++){for(n=i[t];" "===n.charAt(0);)n=n.substring(1,n.length);if(0===n.indexOf(o))return n.substring(o.length,n.length)}return null},s=f("force_desktop"),document.documentElement.className=document.documentElement.className+(" "+(s?"force-desktop":"no-force-desktop")),c={SMALL:["only screen and (max-width: 480px)","only screen and (-webkit-device-pixel-ratio:0.75)","only all and (max-device-width: 960px) and (-webkit-min-device-pixel-ratio: 1.5)","only all and (max-device-width: 960px) and (-o-min-device-pixel-ratio: 3/2)","only all and (max-device-width: 960px) and (min--moz-device-pixel-ratio: 1.5)","only all and (max-device-width: 960px) and (min-device-pixel-ratio: 1.5)","only handheld"]},t={LARGE:"ml",MEDIUM:"mm",SMALL:"ms"},e=window.navigator.userAgent.match(/iPad/i)||s?["LARGE"]:["LARGE","SMALL"],document.documentElement.className.match(/(^|\s)responsive(\s|$)/)){if(2!==(null!=(m=window._mediaBreakpoints)?m.length:void 0))throw new Error("Cannot parse breakpoints");p=function(){var e,t,r,o;for(r=window._mediaBreakpoints,o=[],e=0,t=r.length;t>e;e++)n=r[e],o.push(parseInt(n));return o}(),v=p[0],d=p[1],c={LARGE:["only all and (min-width: "+(d+1)+"px)"],MEDIUM:["only all and (min-width: "+(v+1)+"px) and (max-width: "+d+"px)"],SMALL:["only all and (max-width: "+v+"px)"]},s||(e=["LARGE","MEDIUM","SMALL"])}for(i=function(){var n,r,o,i,a,s,l,u;for(n=0,o=e.length;o>n;n++)if(u=e[n],null!=c[u])for(l=c[u],r=0,i=l.length;i>r;r++){s=l[r],a=!1;try{a=window.Modernizr.mq(s)}catch(d){}if(a)return t[u]}return t.LARGE},o=null,l=0,u=e.length;u>l;l++)g=e[l],r=t[g],document.documentElement.className.match(RegExp("(^|\\s)"+r+"(\\s|$)"))&&(o=r);window._mediaDependency={isHandheld:function(){return o===t.SMALL},isTablet:function(){return o===t.MEDIUM},isDesktop:function(){return o===t.LARGE},detect:function(){var n,r,a,s,l;if(l=o,o=i(),l!==o){for(document.documentElement.className=document.documentElement.className.replace(RegExp("(^|\\s)"+l+"(\\s|$)"),"$1$2").replace(/(^\s+|\s+$)/g,""),n=0,a=e.length;a>n;n++)g=e[n],t[g]!==l&&(document.documentElement.className=document.documentElement.className.replace(RegExp("(^|\\s)no-"+t[g]+"(\\s|$)"),"$1$2").replace(/(^\s+|\s+$)/g,""));for(document.documentElement.className=document.documentElement.className+(" "+o),r=0,s=e.length;s>r;r++)g=e[r],t[g]!==o&&(document.documentElement.className=document.documentElement.className+(" no-"+t[g]));return!0}return!1}},window._mediaDependency.detect()}catch(w){a=w,window[(null!=(h=window._rollbarConfig)?h.globalAlias:void 0)||"Rollbar"].error(a,"Error initializing media dependency")}}.call(this),function(){}.call(this);