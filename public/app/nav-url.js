//
/* ------------- hashchange sets hero class ------------- */

function changeRoute() {
  let hashTag = window.location.hash;
  let pageID = hashTag.replace("#", "");
  let currentHero = $("#heroWrapper").attr("class");

  if (pageID != "") {
    $.get(`${pageID}.html`, function (data) {
      console.log("data " + data);
      $("#pageContentApp").html(data);
    });
    if (pageID != "login") {
      $("#heroWrapper").attr("class", pageID);
      console.log(
        "Hero changed. Previous: " + currentHero + ". New: " + pageID
      );
      $("body").removeClass("login");
    } else {
      console.log("hero not changed");
      $("#heroWrapper").attr("class", pageID);
    }
  } else {
    $.get(`home.html`, function (data) {
      console.log("data " + data);
      $("#pageContentApp").html(data);
    });
  }
}
function initURLListener() {
  window.onhashchange = changeRoute;
  changeRoute();
}
$(document).ready(function () {
  initURLListener();
});
