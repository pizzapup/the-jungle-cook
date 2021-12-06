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

/* ------------------------------------------------------ */
/*                         RECIPES                        */
/* ------------------------------------------------------ */
function loadBrowseRecipes() {
  loadRecipes(RECIPES);
}
function getViewRecipeBrowse(recipeIndex) {
  $("#recipe-gallery").html(`
    <div class="view-page-container">
    <div class="view-recipe-holder">
      <div class="photo-and-title">
        <div class="view-recipe-title-holder">
          <h2 class="view-recipe-title">
            <span>${RECIPES[recipeIndex].recipeTitle}</span>
          </h2>
        </div>
        <div class="view-recipe-photo-holder">
          <img
            src="${RECIPES[recipeIndex].recipeImg}"
            alt="${RECIPES[recipeIndex].recipeTitle}"
            class="view-recipe-image"
          />
        </div>
      </div>
  
      <div class="description-holder">
        <div class="des-top">
          <h3>Description:</h3>
          <p class="recipe-description">
            ${RECIPES[recipeIndex].recipeDescription}
          </p>
        </div>
        <div class="des-bottom">
          <div class="time-serving-holder">
            <h4>Total Time:</h4>
            <span class="recipe-total"
              >${RECIPES[recipeIndex].totalTime}</span
            >
          </div>
          <div class="time-serving-holder">
            <h4>Servings:</h4>
            <span class="recipe-total"
              >${RECIPES[recipeIndex].totalServings}</span
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
      <button class="view-page-edit-button" onclick="editRecipe(${RECIPES[recipeIndex]})">edit</button>
    </div>
  </div>`);
}
function loadYourRecipes() {
  loadRecipes(_userProfileInfo.recipes);
}
function loadRecipes(list) {
  $("#loadListButton").empty();
  $.each(list, function (idx, recipe) {
    $("#recipe-gallery").append(`
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
        <button class="buttons unhide" id="editRecipeB"><a href="#edit-recipe" onclick="editRecipe(${list}, ${idx})">Edit Recipe</a></button>
        <button class="buttons unhide" onclick="deleteList(${list}, ${idx})">Delete</button>
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
// function addIngredient(recipeIndex) {
//   let inputIngList = [];
//   // adding object from user input
//   let newIngName = $("#addedIngredient").val();
//   let newIngObj = {
//     ingredient: newIngName,
//     category: "",
//   };
//   _userProfileInfo.recipes[recipeIndex].ingredients.push(newIngObj);
//   updateUserInfo(_userProfileInfo);
//   getIngredients(recipeIndex);
// }

// function addInstruction(recipeIndex) {
//   let inputInstList = [];
//   // adding object from user input
//   let newInstName = $("#addedInstruction").val();
//   let newInstObj = {
//     instruction: newInstName,
//     category: "",
//   };
//   _userProfileInfo.recipes[recipeIndex].instructions.push(newInstObj);
//   updateUserInfo(_userProfileInfo);
//   getInstructions(recipeIndex);
// }
/* ------------------ CREATE NEW RECIPE ----------------- */
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
  console.log("Ingredient added: ", newItemObjIng.ingredient);
  ingredientInputObj.push(newItemObjIng);
  showIngredients(ingredientInputObj);
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

  // return instructionInputObj;
}
// display ingredients as they are added
function showIngredients(ingredientInputObj) {
  let showIng = `<ul>`;
  $.each(ingredientInputObj, function (idx, value) {
    let addValue = value.ingredient;
    showIng += `<li>${addValue}</li>`;
    console.log(addValue);
  });
  showIng += `</ul>`;
  $(".list-holder1").html(showIng);
}
function showInstructions(instructionInputObj) {
  let showInst = `<ol>`;
  $.each(instructionInputObj, function (idx, value) {
    let addValue = value.instruction;
    showInst += `<li>${addValue}</li>`;
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
  let recipeImg = $("#recipeImg").val();
  // let recipeImg = `recipe-pizza.png`;
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
  console.dir(newRecipeObj);
  console.table(newRecipeObj);
  alert("Success! \n New recipe created: " + recipeTitle);
}

/* --------------------- edit recipe -------------------- */
function editRecipe(list, recipeIndex) {
  let oldRecipeObj = list[recipeIndex];
  $("#erecipeTitle").val(oldRecipeObj.recipeTitle);
  $("#etotalTime").val(oldRecipeObj.recipeTitle);
  $("#etotalServings").val(oldRecipeObj.recipeTitle);
  getIngredients(list, recipeIndex);
  getInstructions(list, recipeIndex);
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
  list.push(newRecipeObj);
  if (list != "RECIPES") {
    updateUserInfo(_userProfileInfo);
    console.log("user recipe updated: " + recipeTitle);
  }
  console.log("Recipe Updated: " + recipeTitle);
  // });
}
/* -------------------- delete recipe ------------------- */
function deleteRecipe(recipes, idx) {
  _userProfileInfo.recipes.splice(idx, 1);
  // only removes 1
  loadRecipes(_userProfileInfo.recipes);
}
/* --------------------- view recipe -------------------- */
// view-recipe buttons are found on the browse/your-recipe gallery cards
function getViewRecipe(recipeIndex) {
  $("#recipe-gallery").html(`
    <div class="view-page-container">
    <div class="view-recipe-holder">
      <div class="photo-and-title">
        <div class="view-recipe-title-holder">
          <h2 class="view-recipe-title">
            <span>${_userProfileInfo.recipes[recipeIndex].recipeTitle}</span>
          </h2>
        </div>
        <div class="view-recipe-photo-holder">
          <img
            src="${_userProfileInfo.recipes[recipeIndex].recipeImg}"
            alt="${_userProfileInfo.recipes[recipeIndex].recipeTitle}"
            class="view-recipe-image"
          />
        </div>
      </div>
  
      <div class="description-holder">
        <div class="des-top">
          <h3>Description:</h3>
          <p class="recipe-description">
            ${_userProfileInfo.recipes[recipeIndex].recipeDescription}
          </p>
        </div>
        <div class="des-bottom">
          <div class="time-serving-holder">
            <h4>Total Time:</h4>
            <span class="recipe-total"
              >${_userProfileInfo.recipes[recipeIndex].totalTime}</span
            >
          </div>
          <div class="time-serving-holder">
            <h4>Servings:</h4>
            <span class="recipe-total"
              >${_userProfileInfo.recipes[recipeIndex].totalServings}</span
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
      <button class="view-page-edit-button" onclick="editRecipe(${_userProfileInfo.recipes[recipeIndex]})">edit</button>
    </div>
  </div>`);
}
function viewRecipe() {
  $(".view-button").click(function (e) {
    $("#heroWrapper").removeClass("browseHero");
    let recipeIndex = e.currentTarget.id;
    console.log("viewRecipe: recipeIndex: ", recipeIndex);
    getViewRecipe(recipeIndex);
    getIngredients(recipeIndex);
    getInstructions(recipeIndex);
  });
  console.log("viewRecipe complete");
}
// displays ingredients/instructions on view page
function getIngredients(list, recipeIndex) {
  let ingListString = `<ul>`;
  $.each(list[recipeIndex].ingredients, function (idx, value) {
    let addValue = value.ingredient;
    ingListString += `<li>${addValue}</li>`;
    console.log(addValue);
  });
  ingListString += `</ul>`;
  $(".list-holder1").html(ingListString);
  console.log("getIngredients complete");
}
function getInstructions(list, recipeIndex) {
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
      var uid = user.uid;
      console.log("created");
      alert("Welcome!");

      firebase
        .auth()
        .currentUser.updateProfile({
          displayName: fullName,
        })
        .then(() => {
          console.log("UPDSTE USER");
        });

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
      alert("Welcome back!");
      $("#loginEmail").empty();
      $("#loginPassword").empty();
      var user = userCredential.user;
      var uid = user.uid;

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
  loadRecipes();
}
function setUserData(userDoc) {
  // let id = firebase.auth().currentUser.uid;
  console.log(userDoc.data());
  _userProfileInfo = userDoc.data();
  console.log("set user data ", _userProfileInfo);
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
  $("#change-logBtn").html(`<a href="#login" class="login-button">Login</a>`);
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
          console.log("login userinfo ", _userProfileInfo);
          var uid = user.uid;
          console.log("SETTING USERGREETING");
          $(".user-greeting").html(`${user.displayName}`);
          console.log(user.uid);
          console.log(_userProfileInfo);
          $("#change-logBtn").html(
            `<a href="#login" class="login-button" onclick="signOut()">Logout</a>`
          );
          $(".user-only-content").attr("class", "userLoggedIn");
          loadRecipes(_userProfileInfo.recipes);
          // $(".login-button").html("Logout");
          $(".load").prop("disabled", true);
          // $("#userAccessOnly").attr("class", "");
          userExists = true;
          console.log("login userinfo ", _userProfileInfo);
          loadRecipes();
        });
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
// uid = initFirebase;
$(document).ready(function () {
  try {
    initFirebase();
    let app = firebase.app();
  } catch (error) {
    console.log("error ", error);
  }
});
