(this["webpackJsonpportfolio-app"]=this["webpackJsonpportfolio-app"]||[]).push([[41],{343:function(n,t,e){"use strict";e.r(t),e.d(t,"Bouncer",(function(){return c}));var i=e(45),o=e(205);const a="bounce";class c extends i.c{constructor(n){super(n)}clear(){}init(){const n=this.container,t=n.actualOptions.interactivity.modes.bounce;t&&(n.retina.bounceModeDistance=t.distance*n.retina.pixelRatio)}async interact(){const n=this.container,t=n.actualOptions.interactivity.events,o=n.interactivity.status===i.ab,c=t.onHover.enable,s=t.onHover.mode,r=t.onDiv;if(o&&c&&Object(i.P)(a,s)){const{mouseBounce:n}=await e.e(9).then(e.bind(null,229));n(this.container,(n=>this.isEnabled(n)))}else{const{divBounce:n}=await e.e(9).then(e.bind(null,229));n(this.container,r,a,(n=>this.isEnabled(n)))}}isEnabled(n){var t;const e=this.container,o=e.actualOptions,c=e.interactivity.mouse,s=(null!==(t=null===n||void 0===n?void 0:n.interactivity)&&void 0!==t?t:o.interactivity).events,r=s.onDiv;return!!c.position&&s.onHover.enable&&Object(i.P)(a,s.onHover.mode)||Object(i.O)(a,r)}loadModeOptions(n){n.bounce||(n.bounce=new o.a);for(var t=arguments.length,e=new Array(t>1?t-1:0),i=1;i<t;i++)e[i-1]=arguments[i];for(const o of e)n.bounce.load(null===o||void 0===o?void 0:o.bounce)}reset(){}}}}]);
//# sourceMappingURL=41.f84b17b6.chunk.js.map