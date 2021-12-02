//
/* ------------------------------------------------------ */
/*                        VARIABLES                       */
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
        checked: false,
      },
      {
        // ingredientAmt: "2 tablespoons",
        // ingredientNotes: "n/a",
        ingredient: `2 tablespoons Last-Minute Pizza Sauce`,
        checked: false,
      },
      {
        // ingredientAmt: "10 slices",
        // ingredientNotes: "n/a",
        ingredient: `10 slice pepperoni`,
        checked: false,
      },
      {
        // ingredientAmt: "2",
        // ingredientNotes: "n/a",
        ingredient: `2 large mushrooms, sliced`,
        checked: false,
      },
      {
        // ingredientAmt: "1/4",
        // ingredientNotes: "n/a",
        ingredient: `1/4 bell pepper, sliced`,
        checked: false,
      },
      {
        // ingredientAmt: "1 tablespoon",
        // ingredientNotes: "n/a",
        ingredient: `1 tablespoon sliced black olives`,
        checked: false,
      },
    ],
    instructions: [
      {
        instruction: `Preheat the oven to 475°. Spray pizza pan with nonstick cooking or line a baking sheet with parchment paper.`,
        checked: false,
      },
      {
        instruction: `Flatten dough into a thin round and place on the pizza pan`,
        checked: false,
      },
      {
        instruction: `Spread pizza sauce over the dough.`,
        checked: false,
      },
      {
        instruction: `Layer the toppings over the dough.`,
        checked: false,
      },
      {
        instruction: `Bake for 8 to 10 minutes or until the crust is crisp and the cheese melted and lightly browned.`,
        checked: false,
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
        checked: false,
      },
      {
        // ingredientAmt: "2 tablespoons",
        // ingredientNotes: "n/a",
        ingredient: `Lorem, ipsum dolor.`,
        checked: false,
      },
    ],
    instructions: [
      {
        instruction: `Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Ea, laudantium!`,
        checked: false,
      },
      {
        instruction: `Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Ea, laudantium!`,
        checked: false,
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
        checked: false,
      },
      {
        // ingredientAmt: "2 tablespoons",
        // ingredientNotes: "n/a",
        ingredient: `Lorem, ipsum dolor.`,
        checked: false,
      },
    ],
    instructions: [
      {
        instruction: `Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Ea, laudantium!`,
        checked: false,
      },
      {
        instruction: `Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Ea, laudantium!`,
        checked: false,
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
        checked: false,
      },
      {
        // ingredientAmt: "2 tablespoons",
        // ingredientNotes: "n/a",
        ingredient: `Lorem, ipsum dolor.`,
        checked: false,
      },
    ],
    instructions: [
      {
        instruction: `Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Ea, laudantium!`,
        checked: false,
      },
      {
        instruction: `Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Ea, laudantium!`,
        checked: false,
      },
    ],
  },
];
/* ------------------------------------------------------ */

