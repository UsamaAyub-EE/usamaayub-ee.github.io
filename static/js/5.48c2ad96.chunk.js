(this["webpackJsonpportfolio-app"]=this["webpackJsonpportfolio-app"]||[]).push([[5,7],{131:function(e,t,s){"use strict";s.r(t);s(0),s(133);var i=s(1);t.default=function(e){const{title:t}=e;return Object(i.jsx)("div",{className:"header",children:t})}},138:function(e,t,s){"use strict";s.r(t);var i=s(0),n=s(355),o=s(108),l=s(176),r=s(131),c=s(34),a=s(253),h=s(1);const d={iconStyle:{height:75,width:75},introTextContainer:{whiteSpace:"pre-wrap"}};t.default=function(e){var t;const{header:s}=e,[p,j]=Object(i.useState)(null);return Object(i.useEffect)((()=>{j(a)}),[]),Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(r.default,{title:s}),p?Object(h.jsx)(o.a,{children:Object(h.jsx)("div",{className:"section-content-container",children:Object(h.jsxs)(l.a,{children:[(u=p.intro,Object(h.jsx)("h4",{style:d.introTextContainer,children:Object(h.jsx)(n.a,{children:u})})),null===(t=p.skills)||void 0===t?void 0:t.map(((e,t)=>Object(h.jsxs)("div",{children:[Object(h.jsx)("br",{}),Object(h.jsx)("h3",{children:e.title}),e.items.map(((e,t)=>Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)("div",{style:{display:"inline-block"},children:[Object(h.jsx)("button",{type:"button",className:"btn m-1",onClick:()=>{!function(e){const t=JSON.parse(JSON.stringify(p));t.skills.map((t=>{t.items.map((t=>{t.title===e&&(t.show=!t.show)}))})),j(t)}(e.title)},children:Object(h.jsx)("img",{style:d.iconStyle,src:e.icon,alt:e.title})}),Object(h.jsx)("p",{children:e.title})]},t)})))]},t))),p.skills.map(((e,t)=>Object(h.jsx)(h.Fragment,{children:Object(h.jsx)("div",{className:"skills-container",children:e.items.map(((e,t)=>e.show&&Object(h.jsx)("div",{className:"skill-item",children:Object(h.jsxs)("div",{style:{margin:10},children:[Object(h.jsx)("div",{className:"h4",children:Object(h.jsx)(n.a,{children:e.title})}),Object(h.jsx)(n.a,{children:e.detail})]})},t)))},t)})))]})})}):Object(h.jsx)(c.default,{})]});var u}},253:function(e){e.exports=JSON.parse('{"intro":"I love to learn new things and experiment with new technologies.\\nThese are some of the major languages, technologies, tools and platforms I have worked with:","skills":[{"title":"Languages & Databases","items":[{"icon":"images/skills/c.png","title":"C","detail":"University course on learning C (Intro to Programming).  \\nBinary Exploitation, Reverse Engineering, etc.","show":true},{"icon":"images/skills/python.png","title":"Python","detail":"Used for various projects and writing scripts for exploits.  \\nWrote [pypwncollege](https://github.com/Zeeshan12340/pypwncollege) and contributed flask code to an [open source project](https://github.com/pwncollege/dojo/commits?author=Zeeshan12340)","show":true},{"icon":"images/skills/js.png","title":"JavaScript","detail":"Used React for building this website and NextJS for [twitter clone](https://github.com/Zeeshan12340/twitter-clone).  \\nUsed for other projects requiring a front-end like [revworks](https://github.com/zeeshan12340/revworks)","show":true},{"icon":"images/skills/mysql.png","title":"MySQL","detail":"Used a PostgreSQL database for [revworks](https://github.com/Zeeshan12340/twitter-clone), mongoDB for [twitter clone](https://github.com/Zeeshan12340/twitter-clone) etc.","show":true}]},{"title":"Frameworks & Technologies","items":[{"icon":"images/skills/docker.png","title":"Docker","detail":"Most projects on my github have been dockerized.  \\nPushed different images to [docker hub](https://hub.docker.com/u/zeeshan12340)","show":true},{"icon":"images/skills/react.png","title":"React","detail":"This website was built using React.","show":true},{"icon":"images/skills/rubyonrails.png","title":"RubyOnRails","detail":"[revworks](https://github.com/Zeeshan12340/revworks) was built using RubyOnRails.","show":true}]}]}')}}]);
//# sourceMappingURL=5.48c2ad96.chunk.js.map