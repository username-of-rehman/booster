"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8946],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(n),u=a,h=m["".concat(l,".").concat(u)]||m[u]||d[u]||r;return n?o.createElement(h,i(i({ref:t},c),{},{components:n})):o.createElement(h,i({ref:t},c))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<r;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3051:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var o=n(7462),a=(n(7294),n(3905));const r={},i="Testing",s={unversionedId:"going-deeper/testing",id:"going-deeper/testing",title:"Testing",description:"Booster applications are fully tested by default. This means that you can be sure that your application will work as expected. However, you can also write your own tests to check that your application behaves as you expect. In this section, we will leave some recommendations on how to test your Booster application.",source:"@site/docs/10_going-deeper/testing.md",sourceDirName:"10_going-deeper",slug:"/going-deeper/testing",permalink:"/going-deeper/testing",draft:!1,editUrl:"https://github.com/boostercloud/booster/tree/main/website/docs/10_going-deeper/testing.md",tags:[],version:"current",lastUpdatedBy:"Javier Toledo",lastUpdatedAt:1679415385,formattedLastUpdatedAt:"Mar 21, 2023",frontMatter:{},sidebar:"docs",previous:{title:"Webhook Rocket",permalink:"/going-deeper/rockets/rocket-webhook"},next:{title:"Migrations",permalink:"/going-deeper/data-migrations"}},l={},p=[{value:"Testing Booster applications",id:"testing-booster-applications",level:2},{value:"Testing with <code>sinon-chai</code>",id:"testing-with-sinon-chai",level:3},{value:"Recommended files",id:"recommended-files",level:3},{value:"Framework integration tests",id:"framework-integration-tests",level:2}],c={toc:p};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"testing"},"Testing"),(0,a.kt)("p",null,"Booster applications are fully tested by default. This means that you can be sure that your application will work as expected. However, you can also write your own tests to check that your application behaves as you expect. In this section, we will leave some recommendations on how to test your Booster application."),(0,a.kt)("h2",{id:"testing-booster-applications"},"Testing Booster applications"),(0,a.kt)("p",null,"To properly test a Booster application, you should create a ",(0,a.kt)("inlineCode",{parentName:"p"},"test")," folder at the same level as the ",(0,a.kt)("inlineCode",{parentName:"p"},"src")," one. Apart from that, tests' names should have the ",(0,a.kt)("inlineCode",{parentName:"p"},"<my_test>.test.ts")," format."),(0,a.kt)("p",null,"When a Booster application is generated, you will have a script in a ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json")," like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'"scripts": {\n  "test": "nyc --extension .ts mocha --forbid-only \\"test/**/*.test.ts\\""\n}\n')),(0,a.kt)("p",null,"The only thing that you should add to this line are the ",(0,a.kt)("inlineCode",{parentName:"p"},"AWS_SDK_LOAD_CONFIG=true")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"BOOSTER_ENV=test")," environment variables, so the script will look like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'"scripts": {\n  "test": "AWS_SDK_LOAD_CONFIG=true BOOSTER_ENV=test nyc --extension .ts mocha --forbid-only \\"test/**/*.test.ts\\""\n}\n')),(0,a.kt)("h3",{id:"testing-with-sinon-chai"},"Testing with ",(0,a.kt)("inlineCode",{parentName:"h3"},"sinon-chai")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"BoosterConfig")," can be accessed through the ",(0,a.kt)("inlineCode",{parentName:"p"},"Booster.config")," on any part of a Booster application. To properly mock it for your objective, we really recommend to use sinon ",(0,a.kt)("inlineCode",{parentName:"p"},"replace")," method, after configuring your ",(0,a.kt)("inlineCode",{parentName:"p"},"Booster.config")," as desired."),(0,a.kt)("p",null,'In the example below, we add 2 "empty" read-models, since we are iterating ',(0,a.kt)("inlineCode",{parentName:"p"},"Booster.config.readModels")," from a command handler:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"// Test\nimport { replace } from 'sinon'\n\nconst config = new BoosterConfig('test')\nconfig.appName = 'testing-time'\nconfig.providerPackage = '@boostercloud/framework-provider-aws'\nconfig.readModels['WoW'] = {} as ReadModelMetadata\nconfig.readModels['Amazing'] = {} as ReadModelMetadata\nreplace(Booster, 'config', config)\n\nconst spyMyCall = spy(MyCommand, 'myCall')\nconst command = new MyCommand('1', true)\nconst register = new Register('request-id-1')\nconst registerSpy = spy(register, 'events')\nawait MyCommand.handle(command, register)\n\nexpect(spyMyCall).to.have.been.calledOnceWithExactly('WoW')\nexpect(spyMyCall).to.have.been.calledOnceWithExactly('Amazing')\nexpect(registerSpy).to.have.been.calledOnceWithExactly(new MyEvent('1', 'WoW'))\nexpect(registerSpy).to.have.been.calledOnceWithExactly(new MyEvent('1', 'Amazing'))\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"// Example code\npublic static async handle(command: MyCommand, register: Register): Promise<void> {\n  const readModels = Booster.config.readModels\n  for (const readModelName in readModels) {\n    myCall(readModelName)\n    register.events(new MyEvent(command.ID, readModelName))\n  }\n}\n")),(0,a.kt)("h3",{id:"recommended-files"},"Recommended files"),(0,a.kt)("p",null,"These are some files that might help you speed up your testing with Booster."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"// <root_dir>/test/expect.ts\nimport * as chai from 'chai'\n\nchai.use(require('sinon-chai'))\nchai.use(require('chai-as-promised'))\n\nexport const expect = chai.expect\n")),(0,a.kt)("p",null,"This ",(0,a.kt)("inlineCode",{parentName:"p"},"expect")," method will help you with some more additional methods like ",(0,a.kt)("inlineCode",{parentName:"p"},"expect(<my_stub>).to.have.been.calledOnceWithExactly(<my_params..>)")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"# <root_dir>/.mocharc.yml\ndiff: true\nrequire: 'ts-node/register'\nextension:\n  - ts\npackage: './package.json'\nrecursive: true\nreporter: 'spec'\ntimeout: 5000\nfull-trace: true\nbail: true\n")),(0,a.kt)("h2",{id:"framework-integration-tests"},"Framework integration tests"),(0,a.kt)("p",null,"Booster framework integration tests package is used to test the Booster project itself, but it is also an example of how a Booster application could be tested. We encourage developers to have a look at our ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/boostercloud/booster/tree/main/packages/framework-integration-tests"},"Booster project repository"),"."),(0,a.kt)("p",null,"Some integration tests highly depend on the provider chosen for the project, and the infrastructure is normally deployed in the cloud right before the tests run. Once tests are completed, the application is teared down."),(0,a.kt)("p",null,"There are several types of integration tests in this package:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Tests to ensure that different packages integrate as expected with each other."),(0,a.kt)("li",{parentName:"ul"},"Tests to ensure that a Booster application behaves as expected when it is hit by a client (a GraphQL client)."),(0,a.kt)("li",{parentName:"ul"},"Tests to ensure that the application behaves in the same way no matter what provider is selected.")))}d.isMDXComponent=!0}}]);