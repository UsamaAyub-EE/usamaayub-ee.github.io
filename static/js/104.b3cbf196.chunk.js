(this["webpackJsonpportfolio-app"]=this["webpackJsonpportfolio-app"]||[]).push([[104],{303:function(t,o,e){"use strict";e.r(o),e.d(o,"BounceOutMode",(function(){return n}));var i=e(45);class n{constructor(t){this.container=t,this.modes=["bounce","split"]}async update(t,o,n,s){if(!this.modes.includes(s))return;const c=this.container;let a=!1;for(const[,e]of c.plugins)if(void 0!==e.particleBounce&&(a=await e.particleBounce(t,n,o)),a)break;if(a)return;const r=t.getPosition(),u=t.offset,p=t.getRadius(),d=Object(i.m)(r,p),f=c.canvas.size,{bounceHorizontal:l,bounceVertical:b}=await e.e(109).then(e.bind(null,307));l({particle:t,outMode:s,direction:o,bounds:d,canvasSize:f,offset:u,size:p}),b({particle:t,outMode:s,direction:o,bounds:d,canvasSize:f,offset:u,size:p})}}}}]);
//# sourceMappingURL=104.b3cbf196.chunk.js.map