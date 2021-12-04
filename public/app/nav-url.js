//
/* ------------- hashchange sets hero class ------------- */
function changeRoute() {
  let hashTag = window.location.hash;
  console.log(hashTag);
  let pageID = hashTag.replace("#", "");
  let currentHero = $("#heroWrapper").attr("class");
  console.log("current hero: ", currentHero);
  if (pageID != "") {
    $("#heroWrapper").attr("class", pageID);
  } else {
    $("#heroWrapper").attr("class", "home");
  }
  //   $("nav a").click(function (e) {
  //     e.preventDefault();
  //     $("a").removeClass("current-page");
  //     $(this).addClass("current-page");
  //   });
}
function initURLListener() {
  window.onhashchange = changeRoute;
  changeRoute();
  console.log(changeRoute);
}
$(document).ready(function () {
  initURLListener();
  //   setNavigation();
});
