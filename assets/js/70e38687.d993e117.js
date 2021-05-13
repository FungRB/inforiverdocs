(self.webpackChunkinforiver=self.webpackChunkinforiver||[]).push([[6943],{3905:function(e,r,t){"use strict";t.d(r,{Zo:function(){return l},kt:function(){return m}});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=n.createContext({}),c=function(e){var r=n.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},l=function(e){var r=c(e.components);return n.createElement(u.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),f=c(t),m=a,d=f["".concat(u,".").concat(m)]||f[m]||p[m]||i;return t?n.createElement(d,o(o({ref:r},l),{},{components:t})):n.createElement(d,o({ref:r},l))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=f;var s={};for(var u in r)hasOwnProperty.call(r,u)&&(s[u]=r[u]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=t[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},8070:function(e,r,t){"use strict";t.r(r),t.d(r,{frontMatter:function(){return o},metadata:function(){return s},toc:function(){return u},default:function(){return l}});var n=t(2122),a=t(9756),i=(t(7294),t(3905)),o={id:"current_series_id",title:"CURRENT_SERIES_ID"},s={unversionedId:"references/formulas/current_series_id",id:"references/formulas/current_series_id",isDocsHomePage:!1,title:"CURRENT_SERIES_ID",description:"Syntax",source:"@site/docs/references/formulas/current_series_id.mdx",sourceDirName:"references/formulas",slug:"/references/formulas/current_series_id",permalink:"/inforiver/references/formulas/current_series_id",version:"current",frontMatter:{id:"current_series_id",title:"CURRENT_SERIES_ID"}},u=[{value:"Syntax",id:"syntax",children:[]},{value:"Arguments",id:"arguments",children:[]},{value:"Example",id:"example",children:[]}],c={toc:u};function l(e){var r=e.components,t=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,n.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"syntax"},"Syntax"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"CURRENT_SERIES_ID == 'series'? value1:value2\n")),(0,i.kt)("h2",{id:"arguments"},"Arguments"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"series")," - Refers to the series label ie, Forecast, Budget etc."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"value1")," \u2013 The value that should be assigned to the series mentioned in the argument list. If series is mentioned as Forecast, value1 is assigned as the series Forecast."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"value2")," \u2013 The value that should be assigned to the series other than the one mentioned in the argument list. If series is mentioned as Forecast, value1 is assigned as the series Comparison."),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("p",null,"Consider a scenario where you want to assign 100 as the monthly Forecast value and 85 as the monthly Budget value."),(0,i.kt)("p",null,"This can be achieved by using the formula "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"CURRENT_SERIES_ID == 'Forecast'? 100:85.\n")))}l.isMDXComponent=!0}}]);