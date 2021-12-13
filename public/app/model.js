/* ------------------------------------------------------ */
/*                      THEJUNGLECOOK                     */
/* ------------------------------------------------------ */
var _db = "";
var uid = "";
var userExists = false;
var userFullName = "";
var _userProfileInfo = {};
// recipes from prototype
var RECIPES = [
  {
    recipeTitle: `Supreme Pizza`,
    recipeDescription: `Make pizza night super duper out of this world with homemade pizza. This recipe is supreme with vegetables and two types of meat. Yum!`,
    // totalTimeHr: `1`,
    // totalTimeMin: `24`,
    totalTime: `1hr 24min`,
    totalServings: `4`,
    recipeImg: `recipe-pizza.png`,
    recipeImg2x: `recipe-pizza@2x.png`,
    ingredients: [
      {
        // ingredientAmt: "1/4 batch",
        // ingredientNotes: "n/a",
        ingredient: `1/4 batch pizza dough`,
      },
      {
        // ingredientAmt: "2 tablespoons",
        // ingredientNotes: "n/a",
        ingredient: `2 tablespoons Last-Minute Pizza Sauce`,
      },
      {
        // ingredientAmt: "10 slices",
        // ingredientNotes: "n/a",
        ingredient: `10 slice pepperoni`,
      },
      {
        // ingredientAmt: "2",
        // ingredientNotes: "n/a",
        ingredient: `2 large mushrooms, sliced`,
      },
      {
        // ingredientAmt: "1/4",
        // ingredientNotes: "n/a",
        ingredient: `1/4 bell pepper, sliced`,
      },
      {
        // ingredientAmt: "1 tablespoon",
        // ingredientNotes: "n/a",
        ingredient: `1 tablespoon sliced black olives`,
      },
    ],
    instructions: [
      {
        instruction: `Preheat the oven to 475°. Spray pizza pan with nonstick cooking or line a baking sheet with parchment paper.`,
      },
      {
        instruction: `Flatten dough into a thin round and place on the pizza pan`,
      },
      {
        instruction: `Spread pizza sauce over the dough.`,
      },
      {
        instruction: `Layer the toppings over the dough.`,
      },
      {
        instruction: `Bake for 8 to 10 minutes or until the crust is crisp and the cheese melted and lightly browned.`,
      },
    ],
  },
  {
    recipeTitle: `Classic Burger`,
    recipeDescription: `Sink your teeth into a delicious restaurant-style, hamburger
    recipe made from lean beef. Skip the prepackaged patties and
    take the extra time to craft up your own, and that little
    extra effort will be worth it.`,
    // totalTimeHr: `1`,
    // totalTimeMin: `24`,
    totalTimeMin: `1hr 24min`,
    totalServings: `4`,
    recipeImg: `recipe-burger.png`,
    recipeImg2x: `recipe-burger@2x.png`,
    ingredients: [
      {
        // ingredientAmt: "1/4 batch",
        // ingredientNotes: "n/a",
        ingredient: `Lorem, ipsum dolor.`,
      },
      {
        // ingredientAmt: "2 tablespoons",
        // ingredientNotes: "n/a",
        ingredient: `Lorem, ipsum dolor.`,
      },
    ],
    instructions: [
      {
        instruction: `Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Ea, laudantium!`,
      },
      {
        instruction: `Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Ea, laudantium!`,
      },
    ],
  },
  {
    recipeTitle: `Chicken Biryani`,
    recipeDescription: `Chicken Biryani is a bold and flavorful Indian dish with
    crazy tender bites of chicken with bell peppers in a
    deliciously spiced and fragrant rice.`,
    // totalTimeHr: `1`,
    // totalTimeMin: `15`,
    totalTime: `1hr 15min`,
    totalServings: `6`,
    recipeImg: `recipe-pilaf.png`,
    recipeImg2x: `recipe-pilaf@2x.png`,
    ingredients: [
      {
        // ingredientAmt: "1/4 batch",
        // ingredientNotes: "n/a",
        ingredient: `Lorem, ipsum dolor.`,
      },
      {
        // ingredientAmt: "2 tablespoons",
        // ingredientNotes: "n/a",
        ingredient: `Lorem, ipsum dolor.`,
      },
    ],
    instructions: [
      {
        instruction: `Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Ea, laudantium!`,
      },
      {
        instruction: `Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Ea, laudantium!`,
      },
    ],
  },
  {
    recipeTitle: `Ch. Chow Mein`,
    recipeDescription: `A great Chow Mein comes down to the sauce - it takes more
    than just soy sauce and sugar! Jam packed with a surprising
    amount of hidden vegetables, customize this Chicken Chow
    Mein recipe using your protein of choice!`,
    // totalTimeHr: `0`,
    // totalTimeMin: `20`,
    totalTimeMin: `1hr 20min`,
    totalServings: `4`,
    recipeImg: `recipe-chowmein.png`,
    recipeImg2x: `recipe-chowmein@2x.png`,
    ingredients: [
      {
        // ingredientAmt: "1/4 batch",
        // ingredientNotes: "n/a",
        ingredient: `Lorem, ipsum dolor.`,
      },
      {
        // ingredientAmt: "2 tablespoons",
        // ingredientNotes: "n/a",
        ingredient: `Lorem, ipsum dolor.`,
      },
    ],
    instructions: [
      {
        instruction: `Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Ea, laudantium!`,
      },
      {
        instruction: `Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Ea, laudantium!`,
      },
    ],
  },
];
var currentList = "";
/* ------------------------------------------------------ */
// window.onscroll = function () {
//   scrollFunction();
// };

