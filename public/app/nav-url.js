function changeRoute() {
  let hashTag = window.location.hash;
  console.log(hashTag);
  let pageID = hashTag.replace("#", "");
  console.log(hashTag + " " + pageID);

  if (pageID != "") {
    $.get(`pages/${pageID}/${pageID}.html`, function (data) {
      console.log("data " + data);
      $("#page-app").html(data);
    });
    console.log(data);
  } else {
    $.get(`pages/home/home.html`, function (data) {
      console.log("data " + data);
      $("#page-app").html(data);
    });
  }
}
function initURLListener() {
  window.onhashchange = changeRoute;
  changeRoute();
  console.log(changeRoute);
}
$(document).ready(function () {
  initURLListener();
});
