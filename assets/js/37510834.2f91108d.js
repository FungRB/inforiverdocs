(self.webpackChunkinforiver=self.webpackChunkinforiver||[]).push([[952],{3905:function(t,e,n){"use strict";n.d(e,{Zo:function(){return m},kt:function(){return d}});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function u(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),o=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},m=function(t){var e=o(t.components);return a.createElement(p.Provider,{value:e},t.children)},N={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},k=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,m=u(t,["components","mdxType","originalType","parentName"]),k=o(n),d=r,g=k["".concat(p,".").concat(d)]||k[d]||N[d]||l;return n?a.createElement(g,i(i({ref:e},m),{},{components:n})):a.createElement(g,i({ref:e},m))}));function d(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=k;var u={};for(var p in e)hasOwnProperty.call(e,p)&&(u[p]=e[p]);u.originalType=t,u.mdxType="string"==typeof t?t:r,i[1]=u;for(var o=2;o<l;o++)i[o]=n[o];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},7818:function(t,e,n){"use strict";n.r(e),n.d(e,{frontMatter:function(){return i},metadata:function(){return u},toc:function(){return p},default:function(){return m}});var a=n(2122),r=n(9756),l=(n(7294),n(3905)),i={id:"isnan",title:"ISNAN"},u={unversionedId:"references/formulas/isnan",id:"references/formulas/isnan",isDocsHomePage:!1,title:"ISNAN",description:"The ISNAN function checks for error and returns a default value if a value in the cell is an error.",source:"@site/docs/references/formulas/isnan.mdx",sourceDirName:"references/formulas",slug:"/references/formulas/isnan",permalink:"/inforiverdocs/references/formulas/isnan",version:"current",frontMatter:{id:"isnan",title:"ISNAN"}},p=[{value:"Syntax",id:"syntax",children:[]},{value:"Arguments",id:"arguments",children:[]},{value:"Return value",id:"return-value",children:[]},{value:"Example",id:"example",children:[]}],o={toc:p};function m(t){var e=t.components,n=(0,r.Z)(t,["components"]);return(0,l.kt)("wrapper",(0,a.Z)({},o,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"ISNAN")," function checks for error and returns a default value if a value in the cell is an error."),(0,l.kt)("h2",{id:"syntax"},"Syntax"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"ISNAN (value1,value2)\n")),(0,l.kt)("h2",{id:"arguments"},"Arguments"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"value1")," \u2013 The cell reference that is to be checked for error values."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"value2")," \u2013 The value which is to replace the error values.")),(0,l.kt)("h2",{id:"return-value"},"Return value"),(0,l.kt)("p",null,"value2 in the place of Error."),(0,l.kt)("h2",{id:"example"},"Example"),(0,l.kt)("p",null,"Consider the rows ",(0,l.kt)("strong",{parentName:"p"},"Total Cost")," and ",(0,l.kt)("strong",{parentName:"p"},"No. of units")," to have the periods values as shown below"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Period"),(0,l.kt)("th",{parentName:"tr",align:null},"Jan"),(0,l.kt)("th",{parentName:"tr",align:null},"Feb"),(0,l.kt)("th",{parentName:"tr",align:null},"Mar"),(0,l.kt)("th",{parentName:"tr",align:null},"Apr"),(0,l.kt)("th",{parentName:"tr",align:null},"May"),(0,l.kt)("th",{parentName:"tr",align:null},"Jun"),(0,l.kt)("th",{parentName:"tr",align:null},"Jul"),(0,l.kt)("th",{parentName:"tr",align:null},"Aug"),(0,l.kt)("th",{parentName:"tr",align:null},"Sep"),(0,l.kt)("th",{parentName:"tr",align:null},"Oct"),(0,l.kt)("th",{parentName:"tr",align:null},"Nov"),(0,l.kt)("th",{parentName:"tr",align:null},"Dec"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Total Cost"),(0,l.kt)("td",{parentName:"tr",align:null},"100"),(0,l.kt)("td",{parentName:"tr",align:null},"150"),(0,l.kt)("td",{parentName:"tr",align:null},"200"),(0,l.kt)("td",{parentName:"tr",align:null},"100"),(0,l.kt)("td",{parentName:"tr",align:null},"300"),(0,l.kt)("td",{parentName:"tr",align:null},"250"),(0,l.kt)("td",{parentName:"tr",align:null},"300"),(0,l.kt)("td",{parentName:"tr",align:null},"0"),(0,l.kt)("td",{parentName:"tr",align:null},"225"),(0,l.kt)("td",{parentName:"tr",align:null},"300"),(0,l.kt)("td",{parentName:"tr",align:null},"0"),(0,l.kt)("td",{parentName:"tr",align:null},"300")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"No. of units"),(0,l.kt)("td",{parentName:"tr",align:null},"10"),(0,l.kt)("td",{parentName:"tr",align:null},"15"),(0,l.kt)("td",{parentName:"tr",align:null},"10"),(0,l.kt)("td",{parentName:"tr",align:null},"10"),(0,l.kt)("td",{parentName:"tr",align:null},"15"),(0,l.kt)("td",{parentName:"tr",align:null},"25"),(0,l.kt)("td",{parentName:"tr",align:null},"15"),(0,l.kt)("td",{parentName:"tr",align:null},"0"),(0,l.kt)("td",{parentName:"tr",align:null},"15"),(0,l.kt)("td",{parentName:"tr",align:null},"15"),(0,l.kt)("td",{parentName:"tr",align:null},"0"),(0,l.kt)("td",{parentName:"tr",align:null},"15")))),(0,l.kt)("p",null,"In the below example, Cost per unit is calculated by dividing Total Cost and No. of units."),(0,l.kt)("p",null,"Before applying ",(0,l.kt)("inlineCode",{parentName:"p"},"ISNAN"),":"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Period"),(0,l.kt)("th",{parentName:"tr",align:null},"Jan"),(0,l.kt)("th",{parentName:"tr",align:null},"Feb"),(0,l.kt)("th",{parentName:"tr",align:null},"Mar"),(0,l.kt)("th",{parentName:"tr",align:null},"Apr"),(0,l.kt)("th",{parentName:"tr",align:null},"May"),(0,l.kt)("th",{parentName:"tr",align:null},"Jun"),(0,l.kt)("th",{parentName:"tr",align:null},"Jul"),(0,l.kt)("th",{parentName:"tr",align:null},"Aug"),(0,l.kt)("th",{parentName:"tr",align:null},"Sep"),(0,l.kt)("th",{parentName:"tr",align:null},"Oct"),(0,l.kt)("th",{parentName:"tr",align:null},"Nov"),(0,l.kt)("th",{parentName:"tr",align:null},"Dec"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Cost per unit"),(0,l.kt)("td",{parentName:"tr",align:null},"10"),(0,l.kt)("td",{parentName:"tr",align:null},"10"),(0,l.kt)("td",{parentName:"tr",align:null},"20"),(0,l.kt)("td",{parentName:"tr",align:null},"10"),(0,l.kt)("td",{parentName:"tr",align:null},"20"),(0,l.kt)("td",{parentName:"tr",align:null},"10"),(0,l.kt)("td",{parentName:"tr",align:null},"20"),(0,l.kt)("td",{parentName:"tr",align:null},"#"),(0,l.kt)("td",{parentName:"tr",align:null},"15"),(0,l.kt)("td",{parentName:"tr",align:null},"20"),(0,l.kt)("td",{parentName:"tr",align:null},"#"),(0,l.kt)("td",{parentName:"tr",align:null},"20")))),(0,l.kt)("p",null,"Cost per unit returns Error(#) for Aug and Nov, the error is to be replaced with 0."),(0,l.kt)("p",null,"To achieve this, the formula should be:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"ISNAN(Total Cost/No. of units,0)\n")),(0,l.kt)("p",null,"Applying applying ",(0,l.kt)("inlineCode",{parentName:"p"},"ISNAN"),":"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Period"),(0,l.kt)("th",{parentName:"tr",align:null},"Jan"),(0,l.kt)("th",{parentName:"tr",align:null},"Feb"),(0,l.kt)("th",{parentName:"tr",align:null},"Mar"),(0,l.kt)("th",{parentName:"tr",align:null},"Apr"),(0,l.kt)("th",{parentName:"tr",align:null},"May"),(0,l.kt)("th",{parentName:"tr",align:null},"Jun"),(0,l.kt)("th",{parentName:"tr",align:null},"Jul"),(0,l.kt)("th",{parentName:"tr",align:null},"Aug"),(0,l.kt)("th",{parentName:"tr",align:null},"Sep"),(0,l.kt)("th",{parentName:"tr",align:null},"Oct"),(0,l.kt)("th",{parentName:"tr",align:null},"Nov"),(0,l.kt)("th",{parentName:"tr",align:null},"Dec"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Cost per unit"),(0,l.kt)("td",{parentName:"tr",align:null},"10"),(0,l.kt)("td",{parentName:"tr",align:null},"10"),(0,l.kt)("td",{parentName:"tr",align:null},"20"),(0,l.kt)("td",{parentName:"tr",align:null},"10"),(0,l.kt)("td",{parentName:"tr",align:null},"20"),(0,l.kt)("td",{parentName:"tr",align:null},"10"),(0,l.kt)("td",{parentName:"tr",align:null},"20"),(0,l.kt)("td",{parentName:"tr",align:null},"0"),(0,l.kt)("td",{parentName:"tr",align:null},"15"),(0,l.kt)("td",{parentName:"tr",align:null},"20"),(0,l.kt)("td",{parentName:"tr",align:null},"0"),(0,l.kt)("td",{parentName:"tr",align:null},"20")))))}m.isMDXComponent=!0}}]);