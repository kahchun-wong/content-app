import g from"./4ugFV_Cu.js";import d from"./BkZqFZar.js";import w from"./BM2ZmNDV.js";import{d as x,m as y,ah as C,V as k,J as v,b as m,D as _,w as l,g as b,f as B,e as N,t as V,s as D}from"./NDZgLq3h.js";import{u as P}from"./C8idJT66.js";const F=x({__name:"PageHeaderNav",async setup($){var r;let e,s;const i={icon:"prime:home",url:y().app.baseURL},u=((r=C().page.value)==null?void 0:r._path).split("/").filter(Boolean),p=[];let n="";for(const c of u){n+=`/${c}`;const{data:o}=([e,s]=k(()=>P("page-header"+n,()=>D().where({_path:{$eq:n}}).find(),"$w9hnegwY13")),e=await e,s(),e);if(!v.isEmpty(o.value)){const[t]=o.value??[];p.push({label:t.title,url:t._path})}}return(c,o)=>{const t=g,h=d,f=w;return m(),_(f,{class:"ss-page-nav",home:i,model:p},{item:l(({item:a})=>[b(h,{class:"ss-page-nav-link p-menuitem-link",to:a.url},{default:l(()=>[a.icon?(m(),_(t,{key:0,name:a.icon},null,8,["name"])):B("",!0),N("span",null,V(a.label),1)]),_:2},1032,["to"])]),_:1})}}});export{F as _};