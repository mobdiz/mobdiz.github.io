import{u as i,_ as a}from"./index-78df8c36.js";import{i as m,F as p,d as s,e as r,f as u,R as n,x as c,t as d}from"./effector-vue-composition-1433fac7.js";import"./effector-storage-9a361a45.js";import"./patronum-da9a1d66.js";import"./lodash-es-0b3e6462.js";import"./vueuse-core-e7841df1.js";import"./async-validator-dee29e8b.js";import"./ctrl-f8748455.js";import"./effector-77000f8f.js";const l=m({name:"DotInSvg",props:{x:{type:Number,required:!0},y:{type:Number,required:!0},name:{type:String,default:void 0}},setup(){const{isMobile:e}=i(),t=2,o=p(()=>e.value?32:16);return{radius:t,fontSize:o}}}),f=["cx","cy","r"],y=["font-size","x","y"];function g(e,t,o,v,S,$){return s(),r("g",null,[u("circle",{cx:e.x,cy:e.y,r:e.radius,class:n(["dot-in-svg-circle",{"dot-in-svg-circle--without-name":!e.name}])},null,10,f),e.name?(s(),r("text",{key:0,class:n([`dot-in-svg-text--${e.x}-${e.y}`,"dot-in-svg-text"]),"font-size":e.fontSize,x:e.x,y:e.y},c(e.name),11,y)):d("",!0)])}const q=a(l,[["render",g]]);export{q as default};
