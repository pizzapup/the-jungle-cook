function changeHero() {
  let hashTag = window.location.hash;
  //   console.log(hashTag);
  let pageID = hashTag.replace("#", "");
  console.log(hashTag + " " + pageID);
  console.log("page id: " + pageID);
  $("#heroWrapper").attr("class", `${pageID}Hero`);
}

function initURLListener() {
  window.onhashchange = changeHero;
  changeHero();
  console.log(changeHero);
}
$(document).ready(function () {
  initURLListener();
});
