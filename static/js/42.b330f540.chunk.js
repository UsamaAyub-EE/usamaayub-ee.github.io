(this["webpackJsonpportfolio-app"]=this["webpackJsonpportfolio-app"]||[]).push([[42],{354:function(e,i,t){"use strict";t.r(i),t.d(i,"Bubbler",(function(){return s}));var b=t(45),o=t(207);function l(e,i,t,o){if(i>=t){const l=e+(i-t)*o;return Object(b.p)(l,e,i)}if(i<t){const l=e-(t-i)*o;return Object(b.p)(l,i,e)}}const n="bubble";class s extends b.c{constructor(e){super(e),this._clickBubble=()=>{const e=this.container,i=e.actualOptions,t=e.interactivity.mouse.clickPosition,o=i.interactivity.modes.bubble;if(!o||!t)return;e.bubble||(e.bubble={});const l=e.retina.bubbleModeDistance;if(!l||l<0)return;const n=e.particles.quadTree.queryCircle(t,l,(e=>this.isEnabled(e))),{bubble:s}=e;for(const r of n){var a,u,c;if(!s.clicking)continue;r.bubble.inRange=!s.durationEnd;const i=r.getPosition(),n=Object(b.y)(i,t),d=((new Date).getTime()-(null!==(a=e.interactivity.mouse.clickTime)&&void 0!==a?a:0))/b.Y;d>o.duration&&(s.durationEnd=!0),d>2*o.duration&&(s.clicking=!1,s.durationEnd=!1);const v={bubbleObj:{optValue:e.retina.bubbleModeSize,value:r.bubble.radius},particlesObj:{optValue:Object(b.G)(r.options.size.value)*e.retina.pixelRatio,value:r.size.value},type:"size"};this._process(r,n,d,v);const p={bubbleObj:{optValue:o.opacity,value:r.bubble.opacity},particlesObj:{optValue:Object(b.G)(r.options.opacity.value),value:null!==(u=null===(c=r.opacity)||void 0===c?void 0:c.value)&&void 0!==u?u:1},type:"opacity"};this._process(r,n,d,p),!s.durationEnd&&n<=l?this._hoverBubbleColor(r,n):delete r.bubble.color}},this._hoverBubble=()=>{const e=this.container,i=e.interactivity.mouse.position,t=e.retina.bubbleModeDistance;if(!t||t<0||!i)return;const o=e.particles.quadTree.queryCircle(i,t,(e=>this.isEnabled(e)));for(const l of o){l.bubble.inRange=!0;const o=l.getPosition(),n=Object(b.y)(o,i),s=1-n/t;n<=t?s>=0&&e.interactivity.status===b.ab&&(this._hoverBubbleSize(l,s),this._hoverBubbleOpacity(l,s),this._hoverBubbleColor(l,s)):this.reset(l),e.interactivity.status===b.Z&&this.reset(l)}},this._hoverBubbleColor=(e,i,t)=>{const o=this.container.actualOptions,l=null!==t&&void 0!==t?t:o.interactivity.modes.bubble;if(l){if(!e.bubble.finalColor){const i=l.color;if(!i)return;const t=Object(b.V)(i);e.bubble.finalColor=Object(b.db)(t)}if(e.bubble.finalColor)if(l.mix){e.bubble.color=void 0;const t=e.getFillColor();e.bubble.color=t?Object(b.gb)(Object(b.q)(t,e.bubble.finalColor,1-i,i)):e.bubble.finalColor}else e.bubble.color=e.bubble.finalColor}},this._hoverBubbleOpacity=(e,i,t)=>{var o,n,s,a;const u=this.container.actualOptions,c=null!==(o=null===t||void 0===t?void 0:t.opacity)&&void 0!==o?o:null===(n=u.interactivity.modes.bubble)||void 0===n?void 0:n.opacity;if(!c)return;const r=e.options.opacity.value,d=l(null!==(s=null===(a=e.opacity)||void 0===a?void 0:a.value)&&void 0!==s?s:1,c,Object(b.G)(r),i);void 0!==d&&(e.bubble.opacity=d)},this._hoverBubbleSize=(e,i,t)=>{const o=this.container,n=null!==t&&void 0!==t&&t.size?t.size*o.retina.pixelRatio:o.retina.bubbleModeSize;if(void 0===n)return;const s=Object(b.G)(e.options.size.value)*o.retina.pixelRatio,a=l(e.size.value,n,s,i);void 0!==a&&(e.bubble.radius=a)},this._process=(e,i,t,b)=>{var o;const l=this.container,n=b.bubbleObj.optValue,s=l.actualOptions.interactivity.modes.bubble;if(!s||void 0===n)return;const a=s.duration,u=l.retina.bubbleModeDistance,c=b.particlesObj.optValue,r=b.bubbleObj.value,d=null!==(o=b.particlesObj.value)&&void 0!==o?o:0,v=b.type;if(u&&!(u<0)&&n!==c)if(l.bubble||(l.bubble={}),l.bubble.durationEnd)r&&("size"===v&&delete e.bubble.radius,"opacity"===v&&delete e.bubble.opacity);else if(i<=u){if((null!==r&&void 0!==r?r:d)!==n){const i=d-t*(d-n)/a;"size"===v&&(e.bubble.radius=i),"opacity"===v&&(e.bubble.opacity=i)}}else"size"===v&&delete e.bubble.radius,"opacity"===v&&delete e.bubble.opacity},this._singleSelectorHover=(e,i,t)=>{const o=this.container,l=document.querySelectorAll(i),n=o.actualOptions.interactivity.modes.bubble;n&&l.length&&l.forEach((i=>{const l=i,s=o.retina.pixelRatio,a={x:(l.offsetLeft+.5*l.offsetWidth)*s,y:(l.offsetTop+.5*l.offsetHeight)*s},u=.5*l.offsetWidth*s,c="circle"===t.type?new b.b(a.x,a.y,u):new b.f(l.offsetLeft*s,l.offsetTop*s,l.offsetWidth*s,l.offsetHeight*s),r=o.particles.quadTree.query(c,(e=>this.isEnabled(e)));for(const t of r){if(!c.contains(t.getPosition()))continue;t.bubble.inRange=!0;const i=n.divs,o=Object(b.t)(i,l);t.bubble.div&&t.bubble.div===l||(this.clear(t,e,!0),t.bubble.div=l),this._hoverBubbleSize(t,1,o),this._hoverBubbleOpacity(t,1,o),this._hoverBubbleColor(t,1,o)}}))},e.bubble||(e.bubble={}),this.handleClickMode=i=>{i===n&&(e.bubble||(e.bubble={}),e.bubble.clicking=!0)}}clear(e,i,t){e.bubble.inRange&&!t||(delete e.bubble.div,delete e.bubble.opacity,delete e.bubble.radius,delete e.bubble.color)}init(){const e=this.container,i=e.actualOptions.interactivity.modes.bubble;i&&(e.retina.bubbleModeDistance=i.distance*e.retina.pixelRatio,void 0!==i.size&&(e.retina.bubbleModeSize=i.size*e.retina.pixelRatio))}async interact(e){const i=this.container.actualOptions.interactivity.events,t=i.onHover,o=i.onClick,l=t.enable,s=t.mode,a=o.enable,u=o.mode,c=i.onDiv;l&&Object(b.P)(n,s)?this._hoverBubble():a&&Object(b.P)(n,u)?this._clickBubble():Object(b.u)(n,c,((i,t)=>this._singleSelectorHover(e,i,t))),await Promise.resolve()}isEnabled(e){var i;const t=this.container,o=t.actualOptions,l=t.interactivity.mouse,s=(null!==(i=null===e||void 0===e?void 0:e.interactivity)&&void 0!==i?i:o.interactivity).events,{onClick:a,onDiv:u,onHover:c}=s,r=Object(b.O)(n,u);return!!(r||c.enable&&l.position||a.enable&&l.clickPosition)&&(Object(b.P)(n,c.mode)||Object(b.P)(n,a.mode)||r)}loadModeOptions(e){e.bubble||(e.bubble=new o.a);for(var i=arguments.length,t=new Array(i>1?i-1:0),b=1;b<i;b++)t[b-1]=arguments[b];for(const o of t)e.bubble.load(null===o||void 0===o?void 0:o.bubble)}reset(e){e.bubble.inRange=!1}}}}]);
//# sourceMappingURL=42.b330f540.chunk.js.map