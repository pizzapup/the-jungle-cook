/* ------------------------------------------------------ */
/*                     AUTHENTICATION                     */
/* ------------------------------------------------------ */
//
/* ---------------------- variables --------------------- */
// database that attaches to firestore when user is logged in
var _db = "";
var userExists = false;
var userFullName = "";
var _userProfileInfo = {};
/* ------------------------------------------------------ */
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
/* ----------- initfirebase / authstatechange ----------- */
function initFirebase() {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // SIGNED IN
      // database attaches to firestore
      _db = firebase.firestore();
      console.log("auth change logged in");
      var uid = user.uid;
      userExists = true;
      console.log(_userProfileInfo);
      /* ------------------------------------------------------ */
      $(".user-greeting").html(`${user.displayName}`);
      $(".user-only-content").attr("class", "userLoggedIn");
      $("#userLoggedInNAV").html(
        `<a href="your-recipe.html#your-recipe" class="userLoggedInNAV">Your Recipe</a>`
      );
      // $(".login-button").html("Logout");
      $(".load").prop("disabled", true);
      //
    } else {
      // SIGNED OUT
      console.log("auth change logged out");
      userExists = false;
      userFullName = "";
      // database no longer attached to firestore
      _db = "";
      _userProfileInfo = {};
      /* ------------------------------------------------ */
      $(".login-greeting").empty();
      $(".user-only-content").toggleClass("userLoggedOut");
      $(".userAccessOnly").on("click", function (event) {
        event.preventDefault();
        alert("Hello! Please sign up or log in to view this content. ");
        /* ---------------------------------------------- */
      });
    }
  });
}

/* ---------------- signup/signin/signout --------------- */
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
        // finds or creates collection called Users
        .collection("Users")
        // creates document in Users with the user.uid
        .doc(user.uid)
        .get()
        .then((doc) => {
          console.log(doc.data());
          _userProfileInfo = doc.data();

          console.log("login userinfo: ", _userProfileInfo);
          /* -------------------------------------------- */
        })
        .catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
          console.log("error ", errorMessage);
        });

      // ...
    });
}
function signOut() {
  firebase
    .auth()
    .signOut()
    .then(() => {
      // $(".login-button").html("Login");
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

/* ------------------------------------------------------ */

function createRecipe() {
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
$(document).ready(function () {
  try {
    initFirebase();
    let app = firebase.app();
  } catch (error) {
    console.log("error ", error);
    console.log("error ", errorMessage);
  }
});
