!function(e){var n={};function t(o){if(n[o])return n[o].exports;var i=n[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,t),i.l=!0,i.exports}t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:o})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var i in e)t.d(o,i,function(n){return e[n]}.bind(null,i));return o},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=0)}([function(e,n,t){"use strict";var o=t(1),i=t(2),r=t(58);t(52),t(3),(0,o.initHeader)(),(0,i.slider)(),setTimeout(function(){},500)},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.initHeader=function(){var e=document.getElementById("header"),n=document.getElementById("hamburger"),t=(document.getElementById("navigation"),document.getElementById("navigation-links-list")),o=e.querySelector(".header-right");window.scrollY;n.addEventListener("click",(function(n){if(e.classList.contains("expanded"))e.classList.remove("expanded"),e.style.height="";else{e.classList.add("expanded");var i=o.getBoundingClientRect(),r=t.getBoundingClientRect();e.style.height=+r.bottom+i.height+20+"px"}})),window.addEventListener("resize",(function(){console.log("resizeHandle"),window.scrollY,window.innerWidth>=1024&&(e.style.height="",e.classList.remove("expanded"))}))}},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});n.slider=function(){var e=setInterval((function(){"undefined"!=typeof jQuery&&void 0!==jQuery().slick&&(clearInterval(e),n())}),250),n=function(){$(".slider-slides").slick({infinite:!0,slidesToShow:3,prevArrow:$(".slider-arrow_left"),nextArrow:$(".slider-arrow_right"),responsive:[{breakpoint:1024,settings:{slidesToShow:2}},{breakpoint:600,settings:{slidesToShow:1}}]})},t=document.getElementById("photo-popup"),o=document.getElementById("popup-image");if(t&&o){var i=function(e){console.log("setPopupImage"),o.src=e,console.log("showPopup"),t.classList.add("show")};t.addEventListener("click",(function(){console.log("closePopup"),t.classList.remove("show")})),[].slice.call(document.querySelectorAll(".slider-slides .slide-wrapper")).forEach((function(e){e.addEventListener("click",(function(n){i(e.querySelector(".slide-image").src)}))}))}}},function(e,n,t){"use strict";t(4),t(5),t(6),t(7),t(8),t(9),t(10),t(11),t(57),t(12);for(var o=1;o<=17;o++)t(13)("./feature-icon_"+o+".png");t(35),t(36),t(37),t(38),t(39),t(40),t(41),t(42);for(var i=1;i<=3;i++)t(43)("./slider_"+i+".jpg");t(47),t(48),t(49),t(50),t(51)},function(e,n,t){e.exports=t.p+"media/logo.png"},function(e,n,t){e.exports=t.p+"media/facebook-icon_white.png"},function(e,n,t){e.exports=t.p+"media/facebook-icon_black.png"},function(e,n,t){e.exports=t.p+"media/messenger-icon_black.png"},function(e,n,t){e.exports=t.p+"media/messenger-icon_white.png"},function(e,n,t){e.exports=t.p+"media/phone-icon_white.png"},function(e,n,t){e.exports=t.p+"media/phone-icon_black.png"},function(e,n,t){e.exports=t.p+"media/home-page-house.jpg"},function(e,n,t){e.exports=t.p+"media/about-us-top-house.jpg"},function(e,n,t){var o={"./feature-icon_1.png":14,"./feature-icon_10.png":15,"./feature-icon_11.png":16,"./feature-icon_12.png":17,"./feature-icon_13.png":18,"./feature-icon_14.png":19,"./feature-icon_15.png":20,"./feature-icon_16.png":21,"./feature-icon_17.png":22,"./feature-icon_18.png":23,"./feature-icon_19.png":24,"./feature-icon_2.png":25,"./feature-icon_20.png":26,"./feature-icon_21.png":27,"./feature-icon_3.png":28,"./feature-icon_4.png":29,"./feature-icon_5.png":30,"./feature-icon_6.png":31,"./feature-icon_7.png":32,"./feature-icon_8.png":33,"./feature-icon_9.png":34};function i(e){var n=r(e);return t(n)}function r(e){if(!t.o(o,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return o[e]}i.keys=function(){return Object.keys(o)},i.resolve=r,e.exports=i,i.id=13},function(e,n,t){e.exports=t.p+"media/feature-icon_1.png"},function(e,n,t){e.exports=t.p+"media/feature-icon_10.png"},function(e,n,t){e.exports=t.p+"media/feature-icon_11.png"},function(e,n,t){e.exports=t.p+"media/feature-icon_12.png"},function(e,n,t){e.exports=t.p+"media/feature-icon_13.png"},function(e,n,t){e.exports=t.p+"media/feature-icon_14.png"},function(e,n,t){e.exports=t.p+"media/feature-icon_15.png"},function(e,n,t){e.exports=t.p+"media/feature-icon_16.png"},function(e,n,t){e.exports=t.p+"media/feature-icon_17.png"},function(e,n,t){e.exports=t.p+"media/feature-icon_18.png"},function(e,n,t){e.exports=t.p+"media/feature-icon_19.png"},function(e,n,t){e.exports=t.p+"media/feature-icon_2.png"},function(e,n,t){e.exports=t.p+"media/feature-icon_20.png"},function(e,n,t){e.exports=t.p+"media/feature-icon_21.png"},function(e,n,t){e.exports=t.p+"media/feature-icon_3.png"},function(e,n,t){e.exports=t.p+"media/feature-icon_4.png"},function(e,n,t){e.exports=t.p+"media/feature-icon_5.png"},function(e,n,t){e.exports=t.p+"media/feature-icon_6.png"},function(e,n,t){e.exports=t.p+"media/feature-icon_7.png"},function(e,n,t){e.exports=t.p+"media/feature-icon_8.png"},function(e,n,t){e.exports=t.p+"media/feature-icon_9.png"},function(e,n,t){e.exports=t.p+"media/about-us-download-plan-house.jpg"},function(e,n,t){e.exports=t.p+"media/download-icon.png"},function(e,n,t){e.exports=t.p+"media/about-us-interior_1.jpg"},function(e,n,t){e.exports=t.p+"media/about-us-interior_2.jpg"},function(e,n,t){e.exports=t.p+"media/about-us-architecture.jpg"},function(e,n,t){e.exports=t.p+"media/about-us-map.jpg"},function(e,n,t){e.exports=t.p+"media/play-icon.png"},function(e,n,t){e.exports=t.p+"media/key-icon.png"},function(e,n,t){var o={"./slider_1.jpg":44,"./slider_2.jpg":45,"./slider_3.jpg":46};function i(e){var n=r(e);return t(n)}function r(e){if(!t.o(o,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return o[e]}i.keys=function(){return Object.keys(o)},i.resolve=r,e.exports=i,i.id=43},function(e,n,t){e.exports=t.p+"media/slider_1.jpg"},function(e,n,t){e.exports=t.p+"media/slider_2.jpg"},function(e,n,t){e.exports=t.p+"media/slider_3.jpg"},function(e,n,t){e.exports=t.p+"media/plus.png"},function(e,n,t){e.exports=t.p+"media/slider-arrow_left.png"},function(e,n,t){e.exports=t.p+"media/slider-arrow_right.png"},function(e,n,t){e.exports=t.p+"media/phone-icon_footer.png"},function(e,n,t){e.exports=t.p+"media/mail-icon_footer.png"},function(e,n){},,,,,function(e,n,t){e.exports=t.p+"media/home-page-parallax-house.jpg"},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});n.initParallax=function(){var e=document.getElementById("home-page-house-wrapper"),n=document.getElementById("home-page-house");if(console.log("bef"),e&&n){console.log("aft");var t=e.offsetWidth,o=e.offsetHeight,i=Math.floor(n.offsetWidth)-t,r=Math.floor(n.offsetHeight)-o,p=window.innerWidth<=1024||t>n.offsetWidth,a=function(e,a){var c=Math.ceil((t-e)/t*i)-i/1.5,u=Math.ceil((o-a)/o*r-r/2);window.requestAnimationFrame((function(){n.style.transform=p?"":"translateY(-50%) translate("+-c+"px, "+-u+"px)"}))};e.addEventListener("mousemove",(function(e){a(e.clientX,e.clientY)})),e.addEventListener("mouseenter",(function(e){a(e.clientX,e.clientY)})),window.addEventListener("resize",(function(){t=e.offsetWidth,o=e.offsetHeight,i=Math.floor(n.offsetWidth)-t,r=Math.floor(n.offsetHeight)-o,p=window.innerWidth<=1024||t>n.offsetWidth}))}}}]);