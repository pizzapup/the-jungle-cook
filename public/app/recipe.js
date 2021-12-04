/* ------------------------------------------------------ */
/*                         RECIPES                        */
/* ------------------------------------------------------ */

/* -------------- variables from prototype -------------- */
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
/* ----------------- load recipe cards ----------------- */
// browse page holds all recipes
// your recipe holds only the recipes for the user
//
function loadRecipes() {
  $.each(RECIPES, function (idx, recipe) {
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

/* ---------------- get ingredients list ---------------- */
function getIngredients(recipeIndex) {
  console.log("GET INGREDIENTS RECIPE INDEX: ", recipeIndex);
  let ingListString = `<ul>`;
  $.each(RECIPES[recipeIndex].ingredients, function (idx, value) {
    let addValue = value.ingredient;
    ingListString += `<li>${addValue}</li>`;
    console.log(addValue);
  });
  ingListString += `</ul>`;
  $(".list-holder1").html(ingListString);
}

/* --------------- get instructions list --------------- */
function getInstructions(recipeIndex) {
  console.log("GET INSTRUCTIONS RECIPE INDEX: ", recipeIndex);
  let instListString = `<ol>`;
  $.each(RECIPES[recipeIndex].instructions, function (idx, value) {
    let addValue = value.instruction;
    instListString += `<li>${value.instruction}</li>`;
    console.log(value.instruction);
    console.log(addValue);
  });
  instListString += `</ol>`;
  console.log(instListString);
  $(".list-holder2").html(instListString);
}
/* ---------------- get view "page" info ---------------- */
function getViewRecipe(recipeIndex) {
  console.log(recipeIndex);
  // does not reload other pages properly when back button is click
  $("#recipe-gallery-browse").html(`
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
          src="images/recipe-pizza@2x.png"
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
    <button class="view-page-edit-button">edit</button>
  </div>
</div>`);
}
/* -------- view recipe when selected from browse -------- */
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
/* ------------------------------------------------------ */
/* ------------------------------------------------------ */
/*                      CREATE RECIPE                     */
/* ------------------------------------------------------ */
function createRecipe() {
  // adding object from user input
  let recipeTitle = $("#recipeTitle").val();
  let recipeDescription = $("#recipeDescription").val();
  let totalTime = $("#totalTime").val();
  let totalServings = $("#totalServings").val();
  let recipeImg = $("#recipeImg").val();
  let newRecipeObj = {
    recipeTitle: recipeTitle,
    recipeTitle: recipeTitle,
    recipeDescription: recipeDescription,
    totalTime: totalTime,
    totalServings: totalServings,
    recipeImg: recipeImg,
    ingredients: [],
    instructions: [],
  };
  console.log(newRecipeObj);
  _userProfileInfo.recipes.push(newRecipeObj);
  updateUserInfo(_userProfileInfo);
  alert("New recipe create: " + recipeTitle);
}
function recipeImageUpload() {
  alert(
    "Apologies, the file upload portion of the form is still being updated. Please type in the url/image path or leave this input blank for now. Thank you!"
  );
}
/* ------------------------------------------------------ */
function addIngredient(recipeIndex) {
  // adding object from user input
  let newIngName = $("#addIngredient").val();
  let ingredient = {
    name: newIngName,
    category: "",
  };
  RECIPES[recipeIndex].ingredients.push(ingredient);
  getIngredients(recipeIndex);
}
function addInstruction(recipeIndex) {
  // adding object from user input
  let newInstName = $("#addInstruction").val();
  let instruction = {
    name: newInstName,
    category: "",
  };
  _userProfileInfo.recipes[recipeIndex].instructions.push(instruction);
  getInstructions(recipeIndex);
}

/* ------------------------------------------------------ */
// delete list
function deleteRecipe(recipes, idx) {
  _userProfileInfo.recipes.splice(idx, 1);
  // only removes 1
  loadRecipes();
}
// delete ingredient
function deleteIngredient(recipeIndex, idx) {
  _userProfileInfo.recipes[recipeIndex].ingredients.splice(idx, 1);
  // only removes 1
  getIngredients(recipeIndex);
}
// delete instruction
function deleteInstruction(recipeIndex, idx) {
  _userProfileInfo.recipes[recipeIndex].instructions.splice(idx, 1);
  // only removes 1
  getInstructions(recipeIndex);
}
/* ------------------------------------------------------ */

/* ------------------------------------------------------ */
$(document).ready(function () {
  loadRecipes();
});
/* ------------------------------------------------------ */
// function loadRecipes() {
//   $.each(RECIPES, function (idx, recipe) {
//     $("#recipe-gallery-browse").append(`
//   <div class="recipe-card-holder">
//     <div class="recipe-card">
//       <div
//         class="recipe-image"
//         style="background-image: url(images/${recipe.recipeImg}">
//         <div id="#heroview" class="view-button-holder">
//           <button id="${idx}" class="buttons view-button unhide" ><a onclick="viewRecipe();" href="#view-recipe"><span>View</span></a></button>
//         </div>
//       </div>
//       <div class="recipe-info">
//         <h2 class="recipe-title">
//           <span>${recipe.recipeTitle}</span>
//         </h2>
//         <p class="recipe-description">${recipe.recipeDescription}</p>
//         <div class="card-icon time">
//           <div class="card-icon-image">
//             <img src="images/time.svg" alt="time" />
//           </div>
//           <div class="card-icon-text">${recipe.totalTime}</div>
//         </div>
//         <div class="card-icon servings">
//           <div class="card-icon-image">
//             <img src="images/servings.svg" alt="servings" />
//           </div>
//           <div class="card-icon-text">${recipe.totalServings}</div>
//         </div>
//       </div>
//     </div>
//     <div class="gallery-buttons-bottom">
//     <button class="buttons unhide">Edit Recipe</button>
//     <button class="buttons unhide">Delete</button>
//   </div>
//   </div>`);
//   });
// }
/* ------------------------------------------------------ */
// {
//   recipeTitle: `Supreme Pizza`,
//   newRecipeObj: [
//     {
//       recipeTitle: `Supreme Pizza`,
//       recipeDescription: `Make pizza night super duper out of this world with homemade pizza. This recipe is supreme with vegetables and two types of meat. Yum!`,
//       // totalTimeHr: `1`,
//       // totalTimeMin: `24`,
//       totalTime: `1hr 24min`,
//       totalServings: `4`,
//       recipeImg: `recipe-pizza.png`,
//       recipeImg2x: `recipe-pizza@2x.png`,
//       ingredients: [
//         {
//           // ingredientAmt: "1/4 batch",
//           // ingredientNotes: "n/a",
//           ingredient: `1/4 batch pizza dough`,
//         },
//         {
//           // ingredientAmt: "2 tablespoons",
//           // ingredientNotes: "n/a",
//           ingredient: `2 tablespoons Last-Minute Pizza Sauce`,
//         },
//         {
//           // ingredientAmt: "10 slices",
//           // ingredientNotes: "n/a",
//           ingredient: `10 slice pepperoni`,
//         },
//         {
//           // ingredientAmt: "2",
//           // ingredientNotes: "n/a",
//           ingredient: `2 large mushrooms, sliced`,
//         },
//         {
//           // ingredientAmt: "1/4",
//           // ingredientNotes: "n/a",
//           ingredient: `1/4 bell pepper, sliced`,
//         },
//         {
//           // ingredientAmt: "1 tablespoon",
//           // ingredientNotes: "n/a",
//           ingredient: `1 tablespoon sliced black olives`,
//         },
//       ],
//       instructions: [
//         {
//           instruction: `Preheat the oven to 475°. Spray pizza pan with nonstick cooking or line a baking sheet with parchment paper.`,
//         },
//         {
//           instruction: `Flatten dough into a thin round and place on the pizza pan`,
//         },
//         {
//           instruction: `Spread pizza sauce over the dough.`,
//         },
//         {
//           instruction: `Layer the toppings over the dough.`,
//         },
//         {
//           instruction: `Bake for 8 to 10 minutes or until the crust is crisp and the cheese melted and lightly browned.`,
//         },
//       ],
//     },
//   ],
// },
// {
//   recipeTitle: `Classic Burger`,
//   newRecipeObj: [
//     {
//       recipeTitle: `Classic Burger`,
//       recipeDescription: `Sink your teeth into a delicious restaurant-style, hamburger
//   recipe made from lean beef. Skip the prepackaged patties and
//   take the extra time to craft up your own, and that little
//   extra effort will be worth it.`,
//       // totalTimeHr: `1`,
//       // totalTimeMin: `24`,
//       totalTimeMin: `1hr 24min`,
//       totalServings: `4`,
//       recipeImg: `recipe-burger.png`,
//       recipeImg2x: `recipe-burger@2x.png`,
//       ingredients: [
//         {
//           // ingredientAmt: "1/4 batch",
//           // ingredientNotes: "n/a",
//           ingredient: `Lorem, ipsum dolor.`,
//         },
//         {
//           // ingredientAmt: "2 tablespoons",
//           // ingredientNotes: "n/a",
//           ingredient: `Lorem, ipsum dolor.`,
//         },
//       ],
//       instructions: [
//         {
//           instruction: `Lorem ipsum dolor sit amet consectetur
//       adipisicing elit. Ea, laudantium!`,
//         },
//         {
//           instruction: `Lorem ipsum dolor sit amet consectetur
//       adipisicing elit. Ea, laudantium!`,
//         },
//       ],
//     },
//   ],
// },
// {
//   recipeTitle: `Chicken Biryani`,
//   newRecipeObj: [
//     {
//       recipeTitle: `Chicken Biryani`,
//       recipeDescription: `Chicken Biryani is a bold and flavorful Indian dish with
//   crazy tender bites of chicken with bell peppers in a
//   deliciously spiced and fragrant rice.`,
//       // totalTimeHr: `1`,
//       // totalTimeMin: `15`,
//       totalTime: `1hr 15min`,
//       totalServings: `6`,
//       recipeImg: `recipe-pilaf.png`,
//       recipeImg2x: `recipe-pilaf@2x.png`,
//       ingredients: [
//         {
//           // ingredientAmt: "1/4 batch",
//           // ingredientNotes: "n/a",
//           ingredient: `Lorem, ipsum dolor.`,
//         },
//         {
//           // ingredientAmt: "2 tablespoons",
//           // ingredientNotes: "n/a",
//           ingredient: `Lorem, ipsum dolor.`,
//         },
//       ],
//       instructions: [
//         {
//           instruction: `Lorem ipsum dolor sit amet consectetur
//       adipisicing elit. Ea, laudantium!`,
//         },
//         {
//           instruction: `Lorem ipsum dolor sit amet consectetur
//       adipisicing elit. Ea, laudantium!`,
//         },
//       ],
//     },
//   ],
// },
// {
//   recipeTitle: `Ch. Chow Mein`,
//   newRecipeObj: [
//     {
//       recipeTitle: `Ch. Chow Mein`,
//       recipeDescription: `A great Chow Mein comes down to the sauce - it takes more
//   than just soy sauce and sugar! Jam packed with a surprising
//   amount of hidden vegetables, customize this Chicken Chow
//   Mein recipe using your protein of choice!`,
//       // totalTimeHr: `0`,
//       // totalTimeMin: `20`,
//       totalTimeMin: `1hr 20min`,
//       totalServings: `4`,
//       recipeImg: `recipe-chowmein.png`,
//       recipeImg2x: `recipe-chowmein@2x.png`,
//       ingredients: [
//         {
//           // ingredientAmt: "1/4 batch",
//           // ingredientNotes: "n/a",
//           ingredient: `Lorem, ipsum dolor.`,
//         },
//         {
//           // ingredientAmt: "2 tablespoons",
//           // ingredientNotes: "n/a",
//           ingredient: `Lorem, ipsum dolor.`,
//         },
//       ],
//       instructions: [
//         {
//           instruction: `Lorem ipsum dolor sit amet consectetur
//       adipisicing elit. Ea, laudantium!`,
//         },
//         {
//           instruction: `Lorem ipsum dolor sit amet consectetur
//       adipisicing elit. Ea, laudantium!`,
//         },
//       ],
//     },
//   ],
// },
