import h from"./b3_Z_ew_.js";import{aK as f,r as b,a0 as x,aB as g,b as t,c as s,g as k,w as a,H as v,aC as l,e as o,n,t as c,f as y}from"./DWXAompB.js";import"./CL6ihOyV.js";import"./01r1lAe2.js";import"./7mHJxYcL.js";import"./DD5p3chD.js";const C={class:"ss-sidebar"},w=["href","onClick"],B={class:"ml-2 text-color"},V=["href","target"],j={class:"ml-2"},N={key:0,class:"pi pi-angle-down text-primary ml-auto"},D={__name:"SideNavbar",setup(S){const i=f(),p=b([{label:"Router",items:[{label:"Styled",route:"/theming"},{label:"Unstyled",route:"/unstyled"}]},{label:"Programmatic",command:()=>{i.push("/introduction")}},{label:"External",items:[{label:"Vue.js",icon:"pi pi-star",url:"https://vuejs.org/"},{label:"Vite.js",icon:"pi pi-bookmark",url:"https://vuejs.org/"}]}]);return(E,P)=>{const u=x("router-link"),m=h,r=g("ripple");return t(),s("nav",C,[k(m,{model:p.value,class:"w-full md:w-20rem",multiple:!0},{item:a(({item:e})=>[e.route?(t(),v(u,{key:0,to:e.route,custom:""},{default:a(({href:_,navigate:d})=>[l((t(),s("a",{class:"flex align-items-center cursor-pointer text-color px-3 py-2",href:_,onClick:d},[o("span",{class:n(e.icon)},null,2),o("span",B,c(e.label),1)],8,w)),[[r]])]),_:2},1032,["to"])):l((t(),s("a",{key:1,class:"flex align-items-center cursor-pointer text-color px-3 py-2",href:e.url,target:e.target},[o("span",{class:n(e.icon)},null,2),o("span",j,c(e.label),1),e.items?(t(),s("span",N)):y("",!0)],8,V)),[[r]])]),_:1},8,["model"])])}}},q=D;export{q as default};