// function scrollFunction() {
// if ($(window).width() > 960) {
// if (
// document.body.scrollTop > 20 ||
// document.documentElement.scrollTop > 20
// ) {
// document.getElementById("navbar").style.top = "0";
// changeNavStylesHam();
// } else {
// changeNavStylesReg();
// document.getElementById("navbar").style.top = "-50px";
// }
// }
// }

function hamburger() {
  $(".bars").click(function (e) {
    $(".bars").toggleClass("active");
    $(".links").toggleClass("active");
  });
  $(".links a").click(function (e) {
    $(".bars").toggleClass("active");
    $(".links").toggleClass("active");
  });
}

/* ------------------- footer content ------------------- */
$("#footer-content").html(`
<div class="footer-content">
<div class="copyright-footer">Copyright © 2019 The Jungle Cook</div>
<div class="footer-links">
  <a href="#login">Login</a>
  <a href="#browse">Recipes by Category</a>
  <a href="">Privacy and Copyright</a>
  <a href="#create-recipe" >Create Recipe</a>
  <a href="#view-recipe">Your Recipes</a>
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
<!-- begin nav menu -->
<div id="menuToggle" class="nav-holder">
<div class="bars">
<!-- hamburger spans -->
<span class="bar"></span>
<span class="bar"></span>
<span class="bar"></span>
</div>
<ul id="menu" class="links navLi">
  <a href="#home"><li >Home</li></a>
  <a href="#browse"><li >Browse</li></a>
  <a href="#create-recipe"><li >Create Recipe</li></a>
  <a href="#your-recipe" ><li>Your Recipes</li></a>
  <a href="#login" class="login-button"
    ><li id="change-logBtn"><span>Login</span></li></a
  >
</ul>
</div>

`);
// Change nav on scroll
$(function () {
  // var header = $(".nav-holder");

  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 200) {
      $("nav").addClass("nav-scrolled");
      $(".nav-holder").addClass("nav-holder-scrolled");
      $(".bars").addClass("bars-scrolled");
      $(".links").addClass("links-scrolled");
      $("a").addClass("a-scrolled");
    } else {
      $("nav").removeClass("nav-scrolled");
      $(".nav-holder").removeClass("nav-holder-scrolled");
      $(".bars").removeClass("bars-scrolled");
      $(".links").removeClass("links-scrolled");
      $("a").removeClass("a-scrolled");
    }
  });
});
// `<div class="nav-holder">
// <div class="bars">
//   <span class="bar"></span>
//   <span class="bar"></span>
//   <span class="bar"></span>
// </div>
// <div class="links" >
// <a href="#home">Home</a>
// <a href="#browse">Browse</a>
// <a href="#create-recipe">Create Recipe</a>
// <a href="#your-recipe">Your Recipes</a>
// <span id="change-logBtn" ><a href="#login" class="login-button">Login</a></span></div>
// </div>`

