import{d,I as v,k as f,v as h,s as r,u as g}from"./NDZgLq3h.js";import{u as i}from"./C8idJT66.js";import w from"./Ci_lii3U.js";import"./D_h85XvR.js";import"./C8cd02Pm.js";import"./CvD1aJC5.js";import"./WwzgY64_.js";import"./DwO8kWWc.js";import"./BGkWmmJl.js";import"./DA8niZG9.js";import"./D2PN2on1.js";import"./B0rpGZJR.js";import"./CoyWzh_3.js";import"./D7UyjKMf.js";import"./DSBqcZEI.js";import"./BDT3eB3L.js";const F=d({name:"VersionDropdown",props:{product:{type:String,required:!0}},setup(a){const s=f(),p=a.product,u=s.$versioning.useVersionDropdown(p);async function m(c){var o;let t=c.value.value;if(h().fullPath!=t){const{data:l}=await i("version"+t,()=>r().where({_path:{$eq:t}}).findOne(),"$g7xigjiDEy");if(!l.value){const e=t.split("/").slice(0,-1).join("/"),{data:n}=await i("version"+e,()=>r(e).find(),"$y0aRxyLqFE");(o=n.value)!=null&&o.length&&(t=n.value[0]._path)}g().push({path:t})}}return()=>v(w,{class:"versioning version",panelClass:"versioning platform",dataList:u.value,onChangeSelectionDropdown:m})}});export{F as default};