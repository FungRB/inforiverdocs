(self.webpackChunkinforiver=self.webpackChunkinforiver||[]).push([[4315],{3905:function(e,n,r){"use strict";r.d(n,{Zo:function(){return l},kt:function(){return p}});var t=r(7294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function u(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function c(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var a=t.createContext({}),s=function(e){var n=t.useContext(a),r=n;return e&&(r="function"==typeof e?e(n):u(u({},n),e)),r},l=function(e){var n=s(e.components);return t.createElement(a.Provider,{value:n},e.children)},f={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=s(r),p=o,v=d["".concat(a,".").concat(p)]||d[p]||f[p]||i;return r?t.createElement(v,u(u({ref:n},l),{},{components:r})):t.createElement(v,u({ref:n},l))}));function p(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=r.length,u=new Array(i);u[0]=d;var c={};for(var a in n)hasOwnProperty.call(n,a)&&(c[a]=n[a]);c.originalType=e,c.mdxType="string"==typeof e?e:o,u[1]=c;for(var s=2;s<i;s++)u[s]=r[s];return t.createElement.apply(null,u)}return t.createElement.apply(null,r)}d.displayName="MDXCreateElement"},6742:function(e,n,r){"use strict";r.d(n,{Z:function(){return l}});var t=r(9756),o=r(7294),i=r(3727),u=r(3919),c=r(412),a=(0,o.createContext)({collectLink:function(){}}),s=r(4996);var l=function(e){var n,r,l,f=e.isNavLink,d=e.to,p=e.href,v=e.activeClassName,m=e.isActive,b=e["data-noBrokenLinkCheck"],y=e.autoAddBaseUrl,O=void 0===y||y,h=(0,t.Z)(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]),g=(0,s.C)().withBaseUrl,k=(0,o.useContext)(a),w=d||p,x=(0,u.Z)(w),E=null==w?void 0:w.replace("pathname://",""),C=void 0!==E?(r=E,O&&function(e){return e.startsWith("/")}(r)?g(r):r):void 0,j=(0,o.useRef)(!1),N=f?i.OL:i.rU,D=c.Z.canUseIntersectionObserver;(0,o.useEffect)((function(){return!D&&x&&null!=C&&window.docusaurus.prefetch(C),function(){D&&l&&l.disconnect()}}),[C,D,x]);var P=null!==(n=null==C?void 0:C.startsWith("#"))&&void 0!==n&&n,U=!C||!x||P;return C&&x&&!P&&!b&&k.collectLink(C),U?o.createElement("a",Object.assign({href:C},w&&!x&&{target:"_blank",rel:"noopener noreferrer"},h)):o.createElement(N,Object.assign({},h,{onMouseEnter:function(){j.current||null==C||(window.docusaurus.preload(C),j.current=!0)},innerRef:function(e){var n,r;D&&e&&x&&(n=e,r=function(){null!=C&&window.docusaurus.prefetch(C)},(l=new window.IntersectionObserver((function(e){e.forEach((function(e){n===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(l.unobserve(n),l.disconnect(),r())}))}))).observe(n))},to:C||""},f&&{isActive:m,activeClassName:v}))}},3919:function(e,n,r){"use strict";function t(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!t(e)}r.d(n,{b:function(){return t},Z:function(){return o}})},4996:function(e,n,r){"use strict";r.d(n,{C:function(){return i},Z:function(){return u}});var t=r(2263),o=r(3919);function i(){var e=(0,t.default)().siteConfig,n=(e=void 0===e?{}:e).baseUrl,r=void 0===n?"/":n,i=e.url;return{withBaseUrl:function(e,n){return function(e,n,r,t){var i=void 0===t?{}:t,u=i.forcePrependBaseUrl,c=void 0!==u&&u,a=i.absolute,s=void 0!==a&&a;if(!r)return r;if(r.startsWith("#"))return r;if((0,o.b)(r))return r;if(c)return n+r;var l=r.startsWith(n)?r:n+r.replace(/^\//,"");return s?e+l:l}(i,r,e,n)}}}function u(e,n){return void 0===n&&(n={}),(0,i().withBaseUrl)(e,n)}},658:function(e,n,r){"use strict";r.r(n),r.d(n,{frontMatter:function(){return u},metadata:function(){return c},toc:function(){return a},default:function(){return l}});var t=r(2122),o=r(9756),i=(r(7294),r(3905)),u=(r(4996),r(6742),{id:"round",title:"ROUND"}),c={unversionedId:"references/formulas/round",id:"references/formulas/round",isDocsHomePage:!1,title:"ROUND",description:"The ROUND function rounds a number to a specified number of digits.",source:"@site/docs/references/formulas/round.mdx",sourceDirName:"references/formulas",slug:"/references/formulas/round",permalink:"/inforiverdocs/references/formulas/round",version:"current",frontMatter:{id:"round",title:"ROUND"},sidebar:"functionSideBar",previous:{title:"LOG",permalink:"/inforiverdocs/references/formulas/log"},next:{title:"CEILING",permalink:"/inforiverdocs/references/formulas/ceiling"}},a=[{value:"Syntax",id:"syntax",children:[]},{value:"Example",id:"example",children:[]},{value:"Excel Equivalent",id:"excel-equivalent",children:[]}],s={toc:a};function l(e){var n=e.components,r=(0,o.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,t.Z)({},s,r,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"ROUND")," function rounds a number to a specified number of digits."),(0,i.kt)("h2",{id:"syntax"},"Syntax"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"ROUND(number,num_digits)\n")),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("h2",{id:"excel-equivalent"},"Excel Equivalent"))}l.isMDXComponent=!0}}]);