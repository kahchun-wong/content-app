import{d as A,u as _,H as y,r as C,o as L,$ as B,a0 as N,a1 as T,a2 as V,a3 as w,I as S,a4 as I,a5 as U,a6 as j,a7 as F,a8 as D,m as E,Z as q,k as R,a9 as H,aa as O,ab as $}from"./NDZgLq3h.js";const z=(...t)=>t.find(l=>l!==void 0);function M(t){const l=t.componentName||"FaasNuxtLink";function u(e,s){if(!e||t.trailingSlash!=="append"&&t.trailingSlash!=="remove")return e;if(typeof e=="string")return k(e,t.trailingSlash);const n="path"in e&&e.path!==void 0?e.path:s(e).path;return{...e,name:void 0,path:k(n,t.trailingSlash)}}return A({name:l,props:{to:{type:[String,Object],default:void 0,required:!1},href:{type:[String,Object],default:void 0,required:!1},target:{type:String,default:void 0,required:!1},rel:{type:String,default:void 0,required:!1},noRel:{type:Boolean,default:void 0,required:!1},prefetch:{type:Boolean,default:void 0,required:!1},noPrefetch:{type:Boolean,default:void 0,required:!1},activeClass:{type:String,default:void 0,required:!1},exactActiveClass:{type:String,default:void 0,required:!1},prefetchedClass:{type:String,default:void 0,required:!1},replace:{type:Boolean,default:void 0,required:!1},ariaCurrentValue:{type:String,default:void 0,required:!1},external:{type:Boolean,default:void 0,required:!1},custom:{type:Boolean,default:void 0,required:!1}},setup(e,{slots:s}){const n=_(),m=E(),a=y(()=>{const r=e.to||e.href||"";return u(r,n.resolve)}),c=y(()=>typeof a.value=="string"&&q(a.value,{acceptRelative:!0})),g=y(()=>e.target&&e.target!=="_self"),b=y(()=>e.external||g.value?!0:typeof a.value=="object"?!1:a.value===""||c.value),x=C(!1),d=C(null),P=r=>{var f;d.value=e.custom?(f=r==null?void 0:r.$el)==null?void 0:f.nextElementSibling:r==null?void 0:r.$el};if(e.prefetch!==!1&&e.noPrefetch!==!0&&e.target!=="_blank"&&!W()){const f=R();let v,i=null;L(()=>{const p=Q();B(()=>{v=N(()=>{var o;(o=d==null?void 0:d.value)!=null&&o.tagName&&(i=p.observe(d.value,async()=>{i==null||i(),i=null;const h=typeof a.value=="string"?a.value:n.resolve(a.value).fullPath;await Promise.all([f.hooks.callHook("link:prefetch",h).catch(()=>{}),!b.value&&T(a.value,n).catch(()=>{})]),x.value=!0}))})})}),V(()=>{v&&w(v),i==null||i(),i=null})}return()=>{var i,p;if(!b.value){const o={ref:P,to:a.value,activeClass:e.activeClass||t.activeClass,exactActiveClass:e.exactActiveClass||t.exactActiveClass,replace:e.replace,ariaCurrentValue:e.ariaCurrentValue,custom:e.custom};return e.custom||(x.value&&(o.class=e.prefetchedClass||t.prefetchedClass),o.rel=e.rel||void 0),S(I("RouterLink"),o,s.default)}const r=typeof a.value=="object"?((i=n.resolve(a.value))==null?void 0:i.href)??null:a.value&&!e.external&&!c.value?u(U(m.app.baseURL,a.value),n.resolve):a.value||null,f=e.target||null,v=z(e.noRel?"":e.rel,t.externalRelAttribute,c.value||g.value?"noopener noreferrer":"")||null;if(e.custom){if(!s.default)return null;const o=()=>H(r,{replace:e.replace,external:e.external});return s.default({href:r,navigate:o,get route(){if(!r)return;const h=j(r);return{path:h.pathname,fullPath:h.pathname,get query(){return F(h.search)},hash:h.hash,params:{},name:void 0,matched:[],redirectedFrom:void 0,meta:{},href:r}},rel:v,target:f,isExternal:b.value,isActive:!1,isExactActive:!1})}return S("a",{ref:d,href:r,rel:v,target:f},(p=s.default)==null?void 0:p.call(s))}}})}const G=M(D);function k(t,l){const u=l==="append"?O:$;return q(t)&&!t.startsWith("http")?useVersionedLink(t):u(useVersionedLink(t),!0)}function Q(){const t=R();if(t._observer)return t._observer;let l=null;const u=new Map,e=(n,m)=>(l||(l=new IntersectionObserver(a=>{for(const c of a){const g=u.get(c.target);(c.isIntersecting||c.intersectionRatio>0)&&g&&g()}})),u.set(n,m),l.observe(n),()=>{u.delete(n),l.unobserve(n),u.size===0&&(l.disconnect(),l=null)});return t._observer={observe:e}}function W(){const t=navigator.connection;return!!(t&&(t.saveData||/2g/.test(t.effectiveType)))}export{G as default,M as defineNuxtLink};