(self.webpackChunkinforiver=self.webpackChunkinforiver||[]).push([[6126],{3905:function(e,r,t){"use strict";t.d(r,{Zo:function(){return s},kt:function(){return m}});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function u(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?u(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):u(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},u=Object.keys(e);for(n=0;n<u.length;n++)t=u[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(n=0;n<u.length;n++)t=u[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=n.createContext({}),l=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},s=function(e){var r=l(e.components);return n.createElement(i.Provider,{value:r},e.children)},f={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},p=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,u=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=l(t),m=o,y=p["".concat(i,".").concat(m)]||p[m]||f[m]||u;return t?n.createElement(y,a(a({ref:r},s),{},{components:t})):n.createElement(y,a({ref:r},s))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var u=t.length,a=new Array(u);a[0]=p;var c={};for(var i in r)hasOwnProperty.call(r,i)&&(c[i]=r[i]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var l=2;l<u;l++)a[l]=t[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},4602:function(e,r,t){"use strict";t.r(r),t.d(r,{frontMatter:function(){return a},metadata:function(){return c},toc:function(){return i},default:function(){return s}});var n=t(2122),o=t(9756),u=(t(7294),t(3905)),a={id:"getrowvalue",title:"GETROWVALUE"},c={unversionedId:"references/formulas/getrowvalue",id:"references/formulas/getrowvalue",isDocsHomePage:!1,title:"GETROWVALUE",description:"The GETROWVALUE function returns the value of the source key row.",source:"@site/docs/references/formulas/getrowvalue.mdx",sourceDirName:"references/formulas",slug:"/references/formulas/getrowvalue",permalink:"/inforiver/references/formulas/getrowvalue",version:"current",frontMatter:{id:"getrowvalue",title:"GETROWVALUE"}},i=[{value:"Syntax",id:"syntax",children:[]},{value:"Argument",id:"argument",children:[]},{value:"Example",id:"example",children:[]}],l={toc:i};function s(e){var r=e.components,t=(0,o.Z)(e,["components"]);return(0,u.kt)("wrapper",(0,n.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,u.kt)("p",null,"The GETROWVALUE function returns the value of the source key row. "),(0,u.kt)("h2",{id:"syntax"},"Syntax"),(0,u.kt)("p",null,"DS.(SERIES).GETROWVALUE(<source_key>)"),(0,u.kt)("h2",{id:"argument"},"Argument"),(0,u.kt)("p",null,"source_key - string that corresponds to the source key"),(0,u.kt)("h2",{id:"example"},"Example"),(0,u.kt)("p",null,'SUM(DS.Comparison.GETROWVALUE("East")) returns the sum of the values of the data source key East from the\ncomparison series.'))}s.isMDXComponent=!0}}]);