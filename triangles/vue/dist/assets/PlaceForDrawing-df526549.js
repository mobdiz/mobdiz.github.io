import{d as i,u as y,v as x,n as t,x as p,a as $,y as f,z as v,A as g,B as k,_ as D,o as n,k as s,m as I,F as a,l as r,j as B,g as c}from"./index-c602872e.js";const w=i({name:"PlaceForDrawing",components:{DotInSvg:y(()=>x(()=>import("./DotInSvg-416f3f8a.js"),["assets/DotInSvg-416f3f8a.js","assets/index-c602872e.js","assets/index-cd69050c.css"]))},setup(){const m=t(p),u=t($),d=t(f),_=t(v);return g(()=>{k()}),{additionalDots:m,radius:3,mainDots:u,lines:d,dots:_}}});const F={viewBox:"0 0 1000 1000",class:"place"},P=["x1","x2","y1","y2"];function h(o,m,u,d,_,A){const l=B("DotInSvg");return n(),s("svg",F,[I("g",null,[(n(!0),s(a,null,r(o.lines,e=>(n(),s("line",{key:`line-${e.from.x}-${e.from.y}-${e.to.x}-${e.to.y}`,x1:e.from.x,x2:e.to.x,y1:e.from.y,y2:e.to.y,stroke:"black","stroke-width":"3"},null,8,P))),128)),(n(!0),s(a,null,r(o.additionalDots,e=>(n(),c(l,{key:`dot-${e.x}-${e.y}`,name:e.name,x:e.x,y:e.y},null,8,["name","x","y"]))),128)),(n(!0),s(a,null,r(o.mainDots,e=>(n(),c(l,{key:`dot-${e.name}`,name:e.name,x:e.x,y:e.y},null,8,["name","x","y"]))),128)),(n(!0),s(a,null,r(o.dots,e=>(n(),c(l,{key:`dot-${e.x}-${e.y}`,x:e.x,y:e.y},null,8,["x","y"]))),128))])])}const E=D(w,[["render",h],["__scopeId","data-v-d0d8e2d9"]]);export{E as default};
