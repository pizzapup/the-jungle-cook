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
  <a href="login.html#login">Login</a>
  <a href="browse.html#browse">Recipes by Category</a>
  <a href="">Privacy and Copyright</a>
  <a href="create-recipe.html#create-recipe">Create Recipe</a>
  <a href="view-recipe.html#">Your Recipes</a>
</div>
  <div class="social facebook">
    <a href=""
      ><img src="images/facebook.svg" alt="Facebook.com"
    /></a>
  </div>
  <div class="social facebook">
    <a href=""
      ><img src="images/instagram.svg" alt="instagram.com"
    /></a>
  </div>
</div>`);

/* --------------------- navigation --------------------- */
$(".navigation-bar").html(`
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
<a href="index.html#home">Home</a>
<a href="browse.html#browse">Browse</a>
<a href="create-recipe.html#create-recipe">Create Recipe</a>
<a href="your-recipe.html#youre-recipe">Your Recipe</a>
<a href="login.html#login" class="login-button">Login</a>
</div>
</div>
`);
/* ------------------------------------------------------ */

$(document).ready(function () {
  initListeners();
});

/* ------------------------------------------------------ */
// <a href="index.html">Home</a>
// <a href="browse.html">Browse</a>
// <a href="create-recipe.html">Create Recipe</a>
// <a href="your-recipe.html">Your Recipe</a>
// <a href="login.html" class="login-button">Login</a>

// //
// <a href="#home">Home</a>
// <a href="#browse">Browse</a>
// <a href="#create-recipe">Create Recipe</a>
// <a href="#your-recipe">Your Recipe</a>
// <a href="#login" class="login-button">Login</a>
// //

//   <div class="footer-links">
//   <a href="login.html">Login</a>
//   <a href="browse.html">Recipes by Category</a>
//   <a href="">Privacy and Copyright</a>
//   <a href="create-recipe.html">Create Recipe</a>
//   <a href="view-recipe.html">Your Recipes</a>
// </div>

// //
// <div class="footer-links">
//   <a href="#login">Login</a>
//   <a href="#browse">Recipes by Category</a>
//   <a href="">Privacy and Copyright</a>
//   <a href="#create-recipe">Create Recipe</a>
//   <a href="#view-recipe">Your Recipes</a>
// </div>
// //
