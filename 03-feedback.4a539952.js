!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r="Expected a function",i=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,u=/^0o[0-7]+$/i,f=parseInt,l="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,s=l||c||Function("return this")(),m=Object.prototype.toString,d=Math.max,g=Math.min,v=function(){return s.Date.now()};function p(e,t,n){var i,o,a,u,f,l,c=0,s=!1,m=!1,p=!0;if("function"!=typeof e)throw new TypeError(r);function T(t){var n=i,r=o;return i=o=void 0,c=t,u=e.apply(r,n)}function S(e){return c=e,f=setTimeout(N,t),s?T(e):u}function j(e){var n=e-l;return void 0===l||n>=t||n<0||m&&e-c>=a}function N(){var e=v();if(j(e))return O(e);f=setTimeout(N,function(e){var n=t-(e-l);return m?g(n,a-(e-c)):n}(e))}function O(e){return f=void 0,p&&i?T(e):(i=o=void 0,u)}function h(){var e=v(),n=j(e);if(i=arguments,o=this,l=e,n){if(void 0===f)return S(l);if(m)return f=setTimeout(N,t),T(l)}return void 0===f&&(f=setTimeout(N,t)),u}return t=b(t)||0,y(n)&&(s=!!n.leading,a=(m="maxWait"in n)?d(b(n.maxWait)||0,t):a,p="trailing"in n?!!n.trailing:p),h.cancel=function(){void 0!==f&&clearTimeout(f),c=0,i=l=o=f=void 0},h.flush=function(){return void 0===f?u:O(v())},h}function y(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==m.call(e)}(e))return NaN;if(y(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=y(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(i,"");var n=a.test(e);return n||u.test(e)?f(e.slice(2),n?2:8):o.test(e)?NaN:+e}t=function(e,t,n){var i=!0,o=!0;if("function"!=typeof e)throw new TypeError(r);return y(n)&&(i="leading"in n?!!n.leading:i,o="trailing"in n?!!n.trailing:o),p(e,t,{leading:i,maxWait:t,trailing:o})};const T=document.querySelector(".feedback-form"),S="feedback-form-state",j=JSON.parse(localStorage.getItem(S))||{};T.addEventListener("input",e(t)((function(e){"INPUT"===e.target.nodeName?j.email=e.target.value:"TEXTAREA"===e.target.nodeName&&(j.message=e.target.value);localStorage.setItem(S,JSON.stringify(j))}),500)),T.addEventListener("submit",(function(e){e.preventDefault(),T.elements.email.value&&T.elements.message.value&&(console.log(j),e.currentTarget.reset(),localStorage.removeItem(S));return})),function(){if(localStorage.getItem(S)){const e=JSON.parse(localStorage.getItem(S));T.elements.email.value=e.email||"",T.elements.message.value=e.message||""}}()}();
//# sourceMappingURL=03-feedback.4a539952.js.map