$(document).ready(function () {
  hamburger();
});
function loadBrowseRecipes() {
  // var currentList = RECIPES;
  loadRecipes(RECIPES);
}
function loadYourRecipes() {
  // var currentList = _userProfileInfo.recipes;
  loadRecipes(_userProfileInfo.recipes);
}
function loadRecipes(currentList) {
  $("#loadListButton").empty();
  $.each(currentList, function (idx, recipe) {
    $("#recipe-gallery").append(`
      <div class="recipe-card-holder">
        <div class="recipe-card">
          <div
            class="recipe-image"
            style="background-image: url(images/${recipe.recipeImg}">
            <div id="#heroview" class="view-button-holder"><button id="${idx}" onclick="viewRecipe(${idx})" class="buttons view-button unhide" ><a href="#view-recipe"><span>View</span></a></button>
            
            </div>
          </div>
          <div class="recipe-info">
            <h2 class="recipe-title">
              <span>${recipe.recipeTitle}</span>
            </h2>
            <p class="recipe-description">${recipe.recipeDescription}</p>
            <div class="card-icon time">
              <div class="card-icon-image">
                <img src="images/time.svg" alt="time" />
              </div>
              <div class="card-icon-text">${recipe.totalTime}</div>
            </div>
            <div class="card-icon servings">
              <div class="card-icon-image">
                <img src="images/servings.svg" alt="servings" />
              </div>
              <div class="card-icon-text">${recipe.totalServings}</div>
            </div>
          </div>
        </div>
        <div class="gallery-buttons-bottom">
        <button class="buttons unhide" id="editRecipeB"><a href="#edit-recipe" onclick="editRecipe(${idx})">Edit Recipe</a></button>
        <button class="buttons unhide" onclick="deleteRecipe(${idx})">Delete</button>
      </div>
      </div>`);
  });
}

/* -------------------- create recipe ------------------- */
// "create" / add ingredients to recipe
let instructionInputObj = [];
let ingredientInputObj = [];
// arrays that hold the user create-recipe ingredient/instruction input until the create-recipe form is submitted.
function createIngredient() {
  let ingredient = $("#addedIngredient").val();
  let newItemObjIng = {
    ingredient: ingredient,
    category: "",
  };
  ingredientInputObj.push(newItemObjIng);
  showIngredients(ingredientInputObj);
  console.log("Ingredient added: ", newItemObjIng.ingredient);
  $("#addedIngredient").empty();
}
function createInstruction() {
  let instruction = $("#addedInstructions").val();
  let newItemObjInst = {
    instruction: instruction,
    category: "",
  };
  instructionInputObj.push(newItemObjInst);
  showInstructions(instructionInputObj);
  console.log("Instruction added: ", newItemObjInst.instruction);
  $("#addedInstructions").empty();

  // return instructionInputObj;
}
// delete ingredients during recipe creation
function deleteCreateIngredient(idx) {
  console.log("ingredient deleted: ", idx);
  alert("ingredient deleted: ", idx);
  ingredientInputObj.splice(idx, 1);
  showIngredients(ingredientInputObj);
}
function deleteCreateInstruction(idx) {
  console.log("instruction deleted: ", idx);
  alert("instruction deleted: ", idx);
  instructionInputObj.splice(idx, 1);
  showInstructions(instructionInputObj);
}
// display ingredients as they are added
function showIngredients(ingredientInputObj) {
  let showIng = `<ul class="showItems">`;
  $.each(ingredientInputObj, function (idx, value) {
    let addValue = value.ingredient;
    showIng += `
    
    <li class="showItemsLi"><span>${addValue}</span> <button class="deleteItem" onclick="deleteCreateIngredient(${idx})"><span>x</span></button></li>`;
    console.log(addValue);
  });
  showIng += `</ul>`;
  $(".list-holder1").html(showIng);
}
function showInstructions(instructionInputObj) {
  let showInst = `<ol>`;
  $.each(instructionInputObj, function (idx, value) {
    let addValue = value.instruction;
    showInst += `<li class="showItemsLi"><span>${addValue}</span> <button class="deleteItem" onclick="deleteCreateIngredient(${idx})"><span>x</span></button></li>`;
  });
  showInst += `</ol>`;
  $(".list-holder2").html(showInst);
}
// create the recipe object
function createRecipe() {
  // get user input
  let recipeTitle = $("#recipeTitle").val();
  let recipeDescription = $("#recipeDescription").val();
  let totalTime = $("#totalTime").val();
  let totalServings = $("#totalServings").val();
  // let recipeImg = $("#recipeImg").val();
  let recipeImg = `recipe-pizza.png`;
  // create object
  let newRecipeObj = {
    recipeTitle: recipeTitle,
    recipeDescription: recipeDescription,
    totalTime: totalTime,
    totalServings: totalServings,
    recipeImg: recipeImg,
    ingredients: ingredientInputObj,
    instructions: instructionInputObj,
  };
  console.log(newRecipeObj);
  // update user profile
  _userProfileInfo.recipes.push(newRecipeObj);
  updateUserInfo(_userProfileInfo);
  console.log("New recipe created: " + recipeTitle);
  console.table(newRecipeObj);
  alert("Success! \n New recipe created: " + recipeTitle);
  console.dir(
    "recipe objects are sent to firebase with recipe-pizza.png replacing the user file input"
  );
  // clear contents after submit
  $("#recipeTitle").val(``);
  $("#recipeDescription").val(``);
  $("#totalTime").val(``);
  $("#totalServings").val(``);
  $("#addedIngredient").val(``);
  $("#addedInstructions").val(``);
  instructionInputObj = [];
  ingredientInputObj = [];
  showInstructions();
  showIngredients();
  console.log("form cleared");
}
/* --------------------- edit recipe -------------------- */

