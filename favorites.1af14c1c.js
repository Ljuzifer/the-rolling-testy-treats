!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},a=t.parcelRequired7c6;null==a&&((a=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var a={id:e,exports:{}};return n[e]=a,t.call(a.exports,a,a.exports),a.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){r[e]=t},t.parcelRequired7c6=a),a("32ZrB"),a("cBJFL"),a("io1Sh"),a("4J3Ot");var i=a("8nrFW"),o=localStorage.getItem("selectedRecipes");if(o&&0!==JSON.parse(o).length){document.getElementById("fav-recipe-list").classList.remove("fav-hide"),document.getElementById("empty-favorites").style.display="none";var l=JSON.parse(o),c=e(i)(new Set(l.map((function(e){return e.category})))),s=document.getElementById("category-filter-container");function d(e){var t=e?l.filter((function(t){return t.category===e})):l,n=document.getElementById("fav-recipe-list"),r=t.map((function(e){return'\n            <li class="fav-recipe-list-item">\n              <img class="fav-recipe-card-img" src="'.concat(e.preview,'" alt="').concat(e.title,'" />\n              <button class="fav-on-favorite-button" data-recipe-id="').concat(e._id,'" type="button">\n              <svg class="icon-heart" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">\n                <path fill-rule="evenodd" clip-rule="evenodd" d="M10.9939 4.70783C9.16115 2.5652 6.10493 1.98884 3.80863 3.95085C1.51234 5.91285 1.18905 9.19323 2.99234 11.5137C4.49166 13.443 9.02912 17.5121 10.5163 18.8291C10.6826 18.9764 10.7658 19.0501 10.8629 19.0791C10.9475 19.1043 11.0402 19.1043 11.1249 19.0791C11.2219 19.0501 11.3051 18.9764 11.4715 18.8291C12.9586 17.5121 17.4961 13.443 18.9954 11.5137C20.7987 9.19323 20.5149 5.89221 18.1791 3.95085C15.8434 2.00948 12.8266 2.5652 10.9939 4.70783Z" fill="white"/>\n              </svg>\n              </button>\n              <h3 class="fav-recipe-card-title">').concat(e.title,'</h3>\n              <p class="fav-recipe-card-descr">').concat(e.description,'</p>\n              <div>\n                <p class="fav-recipe-card-rating">').concat(e.rating,'</p>\n                <button class="fav-see-recipe-button" type="button">See recipe</button>\n              </div>\n            </li>\n          ')}));n.innerHTML=r.join("");var a=document.getElementsByClassName("fav-on-favorite-button"),i=!0,o=!1,c=void 0;try{for(var s,d=a[Symbol.iterator]();!(i=(s=d.next()).done);i=!0){s.value.addEventListener("click",f)}}catch(e){o=!0,c=e}finally{try{i||null==d.return||d.return()}finally{if(o)throw c}}}function f(e){var t=e.target.dataset.recipeId;l=l.filter((function(e){return e._id!==t})),localStorage.setItem("selectedRecipes",JSON.stringify(l)),d()}function u(){var e=document.getElementsByClassName("fav-category-filter-button"),t=!0,n=!1,r=void 0;try{for(var a,i=e[Symbol.iterator]();!(t=(a=i.next()).done);t=!0){a.value.classList.remove("active")}}catch(e){n=!0,r=e}finally{try{t||null==i.return||i.return()}finally{if(n)throw r}}d()}function v(e){var t=document.getElementsByClassName("fav-category-filter-button"),n=!0,r=!1,a=void 0;try{for(var i,o=t[Symbol.iterator]();!(n=(i=o.next()).done);n=!0){i.value.classList.remove("active")}}catch(e){r=!0,a=e}finally{try{n||null==o.return||o.return()}finally{if(r)throw a}}var l=e.target.dataset.category;e.target.classList.add("active"),d(l)}!function(){var e=document.createElement("button");e.classList.add("fav-category-filter-button"),e.textContent="All categories",e.addEventListener("click",u),s.appendChild(e);var t=c.map((function(e){return'\n          <button class="fav-category-filter-button" data-category="'.concat(e,'">').concat(e,"</button>\n        ")})).join("");s.innerHTML+=t}();var y=document.getElementsByClassName("fav-category-filter-button"),p=!0,m=!1,g=void 0;try{for(var b,h=y[Symbol.iterator]();!(p=(b=h.next()).done);p=!0){b.value.addEventListener("click",v)}}catch(w){m=!0,g=w}finally{try{p||null==h.return||h.return()}finally{if(m)throw g}}d()}else document.getElementById("fav-recipe-list").classList.add("fav-hide"),document.getElementById("empty-favorites").style.display="flex"}();
//# sourceMappingURL=favorites.1af14c1c.js.map
