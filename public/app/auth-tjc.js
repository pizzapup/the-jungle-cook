//
/* ------------------------------------------------------ */
/*                        VARIABLES                       */
/* ------------------------------------------------------ */
var _db = "";
var userExists = false;
var userFullName = "";
var _userProfileInfo = {};
/* ------------------------------------------------------ */
function initFirebase() {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      _db = firebase.firestore();
      console.log("auth change logged in");
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      $(".login-button").html(`
        <button onclick="signOut()">Logout</button>`);
      var uid = user.uid;
      //   if (user.displayName) {
      // $(".login-greeting").html(`Hello, ${user.displayName}`);
      //   }
      userExists = true;
    } else {
      console.log("auth change logged out");
      //   $(".name").html("not signed in");
      //   $(".load").prop("disabled", true);
      userExists = false;
      userFullName = "";
      _db = "";
      _userProfileInfo = {};
      $(".login-button").html(
        `<a href="login.html" class="login-button">Login</a>`
      );
      // User is signed out
      // ...
    }
  });
}
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
      $(".name2").html(userFullName);
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
          loadLists();
        });
      // ...
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log("error ", errorMessage);
    });
}
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
$(document).ready(function () {
  try {
    initFirebase();
    let app = firebase.app();
  } catch (error) {
    console.log("error ", error);
    console.log("error ", errorMessage);
  }
});