/* ----------------- loads recipe cards ----------------- */
// browse page holds all recipes
// your recipe holds only the recipes for the user
function loadRecipes() {
  $.each(RECIPES, function (idx, recipe) {
    $("#recipe-gallery-browse").append(`
  <div class="recipe-card-holder">
    <div class="recipe-card">
      <div
        class="recipe-image"
        style="background-image: url(images/${recipe.recipeImg}">
        <div class="view-button-holder">
          <button id="${idx}" onclick="viewRecipe();" class="buttons view-button unhide">View</button>
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

/* --------------------- view recipe -------------------- */
// info for one recipe loaded when clicking on "view" button
// function viewRecipe() {
//   $(".recipe-card").onclick(function (e) {
//     let recipeIndex = e.currentTarget.id;
//     console.log("recipeIndex");
//     // console.log(campingIndex);
//     $("#recipe-gallery").html(`
//     <div class="view-recipe-holder">
//     <div class="img-and-description">
//       <div class="view-recipe-title-holder">
//         <h2 class="view-recipe-title">
//           <span>${RECIPE[recipeIndex].recipeTitle}</span>
//         </h2>
//         <div class="view-recipe-photo-holder">
//           <img
//             src="images/${RECIPE[recipeIndex].recipeImg2x}"
//             alt="${RECIPE[recipeIndex].recipeTitle}"
//             class="view-recipe-image"
//           />
//         </div>
//       </div>
//       <section class="description-holder">
//         <div class="des-top">
//           <h3>Description:</h3>
//           <p class="view-recipe-description">
//           ${RECIPE[recipeIndex].recipeDescription}
//           </p>
//         </div>
//         <div class="des-bottom">
//           <div class="time-serving-holder">
//             <h4>Total Time:</h4>
//             <span class="view-recipe-total">${RECIPE[recipeIndex].totalTime}</span>
//           </div>
//           <div class="time-serving-holder">
//             <h4>Servings:</h4>
//             <span class="view-recipe-total">${RECIPE[recipeIndex].totalServings}</span>
//           </div>
//         </div>
//       </section>
//     </div>
//     <section class="view-list-holder ingredients">
//       <h3>Ingredients:</h3>
//     </section>
//     <section class="view-list-holder instructions">
//       <h3>Instructions:</h3>
//     </section>
//     <div class="view-page-edit-button">
//       <button id="goToEdit" class="go-to-edit">
//         <a href="edit-recipe.html"><span>Edit Recipe</span></a>
//       </button>
//     </div>
//   </div>`);
//     // addCloseListener();
//   });
// }
function toggleHero() {
  $(".add-class").click(function () {
    $("body").toggleClass("browse", true);
  });
  $(".remove-class").click(function () {
    $("body").toggleClass("main", false);
  });
}
function viewRecipe() {
  $(".view-button").click(function (e) {
    let recipeIndex = e.currentTarget.id;
    toggleHero();
    console.log(recipeIndex);
    console.log(RECIPES[recipeIndex].recipeTitle);

    $("#recipe-gallery-browse").html(`
    <div class="view-recipe-holder">
  <div class="img-and-description">
    <div class="view-recipe-title-holder">
      <h2 class="view-recipe-title">
        <span>${RECIPES[recipeIndex].recipeTitle}</span>
      </h2>
      <div class="view-recipe-photo-holder">
        <img
          src="images/${RECIPES[recipeIndex].recipeImg2x}"
          alt="${RECIPES[recipeIndex].recipeTitle}"
          class="view-recipe-image"
        />
      </div>
    </div>
    <section class="description-holder">
      <div class="des-top">
        <h3>Description:</h3>
        <p class="recipe-description">${RECIPES[recipeIndex].Description}</p>
      </div>
      <div class="des-bottom">
        <div class="time-serving-holder">
          <h4>Total Time:</h4>
          <span class="recipe-total">${RECIPES[recipeIndex].totalTime}</span>
        </div>
        <div class="time-serving-holder">
          <h4>Servings:</h4>
          <span class="recipe-total"
            >${RECIPES[recipeIndex].totalServings}</span
          >
        </div>
      </div>
    </section>
  </div>
  <div class="view-list-holder ingredients">
    <h3>Ingredients:</h3>
  </div>
  <div class="view-list-holder instructions">
    <h3>Instructions:</h3>
  </div>
  <div class="button-holder">
    <button class="view-page-edit-button"></button>
  </div>
</div>`);
  });
}

/* ------------------------------------------------------ */
function loadIngredients() {
  let ingredientString = `<ul class="view-ingredients-list">`;
  $.each(RECIPES.ingredients.ingredient, function (idx, ingredient) {
    listString += `
      <li id="${idx}"><>${ingredients.ingredient}</li>`;
    // += adds to end
  });
  ingredientString += `</>`;
  $(".ingredients").html(ingredientString);
}
/* ------------------------------------------------------ */
function loadInstructions() {
  let instructionsString = `<ul class="view-instructions-list">`;
  $.each(RECIPES.instructions, function (idx, instruction) {
    instructionsString += `
      <li id="${idx}"><>${instructions.instruction}</li>`;
  });
  instructionsString += `</ul>`;
  $(".instructions").html(instructionsString);
}
/* ------------------------------------------------------ */
$(document).ready(function () {
  loadRecipes();
});
