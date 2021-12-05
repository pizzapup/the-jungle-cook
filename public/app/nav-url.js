//

//
/* --------- changeRoute() based on hash change: -------- */
function changeRoute() {
  let hashTag = window.location.hash;
  let pageID = hashTag.replace("#", "");
  let currentHero = $("#heroWrapper").attr("class");
  if (pageID != "") {
    $("#heroWrapper").attr("class", pageID);

    // if (pageID == "browse") {
    //   loadRecipes();
    //   console.log("loaded browse recipes");

    // if (pageID == "your-recipe") {
    // yourRecipes(_userProfileInfo.recipes);
    // console.log("loaded your recipes");
    // }
    if (pageID != "view-recipe") {
      $.get(`${pageID}.html`, function (data) {
        $("#pageContentApp").html(data);
      });
    }
  } else {
    $.get(`home.html`, function (data) {
      $("#pageContentApp").html(data);
    });
  }
}
function initURLListener() {
  window.onhashchange = changeRoute;
  changeRoute();
}

/* ------------------------------------------------------ */

$(document).ready(function () {
  initURLListener();
});
