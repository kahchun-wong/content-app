import u from"./BDeHE8ec.js";import h from"./rERLOPL-.js";import{_ as y}from"./BYzbx4Lk.js";import{d as g,y as k,b as e,c as f,e as s,S as m,E as t,t as d,f as r,H as p,w as a,g as n}from"./BMgB9iZQ.js";const b={class:"ss-footer"},N={class:"ss-footer-wrapper"},w={class:"ss-footer-start"},C={class:"ss-footer-copyright"},v={key:0},B={key:1},$={class:"ss-footer-center"},S={class:"ss-footer-end"},x={class:"ss-footer-links"},I=g({__name:"SimpleFooter",setup(F){const o=k();return(i,V)=>{const c=u,_=h,l=y;return e(),f("footer",b,[s("div",N,[s("div",w,[m(i.$slots,"start",{},()=>[s("div",C,[t(o).footer.companyName?(e(),f("span",v," Copyright © "+d(new Date().getFullYear())+" "+d(t(o).footer.companyName),1)):r("",!0),t(o).footer.registrationNo?(e(),f("span",B," Company Registration No: "+d(t(o).footer.registrationNo),1)):r("",!0)])])]),s("div",$,[m(i.$slots,"center")]),s("div",S,[m(i.$slots,"end",{},()=>[s("div",x,[t(o).footer.email?(e(),p(l,{key:0,to:`mailto:${t(o).footer.email}`},{default:a(()=>[n(_,{class:"ss-footer-button",outlined:""},{default:a(()=>[n(c,{name:"material-symbols:mail"})]),_:1})]),_:1},8,["to"])):r("",!0),t(o).footer.phone?(e(),p(l,{key:1,to:`tel:${t(o).footer.phone}`},{default:a(()=>[n(_,{class:"ss-footer-button",outlined:""},{default:a(()=>[n(c,{name:"material-symbols:call"})]),_:1})]),_:1},8,["to"])):r("",!0),t(o).footer.website?(e(),p(l,{key:2,to:t(o).footer.website},{default:a(()=>[n(_,{class:"ss-footer-button",outlined:""},{default:a(()=>[n(c,{name:"mdi:web"})]),_:1})]),_:1},8,["to"])):r("",!0)])])])])])}}});export{I as _};