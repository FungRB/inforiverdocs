(self.webpackChunkinforiver=self.webpackChunkinforiver||[]).push([[7337],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),f=c(n),m=a,d=f["".concat(u,".").concat(m)]||f[m]||s[m]||l;return n?r.createElement(d,o(o({ref:t},p),{},{components:n})):r.createElement(d,o({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=f;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},324:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return i},toc:function(){return u},default:function(){return p}});var r=n(2122),a=n(9756),l=(n(7294),n(3905)),o={id:"npv",title:"NPV"},i={unversionedId:"references/formulas/npv",id:"references/formulas/npv",isDocsHomePage:!1,title:"NPV",description:"The NPV function returns the net present value of an investment based on a discount rate and a series of future payments (negative values) and income (positive values).",source:"@site/docs/references/formulas/npv.mdx",sourceDirName:"references/formulas",slug:"/references/formulas/npv",permalink:"/inforiverdocs/references/formulas/npv",version:"current",frontMatter:{id:"npv",title:"NPV"}},u=[{value:"Syntax",id:"syntax",children:[]},{value:"Arguments",id:"arguments",children:[]},{value:"Example",id:"example",children:[]},{value:"Excel Equivalent",id:"excel-equivalent",children:[]}],c={toc:u};function p(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,l.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"NPV")," function returns the net present value of an investment based on a discount rate and a series of future payments (negative values) and income (positive values)."),(0,l.kt)("h2",{id:"syntax"},"Syntax"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"NPV (Rate, value1, [value2], ...)\n")),(0,l.kt)("h2",{id:"arguments"},"Arguments"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"Rate")," \u2013 The rate of discount."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"value1")," \u2013 The node that contains the order of cash flows for which you want to calculate the net present value."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"value2,\u2026"),"  \u2013 The additional nodes that contains the order of cash flows for which you want to calculate the net present value. This is an optional argument."),(0,l.kt)("h2",{id:"example"},"Example"),(0,l.kt)("p",null,"Consider a project with an initial investment of $10,000 and cash inflows of $4,000 for the subsequent four years. Discount rate is 12%. The objective is to evaluate the project by calculating NPV. "),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Period"),(0,l.kt)("th",{parentName:"tr",align:null},"0"),(0,l.kt)("th",{parentName:"tr",align:null},"1"),(0,l.kt)("th",{parentName:"tr",align:null},"2"),(0,l.kt)("th",{parentName:"tr",align:null},"3"),(0,l.kt)("th",{parentName:"tr",align:null},"4"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Initial Investment"),(0,l.kt)("td",{parentName:"tr",align:null},"-10,000"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Cash Inflows"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"4,000"),(0,l.kt)("td",{parentName:"tr",align:null},"4,000"),(0,l.kt)("td",{parentName:"tr",align:null},"4,000"),(0,l.kt)("td",{parentName:"tr",align:null},"4,000")))),(0,l.kt)("p",null,"To achieve this, the formula should be "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"NPV ([Discount Rate,Cash Inflows.ALL_PERIODS]) + Initial Investment\n")),(0,l.kt)("p",null,"NPV is calculated to be $847.68. "),(0,l.kt)("h2",{id:"excel-equivalent"},"Excel Equivalent"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://support.office.com/en-us/article/NPV-function-8672CB67-2576-4D07-B67B-AC28ACF2A568"},"NPV")))}p.isMDXComponent=!0}}]);