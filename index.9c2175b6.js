function e(e,t,o,n){Object.defineProperty(e,t,{get:o,set:n,enumerable:!0,configurable:!0})}const t={mobileMenu:document.querySelector(".js-menu-container"),openMenuBtn:document.querySelector(".js-open-menu"),closeMenuBtn:document.querySelector(".js-close-menu"),ulPopEl:document.querySelector(".pop-list"),ulCatEl:document.querySelector(".cat-list"),openButtonEl:document.querySelector(".shopping-link"),closeButtonEl:document.querySelector(".order-now-modal__close-btn"),backdropEl:document.querySelector(".js-backdrop")};({el:document.querySelector(".btn-up"),scrolling:!1,show(){this.el.classList.contains("btn-up_hide")&&!this.el.classList.contains("btn-up_hiding")&&(this.el.classList.remove("btn-up_hide"),this.el.classList.add("btn-up_hiding"),window.setTimeout((()=>{this.el.classList.remove("btn-up_hiding")}),300))},hide(){this.el.classList.contains("btn-up_hide")||this.el.classList.contains("btn-up_hiding")||(this.el.classList.add("btn-up_hiding"),window.setTimeout((()=>{this.el.classList.add("btn-up_hide"),this.el.classList.remove("btn-up_hiding")}),300))},addEventListener(){window.addEventListener("scroll",(()=>{const e=window.scrollY||document.documentElement.scrollTop;this.scrolling&&e>0||(this.scrolling=!1,e>200?this.show():this.hide())})),document.querySelector(".btn-up").onclick=()=>{this.scrolling=!0,this.hide(),window.scrollTo({top:0,left:0,behavior:"smooth"})}}}).addEventListener();var o={};e(o,"disableBodyScroll",(function(){return y})),e(o,"clearAllBodyScrollLocks",(function(){return w})),e(o,"enableBodyScroll",(function(){return f}));var n=!1;if("undefined"!=typeof window){var i={get passive(){n=!0}};window.addEventListener("testPassive",null,i),window.removeEventListener("testPassive",null,i)}var l="undefined"!=typeof window&&window.navigator&&window.navigator.platform&&(/iP(ad|hone|od)/.test(window.navigator.platform)||"MacIntel"===window.navigator.platform&&window.navigator.maxTouchPoints>1),s=[],r=!1,c=-1,d=void 0,u=void 0,a=void 0,m=function(e){return s.some((function(t){return!(!t.options.allowTouchMove||!t.options.allowTouchMove(e))}))},p=function(e){var t=e||window.event;return!!m(t.target)||(t.touches.length>1||(t.preventDefault&&t.preventDefault(),!1))},h=function(){void 0!==a&&(document.body.style.paddingRight=a,a=void 0),void 0!==d&&(document.body.style.overflow=d,d=void 0)},v=function(){if(void 0!==u){var e=-parseInt(document.body.style.top,10),t=-parseInt(document.body.style.left,10);document.body.style.position=u.position,document.body.style.top=u.top,document.body.style.left=u.left,window.scrollTo(t,e),u=void 0}},y=function(e,t){if(e){if(!s.some((function(t){return t.targetElement===e}))){var o={targetElement:e,options:t||{}};s=[].concat(function(e){if(Array.isArray(e)){for(var t=0,o=Array(e.length);t<e.length;t++)o[t]=e[t];return o}return Array.from(e)}(s),[o]),l?window.requestAnimationFrame((function(){if(void 0===u){u={position:document.body.style.position,top:document.body.style.top,left:document.body.style.left};var e=window,t=e.scrollY,o=e.scrollX,n=e.innerHeight;document.body.style.position="fixed",document.body.style.top=-t,document.body.style.left=-o,setTimeout((function(){return window.requestAnimationFrame((function(){var e=n-window.innerHeight;e&&t>=n&&(document.body.style.top=-(t+e))}))}),300)}})):function(e){if(void 0===a){var t=!!e&&!0===e.reserveScrollBarGap,o=window.innerWidth-document.documentElement.clientWidth;if(t&&o>0){var n=parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right"),10);a=document.body.style.paddingRight,document.body.style.paddingRight=n+o+"px"}}void 0===d&&(d=document.body.style.overflow,document.body.style.overflow="hidden")}(t),l&&(e.ontouchstart=function(e){1===e.targetTouches.length&&(c=e.targetTouches[0].clientY)},e.ontouchmove=function(t){1===t.targetTouches.length&&function(e,t){var o=e.targetTouches[0].clientY-c;!m(e.target)&&(t&&0===t.scrollTop&&o>0||function(e){return!!e&&e.scrollHeight-e.scrollTop<=e.clientHeight}(t)&&o<0?p(e):e.stopPropagation())}(t,e)},r||(document.addEventListener("touchmove",p,n?{passive:!1}:void 0),r=!0))}}else console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.")},w=function(){l&&(s.forEach((function(e){e.targetElement.ontouchstart=null,e.targetElement.ontouchmove=null})),r&&(document.removeEventListener("touchmove",p,n?{passive:!1}:void 0),r=!1),c=-1),l?v():h(),s=[]},f=function(e){e?(s=s.filter((function(t){return t.targetElement!==e})),l&&(e.ontouchstart=null,e.ontouchmove=null,r&&0===s.length&&(document.removeEventListener("touchmove",p,n?{passive:!1}:void 0),r=!1)),l?v():h()):console.error("enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.")};(()=>{const e=()=>{const e="true"===t.openMenuBtn.getAttribute("aria-expanded")||!1;t.openMenuBtn.setAttribute("aria-expanded",!e),t.mobileMenu.classList.toggle("is-open");o[e?"enableBodyScroll":"disableBodyScroll"](document.body)};t.openMenuBtn.addEventListener("click",e),t.closeMenuBtn.addEventListener("click",e),window.matchMedia("(min-width: 768px)").addEventListener("change",(e=>{e.matches&&(t.mobileMenu.classList.remove("is-open"),t.openMenuBtn.setAttribute("aria-expanded",!1),o.enableBodyScroll(document.body))}))})();const g=document.querySelector(".pop-list");fetch("https://tasty-treats-backend.p.goit.global/api/recipes/popular").then((e=>{if(!e.ok)throw new Error(e.statusText);return e.json()})).then((e=>{g.innerHTML=e.map((e=>`<li class="pop-item">\n    <img class="pop-img" src="${e.preview}" alt="a">\n    <div class="pop-info">\n    <h3>${e.title}</h3>\n      <p>${e.description}</p>\n    </div>`)).join("")}));const b=document.querySelector("cat-btn"),E=document.querySelector(".cat-list");function L(){window.removeEventListener("keydown",S),document.body.classList.remove("show-modal-order-now")}function S(e){"Escape"===e.code&&L()}fetch("https://tasty-treats-backend.p.goit.global/api/categories").then((e=>{if(!e.ok)throw new Error(e.statusText);return e.json()})).then((e=>{E.innerHTML=e.map((e=>`<li class="cat-item"><button class="cat-opt" value="${e._id}">${e.name}</button></li>`)).join("")})),b.addEventListener("click"),t.openButtonEl.addEventListener("click",(function(){window.addEventListener("keydown",S),document.body.classList.add("show-modal-order-now")})),t.closeButtonEl.addEventListener("click",L),t.backdropEl.addEventListener("click",(function(e){e.currentTarget===e.target&&L()}));
//# sourceMappingURL=index.9c2175b6.js.map