function editRecipe(recipeIndex) {
  console.log("content loaded");
  console.log("test");
  console.log("recipe index", recipeIndex);
  let recipeToEdit = recipeIndex;
  console.log(
    "userprofileinfo.recipes[]",
    _userProfileInfo.recipes[recipeToEdit]
  );
  console.table(
    "userprofileinfo.recipes[].ingredients",
    _userProfileInfo.recipes[recipeIndex].ingredients
  );
  // let oldRecipeObj = _userProfileInfo.recipes[recipeIndex];
  // $("#erecipeTitle").val(oldRecipeObj.recipeTitle);
  // $("#etotalTime").val(oldRecipeObj.recipeTitle);
  $("#etotalTime").val("test");
  // $("#etotalServings").val(oldRecipeObj.recipeTitle);

  // get user input
  // let recipeTitle = $("#erecipeTitle").val();
  // let recipeDescription = $("#erecipeDescription").val();
  // let totalTime = $("#etotalTime").val();
  // let totalServings = $("#etotalServings").val();
  // // let recipeImg = $("#erecipeImg").val();
  // let recipeImg = `recipe-chowmein.png`;
  // // create new recipe object
  // let newRecipeObj = {
  //   recipeTitle: recipeTitle,
  //   recipeDescription: recipeDescription,
  //   totalTime: totalTime,
  //   totalServings: totalServings,
  //   recipeImg: recipeImg,
  //   ingredients: oldRecipeObj.ingredients,
  //   instructions: oldRecipeObj.instructions,
  // };
  // // update user information with new object
  // _userProfileInfo.recipes.push(newRecipeObj);
  // updateUserInfo(_userProfileInfo);
  // console.log("Recipe Updated: " + recipeTitle);
  // });
}
// function editIngredients() {
//   let _ingredientsList = _userProfileInfo.recipes[recipeIndex].ingredients;
//   let eIngredient = $("#eaddedIngredient").val();
//   let eIngredientObj = {
//     ingredient: eIngredient,
//     category: "",
//   };
// _ingredientsList.push(eIngredientObj);
// updateUserInfo(_userProfileInfo);
// }
// function editInstructions() {
//   let _instructionsList = _userProfileInfo.recipes[recipeIndex].instructions;
//   let eInstruction = $("#eaddedInstructions").val();
//   let eInstructionObj = {
//     ingredient: eInstruction,
//     category: "",
//   };
//   _instructionsList.push(eInstructionObj);
//   updateUserInfo(_userProfileInfo);
//   showEditedInstructions(_instructionsList);
// }
function showEditedIngredients(_ingredientsList) {
  let ingString = `<ul class="showItems">`;
  $.each(_ingredientsList, function (idx, value) {
    let addValue = value;
    ingString += `
    
    <li class="showItemsLi"><span>${addValue}</span> <button class="deleteItem" onclick="deleteIngredient(${idx})"><span>x</span></button></li>`;
    console.log(addValue);
  });
  ingString += `</ul>`;
  $(".list-holder1").html(ingString);
}
function showEditedInstructions(_instructionsList) {
  let instString = `<ul class="showItems">`;
  $.each(_instructionsList, function (idx, value) {
    let addValue = value;
    instString += `
    
    <li class="showItemsLi"><span>${addValue}</span> <button class="deleteItem" onclick="deleteIngredient(${idx})"><span>x</span></button></li>`;
    console.log(addValue);
  });
  instString += `</ul>`;
  $(".list-holder1").html(instString);
}

