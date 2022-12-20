"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[289],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=u(n),d=l,g=m["".concat(s,".").concat(d)]||m[d]||p[d]||r;return n?a.createElement(g,o(o({ref:t},c),{},{components:n})):a.createElement(g,o({ref:t},c))}));function d(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,o=new Array(r);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:l,o[1]=i;for(var u=2;u<r;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(7294),l=n(6010);const r="tabItem_Ymn6";function o(e){let{children:t,hidden:n,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,l.Z)(r,o),hidden:n},t)}},5488:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(7462),l=n(7294),r=n(6010),o=n(2389),i=n(7392),s=n(7094),u=n(2466);const c="tabList__CuJ",p="tabItem_LNqP";function m(e){var t;const{lazy:n,block:o,defaultValue:m,values:d,groupId:g,className:h}=e,k=l.Children.map(e.children,(e=>{if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),b=d??k.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),f=(0,i.l)(b,((e,t)=>e.value===t.value));if(f.length>0)throw new Error(`Docusaurus error: Duplicate values "${f.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const v=null===m?m:m??(null==(t=k.find((e=>e.props.default)))?void 0:t.props.value)??k[0].props.value;if(null!==v&&!b.some((e=>e.value===v)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${v}" but none of its children has the corresponding value. Available values are: ${b.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:w}=(0,s.U)(),[N,T]=(0,l.useState)(v),x=[],{blockElementScrollPositionUntilNextRender:j}=(0,u.o5)();if(null!=g){const e=y[g];null!=e&&e!==N&&b.some((t=>t.value===e))&&T(e)}const O=e=>{const t=e.currentTarget,n=x.indexOf(t),a=b[n].value;a!==N&&(j(t),T(a),null!=g&&w(g,String(a)))},E=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=x.indexOf(e.currentTarget)+1;n=x[t]??x[0];break}case"ArrowLeft":{const t=x.indexOf(e.currentTarget)-1;n=x[t]??x[x.length-1];break}}null==(t=n)||t.focus()};return l.createElement("div",{className:(0,r.Z)("tabs-container",c)},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":o},h)},b.map((e=>{let{value:t,label:n,attributes:o}=e;return l.createElement("li",(0,a.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:e=>x.push(e),onKeyDown:E,onFocus:O,onClick:O},o,{className:(0,r.Z)("tabs__item",p,null==o?void 0:o.className,{"tabs__item--active":N===t})}),n??t)}))),n?(0,l.cloneElement)(k.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):l.createElement("div",{className:"margin-top--md"},k.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==N})))))}function d(e){const t=(0,o.Z)();return l.createElement(m,(0,a.Z)({key:String(t)},e))}},5163:(e,t,n)=>{n.d(t,{Z:()=>u});var a=n(7294);const l="terminalWindow_wGrl",r="terminalWindowHeader_o9Cs",o="buttons_IGLB",i="dot_fGZE",s="terminalWindowBody_tzdS";function u(e){let{children:t}=e;return a.createElement("div",{className:l},a.createElement("div",{className:r},a.createElement("div",{className:o},a.createElement("span",{className:i,style:{background:"#f25f58"}}),a.createElement("span",{className:i,style:{background:"#fbbe3c"}}),a.createElement("span",{className:i,style:{background:"#58cb42"}}))),a.createElement("div",{className:s},t))}},9883:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>u,default:()=>g,frontMatter:()=>s,metadata:()=>c,toc:()=>m});var a=n(7462),l=(n(7294),n(3905)),r=n(5163),o=n(5162),i=n(5488);const s={description:"How to install Booster locally, and start a Booster project in no time."},u="Installation",c={unversionedId:"getting-started/installation",id:"getting-started/installation",title:"Installation",description:"How to install Booster locally, and start a Booster project in no time.",source:"@site/docs/02_getting-started/installation.mdx",sourceDirName:"02_getting-started",slug:"/getting-started/installation",permalink:"/getting-started/installation",draft:!1,editUrl:"https://github.com/boostercloud/booster/tree/main/website/docs/02_getting-started/installation.mdx",tags:[],version:"current",lastUpdatedBy:"BorjaZarco",lastUpdatedAt:1671528114,formattedLastUpdatedAt:"Dec 20, 2022",frontMatter:{description:"How to install Booster locally, and start a Booster project in no time."},sidebar:"docs",previous:{title:"Getting Started",permalink:"/category/getting-started"},next:{title:"Provider configuration",permalink:"/getting-started/configuration"}},p={},m=[{value:"Booster Prerequisites",id:"booster-prerequisites",level:2},{value:"Install Node.js",id:"install-nodejs",level:3},{value:"Install Git",id:"install-git",level:3},{value:"Git configuration variables",id:"git-configuration-variables",level:4},{value:"Installing the Booster CLI",id:"installing-the-booster-cli",level:2}],d={toc:m};function g(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"installation"},"Installation"),(0,l.kt)("p",null,"You can develop with Booster using any of the following operating systems:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Linux"),(0,l.kt)("li",{parentName:"ul"},"macOS"),(0,l.kt)("li",{parentName:"ul"},"Windows (Native and WSL)")),(0,l.kt)("h2",{id:"booster-prerequisites"},"Booster Prerequisites"),(0,l.kt)("h3",{id:"install-nodejs"},"Install Node.js"),(0,l.kt)("p",null,"The minimal required Node.js version is ",(0,l.kt)("inlineCode",{parentName:"p"},"v14.14"),". Download the installer\n",(0,l.kt)("a",{parentName:"p",href:"https://nodejs.org/en/"},"from nodejs website"),", or install it using your system's package\nmanager."),(0,l.kt)(i.Z,{groupId:"os",mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"windows",label:"Windows",mdxType:"TabItem"},(0,l.kt)("p",null,"Using ",(0,l.kt)("a",{parentName:"p",href:"https://chocolatey.org/"},"Chocolatey")," package manager, run the following command in your PowerShell"),(0,l.kt)(r.Z,{mdxType:"TerminalWindow"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"choco install nodejs\n")))),(0,l.kt)(o.Z,{value:"macos",label:"macOS",mdxType:"TabItem"},(0,l.kt)("p",null,"Using ",(0,l.kt)("a",{parentName:"p",href:"https://brew.sh"},"Homebrew")," package manager, run the following command on the terminal"),(0,l.kt)(r.Z,{mdxType:"TerminalWindow"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"brew install node\n")))),(0,l.kt)(o.Z,{value:"ubuntu",label:"Ubuntu",mdxType:"TabItem"},"Just run the following commands on the terminal:",(0,l.kt)(r.Z,{mdxType:"TerminalWindow"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"curl -sL https://deb.nodesource.com/setup_14.x | sudo -E bash -\nsudo apt install nodejs\n"))))),(0,l.kt)("p",null,"Verify that it was installed properly by checking so from your terminal:"),(0,l.kt)(r.Z,{mdxType:"TerminalWindow"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"node -v\n")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"v14.14.0")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"npm -v\n")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"7.0.0"))),(0,l.kt)("p",null,"As soon as you have a Node.js version higher than ",(0,l.kt)("inlineCode",{parentName:"p"},"v14.14"),", and an ",(0,l.kt)("inlineCode",{parentName:"p"},"npm")," version higher than\n",(0,l.kt)("inlineCode",{parentName:"p"},"7"),", you are good to go. Just note that ",(0,l.kt)("inlineCode",{parentName:"p"},"npm")," comes with node, you don't have to install\nit apart."),(0,l.kt)("p",null,"Alternatively, we recommend you to use a version manager for dealing with different Node.js\nversions:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/nvm-sh/nvm"},(0,l.kt)("inlineCode",{parentName:"a"},"nvm"))," - Works with macOS, Linux, and Windows Subsystem\nfor Linux"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/coreybutler/nvm-windows"},(0,l.kt)("inlineCode",{parentName:"a"},"nvm-windows"))," - Works with native Windows")),(0,l.kt)("h3",{id:"install-git"},"Install Git"),(0,l.kt)("p",null,"Booster will initialize a Git repository when you create a new project (unless you use the ",(0,l.kt)("inlineCode",{parentName:"p"},"--skipGit")," flag), so it is required that you have it already installed in your system."),(0,l.kt)(i.Z,{groupId:"os",mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"windows",label:"Windows",mdxType:"TabItem"},(0,l.kt)(r.Z,{mdxType:"TerminalWindow"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"choco install git\n")))),(0,l.kt)(o.Z,{value:"macos",label:"macOS",default:!0,mdxType:"TabItem"},(0,l.kt)(r.Z,{mdxType:"TerminalWindow"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"brew install git\n")))),(0,l.kt)(o.Z,{value:"ubuntu",label:"Ubuntu",mdxType:"TabItem"},(0,l.kt)(r.Z,{mdxType:"TerminalWindow"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"sudo apt install git-all\n"))))),(0,l.kt)("h4",{id:"git-configuration-variables"},"Git configuration variables"),(0,l.kt)("p",null,"After installing git in your machine, make sure that ",(0,l.kt)("inlineCode",{parentName:"p"},"user.name")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"user.email")," are properly configured.\nTake a look at the ",(0,l.kt)("a",{parentName:"p",href:"https://git-scm.com/docs/git-config"},"Git configuration page")," for more info."),(0,l.kt)("p",null,"To configure them, run in your terminal:"),(0,l.kt)(r.Z,{mdxType:"TerminalWindow"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},'git config --global user.name "Your Name Here"\ngit config --global user.email "your_email@youremail.com"\n'))),(0,l.kt)("h2",{id:"installing-the-booster-cli"},"Installing the Booster CLI"),(0,l.kt)("p",null,"Booster comes with a command-line tool that helps you generating boilerplate code,\ntesting and deploying the application, and deleting all the resources in the cloud. All\nthe stable versions are published to ",(0,l.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@boostercloud/cli"},(0,l.kt)("inlineCode",{parentName:"a"},"npm")),",\nthese versions are the recommended ones, as they are well documented, and the changes are\nstated in the release notes."),(0,l.kt)("p",null,"To install the Booster CLI run this:"),(0,l.kt)(r.Z,{mdxType:"TerminalWindow"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"npm install --global @boostercloud/cli\n"))),(0,l.kt)("p",null,"Verify the Booster CLI installation with the ",(0,l.kt)("inlineCode",{parentName:"p"},"boost version")," command. You should get back\nsomething like"),(0,l.kt)(r.Z,{mdxType:"TerminalWindow"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"boost version\n")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"@boostercloud/cli/0.16.1 darwin-x64 node-v14.14.0"))))}g.isMDXComponent=!0}}]);