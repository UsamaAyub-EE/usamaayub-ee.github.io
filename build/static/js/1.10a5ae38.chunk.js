(this["webpackJsonpportfolio-app"]=this["webpackJsonpportfolio-app"]||[]).push([[1,5],{108:function(e,t,a){"use strict";a.r(t);a(0),a(110);var c=a(1);t.default=function(e){var t=e.title;return Object(c.jsx)("div",{className:"header",children:t})}},112:function(e,t,a){"use strict";a.r(t);var c=a(5),n=a(0),r=a(191),s=a(190),o=a(204),i=a(203),l=a(80),f=a.n(l),j=a(108),u=a(31),b=a(40),d=a(1),p={introTextContainer:{margin:10,flexDirection:"column",whiteSpace:"pre-wrap",textAlign:"left",fontSize:"1.2em",fontWeight:500},introImageContainer:{margin:10,justifyContent:"center",alignItems:"center",display:"flex"},imageStyle:{margin:10,width:"500px",display:"flex"}};t.default=function(e){var t,a=e.header,l=Object(n.useState)(null),O=Object(c.a)(l,2),h=O[0],m=O[1];return Object(n.useEffect)((function(){fetch(u.a.about,{method:"GET"}).then((function(e){return e.json()})).then((function(e){return m(e)})).catch((function(e){return e}))}),[]),Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(j.default,{title:a}),Object(d.jsx)("div",{className:"section-content-container",children:Object(d.jsx)(s.a,{children:h?Object(d.jsx)(f.a,{children:Object(d.jsxs)(o.a,{children:[Object(d.jsx)(i.a,{style:p.introTextContainer,children:(t=h.about,Object(d.jsx)(r.a,{children:t}))}),Object(d.jsx)(i.a,{style:p.introImageContainer,children:Object(d.jsx)("img",{src:null===h||void 0===h?void 0:h.imageSource,alt:"profile",style:p.imageStyle})})]})}):Object(d.jsx)(b.default,{})})})]})}},203:function(e,t,a){"use strict";var c=a(5),n=a(2),r=a(6),s=a(7),o=a.n(s),i=a(0),l=a(10),f=a(1),j=["as","bsPrefix","className"],u=["className"];var b=i.forwardRef((function(e,t){var a=function(e){var t=e.as,a=e.bsPrefix,c=e.className,s=Object(r.a)(e,j);a=Object(l.c)(a,"col");var i=Object(l.a)(),f=Object(l.b)(),u=[],b=[];return i.forEach((function(e){var t,c,n,r=s[e];delete s[e],"object"===typeof r&&null!=r?(t=r.span,c=r.offset,n=r.order):t=r;var o=e!==f?"-".concat(e):"";t&&u.push(!0===t?"".concat(a).concat(o):"".concat(a).concat(o,"-").concat(t)),null!=n&&b.push("order".concat(o,"-").concat(n)),null!=c&&b.push("offset".concat(o,"-").concat(c))})),[Object(n.a)(Object(n.a)({},s),{},{className:o.a.apply(void 0,[c].concat(u,b))}),{as:t,bsPrefix:a,spans:u}]}(e),s=Object(c.a)(a,2),i=s[0],b=i.className,d=Object(r.a)(i,u),p=s[1],O=p.as,h=void 0===O?"div":O,m=p.bsPrefix,x=p.spans;return Object(f.jsx)(h,Object(n.a)(Object(n.a)({},d),{},{ref:t,className:o()(b,!x.length&&m)}))}));b.displayName="Col",t.a=b},204:function(e,t,a){"use strict";var c=a(2),n=a(6),r=a(7),s=a.n(r),o=a(0),i=a(10),l=a(1),f=["bsPrefix","className","as"],j=o.forwardRef((function(e,t){var a=e.bsPrefix,r=e.className,o=e.as,j=void 0===o?"div":o,u=Object(n.a)(e,f),b=Object(i.c)(a,"row"),d=Object(i.a)(),p=Object(i.b)(),O="".concat(b,"-cols"),h=[];return d.forEach((function(e){var t,a=u[e];delete u[e],t=null!=a&&"object"===typeof a?a.cols:a;var c=e!==p?"-".concat(e):"";null!=t&&h.push("".concat(O).concat(c,"-").concat(t))})),Object(l.jsx)(j,Object(c.a)(Object(c.a)({ref:t},u),{},{className:s.a.apply(void 0,[r,b].concat(h))}))}));j.displayName="Row",t.a=j}}]);
//# sourceMappingURL=1.10a5ae38.chunk.js.map