/* -------------------- delete recipe ------------------- */
function deleteRecipe(idx) {
  _userProfileInfo.recipes.splice(idx, 1);
  // only removes 1
  updateUserInfo(_userProfileInfo);
  loadRecipes(_userProfileInfo.recipes);
  console.log("recipe deleted");
}
// delete items after recipe creation (Delete from firebase)
function deleteIngredient(recipeIndex) {
  _ingredientsList.splice(idx, 1);
  updateUserInfo(_userProfileInfo);
  showEditedIngredients(_ingredientsList);
}
function deleteInstruction(recipeIndex) {
  _instructionsList.splice(idx, 1);
  updateUserInfo(_userProfileInfo);
  showEditedInstructions(_instructionsList);
}
/* --------------------- view recipe -------------------- */
// view-recipe buttons are found on the browse/your-recipe gallery cards
function getViewRecipe(recipeIndex) {
  $("#recipe-gallery").html(`
  <div class="view-recipe-holder">
  <div class="photo-and-title">
    <div class="view-recipe-title-holder">
      <h2 class="view-recipe-title">
        <span>${currentList[recipeIndex].recipeTitle}</span>
      </h2>
    </div>
    <div class="view-recipe-photo-holder">
      <img
        src="images/recipe-burger@2x.png"
        alt="${currentList[recipeIndex].recipeTitle}"
        class="view-recipe-image"
      />
    </div>
  </div>

  <div class="description-holder">
    <div class="des-top">
      <h3>Description:</h3>
      <p class="recipe-description">${currentList[recipeIndex].recipeDescription}</p>
    </div>
    <div class="des-bottom">
      <div class="time-serving-holder">
        <h4>Total Time:</h4>
        <span class="recipe-total">${currentList[recipeIndex].totalTime}</span>
      </div>
      <div class="time-serving-holder">
        <h4>Servings:</h4>
        <span class="recipe-total">${currentList[recipeIndex].totalServings}</span>
      </div>
    </div>
  </div>
</div>
<div class="bottom-of-page">
  <div class="bottom-of-page2">
    <div class="view-list-holder">
      <h3>Ingredients:</h3>
      <div class="list-holder1"></div>
    </div>
    <div class="view-list-holder">
      <h3>Instructions:</h3>
      <div class="list-holder2"></div>
    </div>

    <div class="view-page-button-holder">
      <button
        class="view-page-edit-button"
        onclick="editRecipe(${currentList[recipeIndex]})"
      >
        edit
      </button>
    </div>
  </div>
</div>`);
}
function viewRecipe(recipeIndex) {
  $(".view-button").click(function (e) {
    $("#heroWrapper").removeClass("browseHero");
    let recipeIndex = e.currentTarget.id;
    if ((window.location.hash = "#your-recipe")) {
      currentList = _userProfileInfo.recipes;
    }
    if ((window.location.hash = "#browse")) {
      currentList = RECIPES;
    }
    console.log("viewRecipe: recipeIndex: ", recipeIndex);
    getViewRecipe(recipeIndex);
    getIngredients(recipeIndex);
    getInstructions(recipeIndex);
  });
}
// displays ingredients/instructions on view page
function getIngredients(recipeIndex) {
  let ingListString = `<ul>`;
  $.each(currentList[recipeIndex].ingredients, function (idx, value) {
    let addValue = value.ingredient;
    ingListString += `<li>${addValue}</li>`;
  });
  ingListString += `</ul>`;
  $(".list-holder1").html(ingListString);
  console.log("getIngredients complete");
}
function getInstructions(recipeIndex) {
  let instListString = `<ol>`;
  $.each(currentList[recipeIndex].instructions, function (idx, value) {
    let addValue = value.instruction;
    instListString += `<li>${value.instruction}</li>`;
  });
  instListString += `</ol>`;
  $(".list-holder2").html(instListString);
  console.log("getInstructions complete");
}
//
/* ------------------- authentication ------------------- */

