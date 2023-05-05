/*! For license information please see bundle.js.LICENSE.txt */
(()=>{"use strict";var e={"./src/scss/styles.scss":(e,t,r)=>{r.r(t)},"./src/utils/theme.ts":(e,t,r)=>{r.r(t),r.d(t,{setTheme:()=>o});var s={theme:"dark",btnText:"Let there be darkness"},o=function(e,t){s.btnText="dark"===e?"Let there be light":"Let there be darkness",t.textContent=s.btnText,s.theme=e,document.body.classList.remove("dark"===s.theme?"light":"dark"),document.body.classList.add(s.theme),localStorage.setItem("theme",s.theme)}}},t={};function r(s){var o=t[s];if(void 0!==o)return o.exports;var a=t[s]={exports:{}};return e[s](a,a.exports,r),a.exports}r.d=(e,t)=>{for(var s in t)r.o(t,s)&&!r.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var s={};(()=>{r.r(s);r("./src/scss/styles.scss");var e=r("./src/utils/theme.ts"),t=document.getElementById("dark-light-toggle");"dark"!==localStorage.theme&&"theme"in localStorage&&window.matchMedia("(prefers-color-scheme: dark)").matches?(0,e.setTheme)("light",t):(0,e.setTheme)("dark",t),t.addEventListener("click",(function(){document.body.classList.contains("dark")?(0,e.setTheme)("light",t):document.body.classList.contains("light")&&(0,e.setTheme)("dark",t)}))})()})();
//# sourceMappingURL=bundle.js.map