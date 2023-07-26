var player,closeSVG=document.querySelector(".close-recipe-svg"),backDrop=document.querySelector(".backdrop-popup-recipe"),popUp=document.querySelector(".pop-up-recipe"),videoContainer=document.querySelector("#video-container"),BASE_URL_POPUP="https://tasty-treats-backend.p.goit.global/api/recipes/",SECOND_URL="https://tasty-treats-backend.p.goit.global/api/ingredients",API_KEY="AIzaSyAX44YCtOJPGkNiZtRXagJevTZUvVOUYVc";function getRandomIndex(e){return Math.floor(Math.random()*e)}function fetchRecipeData(){Promise.all([fetch(BASE_URL_POPUP),fetch(SECOND_URL)]).then((function(e){return Promise.all(e.map((function(e){return e.json()})))})).then((function(e){var t=e[0].results,n=e[1],o=document.querySelector(".pop-up-recipe-header"),a=document.querySelector(".recipe-description"),c=document.querySelector(".tags-buttons");c.innerHTML="";var i=document.querySelector(".recipe-list");i.innerHTML="";var r=document.querySelector(".rating-value"),d=document.querySelector(".span-time"),l=t[getRandomIndex(t.length)],p=l.title,s=getYouTubeVideoId(l.youtube),u="https://www.youtube.com/embed/".concat(s,"?enablejsapi=1&origin=https://your-origin.com&modestbranding=1&rel=0&autoplay=1&showinfo=0&controls=1&mute=0&loop=0&iv_load_policy=3&cc_load_policy=1&start=0&theme=light&color=white&fs=1&autohide=2&enablejsapi=1"),m=l.instructions,y=l.tags,f=l.ingredients,v=l.rating,g=l.time;(r.textContent=v,d.textContent="".concat(g," min"),a.textContent=m,o.textContent=p,f.forEach((function(e){var t=n.find((function(t){return t._id===e.id}));t&&(e.name=t.name)})),f.forEach((function(e){var t=document.createElement("li"),n=document.createElement("span");n.textContent=e.name,n.classList.add("ingredient-name");var o=document.createElement("span");o.textContent=e.measure,o.classList.add("measure-content"),t.classList.add("recipe-item"),t.appendChild(n),t.appendChild(o),i.appendChild(t)})),y.length>0)&&(y.forEach((function(e){var t=document.createElement("button");t.textContent="#".concat(e),t.classList.add("tag-btn"),c.appendChild(t)})),document.querySelectorAll(".tags-buttons .tag-btn").forEach((function(e){e.style.display="inline-block"})));createYouTubePlayer(u)})).catch((function(e){return console.log(e.message)}))}function onClickSVG(){stopVideoAndCloseModal()}function onClickBackDrop(e){e.target===backDrop&&stopVideoAndCloseModal()}function onDocumentKeyDown(e){"Escape"===e.key&&(popUp.style.display="none",backDrop.style.display="none")}function stopVideoAndCloseModal(){void 0!==player&&"function"==typeof player.stopVideo&&player.stopVideo(),popUp.style.display="none",backDrop.style.display="none"}function createYouTubePlayer(e){player=new YT.Player("video-container",{videoId:getYouTubeVideoId(e),playerVars:{},events:{onStateChange:onPlayerStateChange}})}function onPlayerStateChange(e){e.data===YT.PlayerState.PLAYING?player.getIframe().contentWindow.addEventListener("keydown",onPlayerKeyDown):player.getIframe().contentWindow.removeEventListener("keydown",onPlayerKeyDown)}function getYouTubeVideoId(e){var t=e.match(/(?:\?v=|\/embed\/|\.be\/)([\w\-]{11})/);return t?t[1]:null}function onFavouriteBtnClick(){var e=document.querySelector(".btn-add-favourite");e.classList.contains("favourite-popup-recipe")?(e.classList.remove("favourite-popup-recipe"),e.textContent="Add to Favorite"):(e.classList.add("favourite-popup-recipe"),e.textContent="Remove from favorite")}closeSVG.addEventListener("click",onClickSVG),backDrop.addEventListener("click",onClickBackDrop),document.addEventListener("keydown",onDocumentKeyDown),document.querySelector(".btn-add-favourite").addEventListener("click",onFavouriteBtnClick);var seeRecipe=document.querySelector(".recipe_desc_btn");function onClickRecipeDescrBtn(){popUpRecipe.classList.add("show-modal"),backdropPopupRecipe.classList.add("show-modal")}seeRecipe.addEventListener("click",onClickRecipeDescrBtn),fetchRecipeData();
//# sourceMappingURL=index.de612023.js.map