function signUp() {
  let fName = $("#fName").val();
  let lName = $("#lName").val();
  let email = $("#signupEmail").val();
  let password = $("#signupPassword").val();
  console.log("sign up completed");
  console.log("first name: ", fName);
  console.log("last name: ", lName);
  console.log("email: ", email);
  let fullName = fName + " " + lName;
  let userObj = {
    firstName: fName,
    lastName: lName,
    email: email,
    recipes: [],
  };
  console.table("userObj: ", userObj);
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;
      var uid = user.uid;
      console.log("account created");
      alert("Welcome!", fullName);

      firebase
        .auth()
        .currentUser.updateProfile({
          displayName: fullName,
        })
        .then(() => {});

      _db
        .collection("Users")
        .doc(user.uid)
        .set(userObj)
        .then((doc) => {
          console.log("doc added ");
          alert("doc added ");
          // profile information is set to userObj (links local/firebase)
          var _userProfileInfo = userObj;
          console.log("create userinfo ", _userProfileInfo);
          console.table(_userProfileInfo);
        })
        .catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
          console.log("error ", errorMessage);
          alert("error ", errorMessage);

          // ..
        });

      userFullName = fullName;
      $("#fName").empty();
      $("#lName").empty();
      $("#signupEmail").empty();
      $("#signupPassword").empty();

      // ...
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log("error ", errorMessage);
      alert("hmm.. something went wrong");

      // ..
    });
}
function login() {
  let email = $("#loginEmail").val();
  let password = $("#loginPassword").val();
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      console.log("logged in");
      alert("Welcome back ", firstName, "!");
      $("#loginEmail").empty();
      $("#loginPassword").empty();
      var user = userCredential.user;
      var uid = user.uid;
      console.table(user);
      _db
        .collection("Users")
        .doc(user.uid)
        .get()
        .then((doc) => {
          setUserData(doc);
        });
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log("error ", errorMessage);
    });
  // loadRecipes();
}
function setUserData(userDoc) {
  // let id = firebase.auth().currentUser.uid;
  console.log("userDoc.data(): ", userDoc.data());
  console.table(userDoc.data());
  _userProfileInfo = userDoc.data();
  console.log("set user data: ", _userProfileInfo);
}
function signOut() {
  firebase
    .auth()
    .signOut()
    .then(() => {
      signOutActions();
      console.log("signed out");
      alert("signed out");
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log("error signing out");
      console.log("error ", errorMessage);
      alert("hmm.. something went wrong signing out");

      // ..
    });
}
// anonymous login
function signIn() {
  firebase
    .auth()
    .signInAnonymously()
    .then(() => {
      console.log("signed in");
      $(".name").html("signed in");
      // Signed in..
    })
    .catch((error) => {
      $(".name").html("not signed in");

      var errorCode = error.code;
      var errorMessage = error.message;
      console.log("error ", errorMessage);

      // ...
    });
}
function signOutActions() {
  $("#change-logBtn").html(`<span>Login</span>`);
  $(".user-greeting").empty();
  console.log("EMPTY USERGREETING");
  $(".login-greeting").empty();
  $(".user-only-content").toggleClass("userLoggedOut");
  console.log("content reset for no user");
  // signOutActions();
}
function userOnly() {
  alert("Hello! Please sign up or log in to view this content. ");
}
function updateUserInfo(userObj) {
  let id = firebase.auth().currentUser.uid;
  _db
    .collection("Users")
    .doc(id)
    .update(userObj)
    .then(() => {
      console.log("updated doc");
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log("update error ", errorMessage);
    });
}
function initFirebase() {
  firebase.auth().onAuthStateChanged((user) => {
    console.log(user);
    if (user) {
      _db = firebase.firestore();
      _db
        .collection("Users")
        .doc(user.uid)
        .get()
        .then((doc) => {
          setUserData(doc);
          console.log("auth change logged in");
          console.log("user signed in: ", user.displayName);
          var uid = user.uid;
          $(".user-greeting").html(`${user.displayName}`);
          console.log(user.uid);
          console.log(_userProfileInfo);
          $("#change-logBtn").html(`<span onclick="signOut()">Logout</span>`);
          $(".user-only-content").attr("class", "userLoggedIn");
          $(".load").prop("disabled", true);
          userExists = true;
        });
    } else {
      // SIGNED OUT
      // noUserHash();
      console.log("auth change logged out");
      // $(".createRecipeSubmit").prop("disabled", false);
      // $(".loadRButtn").prop("disabled", false);

      userExists = false;
      userFullName = "";
      _db = "";
      _userProfileInfo = {};
      signOutActions();
    }
  });
}

// uid = initFirebase;
$(document).ready(function () {
  try {
    initFirebase();
    let app = firebase.app();
  } catch (error) {
    console.log("error ", error);
  }
});
