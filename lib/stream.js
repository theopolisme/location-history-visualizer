/* https://github.com/davglass/prettysize */
(function(){var sizes=["Bytes","kB","MB","GB","TB","PB","EB"];window.prettySize=function(e,s,i){var t,n;return sizes.forEach(function(n,o){i&&(n=n.slice(0,1));var r,B=Math.pow(1024,o);B>e||(r=(e/B).toFixed(1)+"",r.indexOf(".0")===r.length-2&&(r=r.slice(0,-2)),t=r+(s?"":" ")+n)}),t||(n=i?sizes[0].slice(0,1):sizes[0],t="0"+(s?"":" ")+n),t};}());

/**
 * browserification of
 *  - https://github.com/jimhigson/oboe.js
 *  - https://github.com/DamonOehlman/filestream
 */

!function t(e,r,n){function i(s,a){if(!r[s]){if(!e[s]){var u="function"==typeof require&&require
if(!a&&u)return u(s,!0)
if(o)return o(s,!0)
var h=Error("Cannot find module '"+s+"'")
throw h.code="MODULE_NOT_FOUND",h}var f=r[s]={exports:{}}
e[s][0].call(f.exports,function(t){var r=e[s][1][t]
return i(r?r:t)},f,f.exports,t,e,r,n)}return r[s].exports}for(var o="function"==typeof require&&require,s=0;s<n.length;s++)i(n[s])
return i}({1:[function(t){window.FileReadStream=t("filestream/read"),window.oboe=t("oboe")},{"filestream/read":4,oboe:5}],2:[function(t,e){e.exports=function(t){for(var e,r=[].slice.call(arguments,1),n=0,i=r.length;i>n;n++){e=r[n]
for(var o in e)t[o]=e[o]}return t}},{}],3:[function(t,e){(function(t){e.exports=function(e){return"function"==typeof t._augment&&t.TYPED_ARRAY_SUPPORT?t._augment(e):new t(e)}}).call(this,t("buffer").Buffer)},{buffer:7}],4:[function(t,e){(function(r){"use strict"
function n(t,e){return this instanceof n?(e=e||{},i.call(this,a({objectMode:!0},e)),this._offset=0,this._eof=!1,this._metasent=!e.meta,this._metadata={name:t.name,size:t.size,extension:t.name.replace(s,"$1")},this.reader=new FileReader,this.reader.onprogress=this._handleProgress.bind(this),this.reader.onload=this._handleLoad.bind(this),void this.reader.readAsArrayBuffer(t)):new n(t,e)}var i=t("stream").Readable,o=t("util"),s=/^.*\.(\w+)$/,a=t("extend.js"),u=t("typedarray-to-buffer")
o.inherits(n,i),e.exports=n,n.prototype._read=function(t){function e(){var o,s=n._offset,a=n._offset+t,h=i.result&&i.result.byteLength,f=2===i.readyState&&a>h
return h&&(f||h>a)?(o=u(new Uint8Array(i.result,s,Math.min(t,i.result.byteLength-s))),n._offset=s+o.length,n._eof=0===o.length,n.push(o.length>0?new r(o):null)):void n.once("readable",e)}var n=this,i=this.reader
return this._metasent?void e():(this._metasent=!0,this.push("meta|"+JSON.stringify(this._metadata)))},n.prototype._handleLoad=function(){this.emit("readable")},n.prototype._handleProgress=function(){this.emit("readable")}}).call(this,t("buffer").Buffer)},{buffer:7,"extend.js":2,stream:35,"typedarray-to-buffer":3,util:39}],5:[function(t,e){e.exports=function(){function e(t,e){return function(){return t.call(this,e.apply(this,arguments))}}function r(t){return function(e){return e[t]}}function n(t,e){return e.apply(void 0,t)}function i(t){var e=t.length-1,r=Array.prototype.slice
if(0==e)return function(){return t.call(this,r.call(arguments))}
if(1==e)return function(){return t.call(this,arguments[0],r.call(arguments,1))}
var n=Array(t.length)
return function(){for(var i=0;e>i;i++)n[i]=arguments[i]
return n[e]=r.call(arguments,e),t.apply(this,n)}}function o(t){return function(e,r){return t(r,e)}}function s(t,e){return function(r){return t(r)&&e(r)}}function a(){}function u(){return!0}function h(t){return function(){return t}}function f(t,e){return e&&e.constructor===t}function c(t){return void 0!==t}function l(t,e){return e instanceof Object&&b(function(t){return t in e},t)}function p(t,e){return[t,e]}function d(t){return _(t.reduce(o(p),N))}function g(t){return m(function(t,e){return t.unshift(e),t},[],t)}function v(t,e){return e?p(t(Y(e)),v(t,z(e))):N}function m(t,e,r){return r?t(m(t,e,z(r)),Y(r)):e}function y(t,e,r){function n(t,r){return t?e(Y(t))?(r(Y(t)),z(t)):p(Y(t),n(z(t),r)):N}return n(t,r||a)}function b(t,e){return!e||t(Y(e))&&b(t,z(e))}function w(t,e){t&&(Y(t).apply(null,e),w(z(t),e))}function _(t){function e(t,r){return t?e(z(t),p(Y(t),r)):r}return e(t,N)}function E(t,e){return e&&(t(Y(e))?Y(e):E(t,z(e)))}function A(t){"use strict"
function e(){var t=0
q.length>p&&(r("Max buffer length exceeded: textNode"),t=Math.max(t,q.length)),N.length>p&&(r("Max buffer length exceeded: numberNode"),t=Math.max(t,N.length)),D=p-t+X}function r(t){q&&(f(q),c(),q=""),s=Error(t+"\nLn: "+Z+"\nCol: "+G+"\nChr: "+a),l(I(void 0,void 0,s))}function n(){(F!==m||0!==$)&&r("Unexpected end"),q&&(f(q),c(),q=""),z=!0}function i(t){return"\r"==t||"\n"==t||" "==t||" "==t}function o(t){if(!s){if(z)return r("Cannot write after close")
var n=0
for(a=t[0];a&&(u=a,a=t[n++]);)switch(X++,"\n"==a?(Z++,G=0):G++,F){case v:if("{"===a)F=y
else if("["===a)F=w
else if(!i(a))return r("Non-whitespace before {[.")
continue
case A:case y:if(i(a))continue
if(F===A)H.push(x)
else{if("}"===a){f({}),c(),F=H.pop()||m
continue}H.push(b)}if('"'!==a)return r('Malformed object key should start with " ')
F=E
continue
case x:case b:if(i(a))continue
if(":"===a)F===b?(H.push(b),q&&(f({}),h(q),q=""),$++):q&&(h(q),q=""),F=m
else if("}"===a)q&&(f(q),c(),q=""),c(),$--,F=H.pop()||m
else{if(","!==a)return r("Bad object")
F===b&&H.push(b),q&&(f(q),c(),q=""),F=A}continue
case w:case m:if(i(a))continue
if(F===w){if(f([]),$++,F=m,"]"===a){c(),$--,F=H.pop()||m
continue}H.push(_)}if('"'===a)F=E
else if("{"===a)F=y
else if("["===a)F=w
else if("t"===a)F=L
else if("f"===a)F=j
else if("n"===a)F=B
else if("-"===a)N+=a
else if("0"===a)N+=a,F=P
else{if(-1==="123456789".indexOf(a))return r("Bad value")
N+=a,F=P}continue
case _:if(","===a)H.push(_),q&&(f(q),c(),q=""),F=m
else{if("]"!==a){if(i(a))continue
return r("Bad array")}q&&(f(q),c(),q=""),c(),$--,F=H.pop()||m}continue
case E:var o=n-1
t:for(;;){for(;J>0;)if(W+=a,a=t.charAt(n++),4===J?(q+=String.fromCharCode(parseInt(W,16)),J=0,o=n-1):J++,!a)break t
if('"'===a&&!Y){F=H.pop()||m,q+=t.substring(o,n-1),q||(f(""),c())
break}if("\\"===a&&!Y&&(Y=!0,q+=t.substring(o,n-1),a=t.charAt(n++),!a))break
if(Y){if(Y=!1,"n"===a?q+="\n":"r"===a?q+="\r":"t"===a?q+="  ":"f"===a?q+="\f":"b"===a?q+="\b":"u"===a?(J=1,W=""):q+=a,a=t.charAt(n++),o=n-1,a)continue
break}d.lastIndex=n
var l=d.exec(t)
if(!l){n=t.length+1,q+=t.substring(o,n-1)
break}if(n=l.index+1,a=t.charAt(l.index),!a){q+=t.substring(o,n-1)
break}}continue
case L:if(!a)continue
if("r"!==a)return r("Invalid true started with t"+a)
F=S
continue
case S:if(!a)continue
if("u"!==a)return r("Invalid true started with tr"+a)
F=R
continue
case R:if(!a)continue
if("e"!==a)return r("Invalid true started with tru"+a)
f(!0),c(),F=H.pop()||m
continue
case j:if(!a)continue
if("a"!==a)return r("Invalid false started with f"+a)
F=T
continue
case T:if(!a)continue
if("l"!==a)return r("Invalid false started with fa"+a)
F=C
continue
case C:if(!a)continue
if("s"!==a)return r("Invalid false started with fal"+a)
F=O
continue
case O:if(!a)continue
if("e"!==a)return r("Invalid false started with fals"+a)
f(!1),c(),F=H.pop()||m
continue
case B:if(!a)continue
if("u"!==a)return r("Invalid null started with n"+a)
F=k
continue
case k:if(!a)continue
if("l"!==a)return r("Invalid null started with nu"+a)
F=M
continue
case M:if(!a)continue
if("l"!==a)return r("Invalid null started with nul"+a)
f(null),c(),F=H.pop()||m
continue
case U:if("."!==a)return r("Leading zero not followed by .")
N+=a,F=P
continue
case P:if(-1!=="0123456789".indexOf(a))N+=a
else if("."===a){if(-1!==N.indexOf("."))return r("Invalid number has two dots")
N+=a}else if("e"===a||"E"===a){if(-1!==N.indexOf("e")||-1!==N.indexOf("E"))return r("Invalid number has two exponential")
N+=a}else if("+"===a||"-"===a){if("e"!==u&&"E"!==u)return r("Invalid symbol in number")
N+=a}else N&&(f(parseFloat(N)),c(),N=""),n--,F=H.pop()||m
continue
default:return r("Unknown state: "+F)}X>=D&&e()}}var s,a,u,h=t(ue).emit,f=t(he).emit,c=t(fe).emit,l=t(ee).emit,p=65536,d=/[\\"\n]/g,g=0,v=g++,m=g++,y=g++,b=g++,w=g++,_=g++,E=g++,A=g++,x=g++,L=g++,S=g++,R=g++,j=g++,T=g++,C=g++,O=g++,B=g++,k=g++,M=g++,U=g++,P=g,D=p,q="",N="",Y=!1,z=!1,F=v,H=[],W=null,J=0,$=0,X=0,G=0,Z=1
t(oe).on(o),t(se).on(n)}function x(t,e){"use strict"
function r(t){return function(e){n=t(n,e)}}var n,i={}
for(var o in e)t(o).on(r(e[o]),i)
t(Q).on(function(t){var e,r=Y(n),i=J(r),o=z(n)
o&&(e=$(Y(o)),e[i]=t)}),t(te).on(function(){var t,e=Y(n),r=J(e),i=z(n)
i&&(t=$(Y(i)),f(Array,t)?t.length--:delete t[r])}),t(ae).on(function(){for(var r in e)t(r).un(i)})}function L(e,r,n,i,o,s){"use strict"
function a(t){t.on("data",function(t){c||e(oe).emit(""+t)}),t.on("end",function(){c||e(se).emit()})}function u(t,e){var r=""
t.on("data",function(t){r+=""+t}),t.on("end",function(){e(r)})}function h(e){var i=t("url").parse(e)
return r.request({hostname:i.hostname,port:i.port,path:i.path,method:n,headers:s,protocol:i.protocol})}function f(){if(!i.match(/https?:\/\//))throw Error('Supported protocols when passing a URL into Oboe are http and https. If you wish to use another protocol, please pass a ReadableStream (http://nodejs.org/api/stream.html#stream_class_stream_readable) like oboe(fs.createReadStream("my_file")). I was given the URL: '+i)
var t=h(i)
t.on("response",function(t){var r=t.statusCode,n=2==(r+"")[0]
e(ie).emit(t.statusCode,t.headers),n?a(t):u(t,function(t){e(ee).emit(I(r,t))})}),t.on("error",function(t){e(ee).emit(I(void 0,void 0,t))}),e(ae).on(function(){c=!0,t.abort()}),o&&t.write(o),t.end()}var c=!1
q(i)?f(i):a(i)}function S(t,e){return{key:t,node:e}}function R(t){function e(t,e){var r=$(Y(t))
return f(Array,r)?i(t,D(r),e):t}function r(t,r){if(!t)return u(r),i(t,X,r)
var o=e(t,r),s=z(o),a=J(Y(o))
return n(s,a,r),p(S(a,r),s)}function n(t,e,r){$(Y(t))[e]=r}function i(t,e,r){t&&n(t,e,r)
var i=p(S(e,r),t)
return s(i),i}function o(t){return a(t),z(t)||h($(Y(t)))}var s=t(K).emit,a=t(V).emit,u=t(ne).emit,h=t(re).emit,c={}
return c[he]=r,c[fe]=o,c[ue]=i,c}function j(t,e,r){function n(t){return function(e){return e.id==t}}var i,o
return{on:function(r,n){var s={listener:r,id:n||r}
return e&&e.emit(t,r,s.id),i=p(s,i),o=p(r,o),this},emit:function(){w(o,arguments)},un:function(e){var s
i=y(i,n(e),function(t){s=t}),s&&(o=y(o,function(t){return t==s.listener}),r&&r.emit(t,s.listener,s.id))},listeners:function(){return o},hasListener:function(t){var e=t?n(t):u
return c(E(e,i))}}}function T(){function t(t){return r[t]=j(t,o,s)}function e(e){return r[e]||t(e)}var r={},o=t("newListener"),s=t("removeListener")
return["emit","on","un"].forEach(function(t){e[t]=i(function(r,i){n(i,e(r)[t])})}),e}function I(t,e,r){try{var n=JSON.parse(e)}catch(i){}return{statusCode:t,body:e,jsonBody:n,thrown:r}}function C(t,e){function r(t,e,r){var n=_(r)
t(e,g(z(v(J,n))),g(v($,n)))}function n(e,n,i){var o=t(e).emit
n.on(function(t){var e=i(t)
e!==!1&&r(o,$(e),t)},e),t("removeListener").on(function(r){r==e&&(t(r).listeners()||n.un(e))})}var i={node:t(V),path:t(K)}
t("newListener").on(function(t){var r=/(node|path):(.*)/.exec(t)
if(r){var o=i[r[1]]
o.hasListener(t)||n(t,o,e(r[2]))}})}function O(t,e){function r(e,r){return t(e).on(s(r),r),g}function o(t,e,r){r=r||e
var i=s(e)
return t.on(function(){var e=!1
g.forget=function(){e=!0},n(arguments,i),delete g.forget,e&&t.un(r)},r),g}function s(e){return function(){try{return e.apply(g,arguments)}catch(r){t(ee).emit(I(void 0,void 0,r))}}}function u(e,r){return t(e+":"+r)}function f(t){return function(){var e=t.apply(this,arguments)
c(e)&&(e==M.drop?y():b(e))}}function l(t,e,r){var n
n="node"==t?f(r):r,o(u(t,e),n,r)}function p(t,e){for(var r in e)l(t,r,e[r])}function d(t,e,r){return q(e)?l(t,e,r):p(t,e),g}var g,v=/^(node|path):./,m=t(re),y=t(te).emit,b=t(Q).emit,w=i(function(e,r){if(g[e])n(r,g[e])
else{var i=t(e),s=r[0]
v.test(e)?o(i,s):i.on(s)}return g}),_=function(e,r,n){if("done"==e)m.un(r)
else if("node"==e||"path"==e)t.un(e+":"+r,n)
else{var i=r
t(e).un(i)}return g}
return t(ne).on(function(t){g.root=h(t)}),t(ie).on(function(t,e){g.header=function(t){return t?e[t]:e}}),g={on:w,addListener:w,removeListener:_,emit:t.emit,node:U(d,"node"),path:U(d,"path"),done:U(o,m),start:U(r,ie),fail:t(ee).on,abort:t(ae).emit,header:a,root:a,source:e}}function B(t,e,r,n,i){var o=T()
return e&&L(o,H(),t,e,r,n,i),A(o),x(o,R(o)),C(o,G),O(o,e)}function k(t,e,r,n,i,o,s){function a(t,e){return e===!1&&(t+=-1==t.indexOf("?")?"?":"&",t+="_="+(new Date).getTime()),t}return i=i?JSON.parse(JSON.stringify(i)):{},n?q(n)||(n=JSON.stringify(n),i["Content-Type"]=i["Content-Type"]||"application/json"):n=null,t(r||"GET",a(e,s),n,i,o||!1)}function M(t){var e=F("resume","pause","pipe","unpipe","unshift"),r=U(l,e)
return t?r(t)||q(t)?k(B,t):k(B,t.url,t.method,t.body,t.headers,t.withCredentials,t.cached):B()}var U=i(function(t,e){var r=e.length
return i(function(n){for(var i=0;i<n.length;i++)e[r+i]=n[i]
return e.length=r+n.length,t.apply(this,e)})}),P=(i(function(t){function e(t,e){return[n(t,e)]}var r=d(t)
return i(function(t){return m(e,t,r)[0]})}),i(function(t){return i(function(e){for(var r,i=0;i<D(t);i++)if(r=n(e,t[i]))return r})})),D=r("length"),q=U(f,String),N=null,Y=r(0),z=r(1),F=i(d),H=h(t("http-https")),W=function(){var t=function(t){return t.exec.bind(t)},e=i(function(e){return e.unshift(/^/),t(RegExp(e.map(r("source")).join("")))}),n=/(\$?)/,o=/([\w-_]+|\*)/,s=/()/,a=/\["([^"]+)"\]/,u=/\[(\d+|\*)\]/,h=/{([\w ]*?)}/,f=/(?:{([\w ]*?)})?/,c=e(n,o,f),l=e(n,a,f),p=e(n,u,f),d=e(n,s,h),g=e(/\.\./),v=e(/\./),m=e(n,/!/),y=e(/$/)
return function(t){return t(P(c,l,p,d),g,v,m,y)}}(),J=r("key"),$=r("node"),X={},G=W(function(t,r,n,i,o){function a(t,e){var r=e[x],n=r&&"*"!=r?function(t){return S(t)==r}:u
return s(n,t)}function h(t,r){var n=r[L]
if(!n)return t
var i=U(l,d(n.split(/\W+/))),o=e(i,R)
return s(o,t)}function f(t,e){var r=!!e[A]
return r?s(t,Y):t}function c(t){function r(t){return S(t)!=X}return t==u?u:s(r,e(t,z))}function p(t){if(t==u)return u
var e=g(),r=t,n=c(function(t){return i(t)}),i=P(e,r,n)
return i}function g(){return function(t){return S(t)==X}}function v(t){return function(e){var r=t(e)
return r===!0?Y(e):r}}function y(t,e,r){return m(function(t,e){return e(t,r)},e,t)}function b(t,e,r,n,i){var o=t(r)
if(o){var s=y(e,n,o),a=r.substr(D(o[0]))
return i(a,s)}}function w(t,e){return U(b,t,e)}function _(t,e){return e}function E(t,e){var r=t?E:_
return j(t,e,r)}var A=1,x=2,L=3,S=e(J,Y),R=e($,Y),j=P(w(t,F(f,h,a,c)),w(r,F(p)),w(n,F()),w(i,F(f,g)),w(o,F(v)),function(t){throw Error('"'+t+'" could not be tokenised')})
return function(t){try{return E(t,u)}catch(e){throw Error('Could not compile "'+t+'" because '+e.message)}}}),Z=1,K=Z++,V=Z++,Q=Z++,te=Z++,ee="fail",re=Z++,ne=Z++,ie="start",oe="data",se="end",ae=Z++,ue=Z++,he=Z++,fe=Z++
return M.drop=function(){return M.drop},M}()},{"http-https":6,url:37}],6:[function(t,e,r){function n(t){return"string"==typeof t&&(t=s.parse(t)),"https:"===t.protocol?o:i}var i=r.http=t("http"),o=r.https=t("https"),s=t("url")
r.get=function(t,e){return n(t).get(t,e)},r.request=function(t,e){return n(t).request(t,e)},r.getModule=n},{http:12,https:16,url:37}],7:[function(t,e,r){function n(t,e,r){if(!(this instanceof n))return new n(t,e,r)
var i,o=typeof t
if("number"===o)i=t>0?t>>>0:0
else if("string"===o)"base64"===e&&(t=A(t)),i=n.byteLength(t,e)
else{if("object"!==o||null===t)throw new TypeError("must start with number, buffer, array or string")
"Buffer"===t.type&&M(t.data)&&(t=t.data),i=+t.length>0?Math.floor(+t.length):0}if(this.length>U)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+U.toString(16)+" bytes")
var s
n.TYPED_ARRAY_SUPPORT?s=n._augment(new Uint8Array(i)):(s=this,s.length=i,s._isBuffer=!0)
var a
if(n.TYPED_ARRAY_SUPPORT&&"number"==typeof t.byteLength)s._set(t)
else if(L(t))if(n.isBuffer(t))for(a=0;i>a;a++)s[a]=t.readUInt8(a)
else for(a=0;i>a;a++)s[a]=(t[a]%256+256)%256
else if("string"===o)s.write(t,0,e)
else if("number"===o&&!n.TYPED_ARRAY_SUPPORT&&!r)for(a=0;i>a;a++)s[a]=0
return s}function i(t,e,r,n){r=+r||0
var i=t.length-r
n?(n=+n,n>i&&(n=i)):n=i
var o=e.length
if(o%2!==0)throw Error("Invalid hex string")
n>o/2&&(n=o/2)
for(var s=0;n>s;s++){var a=parseInt(e.substr(2*s,2),16)
if(isNaN(a))throw Error("Invalid hex string")
t[r+s]=a}return s}function o(t,e,r,n){var i=C(R(e),t,r,n)
return i}function s(t,e,r,n){var i=C(j(e),t,r,n)
return i}function a(t,e,r,n){return s(t,e,r,n)}function u(t,e,r,n){var i=C(I(e),t,r,n)
return i}function h(t,e,r,n){var i=C(T(e),t,r,n)
return i}function f(t,e,r){return B.fromByteArray(0===e&&r===t.length?t:t.slice(e,r))}function c(t,e,r){var n="",i=""
r=Math.min(t.length,r)
for(var o=e;r>o;o++)t[o]<=127?(n+=O(i)+String.fromCharCode(t[o]),i=""):i+="%"+t[o].toString(16)
return n+O(i)}function l(t,e,r){var n=""
r=Math.min(t.length,r)
for(var i=e;r>i;i++)n+=String.fromCharCode(t[i])
return n}function p(t,e,r){return l(t,e,r)}function d(t,e,r){var n=t.length;(!e||0>e)&&(e=0),(!r||0>r||r>n)&&(r=n)
for(var i="",o=e;r>o;o++)i+=S(t[o])
return i}function g(t,e,r){for(var n=t.slice(e,r),i="",o=0;o<n.length;o+=2)i+=String.fromCharCode(n[o]+256*n[o+1])
return i}function v(t,e,r){if(t%1!==0||0>t)throw new RangeError("offset is not uint")
if(t+e>r)throw new RangeError("Trying to access beyond buffer length")}function m(t,e,r,i,o,s){if(!n.isBuffer(t))throw new TypeError("buffer must be a Buffer instance")
if(e>o||s>e)throw new TypeError("value is out of bounds")
if(r+i>t.length)throw new TypeError("index out of range")}function y(t,e,r,n){0>e&&(e=65535+e+1)
for(var i=0,o=Math.min(t.length-r,2);o>i;i++)t[r+i]=(e&255<<8*(n?i:1-i))>>>8*(n?i:1-i)}function b(t,e,r,n){0>e&&(e=4294967295+e+1)
for(var i=0,o=Math.min(t.length-r,4);o>i;i++)t[r+i]=e>>>8*(n?i:3-i)&255}function w(t,e,r,n,i,o){if(e>i||o>e)throw new TypeError("value is out of bounds")
if(r+n>t.length)throw new TypeError("index out of range")}function _(t,e,r,n,i){return i||w(t,e,r,4,3.4028234663852886e38,-3.4028234663852886e38),k.write(t,e,r,n,23,4),r+4}function E(t,e,r,n,i){return i||w(t,e,r,8,1.7976931348623157e308,-1.7976931348623157e308),k.write(t,e,r,n,52,8),r+8}function A(t){for(t=x(t).replace(D,"");t.length%4!==0;)t+="="
return t}function x(t){return t.trim?t.trim():t.replace(/^\s+|\s+$/g,"")}function L(t){return M(t)||n.isBuffer(t)||t&&"object"==typeof t&&"number"==typeof t.length}function S(t){return 16>t?"0"+t.toString(16):t.toString(16)}function R(t){for(var e=[],r=0;r<t.length;r++){var n=t.charCodeAt(r)
if(127>=n)e.push(n)
else{var i=r
n>=55296&&57343>=n&&r++
for(var o=encodeURIComponent(t.slice(i,r+1)).substr(1).split("%"),s=0;s<o.length;s++)e.push(parseInt(o[s],16))}}return e}function j(t){for(var e=[],r=0;r<t.length;r++)e.push(255&t.charCodeAt(r))
return e}function T(t){for(var e,r,n,i=[],o=0;o<t.length;o++)e=t.charCodeAt(o),r=e>>8,n=e%256,i.push(n),i.push(r)
return i}function I(t){return B.toByteArray(t)}function C(t,e,r,n){for(var i=0;n>i&&!(i+r>=e.length||i>=t.length);i++)e[i+r]=t[i]
return i}function O(t){try{return decodeURIComponent(t)}catch(e){return String.fromCharCode(65533)}}var B=t("base64-js"),k=t("ieee754"),M=t("is-array")
r.Buffer=n,r.SlowBuffer=n,r.INSPECT_MAX_BYTES=50,n.poolSize=8192
var U=1073741823
n.TYPED_ARRAY_SUPPORT=function(){try{var t=new ArrayBuffer(0),e=new Uint8Array(t)
return e.foo=function(){return 42},42===e.foo()&&"function"==typeof e.subarray&&0===new Uint8Array(1).subarray(1,1).byteLength}catch(r){return!1}}(),n.isBuffer=function(t){return!(null==t||!t._isBuffer)},n.compare=function(t,e){if(!n.isBuffer(t)||!n.isBuffer(e))throw new TypeError("Arguments must be Buffers")
for(var r=t.length,i=e.length,o=0,s=Math.min(r,i);s>o&&t[o]===e[o];o++);return o!==s&&(r=t[o],i=e[o]),i>r?-1:r>i?1:0},n.isEncoding=function(t){switch((t+"").toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"binary":case"base64":case"raw":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0
default:return!1}},n.concat=function(t,e){if(!M(t))throw new TypeError("Usage: Buffer.concat(list[, length])")
if(0===t.length)return new n(0)
if(1===t.length)return t[0]
var r
if(void 0===e)for(e=0,r=0;r<t.length;r++)e+=t[r].length
var i=new n(e),o=0
for(r=0;r<t.length;r++){var s=t[r]
s.copy(i,o),o+=s.length}return i},n.byteLength=function(t,e){var r
switch(t+="",e||"utf8"){case"ascii":case"binary":case"raw":r=t.length
break
case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":r=2*t.length
break
case"hex":r=t.length>>>1
break
case"utf8":case"utf-8":r=R(t).length
break
case"base64":r=I(t).length
break
default:r=t.length}return r},n.prototype.length=void 0,n.prototype.parent=void 0,n.prototype.toString=function(t,e,r){var n=!1
if(e>>>=0,r=void 0===r||1/0===r?this.length:r>>>0,t||(t="utf8"),0>e&&(e=0),r>this.length&&(r=this.length),e>=r)return""
for(;;)switch(t){case"hex":return d(this,e,r)
case"utf8":case"utf-8":return c(this,e,r)
case"ascii":return l(this,e,r)
case"binary":return p(this,e,r)
case"base64":return f(this,e,r)
case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return g(this,e,r)
default:if(n)throw new TypeError("Unknown encoding: "+t)
t=(t+"").toLowerCase(),n=!0}},n.prototype.equals=function(t){if(!n.isBuffer(t))throw new TypeError("Argument must be a Buffer")
return 0===n.compare(this,t)},n.prototype.inspect=function(){var t="",e=r.INSPECT_MAX_BYTES
return this.length>0&&(t=this.toString("hex",0,e).match(/.{2}/g).join(" "),this.length>e&&(t+=" ... ")),"<Buffer "+t+">"},n.prototype.compare=function(t){if(!n.isBuffer(t))throw new TypeError("Argument must be a Buffer")
return n.compare(this,t)},n.prototype.get=function(t){return console.log(".get() is deprecated. Access using array indexes instead."),this.readUInt8(t)},n.prototype.set=function(t,e){return console.log(".set() is deprecated. Access using array indexes instead."),this.writeUInt8(t,e)},n.prototype.write=function(t,e,r,n){if(isFinite(e))isFinite(r)||(n=r,r=void 0)
else{var f=n
n=e,e=r,r=f}e=+e||0
var c=this.length-e
r?(r=+r,r>c&&(r=c)):r=c,n=((n||"utf8")+"").toLowerCase()
var l
switch(n){case"hex":l=i(this,t,e,r)
break
case"utf8":case"utf-8":l=o(this,t,e,r)
break
case"ascii":l=s(this,t,e,r)
break
case"binary":l=a(this,t,e,r)
break
case"base64":l=u(this,t,e,r)
break
case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":l=h(this,t,e,r)
break
default:throw new TypeError("Unknown encoding: "+n)}return l},n.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}},n.prototype.slice=function(t,e){var r=this.length
if(t=~~t,e=void 0===e?r:~~e,0>t?(t+=r,0>t&&(t=0)):t>r&&(t=r),0>e?(e+=r,0>e&&(e=0)):e>r&&(e=r),t>e&&(e=t),n.TYPED_ARRAY_SUPPORT)return n._augment(this.subarray(t,e))
for(var i=e-t,o=new n(i,void 0,!0),s=0;i>s;s++)o[s]=this[s+t]
return o},n.prototype.readUInt8=function(t,e){return e||v(t,1,this.length),this[t]},n.prototype.readUInt16LE=function(t,e){return e||v(t,2,this.length),this[t]|this[t+1]<<8},n.prototype.readUInt16BE=function(t,e){return e||v(t,2,this.length),this[t]<<8|this[t+1]},n.prototype.readUInt32LE=function(t,e){return e||v(t,4,this.length),(this[t]|this[t+1]<<8|this[t+2]<<16)+16777216*this[t+3]},n.prototype.readUInt32BE=function(t,e){return e||v(t,4,this.length),16777216*this[t]+(this[t+1]<<16|this[t+2]<<8|this[t+3])},n.prototype.readInt8=function(t,e){return e||v(t,1,this.length),128&this[t]?-1*(255-this[t]+1):this[t]},n.prototype.readInt16LE=function(t,e){e||v(t,2,this.length)
var r=this[t]|this[t+1]<<8
return 32768&r?4294901760|r:r},n.prototype.readInt16BE=function(t,e){e||v(t,2,this.length)
var r=this[t+1]|this[t]<<8
return 32768&r?4294901760|r:r},n.prototype.readInt32LE=function(t,e){return e||v(t,4,this.length),this[t]|this[t+1]<<8|this[t+2]<<16|this[t+3]<<24},n.prototype.readInt32BE=function(t,e){return e||v(t,4,this.length),this[t]<<24|this[t+1]<<16|this[t+2]<<8|this[t+3]},n.prototype.readFloatLE=function(t,e){return e||v(t,4,this.length),k.read(this,t,!0,23,4)},n.prototype.readFloatBE=function(t,e){return e||v(t,4,this.length),k.read(this,t,!1,23,4)},n.prototype.readDoubleLE=function(t,e){return e||v(t,8,this.length),k.read(this,t,!0,52,8)},n.prototype.readDoubleBE=function(t,e){return e||v(t,8,this.length),k.read(this,t,!1,52,8)},n.prototype.writeUInt8=function(t,e,r){return t=+t,e>>>=0,r||m(this,t,e,1,255,0),n.TYPED_ARRAY_SUPPORT||(t=Math.floor(t)),this[e]=t,e+1},n.prototype.writeUInt16LE=function(t,e,r){return t=+t,e>>>=0,r||m(this,t,e,2,65535,0),n.TYPED_ARRAY_SUPPORT?(this[e]=t,this[e+1]=t>>>8):y(this,t,e,!0),e+2},n.prototype.writeUInt16BE=function(t,e,r){return t=+t,e>>>=0,r||m(this,t,e,2,65535,0),n.TYPED_ARRAY_SUPPORT?(this[e]=t>>>8,this[e+1]=t):y(this,t,e,!1),e+2},n.prototype.writeUInt32LE=function(t,e,r){return t=+t,e>>>=0,r||m(this,t,e,4,4294967295,0),n.TYPED_ARRAY_SUPPORT?(this[e+3]=t>>>24,this[e+2]=t>>>16,this[e+1]=t>>>8,this[e]=t):b(this,t,e,!0),e+4},n.prototype.writeUInt32BE=function(t,e,r){return t=+t,e>>>=0,r||m(this,t,e,4,4294967295,0),n.TYPED_ARRAY_SUPPORT?(this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=t):b(this,t,e,!1),e+4},n.prototype.writeInt8=function(t,e,r){return t=+t,e>>>=0,r||m(this,t,e,1,127,-128),n.TYPED_ARRAY_SUPPORT||(t=Math.floor(t)),0>t&&(t=255+t+1),this[e]=t,e+1},n.prototype.writeInt16LE=function(t,e,r){return t=+t,e>>>=0,r||m(this,t,e,2,32767,-32768),n.TYPED_ARRAY_SUPPORT?(this[e]=t,this[e+1]=t>>>8):y(this,t,e,!0),e+2},n.prototype.writeInt16BE=function(t,e,r){return t=+t,e>>>=0,r||m(this,t,e,2,32767,-32768),n.TYPED_ARRAY_SUPPORT?(this[e]=t>>>8,this[e+1]=t):y(this,t,e,!1),e+2},n.prototype.writeInt32LE=function(t,e,r){return t=+t,e>>>=0,r||m(this,t,e,4,2147483647,-2147483648),n.TYPED_ARRAY_SUPPORT?(this[e]=t,this[e+1]=t>>>8,this[e+2]=t>>>16,this[e+3]=t>>>24):b(this,t,e,!0),e+4},n.prototype.writeInt32BE=function(t,e,r){return t=+t,e>>>=0,r||m(this,t,e,4,2147483647,-2147483648),0>t&&(t=4294967295+t+1),n.TYPED_ARRAY_SUPPORT?(this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=t):b(this,t,e,!1),e+4},n.prototype.writeFloatLE=function(t,e,r){return _(this,t,e,!0,r)},n.prototype.writeFloatBE=function(t,e,r){return _(this,t,e,!1,r)},n.prototype.writeDoubleLE=function(t,e,r){return E(this,t,e,!0,r)},n.prototype.writeDoubleBE=function(t,e,r){return E(this,t,e,!1,r)},n.prototype.copy=function(t,e,r,i){var o=this
if(r||(r=0),i||0===i||(i=this.length),e||(e=0),i!==r&&0!==t.length&&0!==o.length){if(r>i)throw new TypeError("sourceEnd < sourceStart")
if(0>e||e>=t.length)throw new TypeError("targetStart out of bounds")
if(0>r||r>=o.length)throw new TypeError("sourceStart out of bounds")
if(0>i||i>o.length)throw new TypeError("sourceEnd out of bounds")
i>this.length&&(i=this.length),t.length-e<i-r&&(i=t.length-e+r)
var s=i-r
if(100>s||!n.TYPED_ARRAY_SUPPORT)for(var a=0;s>a;a++)t[a+e]=this[a+r]
else t._set(this.subarray(r,r+s),e)}},n.prototype.fill=function(t,e,r){if(t||(t=0),e||(e=0),r||(r=this.length),e>r)throw new TypeError("end < start")
if(r!==e&&0!==this.length){if(0>e||e>=this.length)throw new TypeError("start out of bounds")
if(0>r||r>this.length)throw new TypeError("end out of bounds")
var n
if("number"==typeof t)for(n=e;r>n;n++)this[n]=t
else{var i=R(""+t),o=i.length
for(n=e;r>n;n++)this[n]=i[n%o]}return this}},n.prototype.toArrayBuffer=function(){if("undefined"!=typeof Uint8Array){if(n.TYPED_ARRAY_SUPPORT)return new n(this).buffer
for(var t=new Uint8Array(this.length),e=0,r=t.length;r>e;e+=1)t[e]=this[e]
return t.buffer}throw new TypeError("Buffer.toArrayBuffer not supported in this browser")}
var P=n.prototype
n._augment=function(t){return t._isBuffer=!0,t._get=t.get,t._set=t.set,t.get=P.get,t.set=P.set,t.write=P.write,t.toString=P.toString,t.toLocaleString=P.toString,t.toJSON=P.toJSON,t.equals=P.equals,t.compare=P.compare,t.copy=P.copy,t.slice=P.slice,t.readUInt8=P.readUInt8,t.readUInt16LE=P.readUInt16LE,t.readUInt16BE=P.readUInt16BE,t.readUInt32LE=P.readUInt32LE,t.readUInt32BE=P.readUInt32BE,t.readInt8=P.readInt8,t.readInt16LE=P.readInt16LE,t.readInt16BE=P.readInt16BE,t.readInt32LE=P.readInt32LE,t.readInt32BE=P.readInt32BE,t.readFloatLE=P.readFloatLE,t.readFloatBE=P.readFloatBE,t.readDoubleLE=P.readDoubleLE,t.readDoubleBE=P.readDoubleBE,t.writeUInt8=P.writeUInt8,t.writeUInt16LE=P.writeUInt16LE,t.writeUInt16BE=P.writeUInt16BE,t.writeUInt32LE=P.writeUInt32LE,t.writeUInt32BE=P.writeUInt32BE,t.writeInt8=P.writeInt8,t.writeInt16LE=P.writeInt16LE,t.writeInt16BE=P.writeInt16BE,t.writeInt32LE=P.writeInt32LE,t.writeInt32BE=P.writeInt32BE,t.writeFloatLE=P.writeFloatLE,t.writeFloatBE=P.writeFloatBE,t.writeDoubleLE=P.writeDoubleLE,t.writeDoubleBE=P.writeDoubleBE,t.fill=P.fill,t.inspect=P.inspect,t.toArrayBuffer=P.toArrayBuffer,t}
var D=/[^+\/0-9A-z]/g},{"base64-js":8,ieee754:9,"is-array":10}],8:[function(t,e,r){var n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"
!function(t){"use strict"
function e(t){var e=t.charCodeAt(0)
return e===s?62:e===a?63:u>e?-1:u+10>e?e-u+26+26:f+26>e?e-f:h+26>e?e-h+26:void 0}function r(t){function r(t){h[c++]=t}var n,i,s,a,u,h
if(t.length%4>0)throw Error("Invalid string. Length must be a multiple of 4")
var f=t.length
u="="===t.charAt(f-2)?2:"="===t.charAt(f-1)?1:0,h=new o(3*t.length/4-u),s=u>0?t.length-4:t.length
var c=0
for(n=0,i=0;s>n;n+=4,i+=3)a=e(t.charAt(n))<<18|e(t.charAt(n+1))<<12|e(t.charAt(n+2))<<6|e(t.charAt(n+3)),r((16711680&a)>>16),r((65280&a)>>8),r(255&a)
return 2===u?(a=e(t.charAt(n))<<2|e(t.charAt(n+1))>>4,r(255&a)):1===u&&(a=e(t.charAt(n))<<10|e(t.charAt(n+1))<<4|e(t.charAt(n+2))>>2,r(a>>8&255),r(255&a)),h}function i(t){function e(t){return n.charAt(t)}function r(t){return e(t>>18&63)+e(t>>12&63)+e(t>>6&63)+e(63&t)}var i,o,s,a=t.length%3,u=""
for(i=0,s=t.length-a;s>i;i+=3)o=(t[i]<<16)+(t[i+1]<<8)+t[i+2],u+=r(o)
switch(a){case 1:o=t[t.length-1],u+=e(o>>2),u+=e(o<<4&63),u+="=="
break
case 2:o=(t[t.length-2]<<8)+t[t.length-1],u+=e(o>>10),u+=e(o>>4&63),u+=e(o<<2&63),u+="="}return u}var o="undefined"!=typeof Uint8Array?Uint8Array:Array,s="+".charCodeAt(0),a="/".charCodeAt(0),u="0".charCodeAt(0),h="a".charCodeAt(0),f="A".charCodeAt(0)
t.toByteArray=r,t.fromByteArray=i}(void 0===r?this.base64js={}:r)},{}],9:[function(t,e,r){r.read=function(t,e,r,n,i){var o,s,a=8*i-n-1,u=(1<<a)-1,h=u>>1,f=-7,c=r?i-1:0,l=r?-1:1,p=t[e+c]
for(c+=l,o=p&(1<<-f)-1,p>>=-f,f+=a;f>0;o=256*o+t[e+c],c+=l,f-=8);for(s=o&(1<<-f)-1,o>>=-f,f+=n;f>0;s=256*s+t[e+c],c+=l,f-=8);if(0===o)o=1-h
else{if(o===u)return s?0/0:1/0*(p?-1:1)
s+=Math.pow(2,n),o-=h}return(p?-1:1)*s*Math.pow(2,o-n)},r.write=function(t,e,r,n,i,o){var s,a,u,h=8*o-i-1,f=(1<<h)-1,c=f>>1,l=23===i?Math.pow(2,-24)-Math.pow(2,-77):0,p=n?0:o-1,d=n?1:-1,g=0>e||0===e&&0>1/e?1:0
for(e=Math.abs(e),isNaN(e)||1/0===e?(a=isNaN(e)?1:0,s=f):(s=Math.floor(Math.log(e)/Math.LN2),e*(u=Math.pow(2,-s))<1&&(s--,u*=2),e+=s+c>=1?l/u:l*Math.pow(2,1-c),e*u>=2&&(s++,u/=2),s+c>=f?(a=0,s=f):s+c>=1?(a=(e*u-1)*Math.pow(2,i),s+=c):(a=e*Math.pow(2,c-1)*Math.pow(2,i),s=0));i>=8;t[r+p]=255&a,p+=d,a/=256,i-=8);for(s=s<<i|a,h+=i;h>0;t[r+p]=255&s,p+=d,s/=256,h-=8);t[r+p-d]|=128*g}},{}],10:[function(t,e){var r=Array.isArray,n=Object.prototype.toString
e.exports=r||function(t){return!!t&&"[object Array]"==n.call(t)}},{}],11:[function(t,e){function r(){this._events=this._events||{},this._maxListeners=this._maxListeners||void 0}function n(t){return"function"==typeof t}function i(t){return"number"==typeof t}function o(t){return"object"==typeof t&&null!==t}function s(t){return void 0===t}e.exports=r,r.EventEmitter=r,r.prototype._events=void 0,r.prototype._maxListeners=void 0,r.defaultMaxListeners=10,r.prototype.setMaxListeners=function(t){if(!i(t)||0>t||isNaN(t))throw TypeError("n must be a positive number")
return this._maxListeners=t,this},r.prototype.emit=function(t){var e,r,i,a,u,h
if(this._events||(this._events={}),"error"===t&&(!this._events.error||o(this._events.error)&&!this._events.error.length)){if(e=arguments[1],e instanceof Error)throw e
throw TypeError('Uncaught, unspecified "error" event.')}if(r=this._events[t],s(r))return!1
if(n(r))switch(arguments.length){case 1:r.call(this)
break
case 2:r.call(this,arguments[1])
break
case 3:r.call(this,arguments[1],arguments[2])
break
default:for(i=arguments.length,a=Array(i-1),u=1;i>u;u++)a[u-1]=arguments[u]
r.apply(this,a)}else if(o(r)){for(i=arguments.length,a=Array(i-1),u=1;i>u;u++)a[u-1]=arguments[u]
for(h=r.slice(),i=h.length,u=0;i>u;u++)h[u].apply(this,a)}return!0},r.prototype.addListener=function(t,e){var i
if(!n(e))throw TypeError("listener must be a function")
if(this._events||(this._events={}),this._events.newListener&&this.emit("newListener",t,n(e.listener)?e.listener:e),this._events[t]?o(this._events[t])?this._events[t].push(e):this._events[t]=[this._events[t],e]:this._events[t]=e,o(this._events[t])&&!this._events[t].warned){var i
i=s(this._maxListeners)?r.defaultMaxListeners:this._maxListeners,i&&i>0&&this._events[t].length>i&&(this._events[t].warned=!0,console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.",this._events[t].length),"function"==typeof console.trace&&console.trace())}return this},r.prototype.on=r.prototype.addListener,r.prototype.once=function(t,e){function r(){this.removeListener(t,r),i||(i=!0,e.apply(this,arguments))}if(!n(e))throw TypeError("listener must be a function")
var i=!1
return r.listener=e,this.on(t,r),this},r.prototype.removeListener=function(t,e){var r,i,s,a
if(!n(e))throw TypeError("listener must be a function")
if(!this._events||!this._events[t])return this
if(r=this._events[t],s=r.length,i=-1,r===e||n(r.listener)&&r.listener===e)delete this._events[t],this._events.removeListener&&this.emit("removeListener",t,e)
else if(o(r)){for(a=s;a-->0;)if(r[a]===e||r[a].listener&&r[a].listener===e){i=a
break}if(0>i)return this
1===r.length?(r.length=0,delete this._events[t]):r.splice(i,1),this._events.removeListener&&this.emit("removeListener",t,e)}return this},r.prototype.removeAllListeners=function(t){var e,r
if(!this._events)return this
if(!this._events.removeListener)return 0===arguments.length?this._events={}:this._events[t]&&delete this._events[t],this
if(0===arguments.length){for(e in this._events)"removeListener"!==e&&this.removeAllListeners(e)
return this.removeAllListeners("removeListener"),this._events={},this}if(r=this._events[t],n(r))this.removeListener(t,r)
else for(;r.length;)this.removeListener(t,r[r.length-1])
return delete this._events[t],this},r.prototype.listeners=function(t){var e
return e=this._events&&this._events[t]?n(this._events[t])?[this._events[t]]:this._events[t].slice():[]},r.listenerCount=function(t,e){var r
return r=t._events&&t._events[e]?n(t._events[e])?1:t._events[e].length:0}},{}],12:[function(t,e){var r=e.exports,n=(t("events").EventEmitter,t("./lib/request")),i=t("url")
r.request=function(t,e){"string"==typeof t&&(t=i.parse(t)),t||(t={}),t.host||t.port||(t.port=parseInt(window.location.port,10)),!t.host&&t.hostname&&(t.host=t.hostname),t.protocol||(t.protocol=t.scheme?t.scheme+":":window.location.protocol),t.host||(t.host=window.location.hostname||window.location.host),/:/.test(t.host)&&(t.port||(t.port=t.host.split(":")[1]),t.host=t.host.split(":")[0]),t.port||(t.port="https:"==t.protocol?443:80)
var r=new n(new o,t)
return e&&r.on("response",e),r},r.get=function(t,e){t.method="GET"
var n=r.request(t,e)
return n.end(),n},r.Agent=function(){},r.Agent.defaultMaxSockets=4
var o=function(){if("undefined"==typeof window)throw Error("no window object present")
if(window.XMLHttpRequest)return window.XMLHttpRequest
if(window.ActiveXObject){for(var t=["Msxml2.XMLHTTP.6.0","Msxml2.XMLHTTP.3.0","Microsoft.XMLHTTP"],e=0;e<t.length;e++)try{var r=new window.ActiveXObject(t[e])
return function(){if(r){var n=r
return r=null,n}return new window.ActiveXObject(t[e])}}catch(n){}throw Error("ajax not supported in this browser")}throw Error("ajax not supported in this browser")}()
r.STATUS_CODES={100:"Continue",101:"Switching Protocols",102:"Processing",200:"OK",201:"Created",202:"Accepted",203:"Non-Authoritative Information",204:"No Content",205:"Reset Content",206:"Partial Content",207:"Multi-Status",300:"Multiple Choices",301:"Moved Permanently",302:"Moved Temporarily",303:"See Other",304:"Not Modified",305:"Use Proxy",307:"Temporary Redirect",400:"Bad Request",401:"Unauthorized",402:"Payment Required",403:"Forbidden",404:"Not Found",405:"Method Not Allowed",406:"Not Acceptable",407:"Proxy Authentication Required",408:"Request Time-out",409:"Conflict",410:"Gone",411:"Length Required",412:"Precondition Failed",413:"Request Entity Too Large",414:"Request-URI Too Large",415:"Unsupported Media Type",416:"Requested Range Not Satisfiable",417:"Expectation Failed",418:"I'm a teapot",422:"Unprocessable Entity",423:"Locked",424:"Failed Dependency",425:"Unordered Collection",426:"Upgrade Required",428:"Precondition Required",429:"Too Many Requests",431:"Request Header Fields Too Large",500:"Internal Server Error",501:"Not Implemented",502:"Bad Gateway",503:"Service Unavailable",504:"Gateway Time-out",505:"HTTP Version Not Supported",506:"Variant Also Negotiates",507:"Insufficient Storage",509:"Bandwidth Limit Exceeded",510:"Not Extended",511:"Network Authentication Required"}},{"./lib/request":13,events:11,url:37}],13:[function(t,e){var r=t("stream"),n=t("./response"),i=t("Base64"),o=t("inherits"),s=e.exports=function(t,e){var r=this
r.writable=!0,r.xhr=t,r.body=[],r.uri=(e.protocol||"http:")+"//"+e.host+(e.port?":"+e.port:"")+(e.path||"/"),void 0===e.withCredentials&&(e.withCredentials=!0)
try{t.withCredentials=e.withCredentials}catch(o){}if(e.responseType)try{t.responseType=e.responseType}catch(o){}if(t.open(e.method||"GET",r.uri,!0),t.onerror=function(){r.emit("error",Error("Network error"))},r._headers={},e.headers)for(var s=a(e.headers),u=0;u<s.length;u++){var h=s[u]
if(r.isSafeRequestHeader(h)){var f=e.headers[h]
r.setHeader(h,f)}}e.auth&&this.setHeader("Authorization","Basic "+i.btoa(e.auth))
var c=new n
c.on("close",function(){r.emit("close")}),c.on("ready",function(){r.emit("response",c)}),c.on("error",function(t){r.emit("error",t)}),t.onreadystatechange=function(){t.__aborted||c.handle(t)}}
o(s,r),s.prototype.setHeader=function(t,e){this._headers[t.toLowerCase()]=e},s.prototype.getHeader=function(t){return this._headers[t.toLowerCase()]},s.prototype.removeHeader=function(t){delete this._headers[t.toLowerCase()]},s.prototype.write=function(t){this.body.push(t)},s.prototype.destroy=function(){this.xhr.__aborted=!0,this.xhr.abort(),this.emit("close")},s.prototype.end=function(t){void 0!==t&&this.body.push(t)
for(var e=a(this._headers),r=0;r<e.length;r++){var n=e[r],i=this._headers[n]
if(u(i))for(var o=0;o<i.length;o++)this.xhr.setRequestHeader(n,i[o])
else this.xhr.setRequestHeader(n,i)}if(0===this.body.length)this.xhr.send("")
else if("string"==typeof this.body[0])this.xhr.send(this.body.join(""))
else if(u(this.body[0])){for(var s=[],r=0;r<this.body.length;r++)s.push.apply(s,this.body[r])
this.xhr.send(s)}else if(/Array/.test(Object.prototype.toString.call(this.body[0]))){for(var h=0,r=0;r<this.body.length;r++)h+=this.body[r].length
for(var s=new this.body[0].constructor(h),c=0,r=0;r<this.body.length;r++)for(var l=this.body[r],o=0;o<l.length;o++)s[c++]=l[o]
this.xhr.send(s)}else if(f(this.body[0]))this.xhr.send(this.body[0])
else{for(var s="",r=0;r<this.body.length;r++)s+=""+this.body[r]
this.xhr.send(s)}},s.unsafeHeaders=["accept-charset","accept-encoding","access-control-request-headers","access-control-request-method","connection","content-length","cookie","cookie2","content-transfer-encoding","date","expect","host","keep-alive","origin","referer","te","trailer","transfer-encoding","upgrade","user-agent","via"],s.prototype.isSafeRequestHeader=function(t){return t?-1===h(s.unsafeHeaders,t.toLowerCase()):!1}
var a=Object.keys||function(t){var e=[]
for(var r in t)e.push(r)
return e},u=Array.isArray||function(t){return"[object Array]"===Object.prototype.toString.call(t)},h=function(t,e){if(t.indexOf)return t.indexOf(e)
for(var r=0;r<t.length;r++)if(t[r]===e)return r
return-1},f=function(t){return"undefined"!=typeof Blob&&t instanceof Blob?!0:"undefined"!=typeof ArrayBuffer&&t instanceof ArrayBuffer?!0:"undefined"!=typeof FormData&&t instanceof FormData?!0:void 0}},{"./response":14,Base64:15,inherits:17,stream:35}],14:[function(t,e){function r(t){for(var e=t.getAllResponseHeaders().split(/\r?\n/),r={},n=0;n<e.length;n++){var i=e[n]
if(""!==i){var o=i.match(/^([^:]+):\s*(.*)/)
if(o){var s=o[1].toLowerCase(),u=o[2]
void 0!==r[s]?a(r[s])?r[s].push(u):r[s]=[r[s],u]:r[s]=u}else r[i]=!0}}return r}var n=t("stream"),i=t("util"),o=e.exports=function(){this.offset=0,this.readable=!0}
i.inherits(o,n)
var s={streaming:!0,status2:!0}
o.prototype.getResponse=function(t){var e=(t.responseType+"").toLowerCase()
return"blob"===e?t.responseBlob||t.response:"arraybuffer"===e?t.response:t.responseText},o.prototype.getHeader=function(t){return this.headers[t.toLowerCase()]},o.prototype.handle=function(t){if(2===t.readyState&&s.status2){try{this.statusCode=t.status,this.headers=r(t)}catch(e){s.status2=!1}s.status2&&this.emit("ready")}else if(s.streaming&&3===t.readyState){try{this.statusCode||(this.statusCode=t.status,this.headers=r(t),this.emit("ready"))}catch(e){}try{this._emitData(t)}catch(e){s.streaming=!1}}else 4===t.readyState&&(this.statusCode||(this.statusCode=t.status,this.emit("ready")),this._emitData(t),t.error?this.emit("error",this.getResponse(t)):this.emit("end"),this.emit("close"))},o.prototype._emitData=function(t){var e=this.getResponse(t)
return(""+e).match(/ArrayBuffer/)?(this.emit("data",new Uint8Array(e,this.offset)),void(this.offset=e.byteLength)):void(e.length>this.offset&&(this.emit("data",e.slice(this.offset)),this.offset=e.length))}
var a=Array.isArray||function(t){return"[object Array]"===Object.prototype.toString.call(t)}},{stream:35,util:39}],15:[function(t,e,r){!function(){function t(t){this.message=t}var e=void 0!==r?r:this,n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
t.prototype=Error(),t.prototype.name="InvalidCharacterError",e.btoa||(e.btoa=function(e){for(var r,i,o=0,s=n,a="";e.charAt(0|o)||(s="=",o%1);a+=s.charAt(63&r>>8-o%1*8)){if(i=e.charCodeAt(o+=.75),i>255)throw new t("'btoa' failed: The string to be encoded contains characters outside of the Latin1 range.")
r=r<<8|i}return a}),e.atob||(e.atob=function(e){if(e=e.replace(/=+$/,""),e.length%4==1)throw new t("'atob' failed: The string to be decoded is not correctly encoded.")
for(var r,i,o=0,s=0,a="";i=e.charAt(s++);~i&&(r=o%4?64*r+i:i,o++%4)?a+=String.fromCharCode(255&r>>(-2*o&6)):0)i=n.indexOf(i)
return a})}()},{}],16:[function(t,e){var r=t("http"),n=e.exports
for(var i in r)r.hasOwnProperty(i)&&(n[i]=r[i])
n.request=function(t,e){return t||(t={}),t.scheme="https",r.request.call(this,t,e)}},{http:12}],17:[function(t,e){e.exports="function"==typeof Object.create?function(t,e){t.super_=e,t.prototype=Object.create(e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}})}:function(t,e){t.super_=e
var r=function(){}
r.prototype=e.prototype,t.prototype=new r,t.prototype.constructor=t}},{}],18:[function(t,e){e.exports=Array.isArray||function(t){return"[object Array]"==Object.prototype.toString.call(t)}},{}],19:[function(t,e){function r(){}var n=e.exports={}
n.nextTick=function(){var t="undefined"!=typeof window&&window.setImmediate,e="undefined"!=typeof window&&window.MutationObserver,r="undefined"!=typeof window&&window.postMessage&&window.addEventListener
if(t)return function(t){return window.setImmediate(t)}
var n=[]
if(e){var i=document.createElement("div"),o=new MutationObserver(function(){var t=n.slice()
n.length=0,t.forEach(function(t){t()})})
return o.observe(i,{attributes:!0}),function(t){n.length||i.setAttribute("yes","no"),n.push(t)}}return r?(window.addEventListener("message",function(t){var e=t.source
if((e===window||null===e)&&"process-tick"===t.data&&(t.stopPropagation(),n.length>0)){var r=n.shift()
r()}},!0),function(t){n.push(t),window.postMessage("process-tick","*")}):function(t){setTimeout(t,0)}}(),n.title="browser",n.browser=!0,n.env={},n.argv=[],n.on=r,n.addListener=r,n.once=r,n.off=r,n.removeListener=r,n.removeAllListeners=r,n.emit=r,n.binding=function(){throw Error("process.binding is not supported")},n.cwd=function(){return"/"},n.chdir=function(){throw Error("process.chdir is not supported")}},{}],20:[function(t,e,r){(function(t){!function(n){function i(t){throw RangeError(B[t])}function o(t,e){for(var r=t.length;r--;)t[r]=e(t[r])
return t}function s(t,e){return o(t.split(O),e).join(".")}function a(t){for(var e,r,n=[],i=0,o=t.length;o>i;)e=t.charCodeAt(i++),e>=55296&&56319>=e&&o>i?(r=t.charCodeAt(i++),56320==(64512&r)?n.push(((1023&e)<<10)+(1023&r)+65536):(n.push(e),i--)):n.push(e)
return n}function u(t){return o(t,function(t){var e=""
return t>65535&&(t-=65536,e+=U(t>>>10&1023|55296),t=56320|1023&t),e+=U(t)}).join("")}function h(t){return 10>t-48?t-22:26>t-65?t-65:26>t-97?t-97:E}function f(t,e){return t+22+75*(26>t)-((0!=e)<<5)}function c(t,e,r){var n=0
for(t=r?M(t/S):t>>1,t+=M(t/e);t>k*x>>1;n+=E)t=M(t/k)
return M(n+(k+1)*t/(t+L))}function l(t){var e,r,n,o,s,a,f,l,p,d,g=[],v=t.length,m=0,y=j,b=R
for(r=t.lastIndexOf(T),0>r&&(r=0),n=0;r>n;++n)t.charCodeAt(n)>=128&&i("not-basic"),g.push(t.charCodeAt(n))
for(o=r>0?r+1:0;v>o;){for(s=m,a=1,f=E;o>=v&&i("invalid-input"),l=h(t.charCodeAt(o++)),(l>=E||l>M((_-m)/a))&&i("overflow"),m+=l*a,p=b>=f?A:f>=b+x?x:f-b,!(p>l);f+=E)d=E-p,a>M(_/d)&&i("overflow"),a*=d
e=g.length+1,b=c(m-s,e,0==s),M(m/e)>_-y&&i("overflow"),y+=M(m/e),m%=e,g.splice(m++,0,y)}return u(g)}function p(t){var e,r,n,o,s,u,h,l,p,d,g,v,m,y,b,w=[]
for(t=a(t),v=t.length,e=j,r=0,s=R,u=0;v>u;++u)g=t[u],128>g&&w.push(U(g))
for(n=o=w.length,o&&w.push(T);v>n;){for(h=_,u=0;v>u;++u)g=t[u],g>=e&&h>g&&(h=g)
for(m=n+1,h-e>M((_-r)/m)&&i("overflow"),r+=(h-e)*m,e=h,u=0;v>u;++u)if(g=t[u],e>g&&++r>_&&i("overflow"),g==e){for(l=r,p=E;d=s>=p?A:p>=s+x?x:p-s,!(d>l);p+=E)b=l-d,y=E-d,w.push(U(f(d+b%y,0))),l=M(b/y)
w.push(U(f(l,0))),s=c(r,m,n==o),r=0,++n}++r,++e}return w.join("")}function d(t){return s(t,function(t){return I.test(t)?l(t.slice(4).toLowerCase()):t})}function g(t){return s(t,function(t){return C.test(t)?"xn--"+p(t):t})}var v="object"==typeof r&&r,m="object"==typeof e&&e&&e.exports==v&&e,y="object"==typeof t&&t;(y.global===y||y.window===y)&&(n=y)
var b,w,_=2147483647,E=36,A=1,x=26,L=38,S=700,R=72,j=128,T="-",I=/^xn--/,C=/[^ -~]/,O=/\x2E|\u3002|\uFF0E|\uFF61/g,B={overflow:"Overflow: input needs wider integers to process","not-basic":"Illegal input >= 0x80 (not a basic code point)","invalid-input":"Invalid input"},k=E-A,M=Math.floor,U=String.fromCharCode
if(b={version:"1.2.4",ucs2:{decode:a,encode:u},decode:l,encode:p,toASCII:g,toUnicode:d},"function"==typeof define&&"object"==typeof define.amd&&define.amd)define("punycode",function(){return b})
else if(v&&!v.nodeType)if(m)m.exports=b
else for(w in b)b.hasOwnProperty(w)&&(v[w]=b[w])
else n.punycode=b}(this)}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],21:[function(t,e){"use strict"
function r(t,e){return Object.prototype.hasOwnProperty.call(t,e)}e.exports=function(t,e,i,o){e=e||"&",i=i||"="
var s={}
if("string"!=typeof t||0===t.length)return s
var a=/\+/g
t=t.split(e)
var u=1e3
o&&"number"==typeof o.maxKeys&&(u=o.maxKeys)
var h=t.length
u>0&&h>u&&(h=u)
for(var f=0;h>f;++f){var c,l,p,d,g=t[f].replace(a,"%20"),v=g.indexOf(i)
v>=0?(c=g.substr(0,v),l=g.substr(v+1)):(c=g,l=""),p=decodeURIComponent(c),d=decodeURIComponent(l),r(s,p)?n(s[p])?s[p].push(d):s[p]=[s[p],d]:s[p]=d}return s}
var n=Array.isArray||function(t){return"[object Array]"===Object.prototype.toString.call(t)}},{}],22:[function(t,e){"use strict"
function r(t,e){if(t.map)return t.map(e)
for(var r=[],n=0;n<t.length;n++)r.push(e(t[n],n))
return r}var n=function(t){switch(typeof t){case"string":return t
case"boolean":return t?"true":"false"
case"number":return isFinite(t)?t:""
default:return""}}
e.exports=function(t,e,s,a){return e=e||"&",s=s||"=",null===t&&(t=void 0),"object"==typeof t?r(o(t),function(o){var a=encodeURIComponent(n(o))+s
return i(t[o])?r(t[o],function(t){return a+encodeURIComponent(n(t))}).join(e):a+encodeURIComponent(n(t[o]))}).join(e):a?encodeURIComponent(n(a))+s+encodeURIComponent(n(t)):""}
var i=Array.isArray||function(t){return"[object Array]"===Object.prototype.toString.call(t)},o=Object.keys||function(t){var e=[]
for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.push(r)
return e}},{}],23:[function(t,e,r){"use strict"
r.decode=r.parse=t("./decode"),r.encode=r.stringify=t("./encode")},{"./decode":21,"./encode":22}],24:[function(t,e){e.exports=t("./lib/_stream_duplex.js")},{"./lib/_stream_duplex.js":25}],25:[function(t,e){(function(r){function n(t){return this instanceof n?(u.call(this,t),h.call(this,t),t&&t.readable===!1&&(this.readable=!1),t&&t.writable===!1&&(this.writable=!1),this.allowHalfOpen=!0,t&&t.allowHalfOpen===!1&&(this.allowHalfOpen=!1),void this.once("end",i)):new n(t)}function i(){this.allowHalfOpen||this._writableState.ended||r.nextTick(this.end.bind(this))}function o(t,e){for(var r=0,n=t.length;n>r;r++)e(t[r],r)}e.exports=n
var s=Object.keys||function(t){var e=[]
for(var r in t)e.push(r)
return e},a=t("core-util-is")
a.inherits=t("inherits")
var u=t("./_stream_readable"),h=t("./_stream_writable")
a.inherits(n,u),o(s(h.prototype),function(t){n.prototype[t]||(n.prototype[t]=h.prototype[t])})}).call(this,t("_process"))},{"./_stream_readable":27,"./_stream_writable":29,_process:19,"core-util-is":30,inherits:17}],26:[function(t,e){function r(t){return this instanceof r?void n.call(this,t):new r(t)}e.exports=r
var n=t("./_stream_transform"),i=t("core-util-is")
i.inherits=t("inherits"),i.inherits(r,n),r.prototype._transform=function(t,e,r){r(null,t)}},{"./_stream_transform":28,"core-util-is":30,inherits:17}],27:[function(t,e){(function(r){function n(e){e=e||{}
var r=e.highWaterMark
this.highWaterMark=r||0===r?r:16384,this.highWaterMark=~~this.highWaterMark,this.buffer=[],this.length=0,this.pipes=null,this.pipesCount=0,this.flowing=!1,this.ended=!1,this.endEmitted=!1,this.reading=!1,this.calledRead=!1,this.sync=!0,this.needReadable=!1,this.emittedReadable=!1,this.readableListening=!1,this.objectMode=!!e.objectMode,this.defaultEncoding=e.defaultEncoding||"utf8",this.ranOut=!1,this.awaitDrain=0,this.readingMore=!1,this.decoder=null,this.encoding=null,e.encoding&&(j||(j=t("string_decoder/").StringDecoder),this.decoder=new j(e.encoding),this.encoding=e.encoding)}function i(t){return this instanceof i?(this._readableState=new n(t,this),this.readable=!0,void S.call(this)):new i(t)}function o(t,e,r,n,i){var o=h(e,r)
if(o)t.emit("error",o)
else if(null===r||void 0===r)e.reading=!1,e.ended||f(t,e)
else if(e.objectMode||r&&r.length>0)if(e.ended&&!i){var a=Error("stream.push() after EOF")
t.emit("error",a)}else if(e.endEmitted&&i){var a=Error("stream.unshift() after end event")
t.emit("error",a)}else!e.decoder||i||n||(r=e.decoder.write(r)),e.length+=e.objectMode?1:r.length,i?e.buffer.unshift(r):(e.reading=!1,e.buffer.push(r)),e.needReadable&&c(t),p(t,e)
else i||(e.reading=!1)
return s(e)}function s(t){return!t.ended&&(t.needReadable||t.length<t.highWaterMark||0===t.length)}function a(t){if(t>=T)t=T
else{t--
for(var e=1;32>e;e<<=1)t|=t>>e
t++}return t}function u(t,e){return 0===e.length&&e.ended?0:e.objectMode?0===t?0:1:null===t||isNaN(t)?e.flowing&&e.buffer.length?e.buffer[0].length:e.length:0>=t?0:(t>e.highWaterMark&&(e.highWaterMark=a(t)),t>e.length?e.ended?e.length:(e.needReadable=!0,0):t)}function h(t,e){var r=null
return x.isBuffer(e)||"string"==typeof e||null===e||void 0===e||t.objectMode||(r=new TypeError("Invalid non-string/buffer chunk")),r}function f(t,e){if(e.decoder&&!e.ended){var r=e.decoder.end()
r&&r.length&&(e.buffer.push(r),e.length+=e.objectMode?1:r.length)}e.ended=!0,e.length>0?c(t):w(t)}function c(t){var e=t._readableState
e.needReadable=!1,e.emittedReadable||(e.emittedReadable=!0,e.sync?r.nextTick(function(){l(t)}):l(t))}function l(t){t.emit("readable")}function p(t,e){e.readingMore||(e.readingMore=!0,r.nextTick(function(){d(t,e)}))}function d(t,e){for(var r=e.length;!e.reading&&!e.flowing&&!e.ended&&e.length<e.highWaterMark&&(t.read(0),r!==e.length);)r=e.length
e.readingMore=!1}function g(t){return function(){var e=t._readableState
e.awaitDrain--,0===e.awaitDrain&&v(t)}}function v(t){function e(t){var e=t.write(r)
!1===e&&n.awaitDrain++}var r,n=t._readableState
for(n.awaitDrain=0;n.pipesCount&&null!==(r=t.read());)if(1===n.pipesCount?e(n.pipes,0,null):_(n.pipes,e),t.emit("data",r),n.awaitDrain>0)return
return 0===n.pipesCount?(n.flowing=!1,void(L.listenerCount(t,"data")>0&&y(t))):void(n.ranOut=!0)}function m(){this._readableState.ranOut&&(this._readableState.ranOut=!1,v(this))}function y(t,e){var n=t._readableState
if(n.flowing)throw Error("Cannot switch to old mode now.")
var i=e||!1,o=!1
t.readable=!0,t.pipe=S.prototype.pipe,t.on=t.addListener=S.prototype.on,t.on("readable",function(){o=!0
for(var e;!i&&null!==(e=t.read());)t.emit("data",e)
null===e&&(o=!1,t._readableState.needReadable=!0)}),t.pause=function(){i=!0,this.emit("pause")},t.resume=function(){i=!1,o?r.nextTick(function(){t.emit("readable")}):this.read(0),this.emit("resume")},t.emit("readable")}function b(t,e){var r,n=e.buffer,i=e.length,o=!!e.decoder,s=!!e.objectMode
if(0===n.length)return null
if(0===i)r=null
else if(s)r=n.shift()
else if(!t||t>=i)r=o?n.join(""):x.concat(n,i),n.length=0
else if(t<n[0].length){var a=n[0]
r=a.slice(0,t),n[0]=a.slice(t)}else if(t===n[0].length)r=n.shift()
else{r=o?"":new x(t)
for(var u=0,h=0,f=n.length;f>h&&t>u;h++){var a=n[0],c=Math.min(t-u,a.length)
o?r+=a.slice(0,c):a.copy(r,u,0,c),c<a.length?n[0]=a.slice(c):n.shift(),u+=c}}return r}function w(t){var e=t._readableState
if(e.length>0)throw Error("endReadable called on non-empty stream")
!e.endEmitted&&e.calledRead&&(e.ended=!0,r.nextTick(function(){e.endEmitted||0!==e.length||(e.endEmitted=!0,t.readable=!1,t.emit("end"))}))}function _(t,e){for(var r=0,n=t.length;n>r;r++)e(t[r],r)}function E(t,e){for(var r=0,n=t.length;n>r;r++)if(t[r]===e)return r
return-1}e.exports=i
var A=t("isarray"),x=t("buffer").Buffer
i.ReadableState=n
var L=t("events").EventEmitter
L.listenerCount||(L.listenerCount=function(t,e){return t.listeners(e).length})
var S=t("stream"),R=t("core-util-is")
R.inherits=t("inherits")
var j
R.inherits(i,S),i.prototype.push=function(t,e){var r=this._readableState
return"string"!=typeof t||r.objectMode||(e=e||r.defaultEncoding,e!==r.encoding&&(t=new x(t,e),e="")),o(this,r,t,e,!1)},i.prototype.unshift=function(t){var e=this._readableState
return o(this,e,t,"",!0)},i.prototype.setEncoding=function(e){j||(j=t("string_decoder/").StringDecoder),this._readableState.decoder=new j(e),this._readableState.encoding=e}
var T=8388608
i.prototype.read=function(t){var e=this._readableState
e.calledRead=!0
var r,n=t
if(("number"!=typeof t||t>0)&&(e.emittedReadable=!1),0===t&&e.needReadable&&(e.length>=e.highWaterMark||e.ended))return c(this),null
if(t=u(t,e),0===t&&e.ended)return r=null,e.length>0&&e.decoder&&(r=b(t,e),e.length-=r.length),0===e.length&&w(this),r
var i=e.needReadable
return e.length-t<=e.highWaterMark&&(i=!0),(e.ended||e.reading)&&(i=!1),i&&(e.reading=!0,e.sync=!0,0===e.length&&(e.needReadable=!0),this._read(e.highWaterMark),e.sync=!1),i&&!e.reading&&(t=u(n,e)),r=t>0?b(t,e):null,null===r&&(e.needReadable=!0,t=0),e.length-=t,0!==e.length||e.ended||(e.needReadable=!0),e.ended&&!e.endEmitted&&0===e.length&&w(this),r},i.prototype._read=function(){this.emit("error",Error("not implemented"))},i.prototype.pipe=function(t,e){function n(t){t===f&&o()}function i(){t.end()}function o(){t.removeListener("close",a),t.removeListener("finish",u),t.removeListener("drain",d),t.removeListener("error",s),t.removeListener("unpipe",n),f.removeListener("end",i),f.removeListener("end",o),(!t._writableState||t._writableState.needDrain)&&d()}function s(e){h(),t.removeListener("error",s),0===L.listenerCount(t,"error")&&t.emit("error",e)}function a(){t.removeListener("finish",u),h()}function u(){t.removeListener("close",a),h()}function h(){f.unpipe(t)}var f=this,c=this._readableState
switch(c.pipesCount){case 0:c.pipes=t
break
case 1:c.pipes=[c.pipes,t]
break
default:c.pipes.push(t)}c.pipesCount+=1
var l=(!e||e.end!==!1)&&t!==r.stdout&&t!==r.stderr,p=l?i:o
c.endEmitted?r.nextTick(p):f.once("end",p),t.on("unpipe",n)
var d=g(f)
return t.on("drain",d),t._events&&t._events.error?A(t._events.error)?t._events.error.unshift(s):t._events.error=[s,t._events.error]:t.on("error",s),t.once("close",a),t.once("finish",u),t.emit("pipe",f),c.flowing||(this.on("readable",m),c.flowing=!0,r.nextTick(function(){v(f)})),t},i.prototype.unpipe=function(t){var e=this._readableState
if(0===e.pipesCount)return this
if(1===e.pipesCount)return t&&t!==e.pipes?this:(t||(t=e.pipes),e.pipes=null,e.pipesCount=0,this.removeListener("readable",m),e.flowing=!1,t&&t.emit("unpipe",this),this)
if(!t){var r=e.pipes,n=e.pipesCount
e.pipes=null,e.pipesCount=0,this.removeListener("readable",m),e.flowing=!1
for(var i=0;n>i;i++)r[i].emit("unpipe",this)
return this}var i=E(e.pipes,t)
return-1===i?this:(e.pipes.splice(i,1),e.pipesCount-=1,1===e.pipesCount&&(e.pipes=e.pipes[0]),t.emit("unpipe",this),this)},i.prototype.on=function(t,e){var r=S.prototype.on.call(this,t,e)
if("data"!==t||this._readableState.flowing||y(this),"readable"===t&&this.readable){var n=this._readableState
n.readableListening||(n.readableListening=!0,n.emittedReadable=!1,n.needReadable=!0,n.reading?n.length&&c(this,n):this.read(0))}return r},i.prototype.addListener=i.prototype.on,i.prototype.resume=function(){y(this),this.read(0),this.emit("resume")},i.prototype.pause=function(){y(this,!0),this.emit("pause")},i.prototype.wrap=function(t){var e=this._readableState,r=!1,n=this
t.on("end",function(){if(e.decoder&&!e.ended){var t=e.decoder.end()
t&&t.length&&n.push(t)}n.push(null)}),t.on("data",function(i){if(e.decoder&&(i=e.decoder.write(i)),(!e.objectMode||null!==i&&void 0!==i)&&(e.objectMode||i&&i.length)){var o=n.push(i)
o||(r=!0,t.pause())}})
for(var i in t)"function"==typeof t[i]&&void 0===this[i]&&(this[i]=function(e){return function(){return t[e].apply(t,arguments)}}(i))
var o=["error","close","destroy","pause","resume"]
return _(o,function(e){t.on(e,n.emit.bind(n,e))}),n._read=function(){r&&(r=!1,t.resume())},n},i._fromList=b}).call(this,t("_process"))},{_process:19,buffer:7,"core-util-is":30,events:11,inherits:17,isarray:18,stream:35,"string_decoder/":36}],28:[function(t,e){function r(t,e){this.afterTransform=function(t,r){return n(e,t,r)},this.needTransform=!1,this.transforming=!1,this.writecb=null,this.writechunk=null}function n(t,e,r){var n=t._transformState
n.transforming=!1
var i=n.writecb
if(!i)return t.emit("error",Error("no writecb in Transform class"))
n.writechunk=null,n.writecb=null,null!==r&&void 0!==r&&t.push(r),i&&i(e)
var o=t._readableState
o.reading=!1,(o.needReadable||o.length<o.highWaterMark)&&t._read(o.highWaterMark)}function i(t){if(!(this instanceof i))return new i(t)
s.call(this,t)
var e=(this._transformState=new r(t,this),this)
this._readableState.needReadable=!0,this._readableState.sync=!1,this.once("finish",function(){"function"==typeof this._flush?this._flush(function(t){o(e,t)}):o(e)})}function o(t,e){if(e)return t.emit("error",e)
var r=t._writableState,n=(t._readableState,t._transformState)
if(r.length)throw Error("calling transform done when ws.length != 0")
if(n.transforming)throw Error("calling transform done when still transforming")
return t.push(null)}e.exports=i
var s=t("./_stream_duplex"),a=t("core-util-is")
a.inherits=t("inherits"),a.inherits(i,s),i.prototype.push=function(t,e){return this._transformState.needTransform=!1,s.prototype.push.call(this,t,e)},i.prototype._transform=function(){throw Error("not implemented")},i.prototype._write=function(t,e,r){var n=this._transformState
if(n.writecb=r,n.writechunk=t,n.writeencoding=e,!n.transforming){var i=this._readableState;(n.needTransform||i.needReadable||i.length<i.highWaterMark)&&this._read(i.highWaterMark)}},i.prototype._read=function(){var t=this._transformState
null!==t.writechunk&&t.writecb&&!t.transforming?(t.transforming=!0,this._transform(t.writechunk,t.writeencoding,t.afterTransform)):t.needTransform=!0}},{"./_stream_duplex":25,"core-util-is":30,inherits:17}],29:[function(t,e){(function(r){function n(t,e,r){this.chunk=t,this.encoding=e,this.callback=r}function i(t,e){t=t||{}
var r=t.highWaterMark
this.highWaterMark=r||0===r?r:16384,this.objectMode=!!t.objectMode,this.highWaterMark=~~this.highWaterMark,this.needDrain=!1,this.ending=!1,this.ended=!1,this.finished=!1
var n=t.decodeStrings===!1
this.decodeStrings=!n,this.defaultEncoding=t.defaultEncoding||"utf8",this.length=0,this.writing=!1,this.sync=!0,this.bufferProcessing=!1,this.onwrite=function(t){p(e,t)},this.writecb=null,this.writelen=0,this.buffer=[],this.errorEmitted=!1}function o(e){var r=t("./_stream_duplex")
return this instanceof o||this instanceof r?(this._writableState=new i(e,this),this.writable=!0,void E.call(this)):new o(e)}function s(t,e,n){var i=Error("write after end")
t.emit("error",i),r.nextTick(function(){n(i)})}function a(t,e,n,i){var o=!0
if(!w.isBuffer(n)&&"string"!=typeof n&&null!==n&&void 0!==n&&!e.objectMode){var s=new TypeError("Invalid non-string/buffer chunk")
t.emit("error",s),r.nextTick(function(){i(s)}),o=!1}return o}function u(t,e,r){return t.objectMode||t.decodeStrings===!1||"string"!=typeof e||(e=new w(e,r)),e}function h(t,e,r,i,o){r=u(e,r,i),w.isBuffer(r)&&(i="buffer")
var s=e.objectMode?1:r.length
e.length+=s
var a=e.length<e.highWaterMark
return a||(e.needDrain=!0),e.writing?e.buffer.push(new n(r,i,o)):f(t,e,s,r,i,o),a}function f(t,e,r,n,i,o){e.writelen=r,e.writecb=o,e.writing=!0,e.sync=!0,t._write(n,i,e.onwrite),e.sync=!1}function c(t,e,n,i,o){n?r.nextTick(function(){o(i)}):o(i),t._writableState.errorEmitted=!0,t.emit("error",i)}function l(t){t.writing=!1,t.writecb=null,t.length-=t.writelen,t.writelen=0}function p(t,e){var n=t._writableState,i=n.sync,o=n.writecb
if(l(n),e)c(t,n,i,e,o)
else{var s=m(t,n)
s||n.bufferProcessing||!n.buffer.length||v(t,n),i?r.nextTick(function(){d(t,n,s,o)}):d(t,n,s,o)}}function d(t,e,r,n){r||g(t,e),n(),r&&y(t,e)}function g(t,e){0===e.length&&e.needDrain&&(e.needDrain=!1,t.emit("drain"))}function v(t,e){e.bufferProcessing=!0
for(var r=0;r<e.buffer.length;r++){var n=e.buffer[r],i=n.chunk,o=n.encoding,s=n.callback,a=e.objectMode?1:i.length
if(f(t,e,a,i,o,s),e.writing){r++
break}}e.bufferProcessing=!1,r<e.buffer.length?e.buffer=e.buffer.slice(r):e.buffer.length=0}function m(t,e){return e.ending&&0===e.length&&!e.finished&&!e.writing}function y(t,e){var r=m(t,e)
return r&&(e.finished=!0,t.emit("finish")),r}function b(t,e,n){e.ending=!0,y(t,e),n&&(e.finished?r.nextTick(n):t.once("finish",n)),e.ended=!0}e.exports=o
var w=t("buffer").Buffer
o.WritableState=i
var _=t("core-util-is")
_.inherits=t("inherits")
var E=t("stream")
_.inherits(o,E),o.prototype.pipe=function(){this.emit("error",Error("Cannot pipe. Not readable."))},o.prototype.write=function(t,e,r){var n=this._writableState,i=!1
return"function"==typeof e&&(r=e,e=null),w.isBuffer(t)?e="buffer":e||(e=n.defaultEncoding),"function"!=typeof r&&(r=function(){}),n.ended?s(this,n,r):a(this,n,t,r)&&(i=h(this,n,t,e,r)),i},o.prototype._write=function(t,e,r){r(Error("not implemented"))},o.prototype.end=function(t,e,r){var n=this._writableState
"function"==typeof t?(r=t,t=null,e=null):"function"==typeof e&&(r=e,e=null),void 0!==t&&null!==t&&this.write(t,e),n.ending||n.finished||b(this,n,r)}}).call(this,t("_process"))},{"./_stream_duplex":25,_process:19,buffer:7,"core-util-is":30,inherits:17,stream:35}],30:[function(t,e,r){(function(t){function e(t){return Array.isArray(t)}function n(t){return"boolean"==typeof t}function i(t){return null===t}function o(t){return null==t}function s(t){return"number"==typeof t}function a(t){return"string"==typeof t}function u(t){return"symbol"==typeof t}function h(t){return void 0===t}function f(t){return c(t)&&"[object RegExp]"===m(t)}function c(t){return"object"==typeof t&&null!==t}function l(t){return c(t)&&"[object Date]"===m(t)}function p(t){return c(t)&&("[object Error]"===m(t)||t instanceof Error)}function d(t){return"function"==typeof t}function g(t){return null===t||"boolean"==typeof t||"number"==typeof t||"string"==typeof t||"symbol"==typeof t||void 0===t}function v(e){return t.isBuffer(e)}function m(t){return Object.prototype.toString.call(t)}r.isArray=e,r.isBoolean=n,r.isNull=i,r.isNullOrUndefined=o,r.isNumber=s,r.isString=a,r.isSymbol=u,r.isUndefined=h,r.isRegExp=f,r.isObject=c,r.isDate=l,r.isError=p,r.isFunction=d,r.isPrimitive=g,r.isBuffer=v}).call(this,t("buffer").Buffer)},{buffer:7}],31:[function(t,e){e.exports=t("./lib/_stream_passthrough.js")},{"./lib/_stream_passthrough.js":26}],32:[function(t,e,r){r=e.exports=t("./lib/_stream_readable.js"),r.Readable=r,r.Writable=t("./lib/_stream_writable.js"),r.Duplex=t("./lib/_stream_duplex.js"),r.Transform=t("./lib/_stream_transform.js"),r.PassThrough=t("./lib/_stream_passthrough.js")},{"./lib/_stream_duplex.js":25,"./lib/_stream_passthrough.js":26,"./lib/_stream_readable.js":27,"./lib/_stream_transform.js":28,"./lib/_stream_writable.js":29}],33:[function(t,e){e.exports=t("./lib/_stream_transform.js")},{"./lib/_stream_transform.js":28}],34:[function(t,e){e.exports=t("./lib/_stream_writable.js")},{"./lib/_stream_writable.js":29}],35:[function(t,e){function r(){n.call(this)}e.exports=r
var n=t("events").EventEmitter,i=t("inherits")
i(r,n),r.Readable=t("readable-stream/readable.js"),r.Writable=t("readable-stream/writable.js"),r.Duplex=t("readable-stream/duplex.js"),r.Transform=t("readable-stream/transform.js"),r.PassThrough=t("readable-stream/passthrough.js"),r.Stream=r,r.prototype.pipe=function(t,e){function r(e){t.writable&&!1===t.write(e)&&h.pause&&h.pause()}function i(){h.readable&&h.resume&&h.resume()}function o(){f||(f=!0,t.end())}function s(){f||(f=!0,"function"==typeof t.destroy&&t.destroy())}function a(t){if(u(),0===n.listenerCount(this,"error"))throw t}function u(){h.removeListener("data",r),t.removeListener("drain",i),h.removeListener("end",o),h.removeListener("close",s),h.removeListener("error",a),t.removeListener("error",a),h.removeListener("end",u),h.removeListener("close",u),t.removeListener("close",u)}var h=this
h.on("data",r),t.on("drain",i),t._isStdio||e&&e.end===!1||(h.on("end",o),h.on("close",s))
var f=!1
return h.on("error",a),t.on("error",a),h.on("end",u),h.on("close",u),t.on("close",u),t.emit("pipe",h),t}},{events:11,inherits:17,"readable-stream/duplex.js":24,"readable-stream/passthrough.js":31,"readable-stream/readable.js":32,"readable-stream/transform.js":33,"readable-stream/writable.js":34}],36:[function(t,e,r){function n(t){if(t&&!u(t))throw Error("Unknown encoding: "+t)}function i(t){return t.toString(this.encoding)}function o(t){this.charReceived=t.length%2,this.charLength=this.charReceived?2:0}function s(t){this.charReceived=t.length%3,this.charLength=this.charReceived?3:0}var a=t("buffer").Buffer,u=a.isEncoding||function(t){switch(t&&t.toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":case"raw":return!0
default:return!1}},h=r.StringDecoder=function(t){switch(this.encoding=(t||"utf8").toLowerCase().replace(/[-_]/,""),n(t),this.encoding){case"utf8":this.surrogateSize=3
break
case"ucs2":case"utf16le":this.surrogateSize=2,this.detectIncompleteChar=o
break
case"base64":this.surrogateSize=3,this.detectIncompleteChar=s
break
default:return void(this.write=i)}this.charBuffer=new a(6),this.charReceived=0,this.charLength=0}
h.prototype.write=function(t){for(var e="";this.charLength;){var r=t.length>=this.charLength-this.charReceived?this.charLength-this.charReceived:t.length
if(t.copy(this.charBuffer,this.charReceived,0,r),this.charReceived+=r,this.charReceived<this.charLength)return""
t=t.slice(r,t.length),e=this.charBuffer.slice(0,this.charLength).toString(this.encoding)
var n=e.charCodeAt(e.length-1)
if(!(n>=55296&&56319>=n)){if(this.charReceived=this.charLength=0,0===t.length)return e
break}this.charLength+=this.surrogateSize,e=""}this.detectIncompleteChar(t)
var i=t.length
this.charLength&&(t.copy(this.charBuffer,0,t.length-this.charReceived,i),i-=this.charReceived),e+=t.toString(this.encoding,0,i)
var i=e.length-1,n=e.charCodeAt(i)
if(n>=55296&&56319>=n){var o=this.surrogateSize
return this.charLength+=o,this.charReceived+=o,this.charBuffer.copy(this.charBuffer,o,0,o),t.copy(this.charBuffer,0,0,o),e.substring(0,i)}return e},h.prototype.detectIncompleteChar=function(t){for(var e=t.length>=3?3:t.length;e>0;e--){var r=t[t.length-e]
if(1==e&&r>>5==6){this.charLength=2
break}if(2>=e&&r>>4==14){this.charLength=3
break}if(3>=e&&r>>3==30){this.charLength=4
break}}this.charReceived=e},h.prototype.end=function(t){var e=""
if(t&&t.length&&(e=this.write(t)),this.charReceived){var r=this.charReceived,n=this.charBuffer,i=this.encoding
e+=n.slice(0,r).toString(i)}return e}},{buffer:7}],37:[function(t,e,r){function n(){this.protocol=null,this.slashes=null,this.auth=null,this.host=null,this.port=null,this.hostname=null,this.hash=null,this.search=null,this.query=null,this.pathname=null,this.path=null,this.href=null}function i(t,e,r){if(t&&h(t)&&t instanceof n)return t
var i=new n
return i.parse(t,e,r),i}function o(t){return u(t)&&(t=i(t)),t instanceof n?t.format():n.prototype.format.call(t)}function s(t,e){return i(t,!1,!0).resolve(e)}function a(t,e){return t?i(t,!1,!0).resolveObject(e):e}function u(t){return"string"==typeof t}function h(t){return"object"==typeof t&&null!==t}function f(t){return null===t}function c(t){return null==t}var l=t("punycode")
r.parse=i,r.resolve=s,r.resolveObject=a,r.format=o,r.Url=n
var p=/^([a-z0-9.+-]+:)/i,d=/:[0-9]*$/,g=["<",">",'"',"`"," ","\r","\n"," "],v=["{","}","|","\\","^","`"].concat(g),m=["'"].concat(v),y=["%","/","?",";","#"].concat(m),b=["/","?","#"],w=255,_=/^[a-z0-9A-Z_-]{0,63}$/,E=/^([a-z0-9A-Z_-]{0,63})(.*)$/,A={javascript:!0,"javascript:":!0},x={javascript:!0,"javascript:":!0},L={http:!0,https:!0,ftp:!0,gopher:!0,file:!0,"http:":!0,"https:":!0,"ftp:":!0,"gopher:":!0,"file:":!0},S=t("querystring")
n.prototype.parse=function(t,e,r){if(!u(t))throw new TypeError("Parameter 'url' must be a string, not "+typeof t)
var n=t
n=n.trim()
var i=p.exec(n)
if(i){i=i[0]
var o=i.toLowerCase()
this.protocol=o,n=n.substr(i.length)}if(r||i||n.match(/^\/\/[^@\/]+@[^@\/]+/)){var s="//"===n.substr(0,2)
!s||i&&x[i]||(n=n.substr(2),this.slashes=!0)}if(!x[i]&&(s||i&&!L[i])){for(var a=-1,h=0;h<b.length;h++){var f=n.indexOf(b[h]);-1!==f&&(-1===a||a>f)&&(a=f)}var c,d
d=-1===a?n.lastIndexOf("@"):n.lastIndexOf("@",a),-1!==d&&(c=n.slice(0,d),n=n.slice(d+1),this.auth=decodeURIComponent(c)),a=-1
for(var h=0;h<y.length;h++){var f=n.indexOf(y[h]);-1!==f&&(-1===a||a>f)&&(a=f)}-1===a&&(a=n.length),this.host=n.slice(0,a),n=n.slice(a),this.parseHost(),this.hostname=this.hostname||""
var g="["===this.hostname[0]&&"]"===this.hostname[this.hostname.length-1]
if(!g)for(var v=this.hostname.split(/\./),h=0,R=v.length;R>h;h++){var j=v[h]
if(j&&!j.match(_)){for(var T="",I=0,C=j.length;C>I;I++)T+=j.charCodeAt(I)>127?"x":j[I]
if(!T.match(_)){var O=v.slice(0,h),B=v.slice(h+1),k=j.match(E)
k&&(O.push(k[1]),B.unshift(k[2])),B.length&&(n="/"+B.join(".")+n),this.hostname=O.join(".")
break}}}if(this.hostname=this.hostname.length>w?"":this.hostname.toLowerCase(),!g){for(var M=this.hostname.split("."),U=[],h=0;h<M.length;++h){var P=M[h]
U.push(P.match(/[^A-Za-z0-9_-]/)?"xn--"+l.encode(P):P)}this.hostname=U.join(".")}var D=this.port?":"+this.port:"",q=this.hostname||""
this.host=q+D,this.href+=this.host,g&&(this.hostname=this.hostname.substr(1,this.hostname.length-2),"/"!==n[0]&&(n="/"+n))}if(!A[o])for(var h=0,R=m.length;R>h;h++){var N=m[h],Y=encodeURIComponent(N)
Y===N&&(Y=escape(N)),n=n.split(N).join(Y)}var z=n.indexOf("#");-1!==z&&(this.hash=n.substr(z),n=n.slice(0,z))
var F=n.indexOf("?")
if(-1!==F?(this.search=n.substr(F),this.query=n.substr(F+1),e&&(this.query=S.parse(this.query)),n=n.slice(0,F)):e&&(this.search="",this.query={}),n&&(this.pathname=n),L[o]&&this.hostname&&!this.pathname&&(this.pathname="/"),this.pathname||this.search){var D=this.pathname||"",P=this.search||""
this.path=D+P}return this.href=this.format(),this},n.prototype.format=function(){var t=this.auth||""
t&&(t=encodeURIComponent(t),t=t.replace(/%3A/i,":"),t+="@")
var e=this.protocol||"",r=this.pathname||"",n=this.hash||"",i=!1,o=""
this.host?i=t+this.host:this.hostname&&(i=t+(-1===this.hostname.indexOf(":")?this.hostname:"["+this.hostname+"]"),this.port&&(i+=":"+this.port)),this.query&&h(this.query)&&Object.keys(this.query).length&&(o=S.stringify(this.query))
var s=this.search||o&&"?"+o||""
return e&&":"!==e.substr(-1)&&(e+=":"),this.slashes||(!e||L[e])&&i!==!1?(i="//"+(i||""),r&&"/"!==r.charAt(0)&&(r="/"+r)):i||(i=""),n&&"#"!==n.charAt(0)&&(n="#"+n),s&&"?"!==s.charAt(0)&&(s="?"+s),r=r.replace(/[?#]/g,function(t){return encodeURIComponent(t)}),s=s.replace("#","%23"),e+i+r+s+n},n.prototype.resolve=function(t){return this.resolveObject(i(t,!1,!0)).format()},n.prototype.resolveObject=function(t){if(u(t)){var e=new n
e.parse(t,!1,!0),t=e}var r=new n
if(Object.keys(this).forEach(function(t){r[t]=this[t]},this),r.hash=t.hash,""===t.href)return r.href=r.format(),r
if(t.slashes&&!t.protocol)return Object.keys(t).forEach(function(e){"protocol"!==e&&(r[e]=t[e])}),L[r.protocol]&&r.hostname&&!r.pathname&&(r.path=r.pathname="/"),r.href=r.format(),r
if(t.protocol&&t.protocol!==r.protocol){if(!L[t.protocol])return Object.keys(t).forEach(function(e){r[e]=t[e]}),r.href=r.format(),r
if(r.protocol=t.protocol,t.host||x[t.protocol])r.pathname=t.pathname
else{for(var i=(t.pathname||"").split("/");i.length&&!(t.host=i.shift()););t.host||(t.host=""),t.hostname||(t.hostname=""),""!==i[0]&&i.unshift(""),i.length<2&&i.unshift(""),r.pathname=i.join("/")}if(r.search=t.search,r.query=t.query,r.host=t.host||"",r.auth=t.auth,r.hostname=t.hostname||t.host,r.port=t.port,r.pathname||r.search){var o=r.pathname||"",s=r.search||""
r.path=o+s}return r.slashes=r.slashes||t.slashes,r.href=r.format(),r}var a=r.pathname&&"/"===r.pathname.charAt(0),h=t.host||t.pathname&&"/"===t.pathname.charAt(0),l=h||a||r.host&&t.pathname,p=l,d=r.pathname&&r.pathname.split("/")||[],i=t.pathname&&t.pathname.split("/")||[],g=r.protocol&&!L[r.protocol]
if(g&&(r.hostname="",r.port=null,r.host&&(""===d[0]?d[0]=r.host:d.unshift(r.host)),r.host="",t.protocol&&(t.hostname=null,t.port=null,t.host&&(""===i[0]?i[0]=t.host:i.unshift(t.host)),t.host=null),l=l&&(""===i[0]||""===d[0])),h)r.host=t.host||""===t.host?t.host:r.host,r.hostname=t.hostname||""===t.hostname?t.hostname:r.hostname,r.search=t.search,r.query=t.query,d=i
else if(i.length)d||(d=[]),d.pop(),d=d.concat(i),r.search=t.search,r.query=t.query
else if(!c(t.search)){if(g){r.hostname=r.host=d.shift()
var v=r.host&&r.host.indexOf("@")>0?r.host.split("@"):!1
v&&(r.auth=v.shift(),r.host=r.hostname=v.shift())}return r.search=t.search,r.query=t.query,f(r.pathname)&&f(r.search)||(r.path=(r.pathname?r.pathname:"")+(r.search?r.search:"")),r.href=r.format(),r}if(!d.length)return r.pathname=null,r.path=r.search?"/"+r.search:null,r.href=r.format(),r
for(var m=d.slice(-1)[0],y=(r.host||t.host)&&("."===m||".."===m)||""===m,b=0,w=d.length;w>=0;w--)m=d[w],"."==m?d.splice(w,1):".."===m?(d.splice(w,1),b++):b&&(d.splice(w,1),b--)
if(!l&&!p)for(;b--;b)d.unshift("..")
!l||""===d[0]||d[0]&&"/"===d[0].charAt(0)||d.unshift(""),y&&"/"!==d.join("/").substr(-1)&&d.push("")
var _=""===d[0]||d[0]&&"/"===d[0].charAt(0)
if(g){r.hostname=r.host=_?"":d.length?d.shift():""
var v=r.host&&r.host.indexOf("@")>0?r.host.split("@"):!1
v&&(r.auth=v.shift(),r.host=r.hostname=v.shift())}return l=l||r.host&&d.length,l&&!_&&d.unshift(""),d.length?r.pathname=d.join("/"):(r.pathname=null,r.path=null),f(r.pathname)&&f(r.search)||(r.path=(r.pathname?r.pathname:"")+(r.search?r.search:"")),r.auth=t.auth||r.auth,r.slashes=r.slashes||t.slashes,r.href=r.format(),r},n.prototype.parseHost=function(){var t=this.host,e=d.exec(t)
e&&(e=e[0],":"!==e&&(this.port=e.substr(1)),t=t.substr(0,t.length-e.length)),t&&(this.hostname=t)}},{punycode:20,querystring:23}],38:[function(t,e){e.exports=function(t){return t&&"object"==typeof t&&"function"==typeof t.copy&&"function"==typeof t.fill&&"function"==typeof t.readUInt8}},{}],39:[function(t,e,r){(function(e,n){function i(t,e){var n={seen:[],stylize:s}
return arguments.length>=3&&(n.depth=arguments[2]),arguments.length>=4&&(n.colors=arguments[3]),g(e)?n.showHidden=e:e&&r._extend(n,e),_(n.showHidden)&&(n.showHidden=!1),_(n.depth)&&(n.depth=2),_(n.colors)&&(n.colors=!1),_(n.customInspect)&&(n.customInspect=!0),n.colors&&(n.stylize=o),u(n,t,n.depth)}function o(t,e){var r=i.styles[e]
return r?"["+i.colors[r][0]+"m"+t+"["+i.colors[r][1]+"m":t}function s(t){return t}function a(t){var e={}
return t.forEach(function(t){e[t]=!0}),e}function u(t,e,n){if(t.customInspect&&e&&S(e.inspect)&&e.inspect!==r.inspect&&(!e.constructor||e.constructor.prototype!==e)){var i=e.inspect(n,t)
return b(i)||(i=u(t,i,n)),i}var o=h(t,e)
if(o)return o
var s=Object.keys(e),g=a(s)
if(t.showHidden&&(s=Object.getOwnPropertyNames(e)),L(e)&&(s.indexOf("message")>=0||s.indexOf("description")>=0))return f(e)
if(0===s.length){if(S(e)){var v=e.name?": "+e.name:""
return t.stylize("[Function"+v+"]","special")}if(E(e))return t.stylize(RegExp.prototype.toString.call(e),"regexp")
if(x(e))return t.stylize(Date.prototype.toString.call(e),"date")
if(L(e))return f(e)}var m="",y=!1,w=["{","}"]
if(d(e)&&(y=!0,w=["[","]"]),S(e)){var _=e.name?": "+e.name:""
m=" [Function"+_+"]"}if(E(e)&&(m=" "+RegExp.prototype.toString.call(e)),x(e)&&(m=" "+Date.prototype.toUTCString.call(e)),L(e)&&(m=" "+f(e)),0===s.length&&(!y||0==e.length))return w[0]+m+w[1]
if(0>n)return E(e)?t.stylize(RegExp.prototype.toString.call(e),"regexp"):t.stylize("[Object]","special")
t.seen.push(e)
var A
return A=y?c(t,e,n,g,s):s.map(function(r){return l(t,e,n,g,r,y)}),t.seen.pop(),p(A,m,w)}function h(t,e){if(_(e))return t.stylize("undefined","undefined")
if(b(e)){var r="'"+JSON.stringify(e).replace(/^"|"$/g,"").replace(/'/g,"\\'").replace(/\\"/g,'"')+"'"
return t.stylize(r,"string")}return y(e)?t.stylize(""+e,"number"):g(e)?t.stylize(""+e,"boolean"):v(e)?t.stylize("null","null"):void 0}function f(t){return"["+Error.prototype.toString.call(t)+"]"}function c(t,e,r,n,i){for(var o=[],s=0,a=e.length;a>s;++s)o.push(C(e,s+"")?l(t,e,r,n,s+"",!0):"")
return i.forEach(function(i){i.match(/^\d+$/)||o.push(l(t,e,r,n,i,!0))}),o}function l(t,e,r,n,i,o){var s,a,h
if(h=Object.getOwnPropertyDescriptor(e,i)||{value:e[i]},h.get?a=h.set?t.stylize("[Getter/Setter]","special"):t.stylize("[Getter]","special"):h.set&&(a=t.stylize("[Setter]","special")),C(n,i)||(s="["+i+"]"),a||(t.seen.indexOf(h.value)<0?(a=v(r)?u(t,h.value,null):u(t,h.value,r-1),a.indexOf("\n")>-1&&(a=o?a.split("\n").map(function(t){return"  "+t}).join("\n").substr(2):"\n"+a.split("\n").map(function(t){return"   "+t}).join("\n"))):a=t.stylize("[Circular]","special")),_(s)){if(o&&i.match(/^\d+$/))return a
s=JSON.stringify(""+i),s.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?(s=s.substr(1,s.length-2),s=t.stylize(s,"name")):(s=s.replace(/'/g,"\\'").replace(/\\"/g,'"').replace(/(^"|"$)/g,"'"),s=t.stylize(s,"string"))}return s+": "+a}function p(t,e,r){var n=0,i=t.reduce(function(t,e){return n++,e.indexOf("\n")>=0&&n++,t+e.replace(/\u001b\[\d\d?m/g,"").length+1},0)
return i>60?r[0]+(""===e?"":e+"\n ")+" "+t.join(",\n  ")+" "+r[1]:r[0]+e+" "+t.join(", ")+" "+r[1]}function d(t){return Array.isArray(t)}function g(t){return"boolean"==typeof t}function v(t){return null===t}function m(t){return null==t}function y(t){return"number"==typeof t}function b(t){return"string"==typeof t}function w(t){return"symbol"==typeof t}function _(t){return void 0===t}function E(t){return A(t)&&"[object RegExp]"===j(t)}function A(t){return"object"==typeof t&&null!==t}function x(t){return A(t)&&"[object Date]"===j(t)}function L(t){return A(t)&&("[object Error]"===j(t)||t instanceof Error)}function S(t){return"function"==typeof t}function R(t){return null===t||"boolean"==typeof t||"number"==typeof t||"string"==typeof t||"symbol"==typeof t||void 0===t}function j(t){return Object.prototype.toString.call(t)}function T(t){return 10>t?"0"+t.toString(10):t.toString(10)}function I(){var t=new Date,e=[T(t.getHours()),T(t.getMinutes()),T(t.getSeconds())].join(":")
return[t.getDate(),M[t.getMonth()],e].join(" ")}function C(t,e){return Object.prototype.hasOwnProperty.call(t,e)}var O=/%[sdj%]/g
r.format=function(t){if(!b(t)){for(var e=[],r=0;r<arguments.length;r++)e.push(i(arguments[r]))
return e.join(" ")}for(var r=1,n=arguments,o=n.length,s=(t+"").replace(O,function(t){if("%%"===t)return"%"
if(r>=o)return t
switch(t){case"%s":return n[r++]+""
case"%d":return+n[r++]
case"%j":try{return JSON.stringify(n[r++])}catch(e){return"[Circular]"}default:return t}}),a=n[r];o>r;a=n[++r])s+=v(a)||!A(a)?" "+a:" "+i(a)
return s},r.deprecate=function(t,i){function o(){if(!s){if(e.throwDeprecation)throw Error(i)
e.traceDeprecation?console.trace(i):console.error(i),s=!0}return t.apply(this,arguments)}if(_(n.process))return function(){return r.deprecate(t,i).apply(this,arguments)}
if(e.noDeprecation===!0)return t
var s=!1
return o}
var B,k={}
r.debuglog=function(t){if(_(B)&&(B=e.env.NODE_DEBUG||""),t=t.toUpperCase(),!k[t])if(RegExp("\\b"+t+"\\b","i").test(B)){var n=e.pid
k[t]=function(){var e=r.format.apply(r,arguments)
console.error("%s %d: %s",t,n,e)}}else k[t]=function(){}
return k[t]},r.inspect=i,i.colors={bold:[1,22],italic:[3,23],underline:[4,24],inverse:[7,27],white:[37,39],grey:[90,39],black:[30,39],blue:[34,39],cyan:[36,39],green:[32,39],magenta:[35,39],red:[31,39],yellow:[33,39]},i.styles={special:"cyan",number:"yellow","boolean":"yellow",undefined:"grey","null":"bold",string:"green",date:"magenta",regexp:"red"},r.isArray=d,r.isBoolean=g,r.isNull=v,r.isNullOrUndefined=m,r.isNumber=y,r.isString=b,r.isSymbol=w,r.isUndefined=_,r.isRegExp=E,r.isObject=A,r.isDate=x,r.isError=L,r.isFunction=S,r.isPrimitive=R,r.isBuffer=t("./support/isBuffer")
var M=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
r.log=function(){console.log("%s - %s",I(),r.format.apply(r,arguments))},r.inherits=t("inherits"),r._extend=function(t,e){if(!e||!A(e))return t
for(var r=Object.keys(e),n=r.length;n--;)t[r[n]]=e[r[n]]
return t}}).call(this,t("_process"),"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"./support/isBuffer":38,_process:19,inherits:17}]},{},[1])
