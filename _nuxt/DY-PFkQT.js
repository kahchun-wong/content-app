import{J as u,v as c,d as l,K as d,u as v}from"./BMgB9iZQ.js";import"./CeAGV5g_.js";import"./BVFiTvYf.js";import{r as f}from"./gbnvsqJA.js";import{u as g}from"./ClDvzfei.js";import h from"./DBWLs1P5.js";import"./Cpj98o6Y.js";import"./DG67t75v.js";import"./CNB6K4wO.js";import"./JiLUlAPe.js";import"./C5_0jeQo.js";import"./Dj_2DrfL.js";import"./BSSQEbBn.js";import"./BM-EG3-_.js";import"./CGoiD1IK.js";import"./BIESuQt2.js";import"./DWmTdZ0v.js";import"./BdKI-xF7.js";import"./CcaC7NL6.js";import"./CGkaS71m.js";import"./Cix9EhOo.js";const w=e=>{const r=g();return u(()=>{r.loadVersions(e);const t=r.getVersions(),o=r.getCurrentVersion()??{};return t==null?void 0:t.map(s=>{const p=c().path,a=s.version;let n,m=!1;return a===(o==null?void 0:o.version)?(n=p,m=!0):n=f(p,o,s),{label:a,value:n,selected:m}})})},E=l({name:"VersionDropdown",props:{product:{type:String,required:!0}},setup(e){const r=e.product,t=w(r);function o(i){v().push(i.value.value)}return()=>d(h,{class:"versioning version",panelClass:"versioning platform",dataList:t.value,onChangeSelectionDropdown:o})}});export{E as default};