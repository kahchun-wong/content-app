import{s as p}from"./BM-EG3-_.js";import{s as c,a as l}from"./D6ySPLmM.js";import{s as m}from"./BqJNXb9k.js";import{s as u}from"./BSSQEbBn.js";import{ao as f,b as i,c as d,S as o,H as v,ap as t,an as $,e as g,j as y}from"./BMgB9iZQ.js";import"./Dj_2DrfL.js";var h={root:function(s){var n=s.props,r=s.instance;return["p-inline-message p-component p-inline-message-"+n.severity,{"p-inline-message-icon-only":!r.$slots.default}]},icon:function(s){var n=s.props;return["p-inline-message-icon",n.icon]},text:"p-inline-message-text"},B=f.extend({name:"inlinemessage",classes:h}),S={name:"BaseInlineMessage",extends:u,props:{severity:{type:String,default:"error"},icon:{type:String,default:void 0}},style:B,provide:function(){return{$parentInstance:this}}},k={name:"InlineMessage",extends:S,inheritAttrs:!1,timeout:null,data:function(){return{visible:!0}},mounted:function(){var s=this;this.sticky||setTimeout(function(){s.visible=!1},this.life)},computed:{iconComponent:function(){return{info:c,success:p,warn:l,error:m}[this.severity]}}};function x(e,s,n,r,C,a){return i(),d("div",t({role:"alert","aria-live":"assertive","aria-atomic":"true",class:e.cx("root")},e.ptmi("root")),[o(e.$slots,"icon",{},function(){return[(i(),v($(e.icon?"span":a.iconComponent),t({class:e.cx("icon")},e.ptm("icon")),null,16,["class"]))]}),g("span",t({class:e.cx("text")},e.ptm("text")),[o(e.$slots,"default",{},function(){return[y(" ")]})],16)],16)}k.render=x;export{k as default};