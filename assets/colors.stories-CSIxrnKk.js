import{j as o}from"./jsx-runtime-CkxqCPlQ.js";import"./index-DJO9vBfz.js";function x(){const a="--chatbot-widget-",s={light:{},dark:{}};for(const c of document.styleSheets)try{for(const e of c.cssRules||[])if(e instanceof CSSStyleRule){for(const l of e.style)if(l.startsWith(a)){const h=e.style.getPropertyValue(l).trim(),f=e.selectorText===":root"?"light":"dark";s[f][l]=h}}}catch(e){console.error("Could not access stylesheet:",e)}return s}function y({colors:a}){return o.jsx("ul",{className:"grid grid-cols-3 gap-4",children:Object.entries(a).map(([s,c])=>o.jsxs("li",{className:"shadow rounded",children:[o.jsx("div",{className:"h-20",style:{backgroundColor:c}}),o.jsx("p",{className:"px-4 py-2",children:s})]},s))})}const g=x(),S={component:y,title:"ReactChatWidget Color Scheme",tags:["autodocs"],args:{colors:g.light}},r={args:{}},t={args:{colors:g.dark}};var n,i,d;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {}
}`,...(d=(i=r.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};var m,u,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    colors: colors.dark
  }
}`,...(p=(u=t.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};const k=["Default","DarkTheme"];export{t as DarkTheme,r as Default,k as __namedExportsOrder,S as default};
