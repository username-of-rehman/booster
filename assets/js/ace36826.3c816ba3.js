"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7348],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>u});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=l(r),u=a,h=m["".concat(s,".").concat(u)]||m[u]||d[u]||i;return r?n.createElement(h,o(o({ref:t},p),{},{components:r})):n.createElement(h,o({ref:t},p))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<i;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2991:(e,t,r)=>{r.d(t,{Z:()=>b});var n=r(7294),a=r(6010),i=r(3438),o=r(9960),c=r(3919),s=r(5999);const l="cardContainer_fWXF",p="cardTitle_rnsV",d="cardDescription_PWke";function m(e){let{href:t,children:r}=e;return n.createElement(o.Z,{href:t,className:(0,a.Z)("card padding--lg",l)},r)}function u(e){let{href:t,icon:r,title:i,description:o}=e;return n.createElement(m,{href:t},n.createElement("h2",{className:(0,a.Z)("text--truncate",p),title:i},r," ",i),o&&n.createElement("p",{className:(0,a.Z)("text--truncate",d),title:o},o))}function h(e){let{item:t}=e;const r=(0,i.Wl)(t);return r?n.createElement(u,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,s.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function f(e){let{item:t}=e;const r=(0,c.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",a=(0,i.xz)(t.docId??void 0);return n.createElement(u,{href:t.href,icon:r,title:t.label,description:null==a?void 0:a.description})}function v(e){let{item:t}=e;switch(t.type){case"link":return n.createElement(f,{item:t});case"category":return n.createElement(h,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function y(e){let{className:t}=e;const r=(0,i.jA)();return n.createElement(b,{items:r.items,className:t})}function b(e){const{items:t,className:r}=e;if(!t)return n.createElement(y,e);const o=(0,i.MN)(t);return n.createElement("section",{className:(0,a.Z)("row",r)},o.map(((e,t)=>n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(v,{item:e})))))}},8913:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=r(7462),a=(r(7294),r(3905)),i=r(2991);const o={},c="Booster architecture",s={unversionedId:"architecture/event-driven",id:"architecture/event-driven",title:"Booster architecture",description:"Booster is a highly opinionated framework that provides a complete toolset to build production-ready event-driven serverless applications.",source:"@site/docs/03_architecture/01_event-driven.mdx",sourceDirName:"03_architecture",slug:"/architecture/event-driven",permalink:"/architecture/event-driven",draft:!1,editUrl:"https://github.com/boostercloud/booster/tree/main/website/docs/03_architecture/01_event-driven.mdx",tags:[],version:"current",lastUpdatedBy:"Javier Toledo",lastUpdatedAt:1681816746,formattedLastUpdatedAt:"Apr 18, 2023",sidebarPosition:1,frontMatter:{},sidebar:"docs",previous:{title:"Build a Booster app in minutes",permalink:"/getting-started/coding"},next:{title:"Command",permalink:"/architecture/command"}},l={},p=[],d={toc:p};function m(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,n.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"booster-architecture"},"Booster architecture"),(0,a.kt)("p",null,"Booster is a highly opinionated framework that provides a complete toolset to build production-ready event-driven serverless applications. "),(0,a.kt)("p",null,"Two patterns influence the Booster's event-driven architecture: Command-Query Responsibility Segregation (",(0,a.kt)("a",{parentName:"p",href:"https://www.martinfowler.com/bliki/CQRS.html"},"CQRS"),") and ",(0,a.kt)("a",{parentName:"p",href:"https://martinfowler.com/eaaDev/EventSourcing.html"},"Event Sourcing"),". They're complex techniques to implement from scratch with lower-level frameworks, but Booster makes them feel natural and very easy to use."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"architecture",src:r(8437).Z,width:"1272",height:"715"})),(0,a.kt)("p",null,"As you can see in the diagram, Booster applications consist of four main building blocks: ",(0,a.kt)("inlineCode",{parentName:"p"},"Commands"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Events"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Entities"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"Read Models"),". ",(0,a.kt)("inlineCode",{parentName:"p"},"Commands")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"Read Models")," are the public interface of the application, while ",(0,a.kt)("inlineCode",{parentName:"p"},"Events")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"Entities")," are private implementation details. With Booster, clients submit ",(0,a.kt)("inlineCode",{parentName:"p"},"Commands"),", query the ",(0,a.kt)("inlineCode",{parentName:"p"},"Read Models"),", or subscribe to them for receiving real-time updates thanks to the out of the box ",(0,a.kt)("a",{parentName:"p",href:"/graphql"},"GraphQL API")),(0,a.kt)("p",null,"Booster applications are event-driven and event-sourced so, ",(0,a.kt)("strong",{parentName:"p"},"the source of truth is the whole history of events"),". When a client submits a command, Booster ",(0,a.kt)("em",{parentName:"p"},"wakes up")," and handles it throght ",(0,a.kt)("inlineCode",{parentName:"p"},"Command Handlers"),". As part of the process, some ",(0,a.kt)("inlineCode",{parentName:"p"},"Events")," may be ",(0,a.kt)("em",{parentName:"p"},"registered")," as needed. "),(0,a.kt)("p",null,"On the other side, the framework caches the current state by automatically ",(0,a.kt)("em",{parentName:"p"},"reducing")," all the registered events into ",(0,a.kt)("inlineCode",{parentName:"p"},"Entities"),". You can also ",(0,a.kt)("em",{parentName:"p"},"react")," to events via ",(0,a.kt)("inlineCode",{parentName:"p"},"Event Handlers"),", triggering side effect actions to certain events. Finally, ",(0,a.kt)("inlineCode",{parentName:"p"},"Entities")," are not directly exposed, they are transformed or ",(0,a.kt)("em",{parentName:"p"},"projected")," into ",(0,a.kt)("inlineCode",{parentName:"p"},"ReadModels"),", which are exposed to the public."),(0,a.kt)("p",null,"In this chapter you'll walk through these concepts in detail."),(0,a.kt)(i.Z,{mdxType:"DocCardList"}))}m.isMDXComponent=!0},8437:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/booster-arch-6688b589969d52c4534238dab61b2ccc.jpg"}}]);