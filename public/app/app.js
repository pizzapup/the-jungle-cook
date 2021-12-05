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
/* ------------------------------------------------------ */
/* -------------- menu nav logo and footer -------------- */
function initListeners() {
  $(".bars").click(function (e) {
    $(".bars").toggleClass("active");
    $(".links").toggleClass("active");
  });
  $(".links a").click(function (e) {
    $(".bars").toggleClass("active");
    $(".links").toggleClass("active");
  });
  /* ------------------- footer content ------------------- */
  $("#footer-content").html(`
<div class="footer-content">
<div class="copyright-footer">Copyright © 2019 The Jungle Cook</div>
<div class="footer-links">
  <a href="#login">Login</a>
  <a href="#browse">Recipes by Category</a>
  <a href="">Privacy and Copyright</a>
  <a href="#create-recipe" id="userAccessOnly">Create Recipe</a>
  <a href="#view-recipe" id="userAccessOnly">Your Recipes</a>
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
<div class="links" >
<a href="#home">Home</a>
<a href="#browse">Browse</a>
<a href="create-recipe.html#create-recipe" class="userAccessOnly" id="noUserCreateRecipe">Create Recipe</a>
<a href="your-recipe.html#your-recipe" id="noUserYourRecipe"></a>
<span id="change-logBtn" ><a href="#login" class="login-button">Login</a></span></div>
</div>
`);
}
/* --------- changeRoute() based on hash change: -------- */
function changeRoute() {
  let hashTag = window.location.hash;
  let pageID = hashTag.replace("#", "");
  let currentHero = $("#heroWrapper").attr("class");
  if (pageID != "") {
    $("#heroWrapper").attr("class", pageID);
    if (pageID == "browse") {
      loadRecipes(RECIPES);
    }
    if (pageID == "your-recipe") {
      loadRecipes(_userProfileInfo.recipes);
    }
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
/*                         RECIPES                        */
/* ------------------------------------------------------ */
function loadRecipes(recipeList) {
  $.each(recipeList, function (idx, recipe) {
    $("#recipe-gallery-browse").append(`
      <div class="recipe-card-holder">
        <div class="recipe-card">
          <div
            class="recipe-image"
            style="background-image: url(images/${recipe.recipeImg}">
            <div id="#heroview" class="view-button-holder">
              <button id="${idx}" class="buttons view-button unhide" ><a onclick="viewRecipe();" href="#view-recipe"><span>View</span></a></button>
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
        <button class="buttons unhide">Edit Recipe</button>
        <button class="buttons unhide">Delete</button>
      </div>
      </div>`);
  });
}
function deleteIngredient(recipeIndex, idx) {
  _userProfileInfo.ingredients[recipeIndex].ingredient.splice(idx, 1);
  updateUserInfo(_userProfileInfo);
  getIngredients(recipeIndex);
}
function deleteInstruction(recipeIndex, idx) {
  _userProfileInfo.instructions[recipeIndex].ingredient.splice(idx, 1);
  updateUserInfo(_userProfileInfo);
  getInstructions(recipeIndex);
}
function addIngredient(recipeIndex) {
  // adding object from user input
  let newIngName = $("#addedIngredient").val();
  let newIngObj = {
    ingredient: newIngName,
    category: "",
  };
  _userProfileInfo.recipes[recipeIndex].ingredients.push(newIngObj);
  updateUserInfo(_userProfileInfo);
  getIngredients(recipeIndex);
}
function addIngredient(recipeIndex) {
  // adding object from user input
  let newIngName = $("#addedIngredient").val();
  let newIngObj = {
    ingredient: newIngName,
    category: "",
  };
  newRecipeObj.push(newIngObj);
  updateUserInfo(_userProfileInfo);
  getIngredients(recipeIndex);
}
function addInstruction(recipeIndex) {
  // adding object from user input
  let newInstName = $("#addedInstruction").val();
  let newInstObj = {
    instruction: newInstName,
    category: "",
  };
  _userProfileInfo.recipes[recipeIndex].instructions.push(newInstObj);
  updateUserInfo(_userProfileInfo);
  getInstructions(recipeIndex);
}
/* ------------------ CREATE NEW RECIPE ----------------- */
// createRecipe creates a "newRecipeObj" from the form input and the ingredient/instruction arrays created using the create recipe form
function createRecipe() {
  let inputIngList = [];
  let inputInstList = [];
  $("#addIngButton").click(function (e) {
    let newIngName = $("#addedIngredient").val();
    let newIngObj = {
      ingredient: newIngName,
      category: "",
    };
    inputIngList.push(newIngObj);
    getIngredients(inputIngList);
  });
  $("#addInstButton").click(function (e) {
    let newInstName = $("#addedInstruction").val();
    let newInstObj = {
      instruction: newInstName,
      category: "",
    };
    inputInstList.push(newInstObj);
    getIngredients(inputInstList);
  });
  let recipeTitle = $("#recipeTitle").val();
  let recipeDescription = $("#recipeDescription").val();
  let totalTime = $("#totalTime").val();
  let totalServings = $("#totalServings").val();
  let recipeImg = $("#recipeImg").val();
  let newRecipeObj = {
    recipeTitle: recipeTitle,
    recipeDescription: recipeDescription,
    totalTime: totalTime,
    totalServings: totalServings,
    recipeImg: recipeImg,
    ingredients: inputIngList,
    instructions: inputInstList,
  };
  console.log(newRecipeObj);
  _userProfileInfo.recipes.push(newRecipeObj);
  updateUserInfo(_userProfileInfo);
  console.log("New recipe create: " + recipeTitle);
  $(".enable-addItems").prop("disabled", true);
}
function editRecipe() {
  $(".edit-button").click(function (e) {
    let recipeIndex = e.currentTarget.id;
    let oldRecipeObj = _userProfileInfo.recipes[recipeIndex];
    // set "placeholder" info
    $("#erecipeTitle").val(oldRecipeObj.recipeTitle);
    $("#etotalTime").val(oldRecipeObj.recipeTitle);
    $("#etotalServings").val(oldRecipeObj.recipeTitle);
    getIngredients(recipeIndex);
    getInstructions(recipeIndex);
    // get user input
    let recipeTitle = $("#erecipeTitle").val();
    let recipeDescription = $("#erecipeDescription").val();
    let totalTime = $("#etotalTime").val();
    let totalServings = $("#etotalServings").val();
    let recipeImg = $("#erecipeImg").val();
    // create new recipe object
    let newRecipeObj = {
      recipeTitle: recipeTitle,
      recipeDescription: recipeDescription,
      totalTime: totalTime,
      totalServings: totalServings,
      recipeImg: recipeImg,
      ingredients: oldRecipeObj.ingredients,
      instructions: oldRecipeObj.instructions,
    };
    // update user information with new object
    console.log(newRecipeObj);
    _userProfileInfo.recipes.push(newRecipeObj);
    updateUserInfo(_userProfileInfo);
    console.log("New recipe create: " + recipeTitle);
  });
}
function addEnableButton() {
  $(".addEnable").prop("disabled", true);
  //
  // disable
  $(".addEnable").prop("disabled", false);
}
function deleteRecipe(recipes, idx) {
  _userProfileInfo.recipes.splice(idx, 1);
  // only removes 1
  loadRecipes();
}
/* --------------------- VIEW RECIPE -------------------- */
// getViewRecipe pulls together all the information needed to view a single recipe displayed like the "view-recipe" page in the prototype
function getViewRecipe(recipeIndex) {
  console.log(recipeIndex);
  // does not reload other pages properly when back button is click
  $("#recipe-gallery-browse").html(`
    <div class="view-page-container">
    <div class="view-recipe-holder">
      <div class="photo-and-title">
        <div class="view-recipe-title-holder">
          <h2 class="view-recipe-title">
            <span>${list[recipeIndex].recipeTitle}</span>
          </h2>
        </div>
        <div class="view-recipe-photo-holder">
          <img
            src="images/recipe-pizza@2x.png"
            alt="${list[recipeIndex].recipeTitle}"
            class="view-recipe-image"
          />
        </div>
      </div>
  
      <div class="description-holder">
        <div class="des-top">
          <h3>Description:</h3>
          <p class="recipe-description">
            ${list[recipeIndex].recipeDescription}
          </p>
        </div>
        <div class="des-bottom">
          <div class="time-serving-holder">
            <h4>Total Time:</h4>
            <span class="recipe-total"
              >${list[recipeIndex].totalTime}</span
            >
          </div>
          <div class="time-serving-holder">
            <h4>Servings:</h4>
            <span class="recipe-total"
              >${list[recipeIndex].totalServings}</span
            >
          </div>
        </div>
      </div>
    </div>
  
    <div class="view-list-holder">
      <h3>Ingredients:</h3>
      <div class="list-holder1"></div>
    </div>
    <div class="view-list-holder">
      <h3>Instructions:</h3>
      <div class="list-holder2"></div>
    </div>
  
    <div class="view-page-button-holder">
      <button class="view-page-edit-button" onclick="goEditRecipe(${list[recipeIndex]})">edit</button>
    </div>
  </div>`);
}
function viewRecipe() {
  $(".view-button").click(function (e) {
    $("#heroWrapper").removeClass("browseHero");
    let recipeIndex = e.currentTarget.id;
    console.log(recipeIndex);
    getViewRecipe(recipeIndex);
    getIngredients(recipeIndex);
    getInstructions(recipeIndex);
  });
}
function getIngredients(recipeIndex) {
  let ingListString = `<ul>`;
  $.each(list[recipeIndex].ingredients, function (idx, value) {
    let addValue = value.ingredient;
    ingListString += `<li>${addValue}</li>`;
    console.log(addValue);
  });
  ingListString += `</ul>`;
  $(".list-holder1").html(ingListString);
}
function getInstructions(recipeIndex) {
  console.log("GET INSTRUCTIONS RECIPE INDEX: ", recipeIndex);
  let instListString = `<ol>`;
  $.each(list[recipeIndex].instructions, function (idx, value) {
    let addValue = value.instruction;
    instListString += `<li>${value.instruction}</li>`;
    console.log(value.instruction);
    console.log(addValue);
  });
  instListString += `</ol>`;
  console.log(instListString);
  $(".list-holder2").html(instListString);
}
function recipeImageUpload() {
  alert(
    "Apologies, the file upload portion of the form is still being updated. Please type in the url/image path or leave this input blank for now. Thank you!"
  );
}
/* ------------------- authentication ------------------- */
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
function signUp() {
  let fName = $("#fName").val();
  let lName = $("#lName").val();
  let email = $("#signupEmail").val();
  let password = $("#signupPassword").val();
  console.log("sign up completed");
  console.log(fName);
  console.log(lName);
  console.log(email);
  let fullName = fName + " " + lName;
  let userObj = {
    firstName: fName,
    lastName: lName,
    email: email,
    recipes: [],
  };
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;
      console.log("created");
      firebase.auth().currentUser.updateProfile({
        displayName: fullName,
      });

      _db
        .collection("Users")
        .doc(user.uid)
        .set(userObj)
        .then((doc) => {
          console.log("doc added ");
          // profile information is set to userObj (links local/firebase)
          _userProfileInfo = userObj;
          console.log("create userinfo ", _userProfileInfo);
        })
        .catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
          console.log("error ", errorMessage);

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
      $("#loginEmail").empty();
      $("#loginPassword").empty();
      var user = userCredential.user;

      _db
        .collection("Users")
        .doc(user.uid)
        .get()
        .then((doc) => {
          console.log(doc.data());
          _userProfileInfo = doc.data();
          var _userInfo = _userProfileInfo;
          console.log("login user info ", _userProfileInfo);

          console.log("login user profile info ", _userProfileInfo);
          loadRecipes();
        });
    })

    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log("error ", errorMessage);
    });
}
function signOut() {
  firebase
    .auth()
    .signOut()
    .then(() => {
      signOutActions();
      console.log("signed out");
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log("error signing out");
      console.log("error ", errorMessage);

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
function signInActions(user) {
  $("#change-logBtn").html(
    `<a href="#login" class="login-button" onclick="signOut()">Logout</a>`
  );
  $(".user-greeting").html(`<span>${user.displayName}</span>`);
  $(".user-only-content").attr("class", "userLoggedIn");

  // $(".login-button").html("Logout");
  $(".load").prop("disabled", true);
  // $("#userAccessOnly").attr("class", "");
}
function signOutActions() {
  $("#change-logBtn").html(`<a href="#login" class="login-button">Login</a>`);
  $(".login-greeting").empty();
  $(".user-only-content").toggleClass("userLoggedOut");
  console.log("content reset for no user");
  // signOutActions();
}
function userOnly() {
  alert("Hello! Please sign up or log in to view this content. ");
}
function initFirebase() {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      _db = firebase.firestore();
      console.log("auth change logged in");
      console.log("login userinfo ", _userProfileInfo);
      uid = user.uid;
      userRecipes = user.recipes;
      console.log("user recipes: ", user.recipes);
      if (user.displayName) {
        $(".load-button").prop("disabled", false);
      }
      userExists = true;
      console.log("login userinfo ", _userProfileInfo);
      signInActions(user);
      loadRecipes(userRecipes);
    } else {
      // SIGNED OUT
      console.log("auth change logged out");
      userExists = false;
      userFullName = "";
      _db = "";
      _userProfileInfo = {};
      signOutActions();
    }
  });
}

/* ------------------------------------------------------ */
$(document).ready(function () {
  initURLListener();
  initListeners();
  try {
    initFirebase();
    let app = firebase.app();
  } catch (error) {
    console.log("error ", error);
  }
});
