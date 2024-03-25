import{s as h}from"./CvhMECZv.js";import{s as v}from"./CBzUINfz.js";import{an as P,ap as g,at as w,au as O,b as i,c,e as d,G as s,av as a,t as S,f as u,n as D,az as f,D as B,aE as j,aF as E,ax as I,g as K,w as C,aD as k,T as L}from"./BIdK1Jdb.js";import{s as N}from"./BDbII0as.js";import"./wbMPGU1z.js";var A={root:function(t){var o=t.props;return["p-panel p-component",{"p-panel-toggleable":o.toggleable}]},header:"p-panel-header",title:"p-panel-title",icons:"p-panel-icons",toggler:"p-panel-header-icon p-panel-toggler p-link",toggleablecontent:"p-toggleable-content",content:"p-panel-content",footer:"p-panel-footer"},z=P.extend({name:"panel",classes:A}),T={name:"BasePanel",extends:N,props:{header:String,toggleable:Boolean,collapsed:Boolean,toggleButtonProps:{type:null,default:null}},style:z,provide:function(){return{$parentInstance:this}}},V={name:"Panel",extends:T,inheritAttrs:!1,emits:["update:collapsed","toggle"],data:function(){return{id:this.$attrs.id,d_collapsed:this.collapsed}},watch:{"$attrs.id":function(t){this.id=t||g()},collapsed:function(t){this.d_collapsed=t}},mounted:function(){this.id=this.id||g()},methods:{toggle:function(t){this.d_collapsed=!this.d_collapsed,this.$emit("update:collapsed",this.d_collapsed),this.$emit("toggle",{originalEvent:t,value:this.d_collapsed})},onKeyDown:function(t){(t.code==="Enter"||t.code==="NumpadEnter"||t.code==="Space")&&(this.toggle(t),t.preventDefault())}},computed:{buttonAriaLabel:function(){return this.toggleButtonProps&&this.toggleButtonProps.ariaLabel?this.toggleButtonProps.ariaLabel:this.header}},components:{PlusIcon:v,MinusIcon:h},directives:{ripple:w}};function p(e){"@babel/helpers - typeof";return p=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},p(e)}function m(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),o.push.apply(o,r)}return o}function b(e){for(var t=1;t<arguments.length;t++){var o=arguments[t]!=null?arguments[t]:{};t%2?m(Object(o),!0).forEach(function(r){$(e,r,o[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):m(Object(o)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(o,r))})}return e}function $(e,t,o){return t=M(t),t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function M(e){var t=R(e,"string");return p(t)=="symbol"?t:String(t)}function R(e,t){if(p(e)!="object"||!e)return e;var o=e[Symbol.toPrimitive];if(o!==void 0){var r=o.call(e,t||"default");if(p(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var q=["id"],F=["id","aria-label","aria-controls","aria-expanded"],G=["id","aria-labelledby"];function U(e,t,o,r,n,l){var y=O("ripple");return i(),c("div",a({class:e.cx("root")},e.ptmi("root")),[d("div",a({class:e.cx("header")},e.ptm("header")),[s(e.$slots,"header",{id:n.id+"_header",class:D(e.cx("title"))},function(){return[e.header?(i(),c("span",a({key:0,id:n.id+"_header",class:e.cx("title")},e.ptm("title")),S(e.header),17,q)):u("",!0)]}),d("div",a({class:e.cx("icons")},e.ptm("icons")),[s(e.$slots,"icons"),e.toggleable?f((i(),c("button",a({key:0,id:n.id+"_header",type:"button",role:"button",class:e.cx("toggler"),"aria-label":l.buttonAriaLabel,"aria-controls":n.id+"_content","aria-expanded":!n.d_collapsed,onClick:t[0]||(t[0]=function(){return l.toggle&&l.toggle.apply(l,arguments)}),onKeydown:t[1]||(t[1]=function(){return l.onKeyDown&&l.onKeyDown.apply(l,arguments)})},b(b({},e.toggleButtonProps),e.ptm("toggler"))),[s(e.$slots,"togglericon",{collapsed:n.d_collapsed},function(){return[(i(),B(I(n.d_collapsed?"PlusIcon":"MinusIcon"),j(E(e.ptm("togglericon"))),null,16))]})],16,F)),[[y]]):u("",!0)],16)],16),K(L,a({name:"p-toggleable-content"},e.ptm("transition")),{default:C(function(){return[f(d("div",a({id:n.id+"_content",class:e.cx("toggleablecontent"),role:"region","aria-labelledby":n.id+"_header"},e.ptm("toggleablecontent")),[d("div",a({class:e.cx("content")},e.ptm("content")),[s(e.$slots,"default")],16),e.$slots.footer?(i(),c("div",a({key:0,class:e.cx("footer")},e.ptm("footer")),[s(e.$slots,"footer")],16)):u("",!0)],16,G),[[k,!n.d_collapsed]])]}),_:3},16)],16)}V.render=U;export{V as default};
