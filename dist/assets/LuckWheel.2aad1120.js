import{_ as r,d as _,l as a,b as c,o as i,c as l,g as t}from"./main.77e24675.js";var d="/assets/green_bottle.34a9f341.png";const p={class:"container"},f={class:"pointer-wrap"},u={class:"btn-wrap"},v=_({__name:"LuckWheel",setup(b){const n=a(),s=a();return c(()=>{let e=0;const o=s.value;n.value.addEventListener("click",function(){e=e+2*360+Math.random()*360,o.style.transform=`rotate(${e}deg)`})}),(e,o)=>(i(),l("div",p,[t("div",f,[t("img",{ref_key:"pointerRef",ref:s,id:"pointer",src:d,alt:"pointer"},null,512)]),t("div",u,[t("button",{ref_key:"btnRef",ref:n,id:"btn",class:"btn"},"Run",512)])]))}});var k=r(v,[["__scopeId","data-v-0d2183e9"]]);export{k as default};
