(this["webpackJsonpportfolio-app"]=this["webpackJsonpportfolio-app"]||[]).push([[34],{220:function(t,n,e){"use strict";e.d(n,"a",(function(){return r}));var s=e(45);class r{async draw(t){const{particle:n,radius:s}=t,r=this.getCenter(n,s),a=this.getSidesData(n,s),{drawPolygon:o}=await e.e(85).then(e.bind(null,231));o(t,r,a)}getSidesCount(t){var n;const e=t.shapeData;return Math.round(Object(s.H)(null!==(n=null===e||void 0===e?void 0:e.sides)&&void 0!==n?n:5))}}},275:function(t,n,e){"use strict";e.r(n),e.d(n,"PolygonDrawer",(function(){return r}));var s=e(220);class r extends s.a{getCenter(t,n){return{x:-n/(t.sides/3.5),y:-n/.76}}getSidesData(t,n){const e=t.sides;return{count:{denominator:1,numerator:e},length:2.66*n/(e/3)}}}}}]);
//# sourceMappingURL=34.eef7aa9f.chunk.js.map