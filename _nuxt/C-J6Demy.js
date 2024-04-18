import{s as f}from"./BOfj6Wgt.js";import{s as y,a as b}from"./D8H7w7sG.js";import{s as O}from"./Cmxhuh5T.js";import{s as d}from"./BPzPCxZq.js";import{ao as P,aD as $,a3 as k,aE as B,b as i,H as u,w as C,aG as v,e as g,ap as s,S as c,c as m,an as j,f as D,aS as T,T as A}from"./qGVcagb8.js";import{s as E}from"./B6VeJWeh.js";import"./D1LrRCP5.js";var N={root:function(t){var o=t.props;return"p-message p-component p-message-"+o.severity},wrapper:"p-message-wrapper",icon:"p-message-icon",text:"p-message-text",closeButton:"p-message-close p-link",closeIcon:"p-message-close-icon"},L=P.extend({name:"message",classes:N}),M={name:"BaseMessage",extends:E,props:{severity:{type:String,default:"info"},closable:{type:Boolean,default:!0},sticky:{type:Boolean,default:!0},life:{type:Number,default:3e3},icon:{type:String,default:void 0},closeIcon:{type:String,default:void 0},closeButtonProps:{type:null,default:null}},style:L,provide:function(){return{$parentInstance:this}}},K={name:"Message",extends:M,inheritAttrs:!1,emits:["close","life-end"],timeout:null,data:function(){return{visible:!0}},watch:{sticky:function(t){t||this.closeAfterDelay()}},mounted:function(){this.sticky||this.closeAfterDelay()},methods:{close:function(t){this.visible=!1,this.$emit("close",t)},closeAfterDelay:function(){var t=this;setTimeout(function(){t.visible=!1,t.$emit("life-end")},this.life)}},computed:{iconComponent:function(){return{info:y,success:f,warn:b,error:d}[this.severity]},closeAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.close:void 0}},directives:{ripple:$},components:{TimesIcon:O,InfoCircleIcon:y,CheckIcon:f,ExclamationTriangleIcon:b,TimesCircleIcon:d}};function l(e){"@babel/helpers - typeof";return l=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},l(e)}function h(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(p){return Object.getOwnPropertyDescriptor(e,p).enumerable})),o.push.apply(o,r)}return o}function n(e){for(var t=1;t<arguments.length;t++){var o=arguments[t]!=null?arguments[t]:{};t%2?h(Object(o),!0).forEach(function(r){V(e,r,o[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):h(Object(o)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(o,r))})}return e}function V(e,t,o){return t=G(t),t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function G(e){var t=H(e,"string");return l(t)=="symbol"?t:String(t)}function H(e,t){if(l(e)!="object"||!e)return e;var o=e[Symbol.toPrimitive];if(o!==void 0){var r=o.call(e,t||"default");if(l(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var R=["aria-label"];function q(e,t,o,r,p,a){var w=k("TimesIcon"),I=B("ripple");return i(),u(A,s({name:"p-message",appear:""},e.ptmi("transition")),{default:C(function(){return[v(g("div",s({class:e.cx("root"),role:"alert","aria-live":"assertive","aria-atomic":"true"},e.ptm("root")),[e.$slots.container?c(e.$slots,"container",{key:0,onClose:a.close,closeCallback:a.close}):(i(),m("div",s({key:1,class:e.cx("wrapper")},e.ptm("wrapper")),[c(e.$slots,"messageicon",{class:"p-message-icon"},function(){return[(i(),u(j(e.icon?"span":a.iconComponent),s({class:[e.cx("icon"),e.icon]},e.ptm("icon")),null,16,["class"]))]}),g("div",s({class:["p-message-text",e.cx("text")]},e.ptm("text")),[c(e.$slots,"default")],16),e.closable?v((i(),m("button",s({key:0,class:e.cx("closeButton"),"aria-label":a.closeAriaLabel,type:"button",onClick:t[0]||(t[0]=function(S){return a.close(S)})},n(n(n({},e.closeButtonProps),e.ptm("button")),e.ptm("closeButton"))),[c(e.$slots,"closeicon",{},function(){return[e.closeIcon?(i(),m("i",s({key:0,class:[e.cx("closeIcon"),e.closeIcon]},n(n({},e.ptm("buttonIcon")),e.ptm("closeIcon"))),null,16)):(i(),u(w,s({key:1,class:[e.cx("closeIcon"),e.closeIcon]},n(n({},e.ptm("buttonIcon")),e.ptm("closeIcon"))),null,16,["class"]))]})],16,R)),[[I]]):D("",!0)],16))],16),[[T,p.visible]])]}),_:3},16)}K.render=q;export{K as default};
