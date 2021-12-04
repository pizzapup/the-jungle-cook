/* ------------------------------------------------------ */
/*                     AUTHENTICATION                     */
/* ------------------------------------------------------ */
//
/* ---------------------- variables --------------------- */
var _db = "";
var userExists = false;
var userFullName = "";
var _userProfileInfo = {};
/* ------------------------------------------------------ */

/* ----------- initfirebase / authstatechange ----------- */
function initFirebase() {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // SIGNED IN
      console.log("auth change logged in");
      userLoggedIn();
      _db = firebase.firestore();
      var uid = user.uid;
      userExists = true;
      //
    } else {
      // SIGNED OUT
      console.log("auth change logged out");
      notLoggedIn();
      userExists = false;
      userFullName = "";
      _db = "";
      _userProfileInfo = {};
    }
  });
}

/* ---------------- signup/signin/signout --------------- */
function signUp() {
  let fName = $("#fName").val();
  let lName = $("#lName").val();
  let email = $("#signupEmail").val();
  let password = $("#signupPassword").val();
  console.log("create");
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
          /* -------------------------------------------- */
          loadRecipes();
        });
      // ...
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
/* ---------------- logged in/logged out ---------------- */
function userLoggedIn() {
  $(".login-button").html(`
  <button onclick="signOut()">Logout</button>`);
  if (user.displayName) {
    $(".userLoggedInName").html(`${user.displayName}`);
    $(".userLoggedInClear").html(``);
    $(".login-button").html(
      `<a href="login.html" class="login-button" onclick="signOut()">Logout</a>`
    );
    $(".enter-username").html(`Hey, ${user.displayName}here are your recipes!`);
    $(".load").prop("disabled", true);
  }
}
function notLoggedIn() {
  // change user specific html
  //prevent the default behaviour of the Link (e.g. redirecting to another page)
  // alert when clicked on user-only content
  $(".login-greeting").empty();
  $(".login-button").html(
    `<a href="login.html" class="login-button">Login</a>`
  );
  $(".userAccessOnly").on("click", function (event) {
    event.preventDefault();
    alert("Hello! Please sign up or log in to view this content. ");
  });
  console.log("notLoggedIn() completed");
}

/* ------------------------------------------------------ */
$(document).ready(function () {
  try {
    initFirebase();
    let app = firebase.app();
  } catch (error) {
    console.log("error ", error);
    console.log("error ", errorMessage);
  }
});
