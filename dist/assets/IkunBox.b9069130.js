import{_ as v,d as u,U as f,l as w,b as x,o as g,c as _,g as m}from"./main.6d828537.js";const h={space:7,canvasElement:y("charVideoCanvas"),width:800,height:450};function o(t=h){var e,i,s,a;this.space=t.space||h.space,this.width=Math.ceil(((e=h.width)!=null?e:window.innerWidth)/this.space),this.height=Math.ceil(((i=h.height)!=null?i:window.innerHeight)/this.space),this.data={},this.cav={},this.ctx={},this.charVedio=t.canvasElement,this.charVedio.width=(s=h.width)!=null?s:window.innerWidth,this.charVedio.height=(a=h.height)!=null?a:window.innerHeight,this.textCtx=this.charVedio.getContext("2d"),this.init()}o.prototype.init=function(){this.initVideo(),this.initCanvas()};o.prototype.initVideo=function(t){this.video||(this.video=document.createElement("video")),t&&(this.video.src=t)};o.prototype.initCanvas=function(){this.cav=document.createElement("canvas"),this.ctx=this.cav.getContext("2d"),this.cav.width=this.width,this.cav.height=this.height};o.prototype.loadData=function(){return this.ctx.getImageData(0,0,this.width,this.height)};o.prototype.reDraw=function(t){for(var e=0,i=t.data.length;e<i;e+=4){var s=t.data[e],a=t.data[e+1],n=t.data[e+2];t.data[e]=t.data[e+1]=t.data[e+2]=255-(s+a+n)/3|0}this.data=t,this.ctx.putImageData(t,0,0,0,0,this.width,this.height)};o.prototype.drawText=function(){this.textCtx.clearRect(0,0,window.innerWidth,window.innerHeight);for(var t=this.data.data,e=' .,`"^:!?o+*wU$HB%@&#M'.split(""),i=0,s=t.length;i<s;i+=4){this.textCtx.fillStyle="#333";var a=(i/4|0)%this.width,n=Math.ceil(i/4/this.width),r=a*this.space,c=n*this.space,d=t[i]|0,p=Math.ceil(255/e.length),l=e[d/p|0];this.textCtx.font="12px courier",this.textCtx.fillText(l,r,c)}};o.prototype.interval=function(){var t=this;requestAnimationFrame(function(){if(!t.video.paused){t.ctx.drawImage(t.video,0,0,t.width,t.height);var e=t.loadData();t.reDraw(e),t.drawText()}t.interval()})};o.prototype.playFile=function(t){this.src=URL.createObjectURL(t),this.initVideo(this.src),this.interval(),this.video.play()};function y(t){return document.getElementById(t)}const C={style:{margin:"8px 0",color:"white"}},V=u({__name:"IkunBox",setup(t){const e=f(),i=()=>new Promise(a=>{const n=new XMLHttpRequest;n.open("GET",e.apiHost+"/resource/ikun.mp4",!0),n.responseType="blob",n.onload=()=>{n.status===200&&a(n.response)},n.send()}),s=w();return x(async()=>{const a=await i();a&&new o({canvasElement:s.value}).playFile(a)}),(a,n)=>(g(),_("div",C,[m("canvas",{ref_key:"canvasRef",ref:s,class:"charVideoCanvas"},null,512)]))}});var b=v(V,[["__scopeId","data-v-25afcbd6"]]);export{b as default};
