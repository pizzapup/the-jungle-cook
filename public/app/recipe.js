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
    $(".recipe-gallery").append(`
    <div class="recipe-card-holder">
  <div id="${idx}" class="recipe-card">
    <div
      class="recipe-image"
      style="background-image: url(images/${recipe.recipeImg})"
    >
      <div class="view-button-holder">
        <div class="buttons view-button unhide">View</div>
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
        <div class="card-icon-text">${recipe.totalServings} servings</div>
      </div>
    </div>
    </div>
    <div class="gallery-buttons-bottom">
        <div class="buttons unhide">Edit Recipe</div>
        <div class="buttons unhide">Delete</div>
    </div>
</div>`);
  });
}

$(document).ready(function () {
  loadRecipes();
});
