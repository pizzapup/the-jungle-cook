//

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
        console.log("NAV URL", _userProfileInfo);
        console.log("NAV URL");
        if (_userProfileInfo.firstName) {
          $(".user-greeting").html(
            `${_userProfileInfo.firstName}` +
              ` ` +
              `${_userProfileInfo.lastName}`
          );
          // $(".user-greeting").html(`${_userProfileInfo}`);
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
