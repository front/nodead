/*!



 resources js mno utils jquery-1.7.1.min.js



*//*! jQuery v1.7.1 jquery.com | jquery.org/license */
(function(a,b){function cy(a){return f.isWindow(a)?a:a.nodeType===9?a.defaultView||a.parentWindow:!1}function cv(a){if(!ck[a]){var b=c.body,d=f("<"+a+">").appendTo(b),e=d.css("display");d.remove();if(e==="none"||e===""){cl||(cl=c.createElement("iframe"),cl.frameBorder=cl.width=cl.height=0),b.appendChild(cl);if(!cm||!cl.createElement)cm=(cl.contentWindow||cl.contentDocument).document,cm.write((c.compatMode==="CSS1Compat"?"<!doctype html>":"")+"<html><body>"),cm.close();d=cm.createElement(a),cm.body.appendChild(d),e=f.css(d,"display"),b.removeChild(cl)}ck[a]=e}return ck[a]}function cu(a,b){var c={};f.each(cq.concat.apply([],cq.slice(0,b)),function(){c[this]=a});return c}function ct(){cr=b}function cs(){setTimeout(ct,0);return cr=f.now()}function cj(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}function ci(){try{return new a.XMLHttpRequest}catch(b){}}function cc(a,c){a.dataFilter&&(c=a.dataFilter(c,a.dataType));var d=a.dataTypes,e={},g,h,i=d.length,j,k=d[0],l,m,n,o,p;for(g=1;g<i;g++){if(g===1)for(h in a.converters)typeof h=="string"&&(e[h.toLowerCase()]=a.converters[h]);l=k,k=d[g];if(k==="*")k=l;else if(l!=="*"&&l!==k){m=l+" "+k,n=e[m]||e["* "+k];if(!n){p=b;for(o in e){j=o.split(" ");if(j[0]===l||j[0]==="*"){p=e[j[1]+" "+k];if(p){o=e[o],o===!0?n=p:p===!0&&(n=o);break}}}}!n&&!p&&f.error("No conversion from "+m.replace(" "," to ")),n!==!0&&(c=n?n(c):p(o(c)))}}return c}function cb(a,c,d){var e=a.contents,f=a.dataTypes,g=a.responseFields,h,i,j,k;for(i in g)i in d&&(c[g[i]]=d[i]);while(f[0]==="*")f.shift(),h===b&&(h=a.mimeType||c.getResponseHeader("content-type"));if(h)for(i in e)if(e[i]&&e[i].test(h)){f.unshift(i);break}if(f[0]in d)j=f[0];else{for(i in d){if(!f[0]||a.converters[i+" "+f[0]]){j=i;break}k||(k=i)}j=j||k}if(j){j!==f[0]&&f.unshift(j);return d[j]}}function ca(a,b,c,d){if(f.isArray(b))f.each(b,function(b,e){c||bE.test(a)?d(a,e):ca(a+"["+(typeof e=="object"||f.isArray(e)?b:"")+"]",e,c,d)});else if(!c&&b!=null&&typeof b=="object")for(var e in b)ca(a+"["+e+"]",b[e],c,d);else d(a,b)}function b_(a,c){var d,e,g=f.ajaxSettings.flatOptions||{};for(d in c)c[d]!==b&&((g[d]?a:e||(e={}))[d]=c[d]);e&&f.extend(!0,a,e)}function b$(a,c,d,e,f,g){f=f||c.dataTypes[0],g=g||{},g[f]=!0;var h=a[f],i=0,j=h?h.length:0,k=a===bT,l;for(;i<j&&(k||!l);i++)l=h[i](c,d,e),typeof l=="string"&&(!k||g[l]?l=b:(c.dataTypes.unshift(l),l=b$(a,c,d,e,l,g)));(k||!l)&&!g["*"]&&(l=b$(a,c,d,e,"*",g));return l}function bZ(a){return function(b,c){typeof b!="string"&&(c=b,b="*");if(f.isFunction(c)){var d=b.toLowerCase().split(bP),e=0,g=d.length,h,i,j;for(;e<g;e++)h=d[e],j=/^\+/.test(h),j&&(h=h.substr(1)||"*"),i=a[h]=a[h]||[],i[j?"unshift":"push"](c)}}}function bC(a,b,c){var d=b==="width"?a.offsetWidth:a.offsetHeight,e=b==="width"?bx:by,g=0,h=e.length;if(d>0){if(c!=="border")for(;g<h;g++)c||(d-=parseFloat(f.css(a,"padding"+e[g]))||0),c==="margin"?d+=parseFloat(f.css(a,c+e[g]))||0:d-=parseFloat(f.css(a,"border"+e[g]+"Width"))||0;return d+"px"}d=bz(a,b,b);if(d<0||d==null)d=a.style[b]||0;d=parseFloat(d)||0;if(c)for(;g<h;g++)d+=parseFloat(f.css(a,"padding"+e[g]))||0,c!=="padding"&&(d+=parseFloat(f.css(a,"border"+e[g]+"Width"))||0),c==="margin"&&(d+=parseFloat(f.css(a,c+e[g]))||0);return d+"px"}function bp(a,b){b.src?f.ajax({url:b.src,async:!1,dataType:"script"}):f.globalEval((b.text||b.textContent||b.innerHTML||"").replace(bf,"/*$0*/")),b.parentNode&&b.parentNode.removeChild(b)}function bo(a){var b=c.createElement("div");bh.appendChild(b),b.innerHTML=a.outerHTML;return b.firstChild}function bn(a){var b=(a.nodeName||"").toLowerCase();b==="input"?bm(a):b!=="script"&&typeof a.getElementsByTagName!="undefined"&&f.grep(a.getElementsByTagName("input"),bm)}function bm(a){if(a.type==="checkbox"||a.type==="radio")a.defaultChecked=a.checked}function bl(a){return typeof a.getElementsByTagName!="undefined"?a.getElementsByTagName("*"):typeof a.querySelectorAll!="undefined"?a.querySelectorAll("*"):[]}function bk(a,b){var c;if(b.nodeType===1){b.clearAttributes&&b.clearAttributes(),b.mergeAttributes&&b.mergeAttributes(a),c=b.nodeName.toLowerCase();if(c==="object")b.outerHTML=a.outerHTML;else if(c!=="input"||a.type!=="checkbox"&&a.type!=="radio"){if(c==="option")b.selected=a.defaultSelected;else if(c==="input"||c==="textarea")b.defaultValue=a.defaultValue}else a.checked&&(b.defaultChecked=b.checked=a.checked),b.value!==a.value&&(b.value=a.value);b.removeAttribute(f.expando)}}function bj(a,b){if(b.nodeType===1&&!!f.hasData(a)){var c,d,e,g=f._data(a),h=f._data(b,g),i=g.events;if(i){delete h.handle,h.events={};for(c in i)for(d=0,e=i[c].length;d<e;d++)f.event.add(b,c+(i[c][d].namespace?".":"")+i[c][d].namespace,i[c][d],i[c][d].data)}h.data&&(h.data=f.extend({},h.data))}}function bi(a,b){return f.nodeName(a,"table")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function U(a){var b=V.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}function T(a,b,c){b=b||0;if(f.isFunction(b))return f.grep(a,function(a,d){var e=!!b.call(a,d,a);return e===c});if(b.nodeType)return f.grep(a,function(a,d){return a===b===c});if(typeof b=="string"){var d=f.grep(a,function(a){return a.nodeType===1});if(O.test(b))return f.filter(b,d,!c);b=f.filter(b,d)}return f.grep(a,function(a,d){return f.inArray(a,b)>=0===c})}function S(a){return!a||!a.parentNode||a.parentNode.nodeType===11}function K(){return!0}function J(){return!1}function n(a,b,c){var d=b+"defer",e=b+"queue",g=b+"mark",h=f._data(a,d);h&&(c==="queue"||!f._data(a,e))&&(c==="mark"||!f._data(a,g))&&setTimeout(function(){!f._data(a,e)&&!f._data(a,g)&&(f.removeData(a,d,!0),h.fire())},0)}function m(a){for(var b in a){if(b==="data"&&f.isEmptyObject(a[b]))continue;if(b!=="toJSON")return!1}return!0}function l(a,c,d){if(d===b&&a.nodeType===1){var e="data-"+c.replace(k,"-$1").toLowerCase();d=a.getAttribute(e);if(typeof d=="string"){try{d=d==="true"?!0:d==="false"?!1:d==="null"?null:f.isNumeric(d)?parseFloat(d):j.test(d)?f.parseJSON(d):d}catch(g){}f.data(a,c,d)}else d=b}return d}function h(a){var b=g[a]={},c,d;a=a.split(/\s+/);for(c=0,d=a.length;c<d;c++)b[a[c]]=!0;return b}var c=a.document,d=a.navigator,e=a.location,f=function(){function J(){if(!e.isReady){try{c.documentElement.doScroll("left")}catch(a){setTimeout(J,1);return}e.ready()}}var e=function(a,b){return new e.fn.init(a,b,h)},f=a.jQuery,g=a.$,h,i=/^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,j=/\S/,k=/^\s+/,l=/\s+$/,m=/^<(\w+)\s*\/?>(?:<\/\1>)?$/,n=/^[\],:{}\s]*$/,o=/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,p=/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,q=/(?:^|:|,)(?:\s*\[)+/g,r=/(webkit)[ \/]([\w.]+)/,s=/(opera)(?:.*version)?[ \/]([\w.]+)/,t=/(msie) ([\w.]+)/,u=/(mozilla)(?:.*? rv:([\w.]+))?/,v=/-([a-z]|[0-9])/ig,w=/^-ms-/,x=function(a,b){return(b+"").toUpperCase()},y=d.userAgent,z,A,B,C=Object.prototype.toString,D=Object.prototype.hasOwnProperty,E=Array.prototype.push,F=Array.prototype.slice,G=String.prototype.trim,H=Array.prototype.indexOf,I={};e.fn=e.prototype={constructor:e,init:function(a,d,f){var g,h,j,k;if(!a)return this;if(a.nodeType){this.context=this[0]=a,this.length=1;return this}if(a==="body"&&!d&&c.body){this.context=c,this[0]=c.body,this.selector=a,this.length=1;return this}if(typeof a=="string"){a.charAt(0)!=="<"||a.charAt(a.length-1)!==">"||a.length<3?g=i.exec(a):g=[null,a,null];if(g&&(g[1]||!d)){if(g[1]){d=d instanceof e?d[0]:d,k=d?d.ownerDocument||d:c,j=m.exec(a),j?e.isPlainObject(d)?(a=[c.createElement(j[1])],e.fn.attr.call(a,d,!0)):a=[k.createElement(j[1])]:(j=e.buildFragment([g[1]],[k]),a=(j.cacheable?e.clone(j.fragment):j.fragment).childNodes);return e.merge(this,a)}h=c.getElementById(g[2]);if(h&&h.parentNode){if(h.id!==g[2])return f.find(a);this.length=1,this[0]=h}this.context=c,this.selector=a;return this}return!d||d.jquery?(d||f).find(a):this.constructor(d).find(a)}if(e.isFunction(a))return f.ready(a);a.selector!==b&&(this.selector=a.selector,this.context=a.context);return e.makeArray(a,this)},selector:"",jquery:"1.7.1",length:0,size:function(){return this.length},toArray:function(){return F.call(this,0)},get:function(a){return a==null?this.toArray():a<0?this[this.length+a]:this[a]},pushStack:function(a,b,c){var d=this.constructor();e.isArray(a)?E.apply(d,a):e.merge(d,a),d.prevObject=this,d.context=this.context,b==="find"?d.selector=this.selector+(this.selector?" ":"")+c:b&&(d.selector=this.selector+"."+b+"("+c+")");return d},each:function(a,b){return e.each(this,a,b)},ready:function(a){e.bindReady(),A.add(a);return this},eq:function(a){a=+a;return a===-1?this.slice(a):this.slice(a,a+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(F.apply(this,arguments),"slice",F.call(arguments).join(","))},map:function(a){return this.pushStack(e.map(this,function(b,c){return a.call(b,c,b)}))},end:function(){return this.prevObject||this.constructor(null)},push:E,sort:[].sort,splice:[].splice},e.fn.init.prototype=e.fn,e.extend=e.fn.extend=function(){var a,c,d,f,g,h,i=arguments[0]||{},j=1,k=arguments.length,l=!1;typeof i=="boolean"&&(l=i,i=arguments[1]||{},j=2),typeof i!="object"&&!e.isFunction(i)&&(i={}),k===j&&(i=this,--j);for(;j<k;j++)if((a=arguments[j])!=null)for(c in a){d=i[c],f=a[c];if(i===f)continue;l&&f&&(e.isPlainObject(f)||(g=e.isArray(f)))?(g?(g=!1,h=d&&e.isArray(d)?d:[]):h=d&&e.isPlainObject(d)?d:{},i[c]=e.extend(l,h,f)):f!==b&&(i[c]=f)}return i},e.extend({noConflict:function(b){a.$===e&&(a.$=g),b&&a.jQuery===e&&(a.jQuery=f);return e},isReady:!1,readyWait:1,holdReady:function(a){a?e.readyWait++:e.ready(!0)},ready:function(a){if(a===!0&&!--e.readyWait||a!==!0&&!e.isReady){if(!c.body)return setTimeout(e.ready,1);e.isReady=!0;if(a!==!0&&--e.readyWait>0)return;A.fireWith(c,[e]),e.fn.trigger&&e(c).trigger("ready").off("ready")}},bindReady:function(){if(!A){A=e.Callbacks("once memory");if(c.readyState==="complete")return setTimeout(e.ready,1);if(c.addEventListener)c.addEventListener("DOMContentLoaded",B,!1),a.addEventListener("load",e.ready,!1);else if(c.attachEvent){c.attachEvent("onreadystatechange",B),a.attachEvent("onload",e.ready);var b=!1;try{b=a.frameElement==null}catch(d){}c.documentElement.doScroll&&b&&J()}}},isFunction:function(a){return e.type(a)==="function"},isArray:Array.isArray||function(a){return e.type(a)==="array"},isWindow:function(a){return a&&typeof a=="object"&&"setInterval"in a},isNumeric:function(a){return!isNaN(parseFloat(a))&&isFinite(a)},type:function(a){return a==null?String(a):I[C.call(a)]||"object"},isPlainObject:function(a){if(!a||e.type(a)!=="object"||a.nodeType||e.isWindow(a))return!1;try{if(a.constructor&&!D.call(a,"constructor")&&!D.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}var d;for(d in a);return d===b||D.call(a,d)},isEmptyObject:function(a){for(var b in a)return!1;return!0},error:function(a){throw new Error(a)},parseJSON:function(b){if(typeof b!="string"||!b)return null;b=e.trim(b);if(a.JSON&&a.JSON.parse)return a.JSON.parse(b);if(n.test(b.replace(o,"@").replace(p,"]").replace(q,"")))return(new Function("return "+b))();e.error("Invalid JSON: "+b)},parseXML:function(c){var d,f;try{a.DOMParser?(f=new DOMParser,d=f.parseFromString(c,"text/xml")):(d=new ActiveXObject("Microsoft.XMLDOM"),d.async="false",d.loadXML(c))}catch(g){d=b}(!d||!d.documentElement||d.getElementsByTagName("parsererror").length)&&e.error("Invalid XML: "+c);return d},noop:function(){},globalEval:function(b){b&&j.test(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(w,"ms-").replace(v,x)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toUpperCase()===b.toUpperCase()},each:function(a,c,d){var f,g=0,h=a.length,i=h===b||e.isFunction(a);if(d){if(i){for(f in a)if(c.apply(a[f],d)===!1)break}else for(;g<h;)if(c.apply(a[g++],d)===!1)break}else if(i){for(f in a)if(c.call(a[f],f,a[f])===!1)break}else for(;g<h;)if(c.call(a[g],g,a[g++])===!1)break;return a},trim:G?function(a){return a==null?"":G.call(a)}:function(a){return a==null?"":(a+"").replace(k,"").replace(l,"")},makeArray:function(a,b){var c=b||[];if(a!=null){var d=e.type(a);a.length==null||d==="string"||d==="function"||d==="regexp"||e.isWindow(a)?E.call(c,a):e.merge(c,a)}return c},inArray:function(a,b,c){var d;if(b){if(H)return H.call(b,a,c);d=b.length,c=c?c<0?Math.max(0,d+c):c:0;for(;c<d;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,c){var d=a.length,e=0;if(typeof c.length=="number")for(var f=c.length;e<f;e++)a[d++]=c[e];else while(c[e]!==b)a[d++]=c[e++];a.length=d;return a},grep:function(a,b,c){var d=[],e;c=!!c;for(var f=0,g=a.length;f<g;f++)e=!!b(a[f],f),c!==e&&d.push(a[f]);return d},map:function(a,c,d){var f,g,h=[],i=0,j=a.length,k=a instanceof e||j!==b&&typeof j=="number"&&(j>0&&a[0]&&a[j-1]||j===0||e.isArray(a));if(k)for(;i<j;i++)f=c(a[i],i,d),f!=null&&(h[h.length]=f);else for(g in a)f=c(a[g],g,d),f!=null&&(h[h.length]=f);return h.concat.apply([],h)},guid:1,proxy:function(a,c){if(typeof c=="string"){var d=a[c];c=a,a=d}if(!e.isFunction(a))return b;var f=F.call(arguments,2),g=function(){return a.apply(c,f.concat(F.call(arguments)))};g.guid=a.guid=a.guid||g.guid||e.guid++;return g},access:function(a,c,d,f,g,h){var i=a.length;if(typeof c=="object"){for(var j in c)e.access(a,j,c[j],f,g,d);return a}if(d!==b){f=!h&&f&&e.isFunction(d);for(var k=0;k<i;k++)g(a[k],c,f?d.call(a[k],k,g(a[k],c)):d,h);return a}return i?g(a[0],c):b},now:function(){return(new Date).getTime()},uaMatch:function(a){a=a.toLowerCase();var b=r.exec(a)||s.exec(a)||t.exec(a)||a.indexOf("compatible")<0&&u.exec(a)||[];return{browser:b[1]||"",version:b[2]||"0"}},sub:function(){function a(b,c){return new a.fn.init(b,c)}e.extend(!0,a,this),a.superclass=this,a.fn=a.prototype=this(),a.fn.constructor=a,a.sub=this.sub,a.fn.init=function(d,f){f&&f instanceof e&&!(f instanceof a)&&(f=a(f));return e.fn.init.call(this,d,f,b)},a.fn.init.prototype=a.fn;var b=a(c);return a},browser:{}}),e.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(a,b){I["[object "+b+"]"]=b.toLowerCase()}),z=e.uaMatch(y),z.browser&&(e.browser[z.browser]=!0,e.browser.version=z.version),e.browser.webkit&&(e.browser.safari=!0),j.test(" ")&&(k=/^[\s\xA0]+/,l=/[\s\xA0]+$/),h=e(c),c.addEventListener?B=function(){c.removeEventListener("DOMContentLoaded",B,!1),e.ready()}:c.attachEvent&&(B=function(){c.readyState==="complete"&&(c.detachEvent("onreadystatechange",B),e.ready())});return e}(),g={};f.Callbacks=function(a){a=a?g[a]||h(a):{};var c=[],d=[],e,i,j,k,l,m=function(b){var d,e,g,h,i;for(d=0,e=b.length;d<e;d++)g=b[d],h=f.type(g),h==="array"?m(g):h==="function"&&(!a.unique||!o.has(g))&&c.push(g)},n=function(b,f){f=f||[],e=!a.memory||[b,f],i=!0,l=j||0,j=0,k=c.length;for(;c&&l<k;l++)if(c[l].apply(b,f)===!1&&a.stopOnFalse){e=!0;break}i=!1,c&&(a.once?e===!0?o.disable():c=[]:d&&d.length&&(e=d.shift(),o.fireWith(e[0],e[1])))},o={add:function(){if(c){var a=c.length;m(arguments),i?k=c.length:e&&e!==!0&&(j=a,n(e[0],e[1]))}return this},remove:function(){if(c){var b=arguments,d=0,e=b.length;for(;d<e;d++)for(var f=0;f<c.length;f++)if(b[d]===c[f]){i&&f<=k&&(k--,f<=l&&l--),c.splice(f--,1);if(a.unique)break}}return this},has:function(a){if(c){var b=0,d=c.length;for(;b<d;b++)if(a===c[b])return!0}return!1},empty:function(){c=[];return this},disable:function(){c=d=e=b;return this},disabled:function(){return!c},lock:function(){d=b,(!e||e===!0)&&o.disable();return this},locked:function(){return!d},fireWith:function(b,c){d&&(i?a.once||d.push([b,c]):(!a.once||!e)&&n(b,c));return this},fire:function(){o.fireWith(this,arguments);return this},fired:function(){return!!e}};return o};var i=[].slice;f.extend({Deferred:function(a){var b=f.Callbacks("once memory"),c=f.Callbacks("once memory"),d=f.Callbacks("memory"),e="pending",g={resolve:b,reject:c,notify:d},h={done:b.add,fail:c.add,progress:d.add,state:function(){return e},isResolved:b.fired,isRejected:c.fired,then:function(a,b,c){i.done(a).fail(b).progress(c);return this},always:function(){i.done.apply(i,arguments).fail.apply(i,arguments);return this},pipe:function(a,b,c){return f.Deferred(function(d){f.each({done:[a,"resolve"],fail:[b,"reject"],progress:[c,"notify"]},function(a,b){var c=b[0],e=b[1],g;f.isFunction(c)?i[a](function(){g=c.apply(this,arguments),g&&f.isFunction(g.promise)?g.promise().then(d.resolve,d.reject,d.notify):d[e+"With"](this===i?d:this,[g])}):i[a](d[e])})}).promise()},promise:function(a){if(a==null)a=h;else for(var b in h)a[b]=h[b];return a}},i=h.promise({}),j;for(j in g)i[j]=g[j].fire,i[j+"With"]=g[j].fireWith;i.done(function(){e="resolved"},c.disable,d.lock).fail(function(){e="rejected"},b.disable,d.lock),a&&a.call(i,i);return i},when:function(a){function m(a){return function(b){e[a]=arguments.length>1?i.call(arguments,0):b,j.notifyWith(k,e)}}function l(a){return function(c){b[a]=arguments.length>1?i.call(arguments,0):c,--g||j.resolveWith(j,b)}}var b=i.call(arguments,0),c=0,d=b.length,e=Array(d),g=d,h=d,j=d<=1&&a&&f.isFunction(a.promise)?a:f.Deferred(),k=j.promise();if(d>1){for(;c<d;c++)b[c]&&b[c].promise&&f.isFunction(b[c].promise)?b[c].promise().then(l(c),j.reject,m(c)):--g;g||j.resolveWith(j,b)}else j!==a&&j.resolveWith(j,d?[a]:[]);return k}}),f.support=function(){var b,d,e,g,h,i,j,k,l,m,n,o,p,q=c.createElement("div"),r=c.documentElement;q.setAttribute("className","t"),q.innerHTML="   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>",d=q.getElementsByTagName("*"),e=q.getElementsByTagName("a")[0];if(!d||!d.length||!e)return{};g=c.createElement("select"),h=g.appendChild(c.createElement("option")),i=q.getElementsByTagName("input")[0],b={leadingWhitespace:q.firstChild.nodeType===3,tbody:!q.getElementsByTagName("tbody").length,htmlSerialize:!!q.getElementsByTagName("link").length,style:/top/.test(e.getAttribute("style")),hrefNormalized:e.getAttribute("href")==="/a",opacity:/^0.55/.test(e.style.opacity),cssFloat:!!e.style.cssFloat,checkOn:i.value==="on",optSelected:h.selected,getSetAttribute:q.className!=="t",enctype:!!c.createElement("form").enctype,html5Clone:c.createElement("nav").cloneNode(!0).outerHTML!=="<:nav></:nav>",submitBubbles:!0,changeBubbles:!0,focusinBubbles:!1,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0},i.checked=!0,b.noCloneChecked=i.cloneNode(!0).checked,g.disabled=!0,b.optDisabled=!h.disabled;try{delete q.test}catch(s){b.deleteExpando=!1}!q.addEventListener&&q.attachEvent&&q.fireEvent&&(q.attachEvent("onclick",function(){b.noCloneEvent=!1}),q.cloneNode(!0).fireEvent("onclick")),i=c.createElement("input"),i.value="t",i.setAttribute("type","radio"),b.radioValue=i.value==="t",i.setAttribute("checked","checked"),q.appendChild(i),k=c.createDocumentFragment(),k.appendChild(q.lastChild),b.checkClone=k.cloneNode(!0).cloneNode(!0).lastChild.checked,b.appendChecked=i.checked,k.removeChild(i),k.appendChild(q),q.innerHTML="",a.getComputedStyle&&(j=c.createElement("div"),j.style.width="0",j.style.marginRight="0",q.style.width="2px",q.appendChild(j),b.reliableMarginRight=(parseInt((a.getComputedStyle(j,null)||{marginRight:0}).marginRight,10)||0)===0);if(q.attachEvent)for(o in{submit:1,change:1,focusin:1})n="on"+o,p=n in q,p||(q.setAttribute(n,"return;"),p=typeof q[n]=="function"),b[o+"Bubbles"]=p;k.removeChild(q),k=g=h=j=q=i=null,f(function(){var a,d,e,g,h,i,j,k,m,n,o,r=c.getElementsByTagName("body")[0];!r||(j=1,k="position:absolute;top:0;left:0;width:1px;height:1px;margin:0;",m="visibility:hidden;border:0;",n="style='"+k+"border:5px solid #000;padding:0;'",o="<div "+n+"><div></div></div>"+"<table "+n+" cellpadding='0' cellspacing='0'>"+"<tr><td></td></tr></table>",a=c.createElement("div"),a.style.cssText=m+"width:0;height:0;position:static;top:0;margin-top:"+j+"px",r.insertBefore(a,r.firstChild),q=c.createElement("div"),a.appendChild(q),q.innerHTML="<table><tr><td style='padding:0;border:0;display:none'></td><td>t</td></tr></table>",l=q.getElementsByTagName("td"),p=l[0].offsetHeight===0,l[0].style.display="",l[1].style.display="none",b.reliableHiddenOffsets=p&&l[0].offsetHeight===0,q.innerHTML="",q.style.width=q.style.paddingLeft="1px",f.boxModel=b.boxModel=q.offsetWidth===2,typeof q.style.zoom!="undefined"&&(q.style.display="inline",q.style.zoom=1,b.inlineBlockNeedsLayout=q.offsetWidth===2,q.style.display="",q.innerHTML="<div style='width:4px;'></div>",b.shrinkWrapBlocks=q.offsetWidth!==2),q.style.cssText=k+m,q.innerHTML=o,d=q.firstChild,e=d.firstChild,h=d.nextSibling.firstChild.firstChild,i={doesNotAddBorder:e.offsetTop!==5,doesAddBorderForTableAndCells:h.offsetTop===5},e.style.position="fixed",e.style.top="20px",i.fixedPosition=e.offsetTop===20||e.offsetTop===15,e.style.position=e.style.top="",d.style.overflow="hidden",d.style.position="relative",i.subtractsBorderForOverflowNotVisible=e.offsetTop===-5,i.doesNotIncludeMarginInBodyOffset=r.offsetTop!==j,r.removeChild(a),q=a=null,f.extend(b,i))});return b}();var j=/^(?:\{.*\}|\[.*\])$/,k=/([A-Z])/g;f.extend({cache:{},uuid:0,expando:"jQuery"+(f.fn.jquery+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(a){a=a.nodeType?f.cache[a[f.expando]]:a[f.expando];return!!a&&!m(a)},data:function(a,c,d,e){if(!!f.acceptData(a)){var g,h,i,j=f.expando,k=typeof c=="string",l=a.nodeType,m=l?f.cache:a,n=l?a[j]:a[j]&&j,o=c==="events";if((!n||!m[n]||!o&&!e&&!m[n].data)&&k&&d===b)return;n||(l?a[j]=n=++f.uuid:n=j),m[n]||(m[n]={},l||(m[n].toJSON=f.noop));if(typeof c=="object"||typeof c=="function")e?m[n]=f.extend(m[n],c):m[n].data=f.extend(m[n].data,c);g=h=m[n],e||(h.data||(h.data={}),h=h.data),d!==b&&(h[f.camelCase(c)]=d);if(o&&!h[c])return g.events;k?(i=h[c],i==null&&(i=h[f.camelCase(c)])):i=h;return i}},removeData:function(a,b,c){if(!!f.acceptData(a)){var d,e,g,h=f.expando,i=a.nodeType,j=i?f.cache:a,k=i?a[h]:h;if(!j[k])return;if(b){d=c?j[k]:j[k].data;if(d){f.isArray(b)||(b in d?b=[b]:(b=f.camelCase(b),b in d?b=[b]:b=b.split(" ")));for(e=0,g=b.length;e<g;e++)delete d[b[e]];if(!(c?m:f.isEmptyObject)(d))return}}if(!c){delete j[k].data;if(!m(j[k]))return}f.support.deleteExpando||!j.setInterval?delete j[k]:j[k]=null,i&&(f.support.deleteExpando?delete a[h]:a.removeAttribute?a.removeAttribute(h):a[h]=null)}},_data:function(a,b,c){return f.data(a,b,c,!0)},acceptData:function(a){if(a.nodeName){var b=f.noData[a.nodeName.toLowerCase()];if(b)return b!==!0&&a.getAttribute("classid")===b}return!0}}),f.fn.extend({data:function(a,c){var d,e,g,h=null;if(typeof a=="undefined"){if(this.length){h=f.data(this[0]);if(this[0].nodeType===1&&!f._data(this[0],"parsedAttrs")){e=this[0].attributes;for(var i=0,j=e.length;i<j;i++)g=e[i].name,g.indexOf("data-")===0&&(g=f.camelCase(g.substring(5)),l(this[0],g,h[g]));f._data(this[0],"parsedAttrs",!0)}}return h}if(typeof a=="object")return this.each(function(){f.data(this,a)});d=a.split("."),d[1]=d[1]?"."+d[1]:"";if(c===b){h=this.triggerHandler("getData"+d[1]+"!",[d[0]]),h===b&&this.length&&(h=f.data(this[0],a),h=l(this[0],a,h));return h===b&&d[1]?this.data(d[0]):h}return this.each(function(){var b=f(this),e=[d[0],c];b.triggerHandler("setData"+d[1]+"!",e),f.data(this,a,c),b.triggerHandler("changeData"+d[1]+"!",e)})},removeData:function(a){return this.each(function(){f.removeData(this,a)})}}),f.extend({_mark:function(a,b){a&&(b=(b||"fx")+"mark",f._data(a,b,(f._data(a,b)||0)+1))},_unmark:function(a,b,c){a!==!0&&(c=b,b=a,a=!1);if(b){c=c||"fx";var d=c+"mark",e=a?0:(f._data(b,d)||1)-1;e?f._data(b,d,e):(f.removeData(b,d,!0),n(b,c,"mark"))}},queue:function(a,b,c){var d;if(a){b=(b||"fx")+"queue",d=f._data(a,b),c&&(!d||f.isArray(c)?d=f._data(a,b,f.makeArray(c)):d.push(c));return d||[]}},dequeue:function(a,b){b=b||"fx";var c=f.queue(a,b),d=c.shift(),e={};d==="inprogress"&&(d=c.shift()),d&&(b==="fx"&&c.unshift("inprogress"),f._data(a,b+".run",e),d.call(a,function(){f.dequeue(a,b)},e)),c.length||(f.removeData(a,b+"queue "+b+".run",!0),n(a,b,"queue"))}}),f.fn.extend({queue:function(a,c){typeof a!="string"&&(c=a,a="fx");if(c===b)return f.queue(this[0],a);return this.each(function(){var b=f.queue(this,a,c);a==="fx"&&b[0]!=="inprogress"&&f.dequeue(this,a)})},dequeue:function(a){return this.each(function(){f.dequeue(this,a)})},delay:function(a,b){a=f.fx?f.fx.speeds[a]||a:a,b=b||"fx";return this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,c){function m(){--h||d.resolveWith(e,[e])}typeof a!="string"&&(c=a,a=b),a=a||"fx";var d=f.Deferred(),e=this,g=e.length,h=1,i=a+"defer",j=a+"queue",k=a+"mark",l;while(g--)if(l=f.data(e[g],i,b,!0)||(f.data(e[g],j,b,!0)||f.data(e[g],k,b,!0))&&f.data(e[g],i,f.Callbacks("once memory"),!0))h++,l.add(m);m();return d.promise()}});var o=/[\n\t\r]/g,p=/\s+/,q=/\r/g,r=/^(?:button|input)$/i,s=/^(?:button|input|object|select|textarea)$/i,t=/^a(?:rea)?$/i,u=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,v=f.support.getSetAttribute,w,x,y;f.fn.extend({attr:function(a,b){return f.access(this,a,b,!0,f.attr)},removeAttr:function(a){return this.each(function(){f.removeAttr(this,a)})},prop:function(a,b){return f.access(this,a,b,!0,f.prop)},removeProp:function(a){a=f.propFix[a]||a;return this.each(function(){try{this[a]=b,delete this[a]}catch(c){}})},addClass:function(a){var b,c,d,e,g,h,i;if(f.isFunction(a))return this.each(function(b){f(this).addClass(a.call(this,b,this.className))});if(a&&typeof a=="string"){b=a.split(p);for(c=0,d=this.length;c<d;c++){e=this[c];if(e.nodeType===1)if(!e.className&&b.length===1)e.className=a;else{g=" "+e.className+" ";for(h=0,i=b.length;h<i;h++)~g.indexOf(" "+b[h]+" ")||(g+=b[h]+" ");e.className=f.trim(g)}}}return this},removeClass:function(a){var c,d,e,g,h,i,j;if(f.isFunction(a))return this.each(function(b){f(this).removeClass(a.call(this,b,this.className))});if(a&&typeof a=="string"||a===b){c=(a||"").split(p);for(d=0,e=this.length;d<e;d++){g=this[d];if(g.nodeType===1&&g.className)if(a){h=(" "+g.className+" ").replace(o," ");for(i=0,j=c.length;i<j;i++)h=h.replace(" "+c[i]+" "," ");g.className=f.trim(h)}else g.className=""}}return this},toggleClass:function(a,b){var c=typeof a,d=typeof b=="boolean";if(f.isFunction(a))return this.each(function(c){f(this).toggleClass(a.call(this,c,this.className,b),b)});return this.each(function(){if(c==="string"){var e,g=0,h=f(this),i=b,j=a.split(p);while(e=j[g++])i=d?i:!h.hasClass(e),h[i?"addClass":"removeClass"](e)}else if(c==="undefined"||c==="boolean")this.className&&f._data(this,"__className__",this.className),this.className=this.className||a===!1?"":f._data(this,"__className__")||""})},hasClass:function(a){var b=" "+a+" ",c=0,d=this.length;for(;c<d;c++)if(this[c].nodeType===1&&(" "+this[c].className+" ").replace(o," ").indexOf(b)>-1)return!0;return!1},val:function(a){var c,d,e,g=this[0];{if(!!arguments.length){e=f.isFunction(a);return this.each(function(d){var g=f(this),h;if(this.nodeType===1){e?h=a.call(this,d,g.val()):h=a,h==null?h="":typeof h=="number"?h+="":f.isArray(h)&&(h=f.map(h,function(a){return a==null?"":a+""})),c=f.valHooks[this.nodeName.toLowerCase()]||f.valHooks[this.type];if(!c||!("set"in c)||c.set(this,h,"value")===b)this.value=h}})}if(g){c=f.valHooks[g.nodeName.toLowerCase()]||f.valHooks[g.type];if(c&&"get"in c&&(d=c.get(g,"value"))!==b)return d;d=g.value;return typeof d=="string"?d.replace(q,""):d==null?"":d}}}}),f.extend({valHooks:{option:{get:function(a){var b=a.attributes.value;return!b||b.specified?a.value:a.text}},select:{get:function(a){var b,c,d,e,g=a.selectedIndex,h=[],i=a.options,j=a.type==="select-one";if(g<0)return null;c=j?g:0,d=j?g+1:i.length;for(;c<d;c++){e=i[c];if(e.selected&&(f.support.optDisabled?!e.disabled:e.getAttribute("disabled")===null)&&(!e.parentNode.disabled||!f.nodeName(e.parentNode,"optgroup"))){b=f(e).val();if(j)return b;h.push(b)}}if(j&&!h.length&&i.length)return f(i[g]).val();return h},set:function(a,b){var c=f.makeArray(b);f(a).find("option").each(function(){this.selected=f.inArray(f(this).val(),c)>=0}),c.length||(a.selectedIndex=-1);return c}}},attrFn:{val:!0,css:!0,html:!0,text:!0,data:!0,width:!0,height:!0,offset:!0},attr:function(a,c,d,e){var g,h,i,j=a.nodeType;if(!!a&&j!==3&&j!==8&&j!==2){if(e&&c in f.attrFn)return f(a)[c](d);if(typeof a.getAttribute=="undefined")return f.prop(a,c,d);i=j!==1||!f.isXMLDoc(a),i&&(c=c.toLowerCase(),h=f.attrHooks[c]||(u.test(c)?x:w));if(d!==b){if(d===null){f.removeAttr(a,c);return}if(h&&"set"in h&&i&&(g=h.set(a,d,c))!==b)return g;a.setAttribute(c,""+d);return d}if(h&&"get"in h&&i&&(g=h.get(a,c))!==null)return g;g=a.getAttribute(c);return g===null?b:g}},removeAttr:function(a,b){var c,d,e,g,h=0;if(b&&a.nodeType===1){d=b.toLowerCase().split(p),g=d.length;for(;h<g;h++)e=d[h],e&&(c=f.propFix[e]||e,f.attr(a,e,""),a.removeAttribute(v?e:c),u.test(e)&&c in a&&(a[c]=!1))}},attrHooks:{type:{set:function(a,b){if(r.test(a.nodeName)&&a.parentNode)f.error("type property can't be changed");else if(!f.support.radioValue&&b==="radio"&&f.nodeName(a,"input")){var c=a.value;a.setAttribute("type",b),c&&(a.value=c);return b}}},value:{get:function(a,b){if(w&&f.nodeName(a,"button"))return w.get(a,b);return b in a?a.value:null},set:function(a,b,c){if(w&&f.nodeName(a,"button"))return w.set(a,b,c);a.value=b}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(a,c,d){var e,g,h,i=a.nodeType;if(!!a&&i!==3&&i!==8&&i!==2){h=i!==1||!f.isXMLDoc(a),h&&(c=f.propFix[c]||c,g=f.propHooks[c]);return d!==b?g&&"set"in g&&(e=g.set(a,d,c))!==b?e:a[c]=d:g&&"get"in g&&(e=g.get(a,c))!==null?e:a[c]}},propHooks:{tabIndex:{get:function(a){var c=a.getAttributeNode("tabindex");return c&&c.specified?parseInt(c.value,10):s.test(a.nodeName)||t.test(a.nodeName)&&a.href?0:b}}}}),f.attrHooks.tabindex=f.propHooks.tabIndex,x={get:function(a,c){var d,e=f.prop(a,c);return e===!0||typeof e!="boolean"&&(d=a.getAttributeNode(c))&&d.nodeValue!==!1?c.toLowerCase():b},set:function(a,b,c){var d;b===!1?f.removeAttr(a,c):(d=f.propFix[c]||c,d in a&&(a[d]=!0),a.setAttribute(c,c.toLowerCase()));return c}},v||(y={name:!0,id:!0},w=f.valHooks.button={get:function(a,c){var d;d=a.getAttributeNode(c);return d&&(y[c]?d.nodeValue!=="":d.specified)?d.nodeValue:b},set:function(a,b,d){var e=a.getAttributeNode(d);e||(e=c.createAttribute(d),a.setAttributeNode(e));return e.nodeValue=b+""}},f.attrHooks.tabindex.set=w.set,f.each(["width","height"],function(a,b){f.attrHooks[b]=f.extend(f.attrHooks[b],{set:function(a,c){if(c===""){a.setAttribute(b,"auto");return c}}})}),f.attrHooks.contenteditable={get:w.get,set:function(a,b,c){b===""&&(b="false"),w.set(a,b,c)}}),f.support.hrefNormalized||f.each(["href","src","width","height"],function(a,c){f.attrHooks[c]=f.extend(f.attrHooks[c],{get:function(a){var d=a.getAttribute(c,2);return d===null?b:d}})}),f.support.style||(f.attrHooks.style={get:function(a){return a.style.cssText.toLowerCase()||b},set:function(a,b){return a.style.cssText=""+b}}),f.support.optSelected||(f.propHooks.selected=f.extend(f.propHooks.selected,{get:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex);return null}})),f.support.enctype||(f.propFix.enctype="encoding"),f.support.checkOn||f.each(["radio","checkbox"],function(){f.valHooks[this]={get:function(a){return a.getAttribute("value")===null?"on":a.value}}}),f.each(["radio","checkbox"],function(){f.valHooks[this]=f.extend(f.valHooks[this],{set:function(a,b){if(f.isArray(b))return a.checked=f.inArray(f(a).val(),b)>=0}})});var z=/^(?:textarea|input|select)$/i,A=/^([^\.]*)?(?:\.(.+))?$/,B=/\bhover(\.\S+)?\b/,C=/^key/,D=/^(?:mouse|contextmenu)|click/,E=/^(?:focusinfocus|focusoutblur)$/,F=/^(\w*)(?:#([\w\-]+))?(?:\.([\w\-]+))?$/,G=function(a){var b=F.exec(a);b&&(b[1]=(b[1]||"").toLowerCase(),b[3]=b[3]&&new RegExp("(?:^|\\s)"+b[3]+"(?:\\s|$)"));return b},H=function(a,b){var c=a.attributes||{};return(!b[1]||a.nodeName.toLowerCase()===b[1])&&(!b[2]||(c.id||{}).value===b[2])&&(!b[3]||b[3].test((c["class"]||{}).value))},I=function(a){return f.event.special.hover?a:a.replace(B,"mouseenter$1 mouseleave$1")};
f.event={add:function(a,c,d,e,g){var h,i,j,k,l,m,n,o,p,q,r,s;if(!(a.nodeType===3||a.nodeType===8||!c||!d||!(h=f._data(a)))){d.handler&&(p=d,d=p.handler),d.guid||(d.guid=f.guid++),j=h.events,j||(h.events=j={}),i=h.handle,i||(h.handle=i=function(a){return typeof f!="undefined"&&(!a||f.event.triggered!==a.type)?f.event.dispatch.apply(i.elem,arguments):b},i.elem=a),c=f.trim(I(c)).split(" ");for(k=0;k<c.length;k++){l=A.exec(c[k])||[],m=l[1],n=(l[2]||"").split(".").sort(),s=f.event.special[m]||{},m=(g?s.delegateType:s.bindType)||m,s=f.event.special[m]||{},o=f.extend({type:m,origType:l[1],data:e,handler:d,guid:d.guid,selector:g,quick:G(g),namespace:n.join(".")},p),r=j[m];if(!r){r=j[m]=[],r.delegateCount=0;if(!s.setup||s.setup.call(a,e,n,i)===!1)a.addEventListener?a.addEventListener(m,i,!1):a.attachEvent&&a.attachEvent("on"+m,i)}s.add&&(s.add.call(a,o),o.handler.guid||(o.handler.guid=d.guid)),g?r.splice(r.delegateCount++,0,o):r.push(o),f.event.global[m]=!0}a=null}},global:{},remove:function(a,b,c,d,e){var g=f.hasData(a)&&f._data(a),h,i,j,k,l,m,n,o,p,q,r,s;if(!!g&&!!(o=g.events)){b=f.trim(I(b||"")).split(" ");for(h=0;h<b.length;h++){i=A.exec(b[h])||[],j=k=i[1],l=i[2];if(!j){for(j in o)f.event.remove(a,j+b[h],c,d,!0);continue}p=f.event.special[j]||{},j=(d?p.delegateType:p.bindType)||j,r=o[j]||[],m=r.length,l=l?new RegExp("(^|\\.)"+l.split(".").sort().join("\\.(?:.*\\.)?")+"(\\.|$)"):null;for(n=0;n<r.length;n++)s=r[n],(e||k===s.origType)&&(!c||c.guid===s.guid)&&(!l||l.test(s.namespace))&&(!d||d===s.selector||d==="**"&&s.selector)&&(r.splice(n--,1),s.selector&&r.delegateCount--,p.remove&&p.remove.call(a,s));r.length===0&&m!==r.length&&((!p.teardown||p.teardown.call(a,l)===!1)&&f.removeEvent(a,j,g.handle),delete o[j])}f.isEmptyObject(o)&&(q=g.handle,q&&(q.elem=null),f.removeData(a,["events","handle"],!0))}},customEvent:{getData:!0,setData:!0,changeData:!0},trigger:function(c,d,e,g){if(!e||e.nodeType!==3&&e.nodeType!==8){var h=c.type||c,i=[],j,k,l,m,n,o,p,q,r,s;if(E.test(h+f.event.triggered))return;h.indexOf("!")>=0&&(h=h.slice(0,-1),k=!0),h.indexOf(".")>=0&&(i=h.split("."),h=i.shift(),i.sort());if((!e||f.event.customEvent[h])&&!f.event.global[h])return;c=typeof c=="object"?c[f.expando]?c:new f.Event(h,c):new f.Event(h),c.type=h,c.isTrigger=!0,c.exclusive=k,c.namespace=i.join("."),c.namespace_re=c.namespace?new RegExp("(^|\\.)"+i.join("\\.(?:.*\\.)?")+"(\\.|$)"):null,o=h.indexOf(":")<0?"on"+h:"";if(!e){j=f.cache;for(l in j)j[l].events&&j[l].events[h]&&f.event.trigger(c,d,j[l].handle.elem,!0);return}c.result=b,c.target||(c.target=e),d=d!=null?f.makeArray(d):[],d.unshift(c),p=f.event.special[h]||{};if(p.trigger&&p.trigger.apply(e,d)===!1)return;r=[[e,p.bindType||h]];if(!g&&!p.noBubble&&!f.isWindow(e)){s=p.delegateType||h,m=E.test(s+h)?e:e.parentNode,n=null;for(;m;m=m.parentNode)r.push([m,s]),n=m;n&&n===e.ownerDocument&&r.push([n.defaultView||n.parentWindow||a,s])}for(l=0;l<r.length&&!c.isPropagationStopped();l++)m=r[l][0],c.type=r[l][1],q=(f._data(m,"events")||{})[c.type]&&f._data(m,"handle"),q&&q.apply(m,d),q=o&&m[o],q&&f.acceptData(m)&&q.apply(m,d)===!1&&c.preventDefault();c.type=h,!g&&!c.isDefaultPrevented()&&(!p._default||p._default.apply(e.ownerDocument,d)===!1)&&(h!=="click"||!f.nodeName(e,"a"))&&f.acceptData(e)&&o&&e[h]&&(h!=="focus"&&h!=="blur"||c.target.offsetWidth!==0)&&!f.isWindow(e)&&(n=e[o],n&&(e[o]=null),f.event.triggered=h,e[h](),f.event.triggered=b,n&&(e[o]=n));return c.result}},dispatch:function(c){c=f.event.fix(c||a.event);var d=(f._data(this,"events")||{})[c.type]||[],e=d.delegateCount,g=[].slice.call(arguments,0),h=!c.exclusive&&!c.namespace,i=[],j,k,l,m,n,o,p,q,r,s,t;g[0]=c,c.delegateTarget=this;if(e&&!c.target.disabled&&(!c.button||c.type!=="click")){m=f(this),m.context=this.ownerDocument||this;for(l=c.target;l!=this;l=l.parentNode||this){o={},q=[],m[0]=l;for(j=0;j<e;j++)r=d[j],s=r.selector,o[s]===b&&(o[s]=r.quick?H(l,r.quick):m.is(s)),o[s]&&q.push(r);q.length&&i.push({elem:l,matches:q})}}d.length>e&&i.push({elem:this,matches:d.slice(e)});for(j=0;j<i.length&&!c.isPropagationStopped();j++){p=i[j],c.currentTarget=p.elem;for(k=0;k<p.matches.length&&!c.isImmediatePropagationStopped();k++){r=p.matches[k];if(h||!c.namespace&&!r.namespace||c.namespace_re&&c.namespace_re.test(r.namespace))c.data=r.data,c.handleObj=r,n=((f.event.special[r.origType]||{}).handle||r.handler).apply(p.elem,g),n!==b&&(c.result=n,n===!1&&(c.preventDefault(),c.stopPropagation()))}}return c.result},props:"attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){a.which==null&&(a.which=b.charCode!=null?b.charCode:b.keyCode);return a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,d){var e,f,g,h=d.button,i=d.fromElement;a.pageX==null&&d.clientX!=null&&(e=a.target.ownerDocument||c,f=e.documentElement,g=e.body,a.pageX=d.clientX+(f&&f.scrollLeft||g&&g.scrollLeft||0)-(f&&f.clientLeft||g&&g.clientLeft||0),a.pageY=d.clientY+(f&&f.scrollTop||g&&g.scrollTop||0)-(f&&f.clientTop||g&&g.clientTop||0)),!a.relatedTarget&&i&&(a.relatedTarget=i===a.target?d.toElement:i),!a.which&&h!==b&&(a.which=h&1?1:h&2?3:h&4?2:0);return a}},fix:function(a){if(a[f.expando])return a;var d,e,g=a,h=f.event.fixHooks[a.type]||{},i=h.props?this.props.concat(h.props):this.props;a=f.Event(g);for(d=i.length;d;)e=i[--d],a[e]=g[e];a.target||(a.target=g.srcElement||c),a.target.nodeType===3&&(a.target=a.target.parentNode),a.metaKey===b&&(a.metaKey=a.ctrlKey);return h.filter?h.filter(a,g):a},special:{ready:{setup:f.bindReady},load:{noBubble:!0},focus:{delegateType:"focusin"},blur:{delegateType:"focusout"},beforeunload:{setup:function(a,b,c){f.isWindow(this)&&(this.onbeforeunload=c)},teardown:function(a,b){this.onbeforeunload===b&&(this.onbeforeunload=null)}}},simulate:function(a,b,c,d){var e=f.extend(new f.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?f.event.trigger(e,null,b):f.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},f.event.handle=f.event.dispatch,f.removeEvent=c.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){a.detachEvent&&a.detachEvent("on"+b,c)},f.Event=function(a,b){if(!(this instanceof f.Event))return new f.Event(a,b);a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||a.returnValue===!1||a.getPreventDefault&&a.getPreventDefault()?K:J):this.type=a,b&&f.extend(this,b),this.timeStamp=a&&a.timeStamp||f.now(),this[f.expando]=!0},f.Event.prototype={preventDefault:function(){this.isDefaultPrevented=K;var a=this.originalEvent;!a||(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){this.isPropagationStopped=K;var a=this.originalEvent;!a||(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=K,this.stopPropagation()},isDefaultPrevented:J,isPropagationStopped:J,isImmediatePropagationStopped:J},f.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(a,b){f.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c=this,d=a.relatedTarget,e=a.handleObj,g=e.selector,h;if(!d||d!==c&&!f.contains(c,d))a.type=e.origType,h=e.handler.apply(this,arguments),a.type=b;return h}}}),f.support.submitBubbles||(f.event.special.submit={setup:function(){if(f.nodeName(this,"form"))return!1;f.event.add(this,"click._submit keypress._submit",function(a){var c=a.target,d=f.nodeName(c,"input")||f.nodeName(c,"button")?c.form:b;d&&!d._submit_attached&&(f.event.add(d,"submit._submit",function(a){this.parentNode&&!a.isTrigger&&f.event.simulate("submit",this.parentNode,a,!0)}),d._submit_attached=!0)})},teardown:function(){if(f.nodeName(this,"form"))return!1;f.event.remove(this,"._submit")}}),f.support.changeBubbles||(f.event.special.change={setup:function(){if(z.test(this.nodeName)){if(this.type==="checkbox"||this.type==="radio")f.event.add(this,"propertychange._change",function(a){a.originalEvent.propertyName==="checked"&&(this._just_changed=!0)}),f.event.add(this,"click._change",function(a){this._just_changed&&!a.isTrigger&&(this._just_changed=!1,f.event.simulate("change",this,a,!0))});return!1}f.event.add(this,"beforeactivate._change",function(a){var b=a.target;z.test(b.nodeName)&&!b._change_attached&&(f.event.add(b,"change._change",function(a){this.parentNode&&!a.isSimulated&&!a.isTrigger&&f.event.simulate("change",this.parentNode,a,!0)}),b._change_attached=!0)})},handle:function(a){var b=a.target;if(this!==b||a.isSimulated||a.isTrigger||b.type!=="radio"&&b.type!=="checkbox")return a.handleObj.handler.apply(this,arguments)},teardown:function(){f.event.remove(this,"._change");return z.test(this.nodeName)}}),f.support.focusinBubbles||f.each({focus:"focusin",blur:"focusout"},function(a,b){var d=0,e=function(a){f.event.simulate(b,a.target,f.event.fix(a),!0)};f.event.special[b]={setup:function(){d++===0&&c.addEventListener(a,e,!0)},teardown:function(){--d===0&&c.removeEventListener(a,e,!0)}}}),f.fn.extend({on:function(a,c,d,e,g){var h,i;if(typeof a=="object"){typeof c!="string"&&(d=c,c=b);for(i in a)this.on(i,c,d,a[i],g);return this}d==null&&e==null?(e=c,d=c=b):e==null&&(typeof c=="string"?(e=d,d=b):(e=d,d=c,c=b));if(e===!1)e=J;else if(!e)return this;g===1&&(h=e,e=function(a){f().off(a);return h.apply(this,arguments)},e.guid=h.guid||(h.guid=f.guid++));return this.each(function(){f.event.add(this,a,e,d,c)})},one:function(a,b,c,d){return this.on.call(this,a,b,c,d,1)},off:function(a,c,d){if(a&&a.preventDefault&&a.handleObj){var e=a.handleObj;f(a.delegateTarget).off(e.namespace?e.type+"."+e.namespace:e.type,e.selector,e.handler);return this}if(typeof a=="object"){for(var g in a)this.off(g,c,a[g]);return this}if(c===!1||typeof c=="function")d=c,c=b;d===!1&&(d=J);return this.each(function(){f.event.remove(this,a,d,c)})},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},live:function(a,b,c){f(this.context).on(a,this.selector,b,c);return this},die:function(a,b){f(this.context).off(a,this.selector||"**",b);return this},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return arguments.length==1?this.off(a,"**"):this.off(b,a,c)},trigger:function(a,b){return this.each(function(){f.event.trigger(a,b,this)})},triggerHandler:function(a,b){if(this[0])return f.event.trigger(a,b,this[0],!0)},toggle:function(a){var b=arguments,c=a.guid||f.guid++,d=0,e=function(c){var e=(f._data(this,"lastToggle"+a.guid)||0)%d;f._data(this,"lastToggle"+a.guid,e+1),c.preventDefault();return b[e].apply(this,arguments)||!1};e.guid=c;while(d<b.length)b[d++].guid=c;return this.click(e)},hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),f.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){f.fn[b]=function(a,c){c==null&&(c=a,a=null);return arguments.length>0?this.on(b,null,a,c):this.trigger(b)},f.attrFn&&(f.attrFn[b]=!0),C.test(b)&&(f.event.fixHooks[b]=f.event.keyHooks),D.test(b)&&(f.event.fixHooks[b]=f.event.mouseHooks)}),function(){function x(a,b,c,e,f,g){for(var h=0,i=e.length;h<i;h++){var j=e[h];if(j){var k=!1;j=j[a];while(j){if(j[d]===c){k=e[j.sizset];break}if(j.nodeType===1){g||(j[d]=c,j.sizset=h);if(typeof b!="string"){if(j===b){k=!0;break}}else if(m.filter(b,[j]).length>0){k=j;break}}j=j[a]}e[h]=k}}}function w(a,b,c,e,f,g){for(var h=0,i=e.length;h<i;h++){var j=e[h];if(j){var k=!1;j=j[a];while(j){if(j[d]===c){k=e[j.sizset];break}j.nodeType===1&&!g&&(j[d]=c,j.sizset=h);if(j.nodeName.toLowerCase()===b){k=j;break}j=j[a]}e[h]=k}}}var a=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,d="sizcache"+(Math.random()+"").replace(".",""),e=0,g=Object.prototype.toString,h=!1,i=!0,j=/\\/g,k=/\r\n/g,l=/\W/;[0,0].sort(function(){i=!1;return 0});var m=function(b,d,e,f){e=e||[],d=d||c;var h=d;if(d.nodeType!==1&&d.nodeType!==9)return[];if(!b||typeof b!="string")return e;var i,j,k,l,n,q,r,t,u=!0,v=m.isXML(d),w=[],x=b;do{a.exec(""),i=a.exec(x);if(i){x=i[3],w.push(i[1]);if(i[2]){l=i[3];break}}}while(i);if(w.length>1&&p.exec(b))if(w.length===2&&o.relative[w[0]])j=y(w[0]+w[1],d,f);else{j=o.relative[w[0]]?[d]:m(w.shift(),d);while(w.length)b=w.shift(),o.relative[b]&&(b+=w.shift()),j=y(b,j,f)}else{!f&&w.length>1&&d.nodeType===9&&!v&&o.match.ID.test(w[0])&&!o.match.ID.test(w[w.length-1])&&(n=m.find(w.shift(),d,v),d=n.expr?m.filter(n.expr,n.set)[0]:n.set[0]);if(d){n=f?{expr:w.pop(),set:s(f)}:m.find(w.pop(),w.length===1&&(w[0]==="~"||w[0]==="+")&&d.parentNode?d.parentNode:d,v),j=n.expr?m.filter(n.expr,n.set):n.set,w.length>0?k=s(j):u=!1;while(w.length)q=w.pop(),r=q,o.relative[q]?r=w.pop():q="",r==null&&(r=d),o.relative[q](k,r,v)}else k=w=[]}k||(k=j),k||m.error(q||b);if(g.call(k)==="[object Array]")if(!u)e.push.apply(e,k);else if(d&&d.nodeType===1)for(t=0;k[t]!=null;t++)k[t]&&(k[t]===!0||k[t].nodeType===1&&m.contains(d,k[t]))&&e.push(j[t]);else for(t=0;k[t]!=null;t++)k[t]&&k[t].nodeType===1&&e.push(j[t]);else s(k,e);l&&(m(l,h,e,f),m.uniqueSort(e));return e};m.uniqueSort=function(a){if(u){h=i,a.sort(u);if(h)for(var b=1;b<a.length;b++)a[b]===a[b-1]&&a.splice(b--,1)}return a},m.matches=function(a,b){return m(a,null,null,b)},m.matchesSelector=function(a,b){return m(b,null,null,[a]).length>0},m.find=function(a,b,c){var d,e,f,g,h,i;if(!a)return[];for(e=0,f=o.order.length;e<f;e++){h=o.order[e];if(g=o.leftMatch[h].exec(a)){i=g[1],g.splice(1,1);if(i.substr(i.length-1)!=="\\"){g[1]=(g[1]||"").replace(j,""),d=o.find[h](g,b,c);if(d!=null){a=a.replace(o.match[h],"");break}}}}d||(d=typeof b.getElementsByTagName!="undefined"?b.getElementsByTagName("*"):[]);return{set:d,expr:a}},m.filter=function(a,c,d,e){var f,g,h,i,j,k,l,n,p,q=a,r=[],s=c,t=c&&c[0]&&m.isXML(c[0]);while(a&&c.length){for(h in o.filter)if((f=o.leftMatch[h].exec(a))!=null&&f[2]){k=o.filter[h],l=f[1],g=!1,f.splice(1,1);if(l.substr(l.length-1)==="\\")continue;s===r&&(r=[]);if(o.preFilter[h]){f=o.preFilter[h](f,s,d,r,e,t);if(!f)g=i=!0;else if(f===!0)continue}if(f)for(n=0;(j=s[n])!=null;n++)j&&(i=k(j,f,n,s),p=e^i,d&&i!=null?p?g=!0:s[n]=!1:p&&(r.push(j),g=!0));if(i!==b){d||(s=r),a=a.replace(o.match[h],"");if(!g)return[];break}}if(a===q)if(g==null)m.error(a);else break;q=a}return s},m.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)};var n=m.getText=function(a){var b,c,d=a.nodeType,e="";if(d){if(d===1||d===9){if(typeof a.textContent=="string")return a.textContent;if(typeof a.innerText=="string")return a.innerText.replace(k,"");for(a=a.firstChild;a;a=a.nextSibling)e+=n(a)}else if(d===3||d===4)return a.nodeValue}else for(b=0;c=a[b];b++)c.nodeType!==8&&(e+=n(c));return e},o=m.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,CLASS:/\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/},leftMatch:{},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(a){return a.getAttribute("href")},type:function(a){return a.getAttribute("type")}},relative:{"+":function(a,b){var c=typeof b=="string",d=c&&!l.test(b),e=c&&!d;d&&(b=b.toLowerCase());for(var f=0,g=a.length,h;f<g;f++)if(h=a[f]){while((h=h.previousSibling)&&h.nodeType!==1);a[f]=e||h&&h.nodeName.toLowerCase()===b?h||!1:h===b}e&&m.filter(b,a,!0)},">":function(a,b){var c,d=typeof b=="string",e=0,f=a.length;if(d&&!l.test(b)){b=b.toLowerCase();for(;e<f;e++){c=a[e];if(c){var g=c.parentNode;a[e]=g.nodeName.toLowerCase()===b?g:!1}}}else{for(;e<f;e++)c=a[e],c&&(a[e]=d?c.parentNode:c.parentNode===b);d&&m.filter(b,a,!0)}},"":function(a,b,c){var d,f=e++,g=x;typeof b=="string"&&!l.test(b)&&(b=b.toLowerCase(),d=b,g=w),g("parentNode",b,f,a,d,c)},"~":function(a,b,c){var d,f=e++,g=x;typeof b=="string"&&!l.test(b)&&(b=b.toLowerCase(),d=b,g=w),g("previousSibling",b,f,a,d,c)}},find:{ID:function(a,b,c){if(typeof b.getElementById!="undefined"&&!c){var d=b.getElementById(a[1]);return d&&d.parentNode?[d]:[]}},NAME:function(a,b){if(typeof b.getElementsByName!="undefined"){var c=[],d=b.getElementsByName(a[1]);for(var e=0,f=d.length;e<f;e++)d[e].getAttribute("name")===a[1]&&c.push(d[e]);return c.length===0?null:c}},TAG:function(a,b){if(typeof b.getElementsByTagName!="undefined")return b.getElementsByTagName(a[1])}},preFilter:{CLASS:function(a,b,c,d,e,f){a=" "+a[1].replace(j,"")+" ";if(f)return a;for(var g=0,h;(h=b[g])!=null;g++)h&&(e^(h.className&&(" "+h.className+" ").replace(/[\t\n\r]/g," ").indexOf(a)>=0)?c||d.push(h):c&&(b[g]=!1));return!1},ID:function(a){return a[1].replace(j,"")},TAG:function(a,b){return a[1].replace(j,"").toLowerCase()},CHILD:function(a){if(a[1]==="nth"){a[2]||m.error(a[0]),a[2]=a[2].replace(/^\+|\s*/g,"");var b=/(-?)(\d*)(?:n([+\-]?\d*))?/.exec(a[2]==="even"&&"2n"||a[2]==="odd"&&"2n+1"||!/\D/.test(a[2])&&"0n+"+a[2]||a[2]);a[2]=b[1]+(b[2]||1)-0,a[3]=b[3]-0}else a[2]&&m.error(a[0]);a[0]=e++;return a},ATTR:function(a,b,c,d,e,f){var g=a[1]=a[1].replace(j,"");!f&&o.attrMap[g]&&(a[1]=o.attrMap[g]),a[4]=(a[4]||a[5]||"").replace(j,""),a[2]==="~="&&(a[4]=" "+a[4]+" ");return a},PSEUDO:function(b,c,d,e,f){if(b[1]==="not")if((a.exec(b[3])||"").length>1||/^\w/.test(b[3]))b[3]=m(b[3],null,null,c);else{var g=m.filter(b[3],c,d,!0^f);d||e.push.apply(e,g);return!1}else if(o.match.POS.test(b[0])||o.match.CHILD.test(b[0]))return!0;return b},POS:function(a){a.unshift(!0);return a}},filters:{enabled:function(a){return a.disabled===!1&&a.type!=="hidden"},disabled:function(a){return a.disabled===!0},checked:function(a){return a.checked===!0},selected:function(a){a.parentNode&&a.parentNode.selectedIndex;return a.selected===!0},parent:function(a){return!!a.firstChild},empty:function(a){return!a.firstChild},has:function(a,b,c){return!!m(c[3],a).length},header:function(a){return/h\d/i.test(a.nodeName)},text:function(a){var b=a.getAttribute("type"),c=a.type;return a.nodeName.toLowerCase()==="input"&&"text"===c&&(b===c||b===null)},radio:function(a){return a.nodeName.toLowerCase()==="input"&&"radio"===a.type},checkbox:function(a){return a.nodeName.toLowerCase()==="input"&&"checkbox"===a.type},file:function(a){return a.nodeName.toLowerCase()==="input"&&"file"===a.type},password:function(a){return a.nodeName.toLowerCase()==="input"&&"password"===a.type},submit:function(a){var b=a.nodeName.toLowerCase();return(b==="input"||b==="button")&&"submit"===a.type},image:function(a){return a.nodeName.toLowerCase()==="input"&&"image"===a.type},reset:function(a){var b=a.nodeName.toLowerCase();return(b==="input"||b==="button")&&"reset"===a.type},button:function(a){var b=a.nodeName.toLowerCase();return b==="input"&&"button"===a.type||b==="button"},input:function(a){return/input|select|textarea|button/i.test(a.nodeName)},focus:function(a){return a===a.ownerDocument.activeElement}},setFilters:{first:function(a,b){return b===0},last:function(a,b,c,d){return b===d.length-1},even:function(a,b){return b%2===0},odd:function(a,b){return b%2===1},lt:function(a,b,c){return b<c[3]-0},gt:function(a,b,c){return b>c[3]-0},nth:function(a,b,c){return c[3]-0===b},eq:function(a,b,c){return c[3]-0===b}},filter:{PSEUDO:function(a,b,c,d){var e=b[1],f=o.filters[e];if(f)return f(a,c,b,d);if(e==="contains")return(a.textContent||a.innerText||n([a])||"").indexOf(b[3])>=0;if(e==="not"){var g=b[3];for(var h=0,i=g.length;h<i;h++)if(g[h]===a)return!1;return!0}m.error(e)},CHILD:function(a,b){var c,e,f,g,h,i,j,k=b[1],l=a;switch(k){case"only":case"first":while(l=l.previousSibling)if(l.nodeType===1)return!1;if(k==="first")return!0;l=a;case"last":while(l=l.nextSibling)if(l.nodeType===1)return!1;return!0;case"nth":c=b[2],e=b[3];if(c===1&&e===0)return!0;f=b[0],g=a.parentNode;if(g&&(g[d]!==f||!a.nodeIndex)){i=0;for(l=g.firstChild;l;l=l.nextSibling)l.nodeType===1&&(l.nodeIndex=++i);g[d]=f}j=a.nodeIndex-e;return c===0?j===0:j%c===0&&j/c>=0}},ID:function(a,b){return a.nodeType===1&&a.getAttribute("id")===b},TAG:function(a,b){return b==="*"&&a.nodeType===1||!!a.nodeName&&a.nodeName.toLowerCase()===b},CLASS:function(a,b){return(" "+(a.className||a.getAttribute("class"))+" ").indexOf(b)>-1},ATTR:function(a,b){var c=b[1],d=m.attr?m.attr(a,c):o.attrHandle[c]?o.attrHandle[c](a):a[c]!=null?a[c]:a.getAttribute(c),e=d+"",f=b[2],g=b[4];return d==null?f==="!=":!f&&m.attr?d!=null:f==="="?e===g:f==="*="?e.indexOf(g)>=0:f==="~="?(" "+e+" ").indexOf(g)>=0:g?f==="!="?e!==g:f==="^="?e.indexOf(g)===0:f==="$="?e.substr(e.length-g.length)===g:f==="|="?e===g||e.substr(0,g.length+1)===g+"-":!1:e&&d!==!1},POS:function(a,b,c,d){var e=b[2],f=o.setFilters[e];if(f)return f(a,c,b,d)}}},p=o.match.POS,q=function(a,b){return"\\"+(b-0+1)};for(var r in o.match)o.match[r]=new RegExp(o.match[r].source+/(?![^\[]*\])(?![^\(]*\))/.source),o.leftMatch[r]=new RegExp(/(^(?:.|\r|\n)*?)/.source+o.match[r].source.replace(/\\(\d+)/g,q));var s=function(a,b){a=Array.prototype.slice.call(a,0);if(b){b.push.apply(b,a);return b}return a};try{Array.prototype.slice.call(c.documentElement.childNodes,0)[0].nodeType}catch(t){s=function(a,b){var c=0,d=b||[];if(g.call(a)==="[object Array]")Array.prototype.push.apply(d,a);else if(typeof a.length=="number")for(var e=a.length;c<e;c++)d.push(a[c]);else for(;a[c];c++)d.push(a[c]);return d}}var u,v;c.documentElement.compareDocumentPosition?u=function(a,b){if(a===b){h=!0;return 0}if(!a.compareDocumentPosition||!b.compareDocumentPosition)return a.compareDocumentPosition?-1:1;return a.compareDocumentPosition(b)&4?-1:1}:(u=function(a,b){if(a===b){h=!0;return 0}if(a.sourceIndex&&b.sourceIndex)return a.sourceIndex-b.sourceIndex;var c,d,e=[],f=[],g=a.parentNode,i=b.parentNode,j=g;if(g===i)return v(a,b);if(!g)return-1;if(!i)return 1;while(j)e.unshift(j),j=j.parentNode;j=i;while(j)f.unshift(j),j=j.parentNode;c=e.length,d=f.length;for(var k=0;k<c&&k<d;k++)if(e[k]!==f[k])return v(e[k],f[k]);return k===c?v(a,f[k],-1):v(e[k],b,1)},v=function(a,b,c){if(a===b)return c;var d=a.nextSibling;while(d){if(d===b)return-1;d=d.nextSibling}return 1}),function(){var a=c.createElement("div"),d="script"+(new Date).getTime(),e=c.documentElement;a.innerHTML="<a name='"+d+"'/>",e.insertBefore(a,e.firstChild),c.getElementById(d)&&(o.find.ID=function(a,c,d){if(typeof c.getElementById!="undefined"&&!d){var e=c.getElementById(a[1]);return e?e.id===a[1]||typeof e.getAttributeNode!="undefined"&&e.getAttributeNode("id").nodeValue===a[1]?[e]:b:[]}},o.filter.ID=function(a,b){var c=typeof a.getAttributeNode!="undefined"&&a.getAttributeNode("id");return a.nodeType===1&&c&&c.nodeValue===b}),e.removeChild(a),e=a=null}(),function(){var a=c.createElement("div");a.appendChild(c.createComment("")),a.getElementsByTagName("*").length>0&&(o.find.TAG=function(a,b){var c=b.getElementsByTagName(a[1]);if(a[1]==="*"){var d=[];for(var e=0;c[e];e++)c[e].nodeType===1&&d.push(c[e]);c=d}return c}),a.innerHTML="<a href='#'></a>",a.firstChild&&typeof a.firstChild.getAttribute!="undefined"&&a.firstChild.getAttribute("href")!=="#"&&(o.attrHandle.href=function(a){return a.getAttribute("href",2)}),a=null}(),c.querySelectorAll&&function(){var a=m,b=c.createElement("div"),d="__sizzle__";b.innerHTML="<p class='TEST'></p>";if(!b.querySelectorAll||b.querySelectorAll(".TEST").length!==0){m=function(b,e,f,g){e=e||c;if(!g&&!m.isXML(e)){var h=/^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(b);if(h&&(e.nodeType===1||e.nodeType===9)){if(h[1])return s(e.getElementsByTagName(b),f);if(h[2]&&o.find.CLASS&&e.getElementsByClassName)return s(e.getElementsByClassName(h[2]),f)}if(e.nodeType===9){if(b==="body"&&e.body)return s([e.body],f);if(h&&h[3]){var i=e.getElementById(h[3]);if(!i||!i.parentNode)return s([],f);if(i.id===h[3])return s([i],f)}try{return s(e.querySelectorAll(b),f)}catch(j){}}else if(e.nodeType===1&&e.nodeName.toLowerCase()!=="object"){var k=e,l=e.getAttribute("id"),n=l||d,p=e.parentNode,q=/^\s*[+~]/.test(b);l?n=n.replace(/'/g,"\\$&"):e.setAttribute("id",n),q&&p&&(e=e.parentNode);try{if(!q||p)return s(e.querySelectorAll("[id='"+n+"'] "+b),f)}catch(r){}finally{l||k.removeAttribute("id")}}}return a(b,e,f,g)};for(var e in a)m[e]=a[e];b=null}}(),function(){var a=c.documentElement,b=a.matchesSelector||a.mozMatchesSelector||a.webkitMatchesSelector||a.msMatchesSelector;if(b){var d=!b.call(c.createElement("div"),"div"),e=!1;try{b.call(c.documentElement,"[test!='']:sizzle")}catch(f){e=!0}m.matchesSelector=function(a,c){c=c.replace(/\=\s*([^'"\]]*)\s*\]/g,"='$1']");if(!m.isXML(a))try{if(e||!o.match.PSEUDO.test(c)&&!/!=/.test(c)){var f=b.call(a,c);if(f||!d||a.document&&a.document.nodeType!==11)return f}}catch(g){}return m(c,null,null,[a]).length>0}}}(),function(){var a=c.createElement("div");a.innerHTML="<div class='test e'></div><div class='test'></div>";if(!!a.getElementsByClassName&&a.getElementsByClassName("e").length!==0){a.lastChild.className="e";if(a.getElementsByClassName("e").length===1)return;o.order.splice(1,0,"CLASS"),o.find.CLASS=function(a,b,c){if(typeof b.getElementsByClassName!="undefined"&&!c)return b.getElementsByClassName(a[1])},a=null}}(),c.documentElement.contains?m.contains=function(a,b){return a!==b&&(a.contains?a.contains(b):!0)}:c.documentElement.compareDocumentPosition?m.contains=function(a,b){return!!(a.compareDocumentPosition(b)&16)}:m.contains=function(){return!1},m.isXML=function(a){var b=(a?a.ownerDocument||a:0).documentElement;return b?b.nodeName!=="HTML":!1};var y=function(a,b,c){var d,e=[],f="",g=b.nodeType?[b]:b;while(d=o.match.PSEUDO.exec(a))f+=d[0],a=a.replace(o.match.PSEUDO,"");a=o.relative[a]?a+"*":a;for(var h=0,i=g.length;h<i;h++)m(a,g[h],e,c);return m.filter(f,e)};m.attr=f.attr,m.selectors.attrMap={},f.find=m,f.expr=m.selectors,f.expr[":"]=f.expr.filters,f.unique=m.uniqueSort,f.text=m.getText,f.isXMLDoc=m.isXML,f.contains=m.contains}();var L=/Until$/,M=/^(?:parents|prevUntil|prevAll)/,N=/,/,O=/^.[^:#\[\.,]*$/,P=Array.prototype.slice,Q=f.expr.match.POS,R={children:!0,contents:!0,next:!0,prev:!0};f.fn.extend({find:function(a){var b=this,c,d;if(typeof a!="string")return f(a).filter(function(){for(c=0,d=b.length;c<d;c++)if(f.contains(b[c],this))return!0});var e=this.pushStack("","find",a),g,h,i;for(c=0,d=this.length;c<d;c++){g=e.length,f.find(a,this[c],e);if(c>0)for(h=g;h<e.length;h++)for(i=0;i<g;i++)if(e[i]===e[h]){e.splice(h--,1);break}}return e},has:function(a){var b=f(a);return this.filter(function(){for(var a=0,c=b.length;a<c;a++)if(f.contains(this,b[a]))return!0})},not:function(a){return this.pushStack(T(this,a,!1),"not",a)},filter:function(a){return this.pushStack(T(this,a,!0),"filter",a)},is:function(a){return!!a&&(typeof a=="string"?Q.test(a)?f(a,this.context).index(this[0])>=0:f.filter(a,this).length>0:this.filter(a).length>0)},closest:function(a,b){var c=[],d,e,g=this[0];if(f.isArray(a)){var h=1;while(g&&g.ownerDocument&&g!==b){for(d=0;d<a.length;d++)f(g).is(a[d])&&c.push({selector:a[d],elem:g,level:h});g=g.parentNode,h++}return c}var i=Q.test(a)||typeof a!="string"?f(a,b||this.context):0;for(d=0,e=this.length;d<e;d++){g=this[d];while(g){if(i?i.index(g)>-1:f.find.matchesSelector(g,a)){c.push(g);break}g=g.parentNode;if(!g||!g.ownerDocument||g===b||g.nodeType===11)break}}c=c.length>1?f.unique(c):c;return this.pushStack(c,"closest",a)},index:function(a){if(!a)return this[0]&&this[0].parentNode?this.prevAll().length:-1;if(typeof a=="string")return f.inArray(this[0],f(a));return f.inArray(a.jquery?a[0]:a,this)},add:function(a,b){var c=typeof a=="string"?f(a,b):f.makeArray(a&&a.nodeType?[a]:a),d=f.merge(this.get(),c);return this.pushStack(S(c[0])||S(d[0])?d:f.unique(d))},andSelf:function(){return this.add(this.prevObject)}}),f.each({parent:function(a){var b=a.parentNode;return b&&b.nodeType!==11?b:null},parents:function(a){return f.dir(a,"parentNode")},parentsUntil:function(a,b,c){return f.dir(a,"parentNode",c)},next:function(a){return f.nth(a,2,"nextSibling")},prev:function(a){return f.nth(a,2,"previousSibling")},nextAll:function(a){return f.dir(a,"nextSibling")},prevAll:function(a){return f.dir(a,"previousSibling")},nextUntil:function(a,b,c){return f.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return f.dir(a,"previousSibling",c)},siblings:function(a){return f.sibling(a.parentNode.firstChild,a)},children:function(a){return f.sibling(a.firstChild)},contents:function(a){return f.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:f.makeArray(a.childNodes)}},function(a,b){f.fn[a]=function(c,d){var e=f.map(this,b,c);L.test(a)||(d=c),d&&typeof d=="string"&&(e=f.filter(d,e)),e=this.length>1&&!R[a]?f.unique(e):e,(this.length>1||N.test(d))&&M.test(a)&&(e=e.reverse());return this.pushStack(e,a,P.call(arguments).join(","))}}),f.extend({filter:function(a,b,c){c&&(a=":not("+a+")");return b.length===1?f.find.matchesSelector(b[0],a)?[b[0]]:[]:f.find.matches(a,b)},dir:function(a,c,d){var e=[],g=a[c];while(g&&g.nodeType!==9&&(d===b||g.nodeType!==1||!f(g).is(d)))g.nodeType===1&&e.push(g),g=g[c];return e},nth:function(a,b,c,d){b=b||1;var e=0;for(;a;a=a[c])if(a.nodeType===1&&++e===b)break;return a},sibling:function(a,b){var c=[];for(;a;a=a.nextSibling)a.nodeType===1&&a!==b&&c.push(a);return c}});var V="abbr|article|aside|audio|canvas|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",W=/ jQuery\d+="(?:\d+|null)"/g,X=/^\s+/,Y=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,Z=/<([\w:]+)/,$=/<tbody/i,_=/<|&#?\w+;/,ba=/<(?:script|style)/i,bb=/<(?:script|object|embed|option|style)/i,bc=new RegExp("<(?:"+V+")","i"),bd=/checked\s*(?:[^=]|=\s*.checked.)/i,be=/\/(java|ecma)script/i,bf=/^\s*<!(?:\[CDATA\[|\-\-)/,bg={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]},bh=U(c);bg.optgroup=bg.option,bg.tbody=bg.tfoot=bg.colgroup=bg.caption=bg.thead,bg.th=bg.td,f.support.htmlSerialize||(bg._default=[1,"div<div>","</div>"]),f.fn.extend({text:function(a){if(f.isFunction(a))return this.each(function(b){var c=f(this);c.text(a.call(this,b,c.text()))});if(typeof a!="object"&&a!==b)return this.empty().append((this[0]&&this[0].ownerDocument||c).createTextNode(a));return f.text(this)},wrapAll:function(a){if(f.isFunction(a))return this.each(function(b){f(this).wrapAll(a.call(this,b))});if(this[0]){var b=f(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&a.firstChild.nodeType===1)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){if(f.isFunction(a))return this.each(function(b){f(this).wrapInner(a.call(this,b))});return this.each(function(){var b=f(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=f.isFunction(a);return this.each(function(c){f(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){f.nodeName(this,"body")||f(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(a){this.nodeType===1&&this.appendChild(a)})},prepend:function(){return this.domManip(arguments,!0,function(a){this.nodeType===1&&this.insertBefore(a,this.firstChild)})},before:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this)});if(arguments.length){var a=f.clean(arguments);a.push.apply(a,this.toArray());return this.pushStack(a,"before",arguments)}},after:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this.nextSibling)});if(arguments.length){var a=this.pushStack(this,"after",arguments);a.push.apply(a,f.clean(arguments));return a}},remove:function(a,b){for(var c=0,d;(d=this[c])!=null;c++)if(!a||f.filter(a,[d]).length)!b&&d.nodeType===1&&(f.cleanData(d.getElementsByTagName("*")),f.cleanData([d])),d.parentNode&&d.parentNode.removeChild(d);return this},empty:function()
{for(var a=0,b;(b=this[a])!=null;a++){b.nodeType===1&&f.cleanData(b.getElementsByTagName("*"));while(b.firstChild)b.removeChild(b.firstChild)}return this},clone:function(a,b){a=a==null?!1:a,b=b==null?a:b;return this.map(function(){return f.clone(this,a,b)})},html:function(a){if(a===b)return this[0]&&this[0].nodeType===1?this[0].innerHTML.replace(W,""):null;if(typeof a=="string"&&!ba.test(a)&&(f.support.leadingWhitespace||!X.test(a))&&!bg[(Z.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(Y,"<$1></$2>");try{for(var c=0,d=this.length;c<d;c++)this[c].nodeType===1&&(f.cleanData(this[c].getElementsByTagName("*")),this[c].innerHTML=a)}catch(e){this.empty().append(a)}}else f.isFunction(a)?this.each(function(b){var c=f(this);c.html(a.call(this,b,c.html()))}):this.empty().append(a);return this},replaceWith:function(a){if(this[0]&&this[0].parentNode){if(f.isFunction(a))return this.each(function(b){var c=f(this),d=c.html();c.replaceWith(a.call(this,b,d))});typeof a!="string"&&(a=f(a).detach());return this.each(function(){var b=this.nextSibling,c=this.parentNode;f(this).remove(),b?f(b).before(a):f(c).append(a)})}return this.length?this.pushStack(f(f.isFunction(a)?a():a),"replaceWith",a):this},detach:function(a){return this.remove(a,!0)},domManip:function(a,c,d){var e,g,h,i,j=a[0],k=[];if(!f.support.checkClone&&arguments.length===3&&typeof j=="string"&&bd.test(j))return this.each(function(){f(this).domManip(a,c,d,!0)});if(f.isFunction(j))return this.each(function(e){var g=f(this);a[0]=j.call(this,e,c?g.html():b),g.domManip(a,c,d)});if(this[0]){i=j&&j.parentNode,f.support.parentNode&&i&&i.nodeType===11&&i.childNodes.length===this.length?e={fragment:i}:e=f.buildFragment(a,this,k),h=e.fragment,h.childNodes.length===1?g=h=h.firstChild:g=h.firstChild;if(g){c=c&&f.nodeName(g,"tr");for(var l=0,m=this.length,n=m-1;l<m;l++)d.call(c?bi(this[l],g):this[l],e.cacheable||m>1&&l<n?f.clone(h,!0,!0):h)}k.length&&f.each(k,bp)}return this}}),f.buildFragment=function(a,b,d){var e,g,h,i,j=a[0];b&&b[0]&&(i=b[0].ownerDocument||b[0]),i.createDocumentFragment||(i=c),a.length===1&&typeof j=="string"&&j.length<512&&i===c&&j.charAt(0)==="<"&&!bb.test(j)&&(f.support.checkClone||!bd.test(j))&&(f.support.html5Clone||!bc.test(j))&&(g=!0,h=f.fragments[j],h&&h!==1&&(e=h)),e||(e=i.createDocumentFragment(),f.clean(a,i,e,d)),g&&(f.fragments[j]=h?e:1);return{fragment:e,cacheable:g}},f.fragments={},f.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){f.fn[a]=function(c){var d=[],e=f(c),g=this.length===1&&this[0].parentNode;if(g&&g.nodeType===11&&g.childNodes.length===1&&e.length===1){e[b](this[0]);return this}for(var h=0,i=e.length;h<i;h++){var j=(h>0?this.clone(!0):this).get();f(e[h])[b](j),d=d.concat(j)}return this.pushStack(d,a,e.selector)}}),f.extend({clone:function(a,b,c){var d,e,g,h=f.support.html5Clone||!bc.test("<"+a.nodeName)?a.cloneNode(!0):bo(a);if((!f.support.noCloneEvent||!f.support.noCloneChecked)&&(a.nodeType===1||a.nodeType===11)&&!f.isXMLDoc(a)){bk(a,h),d=bl(a),e=bl(h);for(g=0;d[g];++g)e[g]&&bk(d[g],e[g])}if(b){bj(a,h);if(c){d=bl(a),e=bl(h);for(g=0;d[g];++g)bj(d[g],e[g])}}d=e=null;return h},clean:function(a,b,d,e){var g;b=b||c,typeof b.createElement=="undefined"&&(b=b.ownerDocument||b[0]&&b[0].ownerDocument||c);var h=[],i;for(var j=0,k;(k=a[j])!=null;j++){typeof k=="number"&&(k+="");if(!k)continue;if(typeof k=="string")if(!_.test(k))k=b.createTextNode(k);else{k=k.replace(Y,"<$1></$2>");var l=(Z.exec(k)||["",""])[1].toLowerCase(),m=bg[l]||bg._default,n=m[0],o=b.createElement("div");b===c?bh.appendChild(o):U(b).appendChild(o),o.innerHTML=m[1]+k+m[2];while(n--)o=o.lastChild;if(!f.support.tbody){var p=$.test(k),q=l==="table"&&!p?o.firstChild&&o.firstChild.childNodes:m[1]==="<table>"&&!p?o.childNodes:[];for(i=q.length-1;i>=0;--i)f.nodeName(q[i],"tbody")&&!q[i].childNodes.length&&q[i].parentNode.removeChild(q[i])}!f.support.leadingWhitespace&&X.test(k)&&o.insertBefore(b.createTextNode(X.exec(k)[0]),o.firstChild),k=o.childNodes}var r;if(!f.support.appendChecked)if(k[0]&&typeof (r=k.length)=="number")for(i=0;i<r;i++)bn(k[i]);else bn(k);k.nodeType?h.push(k):h=f.merge(h,k)}if(d){g=function(a){return!a.type||be.test(a.type)};for(j=0;h[j];j++)if(e&&f.nodeName(h[j],"script")&&(!h[j].type||h[j].type.toLowerCase()==="text/javascript"))e.push(h[j].parentNode?h[j].parentNode.removeChild(h[j]):h[j]);else{if(h[j].nodeType===1){var s=f.grep(h[j].getElementsByTagName("script"),g);h.splice.apply(h,[j+1,0].concat(s))}d.appendChild(h[j])}}return h},cleanData:function(a){var b,c,d=f.cache,e=f.event.special,g=f.support.deleteExpando;for(var h=0,i;(i=a[h])!=null;h++){if(i.nodeName&&f.noData[i.nodeName.toLowerCase()])continue;c=i[f.expando];if(c){b=d[c];if(b&&b.events){for(var j in b.events)e[j]?f.event.remove(i,j):f.removeEvent(i,j,b.handle);b.handle&&(b.handle.elem=null)}g?delete i[f.expando]:i.removeAttribute&&i.removeAttribute(f.expando),delete d[c]}}}});var bq=/alpha\([^)]*\)/i,br=/opacity=([^)]*)/,bs=/([A-Z]|^ms)/g,bt=/^-?\d+(?:px)?$/i,bu=/^-?\d/,bv=/^([\-+])=([\-+.\de]+)/,bw={position:"absolute",visibility:"hidden",display:"block"},bx=["Left","Right"],by=["Top","Bottom"],bz,bA,bB;f.fn.css=function(a,c){if(arguments.length===2&&c===b)return this;return f.access(this,a,c,!0,function(a,c,d){return d!==b?f.style(a,c,d):f.css(a,c)})},f.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=bz(a,"opacity","opacity");return c===""?"1":c}return a.style.opacity}}},cssNumber:{fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":f.support.cssFloat?"cssFloat":"styleFloat"},style:function(a,c,d,e){if(!!a&&a.nodeType!==3&&a.nodeType!==8&&!!a.style){var g,h,i=f.camelCase(c),j=a.style,k=f.cssHooks[i];c=f.cssProps[i]||i;if(d===b){if(k&&"get"in k&&(g=k.get(a,!1,e))!==b)return g;return j[c]}h=typeof d,h==="string"&&(g=bv.exec(d))&&(d=+(g[1]+1)*+g[2]+parseFloat(f.css(a,c)),h="number");if(d==null||h==="number"&&isNaN(d))return;h==="number"&&!f.cssNumber[i]&&(d+="px");if(!k||!("set"in k)||(d=k.set(a,d))!==b)try{j[c]=d}catch(l){}}},css:function(a,c,d){var e,g;c=f.camelCase(c),g=f.cssHooks[c],c=f.cssProps[c]||c,c==="cssFloat"&&(c="float");if(g&&"get"in g&&(e=g.get(a,!0,d))!==b)return e;if(bz)return bz(a,c)},swap:function(a,b,c){var d={};for(var e in b)d[e]=a.style[e],a.style[e]=b[e];c.call(a);for(e in b)a.style[e]=d[e]}}),f.curCSS=f.css,f.each(["height","width"],function(a,b){f.cssHooks[b]={get:function(a,c,d){var e;if(c){if(a.offsetWidth!==0)return bC(a,b,d);f.swap(a,bw,function(){e=bC(a,b,d)});return e}},set:function(a,b){if(!bt.test(b))return b;b=parseFloat(b);if(b>=0)return b+"px"}}}),f.support.opacity||(f.cssHooks.opacity={get:function(a,b){return br.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?parseFloat(RegExp.$1)/100+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=f.isNumeric(b)?"alpha(opacity="+b*100+")":"",g=d&&d.filter||c.filter||"";c.zoom=1;if(b>=1&&f.trim(g.replace(bq,""))===""){c.removeAttribute("filter");if(d&&!d.filter)return}c.filter=bq.test(g)?g.replace(bq,e):g+" "+e}}),f(function(){f.support.reliableMarginRight||(f.cssHooks.marginRight={get:function(a,b){var c;f.swap(a,{display:"inline-block"},function(){b?c=bz(a,"margin-right","marginRight"):c=a.style.marginRight});return c}})}),c.defaultView&&c.defaultView.getComputedStyle&&(bA=function(a,b){var c,d,e;b=b.replace(bs,"-$1").toLowerCase(),(d=a.ownerDocument.defaultView)&&(e=d.getComputedStyle(a,null))&&(c=e.getPropertyValue(b),c===""&&!f.contains(a.ownerDocument.documentElement,a)&&(c=f.style(a,b)));return c}),c.documentElement.currentStyle&&(bB=function(a,b){var c,d,e,f=a.currentStyle&&a.currentStyle[b],g=a.style;f===null&&g&&(e=g[b])&&(f=e),!bt.test(f)&&bu.test(f)&&(c=g.left,d=a.runtimeStyle&&a.runtimeStyle.left,d&&(a.runtimeStyle.left=a.currentStyle.left),g.left=b==="fontSize"?"1em":f||0,f=g.pixelLeft+"px",g.left=c,d&&(a.runtimeStyle.left=d));return f===""?"auto":f}),bz=bA||bB,f.expr&&f.expr.filters&&(f.expr.filters.hidden=function(a){var b=a.offsetWidth,c=a.offsetHeight;return b===0&&c===0||!f.support.reliableHiddenOffsets&&(a.style&&a.style.display||f.css(a,"display"))==="none"},f.expr.filters.visible=function(a){return!f.expr.filters.hidden(a)});var bD=/%20/g,bE=/\[\]$/,bF=/\r?\n/g,bG=/#.*$/,bH=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg,bI=/^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,bJ=/^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,bK=/^(?:GET|HEAD)$/,bL=/^\/\//,bM=/\?/,bN=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,bO=/^(?:select|textarea)/i,bP=/\s+/,bQ=/([?&])_=[^&]*/,bR=/^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/,bS=f.fn.load,bT={},bU={},bV,bW,bX=["*/"]+["*"];try{bV=e.href}catch(bY){bV=c.createElement("a"),bV.href="",bV=bV.href}bW=bR.exec(bV.toLowerCase())||[],f.fn.extend({load:function(a,c,d){if(typeof a!="string"&&bS)return bS.apply(this,arguments);if(!this.length)return this;var e=a.indexOf(" ");if(e>=0){var g=a.slice(e,a.length);a=a.slice(0,e)}var h="GET";c&&(f.isFunction(c)?(d=c,c=b):typeof c=="object"&&(c=f.param(c,f.ajaxSettings.traditional),h="POST"));var i=this;f.ajax({url:a,type:h,dataType:"html",data:c,complete:function(a,b,c){c=a.responseText,a.isResolved()&&(a.done(function(a){c=a}),i.html(g?f("<div>").append(c.replace(bN,"")).find(g):c)),d&&i.each(d,[c,b,a])}});return this},serialize:function(){return f.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?f.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||bO.test(this.nodeName)||bI.test(this.type))}).map(function(a,b){var c=f(this).val();return c==null?null:f.isArray(c)?f.map(c,function(a,c){return{name:b.name,value:a.replace(bF,"\r\n")}}):{name:b.name,value:c.replace(bF,"\r\n")}}).get()}}),f.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(a,b){f.fn[b]=function(a){return this.on(b,a)}}),f.each(["get","post"],function(a,c){f[c]=function(a,d,e,g){f.isFunction(d)&&(g=g||e,e=d,d=b);return f.ajax({type:c,url:a,data:d,success:e,dataType:g})}}),f.extend({getScript:function(a,c){return f.get(a,b,c,"script")},getJSON:function(a,b,c){return f.get(a,b,c,"json")},ajaxSetup:function(a,b){b?b_(a,f.ajaxSettings):(b=a,a=f.ajaxSettings),b_(a,b);return a},ajaxSettings:{url:bV,isLocal:bJ.test(bW[1]),global:!0,type:"GET",contentType:"application/x-www-form-urlencoded",processData:!0,async:!0,accepts:{xml:"application/xml, text/xml",html:"text/html",text:"text/plain",json:"application/json, text/javascript","*":bX},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":a.String,"text html":!0,"text json":f.parseJSON,"text xml":f.parseXML},flatOptions:{context:!0,url:!0}},ajaxPrefilter:bZ(bT),ajaxTransport:bZ(bU),ajax:function(a,c){function w(a,c,l,m){if(s!==2){s=2,q&&clearTimeout(q),p=b,n=m||"",v.readyState=a>0?4:0;var o,r,u,w=c,x=l?cb(d,v,l):b,y,z;if(a>=200&&a<300||a===304){if(d.ifModified){if(y=v.getResponseHeader("Last-Modified"))f.lastModified[k]=y;if(z=v.getResponseHeader("Etag"))f.etag[k]=z}if(a===304)w="notmodified",o=!0;else try{r=cc(d,x),w="success",o=!0}catch(A){w="parsererror",u=A}}else{u=w;if(!w||a)w="error",a<0&&(a=0)}v.status=a,v.statusText=""+(c||w),o?h.resolveWith(e,[r,w,v]):h.rejectWith(e,[v,w,u]),v.statusCode(j),j=b,t&&g.trigger("ajax"+(o?"Success":"Error"),[v,d,o?r:u]),i.fireWith(e,[v,w]),t&&(g.trigger("ajaxComplete",[v,d]),--f.active||f.event.trigger("ajaxStop"))}}typeof a=="object"&&(c=a,a=b),c=c||{};var d=f.ajaxSetup({},c),e=d.context||d,g=e!==d&&(e.nodeType||e instanceof f)?f(e):f.event,h=f.Deferred(),i=f.Callbacks("once memory"),j=d.statusCode||{},k,l={},m={},n,o,p,q,r,s=0,t,u,v={readyState:0,setRequestHeader:function(a,b){if(!s){var c=a.toLowerCase();a=m[c]=m[c]||a,l[a]=b}return this},getAllResponseHeaders:function(){return s===2?n:null},getResponseHeader:function(a){var c;if(s===2){if(!o){o={};while(c=bH.exec(n))o[c[1].toLowerCase()]=c[2]}c=o[a.toLowerCase()]}return c===b?null:c},overrideMimeType:function(a){s||(d.mimeType=a);return this},abort:function(a){a=a||"abort",p&&p.abort(a),w(0,a);return this}};h.promise(v),v.success=v.done,v.error=v.fail,v.complete=i.add,v.statusCode=function(a){if(a){var b;if(s<2)for(b in a)j[b]=[j[b],a[b]];else b=a[v.status],v.then(b,b)}return this},d.url=((a||d.url)+"").replace(bG,"").replace(bL,bW[1]+"//"),d.dataTypes=f.trim(d.dataType||"*").toLowerCase().split(bP),d.crossDomain==null&&(r=bR.exec(d.url.toLowerCase()),d.crossDomain=!(!r||r[1]==bW[1]&&r[2]==bW[2]&&(r[3]||(r[1]==="http:"?80:443))==(bW[3]||(bW[1]==="http:"?80:443)))),d.data&&d.processData&&typeof d.data!="string"&&(d.data=f.param(d.data,d.traditional)),b$(bT,d,c,v);if(s===2)return!1;t=d.global,d.type=d.type.toUpperCase(),d.hasContent=!bK.test(d.type),t&&f.active++===0&&f.event.trigger("ajaxStart");if(!d.hasContent){d.data&&(d.url+=(bM.test(d.url)?"&":"?")+d.data,delete d.data),k=d.url;if(d.cache===!1){var x=f.now(),y=d.url.replace(bQ,"$1_="+x);d.url=y+(y===d.url?(bM.test(d.url)?"&":"?")+"_="+x:"")}}(d.data&&d.hasContent&&d.contentType!==!1||c.contentType)&&v.setRequestHeader("Content-Type",d.contentType),d.ifModified&&(k=k||d.url,f.lastModified[k]&&v.setRequestHeader("If-Modified-Since",f.lastModified[k]),f.etag[k]&&v.setRequestHeader("If-None-Match",f.etag[k])),v.setRequestHeader("Accept",d.dataTypes[0]&&d.accepts[d.dataTypes[0]]?d.accepts[d.dataTypes[0]]+(d.dataTypes[0]!=="*"?", "+bX+"; q=0.01":""):d.accepts["*"]);for(u in d.headers)v.setRequestHeader(u,d.headers[u]);if(d.beforeSend&&(d.beforeSend.call(e,v,d)===!1||s===2)){v.abort();return!1}for(u in{success:1,error:1,complete:1})v[u](d[u]);p=b$(bU,d,c,v);if(!p)w(-1,"No Transport");else{v.readyState=1,t&&g.trigger("ajaxSend",[v,d]),d.async&&d.timeout>0&&(q=setTimeout(function(){v.abort("timeout")},d.timeout));try{s=1,p.send(l,w)}catch(z){if(s<2)w(-1,z);else throw z}}return v},param:function(a,c){var d=[],e=function(a,b){b=f.isFunction(b)?b():b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};c===b&&(c=f.ajaxSettings.traditional);if(f.isArray(a)||a.jquery&&!f.isPlainObject(a))f.each(a,function(){e(this.name,this.value)});else for(var g in a)ca(g,a[g],c,e);return d.join("&").replace(bD,"+")}}),f.extend({active:0,lastModified:{},etag:{}});var cd=f.now(),ce=/(\=)\?(&|$)|\?\?/i;f.ajaxSetup({jsonp:"callback",jsonpCallback:function(){return f.expando+"_"+cd++}}),f.ajaxPrefilter("json jsonp",function(b,c,d){var e=b.contentType==="application/x-www-form-urlencoded"&&typeof b.data=="string";if(b.dataTypes[0]==="jsonp"||b.jsonp!==!1&&(ce.test(b.url)||e&&ce.test(b.data))){var g,h=b.jsonpCallback=f.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,i=a[h],j=b.url,k=b.data,l="$1"+h+"$2";b.jsonp!==!1&&(j=j.replace(ce,l),b.url===j&&(e&&(k=k.replace(ce,l)),b.data===k&&(j+=(/\?/.test(j)?"&":"?")+b.jsonp+"="+h))),b.url=j,b.data=k,a[h]=function(a){g=[a]},d.always(function(){a[h]=i,g&&f.isFunction(i)&&a[h](g[0])}),b.converters["script json"]=function(){g||f.error(h+" was not called");return g[0]},b.dataTypes[0]="json";return"script"}}),f.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/javascript|ecmascript/},converters:{"text script":function(a){f.globalEval(a);return a}}}),f.ajaxPrefilter("script",function(a){a.cache===b&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),f.ajaxTransport("script",function(a){if(a.crossDomain){var d,e=c.head||c.getElementsByTagName("head")[0]||c.documentElement;return{send:function(f,g){d=c.createElement("script"),d.async="async",a.scriptCharset&&(d.charset=a.scriptCharset),d.src=a.url,d.onload=d.onreadystatechange=function(a,c){if(c||!d.readyState||/loaded|complete/.test(d.readyState))d.onload=d.onreadystatechange=null,e&&d.parentNode&&e.removeChild(d),d=b,c||g(200,"success")},e.insertBefore(d,e.firstChild)},abort:function(){d&&d.onload(0,1)}}}});var cf=a.ActiveXObject?function(){for(var a in ch)ch[a](0,1)}:!1,cg=0,ch;f.ajaxSettings.xhr=a.ActiveXObject?function(){return!this.isLocal&&ci()||cj()}:ci,function(a){f.extend(f.support,{ajax:!!a,cors:!!a&&"withCredentials"in a})}(f.ajaxSettings.xhr()),f.support.ajax&&f.ajaxTransport(function(c){if(!c.crossDomain||f.support.cors){var d;return{send:function(e,g){var h=c.xhr(),i,j;c.username?h.open(c.type,c.url,c.async,c.username,c.password):h.open(c.type,c.url,c.async);if(c.xhrFields)for(j in c.xhrFields)h[j]=c.xhrFields[j];c.mimeType&&h.overrideMimeType&&h.overrideMimeType(c.mimeType),!c.crossDomain&&!e["X-Requested-With"]&&(e["X-Requested-With"]="XMLHttpRequest");try{for(j in e)h.setRequestHeader(j,e[j])}catch(k){}h.send(c.hasContent&&c.data||null),d=function(a,e){var j,k,l,m,n;try{if(d&&(e||h.readyState===4)){d=b,i&&(h.onreadystatechange=f.noop,cf&&delete ch[i]);if(e)h.readyState!==4&&h.abort();else{j=h.status,l=h.getAllResponseHeaders(),m={},n=h.responseXML,n&&n.documentElement&&(m.xml=n),m.text=h.responseText;try{k=h.statusText}catch(o){k=""}!j&&c.isLocal&&!c.crossDomain?j=m.text?200:404:j===1223&&(j=204)}}}catch(p){e||g(-1,p)}m&&g(j,k,m,l)},!c.async||h.readyState===4?d():(i=++cg,cf&&(ch||(ch={},f(a).unload(cf)),ch[i]=d),h.onreadystatechange=d)},abort:function(){d&&d(0,1)}}}});var ck={},cl,cm,cn=/^(?:toggle|show|hide)$/,co=/^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,cp,cq=[["height","marginTop","marginBottom","paddingTop","paddingBottom"],["width","marginLeft","marginRight","paddingLeft","paddingRight"],["opacity"]],cr;f.fn.extend({show:function(a,b,c){var d,e;if(a||a===0)return this.animate(cu("show",3),a,b,c);for(var g=0,h=this.length;g<h;g++)d=this[g],d.style&&(e=d.style.display,!f._data(d,"olddisplay")&&e==="none"&&(e=d.style.display=""),e===""&&f.css(d,"display")==="none"&&f._data(d,"olddisplay",cv(d.nodeName)));for(g=0;g<h;g++){d=this[g];if(d.style){e=d.style.display;if(e===""||e==="none")d.style.display=f._data(d,"olddisplay")||""}}return this},hide:function(a,b,c){if(a||a===0)return this.animate(cu("hide",3),a,b,c);var d,e,g=0,h=this.length;for(;g<h;g++)d=this[g],d.style&&(e=f.css(d,"display"),e!=="none"&&!f._data(d,"olddisplay")&&f._data(d,"olddisplay",e));for(g=0;g<h;g++)this[g].style&&(this[g].style.display="none");return this},_toggle:f.fn.toggle,toggle:function(a,b,c){var d=typeof a=="boolean";f.isFunction(a)&&f.isFunction(b)?this._toggle.apply(this,arguments):a==null||d?this.each(function(){var b=d?a:f(this).is(":hidden");f(this)[b?"show":"hide"]()}):this.animate(cu("toggle",3),a,b,c);return this},fadeTo:function(a,b,c,d){return this.filter(":hidden").css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){function g(){e.queue===!1&&f._mark(this);var b=f.extend({},e),c=this.nodeType===1,d=c&&f(this).is(":hidden"),g,h,i,j,k,l,m,n,o;b.animatedProperties={};for(i in a){g=f.camelCase(i),i!==g&&(a[g]=a[i],delete a[i]),h=a[g],f.isArray(h)?(b.animatedProperties[g]=h[1],h=a[g]=h[0]):b.animatedProperties[g]=b.specialEasing&&b.specialEasing[g]||b.easing||"swing";if(h==="hide"&&d||h==="show"&&!d)return b.complete.call(this);c&&(g==="height"||g==="width")&&(b.overflow=[this.style.overflow,this.style.overflowX,this.style.overflowY],f.css(this,"display")==="inline"&&f.css(this,"float")==="none"&&(!f.support.inlineBlockNeedsLayout||cv(this.nodeName)==="inline"?this.style.display="inline-block":this.style.zoom=1))}b.overflow!=null&&(this.style.overflow="hidden");for(i in a)j=new f.fx(this,b,i),h=a[i],cn.test(h)?(o=f._data(this,"toggle"+i)||(h==="toggle"?d?"show":"hide":0),o?(f._data(this,"toggle"+i,o==="show"?"hide":"show"),j[o]()):j[h]()):(k=co.exec(h),l=j.cur(),k?(m=parseFloat(k[2]),n=k[3]||(f.cssNumber[i]?"":"px"),n!=="px"&&(f.style(this,i,(m||1)+n),l=(m||1)/j.cur()*l,f.style(this,i,l+n)),k[1]&&(m=(k[1]==="-="?-1:1)*m+l),j.custom(l,m,n)):j.custom(l,h,""));return!0}var e=f.speed(b,c,d);if(f.isEmptyObject(a))return this.each(e.complete,[!1]);a=f.extend({},a);return e.queue===!1?this.each(g):this.queue(e.queue,g)},stop:function(a,c,d){typeof a!="string"&&(d=c,c=a,a=b),c&&a!==!1&&this.queue(a||"fx",[]);return this.each(function(){function h(a,b,c){var e=b[c];f.removeData(a,c,!0),e.stop(d)}var b,c=!1,e=f.timers,g=f._data(this);d||f._unmark(!0,this);if(a==null)for(b in g)g[b]&&g[b].stop&&b.indexOf(".run")===b.length-4&&h(this,g,b);else g[b=a+".run"]&&g[b].stop&&h(this,g,b);for(b=e.length;b--;)e[b].elem===this&&(a==null||e[b].queue===a)&&(d?e[b](!0):e[b].saveState(),c=!0,e.splice(b,1));(!d||!c)&&f.dequeue(this,a)})}}),f.each({slideDown:cu("show",1),slideUp:cu("hide",1),slideToggle:cu("toggle",1),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){f.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),f.extend({speed:function(a,b,c){var d=a&&typeof a=="object"?f.extend({},a):{complete:c||!c&&b||f.isFunction(a)&&a,duration:a,easing:c&&b||b&&!f.isFunction(b)&&b};d.duration=f.fx.off?0:typeof d.duration=="number"?d.duration:d.duration in f.fx.speeds?f.fx.speeds[d.duration]:f.fx.speeds._default;if(d.queue==null||d.queue===!0)d.queue="fx";d.old=d.complete,d.complete=function(a){f.isFunction(d.old)&&d.old.call(this),d.queue?f.dequeue(this,d.queue):a!==!1&&f._unmark(this)};return d},easing:{linear:function(a,b,c,d){return c+d*a},swing:function(a,b,c,d){return(-Math.cos(a*Math.PI)/2+.5)*d+c}},timers:[],fx:function(a,b,c){this.options=b,this.elem=a,this.prop=c,b.orig=b.orig||{}}}),f.fx.prototype={update:function(){this.options.step&&this.options.step.call(this.elem,this.now,this),(f.fx.step[this.prop]||f.fx.step._default)(this)},cur:function(){if(this.elem[this.prop]!=null&&(!this.elem.style||this.elem.style[this.prop]==null))return this.elem[this.prop];var a,b=f.css(this.elem,this.prop);return isNaN(a=parseFloat(b))?!b||b==="auto"?0:b:a},custom:function(a,c,d){function h(a){return e.step(a)}var e=this,g=f.fx;this.startTime=cr||cs(),this.end=c,this.now=this.start=a,this.pos=this.state=0,this.unit=d||this.unit||(f.cssNumber[this.prop]?"":"px"),h.queue=this.options.queue,h.elem=this.elem,h.saveState=function(){e.options.hide&&f._data(e.elem,"fxshow"+e.prop)===b&&f._data(e.elem,"fxshow"+e.prop,e.start)},h()&&f.timers.push(h)&&!cp&&(cp=setInterval(g.tick,g.interval))},show:function(){var a=f._data(this.elem,"fxshow"+this.prop);this.options.orig[this.prop]=a||f.style(this.elem,this.prop),this.options.show=!0,a!==b?this.custom(this.cur(),a):this.custom(this.prop==="width"||this.prop==="height"?1:0,this.cur()),f(this.elem).show()},hide:function(){this.options.orig[this.prop]=f._data(this.elem,"fxshow"+this.prop)||f.style(this.elem,this.prop),this.options.hide=!0,this.custom(this.cur(),0)},step:function(a){var b,c,d,e=cr||cs(),g=!0,h=this.elem,i=this.options;if(a||e>=i.duration+this.startTime){this.now=this.end,this.pos=this.state=1,this.update(),i.animatedProperties[this.prop]=!0;for(b in i.animatedProperties)i.animatedProperties[b]!==!0&&(g=!1);if(g){i.overflow!=null&&!f.support.shrinkWrapBlocks&&f.each(["","X","Y"],function(a,b){h.style["overflow"+b]=i.overflow[a]}),i.hide&&f(h).hide();if(i.hide||i.show)for(b in i.animatedProperties)f.style(h,b,i.orig[b]),f.removeData(h,"fxshow"+b,!0),f.removeData(h,"toggle"+b,!0);d=i.complete,d&&(i.complete=!1,d.call(h))}return!1}i.duration==Infinity?this.now=e:(c=e-this.startTime,this.state=c/i.duration,this.pos=f.easing[i.animatedProperties[this.prop]](this.state,c,0,1,i.duration),this.now=this.start+(this.end-this.start)*this.pos),this.update();return!0}},f.extend(f.fx,{tick:function(){var a,b=f.timers,c=0;for(;c<b.length;c++)a=b[c],!a()&&b[c]===a&&b.splice(c--,1);b.length||f.fx.stop()},interval:13,stop:function(){clearInterval(cp),cp=null},speeds:{slow:600,fast:200,_default:400},step:{opacity:function(a){f.style(a.elem,"opacity",a.now)},_default:function(a){a.elem.style&&a.elem.style[a.prop]!=null?a.elem.style[a.prop]=a.now+a.unit:a.elem[a.prop]=a.now}}}),f.each(["width","height"],function(a,b){f.fx.step[b]=function(a){f.style(a.elem,b,Math.max(0,a.now)+a.unit)}}),f.expr&&f.expr.filters&&(f.expr.filters.animated=function(a){return f.grep(f.timers,function(b){return a===b.elem}).length});var cw=/^t(?:able|d|h)$/i,cx=/^(?:body|html)$/i;"getBoundingClientRect"in c.documentElement?f.fn.offset=function(a){var b=this[0],c;if(a)return this.each(function(b){f.offset.setOffset(this,a,b)});if(!b||!b.ownerDocument)return null;if(b===b.ownerDocument.body)return f.offset.bodyOffset(b);try{c=b.getBoundingClientRect()}catch(d){}var e=b.ownerDocument,g=e.documentElement;if(!c||!f.contains(g,b))return c?{top:c.top,left:c.left}:{top:0,left:0};var h=e.body,i=cy(e),j=g.clientTop||h.clientTop||0,k=g.clientLeft||h.clientLeft||0,l=i.pageYOffset||f.support.boxModel&&g.scrollTop||h.scrollTop,m=i.pageXOffset||f.support.boxModel&&g.scrollLeft||h.scrollLeft,n=c.top+l-j,o=c.left+m-k;return{top:n,left:o}}:f.fn.offset=function(a){var b=this[0];if(a)return this.each(function(b){f.offset.setOffset(this,a,b)});if(!b||!b.ownerDocument)return null;if(b===b.ownerDocument.body)return f.offset.bodyOffset(b);var c,d=b.offsetParent,e=b,g=b.ownerDocument,h=g.documentElement,i=g.body,j=g.defaultView,k=j?j.getComputedStyle(b,null):b.currentStyle,l=b.offsetTop,m=b.offsetLeft;while((b=b.parentNode)&&b!==i&&b!==h){if(f.support.fixedPosition&&k.position==="fixed")break;c=j?j.getComputedStyle(b,null):b.currentStyle,l-=b.scrollTop,m-=b.scrollLeft,b===d&&(l+=b.offsetTop,m+=b.offsetLeft,f.support.doesNotAddBorder&&(!f.support.doesAddBorderForTableAndCells||!cw.test(b.nodeName))&&(l+=parseFloat(c.borderTopWidth)||0,m+=parseFloat(c.borderLeftWidth)||0),e=d,d=b.offsetParent),f.support.subtractsBorderForOverflowNotVisible&&c.overflow!=="visible"&&(l+=parseFloat(c.borderTopWidth)||0,m+=parseFloat(c.borderLeftWidth)||0),k=c}if(k.position==="relative"||k.position==="static")l+=i.offsetTop,m+=i.offsetLeft;f.support.fixedPosition&&k.position==="fixed"&&(l+=Math.max(h.scrollTop,i.scrollTop),m+=Math.max(h.scrollLeft,i.scrollLeft));return{top:l,left:m}},f.offset={bodyOffset:function(a){var b=a.offsetTop,c=a.offsetLeft;f.support.doesNotIncludeMarginInBodyOffset&&(b+=parseFloat(f.css(a,"marginTop"))||0,c+=parseFloat(f.css(a,"marginLeft"))||0);return{top:b,left:c}},setOffset:function(a,b,c){var d=f.css(a,"position");d==="static"&&(a.style.position="relative");var e=f(a),g=e.offset(),h=f.css(a,"top"),i=f.css(a,"left"),j=(d==="absolute"||d==="fixed")&&f.inArray("auto",[h,i])>-1,k={},l={},m,n;j?(l=e.position(),m=l.top,n=l.left):(m=parseFloat(h)||0,n=parseFloat(i)||0),f.isFunction(b)&&(b=b.call(a,c,g)),b.top!=null&&(k.top=b.top-g.top+m),b.left!=null&&(k.left=b.left-g.left+n),"using"in b?b.using.call(a,k):e.css(k)}},f.fn.extend({position:function(){if(!this[0])return null;var a=this[0],b=this.offsetParent(),c=this.offset(),d=cx.test(b[0].nodeName)?{top:0,left:0}:b.offset();c.top-=parseFloat(f.css(a,"marginTop"))||0,c.left-=parseFloat(f.css(a,"marginLeft"))||0,d.top+=parseFloat(f.css(b[0],"borderTopWidth"))||0,d.left+=parseFloat(f.css(b[0],"borderLeftWidth"))||0;return{top:c.top-d.top,left:c.left-d.left}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||c.body;while(a&&!cx.test(a.nodeName)&&f.css(a,"position")==="static")a=a.offsetParent;return a})}}),f.each(["Left","Top"],function(a,c){var d="scroll"+c;f.fn[d]=function(c){var e,g;if(c===b){e=this[0];if(!e)return null;g=cy(e);return g?"pageXOffset"in g?g[a?"pageYOffset":"pageXOffset"]:f.support.boxModel&&g.document.documentElement[d]||g.document.body[d]:e[d]}return this.each(function(){g=cy(this),g?g.scrollTo(a?f(g).scrollLeft():c,a?c:f(g).scrollTop()):this[d]=c})}}),f.each(["Height","Width"],function(a,c){var d=c.toLowerCase();f.fn["inner"+c]=function(){var a=this[0];return a?a.style?parseFloat(f.css(a,d,"padding")):this[d]():null},f.fn["outer"+c]=function(a){var b=this[0];return b?b.style?parseFloat(f.css(b,d,a?"margin":"border")):this[d]():null},f.fn[d]=function(a){var e=this[0];if(!e)return a==null?null:this;if(f.isFunction(a))return this.each(function(b){var c=f(this);c[d](a.call(this,b,c[d]()))});if(f.isWindow(e)){var g=e.document.documentElement["client"+c],h=e.document.body;return e.document.compatMode==="CSS1Compat"&&g||h&&h["client"+c]||g}if(e.nodeType===9)return Math.max(e.documentElement["client"+c],e.body["scroll"+c],e.documentElement["scroll"+c],e.body["offset"+c],e.documentElement["offset"+c]);if(a===b){var i=f.css(e,d),j=parseFloat(i);return f.isNumeric(j)?j:i}return this.css(d,typeof a=="string"?a:a+"px")}}),a.jQuery=a.$=f,typeof define=="function"&&define.amd&&define.amd.jQuery&&define("jquery",[],function(){return f})})(window);
/*!



 resources js mno utils markerclusterer_packed.js



*/eval(function(p,a,c,k,e,d){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--){d[e(c)]=k[c]||e(c)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('(5(){7 d=32,f=33,g=34;5 j(a){8 5(b){3[a]=b}}5 k(a){8 5(){8 3[a]}}7 l;5 m(a,b,c){3.1f(m,13.12.22);3.b=a;3.a=[];3.m=[];3.$=[31,2X,2Y,35,3c];3.i=[];3.z=g;c=c||{};3.f=c.3b||37;3.V=c.1A||f;3.i=c.39||[];3.U=c.2V||3.O;3.T=c.2K||3.N;3.M=d;6(c.23!=25)3.M=c.23;3.p=g;6(c.21!=25)3.p=c.21;n(3);3.18(a);3.I=3.b.1t();7 e=3;13.12.1m.1x(3.b,"2M",5(){7 h=e.b.1P[e.b.1R()].1A,o=e.b.1t();6(!(o<0||o>h))6(e.I!=o){e.I=e.b.1t();e.k()}});13.12.1m.1x(3.b,"2U",5(){e.h()});b&&b.14&&3.B(b,g)}l=m.4;l.O="3E://13-12-3C-3B-3G.3M.3H/3I/3x/3l/3m/m";l.N="3k";l.1f=5(a,b){8 5(c){15(7 e 3g c.4)3.4[e]=c.4[e];8 3}.2D(a,[b])};l.1j=5(){6(!3.z){3.z=d;q(3)}};l.1k=5(){};5 n(a){6(!a.i.14)15(7 b=0,c;c=a.$[b];b++)a.i.16({1B:a.U+(b+1)+"."+a.T,1c:c,1l:c})}l.w=k("i");l.q=k("a");l.S=5(){8 3.a.14};l.H=5(){8 3.V||3.b.1P[3.b.1R()].1A};l.F=5(a,b){15(7 c=0,e=a.14,h=e;h!==0;){h=1y(h/10,10);c++}c=9.24(c,b);8{1e:e,1C:c}};l.Y=j("F");l.G=k("F");l.B=5(a,b){15(7 c=0,e;e=a[c];c++)t(3,e);b||3.h()};5 t(a,b){b.1g(g);b.18(f);b.r=g;b.2s&&13.12.1m.1x(b,"2t",5(){b.r=g;a.k();a.h()});a.a.16(b)}l.o=5(a,b){t(3,a);b||3.h()};5 u(a,b){7 c=-1;6(a.a.1n)c=a.a.1n(b);17 15(7 e=0,h;h=a.a[e];e++)6(h==b){c=e;27}6(c==-1)8 g;a.a.2z(c,1);b.1g(g);b.18(f);8 d}l.W=5(a,b){7 c=u(3,a);6(!b&&c){3.k();3.h();8 d}17 8 g};l.X=5(a,b){15(7 c=g,e=0,h;h=a[e];e++){h=u(3,h);c=c||h}6(!b&&c){3.k();3.h();8 d}};l.R=5(){8 3.m.14};l.1d=k("b");l.18=j("b");l.v=k("f");l.Z=j("f");l.u=5(a){7 b=3.1X(),c=1a 13.12.1F(a.1I().19(),a.1I().1i()),e=1a 13.12.1F(a.1J().19(),a.1J().1i());c=b.1v(c);c.x+=3.f;c.y-=3.f;e=b.1v(e);e.x-=3.f;e.y+=3.f;c=b.1Z(c);b=b.1Z(e);a.1f(c);a.1f(b);8 a};l.P=5(){3.k();3.a=[]};l.k=5(){15(7 a=0,b;b=3.m[a];a++)b.1p();15(a=0;b=3.a[a];a++){b.r=g;b.18(f);b.1g(g)}3.m=[]};l.h=5(){q(3)};5 q(a){6(a.z)15(7 b=a.u(1a 13.12.1z(a.b.1r().1J(),a.b.1r().1I())),c=0,e;e=a.a[c];c++)6(!e.r&&b.26(e.1b())){7 h=a;e=e;15(7 o=3h,r=f,x=0,p=2c 0;p=h.m[x];x++){7 i=p.1u();6(i){i=i;7 s=e.1b();6(!i||!s)i=0;17{7 y=(s.19()-i.19())*9.1q/1o,z=(s.1i()-i.1i())*9.1q/1o;i=9.1s(y/2)*9.1s(y/2)+9.2b(i.19()*9.1q/1o)*9.2b(s.19()*9.1q/1o)*9.1s(z/2)*9.1s(z/2);i=2h*2*9.2g(9.2a(i),9.2a(1-i))}6(i<o){o=i;r=p}}}6(r&&r.D.26(e.1b()))r.o(e);17{p=1a v(h);p.o(e);h.m.16(p)}}}5 v(a){3.j=a;3.b=a.1d();3.f=a.v();3.p=a.p;3.d=f;3.a=[];3.D=f;3.l=1a w(3,a.w(),a.v())}l=v.4;l.o=5(a){7 b;a:6(3.a.1n)b=3.a.1n(a)!=-1;17{b=0;15(7 c;c=3.a[b];b++)6(c==a){b=d;27 a}b=g}6(b)8 g;6(3.d){6(3.p){c=3.a.14+1;b=(3.d.19()*(c-1)+a.1b().19())/c;c=(3.d.1i()*(c-1)+a.1b().1i())/c;3.d=1a 13.12.1F(b,c);A(3)}}17{3.d=a.1b();A(3)}6(3.a.14==0){a.18(3.b);a.1g(d)}17 6(3.a.14==1){3.a[0].18(f);3.a[0].1g(g)}a.r=d;3.a.16(a);6(3.b.1t()>3.j.H())15(a=0;b=3.a[a];a++){b.18(3.b);b.1g(d)}17 6(3.a.14<2)B(3.l);17{b=3.j.G()(3.a,3.j.w().14);3.l.20(3.d);a=3.l;a.A=b;a.2i=b.1e;a.2e=b.1C;6(a.c)a.c.1Y=b.1e;b=9.2j(0,a.A.1C-1);b=9.24(a.i.14-1,b);b=a.i[b];a.L=b.1B;a.g=b.1c;a.n=b.1l;a.J=b.2d;a.e=b.2x;a.K=b.2k;a.C=b.2v;3.l.1W()}8 d};l.1r=5(){15(7 a=1a 13.12.1z(3.d,3.d),b=3.q(),c=0,e;e=b[c];c++)a.1f(e.1b());8 a};l.1p=5(){3.l.1p();3.a.14=0;2y 3.a};l.Q=5(){8 3.a.14};l.q=k("a");l.1u=k("d");5 A(a){a.D=a.j.u(1a 13.12.1z(a.d,a.d))}l.1d=k("b");5 w(a,b,c){a.j.1f(w,13.12.22);3.i=b;3.2B=c||0;3.t=a;3.d=f;3.b=a.1d();3.A=3.c=f;3.s=g;3.18(3.b)}l=w.4;l.1j=5(){3.c=1Q.2A("2u");6(3.s){3.c.1h.1M=C(3,D(3,3.d));3.c.1Y=3.A.1e}3.2n().2m.2l(3.c);7 a=3;13.12.1m.2o(3.c,"2p",5(){7 b=a.t.j;13.12.1m.2q(b,"2w",a.t);b.M&&a.b.2r(a.t.1r())})};5 D(a,b){7 c=a.1X().1v(b);c.x-=1y(a.n/2,10);c.y-=1y(a.g/2,10);8 c}l.1k=5(){6(3.s){7 a=D(3,3.d);3.c.1h.1D=a.y+"E";3.c.1h.1G=a.x+"E"}};5 B(a){6(a.c)a.c.1h.1N="2C";a.s=g}l.1W=5(){6(3.c){3.c.1h.1M=C(3,D(3,3.d));3.c.1h.1N=""}3.s=d};l.1p=5(){3.18(f)};l.1E=5(){6(3.c&&3.c.1O){B(3);3.c.1O.2f(3.c);3.c=f}};l.20=j("d");5 C(a,b){7 c=[];6(1Q.3r)c.16(\'3q:3p:3s.3t.3v(3u=3o,3n="\'+a.L+\'");\');17{c.16("1S-3i:1B("+a.L+");");c.16("1S-28:"+(a.C?a.C:"0 0")+";")}6(1H a.e==="3j"){1H a.e[0]==="1V"&&a.e[0]>0&&a.e[0]<a.g?c.16("1c:"+(a.g-a.e[0])+"E; 1U-1D:"+a.e[0]+"E;"):c.16("1c:"+a.g+"E; 1T-1c:"+a.g+"E;");1H a.e[1]==="1V"&&a.e[1]>0&&a.e[1]<a.n?c.16("1l:"+(a.n-a.e[1])+"E; 1U-1G:"+a.e[1]+"E;"):c.16("1l:"+a.n+"E; 1e-1K:1L;")}17 c.16("1c:"+a.g+"E; 1T-1c:"+a.g+"E; 1l:"+a.n+"E; 1e-1K:1L;");c.16("3w:3A; 1D:"+b.y+"E; 1G:"+b.x+"E; 3L:"+(a.J?a.J:"3F")+"; 28:3z; 1w-3y:"+(a.K?a.K:11)+"E; 1w-3D:3J,3K-3f; 1w-3e:2Q");8 c.2P("")}2O.2R=m;m.4.2S=m.4.o;m.4.2T=m.4.B;m.4.2N=m.4.P;m.4.2G=m.4.G;m.4.2F=m.4.v;m.4.2E=m.4.u;m.4.1d=m.4.1d;m.4.29=m.4.q;m.4.2H=m.4.H;m.4.2I=m.4.w;m.4.2L=m.4.R;m.4.2J=m.4.S;m.4.2W=m.4.h;m.4.38=m.4.W;m.4.3a=m.4.X;m.4.3d=m.4.k;m.4.36=m.4.Y;m.4.2Z=m.4.Z;m.4.1j=m.4.1j;m.4.1k=m.4.1k;v.4.1u=v.4.1u;v.4.30=v.4.Q;v.4.29=v.4.q;w.4.1j=w.4.1j;w.4.1k=w.4.1k;w.4.1E=w.4.1E})();',62,235,'|||this|prototype|function|if|var|return|Math|||||||||||||||||||||||||||||||px||||||||||||||||||||||||maps|google|length|for|push|else|setMap|lat|new|getPosition|height|getMap|text|extend|setVisible|style|lng|onAdd|draw|width|event|indexOf|180|remove|PI|getBounds|sin|getZoom|getCenter|fromLatLngToDivPixel|font|addListener|parseInt|LatLngBounds|maxZoom|url|index|top|onRemove|LatLng|left|typeof|getNorthEast|getSouthWest|align|center|cssText|display|parentNode|mapTypes|document|getMapTypeId|background|line|padding|number|show|getProjection|innerHTML|fromDivPixelToLatLng|setCenter|averageCenter|OverlayView|zoomOnClick|min|undefined|contains|break|position|getMarkers|sqrt|cos|void|textColor|aa|removeChild|atan2|6371|ca|max|textSize|appendChild|overlayImage|getPanes|addDomListener|click|trigger|fitBounds|draggable|dragend|DIV|backgroundPosition|clusterclick|anchor|delete|splice|createElement|ba|none|apply|getExtendedBounds|getGridSize|getCalculator|getMaxZoom|getStyles|getTotalMarkers|imageExtension|getTotalClusters|zoom_changed|clearMarkers|window|join|bold|MarkerClusterer|addMarker|addMarkers|idle|imagePath|redraw|56|66|setGridSize|getSize|53|true|null|false|78|setCalculator|60|removeMarker|styles|removeMarkers|gridSize|90|resetViewport|weight|serif|in|4E4|image|object|png|markerclusterer|images|src|scale|progid|filter|all|DXImageTransform|Microsoft|sizingMethod|AlphaImageLoader|cursor|trunk|size|absolute|pointer|library|utility|family|http|black|v3|com|svn|Arial|sans|color|googlecode'.split('|'),0,{}))
/*!



 resources js mno utils swfobject.js



*//*	SWFObject v2.2 <http://code.google.com/p/swfobject/> 
	is released under the MIT License <http://www.opensource.org/licenses/mit-license.php> 
*/
var swfobject=function(){var D="undefined",r="object",S="Shockwave Flash",W="ShockwaveFlash.ShockwaveFlash",q="application/x-shockwave-flash",R="SWFObjectExprInst",x="onreadystatechange",O=window,j=document,t=navigator,T=false,U=[h],o=[],N=[],I=[],l,Q,E,B,J=false,a=false,n,G,m=true,M=function(){var aa=typeof j.getElementById!=D&&typeof j.getElementsByTagName!=D&&typeof j.createElement!=D,ah=t.userAgent.toLowerCase(),Y=t.platform.toLowerCase(),ae=Y?/win/.test(Y):/win/.test(ah),ac=Y?/mac/.test(Y):/mac/.test(ah),af=/webkit/.test(ah)?parseFloat(ah.replace(/^.*webkit\/(\d+(\.\d+)?).*$/,"$1")):false,X=!+"\v1",ag=[0,0,0],ab=null;if(typeof t.plugins!=D&&typeof t.plugins[S]==r){ab=t.plugins[S].description;if(ab&&!(typeof t.mimeTypes!=D&&t.mimeTypes[q]&&!t.mimeTypes[q].enabledPlugin)){T=true;X=false;ab=ab.replace(/^.*\s+(\S+\s+\S+$)/,"$1");ag[0]=parseInt(ab.replace(/^(.*)\..*$/,"$1"),10);ag[1]=parseInt(ab.replace(/^.*\.(.*)\s.*$/,"$1"),10);ag[2]=/[a-zA-Z]/.test(ab)?parseInt(ab.replace(/^.*[a-zA-Z]+(.*)$/,"$1"),10):0}}else{if(typeof O.ActiveXObject!=D){try{var ad=new ActiveXObject(W);if(ad){ab=ad.GetVariable("$version");if(ab){X=true;ab=ab.split(" ")[1].split(",");ag=[parseInt(ab[0],10),parseInt(ab[1],10),parseInt(ab[2],10)]}}}catch(Z){}}}return{w3:aa,pv:ag,wk:af,ie:X,win:ae,mac:ac}}(),k=function(){if(!M.w3){return}if((typeof j.readyState!=D&&j.readyState=="complete")||(typeof j.readyState==D&&(j.getElementsByTagName("body")[0]||j.body))){f()}if(!J){if(typeof j.addEventListener!=D){j.addEventListener("DOMContentLoaded",f,false)}if(M.ie&&M.win){j.attachEvent(x,function(){if(j.readyState=="complete"){j.detachEvent(x,arguments.callee);f()}});if(O==top){(function(){if(J){return}try{j.documentElement.doScroll("left")}catch(X){setTimeout(arguments.callee,0);return}f()})()}}if(M.wk){(function(){if(J){return}if(!/loaded|complete/.test(j.readyState)){setTimeout(arguments.callee,0);return}f()})()}s(f)}}();function f(){if(J){return}try{var Z=j.getElementsByTagName("body")[0].appendChild(C("span"));Z.parentNode.removeChild(Z)}catch(aa){return}J=true;var X=U.length;for(var Y=0;Y<X;Y++){U[Y]()}}function K(X){if(J){X()}else{U[U.length]=X}}function s(Y){if(typeof O.addEventListener!=D){O.addEventListener("load",Y,false)}else{if(typeof j.addEventListener!=D){j.addEventListener("load",Y,false)}else{if(typeof O.attachEvent!=D){i(O,"onload",Y)}else{if(typeof O.onload=="function"){var X=O.onload;O.onload=function(){X();Y()}}else{O.onload=Y}}}}}function h(){if(T){V()}else{H()}}function V(){var X=j.getElementsByTagName("body")[0];var aa=C(r);aa.setAttribute("type",q);var Z=X.appendChild(aa);if(Z){var Y=0;(function(){if(typeof Z.GetVariable!=D){var ab=Z.GetVariable("$version");if(ab){ab=ab.split(" ")[1].split(",");M.pv=[parseInt(ab[0],10),parseInt(ab[1],10),parseInt(ab[2],10)]}}else{if(Y<10){Y++;setTimeout(arguments.callee,10);return}}X.removeChild(aa);Z=null;H()})()}else{H()}}function H(){var ag=o.length;if(ag>0){for(var af=0;af<ag;af++){var Y=o[af].id;var ab=o[af].callbackFn;var aa={success:false,id:Y};if(M.pv[0]>0){var ae=c(Y);if(ae){if(F(o[af].swfVersion)&&!(M.wk&&M.wk<312)){w(Y,true);if(ab){aa.success=true;aa.ref=z(Y);ab(aa)}}else{if(o[af].expressInstall&&A()){var ai={};ai.data=o[af].expressInstall;ai.width=ae.getAttribute("width")||"0";ai.height=ae.getAttribute("height")||"0";if(ae.getAttribute("class")){ai.styleclass=ae.getAttribute("class")}if(ae.getAttribute("align")){ai.align=ae.getAttribute("align")}var ah={};var X=ae.getElementsByTagName("param");var ac=X.length;for(var ad=0;ad<ac;ad++){if(X[ad].getAttribute("name").toLowerCase()!="movie"){ah[X[ad].getAttribute("name")]=X[ad].getAttribute("value")}}P(ai,ah,Y,ab)}else{p(ae);if(ab){ab(aa)}}}}}else{w(Y,true);if(ab){var Z=z(Y);if(Z&&typeof Z.SetVariable!=D){aa.success=true;aa.ref=Z}ab(aa)}}}}}function z(aa){var X=null;var Y=c(aa);if(Y&&Y.nodeName=="OBJECT"){if(typeof Y.SetVariable!=D){X=Y}else{var Z=Y.getElementsByTagName(r)[0];if(Z){X=Z}}}return X}function A(){return !a&&F("6.0.65")&&(M.win||M.mac)&&!(M.wk&&M.wk<312)}function P(aa,ab,X,Z){a=true;E=Z||null;B={success:false,id:X};var ae=c(X);if(ae){if(ae.nodeName=="OBJECT"){l=g(ae);Q=null}else{l=ae;Q=X}aa.id=R;if(typeof aa.width==D||(!/%$/.test(aa.width)&&parseInt(aa.width,10)<310)){aa.width="310"}if(typeof aa.height==D||(!/%$/.test(aa.height)&&parseInt(aa.height,10)<137)){aa.height="137"}j.title=j.title.slice(0,47)+" - Flash Player Installation";var ad=M.ie&&M.win?"ActiveX":"PlugIn",ac="MMredirectURL="+O.location.toString().replace(/&/g,"%26")+"&MMplayerType="+ad+"&MMdoctitle="+j.title;if(typeof ab.flashvars!=D){ab.flashvars+="&"+ac}else{ab.flashvars=ac}if(M.ie&&M.win&&ae.readyState!=4){var Y=C("div");X+="SWFObjectNew";Y.setAttribute("id",X);ae.parentNode.insertBefore(Y,ae);ae.style.display="none";(function(){if(ae.readyState==4){ae.parentNode.removeChild(ae)}else{setTimeout(arguments.callee,10)}})()}u(aa,ab,X)}}function p(Y){if(M.ie&&M.win&&Y.readyState!=4){var X=C("div");Y.parentNode.insertBefore(X,Y);X.parentNode.replaceChild(g(Y),X);Y.style.display="none";(function(){if(Y.readyState==4){Y.parentNode.removeChild(Y)}else{setTimeout(arguments.callee,10)}})()}else{Y.parentNode.replaceChild(g(Y),Y)}}function g(ab){var aa=C("div");if(M.win&&M.ie){aa.innerHTML=ab.innerHTML}else{var Y=ab.getElementsByTagName(r)[0];if(Y){var ad=Y.childNodes;if(ad){var X=ad.length;for(var Z=0;Z<X;Z++){if(!(ad[Z].nodeType==1&&ad[Z].nodeName=="PARAM")&&!(ad[Z].nodeType==8)){aa.appendChild(ad[Z].cloneNode(true))}}}}}return aa}function u(ai,ag,Y){var X,aa=c(Y);if(M.wk&&M.wk<312){return X}if(aa){if(typeof ai.id==D){ai.id=Y}if(M.ie&&M.win){var ah="";for(var ae in ai){if(ai[ae]!=Object.prototype[ae]){if(ae.toLowerCase()=="data"){ag.movie=ai[ae]}else{if(ae.toLowerCase()=="styleclass"){ah+=' class="'+ai[ae]+'"'}else{if(ae.toLowerCase()!="classid"){ah+=" "+ae+'="'+ai[ae]+'"'}}}}}var af="";for(var ad in ag){if(ag[ad]!=Object.prototype[ad]){af+='<param name="'+ad+'" value="'+ag[ad]+'" />'}}aa.outerHTML='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"'+ah+">"+af+"</object>";N[N.length]=ai.id;X=c(ai.id)}else{var Z=C(r);Z.setAttribute("type",q);for(var ac in ai){if(ai[ac]!=Object.prototype[ac]){if(ac.toLowerCase()=="styleclass"){Z.setAttribute("class",ai[ac])}else{if(ac.toLowerCase()!="classid"){Z.setAttribute(ac,ai[ac])}}}}for(var ab in ag){if(ag[ab]!=Object.prototype[ab]&&ab.toLowerCase()!="movie"){e(Z,ab,ag[ab])}}aa.parentNode.replaceChild(Z,aa);X=Z}}return X}function e(Z,X,Y){var aa=C("param");aa.setAttribute("name",X);aa.setAttribute("value",Y);Z.appendChild(aa)}function y(Y){var X=c(Y);if(X&&X.nodeName=="OBJECT"){if(M.ie&&M.win){X.style.display="none";(function(){if(X.readyState==4){b(Y)}else{setTimeout(arguments.callee,10)}})()}else{X.parentNode.removeChild(X)}}}function b(Z){var Y=c(Z);if(Y){for(var X in Y){if(typeof Y[X]=="function"){Y[X]=null}}Y.parentNode.removeChild(Y)}}function c(Z){var X=null;try{X=j.getElementById(Z)}catch(Y){}return X}function C(X){return j.createElement(X)}function i(Z,X,Y){Z.attachEvent(X,Y);I[I.length]=[Z,X,Y]}function F(Z){var Y=M.pv,X=Z.split(".");X[0]=parseInt(X[0],10);X[1]=parseInt(X[1],10)||0;X[2]=parseInt(X[2],10)||0;return(Y[0]>X[0]||(Y[0]==X[0]&&Y[1]>X[1])||(Y[0]==X[0]&&Y[1]==X[1]&&Y[2]>=X[2]))?true:false}function v(ac,Y,ad,ab){if(M.ie&&M.mac){return}var aa=j.getElementsByTagName("head")[0];if(!aa){return}var X=(ad&&typeof ad=="string")?ad:"screen";if(ab){n=null;G=null}if(!n||G!=X){var Z=C("style");Z.setAttribute("type","text/css");Z.setAttribute("media",X);n=aa.appendChild(Z);if(M.ie&&M.win&&typeof j.styleSheets!=D&&j.styleSheets.length>0){n=j.styleSheets[j.styleSheets.length-1]}G=X}if(M.ie&&M.win){if(n&&typeof n.addRule==r){n.addRule(ac,Y)}}else{if(n&&typeof j.createTextNode!=D){n.appendChild(j.createTextNode(ac+" {"+Y+"}"))}}}function w(Z,X){if(!m){return}var Y=X?"visible":"hidden";if(J&&c(Z)){c(Z).style.visibility=Y}else{v("#"+Z,"visibility:"+Y)}}function L(Y){var Z=/[\\\"<>\.;]/;var X=Z.exec(Y)!=null;return X&&typeof encodeURIComponent!=D?encodeURIComponent(Y):Y}var d=function(){if(M.ie&&M.win){window.attachEvent("onunload",function(){var ac=I.length;for(var ab=0;ab<ac;ab++){I[ab][0].detachEvent(I[ab][1],I[ab][2])}var Z=N.length;for(var aa=0;aa<Z;aa++){y(N[aa])}for(var Y in M){M[Y]=null}M=null;for(var X in swfobject){swfobject[X]=null}swfobject=null})}}();return{registerObject:function(ab,X,aa,Z){if(M.w3&&ab&&X){var Y={};Y.id=ab;Y.swfVersion=X;Y.expressInstall=aa;Y.callbackFn=Z;o[o.length]=Y;w(ab,false)}else{if(Z){Z({success:false,id:ab})}}},getObjectById:function(X){if(M.w3){return z(X)}},embedSWF:function(ab,ah,ae,ag,Y,aa,Z,ad,af,ac){var X={success:false,id:ah};if(M.w3&&!(M.wk&&M.wk<312)&&ab&&ah&&ae&&ag&&Y){w(ah,false);K(function(){ae+="";ag+="";var aj={};if(af&&typeof af===r){for(var al in af){aj[al]=af[al]}}aj.data=ab;aj.width=ae;aj.height=ag;var am={};if(ad&&typeof ad===r){for(var ak in ad){am[ak]=ad[ak]}}if(Z&&typeof Z===r){for(var ai in Z){if(typeof am.flashvars!=D){am.flashvars+="&"+ai+"="+Z[ai]}else{am.flashvars=ai+"="+Z[ai]}}}if(F(Y)){var an=u(aj,am,ah);if(aj.id==ah){w(ah,true)}X.success=true;X.ref=an}else{if(aa&&A()){aj.data=aa;P(aj,am,ah,ac);return}else{w(ah,true)}}if(ac){ac(X)}})}else{if(ac){ac(X)}}},switchOffAutoHideShow:function(){m=false},ua:M,getFlashPlayerVersion:function(){return{major:M.pv[0],minor:M.pv[1],release:M.pv[2]}},hasFlashPlayerVersion:F,createSWF:function(Z,Y,X){if(M.w3){return u(Z,Y,X)}else{return undefined}},showExpressInstall:function(Z,aa,X,Y){if(M.w3&&A()){P(Z,aa,X,Y)}},removeSWF:function(X){if(M.w3){y(X)}},createCSS:function(aa,Z,Y,X){if(M.w3){v(aa,Z,Y,X)}},addDomLoadEvent:K,addLoadEvent:s,getQueryParamValue:function(aa){var Z=j.location.search||j.location.hash;if(Z){if(/\?/.test(Z)){Z=Z.split("?")[1]}if(aa==null){return L(Z)}var Y=Z.split("&");for(var X=0;X<Y.length;X++){if(Y[X].substring(0,Y[X].indexOf("="))==aa){return L(Y[X].substring((Y[X].indexOf("=")+1)))}}}return""},expressInstallCallback:function(){if(a){var X=c(R);if(X&&l){X.parentNode.replaceChild(l,X);if(Q){w(Q,true);if(M.ie&&M.win){l.style.display="block"}}if(E){E(B)}}a=false}}}}();
/*!



 resources js mno utils jquery.easing.1.3.js



*//*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - jQuery Easing
 *
 * Open source under the BSD License.
 *
 * Copyright © 2008 George McGinley Smith
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification,
 * are permitted provided that the following conditions are met:
 *
 * Redistributions of source code must retain the above copyright notice, this list of
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list
 * of conditions and the following disclaimer in the documentation and/or other materials
 * provided with the distribution.
 *
 * Neither the name of the author nor the names of contributors may be used to endorse
 * or promote products derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED
 * OF THE POSSIBILITY OF SUCH DAMAGE.
 *
*/

// t: current time, b: begInnIng value, c: change In value, d: duration
jQuery.easing['jswing'] = jQuery.easing['swing'];

jQuery.extend( jQuery.easing,
{
	def: 'easeOutQuad',
	swing: function (x, t, b, c, d) {
		//alert(jQuery.easing.default);
		return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
	},
	easeInQuad: function (x, t, b, c, d) {
		return c*(t/=d)*t + b;
	},
	easeOutQuad: function (x, t, b, c, d) {
		return -c *(t/=d)*(t-2) + b;
	},
	easeInOutQuad: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t + b;
		return -c/2 * ((--t)*(t-2) - 1) + b;
	},
	easeInCubic: function (x, t, b, c, d) {
		return c*(t/=d)*t*t + b;
	},
	easeOutCubic: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t + 1) + b;
	},
	easeInOutCubic: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t + b;
		return c/2*((t-=2)*t*t + 2) + b;
	},
	easeInQuart: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t + b;
	},
	easeOutQuart: function (x, t, b, c, d) {
		return -c * ((t=t/d-1)*t*t*t - 1) + b;
	},
	easeInOutQuart: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
		return -c/2 * ((t-=2)*t*t*t - 2) + b;
	},
	easeInQuint: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t*t + b;
	},
	easeOutQuint: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t*t*t + 1) + b;
	},
	easeInOutQuint: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
		return c/2*((t-=2)*t*t*t*t + 2) + b;
	},
	easeInSine: function (x, t, b, c, d) {
		return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
	},
	easeOutSine: function (x, t, b, c, d) {
		return c * Math.sin(t/d * (Math.PI/2)) + b;
	},
	easeInOutSine: function (x, t, b, c, d) {
		return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
	},
	easeInExpo: function (x, t, b, c, d) {
		return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
	},
	easeOutExpo: function (x, t, b, c, d) {
		return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
	},
	easeInOutExpo: function (x, t, b, c, d) {
		if (t==0) return b;
		if (t==d) return b+c;
		if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
		return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
	},
	easeInCirc: function (x, t, b, c, d) {
		return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
	},
	easeOutCirc: function (x, t, b, c, d) {
		return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
	},
	easeInOutCirc: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
		return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
	},
	easeInElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
	},
	easeOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
	},
	easeInOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
		return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
	},
	easeInBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*(t/=d)*t*((s+1)*t - s) + b;
	},
	easeOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
	},
	easeInOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
		return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
	},
	easeInBounce: function (x, t, b, c, d) {
		return c - jQuery.easing.easeOutBounce (x, d-t, 0, c, d) + b;
	},
	easeOutBounce: function (x, t, b, c, d) {
		if ((t/=d) < (1/2.75)) {
			return c*(7.5625*t*t) + b;
		} else if (t < (2/2.75)) {
			return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
		} else if (t < (2.5/2.75)) {
			return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
		} else {
			return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
		}
	},
	easeInOutBounce: function (x, t, b, c, d) {
		if (t < d/2) return jQuery.easing.easeInBounce (x, t*2, 0, c, d) * .5 + b;
		return jQuery.easing.easeOutBounce (x, t*2-d, 0, c, d) * .5 + c*.5 + b;
	}
});

/*
 *
 * TERMS OF USE - EASING EQUATIONS
 *
 * Open source under the BSD License.
 *
 * Copyright © 2001 Robert Penner
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification,
 * are permitted provided that the following conditions are met:
 *
 * Redistributions of source code must retain the above copyright notice, this list of
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list
 * of conditions and the following disclaimer in the documentation and/or other materials
 * provided with the distribution.
 *
 * Neither the name of the author nor the names of contributors may be used to endorse
 * or promote products derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED
 * OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 */
/*!



 resources js mno utils jquerytmpl.js



*//*
 * jQuery Templates Plugin 1.0.0pre
 * http://github.com/jquery/jquery-tmpl
 * Requires jQuery 1.4.2
 *
 * Copyright Software Freedom Conservancy, Inc.
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 */
(function (a) { var r = a.fn.domManip, d = "_tmplitem", q = /^[^<]*(<[\w\W]+>)[^>]*$|\{\{\! /, b = {}, f = {}, e, p = { key: 0, data: {} }, i = 0, c = 0, l = []; function g(e, d, g, h) { var c = { data: h || (d ? d.data : {}), _wrap: d ? d._wrap : null, tmpl: null, parent: d || null, nodes: [], calls: u, nest: w, wrap: x, html: v, update: t }; e && a.extend(c, e, { nodes: [], parent: d }); if (g) { c.tmpl = g; c._ctnt = c._ctnt || c.tmpl(a, c); c.key = ++i; (l.length ? f : b)[i] = c } return c } a.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function (f, d) { a.fn[f] = function (n) { var g = [], i = a(n), k, h, m, l, j = this.length === 1 && this[0].parentNode; e = b || {}; if (j && j.nodeType === 11 && j.childNodes.length === 1 && i.length === 1) { i[d](this[0]); g = this } else { for (h = 0, m = i.length; h < m; h++) { c = h; k = (h > 0 ? this.clone(true) : this).get(); a(i[h])[d](k); g = g.concat(k) } c = 0; g = this.pushStack(g, f, i.selector) } l = e; e = null; a.tmpl.complete(l); return g } }); a.fn.extend({ tmpl: function (d, c, b) { return a.tmpl(this[0], d, c, b) }, tmplItem: function () { return a.tmplItem(this[0]) }, template: function (b) { return a.template(b, this[0]) }, domManip: function (d, m, k) { if (d[0] && a.isArray(d[0])) { var g = a.makeArray(arguments), h = d[0], j = h.length, i = 0, f; while (i < j && !(f = a.data(h[i++], "tmplItem"))); if (f && c) g[2] = function (b) { a.tmpl.afterManip(this, b, k) }; r.apply(this, g) } else r.apply(this, arguments); c = 0; !e && a.tmpl.complete(b); return this } }); a.extend({ tmpl: function (d, h, e, c) { var i, k = !c; if (k) { c = p; d = a.template[d] || a.template(null, d); f = {} } else if (!d) { d = c.tmpl; b[c.key] = c; c.nodes = []; c.wrapped && n(c, c.wrapped); return a(j(c, null, c.tmpl(a, c))) } if (!d) return []; if (typeof h === "function") h = h.call(c || {}); e && e.wrapped && n(e, e.wrapped); i = a.isArray(h) ? a.map(h, function (a) { return a ? g(e, c, d, a) : null }) : [g(e, c, d, h)]; return k ? a(j(c, null, i)) : i }, tmplItem: function (b) { var c; if (b instanceof a) b = b[0]; while (b && b.nodeType === 1 && !(c = a.data(b, "tmplItem")) && (b = b.parentNode)); return c || p }, template: function (c, b) { if (b) { if (typeof b === "string") b = o(b); else if (b instanceof a) b = b[0] || {}; if (b.nodeType) b = a.data(b, "tmpl") || a.data(b, "tmpl", o(b.innerHTML)); return typeof c === "string" ? (a.template[c] = b) : b } return c ? typeof c !== "string" ? a.template(null, c) : a.template[c] || a.template(null, q.test(c) ? c : a(c)) : null }, encode: function (a) { return ("" + a).split("<").join("&lt;").split(">").join("&gt;").split('"').join("&#34;").split("'").join("&#39;") } }); a.extend(a.tmpl, { tag: { tmpl: { _default: { $2: "null" }, open: "if($notnull_1){_=_.concat($item.nest($1,$2));}" }, wrap: { _default: { $2: "null" }, open: "$item.calls(_,$1,$2);_=[];", close: "call=$item.calls();_=call._.concat($item.wrap(call,_));" }, each: { _default: { $2: "$index, $value" }, open: "if($notnull_1){$.each($1a,function($2){with(this){", close: "}});}" }, "if": { open: "if(($notnull_1) && $1a){", close: "}" }, "else": { _default: { $1: "true" }, open: "}else if(($notnull_1) && $1a){" }, html: { open: "if($notnull_1){_.push($1a);}" }, "=": { _default: { $1: "$data" }, open: "if($notnull_1){_.push($.encode($1a));}" }, "!": { open: ""} }, complete: function () { b = {} }, afterManip: function (f, b, d) { var e = b.nodeType === 11 ? a.makeArray(b.childNodes) : b.nodeType === 1 ? [b] : []; d.call(f, b); m(e); c++ } }); function j(e, g, f) { var b, c = f ? a.map(f, function (a) { return typeof a === "string" ? e.key ? a.replace(/(<\w+)(?=[\s>])(?![^>]*_tmplitem)([^>]*)/g, "$1 " + d + '="' + e.key + '" $2') : a : j(a, e, a._ctnt) }) : e; if (g) return c; c = c.join(""); c.replace(/^\s*([^<\s][^<]*)?(<[\w\W]+>)([^>]*[^>\s])?\s*$/, function (f, c, e, d) { b = a(e).get(); m(b); if (c) b = k(c).concat(b); if (d) b = b.concat(k(d)) }); return b ? b : k(c) } function k(c) { var b = document.createElement("div"); b.innerHTML = c; return a.makeArray(b.childNodes) } function o(b) { return new Function("jQuery", "$item", "var $=jQuery,call,_=[],$data=$item.data;with($data){_.push('" + a.trim(b).replace(/([\\'])/g, "\\$1").replace(/[\r\t\n]/g, " ").replace(/\$\{([^\}]*)\}/g, "{{= $1}}").replace(/\{\{(\/?)(\w+|.)(?:\(((?:[^\}]|\}(?!\}))*?)?\))?(?:\s+(.*?)?)?(\(((?:[^\}]|\}(?!\}))*?)\))?\s*\}\}/g, function (m, l, k, d, b, c, e) { var j = a.tmpl.tag[k], i, f, g; if (!j) throw "Template command not found: " + k; i = j._default || []; if (c && !/\w$/.test(b)) { b += c; c = "" } if (b) { b = h(b); e = e ? "," + h(e) + ")" : c ? ")" : ""; f = c ? b.indexOf(".") > -1 ? b + h(c) : "(" + b + ").call($item" + e : b; g = c ? f : "(typeof(" + b + ")==='function'?(" + b + ").call($item):(" + b + "))" } else g = f = i.$1 || "null"; d = h(d); return "');" + j[l ? "close" : "open"].split("$notnull_1").join(b ? "typeof(" + b + ")!=='undefined' && (" + b + ")!=null" : "true").split("$1a").join(g).split("$1").join(f).split("$2").join(d ? d.replace(/\s*([^\(]+)\s*(\((.*?)\))?/g, function (d, c, b, a) { a = a ? "," + a + ")" : b ? ")" : ""; return a ? "(" + c + ").call($item" + a : d }) : i.$2 || "") + "_.push('" }) + "');}return _;") } function n(c, b) { c._wrap = j(c, true, a.isArray(b) ? b : [q.test(b) ? b : a(b).html()]).join("") } function h(a) { return a ? a.replace(/\\'/g, "'").replace(/\\\\/g, "\\") : null } function s(b) { var a = document.createElement("div"); a.appendChild(b.cloneNode(true)); return a.innerHTML } function m(o) { var n = "_" + c, k, j, l = {}, e, p, h; for (e = 0, p = o.length; e < p; e++) { if ((k = o[e]).nodeType !== 1) continue; j = k.getElementsByTagName("*"); for (h = j.length - 1; h >= 0; h--) m(j[h]); m(k) } function m(j) { var p, h = j, k, e, m; if (m = j.getAttribute(d)) { while (h.parentNode && (h = h.parentNode).nodeType === 1 && !(p = h.getAttribute(d))); if (p !== m) { h = h.parentNode ? h.nodeType === 11 ? 0 : h.getAttribute(d) || 0 : 0; if (!(e = b[m])) { e = f[m]; e = g(e, b[h] || f[h]); e.key = ++i; b[i] = e } c && o(m) } j.removeAttribute(d) } else if (c && (e = a.data(j, "tmplItem"))) { o(e.key); b[e.key] = e; h = a.data(j.parentNode, "tmplItem"); h = h ? h.key : 0 } if (e) { k = e; while (k && k.key != h) { k.nodes.push(j); k = k.parent } delete e._ctnt; delete e._wrap; a.data(j, "tmplItem", e) } function o(a) { a = a + n; e = l[a] = l[a] || g(e, b[e.parent.key + n] || e.parent) } } } function u(a, d, c, b) { if (!a) return l.pop(); l.push({ _: a, tmpl: d, item: this, data: c, options: b }) } function w(d, c, b) { return a.tmpl(a.template(d), c, b, this) } function x(b, d) { var c = b.options || {}; c.wrapped = d; return a.tmpl(a.template(b.tmpl), b.data, c, b.item) } function v(d, c) { var b = this._wrap; return a.map(a(a.isArray(b) ? b.join("") : b).filter(d || "*"), function (a) { return c ? a.innerText || a.textContent : a.outerHTML || s(a) }) } function t() { var b = this.nodes; a.tmpl(null, null, null, this).insertBefore(b[0]); a(b).remove() } })(jQuery);
/*!



 resources js mno tns spring.js



*/var spring_site="test";var _cy_="undefined";if(!this.spring){var spring=function(){var F=_cy_;var D=spring_site;var O="tns-cs.net";var C=typeof spring_ms!=F?spring_ms:2048;var G=typeof spring_debug!=F?spring_debug:null;var E={"+":"%2B",",":"%2C",";":"%3B","=":"%3D","~":"%7E"};var K={};var N=null;var J={};function B(){if("https"==document.location.href.slice(0,5)){return"https://ssl-"}return"http://"}function P(S,Q){if(!Q){Q=S;S={r:document.referrer};J=Q}var R=Q.s?Q.s:S.s;if(!R){R=Q.site?Q.site:(S.site?S.site:D)}if(!K[R]){K[R]=[]}K[R].push([S,Q]);N=1;return this}function M(U){if(!N){P({})}var S;for(s in K){var T=K[s];while(T.length>0){var R=",",Q=[];while(T.length>0){R=R+A(I(T.shift(),Q),Q);if(R.length>C){break}if(T.length>0){R+="+"}}S=L(R+";",s,U)}}K={};return S}function L(T,R,U){var S=B()+(R?R:D)+"."+O+"/j0="+T;var Q=S+"?lt="+(new Date()).getTime().toString(36)+"&x="+screen.width+"x"+screen.height+"x"+screen.colorDepth;if(!U){(new Image()).src=Q}else{if(U==1){document.write('<img src="'+Q+'"" width="1" height=""1">')}}if(G){alert(Q)}return S}function A(Q,R){for(i in R){if(R[i]==Q){return"~"+i}}R.push(Q);return Q}function I(T,V){var R,U,S,Q,W=/[+&,;=~]/g,X;if(!V){V=[]}switch(typeof T){case"string":return W.test(T)?escape(T).replace(W,function(Y){var Z=E[Y];if(Z){return Z}return Y}):escape(T);case"number":return isFinite(T)?String(T):"null";case"boolean":case"null":return String(T);case"object":if(!T){return"null"}R=[];if(typeof T.length==="number"&&!(T.propertyIsEnumerable("length"))){Q=T.length;for(U=0;U<Q;U+=1){R.push(A(I(T[U],V),V)||"null")}return","+R.join("+")+";"}for(S in T){if(typeof S==="string"){if(S!="site"){X=I(T[S],V);if(X){R.push(A(I(S,V)+"="+X,V))}}}}return","+R.join("+")+";"}return""}function H(R,Q,S){P(R,Q);return M(S)}return{a:P,add:P,c:H,commit:H}}()};
/*!



 resources js mno audiencescience audiencescience.js



*/var segQS = "";
(function() {
    var rsi_segs = [];
    var segs_beg=document.cookie.indexOf('rsi_segs=');
    if(segs_beg>=0){
        segs_beg=document.cookie.indexOf('=',segs_beg)+1;
        if(segs_beg>0){
            var segs_end=document.cookie.indexOf(';',segs_beg);
            if(segs_end==-1)segs_end=document.cookie.length;
            rsi_segs=document.cookie.substring(segs_beg,segs_end).split('|');
        }
    }
    var segLen=20;
    if (rsi_segs.length<segLen){segLen=rsi_segs.length}
    for (var i=0;i<segLen;i++){
        segQS+=(rsi_segs[i]+"+");
    }
}());
if (segQS != "+" && segQS != "") {
    document.write('<scr'+'ipt type="text/javascript" src="http://adserver.adtech.de/bind?ckey1=wtbt;cvalue1='+segQS+';expiresDays=14;adct=text/html;misc=123"></scr'+'ipt>');
}
/*!



 resources js mno utils webtoolkit.base64.js



*/var Base64 = {

	_keyStr : "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",

	encode : function (input) {
		var output = "";
		var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
		var i = 0;

		input = Base64._utf8_encode(input);

		while (i < input.length) {

			chr1 = input.charCodeAt(i++);
			chr2 = input.charCodeAt(i++);
			chr3 = input.charCodeAt(i++);

			enc1 = chr1 >> 2;
			enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
			enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
			enc4 = chr3 & 63;

			if (isNaN(chr2)) {
				enc3 = enc4 = 64;
			} else if (isNaN(chr3)) {
				enc4 = 64;
			}

			output = output +
			this._keyStr.charAt(enc1) + this._keyStr.charAt(enc2) +
			this._keyStr.charAt(enc3) + this._keyStr.charAt(enc4);

		}

		return output;
	},

	decode : function (input) {
		var output = "";
		var chr1, chr2, chr3;
		var enc1, enc2, enc3, enc4;
		var i = 0;

		input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");

		while (i < input.length) {

			enc1 = this._keyStr.indexOf(input.charAt(i++));
			enc2 = this._keyStr.indexOf(input.charAt(i++));
			enc3 = this._keyStr.indexOf(input.charAt(i++));
			enc4 = this._keyStr.indexOf(input.charAt(i++));

			chr1 = (enc1 << 2) | (enc2 >> 4);
			chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
			chr3 = ((enc3 & 3) << 6) | enc4;

			output = output + String.fromCharCode(chr1);

			if (enc3 !== 64) {
				output = output + String.fromCharCode(chr2);
			}
			if (enc4 !== 64) {
				output = output + String.fromCharCode(chr3);
			}

		}

		output = Base64._utf8_decode(output);

		return output;

	},

	_utf8_encode : function (string) {
		string = string.replace(/\r\n/g,"\n");
		var utftext = "";
        var n;
		for (n = 0; n < string.length; n++) {

			var c = string.charCodeAt(n);

			if (c < 128) {
				utftext += String.fromCharCode(c);
			}
			else if((c > 127) && (c < 2048)) {
				utftext += String.fromCharCode((c >> 6) | 192);
				utftext += String.fromCharCode((c & 63) | 128);
			}
			else {
				utftext += String.fromCharCode((c >> 12) | 224);
				utftext += String.fromCharCode(((c >> 6) & 63) | 128);
				utftext += String.fromCharCode((c & 63) | 128);
			}

		}

		return utftext;
	},

	_utf8_decode : function (utftext) {
		var string = "";
		var i = 0;
		var c = 0, /*c1 = 0,*/ c2 = 0, c3 = 0;

		while ( i < utftext.length ) {

			c = utftext.charCodeAt(i);

			if (c < 128) {
				string += String.fromCharCode(c);
				i++;
			}
			else if((c > 191) && (c < 224)) {
				c2 = utftext.charCodeAt(i+1);
				string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
				i += 2;
			}
			else {
				c2 = utftext.charCodeAt(i+1);
				c3 = utftext.charCodeAt(i+2);
				string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
				i += 3;
			}

		}

		return string;
	}

};
/*!



 resources js mno core mno.js



*/
var mno=mno||(function(){function a(d){var e=d.split("."),c=mno,b;
if(e[0]==="mno"){e=e.slice(1);}for(b=0;b<e.length;b++){if(typeof c[e[b]]==="undefined"){c[e[b]]={};
}c=c[e[b]];}return c;}return{states:{domReady:false,windowLoad:false},namespace:a};
}());$(document).ready(function(){mno.states.domReady=true;});$(window).bind("load",function(){mno.states.windowLoad=true;
});Array.prototype.rotate=(function(){var a=Array.prototype.unshift,b=Array.prototype.splice;
return function(d){var c=this.length>>>0;d=d>>0;a.apply(this,b.call(this,d%c,c));
return this;};}());if(!Array.prototype.indexOf){Array.prototype.indexOf=function(d,c){if(c==null){c=0;
}else{if(c<0){c=Math.max(0,this.length+c);}}for(var b=c,a=this.length;b<a;
b++){if(this[b]===d){return b;}}return -1;};}if(typeof JSON!=="object"){var JSON={};
JSON.stringify=function(e){var d=typeof e;if(d!=="object"||d===null){if(d==="string"){e='"'+e+'"';
}return String(e);}else{var f,b,c=[],a=(e.constructor===Array);for(f in e){b=e[f];
d=typeof b;if(d==="string"){b='"'+b+'"';}else{if(d==="object"&&b!==null){b=JSON.stringify(b);
}}c.push((a===true?"":'"'+f+'":')+String(b));}return(a===true?"[":"{")+String(c)+(a===true?"]":"}");
}};JSON.parse=function(str){if(str===""){str='""';}eval("var p = "+str+";");
return p;};}if(!Object.create){Object.create=function(b){if(arguments.length>1){throw new Error("Object.create implementation only accepts the first parameter.");
}function a(){}a.prototype=b;return new a();};}$.extend(mno,{callbacks:{}});
/*!



 resources js mno utils gestures.js



*/
(function(a){a.fn.gestures=function(g){var q=0,o=0,k,h,e,b,f,d="gesture"+Math.random()*10000;
g=a.extend({distance:45,accuracy:5,textSelection:false,timeout:true,preventDefault:false,stopPropagation:false,callback:function(){},onMove:function(){},onStart:function(){},onEnd:function(){},onCancel:function(){}},g);
var l=mno.features.touch,c=(l===true?"touchstart."+d:"mousedown."+d),n=(l===true?"touchmove."+d:"mousemove."+d),j=(l===true?"touchend."+d:"mouseup."+d);
this.each(function(){var v=a(this),t=false;if(g.textSelection===false){this.onselectstart=function(){return false;
};this.unselectable="on";v.addClass("disableSelect");v.find("img").bind("mousedown",function(x){x.preventDefault();
});}v.attr("data-gestures","enabled");function s(x){b=(x.originalEvent.changedTouches!==undefined)?x.originalEvent.changedTouches[0]:x;
q=b.pageX;o=b.pageY;k=0;h=0;e=new Date().getTime();}function u(){t=false;
a(document).unbind(n).unbind(j).unbind("touchcancel."+d);g.onCancel();}function w(x){b=(x.originalEvent.changedTouches!==undefined)?x.originalEvent.changedTouches[0]:x;
k=b.pageX-q;h=b.pageY-o;if(t===true){g.onMove({x:k,y:h});}else{if(Math.abs(k)>g.accuracy){g.onStart({x:q,y:o});
t=true;if(g.timeout===true){setTimeout(function(){u();},1000);}}}return true;
}function r(y){if((v.attr("data-gestures")==="enabled")&&t===true){y=(y.originalEvent.changedTouches!==undefined)?y.originalEvent.changedTouches[0]:y;
var x={horizontal:false,vertical:false,speed:new Date().getTime()-e};k=y.pageX-q||0;
h=y.pageY-o||0;if(k<=-g.distance){x.horizontal="left";}if(k>=g.distance){x.horizontal="right";
}if(h<=-g.distance){x.vertical="up";}if(h>=g.distance){x.vertical="down";
}if(x.horizontal!==false||x.vertical!==false){g.callback(x);}else{u();}t=false;
g.onEnd({x:k,y:h,speed:x!==undefined?x.speed:0});}gestureInit=false;}v.bind(c,function(x){s(x);
if(g.preventDefault===true){x.preventDefault();}if(g.stopPropagation===true){x.stopPropagation();
}a(document).bind(n,function(y){w(y);if(g.preventDefault===true){y.preventDefault();
}if(g.stopPropagation===true){y.stopPropagation();}}).bind(j,function(y){r(y);
a(document).unbind(n).unbind(j).unbind("touchcancel."+d);}).bind("touchcancel."+d,function(){u();
});return true;});return this;});};}(window.jQuery));
/*!



 resources js mno core core.js



*/
mno.namespace("core");
mno.core=(function(){var u={},z={},B={},k=false,x,f,h;function y(){return u;
}function C(F){var E=mno.sandbox.create(F),D=u[F].creator(E),G;D.$=E.$;
if(!k){$.each(D,function(I,H){G=D[H];if(typeof G==="function"){D[H]=(function(J,K){return function(){try{return K.apply(this,arguments);
}catch(L){mno.core.log(1,J+"(): "+L.message);}};}(H,G));}});}return D;}function g(D){if(typeof u[D]!=="undefined"){if(u[D].require.length!==0){x(u[D]);
}else{if(u[D].extend.length!==0){f(u[D]);}else{if(u[D].wait.length!==0){h(u[D]);
}else{u[D].instance=$.extend({},u[D].instance,C(D));try{u[D].instance.init();
if(z.hasOwnProperty(D)===false){z[D]=u[D];}mno.core.log(1,"widget started: "+D);
mno.event.triggerEvent({type:D+"-load",data:true});}catch(E){mno.core.log(3,"This error does not affect the other js! Error: failed while running widget: "+D+" width error: "+E);
if(E.stack){mno.core.log(3,E.stack);}}}}}}else{mno.core.log(3,"This error does not affect the other js! moduleId: "+D+" does not exist!!");
}}function v(E){var D=u[E];if(D.instance){D.instance.destroy();D.instance=null;
}}function r(D){if(typeof u[D]==="undefined"){return 0;}else{if(z.hasOwnProperty(D)===false){return 1;
}else{if($.isEmptyObject(u[D].instance)===true){return 2;}else{return 3;
}}}}x=function(E){if(E.require.length>0){var D=E.require.pop(),F;F=D.replace(/\./g,"/")+".js";
mno.io.getScript({url:D.indexOf("http")===0?D:mno.publication.url+"resources/js/"+F,callback:function(){if(u.hasOwnProperty(D)){E.wait.push(D);
g(D);}x(E);}});}else{g(E.id);}};f=function(E){function D(I,H){H.extend.push(I);
var J={};J[I+"-load"]=function(){mno.event.removeEvents(I+"-load",H);g(H.id);
};mno.event.registerEvents(J,H.id);}if(E.extend.length!==0){var F=E.extend.pop(),G=r(F);
if(G===3){E.instance=$.extend(Object.create(u[F].instance),E.instance);
g(E.id);}else{D(F,E);if(G===1){g(F);}}}else{g(E.id);}};h=function(D){if(D.wait.length>0){var F=D.wait.pop(),E={};
if(r(F)!==2){g(D.id);}else{E[F+"-load"]=function(){mno.core.log(1,"wait started: "+D.id);
g(D.id);};mno.event.registerEvents(E,D.id);}}};function s(D){k=D;}function b(){return k;
}function d(D){if(!u.hasOwnProperty(D.id)){u[D.id]=Object.create(mno.module);
$.extend(u[D.id],D);}}function w(){var E;function D(F){window.setTimeout(function(){g(F);
},25);}for(E in u){if(u.hasOwnProperty(E)){D(E);}}}function e(){var F,L=[],D,E,J,I,G=mno.model,H;
for(F in G.widget){if(G.widget.hasOwnProperty(F)){F=G.widget[F];L.push({widgetId:F.type.replace("_",".")+(typeof F.codePath!=="undefined"?F.codePath.replace(/\//g,"."):(typeof F.VIEW!=="undefined"?(F.VIEW!==""?"."+F.VIEW:""):".default"))});
if(typeof F.mapData!=="undefined"&&F.mapData!==null){L.push({widgetId:"widget.slideshow.map"});
}if(typeof F.weatherContent!=="undefined"&&F.weatherContent!==null){L.push({widgetId:F.weatherContent});
}}}if(!$.isEmptyObject(G.article)){L.push({widgetId:"widget.storyContent.article"});
}function K(M){window.setTimeout(function(){g(M);},25);}for(H in u){if(u.hasOwnProperty(H)&&u[H].forceStart===true){z[H]=u[H];
}}for(E=0;E<L.length;E++){J=L[E];I=u[J.widgetId];if(typeof I!=="undefined"){z[J.widgetId]=I;
}}for(D in z){if(z.hasOwnProperty(D)){K(D);}}}function n(){var D;for(D in u){if(u.hasOwnProperty(D)){v(D);
}}}function j(E,G,H){H=(typeof H==="undefined"?false:H);if(H||!k){var D=(E===1?"LOGG":(E===2?"WARN":(E===3?"ERROR":"LOGG"))),F=Math.ceil(Math.random()*10);
}else{if(k&&typeof console==="object"){console[(E===1)?"log":(E===2)?"warn":"error"](G);
if(E===3&&typeof console.trace==="function"){console.trace();}}}}function a(E,D){}function t(E,F){if($.isPlainObject(F)&&F.type&&E){if(!B[F.type]){B[F.type]={};
}var D={};D[E]=F.data;$.extend(B[F.type],D);}else{mno.core.log(1,F+"not an valid data object: "+E);
}}function o(E){if(B.hasOwnProperty(E)){var D={},F;for(F in B[E]){if(B[E].hasOwnProperty(F)){if(typeof B[E][F]==="function"){D[F]=B[E][F]();
}else{D[F]=B[E][F];}}}return D;}else{return false;}}function A(E){var F=E.offset(),D=E.position();
return{pageX:F.left,pageY:F.top,parentX:D.left,parentY:D.top};}function l(D){if(k){if(typeof console==="object"&&typeof console.time==="function"){console.time(D);
}}}function q(D){if(k){if(typeof console==="object"&&typeof console.timeEnd==="function"){console.timeEnd(D);
}}}function c(E,D){function G(H){var I={};return function(){if(H===0){if(I.hasOwnProperty(arguments[H])===false){I[arguments[H]]=E.apply(D,arguments);
}return I[arguments[H]];}else{if(I.hasOwnProperty(arguments[H])===false){I[arguments[H]]=G(H-1);
}return I[arguments[H]].apply(this,arguments);}};}var F=E.arity||E.length;
return G(F-1);}return{debug:s,getDebug:b,register:d,start:g,startAll:w,stop:v,stopAll:n,log:j,removeData:a,storeData:t,getData:o,getPosition:A,jsonP:{},startAllOnCurrentPage:e,profiling:{startTimer:l,stopTimer:q},memoize:c,getModuleData:y};
}());
/*!



 resources js mno core event.js



*/
mno.namespace("event");
mno.event=function(){var c=mno.core.getModuleData();function b(e,f){if($.isPlainObject(e)&&f){if(c[f]){c[f].events=$.extend(e,c[f].events);
}else{mno.core.log(1,"Event registration failed for "+f);mno.core.log(1,e);
}}else{mno.core.log(1,e+"not an object: "+f);}}function d(e){var f,g;for(g in c){if(c.hasOwnProperty(g)){f=c[g];
if(f.events&&f.events[e.type]){f.events[e.type](e.data);}}}}function a(e,g){e=$.isArray(e)?e:[e];
var f=e.length;if(typeof g==="string"){g=c[g];}if(g&&g.events){while(f--){delete g.events[e[f]];
}}}return{registerEvents:b,triggerEvent:d,removeEvents:a};}();
/*!



 resources js mno core io.js



*/
mno.namespace("io");
mno.io=function(){var b={};function a(k){k=$.extend({url:false,reload:false,error:function(){},callbackVar:"cb",callback:function(){}},k);
if(!k.url){mno.core.log(1,"getScript missing url");return false;}function d(){if(b[k.url]!==undefined){$(b[k.url].element).remove();
b[k.url].error();delete b[k.url];}}if(k.hasOwnProperty("jsonP")){var j=mno.core.jsonP,g=new Date().getTime();
k.url+=(k.url.indexOf("?")===-1)?"?"+k.callbackVar+"=":"&"+k.callbackVar+"=";
k.url+="mno.core.jsonP.func"+g;j["func"+g]=function(l){k.jsonP(l);delete j["func"+g];
d();};}function e(){if(b[k.url]!==undefined){b[k.url].loaded=true;while(b[k.url].callback.length>0){b[k.url].callback.shift()();
}}}function h(){if(!b.hasOwnProperty(k.url)){if(b[k.url].loaded===true){e();
}else{window.setTimeout(function(){h();},50);}}}function f(o){var q=window.setTimeout(function(){mno.core.log(1,o.url+" timed out");
d();},5000),l=document.createElement("script"),n=document.getElementsByTagName("script")[0];
l.onreadystatechange=function(){if(this.readyState==="complete"||this.readyState==="loaded"){l.onreadystatechange=null;
window.clearTimeout(q);e();}};l.onerror=d;l.onload=function(){window.clearTimeout(q);
e();};b[o.url]={element:l,loaded:false,error:o.error,callback:[o.callback]};
l.src=o.url;l.async=true;l.type="text/javascript";n.parentNode.insertBefore(l,n);
}if(!b.hasOwnProperty(k.url)){f(k);}else{if(k.reload===true){d();f(k);}else{b[k.url].callback.push(k.callback);
h();}}return true;}function c(d){d=mno.publication.url+"/resources/skins/"+d;
if(!b.hasOwnProperty(d)){var e=document.createElement("link"),f=document.getElementsByTagName("script")[0];
e.setAttribute("type","text/css");e.setAttribute("rel","stylesheet");e.setAttribute("href",d);
f.parentNode.insertBefore(e,f);b[d]=e;}}return{getScript:a,getCSS:c};}();
/*!



 resources js mno core module.js



*/
mno.module={creator:function(){},extend:[],require:[],forceStart:false,wait:[],instance:{},events:{}};
/*!



 resources js mno core sandbox.js



*/
mno.namespace("mno.sandbox");
mno.sandbox=function(){function b(d){var e=this;for(var c in d){if(d.hasOwnProperty(c)){this[c]=d[c];
}}this.$=function(f,g){return window.jQuery(f,e.container);};}b.prototype.container=null;
b.prototype.model=[];$(document).ready(function(){b.prototype.publication=mno.publication;
});b.prototype.notify=function(c){if(window.jQuery.isPlainObject(c)&&c.type){mno.event.triggerEvent(c);
}return true;};b.prototype.listen=function(c){if(window.jQuery.isPlainObject(c)){mno.event.registerEvents(c,this.moduleId);
}};b.prototype.ignore=function(c){mno.event.removeEvents(c,this.moduleId);
};b.prototype.getScript=function(c){mno.io.getScript(c);};b.prototype.storeData=function(c){mno.core.storeData(this.moduleId,c);
};b.prototype.getData=function(c){return mno.core.getData(c);};b.prototype.getPosition=function(){if(this.container!==null){return mno.core.getPosition(this.container);
}else{return false;}};b.prototype.render=function(c,d,e){return mno.views.render(c,d,e);
};b.prototype.requireWidget=function(c){return mno.core.start((c));};b.prototype.memoize=function(d,c){return mno.core.memoize(d,c);
};function a(g){var d=null,f=[],e,c,h;if(window.jQuery("."+g).length!==0){d=window.jQuery("."+g);
}else{mno.core.log(1,"Missing container for "+g);}if(d){c=mno.model.widget;
d.each(function(){h=window.jQuery(this);e=h.attr("data-widget-id");if(c.hasOwnProperty(e)){if(c[e].hasOwnProperty("uiResources")){var k={};
for(var j=0;j<c[e].uiResources.length;j++){if(mno.uiResources.hasOwnProperty(c[e].uiResources[j])){k[c[e].uiResources[j]]=mno.uiResources[c[e].uiResources[j]](h);
}}c[e].uiResources=k;}f.push(c[e]);}});}return new b({container:d,model:f,moduleId:g});
}return{create:a};}();
/*!



 resources js mno utils form.js



*/
mno.namespace("utils.form");
mno.utils.form=function(){var b=document.createElement("input");function k(l,n){l.parents("form:first").addClass("error");
l.css({backgroundColor:"#Fcc"});if(typeof n!=="undefined"){$("<p />").css({color:"#900",fontSize:"10px"}).html(n).insertAfter(l);
}}function h(l){l=l||document;if(!("placeholder" in b)){$("input[placeholder]",l).each(function(){var n=$(this),o=n.attr("placeholder");
if(n.val()===""){n.val(o).css("color","#999");}n.bind("focus",function(){var q=$(this),r=q.attr("placeholder");
if(q.val()===r){q.val("").css("color","#000");}}).bind("change blur",function(){var r=$(this),s=r.attr("placeholder"),q=r.val();
if((q==="")||(q===s)){r.val(s).css("color","#999");}});n.parents("form:first").bind("submit",function(){var q=$(this),s=n.attr("placeholder"),r=n.val();
if((r==="")||(r===s)){n.val("");}});});}}function j(q){q=q||document;if($('input[type="date"]',q).length!==0){var o=["Man","Tir","Ons","Tor","Fre","L&oslash;r","S&oslash;n"],s=["Januar","Februar","Mars","April","Mai","Juni","Juli","August","September","Oktober","November","Desember"],n=[31,28,31,30,31,30,31,31,30,31,30,31],l=new Date();
function r(E,u,z,B){z=(isNaN(z)||z===null)?l.getMonth():parseInt(z,10);
B=(isNaN(B)||B===null)?l.getFullYear():B;u=(isNaN(u)||u===null)?l.getDate():parseInt(u,10);
var t=new Date(B,z,1),y=t.getDay()||7,A=n[z],x="",w=0,v=0,C=1,D={months:[],years:[],dayLabels:o,row:[]};
if(z===1){if((B%4===0&&this.year%100!==0)||B%400===0){A=29;}}for(w=0;w<=11;
w++){D.months.push({selected:(z===w)?' selected="selected"':"",value:w,name:s[w]});
}for(w=l.getFullYear();w>=1860;w--){D.years.push({selected:(parseInt(B)===w)?' selected="selected"':"",value:w,name:w});
}for(w=0;w<9;w++){D.row[w]={cell:[]};for(v=1;v<=7;v++){if(C<=A&&(w>0||v>=y)){x='<div datetime="'+B+"-"+(z+1)+"-"+C+'">'+C+"</div>";
C++;}D.row[w].cell.push({current:(u+1!==C)?"":' class="current"',time:x});
x="";}if(C>A){break;}}mno.views.render("mno.views.calendar",D,E);}$(q).delegate('input[type="date"]',"click",function(){var z=$(this),x=z.val().split("/"),v=new Date(),u=x[0]||v.getDate(),y=x[1]!==undefined?x[1]-1:v.getMonth(),w=x[2]||v.getFullYear();
function t(){r(function(A){z.attr("disabled","disabled");$("body").bind("click.date",function(){z.removeAttr("disabled");
A.remove();$("body").unbind("click.date");});A.bind("click",function(){return false;
});A.insertBefore(z);A.find("select").bind("change",function(){if($(this).attr("name")==="month"){y=$(this).val();
}else{w=$(this).val();}A.remove();t();});A.find("tbody div").bind("click",function(){x=$(this).attr("datetime").split("-");
z.val(x[2]+"/"+x[1]+"/"+x[0]);z.removeAttr("disabled");A.remove();$("body").unbind("click.date");
});},u,y,w);}t();});}}function e(l){l=l||document;if(!("required" in b)){$("input[required], textarea[required]",l).each(function(){var n=$(this);
n.parents("form:first").bind("submit",function(o){if(n.val()===""){k(n,"Feltet kan ikke v&aelig;re tomt");
o.preventDefault();}});});}}function f(l){l=l||document;b.setAttribute("type","email");
if(b.type!=="email"){$('input[type="email"]',l).each(function(){var o=$(this),n=/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
o.parents("form:first").bind("submit",function(q){if(!n.test(o.val())){k(o,"Ugyldig epostadresse");
q.preventDefault();}});});}}function a(l){l=l||document;if(!("maxlength" in b)){$('input[maxlength][maxlength!=-1][maxlength!=524288][maxlength!=2147483647][type="text"],textarea[maxlength][maxlength!=-1][maxlength!=524288][maxlength!=2147483647]',l).not("[data-mno-form]").each(function(){var o=$(this),n=$("<p />").addClass("formCharCounter").insertAfter(o);
o.attr("data-mno-form","true").bind("keyup",function(){var r=o.attr("maxlength")||500,s=o.val(),q=s.length;
if(q>r){o.val(s.substr(0,r));n.html("Du har <strong>0</strong> tegn igjen");
return false;}else{n.html("Du har <strong>"+(r-q)+"</strong> tegn igjen");
return true;}});});}}function g(l){l=l||document;$("select",l).not("[data-mno-form]").each(function(q){var t=$(this),s=t.outerWidth(),r=$("<div />").addClass("pillBox selectDropDown"),n=$("<input />").attr("type","text").val(t.find("option[value="+t.val()+"]").html()).appendTo(r),o=$("<span />").addClass("button").html("\u25BC");
t.attr("data-mno-form","true");t.parent().addClass("relative");r.css({top:t.position().top+"px",left:t.position().left+"px",zIndex:1,width:s+"px"}).append(o);
if(t.parents(".pillBox").length!==0){if(t.get(0)===t.parents(".pillBox").first().children().last().get(0)){r.insertAfter(t);
}else{r.insertBefore(t);}}else{r.insertBefore(t);}n.css("width",(s-o.outerWidth()-(n.outerWidth()-n.width()))+"px");
t.css({position:"relative",zIndex:2,opacity:0,height:"17px"}).bind("change",function(){n.val(t.find("option[value="+t.val()+"]").html());
});});}function d(l){l=l||document;$(".fileInput",l).not("[data-mno-form]").each(function(){var n=$("<div />").addClass("pillBox").html('<input type="text" name="fake" /><span class="button">Bla gjennom</span>').css({position:"absolute",zIndex:1,top:0,left:0});
var o=$(this);o.attr("data-mno-form","true");o.find("input[type=file]").css({opacity:0,position:"relative",zIndex:2}).data("fake",n).bind("change mouseout",function(){$(this).data("fake").find("input").val($(this).val());
});o.append(n);});}function c(l){l=l||document;$(".rightAlignedLabels input, .rightAlignedLabels textarea",l).not("[data-mno-form]").each(function(){var r=$(this),q=$("label[for="+r.attr("id")+"]");
function o(){if(!q.data("active")){r.unbind("focus").bind("blur",n).focus();
q.animate({left:(q.position().left-q.width()-11)+"px",opacity:1},250,function(){q.data("active",true);
});}}function n(){if((q.data("active"))&&(r.val()==="")){r.bind("focus",o).unbind("blur").blur();
q.animate({left:(r.position().left+6)+"px",opacity:0.5},250,function(){q.data("active",false);
});}}r.attr("data-mno-form","true");if(r.val()===""&&!r.attr("placeholder")){q.css({opacity:0.5,left:(r.position().left+6)+"px",textAlign:"left",width:"auto"}).data("active",false);
}else{q.data("active",true);}if(q.length!==0){r.bind("focus",o);q.bind("click",function(s){o();
return false;});}});}return{placeholder:h,datePicker:j,required:e,email:f,maxLength:a,select:g,fileInput:d,slidingLabels:c,styleAll:function(l){l=l||document;
h(l);j(l);e(l);f(l);a(l);g(l);c(l);}};}();$(document).ready(function(){mno.utils.form.styleAll();
});
/*!



 resources js mno utils jquery-transform.js



*/
(function(D,C,z,H){var B=/progid:DXImageTransform\.Microsoft\.Matrix\(.*?\)/,G=/^([\+\-]=)?([\d+.\-]+)(.*)$/,t=/%/;
var F=z.createElement("modernizr"),E=F.style;function w(a){return parseFloat(a);
}function x(){var b={transformProperty:"",MozTransform:"-moz-",WebkitTransform:"-webkit-",OTransform:"-o-",msTransform:"-ms-"};
for(var a in b){if(typeof E[a]!="undefined"){return b[a];}}return null;
}function s(){if(typeof(C.Modernizr)!=="undefined"){return Modernizr.csstransforms;
}var a=["transformProperty","WebkitTransform","MozTransform","OTransform","msTransform"];
for(var b in a){if(E[a[b]]!==H){return true;}}}var I=x(),A=I!==null?I+"transform":false,y=I!==null?I+"transform-origin":false;
D.support.csstransforms=s();if(I=="-ms-"){A="msTransform";y="msTransformOrigin";
}D.extend({transform:function(a){a.transform=this;this.$elem=D(a);this.applyingMatrix=false;
this.matrix=null;this.height=null;this.width=null;this.outerHeight=null;
this.outerWidth=null;this.boxSizingValue=null;this.boxSizingProperty=null;
this.attr=null;this.transformProperty=A;this.transformOriginProperty=y;
}});D.extend(D.transform,{funcs:["matrix","origin","reflect","reflectX","reflectXY","reflectY","rotate","scale","scaleX","scaleY","skew","skewX","skewY","translate","translateX","translateY"]});
D.fn.transform=function(b,a){return this.each(function(){var c=this.transform||new D.transform(this);
if(b){c.exec(b,a);}});};D.transform.prototype={exec:function(b,a){a=D.extend(true,{forceMatrix:false,preserve:false},a);
this.attr=null;if(a.preserve){b=D.extend(true,this.getAttrs(true,true),b);
}else{b=D.extend(true,{},b);}this.setAttrs(b);if(D.support.csstransforms&&!a.forceMatrix){return this.execFuncs(b);
}else{if(D.browser.msie||(D.support.csstransforms&&a.forceMatrix)){return this.execMatrix(b);
}}return false;},execFuncs:function(b){var c=[];for(var a in b){if(a=="origin"){this[a].apply(this,D.isArray(b[a])?b[a]:[b[a]]);
}else{if(D.inArray(a,D.transform.funcs)!==-1){c.push(this.createTransformFunc(a,b[a]));
}}}this.$elem.css(A,c.join(" "));return true;},execMatrix:function(c){var O,g,r;
var n=this.$elem[0],P=this;function Q(J,K){if(t.test(J)){return parseFloat(J)/100*P["safeOuter"+(K?"Height":"Width")]();
}return v(n,J);}var N=/translate[X|Y]?/,o=[];for(var l in c){switch(D.type(c[l])){case"array":r=c[l];
break;case"string":r=D.map(c[l].split(","),D.trim);break;default:r=[c[l]];
}if(D.matrix[l]){if(D.cssAngle[l]){r=D.map(r,D.angle.toDegree);}else{if(!D.cssNumber[l]){r=D.map(r,Q);
}else{r=D.map(r,w);}}g=D.matrix[l].apply(this,r);if(N.test(l)){o.push(g);
}else{O=O?O.x(g):g;}}else{if(l=="origin"){this[l].apply(this,r);}}}O=O||D.matrix.identity();
D.each(o,function(K,J){O=O.x(J);});var b=parseFloat(O.e(1,1).toFixed(6)),f=parseFloat(O.e(2,1).toFixed(6)),h=parseFloat(O.e(1,2).toFixed(6)),k=parseFloat(O.e(2,2).toFixed(6)),a=O.rows===3?parseFloat(O.e(1,3).toFixed(6)):0,e=O.rows===3?parseFloat(O.e(2,3).toFixed(6)):0;
if(D.support.csstransforms&&I==="-moz-"){this.$elem.css(A,"matrix("+b+", "+f+", "+h+", "+k+", "+a+"px, "+e+"px)");
}else{if(D.support.csstransforms){this.$elem.css(A,"matrix("+b+", "+f+", "+h+", "+k+", "+a+", "+e+")");
}else{if(D.browser.msie){var j=", FilterType='nearest neighbor'";var M=this.$elem[0].style;
var q="progid:DXImageTransform.Microsoft.Matrix(M11="+b+", M12="+h+", M21="+f+", M22="+k+", sizingMethod='auto expand'"+j+")";
var d=M.filter||D.curCSS(this.$elem[0],"filter")||"";M.filter=B.test(d)?d.replace(B,q):d?d+" "+q:q;
this.applyingMatrix=true;this.matrix=O;this.fixPosition(O,a,e);this.applyingMatrix=false;
this.matrix=null;}}}return true;},origin:function(b,a){if(D.support.csstransforms){if(typeof a==="undefined"){this.$elem.css(y,b);
}else{this.$elem.css(y,b+" "+a);}return true;}switch(b){case"left":b="0";
break;case"right":b="100%";break;case"center":case H:b="50%";}switch(a){case"top":a="0";
break;case"bottom":a="100%";break;case"center":case H:a="50%";}this.setAttr("origin",[t.test(b)?b:v(this.$elem[0],b)+"px",t.test(a)?a:v(this.$elem[0],a)+"px"]);
return true;},createTransformFunc:function(b,a){if(b.substr(0,7)==="reflect"){var c=a?D.matrix[b]():D.matrix.identity();
return"matrix("+c.e(1,1)+", "+c.e(2,1)+", "+c.e(1,2)+", "+c.e(2,2)+", 0, 0)";
}if(b=="matrix"){if(I==="-moz-"){a[4]=a[4]?a[4]+"px":0;a[5]=a[5]?a[5]+"px":0;
}}return b+"("+(D.isArray(a)?a.join(", "):a)+")";},fixPosition:function(c,f,g,a,n){var h=new D.matrix.calc(c,this.safeOuterHeight(),this.safeOuterWidth()),b=this.getAttr("origin");
var j=h.originOffset(new D.matrix.V2(t.test(b[0])?parseFloat(b[0])/100*h.outerWidth:parseFloat(b[0]),t.test(b[1])?parseFloat(b[1])/100*h.outerHeight:parseFloat(b[1])));
var l=h.sides();var k=this.$elem.css("position");if(k=="static"){k="relative";
}var d={top:0,left:0};var e={position:k,top:(j.top+g+l.top+d.top)+"px",left:(j.left+f+l.left+d.left)+"px",zoom:1};
this.$elem.css(e);}};function v(e,c){var d=G.exec(D.trim(c));if(d[3]&&d[3]!=="px"){var a="paddingBottom",b=D.style(e,a);
D.style(e,a,c);c=u(e,a);D.style(e,a,b);return c;}return parseFloat(c);}function u(b,a){if(b[a]!=null&&(!b.style||b.style[a]==null)){return b[a];
}var c=parseFloat(D.css(b,a));return c&&c>-10000?c:0;}})(jQuery,this,this.document);
(function(l,n,h,j){l.extend(l.transform.prototype,{safeOuterHeight:function(){return this.safeOuterLength("height");
},safeOuterWidth:function(){return this.safeOuterLength("width");},safeOuterLength:function(e){var b="outer"+(e=="width"?"Width":"Height");
if(!l.support.csstransforms&&l.browser.msie){e=e=="width"?"width":"height";
if(this.applyingMatrix&&!this[b]&&this.matrix){var f=new l.matrix.calc(this.matrix,1,1),d=f.offset(),u=this.$elem[b]()/d[e];
this[b]=u;return u;}else{if(this.applyingMatrix&&this[b]){return this[b];
}}var c={height:["top","bottom"],width:["left","right"]};var t=this.$elem[0],r=parseFloat(l.curCSS(t,e,true)),a=this.boxSizingProperty,s=this.boxSizingValue;
if(!this.boxSizingProperty){a=this.boxSizingProperty=k()||"box-sizing";
s=this.boxSizingValue=this.$elem.css(a)||"content-box";}if(this[b]&&this[e]==r){return this[b];
}else{this[e]=r;}if(a&&(s=="padding-box"||s=="content-box")){r+=parseFloat(l.curCSS(t,"padding-"+c[e][0],true))||0+parseFloat(l.curCSS(t,"padding-"+c[e][1],true))||0;
}if(a&&s=="content-box"){r+=parseFloat(l.curCSS(t,"border-"+c[e][0]+"-width",true))||0+parseFloat(l.curCSS(t,"border-"+c[e][1]+"-width",true))||0;
}this[b]=r;return r;}return this.$elem[b]();}});var g=null;function k(){if(g){return g;
}var b={boxSizing:"box-sizing",MozBoxSizing:"-moz-box-sizing",WebkitBoxSizing:"-webkit-box-sizing",OBoxSizing:"-o-box-sizing"},c=h.body;
for(var a in b){if(typeof c.style[a]!="undefined"){g=b[a];return g;}}return null;
}})(jQuery,this,this.document);(function(n,o,j,l){var r=/([\w\-]*?)\((.*?)\)/g,k="data-transform",q=/\s/,s=/,\s?/;
n.extend(n.transform.prototype,{setAttrs:function(d){var c="",a;for(var b in d){a=d[b];
if(n.isArray(a)){a=a.join(", ");}c+=" "+b+"("+a+")";}this.attr=n.trim(c);
this.$elem.attr(k,this.attr);},setAttr:function(b,a){if(n.isArray(a)){a=a.join(", ");
}var c=this.attr||this.$elem.attr(k);if(!c||c.indexOf(b)==-1){this.attr=n.trim(c+" "+b+"("+a+")");
this.$elem.attr(k,this.attr);}else{var d=[],e;r.lastIndex=0;while(e=r.exec(c)){if(b==e[1]){d.push(b+"("+a+")");
}else{d.push(e[0]);}}this.attr=d.join(" ");this.$elem.attr(k,this.attr);
}},getAttrs:function(){var c=this.attr||this.$elem.attr(k);if(!c){return{};
}var d={},a,b;r.lastIndex=0;while((a=r.exec(c))!==null){if(a){b=a[2].split(s);
d[a[1]]=b.length==1?b[0]:b;}}return d;},getAttr:function(a){var b=this.getAttrs();
if(typeof b[a]!=="undefined"){return b[a];}if(a==="origin"&&n.support.csstransforms){return this.$elem.css(this.transformOriginProperty).split(q);
}else{if(a==="origin"){return["50%","50%"];}}return n.cssDefault[a]||0;
}});if(typeof(n.cssAngle)=="undefined"){n.cssAngle={};}n.extend(n.cssAngle,{rotate:true,skew:true,skewX:true,skewY:true});
if(typeof(n.cssDefault)=="undefined"){n.cssDefault={};}n.extend(n.cssDefault,{scale:[1,1],scaleX:1,scaleY:1,matrix:[1,0,0,1,0,0],origin:["50%","50%"],reflect:[1,0,0,1,0,0],reflectX:[1,0,0,1,0,0],reflectXY:[1,0,0,1,0,0],reflectY:[1,0,0,1,0,0]});
if(typeof(n.cssMultipleValues)=="undefined"){n.cssMultipleValues={};}n.extend(n.cssMultipleValues,{matrix:6,origin:{length:2,duplicate:true},reflect:6,reflectX:6,reflectXY:6,reflectY:6,scale:{length:2,duplicate:true},skew:2,translate:2});
n.extend(n.cssNumber,{matrix:true,reflect:true,reflectX:true,reflectXY:true,reflectY:true,scale:true,scaleX:true,scaleY:true});
n.each(n.transform.funcs,function(b,a){n.cssHooks[a]={set:function(f,e){var c=f.transform||new n.transform(f),d={};
d[a]=e;c.exec(d,{preserve:true});},get:function(e,c){var d=e.transform||new n.transform(e);
return d.getAttr(a);}};});n.each(["reflect","reflectX","reflectXY","reflectY"],function(b,a){n.cssHooks[a].get=function(e,c){var d=e.transform||new n.transform(e);
return d.getAttr("matrix")||n.cssDefault[a];};});})(jQuery,this,this.document);
(function(o,l,k,r){var q=/^([+\-]=)?([\d+.\-]+)(.*)$/;var t=o.fn.animate;
o.fn.animate=function(d,a,e,f){var b=o.speed(a,e,f),c=o.cssMultipleValues;
b.complete=b.old;if(!o.isEmptyObject(d)){if(typeof b.original==="undefined"){b.original={};
}o.each(d,function(v,g){if(c[v]||o.cssAngle[v]||(!o.cssNumber[v]&&o.inArray(v,o.transform.funcs)!==-1)){var h=null;
if(jQuery.isArray(d[v])){var w=1,x=g.length;if(c[v]){w=(typeof c[v].length==="undefined"?c[v]:c[v].length);
}if(x>w||(x<w&&x==2)||(x==2&&w==2&&isNaN(parseFloat(g[x-1])))){h=g[x-1];
g.splice(x-1,1);}}b.original[v]=g.toString();d[v]=parseFloat(g);}});}return t.apply(this,[arguments[0],b]);
};var s="paddingBottom";function j(b,a){if(b[a]!=null&&(!b.style||b.style[a]==null)){}var c=parseFloat(o.css(b,a));
return c&&c>-10000?c:0;}var n=o.fx.prototype.custom;o.fx.prototype.custom=function(D,C,B){var z=o.cssMultipleValues[this.prop],c=o.cssAngle[this.prop];
if(z||(!o.cssNumber[this.prop]&&o.inArray(this.prop,o.transform.funcs)!==-1)){this.values=[];
if(!z){z=1;}var A=this.options.original[this.prop],E=o(this.elem).css(this.prop),h=o.cssDefault[this.prop]||0;
if(!o.isArray(E)){E=[E];}if(!o.isArray(A)){if(o.type(A)==="string"){A=A.split(",");
}else{A=[A];}}var f=z.length||z,F=0;while(A.length<f){A.push(z.duplicate?A[0]:h[F]||0);
F++;}var g,a,b,d=this,e=d.elem.transform;orig=o.style(d.elem,s);o.each(A,function(v,u){if(E[v]){g=E[v];
}else{if(h[v]&&!z.duplicate){g=h[v];}else{if(z.duplicate){g=E[0];}else{g=0;
}}}if(c){g=o.angle.toDegree(g);}else{if(!o.cssNumber[d.prop]){a=q.exec(o.trim(g));
if(a[3]&&a[3]!=="px"){if(a[3]==="%"){g=parseFloat(a[2])/100*e["safeOuter"+(v?"Height":"Width")]();
}else{o.style(d.elem,s,g);g=j(d.elem,s);o.style(d.elem,s,orig);}}}}g=parseFloat(g);
a=q.exec(o.trim(u));if(a){b=parseFloat(a[2]);B=a[3]||"px";if(c){b=o.angle.toDegree(b+B);
B="deg";}else{if(!o.cssNumber[d.prop]&&B==="%"){g=(g/e["safeOuter"+(v?"Height":"Width")]())*100;
}else{if(!o.cssNumber[d.prop]&&B!=="px"){o.style(d.elem,s,(b||1)+B);g=((b||1)/j(d.elem,s))*g;
o.style(d.elem,s,orig);}}}if(a[1]){b=((a[1]==="-="?-1:1)*b)+g;}}else{b=u;
B="";}d.values.push({start:g,end:b,unit:B});});}return n.apply(this,arguments);
};o.fx.multipleValueStep={_default:function(a){o.each(a.values,function(c,b){a.values[c].now=b.start+((b.end-b.start)*a.pos);
});}};o.each(["matrix","reflect","reflectX","reflectXY","reflectY"],function(b,a){o.fx.multipleValueStep[a]=function(f){var d=f.decomposed,c=o.matrix;
m=c.identity();d.now={};o.each(d.start,function(g){d.now[g]=parseFloat(d.start[g])+((parseFloat(d.end[g])-parseFloat(d.start[g]))*f.pos);
if(((g==="scaleX"||g==="scaleY")&&d.now[g]===1)||(g!=="scaleX"&&g!=="scaleY"&&d.now[g]===0)){return true;
}m=m.x(c[g](d.now[g]));});var e;o.each(f.values,function(g){switch(g){case 0:e=parseFloat(m.e(1,1).toFixed(6));
break;case 1:e=parseFloat(m.e(2,1).toFixed(6));break;case 2:e=parseFloat(m.e(1,2).toFixed(6));
break;case 3:e=parseFloat(m.e(2,2).toFixed(6));break;case 4:e=parseFloat(m.e(1,3).toFixed(6));
break;case 5:e=parseFloat(m.e(2,3).toFixed(6));break;}f.values[g].now=e;
});};});o.each(o.transform.funcs,function(b,a){o.fx.step[a]=function(d){var e=d.elem.transform||new o.transform(d.elem),c={};
if(o.cssMultipleValues[a]||(!o.cssNumber[a]&&o.inArray(a,o.transform.funcs)!==-1)){(o.fx.multipleValueStep[d.prop]||o.fx.multipleValueStep._default)(d);
c[d.prop]=[];o.each(d.values,function(g,f){c[d.prop].push(f.now+(o.cssNumber[d.prop]?"":f.unit));
});}else{c[d.prop]=d.now+(o.cssNumber[d.prop]?"":d.unit);}e.exec(c,{preserve:true});
};});o.each(["matrix","reflect","reflectX","reflectXY","reflectY"],function(b,a){o.fx.step[a]=function(e){var f=e.elem.transform||new o.transform(e.elem),g={};
if(!e.initialized){e.initialized=true;if(a!=="matrix"){var h=o.matrix[a]().elements;
var d;o.each(e.values,function(u){switch(u){case 0:d=h[0];break;case 1:d=h[2];
break;case 2:d=h[1];break;case 3:d=h[3];break;default:d=0;}e.values[u].end=d;
});}e.decomposed={};var c=e.values;e.decomposed.start=o.matrix.matrix(c[0].start,c[1].start,c[2].start,c[3].start,c[4].start,c[5].start).decompose();
e.decomposed.end=o.matrix.matrix(c[0].end,c[1].end,c[2].end,c[3].end,c[4].end,c[5].end).decompose();
}(o.fx.multipleValueStep[e.prop]||o.fx.multipleValueStep._default)(e);g.matrix=[];
o.each(e.values,function(v,u){g.matrix.push(u.now);});f.exec(g,{preserve:true});
};});})(jQuery,this,this.document);(function(r,q,n,v){var u=180/Math.PI;
var l=200/Math.PI;var s=Math.PI/180;var t=2/1.8;var o=0.9;var x=Math.PI/200;
var w=/^([+\-]=)?([\d+.\-]+)(.*)$/;r.extend({angle:{runit:/(deg|g?rad)/,radianToDegree:function(a){return a*u;
},radianToGrad:function(a){return a*l;},degreeToRadian:function(a){return a*s;
},degreeToGrad:function(a){return a*t;},gradToDegree:function(a){return a*o;
},gradToRadian:function(a){return a*x;},toDegree:function(b){var a=w.exec(b);
if(a){b=parseFloat(a[2]);switch(a[3]||"deg"){case"grad":b=r.angle.gradToDegree(b);
break;case"rad":b=r.angle.radianToDegree(b);break;}return b;}return 0;}}});
})(jQuery,this,this.document);(function(l,n,h,k){if(typeof(l.matrix)=="undefined"){l.extend({matrix:{}});
}var o=l.matrix;l.extend(o,{V2:function(b,a){if(l.isArray(arguments[0])){this.elements=arguments[0].slice(0,2);
}else{this.elements=[b,a];}this.length=2;},V3:function(c,a,b){if(l.isArray(arguments[0])){this.elements=arguments[0].slice(0,3);
}else{this.elements=[c,a,b];}this.length=3;},M2x2:function(c,d,a,b){if(l.isArray(arguments[0])){this.elements=arguments[0].slice(0,4);
}else{this.elements=Array.prototype.slice.call(arguments).slice(0,4);}this.rows=2;
this.cols=2;},M3x3:function(d,e,f,g,r,s,a,b,c){if(l.isArray(arguments[0])){this.elements=arguments[0].slice(0,9);
}else{this.elements=Array.prototype.slice.call(arguments).slice(0,9);}this.rows=3;
this.cols=3;}});var q={e:function(a,d){var c=this.rows,b=this.cols;if(a>c||d>c||a<1||d<1){return 0;
}return this.elements[(a-1)*b+d-1];},decompose:function(){var y=this.e(1,1),A=this.e(2,1),a=this.e(1,2),b=this.e(2,2),c=this.e(1,3),d=this.e(2,3);
if(Math.abs(y*b-A*a)<0.01){return{rotate:0+"deg",skewX:0+"deg",scaleX:1,scaleY:1,translateX:0+"px",translateY:0+"px"};
}var e=c,f=d;var z=Math.sqrt(y*y+A*A);y=y/z;A=A/z;var g=y*a+A*b;a-=y*g;
b-=A*g;var B=Math.sqrt(a*a+b*b);a=a/B;b=b/B;g=g/B;if((y*b-A*a)<0){y=-y;
A=-A;z=-z;}var x=l.angle.radianToDegree;var r=x(Math.atan2(A,y));g=x(Math.atan(g));
return{rotate:r+"deg",skewX:g+"deg",scaleX:z,scaleY:B,translateX:e+"px",translateY:f+"px"};
}};l.extend(o.M2x2.prototype,q,{toM3x3:function(){var a=this.elements;return new o.M3x3(a[0],a[1],0,a[2],a[3],0,0,0,1);
},x:function(b){var a=typeof(b.rows)==="undefined";if(!a&&b.rows==3){return this.toM3x3().x(b);
}var c=this.elements,d=b.elements;if(a&&d.length==2){return new o.V2(c[0]*d[0]+c[1]*d[1],c[2]*d[0]+c[3]*d[1]);
}else{if(d.length==c.length){return new o.M2x2(c[0]*d[0]+c[1]*d[2],c[0]*d[1]+c[1]*d[3],c[2]*d[0]+c[3]*d[2],c[2]*d[1]+c[3]*d[3]);
}}return false;},inverse:function(){var a=1/this.determinant(),b=this.elements;
return new o.M2x2(a*b[3],a*-b[1],a*-b[2],a*b[0]);},determinant:function(){var a=this.elements;
return a[0]*a[3]-a[1]*a[2];}});l.extend(o.M3x3.prototype,q,{x:function(b){var a=typeof(b.rows)==="undefined";
if(!a&&b.rows<3){b=b.toM3x3();}var c=this.elements,d=b.elements;if(a&&d.length==3){return new o.V3(c[0]*d[0]+c[1]*d[1]+c[2]*d[2],c[3]*d[0]+c[4]*d[1]+c[5]*d[2],c[6]*d[0]+c[7]*d[1]+c[8]*d[2]);
}else{if(d.length==c.length){return new o.M3x3(c[0]*d[0]+c[1]*d[3]+c[2]*d[6],c[0]*d[1]+c[1]*d[4]+c[2]*d[7],c[0]*d[2]+c[1]*d[5]+c[2]*d[8],c[3]*d[0]+c[4]*d[3]+c[5]*d[6],c[3]*d[1]+c[4]*d[4]+c[5]*d[7],c[3]*d[2]+c[4]*d[5]+c[5]*d[8],c[6]*d[0]+c[7]*d[3]+c[8]*d[6],c[6]*d[1]+c[7]*d[4]+c[8]*d[7],c[6]*d[2]+c[7]*d[5]+c[8]*d[8]);
}}return false;},inverse:function(){var a=1/this.determinant(),b=this.elements;
return new o.M3x3(a*(b[8]*b[4]-b[7]*b[5]),a*(-(b[8]*b[1]-b[7]*b[2])),a*(b[5]*b[1]-b[4]*b[2]),a*(-(b[8]*b[3]-b[6]*b[5])),a*(b[8]*b[0]-b[6]*b[2]),a*(-(b[5]*b[0]-b[3]*b[2])),a*(b[7]*b[3]-b[6]*b[4]),a*(-(b[7]*b[0]-b[6]*b[1])),a*(b[4]*b[0]-b[3]*b[1]));
},determinant:function(){var a=this.elements;return a[0]*(a[8]*a[4]-a[7]*a[5])-a[3]*(a[8]*a[1]-a[7]*a[2])+a[6]*(a[5]*a[1]-a[4]*a[2]);
}});var j={e:function(a){return this.elements[a-1];}};l.extend(o.V2.prototype,j);
l.extend(o.V3.prototype,j);})(jQuery,this,this.document);(function(h,e,f,g){if(typeof(h.matrix)=="undefined"){h.extend({matrix:{}});
}h.extend(h.matrix,{calc:function(c,b,a){this.matrix=c;this.outerHeight=b;
this.outerWidth=a;}});h.matrix.calc.prototype={coord:function(j,a,b){b=typeof(b)!=="undefined"?b:0;
var c=this.matrix,d;switch(c.rows){case 2:d=c.x(new h.matrix.V2(j,a));break;
case 3:d=c.x(new h.matrix.V3(j,a,b));break;}return d;},corners:function(d,a){var c=!(typeof(d)!=="undefined"||typeof(a)!=="undefined"),b;
if(!this.c||!c){a=a||this.outerHeight;d=d||this.outerWidth;b={tl:this.coord(0,0),bl:this.coord(0,a),tr:this.coord(d,0),br:this.coord(d,a)};
}else{b=this.c;}if(c){this.c=b;}return b;},sides:function(b){var a=b||this.corners();
return{top:Math.min(a.tl.e(2),a.tr.e(2),a.br.e(2),a.bl.e(2)),bottom:Math.max(a.tl.e(2),a.tr.e(2),a.br.e(2),a.bl.e(2)),left:Math.min(a.tl.e(1),a.tr.e(1),a.br.e(1),a.bl.e(1)),right:Math.max(a.tl.e(1),a.tr.e(1),a.br.e(1),a.bl.e(1))};
},offset:function(b){var a=this.sides(b);return{height:Math.abs(a.bottom-a.top),width:Math.abs(a.right-a.left)};
},area:function(d){var a=d||this.corners();var b={x:a.tr.e(1)-a.tl.e(1)+a.br.e(1)-a.bl.e(1),y:a.tr.e(2)-a.tl.e(2)+a.br.e(2)-a.bl.e(2)},c={x:a.bl.e(1)-a.tl.e(1)+a.br.e(1)-a.tr.e(1),y:a.bl.e(2)-a.tl.e(2)+a.br.e(2)-a.tr.e(2)};
return 0.25*Math.abs(b.e(1)*c.e(2)-b.e(2)*c.e(1));},nonAffinity:function(){var b=this.sides(),a=b.top-b.bottom,c=b.left-b.right;
return parseFloat(parseFloat(Math.abs((Math.pow(a,2)+Math.pow(c,2))/(b.top*b.bottom+b.left*b.right))).toFixed(8));
},originOffset:function(a,b){a=a?a:new h.matrix.V2(this.outerWidth*0.5,this.outerHeight*0.5);
b=b?b:new h.matrix.V2(0,0);var d=this.coord(a.e(1),a.e(2));var c=this.coord(b.e(1),b.e(2));
return{top:(c.e(2)-b.e(2))-(d.e(2)-a.e(2)),left:(c.e(1)-b.e(1))-(d.e(1)-a.e(1))};
}};})(jQuery,this,this.document);(function(n,o,j,l){if(typeof(n.matrix)=="undefined"){n.extend({matrix:{}});
}var q=n.matrix,k=q.M2x2,h=q.M3x3;n.extend(q,{identity:function(b){b=b||2;
var a=b*b,e=new Array(a),c=b+1;for(var d=0;d<a;d++){e[d]=(d%c)===0?1:0;
}return new q["M"+b+"x"+b](e);},matrix:function(){var a=Array.prototype.slice.call(arguments);
switch(arguments.length){case 4:return new k(a[0],a[2],a[1],a[3]);case 6:return new h(a[0],a[2],a[4],a[1],a[3],a[5],0,0,1);
}},reflect:function(){return new k(-1,0,0,-1);},reflectX:function(){return new k(1,0,0,-1);
},reflectXY:function(){return new k(0,1,1,0);},reflectY:function(){return new k(-1,0,0,1);
},rotate:function(a){var d=n.angle.degreeToRadian(a),b=Math.cos(d),r=Math.sin(d);
var c=b,e=r,f=-r,g=b;return new k(c,f,e,g);},scale:function(a,b){a=a||a===0?a:1;
b=b||b===0?b:a;return new k(a,0,0,b);},scaleX:function(a){return q.scale(a,1);
},scaleY:function(a){return q.scale(1,a);},skew:function(b,d){b=b||0;d=d||0;
var a=n.angle.degreeToRadian(b),c=n.angle.degreeToRadian(d),e=Math.tan(a),f=Math.tan(c);
return new k(1,e,f,1);},skewX:function(a){return q.skew(a);},skewY:function(a){return q.skew(0,a);
},translate:function(a,b){a=a||0;b=b||0;return new h(1,0,a,0,1,b,0,0,1);
},translateX:function(a){return q.translate(a);},translateY:function(a){return q.translate(0,a);
}});})(jQuery,this,this.document);
/*!



 resources js mno utils scroll.js



*/
mno.core.register({id:"utils.scroll",forceStart:true,creator:function(j){var b=$(document),a=$("#header"),e,d,h,g,f=null;
function k(){var o=b.scrollLeft(),n=b.scrollTop(),l="scrollstop";if(n!==g||o!==h){l="scrollmove";
setTimeout(k,150);}else{c();}j.notify({type:l,data:{x:o,y:n}});g=n,h=o;
}function c(){b.bind("scroll.mno",function(l){j.notify({type:"scrollstart",data:{x:h,y:g}});
b.unbind("scroll.mno");setTimeout(k,150);});}return{init:function(){var l;
h=b.scrollLeft();g=b.scrollTop();c();},destroy:function(){b=null;a=null;
e=null;d=null;}};}});
/*!



 resources js mno ads adtech.js



*/
var AdElement={get:function(){var a=arguments;
a=a.length===1&&Object.prototype.toString.call(a[0])==="[object Array]"?a[0]:a;
if(a.length>1){var c=[];for(var b=0;b<a.length;b++){c.push(AdElement.get(a[b]));
}return c;}var e=false;try{e=a[0].frame?true:false;}catch(d){}return AdElement.extendEl(typeof a[0]==="string"?document.getElementById(a[0]):e?window[a[0].frame].document!==null?window[a[0].frame].document.getElementById(a[0].container):document.getElementById(a[0].frame).contentWindow.document.getElementById(a[0].container):a[0]);
},extendEl:function(a){if(a!==null){if(a.hasClassName!=null){return a;}for(var b in AdElement){if(AdElement.hasOwnProperty(b)){if(b==="get"||b==="extendEl"){continue;
}(function(){var c=b;a[c]=function(){var d=[this];for(var e=0;e<arguments.length;
e++){d.push(arguments[e]);}return AdElement[c].apply(a,d);};})();}}}return a;
},hasClassName:function(a,b){return new RegExp("\\b"+b+"\\b").test(a.className);
},addClassName:function(a,b){if(!AdElement.hasClassName(a,b)){a.className=(a.className+" "+b).trim();
}},removeClassName:function(a,b){var c=new RegExp("\\b"+b+"\\b");a.className=a.className.replace(c,"").replace(/\s+/," ");
},setText:function(b,a){b.appendChild(document.createTextNode(a));},setStyle:function(a,b){var c;
for(c in b){if(b.hasOwnProperty(c)){a.style[c]=b[c];}}},prepend:function(a,b){a.insertBefore(b,a.childNodes[0]);
},append:function(a,b){a.appendChild(b);},insertBf:function(a,b){a.parentNode.insertBefore(b,a);
},insertAft:function(a,b){a.parentNode.insertBefore(b,a.nextSibling());
}};if(!document.all){AdElement.extendEl(HTMLElement.prototype);}var adtech=function(){var scripts=[],docWrites=[],third_party=[],third_party_buffer=[],src_buffer=[],isJsonAd=false,env,head,pending={},queue={js:[]},loadtype="injection",companionAliases={},scriptitr=0,timeout=3000,globalGrp=0,originalDocumentWrite=document.write,originalDocumentWriteln=document.writeln,useInnerHTML=true,intFIF="/template/common/mnoAd/fif.html",config={version:"9",wmode:"opaque"},templates={imgWLink:'<a href="${flashvars.clickTAG}" target="${attr.target}" style="border: 0;"><img src="${attr.img}" alt="" width="${attr.imgW}" height="${attr.imgH}" style="border: 0;" /></a>',img:'<img src="${attr.img}" alt="" width="${attr.imgW}" height="${attr.imgH}" style="border: 0;" />',iframe:'<iframe width="100%" height="100%" frameBorder="0" marginHeight="0" marginWidth="0" id="${id}" name="${id}" src="${src}" seamless></iframe>',ie7iframe:'<iframe width="100%" height="100%" frameBorder="0" marginHeight="0" marginWidth="0" id="${id}" name="${id}" src="${src}" scrolling="no"></iframe>'};
var domWrite=function(str){return false;};function capture(){var dom=document;
if(dom.write===originalDocumentWrite){dom.write=domWrite;}if(dom.writeln===originalDocumentWriteln){dom.writeln=domWrite;
}}function restore(){document.write=originalDocumentWrite;document.writeln=originalDocumentWriteln;
}var trim=function(){return this.replace(/^\s+|\s+$/g,"");};function Create(type,prop){var tmp=document.createElement(type),i;
for(i in prop){if(prop.hasOwnProperty(i)){tmp.setAttribute(i,prop[i]);}}return tmp;
}function getSwf(id){if(window.document[id]){return window.document[id];
}else{if(document.embeds&&document.embeds[id]){return document.embeds[movieName];
}else{return document.getElementById(id);}}}var makeParamStr=function(vars){var tmp="",flashvar;
for(flashvar in vars){if(vars.hasOwnProperty(flashvar)){tmp+=flashvar+"="+escape(vars[flashvar])+"&";
}}return tmp;};var extend=function(p,c){c=c||{};var i;for(i in p){if(p.hasOwnProperty(i)){if(typeof p[i]==="object"){c[i]=(p[i].constructor===Array)?[]:{};
extend(p[i],c[i]);}else{c[i]=p[i];}}}return c;};var template=function(o,str){var reg=/(\$\{)(.*?)(\})/g,temp=o;
str=str.replace(reg,function(a,b,c){var obj={};try{obj=eval("temp."+c);
}catch(err){return"";}return obj===undefined||null?"":obj;});return str;
};function getEnv(){if(env){return;}var ua=navigator.userAgent;env={async:document.createElement("script").async===true};
(env.webkit=/AppleWebKit\//.test(ua))||(env.ie=/MSIE/.test(ua))||(env.opera=/Opera/.test(ua))||(env.gecko=/Gecko\//.test(ua))||(env.unknown=true);
}function finish(type){var p=pending[type],callback,urls;if(p){callback=p.callback;
urls=p.urls;urls.shift();if(!urls.length){if(callback){callback.call(p.context,p.obj);
}pending[type]=null;if(queue[type].length){loadScript(type);}}}}function loadScript(type,urls,callback,obj,context){var _finish=function(){finish(type);
},i,len,node,p,pendingUrls,url;getEnv();if(urls){urls=typeof urls==="string"?[urls]:urls.concat();
if(env.async||env.gecko||env.opera){queue[type].push({urls:urls,callback:callback,obj:obj,context:context});
}else{for(i=0,len=urls.length;i<len;++i){queue[type].push({urls:[urls[i]],callback:i===len-1?callback:null,obj:obj,context:context});
}}}if(pending[type]||!(p=pending[type]=queue[type].shift())){return;}head||(head=document.head||document.getElementsByTagName("head")[0]);
pendingUrls=p.urls;var id="adscript"+(++scriptitr);for(i=0,len=pendingUrls.length;
i<len;++i){url=pendingUrls[i];node=Create("script",{type:"text/javascript",charset:"utf-8",id:id,src:url});
node.async=false;if(env.ie){node.onreadystatechange=function(){var readyState=this.readyState;
if(readyState==="loaded"||readyState==="complete"){this.onreadystatechange=null;
_finish();}};}else{node.onload=node.onerror=_finish;}head.appendChild(node);
}function checkAd(id,head,node){return(function(){if(!document.getElementById(id)){finish("js");
}else{head.removeChild(node);}});}var ad=checkAd(id,head,node);setTimeout(ad,timeout);
}function loadAssets(options,frame){var el=frame?{frame:frame,container:options.container}:options.container;
extend(config,options.config);var hasFlash=false,that=this,container=AdElement.get(el),contHeight=options.config&&options.config.height?options.config.height:options.attr.imgH,contWidth=options.config&&options.config.width?options.config.width:options.attr.imgW;
if(options.config){hasFlash=that.swfobject.hasFlashPlayerVersion(options.config.version);
}var flash=function(){that.swfobject.createSWF({data:options.config.src,width:options.config.width,height:options.config.height},{wmode:options.config.wmode,allowscriptaccess:"always",flashvars:makeParamStr(options.flashvars)},options.container);
};var image=function(){if(options.flashvars.clickTAG){container.innerHTML=template(options,templates.imgWLink);
}else{container.innerHTML=template(options,templates.img);}};if(hasFlash&&options.config.src){flash();
}else{if(options.attr.img){image();}else{}}if(options.attr.pxC){var counter=Create("image",{width:1,height:1,src:options.attr.pxC});
AdElement.get(el).parentNode.appendChild(counter);}if(frame){var fif=AdElement.get(frame);
fif.setAttribute("height",contHeight);fif.setAttribute("width",contWidth);
fif.parentNode.setStyle({height:contHeight+"px",width:contWidth+"px"});
}else{var swfCont=getSwf(options.container).parentNode;swfCont.style.height=contHeight+"px";
swfCont.style.width=contWidth+"px";}isJsonAd=true;}function setIframeHeight(pos){var reg=/ad(W|H)\d+(px)?/g,w="0px",h="0px",cont=AdElement.get(pos),el=cont.parentNode;
el.className.replace(reg,function(a){if(a.indexOf("adW")!=-1){w=a.substr(3);
}if(a.indexOf("adH")!=-1){h=a.substr(3);}});h+=h.indexOf("px")==-1&&h.indexOf("%")==-1?"px":"";
w+=w.indexOf("px")==-1&&h.indexOf("%")==-1?"px":"";cont.style.height=h;
cont.style.width=w;isJsonAd=false;restore();}function loadAd(pos,alias,src,group){var el=AdElement.get(pos);
if(group&&globalGrp==0){globalGrp=group;}group=group||globalGrp;if(el!==null){if(src===null||loadtype==="fif"){createIframe(pos,{a:alias,g:group},"fif"+pos);
setIframeHeight(pos);}else{if(loadtype==="injection"){capture();loadScript("js",src,function(){if(scripts.length===0){if(third_party_buffer.length!==0){third_party[0]=pos;
}else{docWrites[0]=pos;}}initAd(pos,alias,group);});}else{if(loadtype==="ajax"){}else{document.write('<script type="text/javascript" src="'+src+'"><\/script>');
}}}}else{log("Error, container div#"+pos+" does not exist for page "+document.location.href+".");
}}function loadFIF(pos,alias,group){loadAd(pos,alias,null,group);}function pushAd(data){if(typeof plugins[data.t]==="undefined"){return;
}if(typeof data.o!=="undefined"){var isDocWritten=document.getElementsByTagName("script")[document.getElementsByTagName("script").length-1].id.indexOf("load")===-1;
var containerId=document.getElementsByTagName("div")[document.getElementsByTagName("div").length-1].id;
if(isDocWritten&&containerId!==""){data.o.container=containerId;plugins[data.t](data.o);
}else{scripts.push(data);}}else{third_party_buffer.push(data);}}function createIframe(pos,src,id){var frame,el=AdElement.get(pos),id=id||"",tmpl_obj={id:id,src:intFIF},isIE7=navigator.appVersion.indexOf("MSIE 7.")!==-1;
src_buffer[pos]=src;if(!isIE7){if(useInnerHTML){document.getElementById(pos).innerHTML=template(tmpl_obj,templates.iframe);
}else{frame=Create("iframe",{width:"100%",height:"100%",frameBorder:0,marginHeight:0,marginWidth:0,name:id,id:id,seamless:"seamless",src:intFIF});
el.append(frame);}}else{document.getElementById(pos).innerHTML=template(tmpl_obj,templates.ie7iframe);
}}function initAd(pos,alias,group){if(loadtype==="injection"&&AdElement.get("fif"+pos)!==null){return;
}var ad,options={container:pos},docWriteAd=false;if(group&&globalGrp==0){globalGrp=group;
}group=group||globalGrp;if(docWrites.length!==0){isJsonAd=false;createIframe(docWrites.shift(),{a:alias,g:group},"fif"+pos);
docWriteAd=true;setIframeHeight(pos);}else{if(scripts.length!==0){ad=scripts.shift();
isJsonAd=true;}else{isJsonAd=false;createIframe(third_party.shift(),{g:group},"fif"+pos);
setIframeHeight(pos);}}if(!ad||docWriteAd){restore();return;}extend(options,ad.o);
if(ad.o){plugins[ad.t](ad.o);delete scripts[pos];log('Successfully loaded script for "'+pos+'" . Calling callback function');
}else{log("Ad template error, could not load ad "+pos);}}function log(msg){}var plugins={standard:function(options,context,frame){context=context||window;
loadAssets.call(context,options,frame);}};function _getPlugin(plugin,options,context,frame){return plugins[plugin](options,context,frame);
}function _testAd(container,type){extend({container:container},type.o);
return plugins[type.t](type.o);}function _setPlugin(name,func){return plugins[name]=func;
}function _setCompanion(type,alias,src){return companionAliases[type]={alias:alias,src:src};
}function _getCompanion(type){return companionAliases[type];}function _getThirdPartyBuffer(){return third_party_buffer;
}function _getSrcBuffer(pos){var adObj=src_buffer[pos];delete src_buffer[pos];
return adObj;}return{getPlugin:_getPlugin,setPlugin:_setPlugin,setCompanion:_setCompanion,getCompanion:_getCompanion,getThirdPartyBuffer:_getThirdPartyBuffer,getSrcBuffer:_getSrcBuffer,testAd:_testAd,loadAd:loadAd,loadFIF:loadFIF,loadAssets:loadAssets,capture:capture,restore:restore,initAd:initAd,pushAd:pushAd,Create:Create,log:log};
}();
/*!



 resources js mno ads plugins.js



*/
adtech.setPlugin("lad",function(b,d,f){if(typeof b!=="object"){return;
}adtech.getPlugin("standard",b,d,f);var g="adLeft",e="l_stolpe",c=adtech.getCompanion("l_stolpe").alias;
if(f==="fifl_stolpe"||f==="fifl_expanded"){return;}AdElement.get(f).parentNode.style.marginLeft="-20px";
var a=adtech.Create("div",{id:e,className:"ohidden"});AdElement.get(g).append(a);
adtech.loadFIF(e,c);if($(window).width()<=1220){$("#viewport").css("width","980px");
}else{$("#viewport").css("width","1000px");}});adtech.setPlugin("hestesko",function(a){$("#topAd").css("left","-20px");
var b=adtech.getCompanion("Hestesko_topp");adtech.getPlugin("standard",a,window);
adtech.loadAd("Hestesko_topp",b.alias,b.src);});adtech.setPlugin("ticker",function(b,c,f){var a=AdElement.get(f).parentNode;
var d=a.parentNode;d.style.position="fixed";var e=b.config?a.style.height.split("px")[0]-b.config.height:b.attr.imgH?a.style.height.split("px")[0]-b.attr.imgH:0;
a.style.marginTop=(e-14)+"px";adtech.getPlugin("standard",b,c,f);a.style.height="auto";
d.style.height="44px";if($("#fifticker").position().top<10){d.style.height="30px";
}});adtech.setPlugin("stickyTB",function(k,b,c){var a=c?$("#"+c).parent():$("#"+k.container).parent();
var g=a.offset().top;a.css({"z-index":999});var j=$("#smallHeader");var e=$("#topAd");
var d=0,f=false;var h=$("<div>Lukk annonse</div>").css({position:"fixed",top:"130px",display:"none",zIndex:999,marginLeft:"880px",cursor:"pointer"}).on("click",function(){e.removeClass("tbSticky");
a.css("position","static");h.hide();f=true;}).appendTo(e);if(window.XMLHttpRequest){$(window).scroll(function(){if(f===true){return;
}if(!e.hasClass("tbSticky")){e.addClass("tbSticky");}j=j.length===1?j:$("#smallHeader");
var n=$("#netboard1").offset()?$("#netboard1").offset().top:$(document).height();
var l=$("#netboard1").height()||0;d=d!==0?d:j.outerHeight();var o=$(window).scrollTop();
if(o>=n){a.css({position:"absolute",top:n-l});h.css({position:"absolute",top:n-l});
}else{if(o<=n&&o>=g){h.show();a.css({position:"fixed",top:0});h.css({position:"fixed",top:0});
if(j.is(":hidden")||o<100){a.css({top:0});h.css({top:0});}else{if(d==null){d=j.outerHeight();
}a.css({position:"fixed",top:d+"px"});h.css({position:"fixed",top:d+"px"});
}}else{h.hide();a.css({position:""});}}});}adtech.getPlugin("standard",k,b,c);
});adtech.setPlugin("sticky",function(j,b,d){var a=$("#adRight .ad:last-child"),g=null,h=$("#smallHeader"),e=0,f=$(document).height(),c=$("#adRight .ad:last-child").height();
a.css({"z-index":1000});if(window.XMLHttpRequest){$(window).scroll(function(){h=h.length===1?h:$("#smallHeader");
a=a.length>0?a:$("#adRight .ad:last-child");e=e!==0?e:h.outerHeight();g=g===null?a.offset().top:g;
if($(window).scrollTop()>=f){a.css({position:"absolute",top:f-c});}else{if($(window).scrollTop()>=g-e){if(h.is(":hidden")){a.css({position:"fixed",top:e-e});
}else{a.css({position:"fixed",top:e+"px"});}}else{a.css({position:"",top:0});
}}});}adtech.getPlugin("standard",j,b,d);});adtech.setPlugin("stickyFVN",function(j,b,d){var a=$("#adRight .ad:last-child"),g=null,h=$(".stickyBar"),e=0,f=$(document).height(),c=$("#adRight .ad:last-child").height();
a.css({"z-index":1000});if(window.XMLHttpRequest){$(window).scroll(function(){h=h.length===1?h:$(".stickyBar");
a=a.length>0?a:$("#adRight .ad:last-child");e=e!==0?e:h.outerHeight();g=g===null?a.offset().top:g;
if($(window).scrollTop()>=f){a.css({position:"absolute",top:f-c});}else{if($(window).scrollTop()>=g-e){if(h.is(":hidden")){a.css({position:"fixed",top:e-e});
}else{a.css({position:"fixed",top:e+"px"});}}else{a.css({position:"",top:0});
}}});}adtech.getPlugin("standard",j,b,d);});adtech.setPlugin("stealLevel",function(b,c,d){var a=d?"#"+d:"#"+b.container;
adtech.getPlugin("standard",b,c,d);$(document).ready(function(){var e=$(a).parents(".ad").parent().hasClass("gridUnit")?$(a).parents(".ad").parent():$(a).parents(".ad");
e.siblings().not(".clear, .clearer").remove();});});adtech.setPlugin("lightbox",function(b,d,h){var g="/skins/global/widgets/mnoAd/colorboxWhite.css",c="/resources/js/mno/ads/colorbox.js",f=b.attr.tout!==0?(b.attr.tout*1000)+2000:null,a=h?null:$("#"+b.container).parent(),e=b.attr.img!==""&&b.attr.target==="_self";
if(a===null){alert("Please contact the developer if you see this alert. The interstitial and popback ad spesials only work with javascript-tags, not iframes. ");
}if($("#colorbox").length>0){return false;}a.hide();adtech.getPlugin("standard",b,d,h);
$.getScript(c,function(){$.colorbox({inline:true,href:a,fixed:true,close:"Lukk annonsen",scrolling:false,innerWidth:b.config?b.config.width:b.attr.imgW+"px",innerHeight:b.config?b.config.height:b.attr.imgH+"px",onComplete:function(){a.show();
var k=$("<link>");k.attr({type:"text/css",rel:"stylesheet",href:g});$("head").append(k);
$("#cboxClose").css("position","absolute");$("#cboxClose").css("bottom","0");
$("#cboxClose").css("right","0");$("#cboxClose").css("display","block");
$("#cboxClose").css("color","#444");$("#cboxClose").css("cursor","pointer");
if(f!==null){ad_lightbox_timeout=window.setTimeout(function(){$.colorbox.close();
},f);}},onCleanup:function(){a.hide();}});if(e){var j=a.find("a");j.click(function(){if(ad_lightbox_timeout){window.clearTimeout(ad_lightbox_timeout);
}var k=$("<iframe />").attr({width:"100%",height:"100%",frameBorder:0,marginHeight:0,marginWidth:0,seamless:"seamless",src:b.flashvars.clickTAG||b.flashvars.clickTAG1});
j.replaceWith(k);return false;});}});});adtech.setPlugin("wallpaper",function(j,c,e){$(document).ready(function(){$("#adRight").css({position:"fixed",display:"none",zIndex:999});
});$("#topAd").css("left","-10px");var h="wallpaper",g=adtech.getCompanion("wallpaper"),b=j.flashvars.clickTAG||j.flashvars.clickTAG1,d=j.attr.imgW||j.config.width;
if($("#wallpaper").length===0){$(window).scroll(function(){($("#footer").css({position:"relative"}));
});$('<div id="wallpaper_cont"></div>').append('<div><div id="'+h+'"></div></div>').prependTo("body").css({position:"fixed"}).css({top:0});
if(d>1000){j.container="wallpaper";$("#toppbanner iframe").hide().parent().css({height:150,cursor:"pointer"}).css({position:"absolute"}).css({top:0}).show().click(function(k){window.open(b,"wallpaper");
});adtech.getPlugin("standard",j,window);}else{adtech.getPlugin("standard",j,c,e);
adtech.loadAd("wallpaper",g.alias,g.src);}if(j.attr.body_click){var f=$("#wallpaper_cont");
f[0].style.cursor="pointer";f.live("click",function(k){if(this.id===k.target.id){window.open(b,"wallpaper");
}});}if(j.attr.hex){$("body")[0].style.backgroundColor=j.attr.hex;}}else{adtech.getPlugin("standard",j,c,e);
}var a=$("#wallpaper").parent()[0];});adtech.setPlugin("overlay",function(options,context,frame){var countLayerOpen=function(){counter=new Image;
counter.src="_ADCLICK_";kroma_overlay_show_hide();};function VBGetSwfVer__ADFC_CUID_(i){var sVersion__ADFC_CUID_='on error resume next\r\nDim swControl_, swVersion_\r\nswVersion_ = 0\r\nset swControl_ = CreateObject("ShockwaveFlash.ShockwaveFlash." + CStr('+i+'))\r\nif (IsObject(swControl_)) then\r\nswVersion_ = swControl_.GetVariable("$version")\r\nend if';
window.execScript(sVersion__ADFC_CUID_,"VBScript");return swVersion_;}var AT_MULTICLICK=new Array;
var AT_MULTICOUNT=new Array;var AT_CLICKVAR=new Array;var AT_CLICK="javascript:countLayerOpen();";
var AT_IMGCLICK="";var AT_TARGET="_blank";var AT_MICROSITE="";AT_MULTICLICK[1]="";
AT_MULTICLICK[2]="";AT_MULTICLICK[3]="";AT_MULTICLICK[4]="";AT_MULTICLICK[5]="";
AT_MULTICLICK[6]="";AT_MULTICLICK[7]="";AT_MULTICLICK[8]="";AT_MULTICLICK[9]="";
AT_CLICKVAR[0]="clickTAG";AT_CLICKVAR[1]="clickTAG1";AT_CLICKVAR[2]="clickTAG2";
AT_CLICKVAR[3]="clickTAG3";AT_CLICKVAR[4]="clickTAG4";AT_CLICKVAR[5]="clickTAG5";
AT_CLICKVAR[6]="clickTAG6";AT_CLICKVAR[7]="clickTAG7";AT_CLICKVAR[8]="clickTAG8";
AT_CLICKVAR[9]="clickTAG9";AT_MULTICOUNT[1]="";var AT_WIDTH_HEIGHT="width=240 height=600";
var AT_FLASH=adtech.getPlugin("standard",options,context,frame);var AT_TRANSPARENT=false;
var AT_FLASHVERSION=7;var AT_FLASH_BGCOLOR="";var AT_FlaQual="autohigh";
var AT_FlashClick=false;var AT_LAYERMANUALRESIZE=false;var AT_BASE="_ADPATH_";
var AT_IMAGE=adtech.getPlugin("standard",options,context,frame);var AT_TEXT="";
var AT_ALTIMAGEWIDTH="240";var AT_ALTIMAGEHEIGHT="600";var AT_ZINDEX="0";
var AT_WMODE="opaque";var AT_EXPANDABLE="false";var AT_FAKEPOPUP=false;
var AT_FAKEPOPUP_left=100;var AT_FAKEPOPUP_top=100;var AT_FAKEPOPUP_autoclose="";
var AT_FAKEPOPUP_start_opened=true;var AT_CURRENTDOMAIN=window.location.host;
var AT_VARSTRING;var AT_MULTICLICK_ADFC_CUID_=AT_MULTICLICK;var AT_CLICK_ADFC_CUID_=AT_CLICK;
var AT_TARGET_ADFC_CUID_=AT_TARGET;var AT_IMGCLICK_ADFC_CUID_=AT_IMGCLICK;
AT_CLICKVAR[0]=AT_CLICKVAR[0]?AT_CLICKVAR[0]:"clickTAG";var AT_MULTICLICKSTR="?"+AT_CLICKVAR[0]+"="+escape("_ADCLICK_")+escape(AT_CLICK);
var AT_FLASHVARSSTR="";if(AT_MICROSITE==""){AT_FLASHVARSSTR=AT_CLICKVAR[0]+"="+escape("_ADCLICK_")+escape(AT_CLICK);
}function JSGetSwfVer_ADFC_CUID_(){if(navigator.plugins!=null&&navigator.plugins.length>0){if(navigator.plugins["Shockwave Flash 2.0"]||navigator.plugins["Shockwave Flash"]){var swVer2=navigator.plugins["Shockwave Flash 2.0"]?" 2.0":"";
var flashDescription=navigator.plugins["Shockwave Flash"+swVer2].description;
flashVer=flashDescription.split(" ")[2].split(".")[0];}else{flashVer=-1;
}}else{if(navigator.userAgent.toLowerCase().indexOf("webtv/2.6")!=-1){flashVer=4;
}else{if(navigator.userAgent.toLowerCase().indexOf("webtv/2.5")!=-1){flashVer=3;
}else{if(navigator.userAgent.toLowerCase().indexOf("webtv")!=-1){flashVer=2;
}else{flashVer=-1;}}}}return flashVer;}var AT_DETECT_FLASHVERSION=0;if(AT_FLASH){if(AT_FlashClick){FlashClick=AT_ClickFn_ADFC_CUID_;
}var ShockMode=0;var versionStr=0;if(navigator.appVersion.indexOf("MSIE")!=-1&&navigator.appVersion.toLowerCase().indexOf("win")!=-1&&!(navigator.userAgent.indexOf("Opera")!=-1)){for(i=25;
i>0;i--){versionVB=VBGetSwfVer__ADFC_CUID_(i);if(typeof versionVB!="undefined"){if(versionVB!=0){versionStr=versionVB.split(" ")[1].split(",")[0];
if(versionStr>=AT_FLASHVERSION){i=0;}}}}}else{versionStr=JSGetSwfVer_ADFC_CUID_();
}if(versionStr>=AT_FLASHVERSION){ShockMode=1;}AT_DETECT_FLASHVERSION=versionStr;
}if("_ADFC_CUID_"!="_ADFC_CUID_"){if(AT_FLASH&&(AT_FLASH.search(/\w+\:\/\//)!=0)){AT_FLASH="_ADPATH_"+AT_FLASH;
}if(AT_IMAGE&&(AT_IMAGE.search(/\w+\:\/\//)!=0)){AT_IMAGE="_ADPATH_"+AT_IMAGE;
}}AT_MULTICOUNT[0]="_ADCOUNT_";for(var i_adtech=0;i_adtech<AT_MULTICLICK.length;
i_adtech++){if(AT_MULTICLICK[i_adtech]){if(!AT_CLICKVAR[i_adtech]){AT_CLICKVAR[i_adtech]="clickTAG"+i_adtech;
}if(AT_MULTICLICK[i_adtech].substr(0,11)=="javascript:"){AT_MULTICLICKSTR+="&"+AT_CLICKVAR[i_adtech]+"="+escape(AT_MULTICLICK[i_adtech]);
AT_FLASHVARSSTR+="&"+AT_CLICKVAR[i_adtech]+"="+escape(AT_MULTICLICK[i_adtech]);
}else{AT_MULTICLICKSTR+="&"+AT_CLICKVAR[i_adtech]+"="+escape("_ADCLICK_")+escape(AT_MULTICLICK[i_adtech]);
AT_FLASHVARSSTR+="&"+AT_CLICKVAR[i_adtech]+"="+escape("_ADCLICK_")+escape(AT_MULTICLICK[i_adtech]);
}}}if(AT_FLASHVERSION>5){AT_VARSTRING="?targetTAG="+AT_TARGET_ADFC_CUID_+"&clickTarget="+escape(AT_TARGET_ADFC_CUID_);
AT_VARSTRING+="&pathTAG="+escape(AT_BASE);}else{AT_VARSTRING=AT_MULTICLICKSTR;
AT_VARSTRING+="&targetTAG="+AT_TARGET_ADFC_CUID_+"&clickTarget="+escape(AT_TARGET_ADFC_CUID_);
AT_VARSTRING+="&pathTAG="+escape(AT_BASE);AT_FLASHVARSSTR="";}AT_VARSTRING+="&closeTAG="+escape("javascript:closeAdLayer_ADFC_CUID_()");
AT_VARSTRING+="&openTAG="+escape("javascript:openAdLayer_ADFC_CUID_()");
AT_VARSTRING+="&expandTAG="+escape("javascript:expand_ADFC_CUID_()");AT_VARSTRING+="&collapseTAG="+escape("javascript:collapse_ADFC_CUID_()");
AT_VARSTRING+="&clicktarget=_blank&clickTarget=_blank&clickTARGET=_blank";
var AT_MULTICOUNTARR=new Array;for(var i_adtech=0;i_adtech<AT_MULTICOUNT.length;
i_adtech++){if(AT_MULTICOUNT[i_adtech]){AT_MULTICOUNTARR[i_adtech]=new Image;
AT_MULTICOUNTARR[i_adtech].src=""+AT_MULTICOUNT[i_adtech];}}AT_WIDTH_HEIGHT=(AT_WIDTH_HEIGHT)?(" "+AT_WIDTH_HEIGHT+" "):"_ADFC_WIDTH_HEIGHT_";
if(AT_WIDTH_HEIGHT.length<19&&"_ADFC_CUID_"=="12345"){alert("Error: AT_WIDTH_HEIGHT must be set for\n1x1 Content Units in the Template config!");
}if(!AT_IMGCLICK){AT_IMGCLICK=AT_CLICK;}if(!AT_TEXT){AT_TEXT="_ADFC_ALT_TEXT_";
}if(!AT_BASE){AT_BASE="_ADPATH_";}if(AT_EXPANDABLE&&AT_EXPANDABLE!="false"){AT_FAKEPOPUP=true;
AT_FAKEPOPUP_left=-0;AT_FAKEPOPUP_top=-0;}if(AT_MICROSITE!=""){var AT_MICROSITE_ADFC_CUID_="toolbar=0,location=0,directories=0,status=0,menubar=0,scrollbars=0,resizable=0,"+AT_MICROSITE.replace(/ height=/,",height=");
}if(AT_FlashClick||AT_MICROSITE!=""){AT_COUNT="";if("_ADFC_CUID_"!="_ADFC_CUID_"){AT_COUNT=escape("_ADCLICK_");
}AT_VARSTRING="?clickTAG="+AT_CLICK+"','','"+AT_MICROSITE_ADFC_CUID_+"'))";
AT_TARGET_ADFC_CUID_="_self";}window.AT_ClickFn_ADFC_CUID_=function(click){eval(AT_CLICK);
};if(navigator.userAgent.indexOf("MSIE")>0&&navigator.userAgent.indexOf("Opera")<0){var sv_ADFC_CUID="Sub AT_OBJECT_ADFC_CUID__FSCommand(ByVal command, ByVal args)\r\ncall AT_OBJECT_ADFC_CUID__DoFSCommand(command, args)\r\nend sub";
if(typeof inFIF!="undefined"){parent.window.execScript(sv_ADFC_CUID,"VBScript");
}else{window.execScript(sv_ADFC_CUID,"VBScript");}}var AT_agent=navigator.userAgent.toLowerCase();
var AT_major=parseInt(navigator.appVersion);var AT_is_nav=((AT_agent.indexOf("mozilla")!=-1)&&(AT_agent.indexOf("spoofer")==-1)&&(AT_agent.indexOf("compatible")==-1)&&(AT_agent.indexOf("opera")==-1)&&(AT_agent.indexOf("webtv")==-1));
var AT_is_ie=(AT_agent.indexOf("msie")!=-1)||(AT_is_nav&&AT_major>=5);var AT_IS_FIREFOX=AT_agent.indexOf("firefox")!=-1;
var AT_IS_OPERA=AT_agent.indexOf("opera")!=-1;if(AT_IS_OPERA){AT_is_ie=false;
}if(AT_is_nav){AT_is_ie=false;}if(AT_IS_FIREFOX){AT_is_ie=false;}adtech_flashinc="";
if(AT_EXPANDABLE&&AT_EXPANDABLE!="false"){adtech_flashinc+='<div id="AT_ANCHOR_DIV_ADFC_CUID_" style="overflow:hidden;position:relative;width:100px;height:100px;z-index:'+AT_ZINDEX+';">';
}if(AT_FAKEPOPUP){adtech_flashinc+='<div id="AT_DIV_ADFC_CUID_" ';if(AT_EXPANDABLE&&AT_EXPANDABLE!="false"&&!AT_LAYERMANUALRESIZE){adtech_flashinc+=' onmouseout="collapse_ADFC_CUID_()" onmouseover="expand_ADFC_CUID_()"';
}adtech_flashinc+=' style="width:100px;height:100px;z-index:'+AT_ZINDEX+";position:absolute;top:"+AT_FAKEPOPUP_top+"px;left:"+AT_FAKEPOPUP_left+"px;"+(!AT_FAKEPOPUP_start_opened?"display:none;":"")+'">';
}if(ShockMode&&AT_FLASH){if(AT_EXPANDABLE&&AT_EXPANDABLE!="false"){AT_WIDTH_HEIGHT="width=0 height=0";
}adtech_flashinc+='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://active.macromedia.com/flash2/cabs/swflash.cab#version=5,0,0,0" id="AT_OBJECT_ADFC_CUID_" name="AT_OBJECT_ADFC_CUID_" '+AT_WIDTH_HEIGHT+">";
adtech_flashinc+='<param name=movie value="'+AT_FLASH+AT_VARSTRING+"&CURRENTDOMAIN="+AT_CURRENTDOMAIN+'">';
adtech_flashinc+="<param name=quality value="+AT_FlaQual+">";adtech_flashinc+='<param name="base" value="'+AT_BASE+'">';
if(AT_FLASHVERSION>5){adtech_flashinc+='<param name="flashvars" value="'+AT_FLASHVARSSTR+'">';
}adtech_flashinc+='<param name="allowscriptaccess" value="always">';if(AT_FLASH_BGCOLOR){adtech_flashinc+='<param name="bgcolor" value="'+AT_FLASH_BGCOLOR+'">';
}adtech_flashinc+='<param name="swLiveConnect" value="true">';adtech_flashinc+='<param name="wmode" value="'+AT_WMODE+'">';
adtech_flashinc+='<embed src="'+AT_FLASH+AT_VARSTRING+"&CURRENTDOMAIN="+AT_CURRENTDOMAIN+'" id="AT_OBJECT_ADFC_CUID_"';
if(AT_FLASH_BGCOLOR){adtech_flashinc+=' bgcolor="'+AT_FLASH_BGCOLOR+'"';
}adtech_flashinc+=' name="AT_OBJECT_ADFC_CUID_" base="'+AT_BASE+'" quality="'+AT_FlaQual+'"';
if(AT_FLASHVERSION>5){adtech_flashinc+=' flashvars="'+AT_FLASHVARSSTR+'"';
}adtech_flashinc+=' allowScriptAccess="always" swLiveConnect=true '+AT_WIDTH_HEIGHT;
adtech_flashinc+=' wmode="'+AT_WMODE+'"';adtech_flashinc+=' type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/shockwave/download/index.cgi?P1_Prod_Version=ShockwaveFlash">';
adtech_flashinc+="</embed>";adtech_flashinc+="</object>";}else{if(AT_MICROSITE){adtech_flashinc+="<a href=\"javascript:AT_ClickFn_ADFC_CUID_('"+AT_IMGCLICK+'\')" target="_self">';
}else{adtech_flashinc+='<a href="_ADCLICK_'+AT_IMGCLICK+'" target="'+AT_TARGET_ADFC_CUID_+'">';
}if(AT_IMAGE){adtech_flashinc+='<img src="'+AT_IMAGE+'" WIDTH="'+AT_ALTIMAGEWIDTH+'" HEIGHT="'+AT_ALTIMAGEHEIGHT+'" alt="'+AT_TEXT+'" title="'+AT_TEXT+'" border="0">';
}adtech_flashinc+="</a>";}if(AT_FAKEPOPUP){adtech_flashinc+="</div>";if(AT_is_ie){var _zindex=AT_ZINDEX-1;
if(AT_EXPANDABLE&&AT_EXPANDABLE!="false"){_zindex=-4000;}adtech_flashinc+='<div id="HID_IFRAME__ADFC_CUID_" style="'+(!AT_FAKEPOPUP_start_opened?"display:none;":"")+"width:100px;height:100px;position:absolute;top:"+AT_FAKEPOPUP_top+"px;left:"+AT_FAKEPOPUP_left+"px;Z-INDEX:"+_zindex+'">';
adtech_flashinc+='<iframe id="HIDDER" style="FILTER: alpha (opacity=0);" width="0px" height="0px" src="about:blank"></iframe>';
adtech_flashinc+="</div>";}}if(AT_EXPANDABLE&&AT_EXPANDABLE!="false"){adtech_flashinc+="</div>";
}if(typeof AD_vars!="undefined"){document.write('<script type="text/javascript" src="_ADPATH_adtech_flashinc.js"><\/script>');
}else{document.write(adtech_flashinc);}if(AT_FAKEPOPUP&&AT_FAKEPOPUP_autoclose){window.setTimeout("closeAdLayer_ADFC_CUID_()",AT_FAKEPOPUP_autoclose);
}if(AT_FAKEPOPUP){window.closeAdLayer_ADFC_CUID_=function(){document.getElementById("AT_DIV_ADFC_CUID_").style.display="none";
if(AT_is_ie){var iframediv=document.getElementById("HID_IFRAME__ADFC_CUID_");
iframediv.style.display="none";}};window.openAdLayer_ADFC_CUID_=function(){document.getElementById("AT_DIV_ADFC_CUID_").style.display="";
if(AT_is_ie){var iframediv=document.getElementById("HID_IFRAME__ADFC_CUID_");
iframediv.style.display="";}};}window.expand_ADFC_CUID_=function(){var thediv=document.getElementById("AT_DIV_ADFC_CUID_");
var thediv2=document.getElementById("AT_ANCHOR_DIV_ADFC_CUID_");if(AT_is_ie){var iframediv=document.getElementById("HID_IFRAME__ADFC_CUID_");
iframediv.style.display="";}thediv.style.width="0px";thediv.style.height="0px";
thediv2.style.overflow="";};window.expand_width_ADFC_CUID_=function(value){var thediv=document.getElementById("AT_DIV_ADFC_CUID_");
var thediv2=document.getElementById("AT_ANCHOR_DIV_ADFC_CUID_");if(AT_is_ie){var iframediv=document.getElementById("HID_IFRAME__ADFC_CUID_");
iframediv.style.display="";}thediv.style.width=value+"px";thediv2.style.overflow="";
};window.expand_height_ADFC_CUID_=function(value){var thediv=document.getElementById("AT_DIV_ADFC_CUID_");
var thediv2=document.getElementById("AT_ANCHOR_DIV_ADFC_CUID_");thediv.style.height=value+"px";
thediv2.style.overflow="";if(AT_is_ie){var iframediv=document.getElementById("HID_IFRAME__ADFC_CUID_");
iframediv.style.display="";}};window.collapse_ADFC_CUID_=function(){var thediv=document.getElementById("AT_DIV_ADFC_CUID_");
var thediv2=document.getElementById("AT_ANCHOR_DIV_ADFC_CUID_");thediv.style.width="100px";
thediv.style.height="100px";thediv2.style.overflow="hidden";if(AT_is_ie){var iframediv=document.getElementById("HID_IFRAME__ADFC_CUID_");
iframediv.style.display="";}};window.restartMovie_ADFC_CUID_=function(){movie=document.getElementById("AT_OBJECT_ADFC_CUID_");
movie.REWIND();movie.PLAY();};window.stopMovie_ADFC_CUID_=function(){document.getElementById("AT_OBJECT_ADFC_CUID_").STOP();
};window.AT_OBJECT_ADFC_CUID__DoFSCommand=function(command,value){if(command.search(/(click|link|url)/i)>=0){AT_ClickFn_ADFC_CUID_(command.replace(/[^0-9]/g,""));
}else{if(command.search(/(hide|close|stop|halt|done|quit)/i)>-1){closeAdLayer_ADFC_CUID_();
}else{if(command.search(/(show|open|start|spawn|launch)/i)>-1){if(command!="showmenu"){openAdLayer_ADFC_CUID_();
}}else{if(command=="expand"){expand_ADFC_CUID_();}else{if(command=="collapse"){collapse_ADFC_CUID_();
}else{if(command=="expandwidth"){expand_width_ADFC_CUID_(value);}else{if(command=="expandheight"){expand_height_ADFC_CUID_(value);
}else{if(command=="redirectToPage"){window.open("_ADCLICK_"+value,"redirectwin","");
}}}}}}}}};var restartMovie=restartMovie_ADFC_CUID_;var stopMovie=stopMovie_ADFC_CUID_;
if(AT_FAKEPOPUP){var closeAdLayer=closeAdLayer_ADFC_CUID_;var adlayerhider=closeAdLayer;
var openAdLayer=openAdLayer_ADFC_CUID_;}kroma_disposable_object={width:"",height:"",id:"object",stylesheet:null,adcontent:{id:"Ad",movie:adtech.getPlugin("standard",options,context,frame),allowscriptaccess:"always",allownetworking:"all",allowfullscreen:"true",width:"",height:"",quality:"high",wmode:"opaque",clicktags:[]},overlaycontent:{id:"overlay",movie:options.flashvars.clickTAG,allowscriptaccess:"always",allownetworking:"all",allowfullscreen:"true",width:"",height:"",quality:"high",wmode:"transparent",clicktags:[]},stringify:function(obj){var result="";
for(var key in obj){result+=key+" : "+obj[key]+"\n";}return result;},getFlashEmbedString:function(paramP){var e="";
var c="";if(!paramP.id){paramP.id="finnAd_overlayFlash_"+Math.random(100000,1000000);
}if(!paramP.allowscriptaccess){paramP.allowscriptaccess="always";}if(!paramP.allownetworking){paramP.allownetworking="all";
}if(!paramP.allowfullscreen){paramP.allowfullscreen="true";}if(!paramP.quality){paramP.quality="high";
}if(!paramP.wmode){paramP.wmode="opaque";}e+='<object id="'+paramP.id+'" classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=8,0,0,0" ';
e+='width="'+paramP.width+'" height="'+paramP.height+'">';e+='<param name="allowscriptaccess" value="'+paramP.allowscriptaccess+'">';
e+='<param name="allownetworking" value="'+paramP.allownetworking+'">';
e+='<param name="allowfullscreen" value="'+paramP.allowfullscreen+'">';
e+='<param name="quality" value="'+paramP.quality+'">';e+='<param name="wmode" value="'+paramP.wmode+'">';
e+='<param name="movie" value="'+options.flashvars.clickTAG+'">';e+='<embed src="'+options.flashvars.clickTAG+'" name="'+paramP.id+'" quality="'+paramP.quality+'" width="'+options.attr.emb_w+'px" height="'+options.attr.emb_h+'px" wmode="'+paramP.wmode+'" allowscriptaccess="'+paramP.allowscriptaccess+'" allownetworking="'+paramP.allownetworking+'" allowfullscreen="'+paramP.allowfullscreen+'" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer">';
e+="</object>";return e;}};kroma_disposable_object.styles=".kroma_overlay_background{ display:none; background-color:#000000; opacity:0.6; filter:alpha(opacity=60); zoom:1; position:absolute; top:0px; left:0px; min-width:100%; min-height:100%; z-index:1099000; }\n .kroma_overlay_popup{ display:none; position:fixed; top:30%; left:29%; padding:0px 0px 0px 0px; z-index:1099001; }";
var __parentWindow=parent||window;var kromaStyleInjected=false;var kromaStyleInject=function(){if(kromaStyleInjected){return;
}var ss=__parentWindow.document.createElement("style");ss.setAttribute("type","text/css");
__parentWindow.document.body.appendChild(ss);if(ss.styleSheet){ss.styleSheet.cssText=kroma_disposable_object.styles;
}else{var tt=__parentWindow.document.createTextNode(kroma_disposable_object.styles);
ss.appendChild(tt);}kromaStyleInjected=true;};function kroma_overlay_show_hide(doHide){kromaStyleInject();
var $j=jQuery;var documentContext=__parentWindow.document;kroma_debug(documentContext);
var getDocumentHeight=function(){return Math.max(Math.max(documentContext.body.scrollHeight,documentContext.documentElement.scrollHeight),Math.max(documentContext.body.offsetHeight,documentContext.documentElement.offsetHeight),Math.max(documentContext.body.clientHeight,documentContext.documentElement.clientHeight))+"px";
};var overlayHeight=options.attr.frame_h+"px";var overlayWidth=options.attr.frame_w+"px";
var overlaycontentHeight=options.attr.emb_h+"px";var overlaycontentWidth=options.attr.emb_w+"px";
var bgColor=options.attr.hex;kroma_disposable_object.overlaycontent.width=overlayWidth-5;
kroma_disposable_object.overlaycontent.height=overlayHeight-30;$j("#kroma_overlay_background,#kroma_overlay_popup",documentContext).remove();
$j("body",documentContext).append('<div id="kroma_overlay_background" style="display: none" class="kroma_overlay_background"></div>').append('<div id="kroma_overlay_popup" style="display: none" class="kroma_overlay_popup"><div style="float:right;clear:both; margin:5px 5px 5px 0;"><h3 style="margin:0;"><a onclick="kroma_overlay_show_hide(true);return false;" href="#">Lukk X</a></h3></div></div>').find("#kroma_overlay_background",documentContext).css("height",getDocumentHeight()).click(function(){kroma_overlay_show_hide(true);
}).end().find("#kroma_overlay_popup",documentContext).css({width:overlayWidth,height:overlayHeight});
if(doHide){$j("#kroma_overlay_popup, #kroma_overlay_popup",documentContext).css("display","none");
$j("#kroma_overlay_popup",documentContext).html("");$j("#kroma_overlay_background, #kroma_overlay_popup",documentContext).fadeOut(200);
}else{$j("#kroma_overlay_popup, #kroma_overlay_popup",documentContext).css("display","block");
$j("#kroma_overlay_popup").css("background-color",bgColor);var expert24112011_overlaycontent=kroma_disposable_object.getFlashEmbedString(kroma_disposable_object.overlaycontent);
$j("#kroma_overlay_popup",documentContext).append(expert24112011_overlaycontent);
$j("#kroma_overlay_background, #kroma_overlay_popup",documentContext).show();
}}__parentWindow.kroma_overlay_show_hide=kroma_overlay_show_hide;function kroma_debug(){if(typeof(console)!="undefined"){console.log(arguments);
}}});adtech.setPlugin("expandable",function(a,c,e){$("#"+a.container).wrap('<div id="'+a.container+'_wrapper" />');
var b=$("#"+a.container).parent(),d=b.parent();a.flashvars.placement=a.container;
adtech.getPlugin("standard",a,c,e);d.data("expandable_direction",a.attr.direction);
if(typeof a.attr.push!=="undefined"){d.data("expandable_push","true");}else{b.css({position:"absolute",top:0});
}b.parent().show();if(typeof a.attr.tout==="undefined"||a.attr.tout===0){if(typeof a.attr.exp_w!=="undefined"&&typeof a.attr.exp_h!=="undefined"){b.css({width:a.attr.exp_w+"px",height:a.attr.exp_h+"px",overflow:"hidden"});
b.parent().css({height:a.attr.exp_h+"px"});b.data("collapsed_size",{w:a.attr.exp_w,h:a.attr.exp_h});
$('<div class="ad_marker_keep_height" />').css({height:(a.attr.exp_h)+"px",width:"1px"}).appendTo(d);
}else{$('<div class="ad_marker_keep_height" />').css({height:a.config?a.config.height:a.attr.imgH+"px",width:"1px"}).appendTo(d);
}}else{b.css({overflow:"hidden"}).data("collapsed_size",{w:a.attr.exp_w,h:a.attr.exp_h});
if(typeof a.attr.push==="undefined"){if($("body").hasClass("ie7")){d.parent().css({zIndex:10000});
}d.css({paddingTop:a.attr.exp_h+"px",zIndex:10000});}setTimeout(function(){b.animate({height:a.attr.exp_h+"px"},function(){});
d.css({zIndex:"auto"});var g=$('<div id="dummyTop" style="display:none;position:absolute;left:-10000px"></div>');
adtech.getPlugin("standard",{attr:a.attr2?a.attr2:a.attr,config:a.config2?a.config2:a.config,container:a.container,flashvars:a.flashvars});
},(a.attr.tout*1000)+2000);}if(typeof a.attr2==="undefined"&&typeof a.config2==="undefined"){return false;
}var f={attr:a.attr2?a.attr2:a.attr,config:a.config2?a.config2:a.config,container:a.container+"_expanded",flashvars:a.flashvars};
f.flashvars.placement=a.container+"_expanded";d.data("expandable_options",f);
});adtech.expandCollapse=function(q,f){if($("body").hasClass("ie7")){$(".ie7 #page, .ie7 .ad").css({position:"static"});
$(".ie7 #adRight").css({zIndex:1200});}var a=$("#"+f),b=a.parent(),k=b.parent(),e=a.prev(),l=typeof k.data("expandable_push")!=="undefined",d=typeof k.data("expandable_options")==="undefined",r=a[0].id.indexOf("expanded")!==-1,j=b.siblings('[id$="expanded_wrapper"]').length===0,o=a.attr("width"),g=a.attr("height");
if(j&&!r&&!d){var s=k.data("expandable_options");$('<div id="'+s.container+'_wrapper"><div id="'+s.flashvars.placement+'"></div></div>').insertBefore(b);
adtech.getPlugin("standard",s);}if(!d){b.hide()[q==="show"?"prev":"next"]().show();
if(!l&&q=="show"){k.find("div:first-child").css({position:"absolute"});
k.css({height:g+"px",width:o+"px"});}}if(d){if(!l){if(q==="show"){k.addClass("expOpen");
}else{k.removeClass("expOpen");o=b.data("collapsed_size").w;g=b.data("collapsed_size").h;
}}if(l&&q==="hide"){o=b.data("collapsed_size").w;g=b.data("collapsed_size").h;
}}else{if(r){k.removeClass("expOpen");o=e.attr("width");g=e.attr("height");
k.find("div:first-child").remove();}else{k.addClass("expOpen");o=a.attr("width");
g=a.attr("height");}}if(l){if(q==="hide"||r){$(".ad_marker_keep_height").css({position:"static"});
}else{$(".ad_marker_keep_height").css({position:"absolute"});}}b.css({height:g+"px",width:o+"px"});
if(!l){var c=d?b:b[q==="show"?"prev":"next"](),n=k.data("expandable_direction");
c.css({top:n.indexOf("N")!==-1?"auto":0,right:n.indexOf("E")!==-1?"auto":0,bottom:n.indexOf("N")!==-1?0:"auto",left:n.indexOf("E")!==-1?0:"auto"});
}};function expandThis(a){return adtech.expandCollapse("show",a);}function collapseThis(a){return adtech.expandCollapse("hide",a);
}function expandLAd(){var f="adLeft",a="l_expanded",d=adtech.getCompanion("l_expanded").alias,c='<span id="LBarX">X</span>';
var b=$(a);if(!d){return;}if(b.length===0){var e=adtech.Create("div",{id:a,className:"ohidden"});
AdElement.get(f).append(e);adtech.loadFIF(a,d);$("#l_expanded").append(c);
$("#LBarX").mousedown(function(g){$(this).parent().remove();});b.show();
}}function collapseAdLayers(a){if($(a).contents().find('img[alt="AdTech Ad"], img[src$="clearpix.gif"]').length>0){$(a).parents(".ad:first").hide();
}}$(document).ready(function(){if(typeof mno.publication!=="undefined"){$(".ad").each(function(a){var b=$(this).find('iframe[src *="'+mno.publication.url+'"]').length>0?$(this).find("iframe").contents():$(this);
if(b.find('img[src$="trans.gif"], img[alt="AdTech Ad"], img[src*="Default_Size"]').length>0){$(this).hide();
}});}});$(document).ready(function(){var a=document.domain;if((a==="www.aftenposten.no")&&($("#adRight .ad:last-child div").attr("id")==="skyskraper3")){adtech.stickySkyscraper=function(){var c=$("#adRight .ad:last-child"),f=null,d=$("#smallHeader"),e=0,b=$("#footer").offset().top-$("#adRight .ad:last-child").height();
c.css({"z-index":1000});if(window.XMLHttpRequest){$(window).scroll(function(){d=d.length===1?d:$("#smallHeader");
e=e!==0?e:d.outerHeight();f=f===null?c.offset().top:f;if($(window).scrollTop()>=b){c.css({position:"absolute",top:b});
}else{if($(window).scrollTop()>=f-e){if(d.is(":hidden")){c.css({position:"fixed",top:e-e});
}else{c.css({position:"fixed",top:e+"px"});}}else{c.css({position:"",top:0});
}}});}};adtech.stickySkyscraper();}});
/*!



 resources js mno utils expand.js



*/
(function(a){a.fn.mnoExpand=function(c){var d={content:false,speed:250,originalWidth:2,expandedWidth:10,direction:"right"},e=mno.features.transition;
c=a.extend(d,c);var b;c.originalWidth=((c.originalWidth*80)+((c.originalWidth-1)*20));
c.expandedWidth=((c.expandedWidth*80)+((c.expandedWidth-1)*20));this.each(function(){var h=a(this),f=h.parents(".expandParent"),g;
if(f.css("position")==="static"){f.css("position","relative");f.css("left",0);
}f.addClass("animate");f.css("width",f.width()+"px");h.addClass("animate");
h.data("src",false);h.data("width",false);a(".videoMarker").bind("click",function(){a(this).prev("img").trigger("click");
});h.bind("click",function(){var l=c.expandedWidth;if(h.data("width")){var k=h.data("width");
var o=k.substring(0,k.indexOf("px"));l=parseInt(o);}var r="0";if(c.direction==="left"&&l!==c.originalWidth){var q=l-c.originalWidth;
r="-"+q+"px";}if(c.content){var j=h.position();if(e===false){b=a('<div class="loader"></div>').appendTo(f).css({top:j.top+"px",left:j.left+"px"});
}if(c.content.type==="image"){if(!c.content.location.element){var n="";
if(h.data("src")){n=h.data("src");h.data("src",false);h.data("width",false);
}else{n=c.content.location.url?c.content.location.url:h.attr(c.content.location.attr);
h.data("width",h.width()+"px");h.data("src",h.attr("src"));}g=new Image();
a(g).attr("src",n).load(function(){h.css("width","100%");h.attr("src",n);
});}}else{if(c.content.type==="silverlight"||c.content.type==="flash"){var n="";
if(h.data("src")){n=h.data("src");h.data("src",false);h.data("width",false);
g=new Image();a(g).attr("src",n).load(function(){h.css("width","100%");
h.attr("src",n);});}else{a.ajax({url:mno.publication.url+"template/common/mnoVideo/"+c.content.type+"/player.jsp",dataType:"html",data:{iframe:true,videoArtId:h.attr(c.content.location.attr),playerWidth:c.expandedWidth+"px"},success:function(s){h.replaceWith(s);
f.find("object").css("margin","-5px 0 0 -10px");f.find(".videoMarker, .videoMarkerIE").remove();
}});}h.css("width","100%");f.find(".content").removeClass("withImg");}else{}}}if(e!==false){f.css("width",l+"px");
f.css("left",r);}else{f.animate({width:l+"px",left:r},c.speed,function(){if(b){b.remove();
}});}});});return this;};}(window.jQuery));
/*!



 resources js mno utils dialog.js



*/
(function(a){mno.namespace("mno.utils.dialog");
mno.utils.dialog=function(k){var e={onClose:function(){},onOpen:function(){},span:10,content:""};
k=a.extend(e,k);var d=a(window),h,c,g=false,f={docHeight:a(document).height(),width:(k.span*80)+((k.span-1)*20)+20,top:100,left:(d.width()-((k.span*80)+((k.span-1)*20)))/2,maxHeight:d.height()-200};
mno.views.render("mno.views.dialog",f,function(l){l.appendTo("body");a("#mnoDialogBg, #mnoDialogClose").bind("click",function(n){j();
});c=a("#mnoDialogContent");c.hide().fadeIn(250,function(){g=true;});});
function j(){c.fadeOut(250,function(){a("#mnoDialogBg, #mnoDialog").remove();
k.onClose();});}function b(l){if(g===true){if(typeof mno.core.utils!=="undefined"&&typeof mno.core.utils.innerShiv==="function"){if(l.jquery&&l.length>0){l=l.html();
}l=a(mno.core.utils.innerShiv(l,false)).appendTo("body");}c.removeClass("load").append(l);
k.onOpen();}else{setTimeout(function(){b(l);},100);}}if(typeof k.content==="object"){b(k.content);
}else{if((typeof k.content==="string")&&(k.content.indexOf("http")!==-1)){a.ajax({url:k.content,success:function(l){b(l);
}});}else{mno.core.log(1,"Wrong type for mnoDialog");}}};}(window.jQuery));
/*!



 resources js mno utils expose.js



*/
(function(b){var a={init:function(c){c=b.extend({onClose:function(){},onOpen:function(){}},c);
function d(f,e,g){e.fadeOut(250,function(){f.removeClass("mnoExposed").css({top:"auto",left:"auto"}).insertBefore(g);
g.remove();c.onClose();});}return this.each(function(e){var f=b(this);f.bind("focus click",function(h){if(!f.hasClass("mnoExposed")){var k=f.offset(),j=b("<div></div>").insertBefore(this);
f.data("placeholder",j);j.css({height:f.outerHeight(true)+"px"});var g=b("<div />").attr("id","exposeWhiteBg").css("display","none").bind("click",function(){d(f,g,j);
}).css("height",b(document).height()+"px").appendTo("body");f.css({width:f.width(),top:k.top-f.outerHeight(true)+f.outerHeight(),left:k.left}).addClass("mnoExposed").appendTo("body");
c.onOpen();g.fadeTo(250,0.8);h.target.focus();}});});},update:function(){return this.each(function(){var c=b(this);
if(c.hasClass("mnoExposed")){c.data("placeholder").css({height:c.outerHeight(true)+"px"});
}});}};b.fn.mnoExpose=function(c){if(a[c]){return a[c].apply(this,Array.prototype.slice.call(arguments,1));
}else{if(typeof c==="object"||!c){return a.init.apply(this,arguments);}else{mno.core.log(1,"Method "+c+" does not exist on mnoExpose");
}}};}(window.jQuery));
/*!



 resources js mno utils params.js



*/
mno.namespace("mno.utils.params");
mno.utils.params=(function(){var d=false,f,e,c,a;function b(){var h=document.location.href.split("?",2),g=(h[1]||"").split("#")[0].split("&")||[],j=g.length,l,k=[];
d=[];f=h[0];while(j--){l=g[j].split("=");if(typeof(l[0])==="string"){if(d.hasOwnProperty(l[0])){if(typeof d[l[0]]==="string"){d[l[0]]=[d[l[0]]];
}d[l[0]].push(unescape(l[1]));}else{d[l[0]]=unescape(l[1]);}}}}e=function(g){if(d===false){b();
}return(typeof d[g]==="undefined"?false:d[g]);};c=function c(){if(d===false){b();
}return d||false;};a=function(){if(d===false){b();}return f||false;};return{getPath:a,getParameter:e,getAllParameters:c};
}());
/*!



 resources js mno utils cookie.js



*/
jQuery.cookie=function(b,j,n){var h;
if(typeof j!=="undefined"){n=n||{};if(j===null){j="";n.expires=-1;}var e="";
if(n.expires&&(typeof n.expires==="number"||n.expires.toUTCString)){var f;
if(typeof n.expires==="number"){f=new Date();f.setTime(f.getTime()+(n.expires*24*60*60*1000));
}else{f=n.expires;}e="; expires="+f.toUTCString();}var l=n.path?"; path="+(n.path):"";
var g=n.domain?"; domain="+(n.domain):"";var a=n.secure?"; secure":"";document.cookie=[b,"=",encodeURIComponent(j),e,l,g,a].join("");
}else{var d=null;if(document.cookie&&document.cookie!==""){var k=document.cookie.split(";");
for(h=0;h<k.length;h++){var c=jQuery.trim(k[h]);if(c.substring(0,b.length+1)===(b+"=")){d=decodeURIComponent(c.substring(b.length+1));
break;}}}return d;}};
/*!



 resources js mno utils rubrikk.js



*/
mno.core.register({id:"mno.utils.rubrikk",forceStart:true,creator:function(){return{init:function(){},destroy:function(){},adUrl:SITEURL+"jobb/",rubrikkUrl:"http://rubrikk.aftenposten.no/onlineClassifieds/",rubrikkCacheUrl:"http://rubrikkcache.aftenposten.no/onlineClassifieds/",lisaLevel:"lisacache",jsonUrl:"/external/rubrikk/jobb/json-feeds/",jsonUrlBolig:"/external/rubrikk/bolig/json-feeds/",jsonUrlNotifications:"/external/rubrikk/kunngjoring/json-feeds/"};
}});
/*!



 resources js mno utils tree.js



*/
(function(b){var a={init:function(){return this.each(function(c){var d=b(this),e=d.clone(true);
mno.core.log(1,e);e.addClass("mnoTree");e.find("li:last-child").addClass("lastChild");
e.find("li.leaf a").click(function(f){f.stopPropagation();});e.find("li.expanderCollapser:has(ul)").each(function(){b(this).addClass("expanded").bind("click",function(f){b(this).toggleClass("expanded collapsed");
f.stopPropagation();}).prepend('<span class="mnoTree-expand">+</span><span class="mnoTree-collapse">-</span>').removeClass("leaf");
});d.replaceWith(e);});}};b.fn.mnoTree=function(c){if(a[c]){return a[c].apply(this,Array.prototype.slice.call(arguments,1));
}else{if(typeof c==="object"||!c){return a.init.apply(this,arguments);}else{mno.core.log(1,"Method "+c+" does not exist on mnoExpose");
}}};}(window.jQuery));
/*!



 resources js mno views views.js



*/
mno.namespace("mno.views");
mno.views=(function(){function a(c,d,g){try{if(d.constructor===Array){d=[{items:d}];
}if($.template[c]!==undefined){g($.tmpl(c,d));d=null;}else{var b=(function(){if(c.indexOf(".")!==-1){return mno.publication.rel+"resources/js/"+c.replace(/\./g,"/")+".tmpl";
}else{return mno.publication.rel+"resources/js/mno/views/"+c+".tmpl";}}());
$.ajax({url:b,success:function(h){try{$.template(c,h);g($.tmpl(c,d));d=null;
}catch(j){mno.core.log(1,j);}}});}}catch(f){mno.core.log(3,f);}}return{render:a};
}());
/*!



 resources js widgets cartoon section.js



*/
mno.core.register({id:"widget.cartoon.section",extend:["widget.slideshow.main"],creator:function(a){function c(){if(a.container){this.helper(a);
}}function b(){}return{init:c,destroy:b};}});
/*!



 resources js widgets code bmiCalculator.js



*/
mno.core.register({id:"widget.code.template.common.code.bmiCalculator.jsp",creator:function(a){return{init:function(){a.container.each(function(d,c){$("#bmiCalculator .calculate").live("click",function(){var e=b($("#bmiCalculator .height").val());
e=e.replace(",",".");if(e==""){$("#bmiCalculator .userMessage").text("Du må oppgi høyde");
$("#bmiCalculator .height").focus();return false;}if(e!=Number(e)||(e=Number(e/100))<1||e>2.5){$("#bmiCalculator .userMessage").text("Ugyldig verdi for høyde");
$("#bmiCalculator .height").focus();return false;}var f=b($("#bmiCalculator .weight").val());
f=f.replace(",",".");if(f==""){$("#bmiCalculator .userMessage").text("Du må oppgi vekt");
$("#bmiCalculator .weight").focus();return false;}if(f!=Number(f)||(f=Number(f))<25||f>250){$("#bmiCalculator .userMessage").text("Ugyldig verdi for vekt");
$("#bmiCalculator .weight").focus();return false;}$("#bmiCalculator .userMessage").text("Din BMI er "+Math.round(f/(e*e)*100)/100+".");
});});function b(e){var d="";var f=0;for(i=0;i<e.length;i++){if(e.charAt(i)!=" "||f>0){d+=e.charAt(i);
if(e.charAt(i)!=" "){f=d.length;}}}return d.substr(0,f);}},destroy:function(){$=null;
}};}});
/*!



 resources js widgets code sectionSearch.js



*/
mno.core.register({id:"widget.code.template.framework.extraFiles.sectionSearch.jsp",creator:function(a){return{init:function(){$("#sectionSearch").click(function(b){document.sectionSearchForm.submit();
b.preventDefault();});},destroy:function(){$=null;}};}});
/*!



 resources js widgets code taxSearch.js



*/
mno.core.register({id:"widget.code.template.common.taxSearch.taxSearch.jsp",creator:function(a){return{init:function(){a.container.each(function(c,b){$("#doTaxSearchX").parents("form").bind("submit",function(){if($(".givenname").val()=="Fornavn"){$(".givenname").val("");
}if($(".surname").val()=="Etternavn"){$(".surname").val("");}});});},destroy:function(){$=null;
}};}});
/*!



 resources js widgets code weatherSearch.js



*/
mno.core.register({id:"widget.code.template.common.code.weatherSearch.jsp",creator:function(a){return{init:function(){a.container.each(function(c,b){$("form#weatherSearch").bind("submit",function(e){var d=$('form#weatherSearch input[name="search"]');
var f=escape(d.val());var g=d.attr("name");if(f==d.attr("placeholder")){d.val("");
}else{document.location.href=$(this).attr("action")+"?"+g+"="+f;return false;
}});});},destroy:function(){$=null;}};}});
/*!



 resources js widgets code whatsOn.js



*/
mno.core.register({id:"widget.code.template.common.btPulsDetSkjer.whatsOn.jsp",creator:function(a){return{init:function(){var j=a.$;
var l=false;var x="http://event.bt.no/event/feeds";var q="event-category-tree";
var r="today";var e;var g;var n="category_all";var u;var v;var d;if(a.container){a.container.each(function(C,B){var A=a.model[C];
x=A.feed;n=A.categoryRoot;d=new Date();if(jQuery("#whatsOnMain")){f();}else{if(jQuery("#eventInfoWrapper")){s();
}else{if(jQuery("#venueInfoWrapper")){h();}else{if(jQuery("#woSearchResult")){y();
}}}}});j('ul[role="tablist"] a').live("click",function(){var A=j(this);
if(A.attr("aria-selected")!=="true"){j('[role="tabpanel"]').not('[aria-labelledby="'+A.attr("id")+'"]').css({display:"none"}).attr("aria-hidden","true");
j('[aria-labelledby="'+A.attr("id")+'"]').css({display:"block"}).attr("aria-hidden","false");
j('[role="tablist"] a').not(A).attr("tabindex","-1").attr("aria-selected","false");
A.attr("aria-selected","true").attr("tabindex","0");w(A.attr("tabId"));
}return false;});}function f(){jQuery.getJSON(x+"/categories/?type="+q+"&jsoncallback=?",function(B){var D="";
var C="";var A=true;jQuery.each(B.items,function(E,G){var H=G.name;var F="checkbox"+E;
D=D+'<li><a tabId="'+E+'"  id="tab'+(E+1)+'" aria-selected="'+A+'" >'+H+"</a></li>";
C=C+'<div id="tabs-'+(E+1)+'" role="tabpanel" aria-hidden="'+!A+'" aria-labelledby="tab'+(E+1)+'"><div id="woContent" class="woContent"><div class="woCalendar"><div id="woDatePicker'+E+'"/><div class="timeframes"><input type="checkbox" tabId="'+E+'" class="'+F+'" name="timeframe'+E+'" id="timeframe'+E+'"/><label for="timeframe'+E+'">Valgt dato + 3 dager</label></div></div><div id="result'+E+'" class="woResult"/></div></div>';
A=false;});jQuery("#tablist").append(D);jQuery("#tabpanels").append(C);
j(".timeframes input").live("change",function(){c(d,j(this).attr("tabId"));
});w(0);});}function w(A){jQuery("#woDatePicker"+A).html('<input name="date_from" id="date_from" type="date" />');
jQuery("#woDatePicker"+A+" input#date_from").live("change",function(){var B=j(this).val().split("/");
d=new Date(B[2],(B[1]-1),B[0]);c(d,A);jQuery(this).trigger("click");});
jQuery("#woDatePicker"+A+" input#date_from").val(d.getDate()+"/"+(d.getMonth()+1)+"/"+d.getFullYear());
jQuery("#woDatePicker"+A+" input#date_from").trigger("click");c(d,A);}function c(C,B){jQuery("#woMaxMin"+B).css("display","none");
jQuery("#result"+B).animate({height:326},326);jQuery("#result"+B).empty();
jQuery("#result"+B).append('<div class="woLoad"/>');var I=C.getDate();var F=C.getMonth()+1;
var G=C.getFullYear();var A=jQuery("#tab"+(parseInt(B)+1)).html();var D=new SimpleDateFormat("yyyy-MM-dd'T'00:00:00Z");
var J=D.format(C);var K=new SimpleDateFormat("yyyy-MM-dd'T23:59:59'Z");
var E=C;var H=document.getElementById("timeframe"+B);if(H.checked==true){E.setDate(C.getDate()+3);
}else{E.setDate(C.getDate());}var L=K.format(E);jQuery.getJSON(x+"/events/?startDate="+J+"&endDate="+L+"&categories="+A+"&jsoncallback=?",function(Q){if(Q.items.length>0){jQuery("#result"+B).empty();
var T={tabIndex:B,columns:[]};var P={columnNr:1,topcolumn:true,events:[]};
var O={columnNr:2,topcolumn:true,events:[]};var N={columnNr:3,topcolumn:true,events:[]};
var M={columnNr:4,topcolumn:true,events:[]};var W={columnNr:5,events:[]};
var V={columnNr:6,events:[]};var U={columnNr:7,events:[]};var S={columnNr:8,events:[]};
T.columns.push(P);T.columns.push(O);T.columns.push(N);T.columns.push(M);
T.columns.push(W);T.columns.push(V);T.columns.push(U);T.columns.push(S);
var R;jQuery.each(Q.items,function(ab,af){var ag="";var Z="";if(af.eventName.length>50){ag="font-size:90%";
}if(af.venueName.length>41){Z="font-size:80%";}var ad=af.endTime;var Y=af.startTime;
var ac=(ad=="23:59")?"":" - "+ad;startTime="";if(Y=="00:01"){startTime=", hele dagen ";
ac="";}else{startTime=", kl. "+Y;}note=(af.note=="")?"":"<b>"+af.note+"</b><br/>";
var ae="InfoLink"+af.eventId;var aa="VenueLink"+af.eventId;var X={eventHeaderFontSize:ag,eventName:af.eventName,eventLinkClass:ae,eventTime:note+af.eventDate+startTime+ac,venueInfoClass:aa,venueInfoFontSize:Z,itemVenueName:af.venueName};
jQuery("."+ae).die("click");jQuery("."+ae).live("click",function(){t(af.eventId,af.eventDate);
});jQuery("."+aa).die("click");jQuery("."+aa).live("click",function(){k(af.venueId);
});if(ab<9){if(ab==0){P.events.push(X);}else{if(ab==1){O.events.push(X);
}else{if(ab==2){N.events.push(X);}else{if(ab==3){P.events.push(X);}else{if(ab==4){O.events.push(X);
}else{if(ab==5){N.events.push(X);}else{if(ab==6){P.events.push(X);}else{if(ab==7){O.events.push(X);
}else{if(ab==8){N.events.push(X);}}}}}}}}}}else{R=5+(ab%4);T.columns[R-1].events.push(X);
jQuery("#result"+B).animate({height:"100%"},326);}});mno.views.render("mno.views.calEventElements",T,function(X){jQuery("#result"+B).append(X);
});}else{jQuery("#result"+B).html("<strong>Fant ingen hendelser!</strong>");
}});}function t(B,A){jQuery.getJSON(x+"/eventInfo/?eventId="+B+"&jsoncallback=?",function(D){var C={eventName:D.event.name,shortDescr:D.event.shortDescription,descr:D.event.description,occurences:[]};
jQuery.each(D.event.eventOccurrences,function(G,I){var F=I.endTime;var H=I.startTime;
var E=(F=="23:59")?"":" - "+F;startTime="";if(H=="00:01"){startTime=", hele dagen ";
E="";}else{startTime=", kl. "+H;}C.occurences.push({date:I.date+startTime+E,note:I.note});
});mno.views.render("mno.views.calEventDialogInfo",C,function(E){jQuery("#whatsOnMain").append(E);
mno.utils.dialog({content:jQuery("#eventInfoDialog"),span:6});});});}function s(){jQuery.getJSON(x+"/eventInfo/?eventId="+u+"&jsoncallback=?",function(B){var A={eventName:B.event.name,shortDescr:B.event.shortDescription,descr:B.event.description,url:"${publication.url}?navigate=venue&venueId="+B.event.venue.id,eventVenueName:B.event.venue.name};
mno.views.render("mno.views.calEventInfoWrapper",A,function(C){jQuery("#eventInfoWrapper").append(C);
});});}function k(A){jQuery.getJSON(x+"/venueInfo/?venueId="+A+"&jsoncallback=?",function(C){var B={venueName:C.venue.name,phone:C.venue.phone,url:C.venue.url,street:C.venue.street+" "+C.venue.number,city:C.venue.postalCode+" "+C.venue.city};
mno.views.render("mno.views.calVenueDialogInfo",B,function(D){if(C.venue.gpsCoordinateX.length>0&&C.venue.gpsCoordinateY.length>0){z(function(){jQuery("#whatsOnMain").append(D);
b(C.venue.gpsCoordinateX,C.venue.gpsCoordinateY,"woVenueMapCanvas");mno.utils.dialog({content:jQuery("#venueInfoDialog"),span:6});
});}else{jQuery("#whatsOnMain").append(D);mno.utils.dialog({content:jQuery("#venueInfoDialog"),span:6});
}});});}function h(){jQuery.getJSON(x+"/venueInfo/?venueId="+v+"&jsoncallback=?",function(B){var A={venueName:B.venue.name,phone:B.venue.phone,url:B.venue.url,street:B.venue.street+" "+B.venue.number,city:B.venue.postalCode+" "+B.venue.city};
mno.views.render("mno.views.calVenueDialogInfo",A,function(C){jQuery("#venueInfoWrapper").append(C);
if(B.venue.gpsCoordinateX.length>0&&B.venue.gpsCoordinateY.length>0){b(B.venue.gpsCoordinateX,B.venue.gpsCoordinateY,"woVenueMapCanvas");
}});});}function b(H,C,G){try{var E=new google.maps.LatLng(H,C);var B={zoom:16,center:E,mapTypeId:google.maps.MapTypeId.ROADMAP};
var F=new google.maps.Map(jQuery("#"+G)[0],B);var A=new google.maps.Marker({position:E,map:F});
}catch(D){mno.core.log(3,"widgets/map/default.js at initMap stack"+D.stack);
}}function z(A){a.getScript({url:"http://maps.google.com/maps/api/js?sensor=false&async=2&v=3",callbackVar:"callback",jsonP:function(){a.notify({type:"pulsGapiReady",data:true});
}});a.listen({pulsGapiReady:function(){A();}});}function o(A){if(!jQuery("#woMaxMin"+A).hasClass("woMin")){jQuery("#result"+A).animate({height:"100%"},100);
jQuery("#woMaxMin"+A).toggleClass("woMin");jQuery("#woMaxMin"+A).toggleClass("ui-icon-circle-triangle-s");
jQuery("#woMaxMin"+A).toggleClass("ui-icon-circle-triangle-n");}else{jQuery("#result"+A).animate({height:"100%"},100);
jQuery("#woMaxMin"+A).toggleClass("woMin");jQuery("#woMaxMin"+A).toggleClass("ui-icon-circle-triangle-s");
jQuery("#woMaxMin"+A).toggleClass("ui-icon-circle-triangle-n");}}function y(){jQuery("#woSearchResult").empty();
jQuery("#woSearchResult").append("<h2>S&oslash;keresultat</h2>");jQuery("#woSearchResult").append('<div class="woLoad"/>');
var D;var G;var C;var F;if(r=="dateSpan"){D=Date.parse(e);G=Date.parse(g);
C=new Date(D);F=new Date(G);}else{if(r=="today"){C=new Date();F=new Date();
}else{if(r=="tomorrow"){C=new Date();C.setDate(C.getDate()+1);F=new Date();
F.setDate(F.getDate()+1);}else{if(r=="weekend"){C=new Date();var H=C.getDay();
var B=H;if(H>0&&H<=5){H=5-H;B=H+2;}else{if(H==0){B=0;}else{B=1;}H=0;}C.setDate(C.getDate()+H);
F=new Date();F.setDate(F.getDate()+B);}}}}var E=new SimpleDateFormat("yyyy-MM-dd'T'00:00:00'Z");
var I=E.format(C);var J=new SimpleDateFormat("yyyy-MM-dd'T23:59:59'Z");
var K=J.format(F);var A=n;jQuery.getJSON(x+"/events/?startDate="+I+"&endDate="+K+"&categories="+A+"&jsoncallback=?",function(L){if(L.items.length>0){jQuery("#woSearchResult").empty();
jQuery("#woSearchResult").append("<h2>S&oslash;keresultat</h2>");jQuery.each(L.items,function(M,N){var O='<div class="woSearchItem">';
O+='<div class="woTitle"><a href="${publication.url}?navigate=event&eventId='+N.eventId+'">'+N.eventName+"</a></div>";
O+='<div class="woDateTime">'+N.eventDate+", kl "+N.startTime+" - "+N.endTime+"</div>";
O+='<div class="woVenue">'+N.venueName+"</div>";O+='<div class="woCat">'+N.categories+"</div>";
O+="</div>";jQuery("#woSearchResult").append(O);});}else{jQuery("#woSearchResult").empty();
jQuery("#woSearchResult").append("<h2>S&oslash;keresultat</h2>");jQuery("#woSearchResult").append("<strong>Fant ingen hendelser!</strong>");
}});}},destroy:function(){$=null;}};}});
/*!



 resources js widgets contentSearch navigators.js



*/
mno.core.register({id:"widget.contentSearch.navigators",creator:function(a){function c(){var d=a.$;
if(a.container){a.container.find("li.leaf a").click(function(g){var f=d(this);
g.preventDefault();a.notify({type:"contentSearch-navigator-change",data:{param1:f.attr("data-navigate-param1"),param2:f.attr("data-navigate-param2"),e:g}});
return false;});}a.container.find(".navigator").mnoTree();a.container.show(250);
}function b(){}return{init:c,destroy:b};}});
/*!



 resources js widgets contentSearch searchbox.js



*/
mno.core.register({id:"widget.contentSearch.searchbox",creator:function(c){var b=function(){var j=c.container.find("#search_form_breadcrumbs");
var h=c.container.find("#search_form_old_breadcrumbs");if(j.length===1&&h.length===1){j.val(h.val());
return true;}return false;};c.listen({"contentSearch-navigator-change":function(h){mno.core.log(1,h);
var j=c.container.find("#search_form_breadcrumbs");if(j.length===1){if(j.length===1){j.val(h.param1+h.param2);
}else{j.val(h.param2);}}h.e.stopPropagation();h.e.preventDefault();c.container.submit();
},"contentSearch-paging-change":function(k){var j=c.container.find("#search_form_offset"),h=c.container.find("#search_form_breadcrumbs");
h.val(Base64.decode(h.val()));j.val(k.param1);c.container.submit();}});
var f=function(){var h=c.container;if(!c.container.find("input[type='radio'][value='exact_from']").attr("checked")){c.container.find("#date_from").val("");
c.container.find("#date_to").val("");}if(c.container.find("#date_to").val()===""){c.container.find("#chosen_to").attr("checked",false);
}if(!c.container.find("#chosen_to").attr("checked")){c.container.find("#date_to").val("");
}var n=c.container.find("#search_form_breadcrumbs");var r=c.container.find("#search_form_similar_to");
var j="";if(n.length===1){j=String(n.val());j=Base64.encode(j);n.val(j);
}var w="";if(r.length===1){w=String(r.val());}var s=j.length+w.length;var o=window.navigator.appName;
var l=String(o);if(s>1700&&l==="Microsoft Internet Explorer"){h.attr("method","post");
}var u=c.container.find("#search_form_old_similar_to");if(u.length===1){u.remove();
}var q=c.container.find("#search_form_old_breadcrumbs");if(q.length===1){q.remove();
}var k=c.container.find("#search_form_old_similar_type");if(k.length===1){k.remove();
}var v=c.container.find("#previous_sort_by");if(v.length===1){v.remove();
}var t=c.container.find("#previous_sort_by");if(t.length===1){t.remove();
}};var d=function(){var h="date_from",q="date_to",o="time",n=mno.utils.params,l=n.getParameter(h),k=n.getParameter(q),j=n.getParameter(o);
if(typeof l==="string"&&l!==""){c.container.find("#date_from").val(l);c.container.find("#chosen_from").attr("checked",true);
if(typeof k==="string"&&k!==""){c.container.find("#chosen_to").attr("checked",true);
c.container.find("#date_to").val(k);}c.container.find("#advSearchToggle").click();
}else{if(typeof j==="string"){c.container.find("input[type='radio'][value='"+j+"']").attr("checked",true);
c.container.find("#advSearchToggle").click();}}};function g(){var k=c.container.find("#date_from,#date_to"),n=c.container.find("#date_to"),j=c.container.find("#chosen_from"),l=c.container.find("#chosen_to"),h=false;
c.container.submit(f);c.container.find("#search_form button").click(function(){c.container.submit();
return false;});c.container.find("#advSearchToggle").bind("click",function(o){if(h===false){c.container.find("#advancedSearch").show(250);
h=true;}else{c.container.find("#advancedSearch").hide(250);$("#chosen_from").trigger("click");
$("#date_from").val("");h=false;}o.preventDefault();});k.bind("click",function(){j.attr("checked",true);
$(this).next(".ui-datepicker-trigger").click();});k.bind("change",function(){j.attr("checked",true);
n.attr("disabled",false);});n.bind("change",function(){l.attr("checked",true);
});l.bind("change",function(){if(!l.attr("checked")&&n.val()!==""){n.attr("disabled",true);
}else{n.attr("disabled",false);}});n.bind("change",function(){if(n.val()===""){l.attr("checked",false);
}});d();a();}function a(){$("form").submit(function(){var h=c.container.find("#search_form_query");
if(h.val()!=""){c.container.find("#sectionName")[0].value="";}});}function e(){}return{init:g,destroy:e};
}});
/*!



 resources js widgets contentSearch searchresult.js



*/
mno.core.register({id:"widget.contentSearch.searchresult",creator:function(a){function c(){var d=a.$;
d("a[data-paging-param]").click(function(){var e=d(this);a.notify({type:"contentSearch-paging-change",data:{param1:e.attr("data-paging-param")}});
return false;});a.container.find(".paging").mnoTree();a.container.show(250);
}function b(){}return{init:c,destroy:b};}});
/*!



 resources js widgets currencyCalculator article.js



*/
mno.core.register({id:"widget.currencyCalc.article",extend:["widget.currencyCalc.calculator"],creator:function(a){return{init:function(){if(a.container){this.helper(a);
}},destroy:function(){$=null;}};}});
/*!



 resources js widgets currencyCalculator calculator.js



*/
mno.core.register({id:"widget.currencyCalc.calculator",creator:function(a){function c(h){var k=h.find(" .fromC").val().split("_"),j=h.find(".toC").val().split("_"),f=k[1]!=="Ikketilgjengelig"?k[1]:false,g=k.length>3?k[2]+"."+k[3]:k[2],d=j[1]!=="Ikketilgjengelig"?j[1]:false,e=j.length>3?j[2]+"."+j[3]:j[2];
if(f>1){g=g/f;}if(d>1){e=e/d;}return{fromRate:g,toRate:e};}function b(f,e,d){return(Math.round(((f*e)/d)*100)/100).toString().replace(".",",");
}return{init:function(){},helper:function(d){var e=d.$;d.container.each(function(j,h){var g=e(this);
g.find("input, select").bind("keyup change",function(){var o=e(this).hasClass("currency")?e(this):e(this).parent().find("input.currency"),n=jQuery.trim(o.val().replace(",",".")),l=c(g);
if(o.hasClass("from")){e(".currency.to").val(b(n,l.fromRate,l.toRate));
}else{e(".currency.from").val(b(n,l.toRate,l.fromRate));}});var k=e(g).find(".calculate");
e(k).live("click",function(){var n=e(g).find(".amount");var r=f(e(n).val());
r=r.replace(",",".");if(r==""){e(this).find(".userMessage").text("Du må oppgi beløp");
e(this).find(".amount").focus();return false;}var t=e(g).find(" .fromC").val();
var u=e(g).find(".toC").val();var l=t.split("_")[1];var q=t.split("_")[2];
if(t.split("_").length>3){q=q+"."+t.split("_")[3];}var v=u.split("_")[1];
var o=ttoC.split("_")[1];if(u.split("_").length>3){o=o+"."+u.split("_")[3];
}if(q=="Ikketilgjengelig"||o=="Ikketilgjengelig"){e(g).find(".userMessage").text("Kurs ikke tilgjengelig");
}else{if(l>1){q=q/l;}if(v>1){o=o/v;}var s=(Math.round(((r*q)/o)*100)/100).toString().replace(".",",");
e(g).find(".userMessage").text("Vekslet beløp: "+s+" "+u.split("_")[0]);
}});e(g).find(".empty").live("click",function(){e(g).find(".userMessage").text("");
e(g).find(".amount").val("");});});function f(h){var g="";var j=0;for(i=0;
i<h.length;i++){if(h.charAt(i)!=" "||j>0){g+=h.charAt(i);if(h.charAt(i)!=" "){j=g.length;
}}}return g.substr(0,j);}},destroy:function(){$=null;}};}});
/*!



 resources js widgets currencyCalculator frontpage.js



*/
mno.core.register({id:"widget.currencyCalc.frontpage",extend:["widget.currencyCalc.calculator"],creator:function(a){return{init:function(){if(a.container){this.helper(a);
}},destroy:function(){$=null;}};}});
/*!



 resources js widgets currencyCalculator full.js



*/
mno.core.register({id:"widget.currencyCalc.full",extend:["widget.currencyCalc.calculator"],creator:function(a){return{init:function(){if(a.container){this.helper(a);
}},destroy:function(){$=null;}};}});
/*!



 resources js widgets currencyCalculator section.js



*/
mno.core.register({id:"widget.currencyCalc.section",extend:["widget.currencyCalc.calculator"],creator:function(a){return{init:function(){if(a.container){this.helper(a);
}},destroy:function(){$=null;}};}});
/*!



 resources js widgets disqus default.js



*/
var disqus_shortname="";
var disqus_identifier,disqus_url,disqus_developer=1,disqus_title;mno.core.register({id:"widget.disqus.default",creator:function(a){var b=a.$;
return{init:function(){if(typeof a.container!=="undefined"&&a.container!==null&&a.container.length>0){if((mno.model.article.source=="escenic-migration")&&(mno.publication.name=="sa"||mno.publication.name=="ap")){disqus_identifier=mno.model.article.sourceId;
}else{disqus_identifier=mno.model.article.id;}disqus_title=mno.model.article.TITLE;
disqus_url=window.location.href;disqus_shortname=(function(){try{return(typeof mno.publication.disqus.shortname!=="undefined"?mno.publication.disqus.shortname:"");
}catch(c){return"";}}());disqus_developer=(function(){try{return parseInt(typeof mno.publication.disqus.developer!=="undefined"?mno.publication.disqus.developer:1);
}catch(c){mno.core.log(2,"could not parse DISQUSDEVELOPER return 1 as default");
return 1;}}());if(disqus_shortname!==""){a.getScript({url:"http://"+disqus_shortname+".disqus.com/embed.js",callback:function(){}});
}else{mno.core.log(2,"disqus short name not set");}}},destroy:function(){}};
}});
/*!



 resources js widgets facebook default.js



*/
mno.core.register({id:"widget.facebook.default",creator:function(a){var b=a.$;
return{init:function(){if(a.container){var c=b("#debateInfo");var d={rulesUrl:a.model[0].rulesUrl};
a.render("widgets.facebook.views.debateInfo",d,function(e){c.empty();c.append(e);
});}},destroy:function(){}};}});
/*!



 resources js widgets jobAdListings categoryJobadsCombo.js



*/
mno.core.register({id:"widget.jobAdListings.categoryJobadsCombo",extend:["mno.utils.rubrikk"],creator:function(a){var d=this;
function f(n){if(n.message.records){var g=n.message.records,o=a.model[0].adCount,l=(g.length>=o)?o:g.length,k,j=this,h={adUrl:a.model[0].jobAdUrl,lisaLevel:j.lisaLevel,rubrikkUrl:this.rubrikkUrl,items:c(g,l),allJobsUrl:a.model[0].allJobsUrl};
if(a.container){a.render("widgets.jobAdListings.views.categoryJobadsCombo",h,function(q){a.container.append(q);
});}}}function c(n,g){var l=[];for(var j=0;j<g;j++){var h=n.length;if(h>0){var k=Math.floor(Math.random()*h);
l.push(n.splice(k,1)[0]);}}return l;}cbCategoryJobads=function(g){f.call(d.instance,g);
};function e(){if(a.model[0].categories){var h=a.model[0].categories;for(var g=0;
g<h.length;g++){a.getScript({url:this.jsonUrl+"categoryJobads_"+h[g].categoryId+".json"});
}}}function b(){}return{init:e,destroy:b};}});
/*!



 resources js widgets jobAdListings frontpageCompanies.js



*/
mno.core.register({id:"widget.jobAdListings.frontpageCompanies",extend:["mno.utils.rubrikk"],creator:function(a){var d=this;
function f(l){if(l.message.records){var j=l.message.records,h=a.model[0].countCompanies,g=a.model[0].countAds,k={adUrl:a.model[0].jobAdUrl,rubrikkUrl:this.rubrikkUrl,lisaLevel:this.lisaLevel,items:c(j,h,g),jobSectionUrl:a.model[0].jobSectionUrl};
if(a.container){a.render("widgets.jobAdListings.views.frontpageCompanies",k,function(n){a.container.append(n);
});}}}cbFrontpageCompanies=function(g){f.call(d.instance,g);};function c(h,j,v){var t=[];
for(var g=0;g<j;g++){var k=h.length;var x=Math.floor(Math.random()*k);var o=h.splice(x,1)[0];
var q=[];var s=o.jobAds;t.push(o);for(var l=0;l<v;l++){var n=s.length;if(n>0){var u=Math.floor(Math.random()*n);
var w=s.splice(u,1)[0];q.push(w);}}o.jobAds=q;}return t;}function e(){a.getScript({url:this.jsonUrl+"frontpageCompanies.json"});
}function b(){}return{init:e,destroy:b};}});
/*!



 resources js widgets jobAdListings jobbdirekte.js



*/
mno.core.register({id:"widget.jobAdListings.jobbdirekte",extend:["mno.utils.rubrikk"],forceStart:function(){return(window.location.href.indexOf("jobb")!==-1);
}(),creator:function(b){var f=this,a;var d={options:{speed:700,pause:4000,showItems:3,mousePause:true,height:0,isPaused:false,imgDirectory:"http://bt.oasfile.aftenposten.no/jobbdirekte/img/"},init:function(j){d.options=$.extend(d.options,j);
return this.each(function(){var l=$(this);l.css({overflow:"hidden",position:"relative"}).children("ul").css({position:"absolute",marginTop:"3px"});
l.height(d.options.height);var k=setInterval(function(){l.vTicker("moveUp");
},d.options.pause);if(d.options.mousePause){l.bind("mouseenter",function(){d.options.isPaused=true;
}).bind("mouseleave",function(){d.options.isPaused=false;});}});},moveUp:function(k){if(d.options.isPaused){return;
}var n=$(this).children("ul"),o=n.children("li:first").clone(true),j=n.children("li:first").outerHeight(true),l=d.options.speed;
n.animate({top:"-"+j+"px"},l,function(){n.children("li:first").remove();
n.css("top","0px");});o.appendTo(n);}};$.fn.vTicker=function(j){if(d[j]){return d[j].apply(this,Array.prototype.slice.call(arguments,1));
}else{if(typeof j==="object"||!j){return d.init.apply(this,arguments);}else{}}};
$.shuffle=function(l){for(var n,k,o=l.length;o;n=parseInt(Math.random()*o),k=l[--o],l[o]=l[n],l[n]=k){}return l;
};function e(n,l){var j=[],k="";if(n.ads.ad){for(i=0;i<n.ads.ad.length;
i++){if(n.ads.ad[i].logo){n.ads.ad[i].logo=d.options.imgDirectory+n.ads.ad[i].logo.substr(n.ads.ad[i].logo.lastIndexOf("=")+1)+".gif";
}j.push(n.ads.ad[i]);}b.render("widgets.jobAdListings.views.jobbdirekte",{len:n.ads.ad.length,items:j,xitiId:b.model[0].xitiId},function(o){b.container.find(".content").empty().html(o);
b.container.find(".list").vTicker({pause:2000,showItems:7,speed:1200,height:367});
});}}function h(j){a=j;if(j.ads.ad){$.shuffle(j.ads.ad);e(a);}}callJobbDirekte=function(j){h.call(f.instance,j);
};function g(){if(b.container){b.getScript({url:this.jsonUrl+"jobbdirekte.json"});
}}function c(){}return{init:g,destroy:c};}});
/*!



 resources js widgets jobAdListings latest.js



*/
mno.core.register({id:"widget.jobAdListings.latest",extend:["mno.utils.rubrikk"],creator:function(a){var d=this;
function f(k){if(k.message.records){var l=a.model[0].adCount,g=k.message.records,j=(g.length>=l)?l:g.length,h={adUrl:a.model[0].jobAdUrl,items:c(g,j),allJobsUrl:a.model[0].allJobsUrl};
if(a.container){a.render("widgets.jobAdListings.views.latest",h,function(n){a.container.append(n);
});}}}function c(n,g){var l=[];for(var j=0;j<g;j++){var h=n.length;if(h>0){var k=Math.floor(Math.random()*h);
l.push(n.splice(k,1)[0]);}}return l;}cbLatestJobsListAll=function(g){f.call(d.instance,g);
};function e(){a.getScript({url:this.jsonUrl+"jobLatestAll.json"});}function b(){}return{init:e,destroy:b};
}});
/*!



 resources js widgets jobAdListings mgmt.js



*/
mno.core.register({id:"widget.jobAdListings.mgmt",extend:["mno.utils.rubrikk"],creator:function(a){var d=this;
function f(n){if(n.message.records){var g=n.message.records,o=a.model[0].adCount,l=(g.length>=o)?o:g.length,k,j=this,h={adUrl:a.model[0].jobAdUrl,lisaLevel:j.lisaLevel,items:c(g,l),allJobsUrl:a.model[0].allJobsUrl};
if(a.container){a.render("widgets.jobAdListings.views.mgmt",h,function(q){a.container.append(q);
});}}}cbProfiledMgmtJobs=function(g){f.call(d.instance,g);};function c(n,g){var l=[];
for(var j=0;j<g;j++){var h=n.length;if(h>0){var k=Math.floor(Math.random()*h);
l.push(n.splice(k,1)[0]);}}return l;}function e(){a.getScript({url:this.jsonUrl+"profiledMgmtJobs.json"});
}function b(){}return{init:e,destroy:b};}});
/*!



 resources js widgets jobAdListings partners.js



*/
mno.core.register({id:"widget.jobAdListings.partners",extend:["mno.utils.rubrikk"],creator:function(a){var c=this;
function e(l){if(l.message.records){var f=l.message.records,n=a.model[0].adCount,k=(f.length>=n)?n:f.length,j,h=this,g={adUrl:a.model[0].jobAdUrl,lisaLevel:h.lisaLevel,rubrikkUrl:this.rubrikkUrl,xitiId:a.model[0].xitiId,items:f.slice(0,k),onlyLinks:a.model[0].onlyLinks,allJobsUrl:a.model[0].allJobsUrl};
if(a.container){a.render("widgets.jobAdListings.views.partners",g,function(o){a.container.append(o);
});}}}cbPartners=function(f){e.call(c.instance,f);};function d(){a.getScript({url:this.jsonUrl+"partners.json"});
}function b(){}return{init:d,destroy:b};}});
/*!



 resources js widgets jobAdListings profiled.js



*/
mno.core.register({id:"widget.jobAdListings.profiled",extend:["mno.utils.rubrikk"],creator:function(a){var d=this;
function f(n){if(n.message.records){var g=n.message.records,o=a.model[0].adCount,l=(g.length>=o)?o:g.length,k,j=this,h={adUrl:a.model[0].jobAdUrl,lisaLevel:j.lisaLevel,items:c(g,l),allJobsUrl:a.model[0].allJobsUrl};
if(a.container){if(a.model[0].noImages=="true"){a.render("widgets.jobAdListings.views.latest",h,function(q){a.container.append(q);
});}else{a.render("widgets.jobAdListings.views.profiled",h,function(q){a.container.append(q);
});}}}}function c(n,g){var l=[];for(var j=0;j<g;j++){var h=n.length;if(h>0){var k=Math.floor(Math.random()*h);
l.push(n.splice(k,1)[0]);}}return l;}cbProfiledJobs=function(g){f.call(d.instance,g);
};function e(){a.getScript({url:this.jsonUrl+"profiledJobs.json"});}function b(){}return{init:e,destroy:b};
}});
/*!



 resources js widgets jobAdListings profiledCompanies.js



*/
mno.core.register({id:"widget.jobAdListings.profiledCompanies",extend:["mno.utils.rubrikk"],creator:function(a){var c=this;
function e(l){if(l.message.records){var f=l.message.records,n=a.model[0].adCount,k=(f.length>=n)?n:f.length,j,h=this,g={adUrl:a.model[0].jobAdUrl,lisaLevel:h.lisaLevel,rubrikkUrl:this.rubrikkUrl,statAppend:(mno.publication.name!="ap")?"_"+mno.publication.name.toUpperCase():"",items:f.slice(0,k),allJobsUrl:a.model[0].allJobsUrl};
if(a.container){a.render("widgets.jobAdListings.views.profiledCompanies",g,function(o){a.container.append(o);
});}}}cbProfiledCompanies=function(f){e.call(c.instance,f);};function d(){a.getScript({url:this.jsonUrl+"profiledCompanies.json"});
}function b(){}return{init:d,destroy:b};}});
/*!



 resources js widgets jobAdListings recruiting.js



*/
mno.core.register({id:"widget.jobAdListings.recruiting",extend:["mno.utils.rubrikk"],creator:function(a){var d=this;
function f(l){if(l.message.records){var j=l.message.records,h=a.model[0].countCompanies,g=a.model[0].countAds,k={adUrl:a.model[0].jobAdUrl,rubrikkUrl:this.rubrikkUrl,lisaLevel:this.lisaLevel,statAppend:(mno.publication.name!="ap")?"_"+mno.publication.name.toUpperCase():"",items:c(j,h,g),jobSectionUrl:a.model[0].jobSectionUrl};
if(a.container){a.render("widgets.jobAdListings.views.recruiting",k,function(n){a.container.append(n);
});}}}cbRecruitingCompanies=function(g){f.call(d.instance,g);};function c(h,j,v){var t=h,k=t.length;
if(k>j){t.splice(j,k-j);}k=t.length;for(var g=0;g<k;g++){var q=[],o=t[g],s=o.jobAds;
for(var l=0;l<v;l++){var n=s.length;if(n>0){var u=Math.floor(Math.random()*n);
q.push(s.splice(u,1)[0]);}}o.jobAds=q;}return t;}function e(){a.getScript({url:this.jsonUrl+"recruitingCompanies.json"});
}function b(){}return{init:e,destroy:b};}});
/*!



 resources js widgets jobAdSearch jobad.js



*/
mno.core.register({id:"widget.jobAdSearch.jobad",extend:["mno.utils.rubrikk"],creator:function(a){var d=a.$;
var c=this;function f(n){var k=n.message.success&&typeof n.message.records!=="undefined";
if(k!==false&&n.message.records.length>0){k=n.message.records[0];var h=k.applicationType.applicationTypeName;
var o=(h=="MORE_INFO")?"Mer informasjon om stillingen":"S&oslash;k p&aring; stillingen";
var j=(a.model[0].isMobile==true)?"_MOBILE":"";j=(a.model[0].isMobile==true&&mno.publication.name=="ap")?"_MOBILE_AP":j;
var g=(a.model[0].isMobile==true)?a.model[0].max_image_width:466;var l={jobad:k,applicationTypeText:o,adUrl:a.model[0].jobbUrl,rubrikkUrl:this.rubrikkUrl,lisaLevel:this.lisaLevel,imgWidth:g,publicationNameUC:(mno.publication.name=="ap")?j+"":j+"_"+mno.publication.name.toUpperCase(),country:typeof k.company.companyAddress!=="undefined"?k.company.companyAddress.country.name.toLowerCase():"norge",time:new Date().getTime()};
if(a.container){a.render("widgets.jobAdSearch.views.jobad",l,function(q){a.container.empty();
a.container.append(q);});}}}cbJobAd=function(g){f.call(c.instance,g);};
function e(){if(a.container){var j=mno.utils.params,h="jobad.json?renderType=public&jobAdId="+j.getParameter("jobAdId")+"&cb=cbJobAd",g=this.rubrikkCacheUrl+h;
if(j.getParameter("rnd")){g=g+"&rnd="+j.getParameter("rnd");}a.getScript({url:g});
}}function b(){}return{init:e,destroy:b};}});
/*!



 resources js widgets jobAdSearch searchbox.js



*/
var cbJobCategories;
mno.core.register({id:"widget.jobAdSearch.searchbox",extend:["mno.utils.rubrikk"],creator:function(a){var d=a.$;
var c=this;var b=mno.utils.params.getParameter("categoryId");if(b.constructor===String){b=[b];
}else{if(!(b.constructor===Array)){b=[];}}function e(f){a.container.each(function(k,j){var s=d(this);
if(f.message.records){var u=d("#jobAdSearch-categoryList"),l=f.message.records.length,n=a.model[k];
if(typeof n!=="undefined"){var r={split:n.columns,splitNum:n.splitNum,jobbUrl:n.jobbUrl,topItems:[],otherItems:[],allCategoriesQString:""},o=n.hideEmptyCats,v=0,h=0,q="",g=false,k,t;
for(k=0;k<l;k++){t=f.message.records[k];t.categoryName=t.categoryName.replace("Informasjon / Kommunikasjon / Media","Informasjon / Kommunikasjon");
t.categoryName=t.categoryName.replace("IT / IKT / Telekommunikasjon","IT / Telekommunikasjon");
t.categoryName=t.categoryName.replace("Utdanning / Undervisning / Forskning","Utdanning/ Undervisning");
t.categoryName=t.categoryName.replace("Olje / Gass / Off-, On-shore / Maritim","Olje / Gass/ Off-, On-shore");
t.categoryName=t.categoryName.replace("Administrasjon / Kontor/ Personal","Administrasjon / Personal");
t.categoryName=t.categoryName.replace("H\345ndverk / Bygg / Anlegg / Mekanikk / Arkitekter","H\345ndverk / Bygg / Anlegg");
t.categoryName=t.categoryName.replace("Offentlige tjenester / Forvaltning","Offentlige tjenester");
r.allCategoriesQString+=(k===0?"?":"&")+"categoryId="+t.categoryId;t.checked=(b.indexOf(t.categoryId+"")!==-1?' checked="checked" ':"");
if(n.categoryIdList.indexOf(t.categoryId)!==-1){r.topItems.push(t);}else{if(!o||t.countedAds>0){if(b.indexOf(t.categoryId+"")!==-1){g=true;
}r.otherItems.push(t);}}}if(n.showCategories===undefined||n.showCategories==="true"){a.render("widgets.jobAdSearch.views.categories",r,function(w){u.append(w);
u.css("height","auto");s.find(".showCategories a").click(function(z){var x=d(this);
z.preventDefault();s.find(".other").show();var y=x.closest(".showCategories");
y.hide();y.siblings(".hideCategories").show();});s.find(".hideCategories a").click(function(z){var x=d(this);
z.preventDefault();s.find(".other").hide();var y=x.closest(".hideCategories");
y.hide();y.siblings(".showCategories").show();});if(g){s.find(".showCategories a").click();
}});}else{u.remove();}}}});}cbJobCategories=function(f){e.call(c.instance,f);
};return{init:function(){a.getScript({url:this.jsonUrl+"jobCategories.json"});
a.container.each(function(g,f){d("form#jobbSearch").bind("submit",function(h){var k=d('form#jobbSearch input[name="freetextsearch"]');
var j=escape(k.val());var l=k.attr("name");if(j==k.attr("placeholder")){k.val("");
}else{document.location.href=d(this).attr("action")+"?"+l+"="+j;return false;
}});});},destroy:function(){}};}});
/*!



 resources js widgets jobAdSearch searchresult.js



*/
mno.core.register({id:"widget.jobAdSearch.searchresult",extend:["mno.utils.rubrikk"],creator:function(k){var b=k.$,f=1,o=(k.model!==null&&k.model.length>0?k.model[0].pagesize:(function(){mno.core.log(2,"pagesize not set in widget.jobAdSearch.searchresult default 10");
return 10;}())),e=(typeof k.model[0]!=="undefined")?k.model[0].jobbUrl:"",a=mno.utils.params,d,g=b("#resultsWrapper");
function c(s){var u=Math.ceil(s/o),q=7,t=Math.ceil(f/q),x=(t-1)*q+1,r=t*q,v={olClass:"pager",items:[]},w;
if(u>1){for(w=x;w<=u&&w<=r;w++){if(w===f){v.items.push({value:'<span class="button active" title="Side '+w+'">'+w+"</span>"});
}else{v.items.push({value:'<a class="button" href="#'+w+'" title="Side '+w+'">'+w+"</a></li>"});
}}if(t>1){v.items.push({value:'<a class="button" href="#'+(x-q)+'" title="Forrige gruppe">Forrige gruppe</a>'});
}if((u/q)>t){v.items.push({value:'<a class="button" href="#'+(x+q)+'" title="Neste gruppe" class="f- 000">Neste gruppe</a>'});
}v.items.push({value:'<a class="button" href="#1" title="F&oslash;rste side">F&oslash;rste</a>'});
v.items.push({value:'<a class="button" href="#'+u+'" title="Siste side">Siste</a>'});
}return v;}function l(x){var v=x.SearchMessage;if(v.success===true){var w={items:[],olClass:"resultList withImg"},r=v.records,u,t="",q;
g.empty();for(var s=0;s<r.length;s++){u=r[s];t="",q=u.company;if(typeof q.companyLogos[0]!=="undefined"){t+='<img src="http://'+d.lisaLevel+".aftenposten.no/utils/img.php?src="+q.companyLogos[0].companyLogoPath+'&maxHeight=70&maxWidth=70" alt="'+q.name+'"/>';
}t+='<a class="searchresult-title" href="'+e+"?jobAdId="+u.jobAdId+"&adTitle="+u.adTitle+"&cName="+q.name+"&catText=&att="+u.adTeaserText.xmlCDataContent+'" title="Se utlysningstekst">'+u.adTitle+"</a>";
t+='<div class="companyName" itemprop="name">'+q.name+'</div><div class="f-small">'+u.validTo+"</div><p>"+u.adTeaserText.xmlCDataContent+"</p>";
w.items.push({attributes:'itemscope ="itemscope" itemtype="http://data-vocabulary.org/Organization"',value:'<div class="resultList-inner">'+t+"</div>"});
}k.render("mno.views.orderedList",w,function(z){var y=c(v.totalRecords);
if(y.items.length!==0){k.render("mno.views.orderedList",y,function(A){g.append(z);
g.append(A);});}else{g.append(z);}});}}function j(){var r=a.getAllParameters(),q=b("#freetextorder").val(),s="";
if(typeof r.categoryId!=="undefined"){if(r.categoryId.constructor===Array){s="&categoryId="+r.categoryId.join("&categoryId=");
}else{s="&categoryId="+r.categoryId;}}if(r.freetextsearch=="Søk"){r.freetextsearch="";
}k.getScript({url:d.rubrikkCacheUrl+"search/jobads.json?renderType=default&companyId="+(r.companyId||"")+"&specialCategoryId="+(r.specialCategoryId||"")+"&query="+(escape(r.freetextsearch)||"")+s+"&size="+o+"&siteId="+k.model[0].siteId+"&utf8=true&page="+f+"&order="+q,jsonP:l});
}function n(){if(k.container){d=this;j(f);b("#freetextorder").bind("change",j);
k.container.find(".pager a").live("click",function(s){var q=b(this).attr("href");
var r=q.substring(q.indexOf("#")+1,q.length);f=parseInt(r,10);j();s.preventDefault();
return false;});}}function h(){}return{init:n,destroy:h};}});
/*!



 resources js widgets list accordionList.js



*/
mno.core.register({id:"widget.list.accordionList",creator:function(a){var c=a.$;
function d(){c(".accordionContent").hide(0);a.container.each(function(){var e=c(this);
e.find(".accordionContent:eq(0)").show(0);c(".accordionHandle").bind("click",function(){var f=c(this).next();
e.find(".accordionContent").not(f).slideUp(250);f.slideDown(250);});});
}function b(){c=null;}return{init:d,destroy:b};}});
/*!



 resources js widgets list comments.js



*/
mno.core.register({id:"widget.list.comments",extend:["mno.utils.rubrikk"],creator:function(g){var d=this,c=0,h,e={},a={};
var b=g.$;h=function(r,s,t){r.ulClass="content withDate";r.aClass="aClass";
var o,w,v,x,y,q,z,n,l,k;try{k=parseInt(t.itemCount,10);}catch(u){mno.core.log(1,"failed to parse itemCount in widget.list.comments");
k=5;}window.$.each(r.response,function(B,A){if(B<k){try{n=A.createdAt.split("T")[0];
l=A.createdAt.split("T")[1];w=parseInt(n.split("-")[0],10);v=parseInt(n.split("-")[1],10);
x=parseInt(n.split("-")[2],10);y=parseInt(l.split(":")[0],10);q=parseInt(l.split(":")[1],10);
z=parseInt(l.split(":")[2],10);o=new Date(w,v,x,y,q,z);}catch(C){mno.core.log(1,"faled to parse date! Using standard javascript date insted in widget.list.comments");
o=new Date();}A.createdAtTime=(o.getHours()<10?("0"+o.getHours()):o.getHours())+":"+(o.getMinutes()<10?("0"+o.getMinutes()):o.getMinutes());
}else{delete r.response[B];}});r.response=r.response.slice(0,k);g.render("widgets.list.views.comments",r,function(A){if(s){if(typeof mno.core.utils!=="undefined"&&typeof mno.core.utils.innerShiv==="function"){s.find(".content").html(b(mno.core.utils.innerShiv(A.html(),false)));
}else{s.find(".content").html(A);}}});};function j(){var k=this;try{if(g.container!==null&&g.container.length>0){g.container.each(function(q,o){var n=g.model[q],r=n.jsonUrl,s=b(this);
mno.callbacks.disqusMostCommented=function(t){h(t,s,n);};g.getScript({url:r});
});}}catch(l){mno.core.log(3,l);}}function f(){}return{init:j,destroy:f};
}});
/*!



 resources js widgets list detailed.js



*/
mno.core.register({id:"widget.list.detailed",extend:["mno.utils.flash"],creator:function(a){var d=a.$;
var b;function e(){b=this.showFlash;if(a.container){a.container.each(function(h,g){var f=a.model[h];
if(f.storiesWithFlash!==undefined){jQuery.each(f.storiesWithFlash,function(k,l){jQuery.each(l,function(j,n){b(n[0]);
});});}});}}function c(){d=null;}return{init:e,destroy:c};}});
/*!



 resources js widgets list posts.js



*/
mno.core.register({id:"widget.list.posts",extend:["mno.utils.rubrikk"],creator:function(g){var d=this,c=0,h,e={},a={};
var b=g.$;h=function(r,s,t){var o,w,v,x,y,q,z,n,l,k;try{k=parseInt(t.itemCount,10);
}catch(u){mno.core.log(1,"failed to parse itemCount in widget.list.posts");
k=5;}window.$.each(r.response,function(B,A){if(B<k){try{n=A.createdAt.split("T")[0];
l=A.createdAt.split("T")[1];w=parseInt(n.split("-")[0],10);v=parseInt(n.split("-")[1],10);
x=parseInt(n.split("-")[2],10);y=parseInt(l.split(":")[0],10);q=parseInt(l.split(":")[1],10);
z=parseInt(l.split(":")[2],10);o=new Date(w,v,x,y,q,z);}catch(C){mno.core.log(1,"faled to parse date! Using standard javascript date insted in widget.list.posts");
o=new Date();}A.createdAtTime=(o.getHours()<10?("0"+o.getHours()):o.getHours())+":"+(o.getMinutes()<10?("0"+o.getMinutes()):o.getMinutes());
}else{delete r.response[B];}});r.response=r.response.slice(0,k);r.listHeight=t.listHeight;
g.render("widgets.list.views.posts",r,function(B){if(s){var A=B.find(".message");
s.append(B);}s.find(".message").hover(function(C){b(this).addClass("scroll");
},function(C){b(this).removeClass("scroll");});});};function j(){var k=this;
try{if(g.container!==null&&g.container.length>0){g.container.each(function(q,o){var n=g.model[q],r=n.jsonUrl,s=b(this);
mno.callbacks.disqusLatestPosts=function(t){h(t,s,n);};g.getScript({url:r});
});}}catch(l){mno.core.log(3,l);}}function f(){}return{init:j,destroy:f};
}});
/*!



 resources js widgets list simple.js



*/
mno.core.register({id:"widget.list.simple",creator:function(a){return{init:function(){},destroy:function(){}};
}});
/*!



 resources js widgets list tabList.js



*/
mno.core.register({id:"widget.list.tabList",creator:function(a){var c=a.$;
function d(){if(a.container){a.container.each(function(f,e){var e=c(e);
e.find("ul.tabs a").click(function(k){k.preventDefault();var j=c(this),h=j.attr("href"),g="."+h.replace("#","");
e.find("ul.tabs li").removeClass("ui-state-active");j.closest("li").addClass("ui-state-active");
e.find(".content").addClass("ui-tabs-hide");e.find(g).removeClass("ui-tabs-hide");
});});}}function b(){c=null;}return{init:d,destroy:b};}});
/*!



 resources js widgets list videoArchive.js



*/
mno.core.register({id:"widget.list.videoArchive",creator:function(c){function g(){b();
a();}function d(k,l){var j=c.container.find(".videos");j.css({"background-image":"url(/skins/global/gfx/loader.gif)","background-position":"center","background-repeat":"no-repeat"});
jQuery.ajax({type:"GET",url:mno.publication.rel+"template/widgets/list/controller/videoArchive.jsp",cache:false,data:"paging="+k+"&section="+l+"&ajax=true",success:function(n){h(n);
},error:function(n,q,o){mno.core.log(1,"error: "+q+" "+o);}});}function h(j){c.container.find(".paging").remove();
c.container.find(".videos").replaceWith(j);}function f(){return c.container.find(".videos")[0].id;
}function b(){c.container.find(".paging a").live("click",function(){c.container.find(".paging a").removeClass("active");
$(this).addClass("active");var j=$(this).attr("id");d(j,f());return false;
});}function a(){c.container.find(".categories a").live("click",function(){c.container.find(".categories a").removeClass("active");
$(this).addClass("active");var j=$(this).attr("id");d(1,j);$(this).parent().addClass(j);
return false;});}function e(){}return{init:g,destroy:e};}});
/*!



 resources js widgets map default.js



*/
mno.core.register({id:"widget.map.default",creator:function(b){function e(){var f=this;
b.getScript({url:"http://maps.google.com/maps/api/js?sensor=false&async=2&v=3",callbackVar:"callback",jsonP:function(){b.notify({type:"gapiReady",data:true});
}});b.listen({gapiReady:function(){f.helper(b);}});}function a(j,l,f,h){try{var g={zoom:l!==null&&l!==""?parseInt(l,10):10,center:new google.maps.LatLng(j.positionData[0].point.lat,j.positionData[0].point.lng),mapTypeId:f,mapTypeControl:true,mapTypeControlOptions:{mapTypeIds:[google.maps.MapTypeId.ROADMAP,google.maps.MapTypeId.SATELLITE,google.maps.MapTypeId.TERRAIN,google.maps.MapTypeId.HYBRID],position:google.maps.ControlPosition.TOP_RIGHT,style:google.maps.MapTypeControlStyle.DROPDOWN_MENU}};
return new google.maps.Map(h,g);}catch(k){mno.core.log(3,"widgets/map/default.js at initMap stack"+k.stack);
}}function d(f){var h=f.$,j=window.jQuery;var g={printMarkes:function(n,q,k){try{var s,r=[],l=[];
if(typeof n.articles!=="undefined"){j.each(n.articles,function(u,t){l=l.concat(t.positionData);
});}else{l=n.positionData;}j.each(l,function(u,v){if(typeof v.locInfo!=="undefined"){s=new google.maps.LatLng(v.point.lat,v.point.lng);
var t=new google.maps.Marker({position:s,map:q,title:v.locInfo.address,icon:k});
if(typeof v.locInfo!=="undefined"&&typeof v.locInfo.label!=="undefined"&&v.locInfo.label.length>0){var w=new google.maps.InfoWindow({content:v.locInfo.label});
google.maps.event.addListener(t,"click",function(){w.open(q,t);});}else{if(typeof v.locInfo!=="undefined"&&typeof v.locInfo.articleTitle!=="undefined"&&typeof v.locInfo.articleUrl!=="undefined"){var w=new google.maps.InfoWindow({content:(typeof v.locInfo.articleImg!=="undefined"&&v.locInfo.articleImg!==null&&v.locInfo.articleImg.length>0?'<div><a href="'+v.locInfo.articleUrl+'"><img src="'+v.locInfo.articleImg+'" alt="'+v.locInfo.articleTitle+'" /></a><div>':"")+'<div><a href="'+v.locInfo.articleUrl+'">'+v.locInfo.articleTitle+"</a></div>"});
google.maps.event.addListener(t,"click",function(){w.open(q,t);});}}if(typeof v.locInfo!=="undefined"&&typeof v.locInfo.articleUrl!=="undefined"){t.articleUrl=v.locInfo.articleUrl;
}else{t.articleUrl=null;}if(typeof v.locInfo!=="undefined"&&typeof v.locInfo.articleTitle!=="undefined"){t.title=v.locInfo.articleTitle;
}else{if(typeof v.locInfo!=="undefined"&&typeof v.locInfo.label!=="undefined"){t.title=v.locInfo.label;
}else{t.title=null;}}r.push(t);}});return r;}catch(o){mno.core.log(3,"widgets/map/default.js at printmarkers stack"+o.stack);
}},initClustring:function(s,r,t,k,n){try{var q=new MarkerClusterer(r,s,{styles:n,zoomOnClick:false});
var l;google.maps.event.addListener(q,"clusterclick",function(u){var x="";
var w;var v=u.getMarkers();x=x+="<table>";var y=3;if(v.length<y){y=v.length;
}for(w=0;w<y;w++){x=x+'<tr><td><img src="'+k+'" /></td><td>'+(v[w].articleUrl!==null?'<a class="goToArticle" href="'+v[w].articleUrl+'">'+v[w].title+"</a>":'<a class="clusterZoomIn" href="#">'+v[w].title+"</a>")+"</td></tr>";
}x=x+"</table>";if(v.length>y){x=x+"<div>"+(v.length-y)+" andre punkt</div>";
}x=x+'<div><a class="clusterZoomIn" href="/">Zoom inn</a></div>';var z=new google.maps.MVCObject();
z.set("position",u.getCenter());l=new google.maps.InfoWindow();l.setContent(x);
l.open(r,z);h("a.clusterZoomIn").unbind("click");h("a.clusterZoomIn").live("click",function(){l.close();
r.setZoom(r.getZoom()+2);r.setCenter(u.getCenter());return false;});});
}catch(o){mno.core.log(3,"widgets/map/default.js at initclustring stack"+o.stack);
}}};if(f.container){f.container.each(function(q,r){var y=h(r);var l,n,u="",v,t,A,x=google.maps.MapTypeId.ROADMAP,z=[{height:23,url:v,width:39,backgroundPosition:"0px 0px"}],s=f.model[q],k;
if(s!==null){x=((typeof s.mapTypeId!=="undefined"&&s.mapTypeId!==null)?google.maps.MapTypeId[s.mapTypeId]:google.maps.MapTypeId.ROADMAP);
if(s.type==="widget_map"||s.type==="widget_storyContent"){l=s.AJAXSOURCE;
u=s.ICONURL;v=s.CLUSTERICONURL;n=parseInt(s.ZOOMLEVEL!==""?s.ZOOMLEVEL:10,10);
t=s.CLUSTEREDMARKERS;z=[{height:23,url:v,width:40}];}else{if(s.type==="widget_trafficMap"){l=s.AJAXSOURCE;
u=s.ICONURL;v=s.CLUSTERICONURL;n=parseInt(s.ZOOMLEVEL!==""?s.ZOOMLEVEL:10,10);
t=s.CLUSTEREDMARKERS;z=[{height:34,url:v,width:20}];}}if(s.type==="widget_slideshow"||s.type==="widget_storyContent"||s.type==="widget_map"||s.type==="widget_mobileStoryContent"){u=(typeof s.mapData!=="undefined"?s.mapData.iconUrl:s.iconUrl);
v=(typeof s.mapData!=="undefined"?s.mapData.clusterIconUrl:s.clusterIconUrl);
n=(typeof s.mapData!=="undefined"?parseInt(s.mapData.zoomLevel!==""?s.mapData.zoomLevel:10,10):parseInt(s.zoomLevel!==""?s.zoomLevel:10,10));
t=(typeof s.mapData!=="undefined"?s.mapData.clusteredMarkers:(function(){try{return Boolean(s.clusteredMarkers);
}catch(B){return false;}}()));x=(typeof s.mapData!=="undefined"?((typeof s.mapData.mapTypeId!=="undefined"&&s.mapData.mapTypeId!==null)?google.maps.MapTypeId[s.mapData.mapTypeId]:google.maps.MapTypeId.ROADMAP):((typeof s.mapTypeId!=="undefined"&&s.mapTypeId!==null)?google.maps.MapTypeId[s.mapTypeId]:google.maps.MapTypeId.ROADMAP));
var o,w=false;z=[{height:23,url:v,width:40,backgroundPosition:"0px 0px"}];
if(typeof s.articles!=="undefined"&&s.articles.length>0){k=a(s.articles[0],n,x,r);
o=g.printMarkes(s,k,u);}else{if(typeof s.mapData!=="undefined"&&s.mapData.positionData.length>0){k=a(s.mapData,n,x,r);
o=g.printMarkes(s.mapData,k,u);}}if(t){g.initClustring(o,k,v,u,z);}}else{j.ajax({url:l,type:"POST",success:function(B){var C,D;
if(B!==null&&typeof B.articles!=="undefined"&&B.articles.length>0){C=a(B.articles[0],n,x,r);
D=g.printMarkes(B,C,u);}else{if(B!==null&&B.positionData.length>0){C=a(B,n,x,r);
D=g.printMarkes(B,C,u);}}if(t){g.initClustring(D,C,v,u,z);}},error:function(B,D,C){mno.core.log(3,"Error while calling map in widget/map/default.js jXHR: "+B+", textStatus: "+D+", errorThrown: "+C);
}});}f.listen({mapResize:function(){google.maps.event.trigger(k,"resize");
}});}});}}function c(){}return{init:e,helper:d,initMap:a,destroy:c};}});
/*!



 resources js widgets minimizedFrontpagePart default.js



*/
mno.core.register({id:"widget.minimizedFrontpagePart.default",creator:function(a){var b,d=typeof document.body.style.zoom!=="undefined";
function e(h,g,f){jQuery.ajax({type:"GET",url:b+"?service=loadLevel&fromLevel="+g+"&toLevel="+f,success:function(j){c(h,j);
},error:function(j,l,k){mno.core.log(1,"error: "+l+" "+k);}});}function c(h,g){h.full.width(380);
h.full.append(g);var j=h.full.find(".gridRow");j.addClass("span10");var f=0;
j.each(function(){var k=$(this).height()*0.4;$(this).wrap('<div style="height:'+k+'px;overflow:hidden;margin-bottom:5px"></div>');
f+=k;if(d===true){$(this).wrapInner('<div class="ieZoom"></div>');}});h.full.height(f);
j.addClass("squeezeToFit4Cols");h.full.css("overflow","hidden");h.y2=h.full.offset().top+h.full.height();
}return{init:function(){a.container.each(function(j,h){var g=a.model[j],n=$(this),f=mno.features.transform,k=n.find(".content"),o=k.offset(),l={full:k,x1:o.left,x2:o.left+k.width(),y1:o.top,y2:o.top+k.height()};
b=g.pubUrl;if(f!==false||d===true){e(l,g.startLevel,g.endLevel);}});},destroy:function(){$=null;
}};}});
/*!



 resources js widgets mnopolarisAd placement.js



*/
mno.core.register({id:"widget.mnopolarisAd.placement",creator:function(a){function c(){a.listen({leftAdInserted:function(d){if($("window").width()<=1220){$("#viewport").css("width","980px");
}else{$("#viewport").css("width","1200px");}}});}function b(){}return{init:c,destroy:b};
}});
/*!



 resources js widgets moodboard default.js



*/
mno.core.register({id:"widget.moodboard.default",creator:function(a){function d(f,j,v){if(typeof j==="undefined"){mno.core.log(1,"Moodboard missing model");
return false;}var H=j.scaleObjects,B=j.siteId||mno.publication.name,h=j.scale,z=j.objectId||mno.model.article.id,t=j.groupid||5,e=j.moodBoardRatingResultUrl,F=j.moodBoardVotingUrl,C="APURsite_"+B+"__gi_"+t+"__oi_"+z+"__s_"+h,G=j.template||"widgets.moodboard.views.moodboard",w,u=new Image,E=new Image;
u.src="/skins/global/gfx/moodboard/star-on.png";E.src="/skins/global/gfx/moodboard/star-off.png";
var n=function(L,N,K){if(L.result==="Error"){if(L.err_code==="ERR_SEVERAL_VOTE_ATTEMPT"){alert("Du kan bare stemme en gang -");
}return;}if(N===true){g(K);}if(G==="widgets.moodboard.views.moodboard"){var O=L.count,I,Q=0;
for(var J in H){for(var M in L.items){if(H[J].scaleValue===L.items[M].ratingValue){H[J].resultItem=L.items[M];
I=L.items[M].count;if(I>Q){Q=I;}}}}f.render(G,{items:H,totalCount:O,userRatingValue:x(1)},function(S){v.html(S);
if(x(1)===null){var R=function(){var U=0,T=v.find(".label").length-1;return function(){var V=v.find(".label").eq(U),W=V.attr("class").replace("label","");
v.find(".inlineMood").html('<span class="'+W+'">'+V.text()+"</span>");U=(U===T)?0:U+1;
w=setTimeout(R,2000);};}();v.hover(function(){clearTimeout(w);},function(){R();
});R();v.find(".label").hover(function(){var U=$(this),T=U.attr("class").replace("label","");
v.find(".inlineMood").html('<span class="'+T+'">'+U.text()+"</span>");},function(){v.find(".inlineMood").html("......");
});}});}else{if(G==="widgets.moodboard.views.userrating"){I=(L.count!="")?L.count:0;
var P={itemCount:I,totalUserRatingAvgValue:L.totalUserRatingAvgValue,starOff:E,id:z};
f.render(G,P,function(S){v.html(S);if(P.totalUserRatingAvgValue!=undefined){D(P.totalUserRatingAvgValue,z);
}var R=jQuery.cookie(C);if(R!==null){r(x(1),z);}});}}};var D=function(L,J){for(var I=1;
I<=L;I++){var K=$("img#"+J+"_usrrat_"+I)[0];$("img#"+J+"_usrrat_"+I)[0].src=u.src;
}};var r=function(I,K){for(var J=1;J<=I;J++){$("img#"+K+"_userstar_"+J)[0].src=u.src;
}};var s=function(J,K){var I=jQuery.cookie(C);if(I!==null){return;}A(J,5);
y(J);return false;};var y=function(K,L){var I=jQuery.cookie(C);if(I!==null){return;
}for(var J=1;J<=L;J++){$("#"+K+"_userstar_"+J)[0].src=u.src;}};var A=function(J,K){for(var I=1;
I<=K;I++){$("#"+J+"_userstar_"+I)[0].src=E.src;}};var g=function(I){jQuery.cookie(C,new Date().getTime()+";RV"+I,{expires:1095,path:"/"});
};var x=function(I){var J=k();return J===null?null:J[I];};var k=function(){var I=jQuery.cookie(C);
return I==null?null:I.split("RV");};if(G!==undefined&&G==="widgets.moodboard.views.moodboard"){v.delegate(".barChartBar","click",function(){v.unbind("mouseenter mouseleave");
v.find(".label").unbind("mouseenter mouseleave");if(w!==undefined){clearTimeout(w);
}var I=$(this).attr("data-id");l(z,B,I);});}if(G!==undefined&&G==="widgets.moodboard.views.userrating"){v.delegate("#"+z+"_userLink_1","mouseover",function(){y(z,1);
});v.delegate("#"+z+"_userLink_1","mouseout",function(){s(z,1);});v.delegate("#"+z+"_userLink_1","click",function(){l(z,B,1);
});v.delegate("#"+z+"_userLink_2","mouseover",function(){y(z,2);});v.delegate("#"+z+"_userLink_2","mouseout",function(){s(z,2);
});v.delegate("#"+z+"_userLink_2","click",function(){l(z,B,2);});v.delegate("#"+z+"_userLink_3","mouseover",function(){y(z,3);
});v.delegate("#"+z+"_userLink_3","mouseout",function(){s(z,3);});v.delegate("#"+z+"_userLink_3","click",function(){l(z,B,3);
});v.delegate("#"+z+"_userLink_4","mouseover",function(){y(z,4);});v.delegate("#"+z+"_userLink_4","mouseout",function(){s(z,4);
});v.delegate("#"+z+"_userLink_4","click",function(){l(z,B,4);});v.delegate("#"+z+"_userLink_5","mouseover",function(){y(z,5);
});v.delegate("#"+z+"_userLink_5","mouseout",function(){s(z,5);});v.delegate("#"+z+"_userLink_5","click",function(){l(z,B,5);
});}function l(I,M,K){var L=jQuery.cookie(C);if(L!=null){alert("Du kan kun stemme en gang");
return;}var N="siteId="+M+"&s="+h+"&oi="+I+"&gi="+t+"&rv="+K;var J=F+"?"+N+"&cb=?";
jQuery.ajax({type:"GET",url:J,cache:true,dataType:"jsonp",success:function(O){n(O,true,K);
},error:function(O,Q,P){mno.core.log(1,"error: "+Q+" "+P);}});}var o="siteId="+B+"&s="+h+"&oi="+z+"&gi="+t;
var q=e+"?"+o+"&cb=?";jQuery.ajax({type:"GET",url:q,cache:true,dataType:"jsonp",success:function(I){n(I,false,null);
},error:function(I,K,J){mno.core.log(1,"error: "+K+" "+J);}});}function c(){var e=this;
if(a.container){a.container.each(function(h,g){var f=a.model[h];e.initMoodBoard(a,f,$(this));
});}}function b(){$=null;}return{init:c,initMoodBoard:d,destroy:b};}});
/*!



 resources js widgets moodboard list.js



*/
mno.core.register({id:"widget.moodboard.list",creator:function(a){return{init:function(){a.container.each(function(e,d){var c=a.model[e];
b(c,$(this));});function b(c,d){a.render("widgets.moodboard.views.list",{uniqueId:Math.ceil(Math.random()*100000),userRatings:c.userRatings,showAllTab:c.showAllTab,showRvTabs:c.showRvTabs},function(e){d.append(e);
});}},destroy:function(){$=null;}};}});
/*!



 resources js widgets multimediaContent default.js



*/
mno.core.register({id:"widget.multimediaContent.default",extend:["mno.utils.flash"],creator:function(a){function c(){var d=this.showFlash;
if(a.container){a.container.each(function(g,f){var e=a.model[g];if(e.flashContent!==undefined){if($("#"+e.flashContent.elementId)!==undefined){$("#"+e.flashContent.elementId).parent().height(e.flashContent.height);
d(e.flashContent);}}});}}function b(){}return{init:c,destroy:b};}});
/*!



 resources js widgets netmeeting default.js



*/
mno.core.register({id:"widget.netmeeting.default",creator:function(g){function b(n){var l=1;
switch(n){case"bt":l=3;break;case"fvn":l=5;break;case"sa":l=4;break;default:l=1;
}return l;}function c(o,l,n){g.getScript({url:l+"/nettprat/nettprat.htm?id="+o+"&rnd="+Math.floor(Math.random()*1111111111111),jsonP:function(q){f(q,n);
}});}function d(q,t,l,r,o,s,n){mno.core.log(1,"checkstatus started url to call:"+r+"/nettprat/statusnettprat.htm?eaid="+q+"&id="+t+"&aType="+l+"&rnd="+Math.floor(Math.random()*1111111111111));
g.getScript({url:r+"/nettprat/statusnettprat.htm?eaid="+q+"&id="+t+"&aType="+l+"&rnd="+Math.floor(Math.random()*1111111111111),jsonP:function(u){mno.core.log(1,"checkstatus getscript callback started");
h(u,q,t,l,r,o,s,n);}});mno.core.log(1,"checkstatus getscript finisehd");
}function a(l,n,r,s,q,u,t,v){var o;if(l){o=setTimeout(function(){d(n,r,s,q,u,t,v);
},30000);}else{if(o!==undefined){clearTimeout(o);}}}function h(n,l,r,s,o,u,t,v){try{switch(n.status){case"OPEN":u.html("<strong>Hva mener du?</strong><br/>Still sp&oslash;rsm&aring;l n&aring;!");
a(true,l,r,s,o,u,t,v);break;case"LIVE":u.html("P&aring;g&aring;r n&aring;!");
c(r,o,t);a(true,l,r,s,o,u,t,v);break;case"PENDING":v.remove();u.html("<strong>Se sp&oslash;rsm&aring;l og svar!</strong><br/>Stengt for nye sp&oslash;rsm&aring;l. Nettgjest besvarer fortsatt sp&oslash;rsm&aring;l.");
c(r,o,t);a(true,l,r,s,o,u,t,v);break;case"INACTIVE":v.remove();u.html("");
a(false,l,r,s,o,u,t,v);c(r,o,t);break;case"FINISHED":v.remove();u.html("<strong>Se sp&oslash;rsm&aring;l og svar!</strong><br/>Nettpraten er avsluttet.");
c(r,o,t);a(false,l,r,s,o,u,t,v);break;default:v.remove();}u.addClass(n.status.toLowerCase());
}catch(q){mno.core.log(3,q);if(q.stack){mno.core.log(3,q.stack);}}}function f(q,o){var n,l=[];
q.sort(function(s,r){if(s.answertime>r.answertime){return -1;}else{if(s.answertime<r.answertime){return 1;
}else{return 0;}}});for(n in q){if(q.hasOwnProperty(n)){l.push({dt:q[n].question+'<span class="author">'+q[n].name+"</span>",dd:q[n].answer});
}}g.render("definitionList",l,function(r){o.html(r);});}function k(l){if(l!==undefined&&l["boolean"]){alert("Ditt sp\u00F8rsm\u00E5l er mottatt! Vi gj\u00F8r oppmerksom p\u00E5 at nettgjesten kun svarer p\u00E5 et utvalg av sp\u00F8rsm\u00E5lene ved stor p\u00E5gang.");
}else{alert("Det oppsto en feil!");}}function j(){if(g.container){g.container.each(function(o,q){mno.core.log(1,"inside each loop for every netmeeting widget");
var n=g.$,s=(g.model!==null&&typeof g.model.netmeetingENDPONT!=="undefined"?g.model.netmeetingENDPONT:"http://nettprat.aftenposten.no"),t,l,r=mno.publication.name,u=b(r),x=n(q),y=x.find(".sendQ"),w=x.find(".statusTxt"),v=x.find(".QA");
t=g.model[o].adminId;l=mno.model.article.id;d(l,t,u,s,w,v,y);y.live("submit",function(z){z.preventDefault();
if(!y.hasClass("error")){g.getScript({url:s+"/nettprat/postquestion.htm?id="+t+"&name="+encodeURIComponent(y.find("#alias").val())+"&email="+y.find("#mail").val()+"&msg="+encodeURIComponent(y.find("#QTextField").val())+"&rnd="+Math.floor(Math.random()*1111111111111),jsonP:k});
y[0].reset();}});});}}function e(){$=null;}return{init:j,destroy:e};}});
/*!



 resources js widgets notifications categories.js



*/
mno.core.register({id:"widget.notifications.categories",extend:["mno.utils.rubrikk"],creator:function(a){var c=this;
function e(j){if(j.message.records){var k=a.model[0].adCount,f=j.message.records,h=(f.length>=k)?k:f.length,g={adUrl:a.model[0].adUrl,sokUrl:a.model[0].sokUrl,items:f};
if(a.container){a.render("widgets.notifications.views.categories",g,function(l){a.container.append(l);
});}}}callbackNotificationCategories=function(f){e.call(c.instance,f);};
function d(){a.getScript({url:this.jsonUrlNotifications+"categories.json"});
}function b(){}return{init:d,destroy:b};}});
/*!



 resources js widgets notifications notificationAd.js



*/
mno.core.register({id:"widget.notifications.notificationAd",extend:["mno.utils.rubrikk"],creator:function(a){var d=a.$;
var c=this;function f(k){var g=k.message.success&&typeof k.message.records!=="undefined";
if(g!==false&&k.message.records.length>0){g=k.message.records[0];var h=(a.model[0].isMobile==true)?a.model[0].max_image_width:466;
var j={notificationad:g,lisaLevel:this.lisaLevel,imgWidth:h};if(a.container){a.render("widgets.notifications.views.notificationAd",j,function(l){a.container.empty();
a.container.append(l);});}}}cbNotificationAd=function(g){f.call(c.instance,g);
};function e(){if(a.container){var j=mno.utils.params,h="notificationad.json?renderType=public&notificationAdId="+j.getParameter("notificationAdId")+"&cb=cbNotificationAd",g=this.rubrikkCacheUrl+h;
if(j.getParameter("rnd")){g=g+"&rnd="+j.getParameter("rnd");}a.getScript({url:g});
}}function b(){}return{init:e,destroy:b};}});
/*!



 resources js widgets notifications notificationList.js



*/
mno.core.register({id:"widget.notifications.notificationList",extend:["mno.utils.rubrikk"],creator:function(a){var d=this;
function f(k){if(k.message.records){var l=a.model[0].adCount,g=k.message.records,j=(g.length>=l)?l:g.length,h={adUrl:a.model[0].adUrl,lisaLevel:this.lisaLevel,items:c(g,j)};
if(a.container){a.render("widgets.notifications.views.notificationList",h,function(n){a.container.append(n);
});}}}function c(n,g){var l=[];for(var j=0;j<g;j++){var h=n.length;if(h>0){var k=Math.floor(Math.random()*h);
l.push(n.splice(k,1)[0]);}}return l;}callbackNotificationList=function(g){f.call(d.instance,g);
};function e(){a.getScript({url:this.jsonUrlNotifications+"list.json"});
}function b(){}return{init:e,destroy:b};}});
/*!



 resources js widgets notifications searchresult.js



*/
mno.core.register({id:"widget.notifications.searchresult",extend:["mno.utils.rubrikk"],creator:function(k){var b=k.$,f=1,o=(k.model!==null&&k.model.length>0?k.model[0].pagesize:(function(){mno.core.log(2,"pagesize not set in widget.notifications.searchresult default 10");
return 10;}())),e=(typeof k.model[0]!=="undefined")?k.model[0].adUrl:"",a=mno.utils.params,d,g=b("#resultsWrapper");
function c(s){var u=Math.ceil(s/o),q=7,t=Math.ceil(f/q),x=(t-1)*q+1,r=t*q,v={olClass:"pager",items:[]},w;
if(u>1){for(w=x;w<=u&&w<=r;w++){if(w===f){v.items.push({value:'<span class="button active" title="Side '+w+'">'+w+"</span>"});
}else{v.items.push({value:'<a class="button" href="#'+w+'" title="Side '+w+'">'+w+"</a></li>"});
}}if(t>1){v.items.push({value:'<a class="button" href="#'+(x-q)+'" title="Forrige gruppe">Forrige gruppe</a>'});
}if((u/q)>t){v.items.push({value:'<a class="button" href="#'+(x+q)+'" title="Neste gruppe" class="f- 000">Neste gruppe</a>'});
}v.items.push({value:'<a class="button" href="#1" title="F&oslash;rste side">F&oslash;rste</a>'});
v.items.push({value:'<a class="button" href="#'+u+'" title="Siste side">Siste</a>'});
}return v;}function l(x){var v=x.SearchMessage;if(v.success===true){var w={items:[],olClass:"resultList withImg"},r=v.records,u,t="",q;
g.empty();for(var s=0;s<r.length;s++){u=r[s];t="",q=u.company;if(typeof q.companyLogos[0]!=="undefined"){t+='<img src="http://'+d.lisaLevel+".aftenposten.no/utils/img.php?src="+q.companyLogos[0].companyLogoPath+'&maxHeight=70&maxWidth=70" alt=""/>';
}t+='<a class="searchresult-title" href="'+e+"?notificationAdId="+u.notificationAdId+'">'+u.adTitle+"</a>";
t+='<div class="companyName" itemprop="name">'+q.name+"</div>";t+='<div class="category">Kategori: '+u.categories[0].categoryName+"</div>";
t+='<div class="date">Gjelder til: '+u.validTo+"</div>";w.items.push({attributes:'itemscope ="itemscope" itemtype="http://data-vocabulary.org/Organization"',value:'<div class="resultList-inner">'+t+"</div>"});
}k.render("mno.views.orderedList",w,function(z){var y=c(v.totalRecords);
if(y.items.length!==0){k.render("mno.views.orderedList",y,function(A){g.append(z);
g.append(A);});}else{g.append(z);}});}}function j(){var r=a.getAllParameters(),q=b("#freetextorder").val(),s="";
if(typeof r.categoryId!=="undefined"){if(r.categoryId.constructor===Array){s="&categoryId="+r.categoryId.join("&categoryId=");
}else{s="&categoryId="+r.categoryId;}}if(r.query===undefined||r.query=="Søk"){r.query="";
}k.getScript({url:"http://rubrikk.aftenposten.no/onlineClassifieds/search/notificationads.json?renderType=default&query="+(escape(r.query)||"")+s+"&size="+o+"&utf8=true&page="+f+"&order="+q,jsonP:l});
}function n(){if(k.container){d=this;j(f);b("#freetextorder").bind("change",j);
k.container.find(".pager a").live("click",function(s){var q=b(this).attr("href");
var r=q.substring(q.indexOf("#")+1,q.length);f=parseInt(r,10);j();s.preventDefault();
return false;});}}function h(){}return{init:n,destroy:h};}});
/*!



 resources js widgets pagePreview default.js



*/
mno.core.register({id:"widget.pagePreview.default",creator:function(b){var a=b.container;
function d(){var h=$('<img src="" class="floatRight"/>'),g="http://www.bt.no/external/btfrontthumb/small_bt.png",f="http://www.bt.no/external/btfrontthumb/large_bt.png",k=mno.features.transition,j=a.width();
h.attr("src",g).bind("click",function(n){if(h.hasClass("largeImg")){if(k!==false){h.removeClass("largeImg").css("width",j+"px").attr("src",g);
}else{h.stop().removeClass("largeImg").animate({width:j+"px"},500,"easeInOutElastic",function(){h.attr("src",g);
});}}else{var l=new Image();l.src=f;if(k!==false){h.addClass("largeImg animate").css("width","980px");
jQuery(l).bind("load",function(){h.attr("src",f);});}else{h.stop().addClass("largeImg").animate({width:"980px"},250,"easeInOutElastic",function(){h.attr("src",f);
l=null;});}}return false;});a.append(h);a.append('<a class="previewLink" href="http://www.bt.no">G&aring; til siden</a>');
}function e(){d();}function c(){}return{init:e,destroy:c};}});
/*!



 resources js widgets pageTools article.js



*/
mno.core.register({id:"widget.pageTools.article",creator:function(a){var b=a.model[0];
function e(){var h=0,f=b.tools.length,g=[],j=[];while(f--){if(b.tools[f].indexOf("preferred")!==-1){j.push(f);
h++;}else{g[f]=b.tools[f];}}addthis.user.getPreferredServices(function(n){if(n.length){var l,k=b.counter==="true"?"_counter":"";
for(l=0;l<h;l++){if($.inArray(n[l],g)!==-1){h++;}else{g[j.shift()]=n[l];
}}a.render("widgets.pageTools.views.addthis"+k,g,function(o){a.container.append(o);
addthis.init();});}});}function d(){var f=[],g=0;a.getScript({url:"http://s7.addthis.com/js/250/addthis_widget.js#async=1",callback:e});
a.container.bind("click",function(){var l=1;var o=mno.publication.currentSectionId;
var k=mno.publication.id;var s="";var u="shared-news";var j=mno.model.article.id;
var r="article";var t=mno.model.article.TITLE;var h=window.location.href;
var n=new Date().getTime();t=encodeURIComponent(t);h=encodeURIComponent(h);
var q=mno.publication.url;q=mno.publication.loggerUrl+"?";q=q+"rt="+l;q=q+"&ctxId="+o;
q=q+"&pubId="+k;q=q+"&cat="+s;q=q+"&meta="+u;q=q+"&objId="+j;q=q+"&type="+r;
q=q+"&title="+t;q=q+"&url="+h;q=q+"&clientDT"+n;var v='<img src="'+q+'" border="0" alt="" width="1" height="1"/>';
a.container.append(v);});for(g in b.fontSize){f.push(g);}a.render("widgets.pageTools.views.fontSize",f,function(h){var j;
a.container.append(h);a.container.find(".font").each(function(){var k=$(this);
k.bind("click",function(){jQuery("body").css("font-size",b.fontSize[k.attr("id")]);
return false;});});});}function c(){}return{init:d,destroy:c};}});
/*!



 resources js widgets personalia list.js



*/
mno.core.register({id:"widget.personalia.list",creator:function(n){var d=n.$,h=1,r=(typeof n.model[0]!=="undefined")?n.model[0].personaliaAppUrl:"",j=(typeof n.model[0]!=="undefined")?n.model[0].personaliaAdLocation:"",a=(typeof n.model[0]!=="undefined")?n.model[0].personaliaAdType:"",c=(n.model!==null&&n.model.length>0?n.model[0].pagesize:(function(){mno.core.log(2,"pagesize not set in widget.personalia.list default 20");
return 20;}())),b=mno.utils.params,f,g=d("#listWrapper");function e(u){var w=Math.ceil(u/c),s=7,v=Math.ceil(h/s),z=(v-1)*s+1,t=v*s,x={olClass:"pager",items:[]},y;
if(w>1){for(y=z;y<=w&&y<=t;y++){if(y===h){x.items.push({value:'<span class="button active" title="Side '+y+'">'+y+"</span>"});
}else{x.items.push({value:'<a class="button" href="#'+y+'" title="Side '+y+'">'+y+"</a></li>"});
}}if(v>1){x.items.push({value:'<a class="button" href="#'+(z-s)+'" title="Forrige gruppe">Forrige</a>'});
}if((w/s)>v){x.items.push({value:'<a class="button" href="#'+(z+s)+'" title="Neste gruppe">Neste</a>'});
}x.items.push({value:'<a class="button" href="#1" title="F&oslash;rste side">F&oslash;rste</a>'});
x.items.push({value:'<a class="button" href="#'+w+'" title="Siste side">Siste</a>'});
}return x;}function o(t){if(t.message.records){g.empty();var s={items:t.message.records,appUrl:r,adLocation:j};
if(n.container){n.render("widgets.personalia.views.list",s,function(u){var v=e(t.message.totalRecords);
if(v.items.length!==0){n.render("mno.views.orderedList",v,function(w){g.append(u);
g.append(w);});}else{g.append(u);}});}}}function l(){var s,t=b.getAllParameters();
if(t.submit){s="search.htm?searchText="+(escape(t.searchText)||"")+"&adType="+t.adType+"&srchMode="+(t.srchMode||"");
if(t.srchMode==="adv"){s+="&date_from="+(t.date_from.replace(/\//g,".")||"")+"&date_to="+(t.date_to.replace(/\//g,".")||"");
}else{s+="&searchTime=365";}}else{s="listAds.htm?activeTab="+(t.adType||a);
}s+="&page="+h+"&size="+c+"&view=json";n.getScript({url:r+s,callbackVar:"callback",jsonP:o});
}function q(){if(n.container){f=this;l(h);n.container.find(".pager a").live("click",function(u){var s=d(this).attr("href");
var t=s.substring(s.indexOf("#")+1,s.length);h=parseInt(t,10);l();u.preventDefault();
return false;});}}function k(){}return{init:q,destroy:k};}});
/*!



 resources js widgets personalia personaliaAd.js



*/
mno.core.register({id:"widget.personalia.personaliaAd",creator:function(g){var b=g.$,e=(typeof g.model[0]!=="undefined")?g.model[0].personaliaAdLocation:"",k=(typeof g.model[0]!=="undefined")?g.model[0].personaliaAppUrl:"",a=mno.utils.params,c,d=b("#personaliaAdWrapper");
function h(n){if(n.message.records){var l={items:n.message.records,adLocation:e};
if(g.container){g.render("widgets.personalia.views.personaliaAd",l,function(q){var o=(typeof l.items[0].firstName!=="undefined")?l.items[0].firstName+" "+l.items[0].lastName:l.items[0].lastName;
d.append("<h3>"+o+"</h3>").append(q);});}}}function j(){if(g.container){c=this;
var l=a.getAllParameters();g.getScript({url:k+"showAd.htm?adNo="+l.adNo+"&view=json",callbackVar:"callback",jsonP:h});
}}function f(){}return{init:j,destroy:f};}});
/*!



 resources js widgets personalia searchbox.js



*/
mno.core.register({id:"widget.personalia.searchbox",creator:function(a){function c(){if(a.container){var e=a.container.find("input[name=srchMode]"),d=a.container.find("div.dateChoice");
a.container.find("button.dateChoice").on("click",function(f){e.val(function(h,g){return g==="smpl"?"adv":"smpl";
});d.slideToggle();f.preventDefault();return false;});}}function b(){}return{init:c,destroy:b};
}});
/*!



 resources js widgets poll default.js



*/
mno.core.register({id:"widget.poll.default",creator:function(a){return{init:function(){runPollHelper=this.pollHelper;
if(a.container){a.container.each(function(c,b){runPollHelper(b,a.model[c]);
});}},pollHelper:function(e,g){var r=$(e),h=mno.publication.rel,n=mno.publication.id;
if(g!==null&&g.polls!=="undefined"){jQuery.each(g.polls,function(v,s){var x=typeof s.pollId!=="undefined"?s.pollId:"0",t=s.pollStyleId,w=(s.mode==="voted")||j(x),u=(typeof s.voteMultipleTimes!=="undefined"&&s.voteMultipleTimes==="true");
if(g.type==="widget_poll"||g.type==="widget_relatedContents"||g.type==="widget_mobileRelatedContents"||g.type==="widget_stories"||g.type==="widget_mobileStories"){f(x,t,w,u);
}r.find(".showPollResult_"+x).live("click",function(){b(x,t);});r.find(".sendPollVote_"+x).live("click",function(){c(x,t,$(this));
});r.find(".showPollForm_"+x).live("click",function(){var y=$(this).attr("data-revote");
o(x,t,y);});});}function f(v,s,u,t){if(u&&!t){b(v,s);}else{k(v);o(v,s);
}}function d(u,t,v){var s=["#4572A7","#AA4643","#89A54E","#80699B","#3D96AE","#DB843D","#92A8CD","#A47D7C","#B5CA92"];
if(typeof Highcharts==="undefined"){a.getScript({url:a.publication.url+"resources/js/mno/utils/highcharts.js",callback:function(){d(u,t,v);
}});}else{jQuery("."+t).each(function(w,x){var y=new Highcharts.Chart({chart:{renderTo:x,plotBackgroundColor:null,plotBorderWidth:null,plotShadow:true,width:(u.labels===true)?jQuery(x).width()/2:jQuery(x).width(),height:jQuery(x).width()/3,spacingTop:5,marginRight:0,marginLeft:0,marginBottom:20},colors:s,credits:false,title:false,legend:{borderWidth:0,lineHeight:14,itemStyle:{fontSize:"12px"},symbolPadding:2,symbolWidth:15},tooltip:{formatter:function(){return"<strong>"+this.point.name+"</strong>: "+this.y+" %";
}},plotOptions:{pie:{allowPointSelect:true,cursor:"pointer",size:"100%",dataLabels:{enabled:true,distance:0,conntectorWidth:0,formatter:function(){return this.y+" %";
}}}},series:[{type:"pie",name:"Resultat",data:(function(){var D=u.items.length,A=u.items,E=[],z=0,C=0,B=0;
while(D--){B=parseInt(A[D][1],10);if(B>z){C=D;z=B;}E.unshift(A[D]);}E[C]={name:A[C][0],y:A[C][1],selected:true};
return E;}())}]});if(u.revote===true){jQuery(x).append('<a class="button showPollForm_'+v+'" data-revote="true">Stem igjen</a>');
}if(u.vote===true){jQuery(x).append('<a class="button showPollForm_'+v+'" data-revote="false">Gi stemme</a>');
}jQuery(x).append('<p class="f-small floatRight">Antall stemmer: <strong>'+u.count+'</strong></p><div class="clear"></div>');
if(u.labels===true){a.render("widgets.poll.views.labels",{items:u.items,colors:s},function(z){jQuery(x).prepend(z);
});}});jQuery(".pollForm_"+v+" span.validation").each(function(x,w){$(w).hide();
});}}function c(x,s,w){var v=h+"poll/vote.do";var t=w.closest(".pollForm_"+x).find('input[name="vote"]:checked').val();
if(t===0){jQuery(".pollForm_"+x+" span.validation").show();}else{var u="mentometerId="+x+"&publicationId="+n+"&vote="+t;
u+="&redirectTo="+window.location.protocol+"//"+document.domain+h+"template/framework/wireframe/poll.jsp?comment="+x+","+s;
q("JSESSIONID");jQuery.ajax({type:"POST",url:v,data:u,dataType:"json",success:function(y){d(y,s,x);
},error:function(y,A,z){mno.core.log(1,"error: "+A+" "+z);}});}}function b(t,s){jQuery.ajax({type:"GET",url:h+"template/framework/wireframe/poll.jsp",data:"comment="+t+","+s,dataType:"json",success:function(u){d(u,s,t);
},error:function(u,w,v){mno.core.log(1,"error: "+w+" "+v);}});}function o(u,t,s){if(s=="true"){k(u);
}jQuery.ajax({type:"GET",url:h+"template/framework/wireframe/poll.jsp",data:"comment="+u+","+t+"&showForm=yes",success:function(v){jQuery("."+t).each(function(x,w){$(w).html(v);
});jQuery(".pollForm_"+u+" span.validation").each(function(x,w){$(w).hide();
});},error:function(v,x,w){mno.core.log(1,"error: "+x+" "+w);}});}function l(t){var v=t+"=",w,s;
var u=document.cookie;if(u.length&&(-1!=(w=u.indexOf(v)))){if(-1==(s=u.indexOf(";",w+v.length))){s=u.length;
}return unescape(u.substring(w+v.length,s));}return null;}function q(y){var z=l(y);
if(z==null||z==""){var t=q.arguments,x=q.arguments.length;var w=(x>2)?"; expires="+t[2].toGMTString():"";
var v=(x>3)?"; path=/":"; path=/";var s=(x>4)?"; domain="+t[4]:"";var u=(x>5)&&t[5]?"; secure":"";
document.cookie=y+"="+escape((new Date()).getTime(),0)+w+v+s+u+";";}}function j(u){var s=l("mentometer");
if(s!==null){var t=s.split("M");for(i=0;i<t.length;i++){if(t[i]==u){return true;
}}}return false;}function k(x){var v=l("mentometer");if(v!==null){var w=v.split("M");
var t="";for(i=0;i<w.length;i++){if(w[i]!=x){if(t==""){t=t+w[i];}else{t=t+"M"+w[i];
}}}var u=new Date();u.setTime(u.getTime()+(1*24*60*60*1000));var s="; expires="+u.toGMTString();
document.cookie="mentometer="+t+s+"; path=/";}}},destroy:function(){}};
}});
/*!



 resources js widgets popularList mostRead.js



*/
mno.core.register({id:"widget.popularList.mostRead",creator:function(a){return{init:function(){},destroy:function(){}};
}});
/*!



 resources js widgets propertyAds ad.js



*/
mno.core.register({id:"widget.propertyAds.ad",extend:["mno.utils.rubrikk"],creator:function(h){var b=h.$;
var c=this;function d(n){n=Math.floor(n*100+0.50000000001);n=Math.floor(n/100).toString();
for(var o=0;o<Math.floor((n.length-(1+o))/3);o++){n=n.substring(0,n.length-(4*o+3))+"."+n.substring(n.length-(4*o+3));
}return(n);}function l(n){var q=new Array("januar","februar","mars","april","mail","juni","juli","august","september","oktober","november","desember");
var r=parseInt(n.substring(5,7),10);var o=parseInt(n.substring(8,10),10);
return o+". "+q[r-1];}function j(S){var P=S.message.success&&typeof S.message.records!=="undefined";
if(P!==false&&S.message.records.length>0){P=S.message.records[0];var o=(h.model[0].isMobile==true)?"MOBILE_":"";
var w=(h.model[0].isMobile==true)?h.model[0].max_image_width:466;var z="";
var K=false;var R=[];var G=P.propertyImages;for(var L=0;L<G.length;L++){var E=G[L];
if(E.imageType.propertyImageTypeValue=="COMPLETE_AD_IMAGE"){if(E.isAspectRatioWidth){K=true;
}z=E.imagePath;}else{if(E.imageType.propertyImageTypeValue!="COMPLETE_AD_IMAGE"&&E.imageType.propertyImageTypeValue!="EXTRACTED_HIDDEN_IMAGE"){R.push(E.imagePath);
}}}var s=P.address;var n=s.addressLine1;if(s.addressLine2&&s.addressLine2!=""){if(s.addressLine2!=s.postNumber.city){n+=" "+s.addressLine2;
}}var v=s.postNumber.postNumberName+" "+s.postNumber.city;var I=(P.salesPrice!==undefined)?d(P.salesPrice):"";
var x=(P.monthlyCost!==undefined)?d(P.monthlyCost):"";var B=P.sizeLivingArea;
var Q=P.noOfRooms;var N=P.externalAdReference;var O=true;if(P.status!="PUBLISHED"){O=false;
}var A=[];var y=P.propertyViewings;if(y&&y.length>0){for(var J=0;J<y.length;
J++){A.push(l(y[J].viewingDate));}}var u,r,t,D,F;var q=P.company;var U=q.name;
if(q.phone){t=q.phone;}if(q.phone2){D=q.phone2;}if(q.email){F=q.email;}if(q.url){u=q.url;
}var T=false;for(var H=0;H>q.companyLogos.length;H++){r=q.companyLogos[H];
T=true;}var C=P.adClickTag.xmlCDataContent;var M={mainImage:z,otherImages:R,hasLogo:T,logo:r,companyName:U,companyUrl:u,adclicktag:C,finnlink:N,rooms:Q,size:B,phone:t,phone2:D,email:F,viewings:A,published:O,price:I,monthlyCost:x,streetaddress:n,postaddress:v,lisaLevel:this.lisaLevel,imgWidth:w};
if(h.container){h.render("widgets.propertyAds.views.ad",M,function(V){h.container.empty();
h.container.append(V);if(P.longitude&&P.latitude){a(h.container.find(".adMap")[0],P.longitude,P.latitude,n);
}});}}}function a(q,o,s,n){if(typeof google==="undefined"){h.getScript({url:"http://maps.google.com/maps/api/js?sensor=false&async=2&v=3",callbackVar:"callback",jsonP:function(){h.notify({type:"gapiReady",data:true});
}});h.listen({gapiReady:function(){a(q,o,s,n);}});}else{var r=f(s,o,15,google.maps.MapTypeId.ROADMAP,q);
e(r,s,o,n);}}function f(t,q,u,n,r){try{var o={zoom:u,center:new google.maps.LatLng(t,q),mapTypeId:n,mapTypeControl:true,streetViewControl:true,mapTypeControlOptions:{mapTypeIds:[google.maps.MapTypeId.ROADMAP,google.maps.MapTypeId.SATELLITE,google.maps.MapTypeId.TERRAIN,google.maps.MapTypeId.HYBRID],position:google.maps.ControlPosition.TOP_RIGHT,style:google.maps.MapTypeControlStyle.DROPDOWN_MENU}};
return new google.maps.Map(r,o);}catch(s){mno.core.log(3,"widgets/propertyAds/ad.js at createMap stack"+s.stack);
}}function e(n,u,w,t){var s=google.maps;var v=new s.LatLng(u,w);var o=new s.MarkerImage(h.publication.url+"skins/publications/ap/gfx/icons/mapBlueMarker.png");
var r=new s.Marker({position:v,icon:o,map:n,draggable:false});var q=new s.InfoWindow();
q.setContent(t);q.open(n,r);s.event.addListener(r,"click",function(){q.open(n,r);
});}cbPropertyAd=function(n){j.call(c.instance,n);};function k(){if(h.container){var q=mno.utils.params,o="propertyad.json?renderType=public&propertyAdId="+q.getParameter("propertyAdId")+"&cb=cbPropertyAd",n=this.rubrikkCacheUrl+o;
if(q.getParameter("rnd")){n=n+"&rnd="+q.getParameter("rnd");}h.getScript({url:n});
}}function g(){}return{init:k,destroy:g};}});
/*!



 resources js widgets propertyAds list.js



*/
mno.core.register({id:"widget.propertyAds.list",extend:["mno.utils.rubrikk"],creator:function(a){var e=this;
function c(h){h=Math.floor(h*100+0.50000000001);h=Math.floor(h/100).toString();
for(var j=0;j<Math.floor((h.length-(1+j))/3);j++){h=h.substring(0,h.length-(4*j+3))+"."+h.substring(h.length-(4*j+3));
}return(h);}function g(l){if(l.message.records){var n=a.model[0].adCount,h=l.message.records,k=(h.length>=n)?n:h.length,j={adUrl:a.model[0].adUrl,lisaLevel:"lisacache",items:d(h,k)};
if(a.container){a.render("widgets.propertyAds.views.list",j,function(o){a.container.append(o);
});}}}function d(o,h){var n=[];for(var k=0;k<h;k++){var j=o.length;if(j>0){var l=Math.floor(Math.random()*j);
n.push(o.splice(l,1)[0]);}}return n;}cbPropertyAdsList=function(h){g.call(e.instance,h);
};function f(){a.getScript({url:this.jsonUrlBolig+"propertyAds.json"});
}function b(){}return{init:f,destroy:b};}});
/*!



 resources js widgets propertyAds searchbox.js



*/
mno.core.register({id:"widget.propertyAds.searchbox",extend:["mno.utils.rubrikk"],creator:function(a){var d=a.$;
var c=this;var b=mno.utils.params.getParameter("categoryId");if(b.constructor===String){b=[b];
}else{if(!(b.constructor===Array)){b=[];}}function e(f){if(a.container){var l=d(this);
if(f.message.records){var o=d("#propertyAds-categoryList"),h=f.message.records.length,j=a.model[0];
if(typeof j!=="undefined"){var k={searchUrl:j.searchUrl,topItems:[],allCategoriesQString:""},q=0,g,n;
for(g=0;g<h;g++){n=f.message.records[g];k.allCategoriesQString+=(g===0?"?":"&")+"categoryId="+n.categoryId;
n.checked=(b.indexOf(n.categoryId+"")!==-1?' checked="checked" ':"");k.topItems.push(n);
}a.render("widgets.propertyAds.views.categories",k,function(r){o.append(r);
o.css("height","auto");o.find(".categories").mnoTree();});}}}}cbPropertyCategories=function(f){e.call(c.instance,f);
};return{init:function(){a.getScript({url:this.jsonUrlBolig+"propertyCategories.json"});
},destroy:function(){}};}});
/*!



 resources js widgets propertyAds searchresult.js



*/
mno.core.register({id:"widget.propertyAds.searchresult",extend:["mno.utils.rubrikk"],creator:function(l){var b=l.$,g=1,r=(l.model!==null&&l.model.length>0?l.model[0].pageSize:(function(){mno.core.log(2,"pagesize not set in widget.propertyAds.searchresult default 10");
return 10;}())),f=(l.model!==null&&l.model.length>0)?l.model[0].adUrl:"",a=mno.utils.params,e,h=b("#resultsWrapper");
function c(u){var w=Math.ceil(u/r),s=7,v=Math.ceil(g/s),z=(v-1)*s+1,t=v*s,x={olClass:"pager",items:[]},y;
if(w>1){for(y=z;y<=w&&y<=t;y++){if(y===g){x.items.push({value:'<span class="button active" title="Side '+y+'">'+y+"</span>"});
}else{x.items.push({value:'<a class="button" href="#'+y+'" title="Side '+y+'">'+y+"</a></li>"});
}}if(v>1){x.items.push({value:'<a class="button" href="#'+(z-s)+'" title="Forrige gruppe">Forrige gruppe</a>'});
}if((w/s)>v){x.items.push({value:'<a class="button" href="#'+(z+s)+'" title="Neste gruppe" class="f- 000">Neste gruppe</a>'});
}x.items.push({value:'<a class="button" href="#1" title="F&oslash;rste side">F&oslash;rste</a>'});
x.items.push({value:'<a class="button" href="#'+w+'" title="Siste side">Siste</a>'});
}return x;}function d(s){s=Math.floor(s*100+0.50000000001);s=Math.floor(s/100).toString();
for(var t=0;t<Math.floor((s.length-(1+t))/3);t++){s=s.substring(0,s.length-(4*t+3))+"."+s.substring(s.length-(4*t+3));
}return(s);}function q(s){var u=new Array("januar","februar","mars","april","mail","juni","juli","august","september","oktober","november","desember");
var v=parseInt(s.substring(5,7),10);var t=parseInt(s.substring(8,10),10);
return t+". "+u[v-1];}function n(u){var C=u.SearchMessage;if(C.success===true){var y={items:[],olClass:"resultList withImg"},s=C.records,B,x="",z;
h.empty();for(var w=0;w<s.length;w++){B=s[w];x="",z=B.company;for(var t=0;
t<B.propertyImages.length;t++){if(B.propertyImages[t].imageType.propertyImageTypeValue=="THUMBNAIL"){x+='<img src="http://'+e.lisaLevel+".aftenposten.no/utils/img.php?src="+B.propertyImages[t].imagePath+'&maxHeight=90&maxWidth=120" alt="'+B.adTitle+'"/>';
}}x+='<a class="searchresult-title" href="'+f+"?propertyAdId="+B.propertyAdId+'" title="Se boligannonse" target="_blank">'+B.address.addressLine1+"</a>";
x+='<div class="companyName" itemprop="name">'+B.address.postNumber.postNumberName+" "+B.address.postNumber.city+"</div>";
if(B.propertyViewings&&B.propertyViewings.length>0){x+='<div class="f-small">Visning: ';
for(var A=0;A<B.propertyViewings.length;A++){if(A>0){x+=", ";}x+=q(B.propertyViewings[A].viewingDate);
}x+="</div>";}if(B.salesPrice){x+='<p class="f-85">Prisantydning: '+d(B.salesPrice)+"</p>";
}y.items.push({attributes:'itemscope ="itemscope" itemtype="http://data-vocabulary.org/Organization"',value:'<div class="resultList-inner">'+x+"</div>"});
}l.render("mno.views.orderedList",y,function(D){var v=c(C.totalRecords);
if(v.items.length!==0){l.render("mno.views.orderedList",v,function(E){h.append(D);
h.append(E);});}else{h.append(D);}});}}function k(){var v=a.getAllParameters(),t=b("#freetextorder").val(),u="",w="",s;
if(typeof v.categoryId!=="undefined"){if(v.categoryId.constructor===Array){u="&categoryId="+v.categoryId.join("&categoryId=");
}else{u="&categoryId="+v.categoryId;}}if(typeof v.date!=="undefined"){if(v.date.constructor===Array){w="&date="+v.date.join("&date=");
}else{w="&date="+v.date;}}if(v.freetextsearch=="Søk"){v.freetextsearch="";
}s=e.rubrikkCacheUrl+"search/propertyads.json?";if(v.freetextsearch){s+="&freetextsearch="+escape(v.freetextsearch);
}if(v.priceFrom&&v.priceFrom!="Pris fra..."){s+="&priceFrom="+v.priceFrom;
}if(v.priceTo&&v.priceTo!="Pris til..."){s+="&priceTo="+v.priceTo;}l.getScript({url:s+u+w+"&size="+r+"&utf8=true&page="+g+"&order="+t,jsonP:n});
}function o(){if(l.container){e=this;k(g);b("#freetextorder").bind("change",k);
l.container.find(".pager a").live("click",function(u){var s=b(this).attr("href");
var t=s.substring(s.indexOf("#")+1,s.length);g=parseInt(t,10);k();u.preventDefault();
return false;});}}function j(){}return{init:o,destroy:j};}});
/*!



 resources js widgets quiz quizList.js



*/
mno.core.register({id:"widget.quiz.quizList",creator:function(a){var d=this;
function c(g,h,f){var j=g.$;jQuery.ajax({url:g.publication.url+"/external/quiz/"+h.quizMethod+".json",dataType:"jsonp",cache:true,jsonpCallback:h.quizMethod,success:function(l){if(l.list.length>0){var k={quizSectionUrl:g.publication.url+"quiz/",items:l.list,starOn:"/skins/global/gfx/moodboard/star-on.png",starOff:"/skins/global/gfx/moodboard/star-off.png",dataWidgetId:h.dataWidgetId,numOfQuizzes:h.numOfQuizzes,showStars:h.showStars,showUserQuiz:h.showUserQuiz,userQuizUrl:h.userQuizUrl};
g.render("widgets.quiz.views.quizList",k,function(n){j(f).html(n);});}},error:function(k,n,l){mno.core.log(1,"error retrieveForecast: "+n+" "+l);
}});}function e(){if(a.container){a.container.each(function(h,g){var f=a.model[h];
c(a,f,g);});}}function b(){$=null;}return{init:e,destroy:b};}});
/*!



 resources js widgets quiz singleQuiz.js



*/
mno.core.register({id:"widget.quiz.singleQuiz",extend:["widget.moodboard.default"],creator:function(a){var e=mno.utils.params,c;
function d(){if(a.container){var g=this.initQuiz;c=this.initMoodBoard;g(a,a.container,a.model[0],false);
}}function f(y,v,r,h){var o=y.$,k={},u=null,w=y,z=r.applicationUrl,x=parseInt(r.quizId,10),n=o(v),l=h,r=r;
var g={qaid:0,id:x,q_index:0,method:"next"};if(h){g.quizUrl=r.quizArticelUrl;
}else{if(r.answers){g.q_index=1;g.lastAnswer=r.answers;}}u=n.find(".quizContainer");
if(typeof z!=="undefined"&&typeof g.id!=="undefined"){j();}if(typeof n.mnoExpose==="function"){n.mnoExpose();
}if(r.answers){n.click();}function q(A){jQuery.ajax({url:z+"quiz.htm?qaid="+g.qaid+"&id="+g.id+"&q_index="+g.q_index+"&method="+g.method+"&answers="+A+"&view=json",dataType:"jsonp",cache:"true",jsonpCallback:"singleQuiz"+g.id,success:t});
}function s(A){window.location.replace(g.quizUrl+"?answers="+A);}function j(){var B="";
if(g.lastAnswer){B="&answers="+g.lastAnswer+"&q_index="+g.q_index+"&method="+g.method;
}try{jQuery.ajax({url:z+"quiz.htm?id="+g.id+"&view=json"+B,dataType:"jsonp",cache:"true",jsonpCallback:"singleQuiz"+g.id,success:function(C){if(C.quiz!==undefined){k=C.quiz;
w.render("widgets.quiz.views.quizHeader",[{img:k.pictureUrl||false,caption:k.pictureCaption||false,author:k.author,external:k.external,title:k.title,text:k.text}],function(D){n.prepend(D);
});t(C);}}});}catch(A){mno.core.log(1,A);}}function t(E){if(E.quiz!==undefined){k=E.quiz;
var D=k.numQuestions;g.qaid=k.quizAnswerId||"";if(g.q_index!==D){g.gaid=k.quizAnswerId||0;
g.q_index++;var B=k.question;w.render("widgets.quiz.views.question",[{img:B.pictureUrl||false,number:g.q_index,total:D,question:B.question,alternatives:B.answers}],function(F){u.html(F);
if(l){o(".next").bind("click",function(){if(u.find('input[name="answers"]:checked').length!==0){s(u.find('input[name="answers"]:checked').val());
}return false;});}else{o(".next").bind("click",function(){if(u.find('input[name="answers"]:checked').length!==0){q(u.find('input[name="answers"]:checked').val());
}return false;});}if(typeof n.mnoExpose==="function"){n.mnoExpose("update");
}});}else{var A=(k.drawDate!==undefined&&k.passedDrawdate===false&&(k.minCorrectAnswers===undefined||(parseInt(k.quizAnswer.points,10)>=parseInt(k.minCorrectAnswers,10)))),C=(k.quizAnswer.userRegistered===undefined);
if(A===true&&C===true){g.method="registerEmail";}w.render("widgets.quiz.views.quizResult",[{description:k.scoreDescription||false,quizTitle:k.title||"Quiz",quizId:x,drawdate:A,register:C,year:A[0]||"",month:A[1]||"",day:A[2]||"",points:k.quizAnswer.points,status:k.status,total:D,resultDescription:(function(){if(k.results!==undefined){var G=k.results.length,H,J,I,K,F=[],L;
for(H=0;H<G;H++){L=k.results[H];J=L.scoreFrom;I=L.scoreTo;K=L.description;
if(J===I){F.push({from:J,text:K});}else{F.push({from:J,to:I,text:K});}}return F;
}else{return false;}}()),completedCount:k.completedCount,answers:(function(){var F=k.questions.length,J=[];
function G(O,P){var K=O.answers.length,N,M=[],L;for(L=0;L<K;L++){N=O.answers[L];
if(k.drawDate!==undefined&&k.passedDrawdate===false&&k.showSolution===false){M.push({state:"normal",answer:N.answer});
}else{M.push({state:function(){var Q="";if(N.correct===true){Q="bold";}else{Q="normal";
}if(N.answerId===P){if(N.correct===true){Q=Q+" correct";}else{Q=Q+" wrong";
}}return Q;}(),answer:N.answer,percentage:N.percentage||false});}}return M;
}for(i=0;i<F;i++){var H=k.questions[i];var I=k.quizAnswer.quizAnswers[i].answerId;
J.push({number:(i+1),questionText:H.question,hint:H.hintUrl||false,img:H.pictureUrl||false,alternatives:G(H,I)});
}return J;}())}],function(F){u.html(F);r.groupid=k.categoryId;r.template="widgets.moodboard.views.userrating";
r.scale=5;r.siteId="quiz";r.objectId=k.quizId;c(w,r,u.find("div#rating"));
if(typeof n.mnoExpose==="function"){n.mnoExpose("update");}o("#quizRegister").bind("click",function(){var G=o("#scoreDesc form").serialize();
w.getScript({url:z+"quiz.htm?qaid="+g.qaid+"&id="+g.id+"&q_index="+g.q_index+"&method="+g.method+"&view=json&"+G,callbackVar:"callback",jsonP:t});
return false;});});}}}}function b(){$=null;}return{init:d,destroy:b,initQuiz:f};
}});
/*!



 resources js widgets relatedContents actionbutton.js



*/
mno.core.register({id:"widget.relatedContents.actionbutton",creator:function(a){var c=a.$;
function d(){var g=false;function f(j){var k=c(this);c("div[id]").each(function(l){var n=c(this);
n.removeClass(n.attr("class").split(" ")[1]).addClass(n.attr("class")+"Disabled");
});if(j===true){k.removeClass(k.attr("class").split(" ")[1]).addClass(k.attr("class")+"Enabled");
}else{c("div[id]").each(function(l){var n=c(this);n.removeClass(n.attr("class").split(" ")[1]).addClass(n.attr("class")+"Enabled");
});}}function h(j){a.container.css("height",(j).toString()+"px");}function e(){c("div[id]").prev().hide();
c("div span").removeClass("addBgrColor");a.container.removeClass("addBgrLeft");
a.container.css("height","150px");}c("div[id]").bind("click",function(){var j=c(this);
if(a.container.hasClass("addBgrLeft")&&j.prev().is(":visible")){e();f.call(this,false);
}else{if(a.container.hasClass("addBgrLeft")&&j.prev().siblings().filter('div[class^="action"]').is(":visible")){c("div[id]").prev().hide();
c("div span").addClass("addBgrColor");h(j.prev().height());j.prev().show();
f.call(this,true);}else{c("div span").addClass("addBgrColor");a.container.addClass("addBgrLeft");
h(j.prev().height());j.prev().show();f.call(this,true);}}});a.container.hover(function(){g=true;
},function(){g=false;});c(".factCloseIcon").bind("click",function(){e();
f.call(window,false);});jQuery("body").mouseup(function(){if(g===false){e();
f(false);}});c("div[id]").prev().hide();}function b(){c=null;}return{init:d,destroy:b};
}});
/*!



 resources js widgets relatedContents flyout.js



*/
mno.core.register({id:"widget.relatedContents.flyout",creator:function(b){var f=$(window).height(),d=$(window).width();
function a(h,j){var g=$(window).width()+40;if(j===true){g=g-h.outerWidth()-40;
}h.animate({left:g+"px"},250);}function e(){var g={};b.container.each(function(h){var k=$(this),j=$(this).position().top,l=$('<span class="close">X</span>');
g[j]={el:k,active:false};l.bind("click",function(){k.remove();b.ignore("scrollmove");
});k.prepend(l);k.appendTo("body").css({left:(d+40)+"px"}).addClass("active");
});b.listen({scrollmove:function(j){for(var h in g){if(j.y>h-(f/2)){if(g[h]["active"]===false){a(g[h]["el"],true);
}g[h]["active"]=true;}else{if(g[h]["active"]===true){a(g[h]["el"],false);
g[h]["active"]=false;}}}}});}function c(){}return{init:e,destroy:c};}});
/*!



 resources js widgets relatedContents pictures.js



*/
mno.core.register({id:"widget.relatedContents.pictures",extend:["mno.utils.flash"],creator:function(a){var c=a.$;
function d(){var e=this.showFlash;if(a.container){a.container.each(function(h,g){var f=a.model[h];
if(f.flashArticles!==undefined){jQuery.each(f.flashArticles,function(l,k){e(k);
});}});}}function b(){c=null;}return{init:d,destroy:b};}});
/*!



 resources js widgets relatedContents poll.js



*/
mno.core.register({id:"widget.relatedContents.poll",extend:["widget.poll.default"],creator:function(a){function c(){var d=this.pollHelper;
if(a.container){a.container.each(function(g,f){var e=a.model[g];if(e.polls!==undefined){d(f,e);
}});}}function b(){}return{init:c,destroy:b};}});
/*!



 resources js widgets shipTraffic shipTraffic.js



*/
mno.core.register({id:"widget.shipTraffic.mapsettings",creator:function(a){return{init:function(){var b;
b=function(){try{function c(){try{if(typeof ActiveXObject!=="undefined"){return new ActiveXObject("Microsoft.XMLHTTP");
}else{if(window.XMLHttpRequest){return new XMLHttpRequest();}}}catch(A){changeStatus(A);
}return null;}var o;function n(B,E){var A=-1;var C=c();if(!C){return false;
}C.onreadystatechange=function(){if(C.readyState===4){try{A=C.status;}catch(F){}if((A===200)||(A===0)){E(C.responseText,C.status);
C.onreadystatechange=function(){};}}};C.open("GET",B+"?"+Math.random(),true);
try{C.send(null);}catch(D){changeStatus(D);}}function d(A){if(typeof ActiveXObject!=="undefined"&&typeof GetObject!=="undefined"){var e=new ActiveXObject("Microsoft.XMLDOM");
e.loadXML(A);return e;}if(typeof DOMParser!=="undefined"){return(new DOMParser()).parseFromString(A,"text/xml");
}return createElement("div",null);}function v(A){var e=document.createElement("script");
e.src=A;document.body.appendChild(e);}var f="";var l=[];var t=[];var z=null;
var s=new google.maps.InfoWindow({size:new google.maps.Size(150,50)});function g(E,A,B,C){var D=B;
var e=new google.maps.Marker({position:E,icon:"/template/externalservices/shipTraffic/img/icon_orange.png",map:z,title:A,zIndex:Math.round(E.lat()*-100000)<<5});
e.mycategory=C;e.myname=A;l.push(e);google.maps.event.addListener(e,"click",function(){s.setContent(D);
s.open(z,e);});}function y(A){var e;for(e=0;e<l.length;e++){if(l[e].mycategory===A){l[e].setVisible(true);
}}if($("#categories").length!==0){document.getElementById(A+"box").checked=true;
}}function r(A){var e;for(e=0;e<l.length;e++){if(l[e].mycategory===A){l[e].setVisible(false);
}}document.getElementById(A+"box").checked=false;s.close();}function j(){var A="",e;
for(e=0;e<l.length;e++){if(l[e].getVisible()){A+='<a href="javascript:void(0);">'+l[e].myname+"</a><br>";
}}document.getElementById("side_bar").innerHTML=A;a.container.find("#side_bar a").bind("click",function(){var B=$(this).text();
for(e=0;e<l.length;e++){if(l[e].myname==B){h(e);}}});}function k(A,e){if(A.checked){y(e);
}else{r(e);}j();}function h(e){google.maps.event.trigger(l[e],"click");
}function u(C,e,B){var A=new google.maps.LatLng(C,e);z.setCenter(A);z.setZoom(B);
}function w(){r("military");r("fishing");r("towing");r("sailing");r("pleasure");
r("highspeed");r("pilot");r("search");r("tug");r("passenger");r("cargo");
r("tanker");r("notdefined");j();}function q(){y("military");y("fishing");
y("towing");y("sailing");y("pleasure");y("highspeed");y("pilot");y("search");
y("tug");y("passenger");y("cargo");y("tanker");y("notdefined");j();}if(a.container.find("#map").length>0){$(function(){var e={zoom:14,center:new google.maps.LatLng(60.3925258,5.323331),mapTypeId:google.maps.MapTypeId.ROADMAP};
z=new google.maps.Map(document.getElementById("map"),e);google.maps.event.addListener(z,"click",function(){s.close();
});n("/external/shipTraffic/shipData.xml",function(U){var D=d(U);var S=D.documentElement.getElementsByTagName("marker");
var Q;for(Q=0;Q<S.length;Q++){var G=parseFloat(S[Q].getAttribute("lat"));
var V=parseFloat(S[Q].getAttribute("lng"));var O=new google.maps.LatLng(G,V);
var P=S[Q].getAttribute("status");var W=S[Q].getAttribute("shipname");var I=S[Q].getAttribute("mmsi");
var R=S[Q].getAttribute("speed");var C=S[Q].getAttribute("type");var B=S[Q].getAttribute("course");
var E=S[Q].getAttribute("length");var M=S[Q].getAttribute("width");var L=S[Q].getAttribute("draft");
var K=S[Q].getAttribute("callsign");var H=S[Q].getAttribute("dest");var F=S[Q].getAttribute("eta");
var T=S[Q].getAttribute("imo");var J="<strong>"+W+'</strong><hr><div style="font-family:verdana;font-size:10px;">Status:'+P+"<br />Type: "+C+"<br />Unik ID(mmsi): "+I+"<br />Fart: "+R+"(kn)<br />Kurs: "+B+"<br />Lengde: "+E+"m<br />Bredde: "+M+"m<br />Dybde: "+L+"m<br />Destinasjon: "+H+"<br />Kallesignal: "+K+"<br />Forventet ankomst: "+F+"<br />Rammenummer(imo): "+T+"</div>";
var N=S[Q].getAttribute("category");g(O,W,J,N);}y("military");y("fishing");
y("towing");y("sailing");y("pleasure");y("highspeed");y("pilot");y("search");
y("tug");y("passenger");y("cargo");y("tanker");y("notdefined");if($("#side_bar").length!==0){j();
}});function A(){var F=$(this).attr("title");var D=F.split(",");var E=D[0];
var B=D[1];var C=D[2];u(E,B,parseInt(C,10));}$("#hideAll").click(function(){w();
});$("#showAll").click(function(){q();});$("form input:checkbox").click(function(){var B=$(this).attr("value");
mno.core.log(1,B+" is clicked");k(this,B);});$(".mapView").click(A);$("#pan").each(A);
});}}catch(x){if(typeof console.trace==="function"){console.trace();}if(typeof printStackTrace==="function"){printStackTrace({e:x});
}}};if(typeof a.container!=="undefined"&&a.container!==null){a.getScript({url:"http://maps.google.com/maps/api/js?sensor=false",callbackVar:"callback",jsonP:function(){b();
}});}},destroy:function(){}};}});
/*!



 resources js widgets siteGestures siteGestures.js



*/
mno.core.register({id:"mno.utils.siteGestures",forceStart:true,creator:function(b){function a(){b.getScript({url:SITEURL+"json/front.jsp",jsonP:function(j){var f=j.message.records,h=f.length,k=0,n="";
while(k<h){var q=f[k];n+='<div class="item"  style="-ms-filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src='+q.articleImg+", sizingMethod=scale);filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src="+q.articleImg+", sizingMethod=scale);background-image:url("+q.articleImg+')">';
n+='<div class="caption"><h2 href="'+q.url+'">'+q.articleTitle+"</h2>";
n+='<p class="teaserText">'+q.articleLead+"</p></div></div>";k++;}n='<div id="frontImageView">'+n+"</div>";
$("body").prepend(n);var o=$("#frontImageView .item");var g=0;var e=o.length-1;
$("body").gestures({callback:function(l){if(l.horizontal==="left"){if(g===e){g=0;
}else{g++;}}else{if(l.horizontal==="right"){if(g===0){g=e;}else{g--;}}}o.removeClass("active");
$(o[g]).addClass("active");},distance:100,textSelection:false});}});}function d(){var e=$('<div style="position:absolute;z-index:2000">Bildevisning</div>');
e.bind("click",a);}function c(){}return{init:d,destroy:c};}});
/*!



 resources js widgets siteIndex default.js



*/
mno.core.register({id:"widget.siteIndex.default",creator:function(a){function c(){var d=mno.publication.sectionWidgetId;
mno.utils.dialog({content:a.publication.url+"?widget=sectionSiteMap&contentId="+d});
}function b(){}return{init:c,destroy:b};}});
/*!



 resources js widgets slideshow default.js



*/
mno.core.register({id:"widget.slideshow.default",extend:["widget.slideshow.main","mno.utils.flash"],creator:function(a){function c(){var d=this.showFlash;
if(a.container){a.container.each(function(g,f){var e=a.model[g];if(e.flashArticles!==undefined){jQuery.each(e.flashArticles,function(k,h){if($("#"+h.elementId)!==undefined){$("#"+h.elementId).parent().height(h.height);
d(h);if(h.caption!==undefined&&h.caption!==""){a.render("widgets.slideshow.view.caption",{caption:h.caption},function(j){$("#"+h.elementId).parent().append(j);
});}}});}});this.helper(a);}}function b(){}return{init:c,destroy:b};}});
/*!



 resources js widgets slideshow main.js



*/
mno.core.register({id:"widget.slideshow.main",creator:function(h){var b=mno.features,e=h.$,f=(jQuery.easing.easeInOutCubic!==undefined)?"easeInOutCubic":"swing",a=[];
function c(o,q,k){var l=this,n=0;l.config=k;l.$container=q;l.$slideshow=o;
l.$items=o.find("li");l.$list=o.find(".slideshow-list");l.index=0;if(b.transform===false&&b.transition===false||this.$items.find('object[type="application/x-silverlight-2"]').length!==0){l.adjustHeight=l.adjustHeightFallback;
l.gotoIndex=l.gotoIndexFallback;}l.setDimensions();l.createButtons();q.addClass("mnoSlideshow");
if(l.$list.find("img").length>0){l.$list.find("img").each(function(r,s){if(s.complete||s.readyState===4){l.triggerWebkitFix();
return false;}else{jQuery(s).bind("load",l.triggerWebkitFix);}});}l.toggleMouseEvent(true);
if(l.size!==1){o.gestures({accuracy:25,onStart:function(){n=l.index*l.itemWidth;
l.$items.unbind("mouseup.next");},onMove:function(){if(b.transform!==false&&b.transition===true){return function(r){l.$list.css(b.transform,"translateX(-"+(n-r.x)+"px)");
};}else{return function(r){if((n+l.itemWidth)<=l.listTotalItemWidth){o.scrollLeft(n-r.x);
}};}}(),onCancel:function(){l.gotoIndex();},callback:function(r){var s=r.speed;
if(r.horizontal==="left"&&l.size>l.index+1){l.index++;}else{if(r.horizontal==="right"&&l.index>0){l.index--;
}}l.gotoIndex();}});}jQuery(window).bind("orientationchange resize",function(){l.setDimensions();
l.adjustHeight();});}c.prototype={adjustHeight:function(){var k;return function(){if(this.$items.eq(this.index).find(".slideShowItemContainer").height()!==k){k=this.$items.eq(this.index).find(".slideShowItemContainer").height();
this.$list.css("height",k+"px");}};}(),adjustHeightFallback:function(){var k;
return function(){if(this.$items.eq(this.index).find(".slideShowItemContainer").height()!==k){k=this.$items.eq(this.index).find(".slideShowItemContainer").height();
this.$list.stop();this.$list.animate({height:k+"px"},250,f);}};}(),setDimensions:function(){this.itemWidth=this.$slideshow.width(),this.size=this.$items.length,this.listTotalItemWidth=this.size*this.itemWidth;
this.$items.css({overflow:"hidden",width:this.itemWidth+"px"});this.$list.css({width:this.listTotalItemWidth+"px"});
},updateCounter:function(){var k=this;this.$counter.find("a").each(function(l){if(l===k.index){e(this).html("\u25CF");
}else{e(this).html("\u25CB");}});},createButtons:function(){if(this.size!==1){var l=this;
this.$prevEl=jQuery('<div class="slideShowPrev">\u25C4</div>');this.$nextEl=jQuery('<div class="slideShowNext enabled">\u25BA</div>');
this.$counter=jQuery('<div class="counter"></div>');if(this.size!==1){for(var k=0;
k<this.size;k++){(function(n){jQuery('<a href="#"></a>').bind("click",function(o){o.preventDefault();
l.gotoIndex(n);}).appendTo(l.$counter);}(k));this.updateCounter();}}else{this.$counter.css("display","none");
}this.$prevEl.bind("click",function(){l.index--;l.gotoIndex();return false;
});this.$nextEl.bind("click",function(){l.index++;l.gotoIndex();return false;
});this.$slideshow.after(this.$prevEl,this.$nextEl,this.$counter);}},toggleButtons:function(){if(this.index===0){this.$prevEl.removeClass("enabled");
}else{this.$prevEl.addClass("enabled");}if(this.index===this.size-1){this.$nextEl.removeClass("enabled");
}else{this.$nextEl.addClass("enabled");}},gotoIndex:function(k){var l=this;
this.index=(k!==undefined)?k:this.index;if(this.config.alwaysDisplayButtons===false){this.$container.removeClass("load");
}this.$list.addClass("animate");this.adjustHeight();this.$list.css(b.transform,"translateX(-"+this.index*this.itemWidth+"px)");
setTimeout(function(){l.$list.removeClass("animate");l.updateCounter();
l.toggleMouseEvent(true);l.toggleButtons();},300);},gotoIndexFallback:function(k){var l=this;
this.index=(k!==undefined)?k:this.index;if(this.config.alwaysDisplayButtons===false){this.$container.removeClass("load");
}this.adjustHeight();this.$slideshow.stop();this.$slideshow.animate({scrollLeft:(this.index*this.itemWidth)+"px"},250,f,function(){l.updateCounter();
l.toggleMouseEvent(true);l.toggleButtons();});},toggleMouseEvent:function(k){if(k===true){var l=this;
this.$slideshow.bind("mouseup.next",function(n){var o=e(n.target);if(o.not("object")&&o.not("video")){while(o.hasClass("slideshow-element")===false&&o.hasClass("slideshow-wrapper")===false){o=o.parent();
}if(l.size>l.index+1){l.$items.unbind("mouseup.next");l.gotoIndex(l.$items.index(this)+1);
}}});}},triggerWebkitFix:function(){this.$list.find("img").unbind("load");
this.adjustHeight();}};function j(){}function g(){}function d(k,o){var l={alwaysDisplayButtons:false};
for(var n in o){l[n]=o[n];}if(k.container){k.container.each(function(){var q=e(this);
e(".slideshow-wrapper").each(function(){a.push(new c(e(this),q,l));});});
}}return{init:j,helper:d,slideshowArray:a,destroy:g};}});
/*!



 resources js widgets slideshow map.js



*/
mno.core.register({id:"widget.slideshow.map",extend:["widget.map.default"],creator:function(a){function c(){var d=this;
a.listen({gapiReady:function(){setTimeout(function(){d.helper(a);},15);
}});}function b(){}return{init:c,destroy:b};}});
/*!



 resources js widgets slideshow slideshowList.js



*/
mno.core.register({id:"widget.slideshow.slideshowList",extend:["widget.slideshow.default"],creator:function(a){var b=a.$;
return{init:function(){this.helper(a);},destroy:function(){var c=null;}};
}});
/*!



 resources js widgets sprekSearch default.js



*/
mno.core.register({id:"widget.sprekSearch.default",creator:function(a){function c(){a.container.find(".helpText a").bind("click",function(){a.container.find(".search").val($("this").text());
a.container.submit();return false;});}function b(){}return{init:c,destroy:b};
}});
/*!



 resources js widgets stories default.js



*/
mno.core.register({id:"widget.stories.default",extend:["mno.utils.flash","widget.poll.default","widget.quiz.singleQuiz"],creator:function(k){var g=this;
var d=k.$;var a;var b;var h;var f=mno.publication.commentSystem;function n(){k.getScript({url:"/external/sectionFeeds/comments/commentcounts-"+mno.publication.currentSectionUniqueName+".json",error:e});
a=this.showFlash;b=this.pollHelper;h=this.initQuiz;this.helper(k);}function e(){if(f=="facebook"){}else{if(typeof disqus_shortname!=="undefined"&&disqus_shortname!=""){k.getScript({url:"http://"+disqus_shortname+".disqus.com/count.js"});
}}}function c(o){if(o.container){o.container.each(function(s,r){var q=o.model[s];
if(q.storiesWithFlash!==undefined){jQuery.each(q.storiesWithFlash,function(t,u){jQuery.each(u,function(v,w){a(w[0]);
});});}if(q.polls!==undefined){b(r,q);}if(q.quizes!==undefined){jQuery.each(q.quizes,function(t){h(o,d(r).find("section.quiz"),q.quizes[t],true);
});}});}}cbCommentCount=function(o){l.call(g.instance,o);};function l(o){if(o){d("a").filter("[data-disqus-identifier]").each(function(r,q){var s=o[d(this).attr("data-disqus-identifier")];
if(s===undefined){s=0;}if(s==1){d(this).text(s+" KOMMENTAR");}else{d(this).text(s+" KOMMENTARER");
}});}}function j(){d=null;}return{init:n,helper:c,destroy:j};}});
/*!



 resources js widgets stories list.js



*/
mno.core.register({id:"widget.stories.list",extend:["widget.stories.default"],creator:function(a){var c=a.$;
cbCommentCount=function(g){f.call(this.instance,g);};function f(g){if(g){c("a").filter("[data-disqus-identifier]").each(function(j,h){var k=g[c(this).attr("data-disqus-identifier")];
if(k===undefined){k=0;}if(k==1){c(this).text(k+" KOMMENTAR");}else{c(this).text(k+" KOMMENTARER");
}});}}function e(){if(typeof disqus_shortname!=="undefined"&&disqus_shortname!=""){a.getScript({url:"http://"+disqus_shortname+".disqus.com/count.js"});
}}function d(){if(typeof disqus_shortname!=="undefined"&&disqus_shortname!=""){a.getScript({url:"/external/sectionFeeds/ap-comments/commentcounts-"+mno.publication.currentSectionUniqueName+".json",error:e});
}var g=this.helper;if(a.container){g(a);}}function b(){c=null;}return{init:d,destroy:b};
}});
/*!



 resources js widgets storiesFromFast search.js



*/
mno.core.register({id:"widget.storiesFromFast.search",extend:["widget.stories.default"],creator:function(a){var c=a.$;
function d(){var e=this.helper;if(a.container){e(a);}}function b(){c=null;
}return{init:d,destroy:b};}});
/*!



 resources js widgets storiesFromFast topic.js



*/
mno.core.register({id:"widget.storiesFromFast.topic",extend:["widget.stories.default"],creator:function(a){var c=a.$;
function d(){var e=this.helper;if(a.container){e(a);}}function b(){c=null;
}return{init:d,destroy:b};}});
/*!



 resources js widgets stormWeather default.js



*/
mno.core.register({id:"widget.stormWeather.default",creator:function(a){var c=a.model[0].longitude,f=a.model[0].latitude;
function e(j,h,k){var g=(h>0)?"warm":"";$(".stormWeather-"+j+" .stormWeather-symbol").addClass("icon"+k);
$(".stormWeather-"+j+" .stormWeather-degrees").html(h+"&deg;").addClass(g);
}function d(){$.ajax({url:"http://tjenestercache.aftenposten.no/storm/wod.json?la="+f+"&lo="+c+"&callback=?",cache:true,dataType:"jsonp",jsonpCallback:"stormWeatherReturnFunction893394044712",success:function(g){if(g.DsWOD.length>=1){e("today",g.DsWOD[0].temperature,g.DsWOD[0].symbol);
}if(g.DsWOD.length>=4){e("tomorrow",g.DsWOD[3].temperature,g.DsWOD[3].symbol);
}}});}function b(){c=null;f=null;}return{setWeather:e,init:d,destroy:b};
}});
/*!



 resources js widgets storyContent article.js



*/
mno.core.register({id:"widget.storyContent.article",extend:["widget.storyContent.main"],creator:function(a){function c(){var d=a.model;
this.initArticle(a,this);a.container.each(function(e){if(d[e].hasOwnProperty("javascript")===true){d[e]["javascript"](a);
}});}function b(){}return{init:c,destroy:b};}});
/*!



 resources js widgets storyContent bodyText.js



*/
mno.core.register({id:"widget.storyContent.bodyText",extend:["mno.utils.flash"],creator:function(a){var b=a.$;
return{init:function(){var c=this.showFlash;a.container.each(function(f,e){var g=b(this);
storyContentModel=a.model[f];var d="silverlight";if(storyContentModel.videoView){d=storyContentModel.videoView;
}if(storyContentModel.flashArticlesInBody){jQuery.each(storyContentModel.flashArticlesInBody,function(h,j){c(j);
});}b(".photo").mnoExpand({content:{location:{attr:"data-picture-original"},type:"image"},expandedWidth:6,direction:"right"});
b(".video").mnoExpand({content:{location:{attr:"data-video"},type:"flash"},expandedWidth:6,direction:"right"});
});},destroy:function(){}};}});
/*!



 resources js widgets storyContent main.js



*/
mno.core.register({id:"widget.storyContent.main",creator:function(b){function d(){}function c(){}function a(e,f){e.container.each(function(j,h){var k=$(this),l=e.model[j];
var g="silverlight";if(l.videoView){g=l.videoView;}if(l.flashArticlesInBody){jQuery.each(l.flashArticlesInBody,function(n,o){f.showFlash(o);
});}$(".photo").mnoExpand({content:{location:{attr:"data-picture-original"},type:"image"},expandedWidth:6,direction:"right"});
$(".video").mnoExpand({content:{location:{attr:"data-video"},type:"flash"},expandedWidth:6,direction:"right"});
});}return{init:d,destroy:c,initArticle:a};}});
/*!



 resources js widgets storyContent map.js



*/
mno.core.register({id:"widget.storyContent.map",extend:["widget.map.default"],creator:function(a){function c(){var d=this;
a.listen({gapiReady:function(){setTimeout(function(){d.helper(a);},15);
}});}function b(){}return{init:c,destroy:b};}});
/*!



 resources js widgets topMenu expandMenu.js



*/
mno.core.register({id:"widget.topMenu.expandMenu",creator:function(a){return{init:function(){var b=a.container;
b.find(".expandMenuToggleButton").click(function(){b.find(".expandMenuContainer").toggle("slow");
var c=$(this).find(".arrow");if(c.length>0){if(c.hasClass("arrowRight")){c.addClass("arrowDown");
c.removeClass("arrowRight");}else{c.addClass("arrowRight");c.removeClass("arrowDown");
}}});},destroy:function(){}};}});
/*!



 resources js widgets topMenu standardMenu.js



*/
mno.core.register({id:"widget.topMenu.standardMenu",creator:function(c){var e=c.$;
function b(){var o=window.jQuery;var k='<nav id="smallHeader" class="smallHeader"><div id="innerSmallHeader" class="span12 gridRow">',h=o(".topMainMenu").clone(true).addClass("floatLeft").removeClass("gridRow span7"),j=o("#header .search form").clone(true),n,l;
mno.features.positionFixed(function(r){var q=window.jQuery("#header"),t=false;
l=r;j.addClass("floatRight");k+='<a class="floatLeft logo" href="'+c.publication.url+'"><img src="'+c.publication.url+"skins/global/gfx/"+c.publication.name+'_logo_small.png" alt =""/></a>';
k+="</div></nav>";if(typeof mno.core.utils!=="undefined"&&typeof mno.core.utils.innerShiv==="function"){n=o(mno.core.utils.innerShiv(k,false));
}else{n=o(k);}var s=n.find("#innerSmallHeader");s.append(h);s.append(j);
o("body").append(n);n.hide();if(l===true){c.listen({scrollmove:function(u){if(u.y>(q.height()+q.offset().top)){if(t===false){n.show();
t=true;}}else{if(t===true){n.hide();t=false;}}}});}});}function a(){var h=[mno.publication.url];
c.container.find("> ul > li > a").each(function(){h.push(e(this).attr("href"));
});var k=mno.utils.params.getPath();var j=window.jQuery.inArray(k,h);if(j!==-1){h.rotate(j);
c.listen({gesture:function(n){var l;if(n.horizontal==="left"){l=h.pop();
}else{if(n.horizontal==="right"){if(h[1]){l=h[1];}}}if(l!==undefined&&l!==k){window.location.href=l;
}}});}}function g(){if(typeof window.external.msIsSiteMode!=="undefined"){window.external.msSiteModeCreateJumpList("Seksjoner");
e("#header .topMainMenu > ul > li > a").each(function(h,j){var k=e(this);
if(h<5){window.external.msSiteModeAddJumpListItem(k.text(),k.attr("href"),mno.publication.url+"skins/publications/"+mno.publication.id+"/gfx/icons/favicon.ico");
}});window.external.msSiteModeShowJumplist();}}function f(){c.container.find('[href="/indeks"]').live("click",function(h){c.requireWidget("widget.siteIndex.default");
h.preventDefault();});b();a();g();}function d(){e=null;}return{init:f,destroy:d};
}});
/*!



 resources js widgets trafficMap default.js



*/
mno.core.register({id:"widget.trafficMap.default",extend:["widget.map.default"],creator:function(a){function c(){var d=this;
a.listen({gapiReady:function(){setTimeout(function(){d.helper(a);},15);
}});}function b(){}return{init:c,destroy:b};}});
/*!



 resources js widgets tvGuide default.js



*/
mno.core.register({id:"widget.tvGuide.default",creator:function(a){var c=a.$;
function d(){if(a.container){a.container.each(function(g,f){var e=c(f);
e.find(".event a").bind("click",function(k){var j=c(this);var h=j.closest(".event").next(".hiddenDescription");
if(window.jQuery.trim(h.html())!==""){k.preventDefault();k.stopPropagation();
}if(h.queue("fx").length===0&&window.jQuery.trim(h.html())!==""){if(h.css("display")==="none"){h.show("slow");
}else{h.hide("slow");}}});});}}function b(){}return{init:d,destroy:b};}});
/*!



 resources js widgets tvGuide recommendation.js



*/
mno.core.register({id:"widget.tvGuide.recommendation",creator:function(a){var c=a.$;
function d(){if(a.container){a.container.each(function(g,f){var e=c(f);
});}}function b(){}return{init:d,destroy:b};}});
/*!



 resources js widgets user actions.js



*/
mno.core.register({id:"widget.user.actions",forceStart:true,creator:function(a){function c(){if(typeof localStorage!=="undefined"){var d=localStorage.getItem("mno_sections")||"{}";
d=JSON.parse(d);d[mno.publication.currentSectionId]=d[mno.publication.currentSectionId]+1||1;
a.notify({type:"user-sections",data:d});localStorage.setItem("mno_sections",JSON.stringify(d));
}}function b(){}return{init:c,destroy:b};}});
/*!



 resources js widgets weather articleLongtermForecast.js



*/
mno.core.register({id:"widget.weather.articleLongtermForecast",creator:function(b){var e;
function f(){if(b.container){b.container.each(function(o,n){var l=b.model[o];
e=l.baseUrl;var r=l.showYr;var s=[];if(l.showPeriod0){s.push("0");}if(l.showPeriod1){s.push("1");
}if(l.showPeriod2){s.push("2");}if(l.showPeriod3){s.push("3");}var j=l.weatherDisplayName;
var q=(l.showWind!=="true");var k=(l.forceExpand!="true");b.listen({"weatherSearch-searchPerformed":function(t){if(t.forecast!=undefined){a(n,t.forecast,s,l.align,q,r,j,k);
}else{$(n).hide();}}});if(l.latitude!=""&&l.longitude!=""){h(n,l.latitude,l.longitude,s,l.align,q,r,j,k);
}});}}function h(n,v,j,l,t,y,q,w,k){var r=parseFloat(v).toFixed(4);var s=parseFloat(j).toFixed(4);
var u=e+"json/reverseGeoCode.json?latlng="+r+","+s+"&provider=yr&callback=?";
function o(z,A){jQuery.ajax({type:"GET",url:A,dataType:"jsonp",cache:true,success:function(B){x(z,e+B.local_url+"varsel.json?callback=?");
},error:function(B,D,C){mno.core.log(1,"error retrieveForecast: "+D+" "+C);
}});}function x(z,A){jQuery.ajax({type:"GET",url:A,dataType:"jsonp",cache:true,jsonpCallback:"varsel",success:function(B){if(B.error==false){a(z,B,l,t,y,q,w,k);
}else{mno.core.log(1,"error retrieveForecast: "+B.error.errorMessage);}},error:function(B,D,C){mno.core.log(1,"error retrieveForecast: "+D+" "+C);
}});}o(n,u);}function a(l,u,j,v,x,n,y,k){var z=["jan","feb","mar","apr","mai","jun","jul","aug","sep","okt","nov","des"];
function o(B){var C=new Date(B),A=C.getDate();return((A<10)?"0"+A:A)+". "+z[C.getMonth()];
}function q(A){if(A<1.6){return"strength1";}else{if(A<3.4){return"strength2";
}else{if(A<5.5){return"strength3";}else{if(A<8){return"strength4";}else{if(A<10.8){return"strength5";
}else{if(A<13.9){return"strength6";}else{if(A<17.2){return"strength7";}else{if(A<20.8){return"strength8";
}else{if(A<24.5){return"strength9";}else{if(A<28.5){return"strength10";
}else{if(A<32.6){return"strength11";}else{if(A>=32.6){return"strength12";
}}}}}}}}}}}}return false;}function s(B){var A=["S&oslash;n","Man","Tirs","Ons","Tors","Fre","L&oslash;r"];
return A[new Date(B).getDay()]+"dag";}function r(B){var A=new Date(B).getHours();
if(A<10){A="0"+A;}return A;}if(y==undefined||y==""){y=u.forecast.name;}var w=new Date();
var t=w.getDate()+". "+z[w.getMonth()];if(v=="horizontal"){b.render("widgets.weather.view.longtermHorizontal",{place:y,periods:u.forecast.text_tabular,periodsToShow:j,today:t,getDate:o,getDay:s,getHours:r,hideWind:x,getWindSymbolClass:q,round:Math.round},function(A){$(l).html(A);
if(n=="true"){b.render("widgets.weather.view.yrDisclaimer",{yrUrl:""},function(B){$(l).append(B);
});}$("table.verticalData").delegate("td","mouseover mouseleave",c);$("table.verticalData").delegate("th","mouseover mouseleave",c);
});}else{b.render("widgets.weather.view.longtermVertical",{place:y,periods:u.forecast.text_tabular,periodsToShow:j,today:t,getDate:o,getDay:s,getHours:r,hideWind:x,getWindSymbolClass:q,round:Math.round,expandable:k},function(A){$(l).html(A);
if(n=="true"){b.render("widgets.weather.view.yrDisclaimer",{yrUrl:""},function(B){$(l).append(B);
});}$("table.horizontalData").delegate("td","mouseover mouseleave",g);$("table.horizontalData").delegate("th","mouseover mouseleave",g);
$(".collapsable").hide();$(".expandCollapse").html('<span class="button">+</span>');
$(".expandCollapse").attr("title","Vis flere dager");$(".expandCollapse").click(function(){$(".collapsable").toggle();
if($(this).html()=="+"){$(this).html("-");$(this).attr("title","Vis færre dager");
}else{$(this).html("+");$(this).attr("title","Vis flere dager");}});});
}}function c(l){var j=$(this).index();if(l.type=="mouseover"&&$(this).index()!=0){var k=$(this).parents("table.verticalData");
$(k).find("th").eq($(this).index()).addClass("hover");$(k).find("td").each(function(o){if(j==$(this).index()){$(this).addClass("hover");
var n=$(this).find(".timeperiod_hours").html();$(this).parents("tr").find("th.timeperiod span.time").html(n);
}});}else{$(this).parents("table.verticalData").find("th").eq($(this).index()).removeClass("hover");
$(this).parents("table.verticalData").find("td").each(function(n){if(j==$(this).index()){$(this).removeClass("hover");
$(this).parents("tr").find("th.timeperiod span.time").html("");}});}}function g(j){var k=$(this).parents("tr");
if(j.type=="mouseover"&&$(k).index()!=0){$(k).find("th").addClass("hover");
$(k).find("td").each(function(n){$(this).addClass("hover");var o=$(this).index();
var l=$(this).find(".timeperiod_hours").html();$(this).parents("table.horizontalData").find("th").each(function(q){if(o==$(this).index()){$(this).find("div span.time").html(l);
}});});}else{$(k).find("th").removeClass("hover");$(k).find("td").each(function(l){$(this).removeClass("hover");
$(this).find(".timeperiod_hours").addClass("hidden");});$(this).parents("table.horizontalData").find("th").each(function(l){$(this).find("div span.time").html("");
});}}function d(){}return{init:f,destroy:d};}});
/*!



 resources js widgets weather forecastSummary.js



*/
mno.core.register({id:"widget.weather.forecastSummary",creator:function(b){var c,a;
function e(){c=b.model[0];a=b.container[0];b.listen({"weatherSearch-searchPerformed":function(g){if(g.forecast!=undefined){f(g.forecast.forecast.text_location);
}else{$(a).hide();}}});}function f(g){b.render("widgets.weather.view.forecastSummary",{forecastSummary:g},function(k){$(a).html(k);
var h=$(a).find(".expandCollapse");var n=$(h).find(".text");var l=$(h).find(".arrow");
var j=$(a).find(".forecasts");$(j).hide();$(h).click(function(){$(j).toggle();
if($(l).hasClass("down")){$(l).removeClass("down").addClass("up");$(n).html("Skjul ");
}else{$(l).removeClass("up").addClass("down");$(n).html("Vis ");}});if(c.showYr){b.render("widgets.weather.view.yrDisclaimer",{yrUrl:""},function(o){$(a).append(o);
});}});}function d(){}return{init:e,destroy:d};}});
/*!



 resources js widgets weather hourByHour.js



*/
mno.core.register({id:"widget.weather.hourByHour",creator:function(l){var f,c;
function n(){if(l.container){l.container.each(function(r,q){var o=l.model[r];
f=o.baseUrl;c=o.pointHourInterval;if(c==undefined||c==""){c=1;}l.listen({"weatherSearch-searchPerformed":function(s){if(s.forecast!=undefined){a(q,s.forecast,o.showYr,o.weatherDisplayName);
}else{$(q).hide();}}});if(o.latitude!=""&&o.longitude!=""){h(q,o.latitude,o.longitude,o.showYr,o.weatherDisplayName);
}});}}function h(q,w,o,s,x){var t=parseFloat(w).toFixed(4);var u=parseFloat(o).toFixed(4);
var v=f+"/json/reverseGeoCode.json?latlng="+t+","+u+"&provider=yr&callback=?";
function r(z){jQuery.ajax({type:"GET",url:z,dataType:"jsonp",cache:"true",success:function(A){y(f+A.local_url+"varsel.json?hourly=true&callback=?");
},error:function(A,C,B){mno.core.log(1,"error retrieveForecast: "+C+" "+B);
}});}function y(z){jQuery.ajax({type:"GET",url:z,dataType:"jsonp",cache:true,jsonpCallback:"varsel",success:function(A){if(A.error==false){a(q,A,s,x);
}else{mno.core.log(1,"error retrieveForecast: "+A.error.errorMessage);}},error:function(A,C,B){mno.core.log(1,"error retrieveForecast: "+C+" "+B);
}});}r(v);}function k(t,r){var q=t*25;var o=r.indexOf("n")!=-1;if(o){q=375+t*25;
}var s={url:"/skins/global/gfx/weather/icons_25x25.png",yPos:q};return s;
}function a(q,v,t,A){var w=[];var B=[];var x=[];var s=[];var r=[];if(v.forecast.text_tabular_hourly&&v.forecast.text_tabular_hourly.length>0){var z=v.forecast.text_tabular_hourly;
var C;var y=0;var u=0;var o;jQuery.each(z,function(G,E){if(G==24){return false;
}if(G==0){o=E.time_from_millis+(24*60*60*1000);}else{if(E.time_from_millis>o){return false;
}}if(C==undefined){C=new Date(E.time_from_millis);}y=y+(E.precipitation_minvalue>0?E.precipitation_minvalue:E.precipitation_value);
u=u+E.precipitation_maxvalue;if(G%c==0){var H=new Date(E.time_to_millis);
var F=(E.time_from_millis+E.time_to_millis)/2;var D="#007AA6";if(E.temperature_value>0){D="#990000";
}w.push({x:F,y:E.temperature_value,from:C,to:H,color:D,marker:{fillColor:D,states:{hover:{fillColor:D,radius:5}}},weather:E.symbol_name});
B.push({x:F,y:y,from:C,to:H});x.push({x:F,y:(u-y>0?u-y:0),from:C,to:H});
r.push(k(E.symbol_number,E.symbol_var));s.push({speed:Math.round(E.windSpeed_mps),direction:E.windDirection_code});
y=0;u=0;C=undefined;}});}if(A==undefined||A==""){A=v.forecast.name;}j(($(q).find(".hourByHourDiv"))[0],w,B,x,r,s,t);
$(q).find("h2").html("Korttidsvarselet for "+A);}function j(s,x,t,w,o,q,r){if(typeof Highcharts==="undefined"){l.getScript({url:l.publication.url+"resources/js/mno/utils/highcharts.js",callback:function(){j(s,x,t,w,o,q,r);
}});}else{Highcharts.setOptions({global:{useUTC:false}});var u=new Highcharts.Chart({chart:{renderTo:s,events:{load:v}},credits:{enabled:false},title:{text:"Meteogram"},subtitle:{text:function(){if(r=="true"){return'Værvarsel fra <a href="http://yr.no">yr.no</a> levert av <a href="http://met.no">Meterologisk Institutt</a> og <a href="http://nrk.no">NRK</a>';
}else{return null;}}()},xAxis:[{type:"datetime",tickInterval:c*3600*1000,tickPosition:"inside",tickLength:30,gridLineWidth:1,offset:40,showLastLabel:true,labels:{formatter:function(){return Highcharts.dateFormat("%H",this.value);
}},title:{text:""}},{linkedTo:0,type:"datetime",tickInterval:24*3600*1000,labels:{formatter:function(){if(c>1){return d(this.value);
}return e(this.value);},align:"left"},opposite:true,tickLength:20,gridLineWidth:1}],yAxis:[{labels:{formatter:function(){return this.value+"°C";
}},title:{text:null},gridLineWidth:1},{labels:{formatter:function(){return this.value+"°C";
}},title:{text:null},opposite:true,linkedTo:0,gridLineWidth:0},{title:{text:null},labels:{enabled:false},gridLineWidth:0}],tooltip:{formatter:function(){return"kl."+Highcharts.dateFormat("%H",this.point.from)+"-"+Highcharts.dateFormat("%H",this.point.to)+": "+(this.series.name=="Nedbør_max"?"max "+Highcharts.numberFormat(this.total,1,","):(this.series.name=="Nedbør_min"?"min "+Highcharts.numberFormat(this.y,1,","):this.y))+(this.series.name=="Temperatur"?"°C, "+this.point.weather:"mm");
}},legend:{enabled:false},plotOptions:{spline:{lineWidth:2,states:{hover:{enabled:true,lineWidth:3}},marker:{enabled:true,states:{hover:{enabled:true,symbol:"circle",radius:5,lineWidth:3}}}},column:{stacking:"normal"}},series:[{name:"Nedbør_max",color:"#B4C9E2",type:"column",yAxis:2,data:w,groupPadding:0,pointPadding:0,dataLabels:{enabled:true,color:"#4572A7",y:12,formatter:function(){if(this.total==0){return"";
}return Highcharts.numberFormat(this.total,1,",");}}},{name:"Nedbør_min",color:"#4572A7",type:"column",groupPadding:0,pointPadding:0,yAxis:2,data:t,dataLabels:{color:"#B4C9E2",enabled:true,y:12,formatter:function(){if(this.y=="0"){return"";
}return Highcharts.numberFormat(this.y,1,",");}}},{name:"Temperatur",type:"spline",color:"#666",yAxis:0,data:x}]},function(B){var y=$(s).find(".highcharts-container");
$.each(B.series[2].data,function(E,C){var D=B.renderer.clipRect(C.plotX+B.plotLeft-15,C.plotY+B.plotTop-29,25,25);
B.renderer.image(o[E].url,C.plotX+B.plotLeft-15,C.plotY+B.plotTop-30-o[E].yPos,25,1175).clip(D).attr({zIndex:5}).add();
var F=document.createElement("div");var H=document.createElement("div");
var G=document.createElement("div");$(G).html(q[E].speed);$(y).append(F);
$(F).append(H);$(F).append(G);$(F).addClass("wind");$(H).addClass("direction").addClass(b(q[E].speed)).addClass("degree"+q[E].direction);
$(G).addClass("speed");$(F).css("position","absolute").css("left",C.plotX+B.plotLeft-15).css("top",335);
});var z=document.createElement("div");$(z).html("m/s").addClass("wind").css("position","absolute").css("left",B.plotLeft-34).css("top",357);
$(y).append(z);var A=document.createElement("div");$(A).html("kl.").css("position","absolute").css("left",B.plotLeft-24).css("top",370);
$(y).append(A);});}function v(){var B=0.1,G="#990000",y="#007AA6";var z=this.series[2],A,E;
if(this.renderer.box.tagName==="svg"){var F=z.yAxis.translate(B),D=Math.round(this.plotHeight-F),C=D+0.01;
z.graph.attr({stroke:{linearGradient:[0,D,0,C],stops:[[0,G],[1,y]]}});}for(A=0;
A<z.data.length;A++){E=z.data[A];E.color=E.y<B?y:G;if(E.graphic){E.graphic.attr({fill:E.color});
}}delete z.pointAttr.hover.fill;delete z.pointAttr[""].fill;}}function b(o){if(o<1.6){return"strength1";
}else{if(o<3.4){return"strength2";}else{if(o<5.5){return"strength3";}else{if(o<8){return"strength4";
}else{if(o<10.8){return"strength5";}else{if(o<13.9){return"strength6";}else{if(o<17.2){return"strength7";
}else{if(o<20.8){return"strength8";}else{if(o<24.5){return"strength9";}else{if(o<28.5){return"strength10";
}else{if(o<32.6){return"strength11";}else{if(o>=32.6){return"strength12";
}}}}}}}}}}}}}function e(r){var t=Highcharts.dateFormat("%m",r);var o=Highcharts.dateFormat("%e",r);
var q=Highcharts.dateFormat("%a",r);var s;var u;switch(t){case"01":s="januar";
break;case"02":s="februar";break;case"03":s="mars";break;case"04":s="april";
break;case"05":s="mai";break;case"06":s="juni";break;case"07":s="juli";
break;case"08":s="august";break;case"09":s="september";break;case"10":s="oktober";
break;case"11":s="november";break;case"12":s="desember";break;}switch(q){case"Mon":u="Mandag";
break;case"Tue":u="Tirsdag";break;case"Wed":u="Onsdag";break;case"Thu":u="Torsdag";
break;case"Fri":u="Fredag";break;case"Sat":u="Lørdag";break;case"Sun":u="Søndag";
break;}return'<span style="font-size: 12px; font-weight: bold">'+u+"</span> "+o+"."+s;
}function d(r){var t=Highcharts.dateFormat("%m",r);var o=Highcharts.dateFormat("%e",r);
var q=Highcharts.dateFormat("%a",r);var s;var u;switch(t){case"01":s="jan.";
break;case"02":s="feb.";break;case"03":s="mar.";break;case"04":s="apr.";
break;case"05":s="mai";break;case"06":s="jun.";break;case"07":s="jul.";
break;case"08":s="aug.";break;case"09":s="sep.";break;case"10":s="okt.";
break;case"11":s="nov.";break;case"12":s="des.";break;}switch(q){case"Mon":u="Man.";
break;case"Tue":u="Tirs.";break;case"Wed":u="Ons.";break;case"Thu":u="Tors.";
break;case"Fri":u="Fre.";break;case"Sat":u="Lør.";break;case"Sun":u="Søn.";
break;}return'<span style="font-size: 12px; font-weight: bold">'+u+"</span> "+o+"."+s;
}function g(){}return{init:n,destroy:g};}});
/*!



 resources js widgets weather hourByHourMap.js



*/
mno.core.register({id:"widget.weather.hourByHourMap",extend:["widget.map.default"],creator:function(o){var t,a,x,z=[],w,e,l,J;
var h=new Image();h.src=o.publication.url+"skins/global/gfx/weather/icons_25x25.png";
var C=new Image();C.src=o.publication.url+"skins/global/gfx/weather/icons_55x55.png";
var E=o.memoize(B);var F=o.memoize(c);var q=false;var r=0,n=0;function H(){a=o.model[0];
x=o.container[0];e=a.baseUrl;l=a.weatherSearchPage;w=(a.mobileVersion=="true");
o.listen({gapiReady:function(){J=google.maps;b(a);}});}function b(g){if(window.location.href.indexOf(l)==-1){L(g.mapData.positionData[0].point.lat,g.mapData.positionData[0].point.lng,g.zoomLevel,g.mapTypeId);
}else{o.listen({"weatherSearch-searchPerformed":function(Q){if(Q.forecast!=undefined){var R=Q.latlng.split(",")[0];
var P=Q.latlng.split(",")[1];var O=Q.forecast.forecast;L(R,P,9,g.mapTypeId,O);
}else{s(Q.place);}}});}}function L(Q,g,R,P,S){var O=$(x).find("div.map")[0];
if(w){t=I(Q,g,R,J.MapTypeId[P],O);}else{t=f(Q,g,R,J.MapTypeId[P],O);}if(a.showYr=="true"){o.render("widgets.weather.view.yrDisclaimer",{yrUrl:""},function(T){$(x).append(T);
});}J.event.addListener(t,"bounds_changed",function(){G(t,Q,g,S);});J.event.addListener(t,"click",function(T){var U=T.latLng;
setTimeout(function(){u(U.lat(),U.lng());},500);});if(w){$(O).bind("touchstart",function(T){q=true;
r=T.originalEvent.touches[0].pageY;});$(O).bind("touchend",function(){q=false;
});$(O).bind("touchmove",function(T){if(!q){return;}n=T.originalEvent.touches[0].pageY;
window.scrollBy(0,(r-n));});}}function G(P,O,g,Q){K();if(Q){N(O,g,Q);}A(P.getBounds(),P.getZoom());
}function N(Q,O,R){var P=new J.LatLng(Q,O);var g=R.text_tabular_hourly[0];
j(g.symbol_number,g.symbol_var,g.windSpeed_mps,g.windDirection_code,g.temperature_value,R.name,P);
}function f(S,P,T,g,Q){try{var O={zoom:T!==null&&T!==""?parseInt(T,10):10,center:new J.LatLng(S,P),mapTypeId:g,mapTypeControl:true,streetViewControl:false,mapTypeControlOptions:{mapTypeIds:[J.MapTypeId.ROADMAP,J.MapTypeId.SATELLITE,J.MapTypeId.TERRAIN,J.MapTypeId.HYBRID],position:J.ControlPosition.TOP_RIGHT,style:J.MapTypeControlStyle.DROPDOWN_MENU}};
return new J.Map(Q,O);}catch(R){mno.core.log(3,"widgets/weather/hourByHourMap.js at initMap stack"+R.stack);
}}function I(S,P,T,g,Q){try{var O={zoom:T!==null&&T!==""?parseInt(T,10):10,center:new J.LatLng(S,P),mapTypeId:g,streetViewControl:false,mapTypeControl:false,disableDoubleClickZoom:true,draggable:false};
return new J.Map(Q,O);}catch(R){mno.core.log(3,"widgets/weather/hourByHourMap.js at initMap stack"+R.stack);
}}function K(){if(z){for(i=0;i<z.length;i++){z[i].setMap(null);}z.length=0;
}}function u(P,g){var Q=P.toFixed(4);var O=g.toFixed(4);window.location.href=l+"?lat="+Q+"&lng="+O;
}function A(P,S){var g=P.getSouthWest().toUrlValue(2);var Q=P.getNorthEast().toUrlValue(2);
var O="P.PPLC";if(S>11){O="P.PPL";}else{if(S>9){O="P.PPLA2";}else{if(S>6){O="P.PPLA";
}}}var R=e+"json/findLocations.json?code="+O+"&latLngSW="+g+"&latLngNE="+Q+"&callback=?";
jQuery.ajax({type:"GET",url:R,dataType:"jsonp",cache:"true",jsonpCallback:"weatherMarker",success:function(T){v(T);
},error:function(T,V,U){mno.core.log(1,"error getWeatherMarkers: "+V+" "+U);
}});}function v(g){jQuery.each(g.locations,function(O,P){d(P);});}function d(g){var P=g.latLng.split(",");
var O=new J.LatLng(P[0],P[1]);if(g.text_tabular&&g.text_tabular.length>0){var Q=g.text_tabular[0];
j(Q.symbol_number,Q.symbol_var,Q.windSpeed_mps,Q.windDirection_code,Q.temperature_value,g.name,O);
}}function y(g,P,Q){var O=new J.Marker({position:Q,icon:g,title:P,map:t,draggable:false});
z.push(O);J.event.addListener(O,"click",function(R){var S=R.latLng;setTimeout(function(){u(S.lat(),S.lng());
},500);});}function j(O,S,Y,U,X,g,Q){var Z=document.createElement("canvas");
if(!Z.getContext){var W=O*55;var R=S.indexOf("n")!=-1;if(R){W=W+O*55;}var T=new J.MarkerImage(o.publication.url+"skins/global/gfx/weather/icons_55x55.png",new J.Size(55,55),new J.Point(0,W));
y(T,g,Q);}else{var P=F(Y,U);var V=new Image();V.onload=function(){var aa=E(V,O,S,X);
y(aa,g,Q);};V.src=P;}}function c(P,R){var O=document.createElement("canvas");
var Q=O.getContext("2d");Q.width=25;Q.height=25;Q.translate(25/2,25/2);
Q.rotate(M(R)*Math.PI/180);Q.translate(-25/2,-25/2);var g=k(P,25);Q.drawImage(h,0,g,25,25,0,0,25,25);
return O.toDataURL();}function B(R,g,Q,U){var O=document.createElement("canvas");
var V=O.getContext("2d");O.width=80;O.height=60;V.fillStyle="#FFFFFF";V.beginPath();
V.arc(58,42,16,0,Math.PI*2,true);V.closePath();V.fill();V.drawImage(R,49,31);
V.shadowOffsetX=2;V.shadowOffsetY=2;V.shadowBlur=2;V.shadowColor="rgba(0, 0, 0, 0.7)";
var S=g*55;var P=Q.indexOf("n")!=-1;if(P){S=S+g*55;}V.drawImage(C,0,S,55,55,0,0,55,55);
var T="#007aa6";if(U>0){T="#990000";}V.fillStyle=T;V.beginPath();V.arc(55,20,12,0,Math.PI*2,true);
V.closePath();V.fill();V.fillStyle="#FFFFFF";V.fillText(U+"°C",45,23);return O.toDataURL();
}function M(g){if(g=="N"){return 180;}else{if(g=="NNE"){return 202;}else{if(g=="NE"){return 225;
}else{if(g=="ENE"){return 247;}else{if(g=="E"){return 270;}else{if(g=="ESE"){return 295;
}else{if(g=="SE"){return 315;}else{if(g=="SSE"){return 337;}else{if(g=="S"){return 0;
}else{if(g=="SSW"){return 22;}else{if(g=="SW"){return 45;}else{if(g=="WSW"){return 67;
}else{if(g=="W"){return 90;}}}}}}}}}}}}}}function k(O,g){if(O<1.6){return 35*g;
}else{if(O<3.4){return 36*g;}else{if(O<5.5){return 37*g;}else{if(O<8){return 38*g;
}else{if(O<10.8){return 39*g;}else{if(O<13.9){return 40*g;}else{if(O<17.2){return 41*g;
}else{if(O<20.8){return 42*g;}else{if(O<24.5){return 43*g;}else{if(O<28.5){return 44*g;
}else{if(O<32.6){return 45*g;}else{if(O>=32.6){return 46*g;}}}}}}}}}}}}}function s(g){$(x).html("Værvarsel ikke tilgjengelig for "+g);
}function D(){}return{init:H,destroy:D};}});
/*!



 resources js widgets weather list.js



*/
mno.core.register({id:"widget.weather.list",creator:function(a){var d;
function e(){if(a.container){a.container.each(function(h,g){var f=a.model[h];
d=f.baseUrl;c(g,f.showListSelector,f.listCategory,f.listId,f.weatherSearchPage,f.showYr);
});}}function c(h,f,k,j,q,l){var w=k;var r=j;var g=d+"json/showList.json?categoryId="+w+"&listId="+r+"&callback=?";
function t(x,y){jQuery.ajax({type:"GET",url:y,dataType:"jsonp",cache:"true",success:function(z){if(z.items.length>0){o(x,z);
}else{mno.core.log(1,"no items in the list "+z.list.name);}},error:function(z,B,A){mno.core.log(1,"error retrieveList: "+B+" "+A);
}});}function n(z){var y=new Date(z);var x=y.getHours();if(x==0){x=24;}return x;
}function v(x,y,z){var A=x.replace(" ","_");return"sted="+escape(A)+"&kommune="+escape(y)+"&fylke="+escape(z);
}function o(x,y){a.render("widgets.weather.view.list",{list:y.list,items:y.items,findHours:n,searchPage:q,getPlaceQuery:v},function(z){$(x).html(z);
if(f=="true"){u();}else{if(l=="true"){a.render("widgets.weather.view.yrDisclaimer",{yrUrl:""},function(A){$(x).append(A);
});}}});}function u(){jQuery.ajax({type:"GET",url:d+"json/getallcategories.json",dataType:"jsonp",cache:"true",success:function(x){s(x);
},error:function(x,z,y){mno.core.log(1,"error retrieveExistingLists: "+z+" "+y);
}});}function s(x){a.render("widgets.weather.view.listSelector",{allCategories:x.categories},function(y){$(h).append(y);
$(h).find(".weatherSelect option[value="+w+"_"+r+"]").attr("selected",true);
$(h).find(".weatherSelect").change(function(){var z=$(this).val().split("_")[0];
var A=$(this).val().split("_")[1];c(h,f,z,A);});mno.utils.form.select(h);
if(l=="true"){a.render("widgets.weather.view.yrDisclaimer",{yrUrl:""},function(z){$(h).append(z);
});}});}t(h,g);}function b(){}return{init:e,destroy:b};}});
/*!



 resources js widgets weather nowForecastForHeader.js



*/
mno.core.register({id:"widget.weather.nowForecastForHeader",creator:function(k){var e,a,f,d,g;
function n(){e=k.model[0];a=k.container[0];f=e.baseUrl;d=e.place;g=e.weatherSearchPage;
c();}function c(){jQuery.ajax({url:f+"json/searchLocations.json?country=no",dataType:"jsonp",jsonpCallback:"searchLocations"+d,cache:true,data:{term:d},success:function(r){if(r.length>0){var q=r[0].value;
var o=l(r[0].name,r[0].kommune,r[0].fylke);j(q,o);}else{mno.core.log(1,"empty result from getForecastForPlace on "+d);
}}});}function l(o,q,r){var s=o.replace(" ","_");return"sted="+escape(s)+"&kommune="+escape(q)+"&fylke="+escape(r)+"&country=no";
}function j(q,o){jQuery.ajax({type:"GET",url:q+"?count=1&hourly=true",dataType:"jsonp",cache:true,jsonpCallback:"retrieveForecastCallback",success:function(r){if(r.error==false){b(r,o);
}else{mno.core.log(1,"error retrieveForecast in miniforecast: "+r.errorMessage);
}},error:function(r,t,s){mno.core.log(1,"error retrieveForecast in miniforecast: "+t+" "+s);
}});}function b(o,q){if(o.forecast.text_tabular_hourly[0]!==undefined){k.render("widgets.weather.view.miniWeather",{weather:o.forecast.text_tabular_hourly[0],placeQuery:q,place:o.forecast.name,searchPage:g},function(r){$(a).html(r);
});}}function h(){}return{init:n,destroy:h};}});
/*!



 resources js widgets weather tabbedLists.js



*/
mno.core.register({id:"widget.weather.tabbedLists",creator:function(d){var g;
function h(){if(d.container){d.container.each(function(o,n){var l=d.model[o];
var k=$(n);var j=[];var q=l.lister.length;g=l.baseUrl;jQuery.each(l.lister,function(r,s){c(j,k,s,r,q,l.weatherSearchPage,l.showYr);
});});}}function c(j,k,q,l,r,n,o){jQuery.ajax({type:"GET",url:g+"json/showList.json?categoryId="+q.category+"&listId="+q.id+"&callback=?",dataType:"jsonp",cache:"true",success:function(s){if(s.items.length>0){j[l]=s;
}else{mno.core.log(1,"no items in list "+s.list.name);}if(j.length==r){a(j,k,n,o);
}},error:function(s,u,t){mno.core.log(1,"error retrieveTabbedList: "+u+" "+t);
}});}function b(l){var k=new Date(l);var j=k.getHours();if(j==0){j=24;}return j;
}function f(j,k,l){var n=j.replace(" ","_");return"sted="+escape(n)+"&kommune="+escape(k)+"&fylke="+escape(l);
}function a(j,k,l,n){d.render("widgets.weather.view.tabbedLists",{uniqueId:Math.ceil(Math.random()*100000),lists:j,findHours:b,searchPage:l,getPlaceQuery:f},function(o){k.html(o);
if(n=="true"){d.render("widgets.weather.view.yrDisclaimer",{yrUrl:""},function(q){k.append(q);
});}});}function e(){}return{init:h,destroy:e};}});
/*!



 resources js widgets weather weatherSearch.js



*/
mno.core.register({id:"widget.weather.weatherSearch",require:["mno/utils/jquery-ui-1_8_16_custom_min"],wait:["widget.weather.articleLongtermForecast","widget.weather.hourByHourMap","widget.weather.hourByHour","widget.weather.forecastSummary"],creator:function(a){var c;
function d(){if(a.container===null){return;}var e=a.container[0];var k=a.model[0];
c=k.baseUrl;var o=k.weatherSearchPage;$(e).find("#autosearch").autocomplete({source:function(z,y){jQuery.ajax({url:c+"json/searchLocations.json",dataType:"jsonp",jsonpCallback:"searchLocation"+z.term,cache:true,data:{term:z.term},success:function(A){y(jQuery.map(A,function(B){return{label:B.name+" ("+B.kommune+") ("+B.fylke+")",value:B.name+" ("+B.kommune+") ("+B.fylke+") ("+B.countryCode.toLowerCase()+")",country:B.countryCode.toLowerCase()};
}));}});},minLength:2,focus:function(y,z){$(z.item).addClass("focused");
}}).data("autocomplete")._renderItem=function(y,z){return $("<li></li>").data("item.autocomplete",z).append($("<a></a>").html(z.label).append($("<img src='/skins/global/gfx/blank.gif'></img>").addClass("flag").addClass("flag-"+z.country))).appendTo(y);
};$(e).find("form").bind("submit",function(B){var z=$("form input#autosearch");
var D=z.val().split(" (");var E=D[0];if(D.length>1){var A=D[1].replace(")","");
if(D.length>2){var y=D[2].replace(")","");if(D.length>3){var C=D[3].replace(")","");
window.location=o+"?sted="+escape(E)+"&kommune="+escape(A)+"&fylke="+escape(y)+"&country="+escape(C);
}else{window.location=o+"?sted="+escape(E)+"&kommune="+escape(A)+"&fylke="+escape(y);
}}else{window.location=o+"?sted="+escape(E)+"&kommune="+escape(A);}}else{window.location=o+"?sted="+escape(E);
}return false;});var v=mno.utils.params.getAllParameters();if(v.sted!=undefined){var h=v.sted;
var x=v.kommune;var j=v.fylke;var n=v.list;var f=v.country;a.listen({gapiReady:function(){l(h,x,j,f,n);
}});}else{if(v.lat!=undefined){var q=v.lat;var r=v.lng;a.listen({gapiReady:function(){t(q,r);
}});}}function t(B,z){var C=parseFloat(B).toFixed(4);var A=parseFloat(z).toFixed(4);
var y=c+"json/reverseGeoCode.json?latlng="+C+","+A+"&provider=mixed&callback=?";
jQuery.ajax({type:"GET",url:y,dataType:"jsonp",cache:"true",success:function(E){var D=c+E.local_url+"varsel.json?hourly=true";
u(D,B+","+z,B+","+z);},error:function(D,F,E){mno.core.log(1,"error retrieveForecast: "+F+" "+E);
}});}function l(C,H,D,z,F){var B=decodeURIComponent(C);var A=C;var E=c+"json/searchLocations.json?callback=?&term="+B;
if(H!=undefined){var y=decodeURIComponent(H);A=A+" ("+y+")";E=E+"&kommune="+y;
}if(D!=undefined){var G=decodeURIComponent(D);A=A+" ("+G+")";E=E+"&fylke="+G;
}if(F!=undefined){E=E+"&list="+F;}if(z!=undefined){A=A+" ("+z+")";E=E+"&country="+z;
}jQuery.ajax({type:"GET",url:E,dataType:"jsonp",cache:"true",success:function(J){if(J.length>0){var I=J[0].value+"?hourly=true";
$(e).find("#autosearch").val(A);u(I,J[0].latLng,C);if(J.length>1){s(J);
}}else{mno.core.log(1,"empty result from weathersearch on "+C);a.notify({type:"weatherSearch-searchPerformed",data:{place:A}});
}}});}function w(y,z,A,C){var B=y.replace(" ","_");return"sted="+escape(B)+"&kommune="+escape(z)+"&fylke="+escape(A)+"&country="+C;
}function s(y){a.render("widgets.weather.view.searchResultOptions",{places:y,searchPage:o,getPlaceQuery:w},function(z){$(e).find("#searchResultOptions").html(z).show();
});}function u(y,A,z){jQuery.ajax({type:"GET",url:y,dataType:"jsonp",cache:true,jsonpCallback:"retrieveForecastCallback",success:function(B){if(B.error===false){a.notify({type:"weatherSearch-searchPerformed",data:{forecast:B,latlng:A}});
}else{mno.core.log(1,"error retrieveForecast in search: "+B.errorMessage);
a.notify({type:"weatherSearch-searchPerformed",data:{place:z}});}},error:function(B,D,C){mno.core.log(1,"error retrieveForecast in search: "+D+" "+C);
}});}if(navigator.geolocation){var g=jQuery('<button class="floatLeft">Finn meg</button>');
g.appendTo(a.container.find("form"));g.bind("click",function(){var A,z;
navigator.geolocation.getCurrentPosition(function(B){A=B.coords.latitude.toFixed(4);
z=B.coords.longitude.toFixed(4);window.location=o+"?lat="+A+"&lng="+z;},function y(){},{enableHighAccuracy:true,maximumAge:30000,timeout:27000});
navigator.geolocation.watchPosition(function(B){A=B.coords.latitude.toFixed(4);
z=B.coords.longitude.toFixed(4);window.location=o+"?lat="+A+"&lng="+z;},function y(){},{enableHighAccuracy:true,maximumAge:30000,timeout:27000});
return false;});}}function b(){}return{init:d,destroy:b};}});
/*!



 resources js mno ads colorbox.js



*/
(function(a5,a3,a1){function aa(h,f,b){var a=a3.createElement(h);
return f&&(a.id=aW+f),b&&(a.style.cssText=b),a5(a);}function aB(e){var d=aD.length,f=(aj+e)%d;
return f<0?d+f:f;}function a8(d,c){return Math.round((/%/.test(d)?(c==="x"?aC.width():aC.height())/100:1)*parseInt(d,10));
}function a9(b){return ap.photo||/\.(gif|png|jpe?g|bmp|ico)((#|\?).*)?$/i.test(b);
}function a7(){var a;ap=a5.extend({},a5.data(ak,aX));for(a in ap){a5.isFunction(ap[a])&&a.slice(0,2)!=="on"&&(ap[a]=ap[a].call(ak));
}ap.rel=ap.rel||ak.rel||"nofollow",ap.href=ap.href||a5(ak).attr("href"),ap.title=ap.title||ak.title,typeof ap.href=="string"&&(ap.href=a5.trim(ap.href));
}function a6(a,d){a5.event.trigger(a),d&&d.call(ak);}function a4(){var h,f=aW+"Slideshow_",n="click."+aW,l,k,j;
ap.slideshow&&aD[1]?(l=function(){av.text(ap.slideshowStop).unbind(n).bind(aS,function(){if(ap.loop||aD[aj+1]){h=setTimeout(ad.next,ap.slideshowSpeed);
}}).bind(aT,function(){clearTimeout(h);}).one(n+" "+aR,k),aK.removeClass(f+"off").addClass(f+"on"),h=setTimeout(ad.next,ap.slideshowSpeed);
},k=function(){clearTimeout(h),av.text(ap.slideshowStart).unbind([aS,aT,aR,n].join(" ")).one(n,function(){ad.next(),l();
}),aK.removeClass(f+"on").addClass(f+"off");},ap.slideshowAuto?l():k()):aK.removeClass(f+"off "+f+"on");
}function a2(a){af||(ak=a,a7(),aD=a5(ak),aj=0,ap.rel!=="nofollow"&&(aD=a5("."+aV).filter(function(){var c=a5.data(this,aX).rel||this.rel;
return c===ap.rel;}),aj=aD.index(ak),aj===-1&&(aD=aD.add(ak),aj=aD.length-1)),ah||(ah=ag=!0,aK.show(),ap.returnFocus&&a5(ak).blur().one(aQ,function(){a5(this).focus();
}),aL.css({opacity:+ap.opacity,cursor:ap.overlayClose?"pointer":"auto"}).show(),ap.w=a8(ap.initialWidth,"x"),ap.h=a8(ap.initialHeight,"y"),ad.position(),aN&&aC.bind("resize."+aM+" scroll."+aM,function(){aL.css({width:aC.width(),height:aC.height(),top:aC.scrollTop(),left:aC.scrollLeft()});
}).trigger("resize."+aM),a6(aU,ap.onOpen),aq.add(ax).hide(),ar.html(ap.close).show()),ad.load(!0));
}function a0(){!aK&&a3.body&&(ab=!1,aC=a5(a1),aK=aa(ac).attr({id:aX,"class":aO?aW+(aN?"IE6":"IE"):""}).hide(),aL=aa(ac,"Overlay",aN?"position:absolute":"").hide(),aJ=aa(ac,"Wrapper"),aI=aa(ac,"Content").append(aA=aa(ac,"LoadedContent","width:0; height:0; overflow:hidden"),ay=aa(ac,"LoadingOverlay").add(aa(ac,"LoadingGraphic")),ax=aa(ac,"Title"),aw=aa(ac,"Current"),au=aa(ac,"Next"),at=aa(ac,"Previous"),av=aa(ac,"Slideshow").bind(aU,a4),ar=aa(ac,"Close")),aJ.append(aa(ac).append(aa(ac,"TopLeft"),aH=aa(ac,"TopCenter"),aa(ac,"TopRight")),aa(ac,!1,"clear:left").append(aG=aa(ac,"MiddleLeft"),aI,aF=aa(ac,"MiddleRight")),aa(ac,!1,"clear:left").append(aa(ac,"BottomLeft"),aE=aa(ac,"BottomCenter"),aa(ac,"BottomRight"))).find("div div").css({"float":"left"}),az=aa(ac,!1,"position:absolute; width:9999px; visibility:hidden; display:none"),aq=au.add(at).add(aw).add(av),a5(a3.body).append(aL,aK.append(aJ,az)));
}function aY(){return aK?(ab||(ab=!0,ao=aH.height()+aE.height()+aI.outerHeight(!0)-aI.height(),an=aG.width()+aF.width()+aI.outerWidth(!0)-aI.width(),am=aA.outerHeight(!0),al=aA.outerWidth(!0),aK.css({"padding-bottom":ao,"padding-right":an}),au.click(function(){ad.next();
}),at.click(function(){ad.prev();}),ar.click(function(){ad.close();}),aL.click(function(){ap.overlayClose&&ad.close();
}),a5(a3).bind("keydown."+aW,function(d){var c=d.keyCode;ah&&ap.escKey&&c===27&&(d.preventDefault(),ad.close()),ah&&ap.arrowKey&&aD[1]&&(c===37?(d.preventDefault(),at.click()):c===39&&(d.preventDefault(),au.click()));
}),a5("."+aV,a3).live("click",function(b){b.which>1||b.shiftKey||b.altKey||b.metaKey||(b.preventDefault(),a2(this));
})),!0):!1;}var aZ={transition:"elastic",speed:300,width:!1,initialWidth:"600",innerWidth:!1,maxWidth:!1,height:!1,initialHeight:"450",innerHeight:!1,maxHeight:!1,scalePhotos:!0,scrolling:!0,inline:!1,html:!1,iframe:!1,fastIframe:!0,photo:!1,href:!1,title:!1,rel:!1,opacity:0.9,preloading:!0,current:"image {current} of {total}",previous:"previous",next:"next",close:"close",open:!1,returnFocus:!0,reposition:!0,loop:!0,slideshow:!1,slideshowAuto:!0,slideshowSpeed:2500,slideshowStart:"start slideshow",slideshowStop:"stop slideshow",onOpen:!1,onLoad:!1,onComplete:!1,onCleanup:!1,onClosed:!1,overlayClose:!0,escKey:!0,arrowKey:!0,top:!1,bottom:!1,left:!1,right:!1,fixed:!1,data:undefined},aX="colorbox",aW="cbox",aV=aW+"Element",aU=aW+"_open",aT=aW+"_load",aS=aW+"_complete",aR=aW+"_cleanup",aQ=aW+"_closed",aP=aW+"_purge",aO=!a5.support.opacity&&!a5.support.style,aN=aO&&!a1.XMLHttpRequest,aM=aW+"_IE6",aL,aK,aJ,aI,aH,aG,aF,aE,aD,aC,aA,az,ay,ax,aw,av,au,at,ar,aq,ap,ao,an,am,al,ak,aj,ai,ah,ag,af,ae,ad,ac="div",ab;
if(a5.colorbox){return;}a5(a0),ad=a5.fn[aX]=a5[aX]=function(a,e){var d=this;
a=a||{},a0();if(aY()){if(!d[0]){if(d.selector){return d;}d=a5("<a/>"),a.open=!0;
}e&&(a.onComplete=e),d.each(function(){a5.data(this,aX,a5.extend({},a5.data(this,aX)||aZ,a));
}).addClass(aV),(a5.isFunction(a.open)&&a.open.call(d)||a.open)&&a2(d[0]);
}return d;},ad.position=function(j,f){function k(b){aH[0].style.width=aE[0].style.width=aI[0].style.width=b.style.width,aI[0].style.height=aG[0].style.height=aF[0].style.height=b.style.height;
}var r=0,q=0,o=aK.offset(),n=aC.scrollTop(),l=aC.scrollLeft();aC.unbind("resize."+aW),aK.css({top:-90000,left:-90000}),ap.fixed&&!aN?(o.top-=n,o.left-=l,aK.css({position:"fixed"})):(r=n,q=l,aK.css({position:"absolute"})),ap.right!==!1?q+=Math.max(aC.width()-ap.w-al-an-a8(ap.right,"x"),0):ap.left!==!1?q+=a8(ap.left,"x"):q+=Math.round(Math.max(aC.width()-ap.w-al-an,0)/2),ap.bottom!==!1?r+=Math.max(aC.height()-ap.h-am-ao-a8(ap.bottom,"y"),0):ap.top!==!1?r+=a8(ap.top,"y"):r+=Math.round(Math.max(aC.height()-ap.h-am-ao,0)/2),aK.css({top:o.top,left:o.left}),j=aK.width()===ap.w+al&&aK.height()===ap.h+am?0:j||0,aJ[0].style.width=aJ[0].style.height="9999px",aK.dequeue().animate({width:ap.w+al,height:ap.h+am,top:r,left:q},{duration:j,complete:function(){k(this),ag=!1,aJ[0].style.width=ap.w+al+an+"px",aJ[0].style.height=ap.h+am+ao+"px",ap.reposition&&setTimeout(function(){aC.bind("resize."+aW,ad.position);
},1),f&&f();},step:function(){k(this);}});},ad.resize=function(b){ah&&(b=b||{},b.width&&(ap.w=a8(b.width,"x")-al-an),b.innerWidth&&(ap.w=a8(b.innerWidth,"x")),aA.css({width:ap.w}),b.height&&(ap.h=a8(b.height,"y")-am-ao),b.innerHeight&&(ap.h=a8(b.innerHeight,"y")),!b.innerHeight&&!b.height&&(aA.css({height:"auto"}),ap.h=aA.height()),aA.css({height:ap.h}),ad.position(ap.transition==="none"?0:ap.speed));
},ad.prep=function(a){function f(){return ap.w=ap.w||aA.width(),ap.w=ap.mw&&ap.mw<ap.w?ap.mw:ap.w,ap.w;
}function e(){return ap.h=ap.h||aA.height(),ap.h=ap.mh&&ap.mh<ap.h?ap.mh:ap.h,ap.h;
}if(!ah){return;}var k,j=ap.transition==="none"?0:ap.speed;aA.remove(),aA=aa(ac,"LoadedContent").append(a),aA.hide().appendTo(az.show()).css({width:f(),overflow:ap.scrolling?"auto":"hidden"}).css({height:e()}).prependTo(aI),az.hide(),a5(ai).css({"float":"none"}),aN&&a5("select").not(aK.find("select")).filter(function(){return this.style.visibility!=="hidden";
}).css({visibility:"hidden"}).one(aR,function(){this.style.visibility="inherit";
}),k=function(){function d(){aO&&aK[0].style.removeAttribute("filter");
}var y,x,w=aD.length,v,u="frameBorder",t="allowTransparency",s,r,n;if(!ah){return;
}s=function(){clearTimeout(ae),ay.hide(),a6(aS,ap.onComplete);},aO&&ai&&aA.fadeIn(100),ax.html(ap.title).add(aA).show();
if(w>1){typeof ap.current=="string"&&aw.html(ap.current.replace("{current}",aj+1).replace("{total}",w)).show(),au[ap.loop||aj<w-1?"show":"hide"]().html(ap.next),at[ap.loop||aj?"show":"hide"]().html(ap.previous),ap.slideshow&&av.show();
if(ap.preloading){y=[aB(-1),aB(1)];while(x=aD[y.pop()]){r=a5.data(x,aX).href||x.href,a5.isFunction(r)&&(r=r.call(x)),a9(r)&&(n=new Image,n.src=r);
}}}else{aq.hide();}ap.iframe?(v=aa("iframe")[0],u in v&&(v[u]=0),t in v&&(v[t]="true"),v.name=aW+ +(new Date),ap.fastIframe?s():a5(v).one("load",s),v.src=ap.href,ap.scrolling||(v.scrolling="no"),a5(v).addClass(aW+"Iframe").appendTo(aA).one(aP,function(){v.src="//about:blank";
})):s(),ap.transition==="fade"?aK.fadeTo(j,1,d):d();},ap.transition==="fade"?aK.fadeTo(j,0,function(){ad.position(0,k);
}):ad.position(j,k);},ad.load=function(a){var h,g,f=ad.prep;ag=!0,ai=!1,ak=aD[aj],a||a7(),a6(aP),a6(aT,ap.onLoad),ap.h=ap.height?a8(ap.height,"y")-am-ao:ap.innerHeight&&a8(ap.innerHeight,"y"),ap.w=ap.width?a8(ap.width,"x")-al-an:ap.innerWidth&&a8(ap.innerWidth,"x"),ap.mw=ap.w,ap.mh=ap.h,ap.maxWidth&&(ap.mw=a8(ap.maxWidth,"x")-al-an,ap.mw=ap.w&&ap.w<ap.mw?ap.w:ap.mw),ap.maxHeight&&(ap.mh=a8(ap.maxHeight,"y")-am-ao,ap.mh=ap.h&&ap.h<ap.mh?ap.h:ap.mh),h=ap.href,ae=setTimeout(function(){ay.show();
},100),ap.inline?(aa(ac).hide().insertBefore(a5(h)[0]).one(aP,function(){a5(this).replaceWith(aA.children());
}),f(a5(h))):ap.iframe?f(" "):ap.html?f(ap.html):a9(h)?(a5(ai=new Image).addClass(aW+"Photo").error(function(){ap.title=!1,f(aa(ac,"Error").text("This image could not be loaded"));
}).load(function(){var b;ai.onload=null,ap.scalePhotos&&(g=function(){ai.height-=ai.height*b,ai.width-=ai.width*b;
},ap.mw&&ai.width>ap.mw&&(b=(ai.width-ap.mw)/ai.width,g()),ap.mh&&ai.height>ap.mh&&(b=(ai.height-ap.mh)/ai.height,g())),ap.h&&(ai.style.marginTop=Math.max(ap.h-ai.height,0)/2+"px"),aD[1]&&(ap.loop||aD[aj+1])&&(ai.style.cursor="pointer",ai.onclick=function(){ad.next();
}),aO&&(ai.style.msInterpolationMode="bicubic"),setTimeout(function(){f(ai);
},1);}),setTimeout(function(){ai.src=h;},1)):h&&az.load(h,ap.data,function(e,k,j){f(k==="error"?aa(ac,"Error").text("Request unsuccessful: "+j.statusText):a5(this).contents());
});},ad.next=function(){!ag&&aD[1]&&(ap.loop||aD[aj+1])&&(aj=aB(1),ad.load());
},ad.prev=function(){!ag&&aD[1]&&(ap.loop||aj)&&(aj=aB(-1),ad.load());},ad.close=function(){ah&&!af&&(af=!0,ah=!1,a6(aR,ap.onCleanup),aC.unbind("."+aW+" ."+aM),aL.fadeTo(200,0),aK.stop().fadeTo(300,0,function(){aK.add(aL).css({opacity:1,cursor:"auto"}).hide(),a6(aP),aA.remove(),setTimeout(function(){af=!1,a6(aQ,ap.onClosed);
},1);}));},ad.remove=function(){a5([]).add(aK).add(aL).remove(),aK=null,a5("."+aV).removeData(aX).removeClass(aV).die();
},ad.element=function(){return a5(ak);},ad.settings=aZ;})(jQuery,document,this);
/*!



 resources js mno core features.js



*/
mno.namespace("features");
mno.features=(function(){var d={value:e(),callbacks:[]},c={transform:(function(){var h=document.documentElement,g;
if(h&&(g=h.style)){if(typeof g.transform==="string"){return"transform";
}else{if(typeof g.MozTransform==="string"){return"MozTransform";}else{if(typeof g.WebkitTransform==="string"){return"WebkitTransform";
}else{if(typeof g.OTransform==="string"){return"OTransform";}else{if(typeof g.MsTransform==="string"){return"MsTransform";
}else{if(typeof g.KhtmlTransform==="string"){return"KhtmlTransform";}}}}}}}return false;
}()),transition:(function(){var h=document.documentElement,g;if(h&&(g=h.style)){return typeof g.transition==="string"||typeof g.MozTransition==="string"||typeof g.WebkitTransition==="string"||typeof g.OTransition==="string"||typeof g.MsTransition==="string"||typeof g.KhtmlTransition==="string";
}return false;}()),touch:(function(){try{document.createEvent("TouchEvent");
return true;}catch(g){return false;}}()),platform:(function(){return navigator.platform;
}()),positionFixed:function(g){if(typeof d.value==="undefined"){d.callbacks.push(g);
if(mno.states.domReady===true){a();}else{$(document).ready(a);}}else{g(d.value);
}}};function b(){for(var g=0;g<d.callbacks.length;g++){d.callbacks[g](d.value);
}}function e(){var g;return g;}function f(g){if(typeof localStorage!=="undefined"){localStorage.setItem("mno_PFix",g);
}d.value=g;b();}function a(){var j=/iPhone OS 5/i,h=/CPU OS 5/i,g=navigator.userAgent.match(/iPhone/i)||navigator.userAgent.match(/iPod/i)||navigator.userAgent.match(/iPad/i);
if(g&&(navigator.userAgent.match(j)||navigator.userAgent.match(h))){f(true);
}else{if(g){f(false);}else{if(c.touch===true){f(false);}else{f(true);}}}}return c;
}());
/*!



 resources js mno properties rubrikk.js



*/
var mno_properties_rubrikk={xmlUrl:"/external/rubrikk/jobb/json-feeds/"};
/*!



 resources js mno uiResources singleLineList.js



*/
mno.namespace("mno.uiResources.singleLineList");
mno.uiResources.singleLineList=function(c){function b(d,e){d.animate({marginLeft:-e},e*10,"linear",function(){setTimeout(function(){a(d,e);
},2000);});}function a(d,e){d.animate({marginLeft:0},e*10,"linear");}c.delegate("li","mouseenter",function(g){var f=$(this);
f.scrollLeft(1);if(f.scrollLeft()!==0){f.scrollLeft(0);var d=f.find("a");
b(d,d.innerWidth()-f.width()+40);}});};
/*!



 resources js mno uiResources tabs.js



*/
mno.namespace("mno.uiResources.tabs");
mno.uiResources.tabs=function(b){var g={};function e(j,h){g[j]=h;}function c(h){if(g.hasOwnProperty(h)){g[h].focus();
}}function d(k){var j=b.find("[role=tab]"),h=j.index(k);((h!==j.length-1)?k.next():j.first()).focus();
}function f(k){var j=b.find("[role=tab]"),h=j.index(k);((h!==0)?k.prev():j.last()).focus();
}function a(n,o,l){var k=!l.ctrlKey&&!l.shiftKey&&!l.altKey,h=l.ctrlKey&&!l.shiftKey&&!l.altKey,j;
switch(l.keyCode){case 34:if(h===true){d(n);l.stopPropagation();}break;
case 33:if(h===true){f(n);l.stopPropagation();}break;case 36:if(k===true){b.find("[role=tab]").first().focus();
l.stopPropagation();}break;case 35:if(k===true){b.find("[role=tab]").last().focus();
l.stopPropagation();}break;case 9:if(l.ctrlKey&&!l.altKey){if(l.shiftKey){f(n);
}else{d(n);}l.stopPropagation();return false;}break;}return true;}b.delegate("*:not([role=tab]","focus",function(){var h=$(this),j=h.parent("[role=tabpanel]").attr("aria-labelledby");
if(typeof j==="string"){}});b.delegate("[role=tab]","click",function(){$(this).focus();
});b.delegate("[role=tab]","focus",function(){var h=$(this),j=h.attr("id");
b.find("[aria-selected=true]").not(this).attr("aria-selected","false").attr("aria-label","not selected").blur();
b.find("[aria-hidden=false]").not("[aria-labelledby="+j+"]").attr("aria-hidden","true");
h.attr("aria-selected","true").attr("aria-label","selected");b.find("[aria-labelledby="+j+"]").attr("aria-hidden","false");
c(j);});b.delegate("[role=tab]","keydown",function(l){var j=!l.ctrlKey&&!l.shiftKey&&!l.altKey,k=$(this),h;
switch(l.keyCode){case 37:case 38:if(j===true){f(k);l.stopPropagation();
}break;case 39:case 40:if(j===true){d(k);l.stopPropagation();}break;}a(k,b.find("[role=tab]"),l);
});b.delegate("[role=tabpanel]","keydown",function(j){var h=b.find("[role=tabpanel]").index($(this));
a(b.find("[role=tab]")[h],b.find("[role=tab]"),j);});b.bind("keypress",function(h){switch(h.keyCode){case 33:case 34:if(h.ctrlKey&&!h.altKey&&!h.shiftKey){h.stopPropagation();
return false;}break;case 9:if(h.ctrlKey&&!h.altKey){h.stopPropagation();
return false;}break;}});};
/*!



 resources js mno utils bookmark.js



*/
mno.namespace("mno.utils");
mno.utils.bookmarksite=function(c,a){if(window.sidebar){window.sidebar.addPanel(c,a,"");
}else{if(window.opera&&window.print){var b=document.createElement("a");
b.setAttribute("href",a);b.setAttribute("title",c);b.setAttribute("rel","sidebar");
b.click();}else{if(document.all){window.external.AddFavorite(a,c);}else{if(window.opera&&window.print){alert("Press ctrl+D to bookmark (Command+D for macs) after you click Ok");
}else{if(window.chrome){alert("Press ctrl+D to bookmark (Command+D for macs) after you click Ok");
}}}}}};
/*!



 resources js mno utils copy.js



*/
/*!



 resources js mno utils flash.js



*/
mno.core.register({id:"mno.utils.flash",forceStart:true,creator:function(){return{init:function(){},showFlash:function(a){swfobject.embedSWF(a.url,a.elementId,a.width,a.height,a.version,"expressInstall.swf",a.flashVars,a.params,a.attributes);
$("#"+a.fallbackElementId).hide();$("#"+a.fallbackElementId+"-caption").hide();
},destroy:function(){}};}});
/*!



 resources js mno utils ie6update.js



*/
try{document.execCommand("BackgroundImageCache",true,true);
}catch(err){}(function(c){c.fn.activebar=function(e){e=c.fn.extend({},c.fn.activebar.defaults,e);
if(c.fn.activebar.container===null){c.fn.activebar.container=b(e);}a(c.fn.activebar.container,e);
c.fn.activebar.hide();c(".content",c.fn.activebar.container).empty();c(this).each(function(){c(".content",c.fn.activebar.container).append(this);
});c.fn.activebar.container.unbind("click");if(e.url!==null){c.fn.activebar.container.click(function(){window.location.href=e.url;
});}c.fn.activebar.container.css("top","-"+c.fn.activebar.container.height()+"px");
if(e.preload){var f={a:0,b:0,c:0,d:0};function d(){if(f.a&&f.b&&f.c&&f.d){c.fn.activebar.show();
}}c('<img src="'+e.icons_path+'icon.png" class="normal">').load(function(){f.a=1;
d();});c('<img src="'+e.icons_path+'icon-over.png" class="normal">').load(function(){f.b=1;
d();});c('<img src="'+e.icons_path+'close.png" class="normal">').load(function(){f.c=1;
d();});c('<img src="'+e.icons_path+'close-over.png" class="normal">').load(function(){f.d=1;
d();});}else{c.fn.activebar.show();}};c.fn.activebar.defaults={background:"#ffffe1",border:"#666",highlight:"#3399ff",font:"Bitstream Vera Sans,verdana,sans-serif",fontColor:"InfoText",fontSize:"11px",icons_path:"images/",url:"http://www.microsoft.com/windows/internet-explorer/default.aspx",preload:true};
c.fn.activebar.state=0;c.fn.activebar.container=null;c.fn.activebar.show=function(){if(c.fn.activebar.state>1){return;
}c.fn.activebar.state=2;c.fn.activebar.container.css("display","block");
var d=c.fn.activebar.container.height();c.fn.activebar.container.animate({top:"+="+d+"px"},d*20,"linear",function(){c.fn.activebar.state=3;
});};c.fn.activebar.hide=function(){if(c.fn.activebar.state<2){return;}c.fn.activebar.state=1;
var d=c.fn.activebar.container.height();c.fn.activebar.container.animate({top:"-="+d+"px"},d*20,"linear",function(){c.fn.activebar.container.css("display","none");
c.fn.activebar.visible=false;});};function b(e){var d=c("<div></div>").attr("id","activebar-container");
d.css({display:"none",position:"fixed",zIndex:"9999",top:"0px",left:"0px",cursor:"default",padding:"4px","font-size":"9px",background:e.background,borderBottom:"1px solid "+e.border,color:e.fontColor});
c(window).bind("resize",function(){d.width(c(this).width());});c(window).trigger("resize");
if(c.browser.msie&&(c.browser.version.substring(0,1)=="5"||c.browser.version.substring(0,1)=="6")){d.css("position","absolute");
c(window).scroll(function(){d.stop(true,true);if(c.fn.activebar.state==3){d.css("top",c(window).scrollTop()+"px");
}else{d.css("top",(c(window).scrollTop()-d.height())+"px");}}).resize(function(){c(window).scroll();
});}d.append(c("<div></div>").attr("class","icon").css({"float":"left",width:"16px",height:"16px",margin:"0 4px 0 0",padding:"0"}).append('<img src="'+e.icons_path+'icon.png" class="normal">').append('<img src="'+e.icons_path+'icon-over.png" class="hover">'));
d.append(c("<div></div>").attr("class","close").css({"float":"right",margin:"0 5px 0 0 ",width:"16px",height:"16px"}).click(function(f){c.fn.activebar.hide();
f.stopPropagation();}).append('<img src="'+e.icons_path+'close.png" class="normal">').append('<img src="'+e.icons_path+'close-over.png" class="hover">'));
d.append(c("<div></div>").attr("class","content").css({margin:"0px 8px",paddingTop:"1px"}));
c(".hover",d).hide();c("body").prepend(d);return d;}function a(d,e){d.unbind("mouseenter mouseleave");
d.hover(function(){c(this).css({backgroundColor:e.highlight,color:"#FFFFFF"}).addClass("hover");
c(".hover",d).show();c(".normal",d).hide();},function(){c(this).css({backgroundColor:e.background,color:"#000000"}).removeClass("hover");
c(".hover",d).hide();c(".normal",d).show();});c(".content",d).css({fontFamily:e.font,fontSize:e.fontSize});
}c(document).ready(function(){if(typeof IE6UPDATE_OPTIONS!=="undefined"){c("<div></div>").html(IE6UPDATE_OPTIONS.message||"Internet Explorer is missing updates required to view this site. Click here to update... ").activebar(window.IE6UPDATE_OPTIONS);
}});})(jQuery);
/*!



 resources js mno utils ios-o.js



*/
/*! A fix for the iOS orientationchange zoom bug.Script by @scottjehl, rebound by @wilto. MIT License.*/
(function(q){var r=q.document;
if(!r.querySelectorAll){return;}var n=r.querySelectorAll("meta[name=viewport]")[0],z=n&&n.getAttribute("content"),s=z+", maximum-scale=1.0",w=z+", maximum-scale=2.0",t=true,x=q.orientation,o=0;
if(!n){return;}function u(){n.setAttribute("content",w);t=true;}function y(){n.setAttribute("content",s);
t=false;}function v(a){x=Math.abs(q.orientation);o=Math.abs(a.gamma);if(o>8&&x===0){if(t){y();
}}else{if(!t){u();}}}q.addEventListener("orientationchange",u,false);q.addEventListener("deviceorientation",v,false);
})(this);
/*!



 resources js mno utils jquery.tweet.js



*/
(function(a){a.fn.tweet=function(d){var c={username:null,showAvatar:true,showDate:true,avatar_width:48,avatar_height:48,count:5,loading_text:null,query:null};
if(d){a.extend(c,d);}a.fn.extend({linkUrl:function(){var e=[];var f=/((ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?)/gi;
this.each(function(){e.push(this.replace(f,'<a href="$1">$1</a>'));});return a(e);
},linkUser:function(){var e=[];var f=/[\@]+([A-Za-z0-9-_]+)/gi;this.each(function(){e.push(this.replace(f,'<a href="http://twitter.com/$1">@$1</a>'));
});return a(e);},linkHash:function(){var e=[];var f=/ [\#]+([A-Za-z0-9-_]+)/gi;
this.each(function(){e.push(this.replace(f,' <a href="http://search.twitter.com/search?q=&tag=$1&lang=all'+(c.username?"&from="+c.username.join("%2BOR%2B"):"")+'">#$1</a>'));
});return a(e);},capAwesome:function(){var e=[];this.each(function(){e.push(this.replace(/(a|A)wesome/gi,"AWESOME"));
});return a(e);},capEpic:function(){var e=[];this.each(function(){e.push(this.replace(/(e|E)pic/gi,"EPIC"));
});return a(e);},makeHeart:function(){var e=[];this.each(function(){e.push(this.replace(/(&lt;)+[3]/gi,"<tt class='heart'>&#x2665;</tt>"));
});return a(e);}});function b(f){var e=Date.parse(f);var g=(arguments.length>1)?arguments[1]:new Date();
var h=parseInt((g.getTime()-e)/1000);if(h<60){return"less than a minute ago";
}else{if(h<120){return"about a minute ago";}else{if(h<(45*60)){return(parseInt(h/60)).toString()+" minutes ago";
}else{if(h<(90*60)){return"about an hour ago";}else{if(h>=90*60&&h<120*60){return"about 2 hours ago";
}else{if(h<(24*60*60)){return"about "+(parseInt(h/3600)).toString()+" hours ago";
}else{if(h<(48*60*60)){return"1 day ago";}else{return(parseInt(h/86400)).toString()+" days ago";
}}}}}}}}return this.each(function(){var e=a('<div class="content">').appendTo(this);
var h=a('<p class="loading">'+c.loading_text+"</p>");if(c.username&&typeof(c.username)=="string"){c.username=[c.username];
}var g="";if(c.query){g+="q="+c.query;}if(c.username){g+="&q=from:"+c.username.join("%20OR%20from:");
}var f="http://search.twitter.com/search.json?&"+g+"&rpp="+c.count+"&callback=?";
if(c.loading_text){a(this).append(h);}a.getJSON(f,function(j){if(c.loading_text){h.remove();
}a.each(j.results,function(o,r){var n='<a href="http://twitter.com/'+r.from_user+'"><img style="float:left; margin-right: 5px" src="'+r.profile_image_url+'" height="'+c.avatar_height+'" width="'+c.avatar_width+'" alt="'+r.from_user+'\'s avatar" title="'+r.from_user+'\'s avatar" border="0"/></a>';
var l=((c.showAvatar)?n:"");var q='<h4><a target="_blank" href="http://twitter.com/'+r.from_user+'">'+r.from_user+"</a></h4>";
var s='<p class="feedSummary">'+a([r.text]).linkUrl().linkUser().linkHash().makeHeart().capAwesome().capEpic()[0]+"</p>";
var k='<div class="dateline"><a href="http://twitter.com/'+r.from_user+"/statuses/"+r.id+'">'+b(r.created_at)+"</a></div>";
e.append('<div class="article">'+l+q+s+(c.showDate?k:"")+"</div>");e.children("div:first").addClass("first");
});});});};})(jQuery);
/*!



 resources js mno utils simpleDateFormat.js



*/
var SimpleDateFormat;
(function(){function g(s){return typeof s=="undefined";}var r=/('[^']*')|(G+|y+|M+|w+|W+|D+|d+|F+|E+|a+|H+|k+|K+|h+|m+|s+|S+|Z+)|([a-zA-Z]+)|([^a-zA-Z']+)/;
var k=["January","February","March","April","May","June","July","August","September","October","November","December"];
var c=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var j=0,h=1,f=2,n=3,e=4,o=5;var l={G:j,y:n,M:e,w:f,W:f,D:f,d:f,F:f,E:h,a:j,H:f,k:f,K:f,h:f,m:f,s:f,S:f,Z:o};
var d=24*60*60*1000;var a=7*d;var b=1;var q=function(t,u,s){var v=new Date(t,u,s,0,0,0);
v.setMilliseconds(0);return v;};Date.prototype.getDifference=function(s){return this.getTime()-s.getTime();
};Date.prototype.isBefore=function(s){return this.getTime()<s.getTime();
};Date.prototype.getUTCTime=function(){return Date.UTC(this.getFullYear(),this.getMonth(),this.getDate(),this.getHours(),this.getMinutes(),this.getSeconds(),this.getMilliseconds());
};Date.prototype.getTimeSince=function(s){return this.getUTCTime()-s.getUTCTime();
};Date.prototype.getPreviousSunday=function(){var t=new Date(this.getFullYear(),this.getMonth(),this.getDate(),12,0,0);
var s=new Date(t.getTime()-this.getDay()*d);return q(s.getFullYear(),s.getMonth(),s.getDate());
};Date.prototype.getWeekInYear=function(x){if(g(this.minimalDaysInFirstWeek)){x=b;
}var v=this.getPreviousSunday();var t=q(this.getFullYear(),0,1);var w=v.isBefore(t)?0:1+Math.floor(v.getTimeSince(t)/a);
var s=7-t.getDay();var u=w;if(s<x){u--;}return u;};Date.prototype.getWeekInMonth=function(x){if(g(this.minimalDaysInFirstWeek)){x=b;
}var t=this.getPreviousSunday();var w=q(this.getFullYear(),this.getMonth(),1);
var v=t.isBefore(w)?0:1+Math.floor((t.getTimeSince(w))/a);var s=7-w.getDay();
var u=v;if(s>=x){u++;}return u;};Date.prototype.getDayInYear=function(){var s=q(this.getFullYear(),0,1);
return 1+Math.floor(this.getTimeSince(s)/d);};SimpleDateFormat=function(s){this.formatString=s;
};SimpleDateFormat.prototype.setMinimalDaysInFirstWeek=function(s){this.minimalDaysInFirstWeek=s;
};SimpleDateFormat.prototype.getMinimalDaysInFirstWeek=function(s){return g(this.minimalDaysInFirstWeek)?b:this.minimalDaysInFirstWeek;
};SimpleDateFormat.prototype.format=function(L){var s="";var C;var w=function(O,N){while(O.length<N){O="0"+O;
}return O;};var u=function(P,O,N){return(O>=4)?P:P.substr(0,Math.max(N,O));
};var A=function(P,O){var N=""+P;return w(N,O);};var z=this.formatString;
while((C=r.exec(z))){var G=C[0];var B=C[1];var D=C[2];var y=C[3];var x=C[4];
if(B){if(B=="''"){s+="'";}else{s+=B.substring(1,B.length-1);}}else{if(y){}else{if(x){s+=x;
}else{if(D){var t=D.charAt(0);var M=D.length;var E="";switch(t){case"G":E="AD";
break;case"y":E=L.getFullYear();break;case"M":E=L.getMonth();break;case"w":E=L.getWeekInYear(this.getMinimalDaysInFirstWeek());
break;case"W":E=L.getWeekInMonth(this.getMinimalDaysInFirstWeek());break;
case"D":E=L.getDayInYear();break;case"d":E=L.getDate();break;case"F":E=1+Math.floor((L.getDate()-1)/7);
break;case"E":E=c[L.getDay()];break;case"a":E=(L.getHours()>=12)?"PM":"AM";
break;case"H":E=L.getHours();break;case"k":E=L.getHours()||24;break;case"K":E=L.getHours()%12;
break;case"h":E=(L.getHours()%12)||12;break;case"m":E=L.getMinutes();break;
case"s":E=L.getSeconds();break;case"S":E=L.getMilliseconds();break;case"Z":E=L.getTimezoneOffset();
break;}switch(l[t]){case j:s+=u(E,M,2);break;case h:s+=u(E,M,3);break;case f:s+=A(E,M);
break;case n:if(M<=3){var v=""+E;s+=v.substr(2,2);}else{s+=A(E,M);}break;
case e:if(M>=3){s+=u(k[E],M,M);}else{s+=A(E+1,M);}break;case o:var K=(E>0);
var H=K?"-":"+";var J=Math.abs(E);var I=""+Math.floor(J/60);I=w(I,2);var F=""+(J%60);
F=w(F,2);s+=H+I+F;break;}}}}}z=z.substr(C.index+C[0].length);}return s;
};})();
/*!



 resources js mno utils trafficfund.js



*/
mno.namespace("mno.utils.trafficfund");
mno.utils.trafficfund=(function(c){var f={annonsepoolen:["annonsepoolen.no"],aftenbladet:["aftenbladet.no","stavangeraftenblad.no","rogalyd.no","aenergi.no"],aftenposten:["aftenposten.no","ap.no","amagasinet.no","kmag.no","oslopuls.no","golf.no","forbruker.no","mamma.no","hyttemag.no","nyhetene24.no","nyhetene24.no.msn.com"],bt:["bt.no","bergenstidende.no"],dinmat:["dinmat.no"],e24:["e24.no"],finn:["finn.no"],flytteportalen:["flytteportalen.no"],fvn:["fvn.no","fevennen.no","f\u00e6vennen.no","fedrelandsvennen.no","f\u00e6drelandsvennen.no","fvnmobil.no"],letsdeal:["letsdeal.no"],mittanbud:["mittanbud.no"],moteplassen:["moteplassen.com","moteplassen.no"],nabolag:["nabolag.no"],penger:["penger.no"],prisjakt:["prisjakt.no"],vg:["vg.no","vgb.no","vgd.no","nynorskvg.no","dinepenger.no","dyrebar.no","vektklubb.no","minmote.no","pent.no"]},h=(typeof XMLHttpRequest!="undefined"&&"withCredentials" in new XMLHttpRequest()),d="81B7609CE4175AF8B69184E3D80F1D55"+Math.floor(Math.random()*1000);
c(document).delegate("a","click mouseup",n);function n(t){if(t.type==="mouseup"&&!(c.browser.msie&&t.ctrlKey)&&!(t.which&&t.which==2)){return;
}var s=t.type==="submit"?this.action:this.href;if(q(window.location.href,s)){l(a(window.location.href),s);
}}function g(u){var t=new RegExp(/^[A-Za-z0-9]+\./),s=new RegExp(/^[A-Za-z0-9]+\.[A-Za-z0-9]+\.[A-Za-z0-9]+\.[A-Za-z0-9]+/),v=new RegExp(/^[A-Za-z0-9]+\.[A-Za-z0-9]+\.[A-Za-z0-9]+/);
u=a(u);if(u.match(s)){u=u.replace(t,"").replace(t,"");}else{if(u.match(v)){u=u.replace(t,"");
}}return u;}function a(s){var t=new RegExp(/^[a-z]+:\/\//);return s.replace(t,"");
}function r(s){return s.indexOf("/")>0?s.substring(0,s.indexOf("/")):s;
}function o(s){return s.indexOf("/")>0?s.substring(s.indexOf("/"),s.length):s;
}function e(u){var w=new RegExp(/^[a-z]+:\/\/helios\.[a-z]+\.no\//),t=new RegExp(/^[a-z]+:\/\/adserver.adtech.de\//),s=new RegExp(/^[a-z]+:\/\/[a-z0-9]+\.xiti.com\//),v=new RegExp(/^[a-z]+:\/\/rms.admeta.com\//);
if(u.match(w)!=null||u.match(t)!=null||u.match(s)!=null){if(u.indexOf("url=")>0){u=u.substring(u.indexOf("url=")+4,u.length);
}else{if(u.indexOf("link=")>0){u=u.substring(u.indexOf("link=")+5,u.length);
}}}if(u.match(v)!=null){u="http://www.moteplassen.com/";}return u;}function q(u,s){var t=false,v=false;
u=r(g(u));s=r(g(e(s)));c.each(f,function(w,x){if(c.inArray(s,x)>-1&&c.inArray(u,x)==-1){t=true;
}if(c.inArray(u,x)>-1){v=true;}});return t&&v;}function l(u,t){var s="http://click.trafikkfondet.no/trafikfonden/dwr/call/plaincall/ClickServer.recordClick.dwr?callCount=1&batchId=0&c0-id=0&page="+encodeURIComponent(o(u))+"&scriptSessionId="+d+"&c0-scriptName=ClickServer&c0-methodName=recordClick&c0-param0=string:"+encodeURIComponent(u)+"&c0-param1=string:"+encodeURIComponent(e(t));
if(h){j(s);}else{k(s);}}function b(s){c.ajax({async:false,cache:false,crossDomain:true,dataType:"jsonp",url:s});
}function j(s){var u=new XMLHttpRequest();u.open("GET",s,false);u.onreadystatechange=function(){if(u.readyState>=this.OPENED){u.abort();
}};try{u.send();}catch(t){}}function k(t){var s=new Image(1,1);s.src=t;
}return{trackClick:n,recordClick:l,verifyDomains:q};})(jQuery);function tf_recordClickAndNavigate(){mno.utils.trafficfund.trackClick();
}function tf_recordClickToUrl(a){if(mno.utils.trafficfund.verifyDomains(window.location.href,a)){mno.utils.trafficfund.recordClick(window.location.href,a);
}}function tf_recordClickFromUrlToUrl(b,a){if(mno.utils.trafficfund.verifyDomains(b,a)){mno.utils.trafficfund.recordClick(b,a);
}}if(dwr==null){var dwr={};}if(dwr.engine==null){dwr.engine={};}if(dwr.engine._remoteHandleCallback==null){dwr.engine._remoteHandleCallback=function(a,c,b){};
/*!



 resources js mno core main.js



*/
}(function(a){a(document).ready(function(){a("[data-href]").live("click",function(){window.location.href=a(this).attr("data-href");
}).css("cursor","pointer");a("[data-href] object").live("click",function(){return false;
});a("iframe").each(function(){var f=a(this).attr("src");var c=f;if(f&&f.indexOf("youtube")!==-1&&f.indexOf("wmode")<0){if(f.indexOf("?")!==-1){var e=f.split("?")[0];
var d=f.split("?")[1];c=e+"?wmode=transparent&"+d;}else{c=f+"?wmode=transparent";
}a(this).attr("src",c);}});var b=new RegExp("^.+test[0-9]{1}.medianorge.no");
if(b.test(window.location.href)){mno.core.debug(true);}else{mno.core.debug(false);
}mno.core.startAllOnCurrentPage();window.setTimeout(function(){if(window.pageYOffset!==0){return;
}window.scrollTo(0,window.pageYOffset+1);},100);});}(window.jQuery));