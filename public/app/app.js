/* ------------------------------------------------------ */
/*                       HASHCHANGE                       */
/* ------------------------------------------------------ */
//
/* --------- changeRoute() based on hash change: -------- */
function changeRoute() {
  let hashTag = window.location.hash;
  let pageID = hashTag.replace("#", "");
  let currentHero = $("#heroWrapper").attr("class");
  if (pageID != "") {
    $("#heroWrapper").attr("class", pageID);
    if (pageID != "view-recipe") {
      $.get(`${pageID}.html`, function (data) {
        $("#pageContentApp").html(data);
        if ((pageID = "browse")) {
          $(".loadRButtn").click();
        }
        if (_userProfileInfo.firstName) {
          $(".loadRButtn").prop("disabled", true);
          $(".createRecipeSubmit").prop("disabled", true);

          $(".user-greeting").html(
            `${_userProfileInfo.firstName}` +
              ` ` +
              `${_userProfileInfo.lastName}`
          );
          //
        }
        if ((pageID = "your-recipe")) {
          $(".loadRButtn").click();
        }
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
