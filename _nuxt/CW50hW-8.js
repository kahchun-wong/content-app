import v from"./D5MSJtmZ.js";import V from"./DXhGmvfQ.js";import B from"./Dz1Ad9ST.js";import{u as D}from"./rkpFLkDi.js";import{d as N,V as g,b as o,c as i,g as u,w as s,G as t,D as q,f as a,t as f,s as A}from"./BbR-A2cp.js";import"./qsMMcMsd.js";import"./BEsUpeCk.js";const L={class:"ss-link-card"},$={key:0,class:"ss-link-card-title"},b={key:0,class:"ss-link-card-description"},z=N({__name:"LinkCard",props:{link:{},icon:{},title:{},description:{}},async setup(h){var m,d,k;let e,r;const n=h,{data:c}=([e,r]=g(()=>D("link-card"+n.link,()=>A().where({_path:{$eq:n.link}}).findOne(),"$U3Vwwkjxmp")),e=await e,r(),e),l=n.icon??((m=c.value)==null?void 0:m.icon),p=n.title??((d=c.value)==null?void 0:d.title),_=n.description??((k=c.value)==null?void 0:k.description);return(y,j)=>{const w=v,x=V,C=B;return o(),i("div",L,[u(C,{class:"ss-link-card-link",to:y.link},{default:s(()=>[u(x,null,{header:s(()=>[t(l)?(o(),q(w,{key:0,class:"ss-link-card-icon",name:t(l)},null,8,["name"])):a("",!0)]),title:s(()=>[t(p)?(o(),i("p",$,f(t(p)),1)):a("",!0)]),content:s(()=>[t(_)?(o(),i("p",b,f(t(_)),1)):a("",!0)]),_:1})]),_:1},8,["to"])])}}});export{z as default};
