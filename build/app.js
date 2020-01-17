!function(e){var n={};function t(o){if(n[o])return n[o].exports;var i=n[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,t),i.l=!0,i.exports}t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:o})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var i in e)t.d(o,i,function(n){return e[n]}.bind(null,i));return o},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=0)}([function(e,n,t){"use strict";var o=t(1),i=t(2),r=t(3);t(70),t(4),(0,o.initHeader)(),(0,i.slider)(),(0,r.map)()},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.initHeader=function(){var e=document.getElementById("header"),n=document.getElementById("hamburger"),t=(document.getElementById("navigation"),document.getElementById("navigation-links-list")),o=e.querySelector(".header-right");window.scrollY;n.addEventListener("click",(function(n){if(e.classList.contains("expanded"))e.classList.remove("expanded"),e.style.height="";else{e.classList.add("expanded");var i=o.getBoundingClientRect(),r=t.getBoundingClientRect();e.style.height=+r.bottom+i.height+20+"px"}})),window.addEventListener("resize",(function(){console.log("resizeHandle"),window.scrollY,window.innerWidth>=1024&&(e.style.height="",e.classList.remove("expanded"))}))}},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});n.slider=function(){var e=setInterval((function(){"undefined"!=typeof jQuery&&void 0!==jQuery().slick&&(clearInterval(e),n())}),250),n=function(){$(".slider-slides").slick({infinite:!0,slidesToShow:3,prevArrow:$(".slider-arrow_left"),nextArrow:$(".slider-arrow_right"),responsive:[{breakpoint:1024,settings:{slidesToShow:2}},{breakpoint:600,settings:{slidesToShow:1}}]})},t=document.getElementById("photo-popup"),o=document.getElementById("popup-image");if(t&&o){var i=function(){console.log("closePopup"),t.classList.remove("show")},r=function(e){console.log("setPopupImage"),o.src=e,console.log("showPopup"),t.classList.add("show")};t.addEventListener("click",i),document.addEventListener("keyup",(function(e){"Escape"===e.key&&i()})),document.querySelector(".slider-slides").addEventListener("click",(function(e){var n=e.target.querySelector(".slide-image");n&&r(n.src)}))}}},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});n.map=function(){var e,n=document.getElementById("gmap_canvas"),t=function(e){var n=e.split(/[\°\'\"']/);return 4!==n.length?null:(parseInt(n[0])+parseInt(n[1])/60+parseFloat(n[2])/60/60)*(null!==n[3].match(/[en]/i)?1:-1)},o=function(e){var o;e&&(n.src="https://maps.google.com/maps?\n        &ll="+t("52°22'34.4\"N")+","+t("17°03'54.8\"E")+"\n        &q="+encodeURI(e)+"&z=14&ie=UTF8&iwloc=&output=embed",window.innerWidth<=1024&&(o=n.getBoundingClientRect(),window.scroll({top:o.bottom-o.height+window.scrollY-100,behavior:"smooth"})))};(e=document.getElementById("map-list"))&&e.addEventListener("click",(function(e){console.log(e.target,e.target.dataset.query),o(e.target.dataset.query)}))}},function(e,n,t){"use strict";t(5),t(6),t(7),t(8),t(9),t(10),t(11),t(12),t(13),t(14);for(var o=1;o<=17;o++)t(15)("./feature-icon_"+o+".png");t(37),t(38),t(39),t(40),t(41),t(42),t(43),t(44);for(var i=1;i<=3;i++)t(45)("./slider_"+i+".jpg");t(51),t(52),t(53),t(54),t(55),t(56),t(57),t(58),t(59),t(60),t(61),t(62),t(63),t(64),t(65),t(66),t(67),t(68),t(69)},function(e,n,t){e.exports=t.p+"media/logo.png"},function(e,n,t){e.exports=t.p+"media/facebook-icon_white.png"},function(e,n,t){e.exports=t.p+"media/facebook-icon_black.png"},function(e,n,t){e.exports=t.p+"media/messenger-icon_black.png"},function(e,n,t){e.exports=t.p+"media/messenger-icon_white.png"},function(e,n,t){e.exports=t.p+"media/phone-icon_white.png"},function(e,n,t){e.exports=t.p+"media/phone-icon_black.png"},function(e,n,t){e.exports=t.p+"media/home-page-house.jpg"},function(e,n,t){e.exports=t.p+"media/home-page-parallax-house.jpg"},function(e,n,t){e.exports=t.p+"media/about-us-top-house.jpg"},function(e,n,t){var o={"./feature-icon_1.png":16,"./feature-icon_10.png":17,"./feature-icon_11.png":18,"./feature-icon_12.png":19,"./feature-icon_13.png":20,"./feature-icon_14.png":21,"./feature-icon_15.png":22,"./feature-icon_16.png":23,"./feature-icon_17.png":24,"./feature-icon_18.png":25,"./feature-icon_19.png":26,"./feature-icon_2.png":27,"./feature-icon_20.png":28,"./feature-icon_21.png":29,"./feature-icon_3.png":30,"./feature-icon_4.png":31,"./feature-icon_5.png":32,"./feature-icon_6.png":33,"./feature-icon_7.png":34,"./feature-icon_8.png":35,"./feature-icon_9.png":36};function i(e){var n=r(e);return t(n)}function r(e){if(!t.o(o,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return o[e]}i.keys=function(){return Object.keys(o)},i.resolve=r,e.exports=i,i.id=15},function(e,n,t){e.exports=t.p+"media/feature-icon_1.png"},function(e,n,t){e.exports=t.p+"media/feature-icon_10.png"},function(e,n,t){e.exports=t.p+"media/feature-icon_11.png"},function(e,n,t){e.exports=t.p+"media/feature-icon_12.png"},function(e,n,t){e.exports=t.p+"media/feature-icon_13.png"},function(e,n,t){e.exports=t.p+"media/feature-icon_14.png"},function(e,n,t){e.exports=t.p+"media/feature-icon_15.png"},function(e,n,t){e.exports=t.p+"media/feature-icon_16.png"},function(e,n,t){e.exports=t.p+"media/feature-icon_17.png"},function(e,n,t){e.exports=t.p+"media/feature-icon_18.png"},function(e,n,t){e.exports=t.p+"media/feature-icon_19.png"},function(e,n,t){e.exports=t.p+"media/feature-icon_2.png"},function(e,n,t){e.exports=t.p+"media/feature-icon_20.png"},function(e,n,t){e.exports=t.p+"media/feature-icon_21.png"},function(e,n,t){e.exports=t.p+"media/feature-icon_3.png"},function(e,n,t){e.exports=t.p+"media/feature-icon_4.png"},function(e,n,t){e.exports=t.p+"media/feature-icon_5.png"},function(e,n,t){e.exports=t.p+"media/feature-icon_6.png"},function(e,n,t){e.exports=t.p+"media/feature-icon_7.png"},function(e,n,t){e.exports=t.p+"media/feature-icon_8.png"},function(e,n,t){e.exports=t.p+"media/feature-icon_9.png"},function(e,n,t){e.exports=t.p+"media/about-us-download-plan-house.jpg"},function(e,n,t){e.exports=t.p+"media/download-icon.png"},function(e,n,t){e.exports=t.p+"media/about-us-interior_1.jpg"},function(e,n,t){e.exports=t.p+"media/about-us-interior_2.jpg"},function(e,n,t){e.exports=t.p+"media/about-us-architecture.jpg"},function(e,n,t){e.exports=t.p+"media/about-us-map.jpg"},function(e,n,t){e.exports=t.p+"media/play-icon.png"},function(e,n,t){e.exports=t.p+"media/key-icon.png"},function(e,n,t){var o={"./slider_1.jpg":46,"./slider_2.jpg":47,"./slider_3.jpg":48,"./slider_4.jpg":49,"./slider_5.jpg":50};function i(e){var n=r(e);return t(n)}function r(e){if(!t.o(o,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return o[e]}i.keys=function(){return Object.keys(o)},i.resolve=r,e.exports=i,i.id=45},function(e,n,t){e.exports=t.p+"media/slider_1.jpg"},function(e,n,t){e.exports=t.p+"media/slider_2.jpg"},function(e,n,t){e.exports=t.p+"media/slider_3.jpg"},function(e,n,t){e.exports=t.p+"media/slider_4.jpg"},function(e,n,t){e.exports=t.p+"media/slider_5.jpg"},function(e,n,t){e.exports=t.p+"media/plus.png"},function(e,n,t){e.exports=t.p+"media/slider-arrow_left.png"},function(e,n,t){e.exports=t.p+"media/slider-arrow_right.png"},function(e,n,t){e.exports=t.p+"media/phone-icon_footer.png"},function(e,n,t){e.exports=t.p+"media/mail-icon_footer.png"},function(e,n,t){e.exports=t.p+"media/Dom_pod_Poznaniem_lok_1.pdf"},function(e,n,t){e.exports=t.p+"media/Dom_pod_Poznaniem_lok_2.pdf"},function(e,n,t){e.exports=t.p+"media/contact-header.jpg"},function(e,n,t){e.exports=t.p+"media/contact-header_mobile.jpg"},function(e,n,t){e.exports=t.p+"media/contact-phone-icon.png"},function(e,n,t){e.exports=t.p+"media/contact-mail-icon.png"},function(e,n,t){e.exports=t.p+"media/contact-facebook-icon.png"},function(e,n,t){e.exports=t.p+"media/contact-messenger-icon.png"},function(e,n,t){e.exports=t.p+"media/contact-site-icon.png"},function(e,n,t){e.exports=t.p+"media/actual-about-us-header.jpg"},function(e,n,t){e.exports=t.p+"media/actual-about-us-header_mobile.jpg"},function(e,n,t){e.exports=t.p+"media/actual-about-us-phone-icon.png"},function(e,n,t){e.exports=t.p+"media/actual-about-us-decency-icon.png"},function(e,n,t){e.exports=t.p+"media/actual-about-us-advise-icon.png"},function(e,n){}]);