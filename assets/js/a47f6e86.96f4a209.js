(self.webpackChunkinforiver=self.webpackChunkinforiver||[]).push([[47],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=l(n),m=a,d=p["".concat(u,".").concat(m)]||p[m]||f[m]||o;return n?r.createElement(d,i(i({ref:t},s),{},{components:n})):r.createElement(d,i({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},6742:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var r=n(9756),a=n(7294),o=n(3727),i=n(3919),c=n(412),u=(0,a.createContext)({collectLink:function(){}}),l=n(4996);var s=function(e){var t,n,s,f=e.isNavLink,p=e.to,m=e.href,d=e.activeClassName,v=e.isActive,k=e["data-noBrokenLinkCheck"],g=e.autoAddBaseUrl,b=void 0===g||g,N=(0,r.Z)(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]),h=(0,l.C)().withBaseUrl,y=(0,a.useContext)(u),O=p||m,E=(0,i.Z)(O),C=null==O?void 0:O.replace("pathname://",""),T=void 0!==C?(n=C,b&&function(e){return e.startsWith("/")}(n)?h(n):n):void 0,w=(0,a.useRef)(!1),x=f?o.OL:o.rU,A=c.Z.canUseIntersectionObserver;(0,a.useEffect)((function(){return!A&&E&&null!=T&&window.docusaurus.prefetch(T),function(){A&&s&&s.disconnect()}}),[T,A,E]);var j=null!==(t=null==T?void 0:T.startsWith("#"))&&void 0!==t&&t,P=!T||!E||j;return T&&E&&!j&&!k&&y.collectLink(T),P?a.createElement("a",Object.assign({href:T},O&&!E&&{target:"_blank",rel:"noopener noreferrer"},N)):a.createElement(x,Object.assign({},N,{onMouseEnter:function(){w.current||null==T||(window.docusaurus.preload(T),w.current=!0)},innerRef:function(e){var t,n;A&&e&&E&&(t=e,n=function(){null!=T&&window.docusaurus.prefetch(T)},(s=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(s.unobserve(t),s.disconnect(),n())}))}))).observe(t))},to:T||""},f&&{isActive:v,activeClassName:d}))}},3919:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!r(e)}n.d(t,{b:function(){return r},Z:function(){return a}})},4996:function(e,t,n){"use strict";n.d(t,{C:function(){return o},Z:function(){return i}});var r=n(2263),a=n(3919);function o(){var e=(0,r.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,o=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var o=void 0===r?{}:r,i=o.forcePrependBaseUrl,c=void 0!==i&&i,u=o.absolute,l=void 0!==u&&u;if(!n)return n;if(n.startsWith("#"))return n;if((0,a.b)(n))return n;if(c)return t+n;var s=n.startsWith(t)?n:t+n.replace(/^\//,"");return l?e+s:s}(o,n,e,t)}}}function i(e,t){return void 0===t&&(t={}),(0,o().withBaseUrl)(e,t)}},9314:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return c},toc:function(){return u},default:function(){return s}});var r=n(2122),a=n(9756),o=(n(7294),n(3905)),i=(n(4996),n(6742),{id:"concatenate",title:"CONCATENATE"}),c={unversionedId:"references/formulas/concatenate",id:"references/formulas/concatenate",isDocsHomePage:!1,title:"CONCATENATE",description:"The CONCATENATE function is used to join two or more text strings or numbers or cell references into one string.",source:"@site/docs/references/formulas/concatenate.mdx",sourceDirName:"references/formulas",slug:"/references/formulas/concatenate",permalink:"/inforiverdocs/references/formulas/concatenate",version:"current",frontMatter:{id:"concatenate",title:"CONCATENATE"},sidebar:"functionSideBar",previous:{title:"TEXT",permalink:"/inforiverdocs/references/formulas/text"},next:{title:"SUM",permalink:"/inforiverdocs/references/formulas/sum"}},u=[{value:"Syntax",id:"syntax",children:[]},{value:"Arguments",id:"arguments",children:[]},{value:"Example",id:"example",children:[]}],l={toc:u};function s(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"CONCATENATE")," function is used to join two or more text strings or numbers or cell references into one string."),(0,o.kt)("h2",{id:"syntax"},"Syntax"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"CONCATENATE(text1, [text2], ...)\n")),(0,o.kt)("h2",{id:"arguments"},"Arguments"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"text1"),": The first item to join. The item can be a text value, number, or cell reference."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"text2"),": Additional text items to join. You can have up to 255 items, up to a total of 8,192 characters.")),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("p",null,"To append the string 'Department is' to every column('DEPT_NAME') use the formula as:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'CONCATENATE("Department is:", DEPT_NAME)\n')),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"DEPT_NAME"),(0,o.kt)("th",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"th"},"Result")))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Sales"),(0,o.kt)("td",{parentName:"tr",align:null},"Department is Sales")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"HR"),(0,o.kt)("td",{parentName:"tr",align:null},"Department is HR")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Finance"),(0,o.kt)("td",{parentName:"tr",align:null},"Department is Finance")))))}s.isMDXComponent=!0}}]);