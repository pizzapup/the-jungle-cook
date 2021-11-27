function initListeners() {
    $(".bars").click(function(e) {
        $(".bars").toggleClass("active");
        $(".links").toggleClass("active");
    });
    $(".links a").click(function(e) {
        $(".bars").toggleClass("active");
        $(".links").toggleClass("active");
    });


    /* ---------------------- login --------------------- */
    $("#loginSubmit").click(function (e) {
        e.preventDefault();
        let email = $("#loginEmail").val();
        let password = $("#loginPassword").val();
        console.log("inputs " + email + ' ' + password)
    });

    /* --------------------- signup --------------------- */
    $("#signupSubmit").click(function (e) {
        e.preventDefault();
        let fName = $("#signupfName").val();
        let lName = $("#signuplName").val();
        let email = $("#signupEmail").val();
        let password = $("#signupPassword").val();
        console.log("inputs " + fName + '\n' + lName + '\n' + email + '\n' + password)
    });
    $("#createRecipeSubmit").click(function (e) {
        e.preventDefault();
        let recipeName = $("#recipeName").val();
        let recipeDescription = $("#recipeDescription").val();
        let totalTime = $("#totalTime").val();
        let servingSize = $("#servingSize").val();
        let ingredientOne = $("#ingredientOne").val();
        let ingredientTwo = $("#ingredientTwo").val();
        let ingredientThree = $("#ingredientThree").val();
        let instructionOne = $("#instructionOne").val();
        let instructionTwo = $("#instructionTwo").val();
        let instructionThree = $("#instructionThree").val();
        console.log("Recipe Information" + '\n' + "Recipe Name: " + recipeName + '\n' + "Recipe Description: " + recipeDescription + '\n' + "Total Time: " + totalTime + '\n' + "Serving Size: " + servingSize + '\n' + "Ingredient One: " + ingredientOne + '\n' + "Ingredient Two: " + ingredientTwo + '\n' + "Ingredient Three: " + ingredientThree + '\n' + "Instruction One: " + instructionOne + '\n' + "Instruction Two: " + instructionTwo + '\n' + "Instruction Three: " + instructionThree + '\n') 
    });

    
    $("#editRecipeSubmitSubmit").click(function (e) {
        e.preventDefault();
        let recipeName = $("#eRecipeName").val();
        let recipeDescription = $("#eRecipeDescription").val();
        let totalTime = $("#eTotalTime").val();
        let servingSize = $("#eServingSize").val();
        let ingredientOne = $("#eIngredientOne").val();
        let ingredientTwo = $("#eIngredientTwo").val();
        let ingredientThree = $("#eIngredientThree").val();
        let instructionOne = $("#eInstructionOne").val();
        let instructionTwo = $("#eInstructionTwo").val();
        let instructionThree = $("#eInstructionThree").val();
        console.log("Recipe Information" + '\n' + '\n' + "Recipe Name:  " + recipeName + '\n' + "Recipe Description:  " + recipeDescription + '\n' + "Total Time:  " +  totalTime + '\n' + "Serving Size:  " + servingSize + '\n' + "Ingredient 1:  " + ingredientOne + '\n' + "Ingredient 2:  " + ingredientTwo + '\n' + "Ingredient 3:  " + ingredientThree + '\n' + "Instruction 1:  " + instructionOne + '\n' + "Instruction 2:  " + instructionTwo + '\n' + "Instruction 3:  " + instructionThree + '\n') 
    });

    // EDIT: load input into form
    // loads recipe information into "edit recipe page"
    $("#editRecipeSubmit").click(function (e) {
        e.preventDefault();
        let userObj = {
            // recipeImage: "",
            RecipeName: "Supreme Pizza",
            eRecipeDescription: "Make pizza night super duper out of",
            eTotalTime: "1h 24min",
            eServingSize: "4 servings",
            // ingredient: "",
            // instructions: "",

        };
        console.log(userObj);
        $("#eRecipeName").val(userObj.RecipeName);
        $("#eRecipeDescription").val(userObj.eRecipeDescription);
        $("#eTotalTime").val(userObj.eTotalTime);
        $("#eServingSize").val(userObj.eServingSize);

    });

    // display button html in console when clicked
    $("div.button").click(function() {
        console.log($(this).text());
    });

}
$(document).ready(function () {
    initListeners();
});

