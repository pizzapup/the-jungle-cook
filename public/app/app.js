function initListeners() {
  $(".bars").click(function (e) {
    $(".bars").toggleClass("active");
    $(".links").toggleClass("active");
  });
  $(".links a").click(function (e) {
    $(".bars").toggleClass("active");
    $(".links").toggleClass("active");
  });
}

/* ------------------------------------------------------ */
/* ----------------------- footer ----------------------- */
$("#footer-content").html(`
<div class="footer-content">
<div class="copyright-footer">Copyright © 2019 The Jungle Cook</div>
<div class="footer-links">
  <a href="login.html">Login</a>
  <a href="browse.html">Recipes by Category</a>
  <a href="#">Privacy and Copyright</a>
  <a href="create-recipe.html">Create Recipe</a>
  <a href="view-recipe.html">Your Recipes</a>
</div>
  <div class="social facebook">
    <a href="#"
      ><img src="images/facebook.svg" alt="Facebook.com"
    /></a>
  </div>
  <div class="social facebook">
    <a href="#"
      ><img src="images/instagram.svg" alt="instagram.com"
    /></a>
  </div>
</div>`);

/* --------------------- navigation --------------------- */
$("#navigation-bar").html(`
<!-- ---------------- logo ----------------- -->
<a href="index.html">
<div id="logo-title" class="page-title-norm">
  <span class="circle blue"></span>
  <span class="circle yellow"></span>
  <span class="circle green"></span>
  <span class="circle pink"></span>
  <h1>The Jungle Cook</h1>
</div>
</a>
<div class="nav-holder">
<div class="bars">
  <span class="bar"></span>
  <span class="bar"></span>
  <span class="bar"></span>
</div>
<div class="links">
  <a href="index.html" class="not-current-link">Home</a>
  <a href="browse.html" class="not-current-link">Browse</a>
  <a href="create-recipe.html" class="not-current-link"
    >Create Recipe</a
  >
  <a href="view-recipe.html" class="current-page">Your Recipe</a>
  <a href="login.html" class="login-button"><span>Logout</span></a>
</div>
</div>
`);
/* ------------------------------------------------------ */
$(document).ready(function () {
  initListeners();
});
