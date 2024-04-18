import Q from"./Ct0i5cH9.js";import{_ as W,j as Z}from"./CsxPlvRo.js";import{g as q,c as tt}from"./Cpj98o6Y.js";import{d as et,J as nt,r as P,o as rt,b as ot,c as it,e as ct,g as R,E as D}from"./qGVcagb8.js";var F={exports:{}};/*!
 * clipboard.js v2.0.11
 * https://clipboardjs.com/
 *
 * Licensed MIT © Zeno Rocha
 */(function(O,S){(function(E,h){O.exports=h()})(tt,function(){return function(){var w={686:function(s,r,t){t.d(r,{default:function(){return K}});var u=t(279),f=t.n(u),l=t(370),m=t.n(l),y=t(817),g=t.n(y);function d(c){try{return document.execCommand(c)}catch{return!1}}var v=function(n){var e=g()(n);return d("cut"),e},p=v;function _(c){var n=document.documentElement.getAttribute("dir")==="rtl",e=document.createElement("textarea");e.style.fontSize="12pt",e.style.border="0",e.style.padding="0",e.style.margin="0",e.style.position="absolute",e.style[n?"right":"left"]="-9999px";var o=window.pageYOffset||document.documentElement.scrollTop;return e.style.top="".concat(o,"px"),e.setAttribute("readonly",""),e.value=c,e}var j=function(n,e){var o=_(n);e.container.appendChild(o);var i=g()(o);return d("copy"),o.remove(),i},I=function(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{container:document.body},o="";return typeof n=="string"?o=j(n,e):n instanceof HTMLInputElement&&!["text","search","url","tel","password"].includes(n==null?void 0:n.type)?o=j(n.value,e):(o=g()(n),d("copy")),o},k=I;function T(c){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?T=function(e){return typeof e}:T=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},T(c)}var B=function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=n.action,o=e===void 0?"copy":e,i=n.container,a=n.target,b=n.text;if(o!=="copy"&&o!=="cut")throw new Error('Invalid "action" value, use either "copy" or "cut"');if(a!==void 0)if(a&&T(a)==="object"&&a.nodeType===1){if(o==="copy"&&a.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if(o==="cut"&&(a.hasAttribute("readonly")||a.hasAttribute("disabled")))throw new Error(`Invalid "target" attribute. You can't cut text from elements with "readonly" or "disabled" attributes`)}else throw new Error('Invalid "target" value, use a valid Element');if(b)return k(b,{container:i});if(a)return o==="cut"?p(a):k(a,{container:i})},H=B;function x(c){"@babel/helpers - typeof";return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?x=function(e){return typeof e}:x=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},x(c)}function $(c,n){if(!(c instanceof n))throw new TypeError("Cannot call a class as a function")}function M(c,n){for(var e=0;e<n.length;e++){var o=n[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(c,o.key,o)}}function Y(c,n,e){return n&&M(c.prototype,n),e&&M(c,e),c}function z(c,n){if(typeof n!="function"&&n!==null)throw new TypeError("Super expression must either be null or a function");c.prototype=Object.create(n&&n.prototype,{constructor:{value:c,writable:!0,configurable:!0}}),n&&L(c,n)}function L(c,n){return L=Object.setPrototypeOf||function(o,i){return o.__proto__=i,o},L(c,n)}function J(c){var n=G();return function(){var o=A(c),i;if(n){var a=A(this).constructor;i=Reflect.construct(o,arguments,a)}else i=o.apply(this,arguments);return U(this,i)}}function U(c,n){return n&&(x(n)==="object"||typeof n=="function")?n:V(c)}function V(c){if(c===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return c}function G(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}function A(c){return A=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},A(c)}function N(c,n){var e="data-clipboard-".concat(c);if(n.hasAttribute(e))return n.getAttribute(e)}var X=function(c){z(e,c);var n=J(e);function e(o,i){var a;return $(this,e),a=n.call(this),a.resolveOptions(i),a.listenClick(o),a}return Y(e,[{key:"resolveOptions",value:function(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.action=typeof i.action=="function"?i.action:this.defaultAction,this.target=typeof i.target=="function"?i.target:this.defaultTarget,this.text=typeof i.text=="function"?i.text:this.defaultText,this.container=x(i.container)==="object"?i.container:document.body}},{key:"listenClick",value:function(i){var a=this;this.listener=m()(i,"click",function(b){return a.onClick(b)})}},{key:"onClick",value:function(i){var a=i.delegateTarget||i.currentTarget,b=this.action(a)||"copy",C=H({action:b,container:this.container,target:this.target(a),text:this.text(a)});this.emit(C?"success":"error",{action:b,text:C,trigger:a,clearSelection:function(){a&&a.focus(),window.getSelection().removeAllRanges()}})}},{key:"defaultAction",value:function(i){return N("action",i)}},{key:"defaultTarget",value:function(i){var a=N("target",i);if(a)return document.querySelector(a)}},{key:"defaultText",value:function(i){return N("text",i)}},{key:"destroy",value:function(){this.listener.destroy()}}],[{key:"copy",value:function(i){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{container:document.body};return k(i,a)}},{key:"cut",value:function(i){return p(i)}},{key:"isSupported",value:function(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:["copy","cut"],a=typeof i=="string"?[i]:i,b=!!document.queryCommandSupported;return a.forEach(function(C){b=b&&!!document.queryCommandSupported(C)}),b}}]),e}(f()),K=X},828:function(s){var r=9;if(typeof Element<"u"&&!Element.prototype.matches){var t=Element.prototype;t.matches=t.matchesSelector||t.mozMatchesSelector||t.msMatchesSelector||t.oMatchesSelector||t.webkitMatchesSelector}function u(f,l){for(;f&&f.nodeType!==r;){if(typeof f.matches=="function"&&f.matches(l))return f;f=f.parentNode}}s.exports=u},438:function(s,r,t){var u=t(828);function f(y,g,d,v,p){var _=m.apply(this,arguments);return y.addEventListener(d,_,p),{destroy:function(){y.removeEventListener(d,_,p)}}}function l(y,g,d,v,p){return typeof y.addEventListener=="function"?f.apply(null,arguments):typeof d=="function"?f.bind(null,document).apply(null,arguments):(typeof y=="string"&&(y=document.querySelectorAll(y)),Array.prototype.map.call(y,function(_){return f(_,g,d,v,p)}))}function m(y,g,d,v){return function(p){p.delegateTarget=u(p.target,g),p.delegateTarget&&v.call(y,p)}}s.exports=l},879:function(s,r){r.node=function(t){return t!==void 0&&t instanceof HTMLElement&&t.nodeType===1},r.nodeList=function(t){var u=Object.prototype.toString.call(t);return t!==void 0&&(u==="[object NodeList]"||u==="[object HTMLCollection]")&&"length"in t&&(t.length===0||r.node(t[0]))},r.string=function(t){return typeof t=="string"||t instanceof String},r.fn=function(t){var u=Object.prototype.toString.call(t);return u==="[object Function]"}},370:function(s,r,t){var u=t(879),f=t(438);function l(d,v,p){if(!d&&!v&&!p)throw new Error("Missing required arguments");if(!u.string(v))throw new TypeError("Second argument must be a String");if(!u.fn(p))throw new TypeError("Third argument must be a Function");if(u.node(d))return m(d,v,p);if(u.nodeList(d))return y(d,v,p);if(u.string(d))return g(d,v,p);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}function m(d,v,p){return d.addEventListener(v,p),{destroy:function(){d.removeEventListener(v,p)}}}function y(d,v,p){return Array.prototype.forEach.call(d,function(_){_.addEventListener(v,p)}),{destroy:function(){Array.prototype.forEach.call(d,function(_){_.removeEventListener(v,p)})}}}function g(d,v,p){return f(document.body,d,v,p)}s.exports=l},817:function(s){function r(t){var u;if(t.nodeName==="SELECT")t.focus(),u=t.value;else if(t.nodeName==="INPUT"||t.nodeName==="TEXTAREA"){var f=t.hasAttribute("readonly");f||t.setAttribute("readonly",""),t.select(),t.setSelectionRange(0,t.value.length),f||t.removeAttribute("readonly"),u=t.value}else{t.hasAttribute("contenteditable")&&t.focus();var l=window.getSelection(),m=document.createRange();m.selectNodeContents(t),l.removeAllRanges(),l.addRange(m),u=l.toString()}return u}s.exports=r},279:function(s){function r(){}r.prototype={on:function(t,u,f){var l=this.e||(this.e={});return(l[t]||(l[t]=[])).push({fn:u,ctx:f}),this},once:function(t,u,f){var l=this;function m(){l.off(t,m),u.apply(f,arguments)}return m._=u,this.on(t,m,f)},emit:function(t){var u=[].slice.call(arguments,1),f=((this.e||(this.e={}))[t]||[]).slice(),l=0,m=f.length;for(l;l<m;l++)f[l].fn.apply(f[l].ctx,u);return this},off:function(t,u){var f=this.e||(this.e={}),l=f[t],m=[];if(l&&u)for(var y=0,g=l.length;y<g;y++)l[y].fn!==u&&l[y].fn._!==u&&m.push(l[y]);return m.length?f[t]=m:delete f[t],this}},s.exports=r,s.exports.TinyEmitter=r}},E={};function h(s){if(E[s])return E[s].exports;var r=E[s]={exports:{}};return w[s](r,r.exports,h),r.exports}return function(){h.n=function(s){var r=s&&s.__esModule?function(){return s.default}:function(){return s};return h.d(r,{a:r}),r}}(),function(){h.d=function(s,r){for(var t in r)h.o(r,t)&&!h.o(s,t)&&Object.defineProperty(s,t,{enumerable:!0,get:r[t]})}}(),function(){h.o=function(s,r){return Object.prototype.hasOwnProperty.call(s,r)}}(),h(686)}().default})})(F);var ut=F.exports;const at=q(ut),st={class:"ss-code-block-wrapper"},vt=et({__name:"CodeBlock",props:{lang:{},code:{}},setup(O){const S=O,w=nt(()=>{const s="```";let r=`${s}${S.lang}
`;return typeof S.code=="object"?["yaml","yml"].includes(S.lang)?r+=Z.dump(S.code):r+=JSON.stringify(S.code,null,2):r+=S.code,r+=`
${s}
`,r}),E=P(null),h=P("init");return rt(()=>{E.value&&new at(E.value,{target(r){return r.nextElementSibling}}).on("success",r=>{r.clearSelection(),h.value="copied",window.setTimeout(()=>{h.value="init"},2e3)})}),(s,r)=>{const t=Q,u=W;return ot(),it("div",st,[ct("button",{ref_key:"copy",ref:E,class:"ss-copy-button"},[R(t,{name:D(h)==="copied"?"lucide:copy-check":"lucide:copy",class:"w-5 h-5"},null,8,["name"])],512),R(u,{class:"ss-code-block",value:D(w)},null,8,["value"])])}}});export{vt as _};
