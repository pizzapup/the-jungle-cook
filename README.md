# theJungleCook

## URL:

https://arhcertclass.web.app/

### Prototype:

https://xd.adobe.com/spec/000d9233-c620-4eb6-5884-adaea1a04abb-763c/Links

#### Description

Functional site based on adobeXD prototype. Site is responsive for desktop, tablet, and mobile devices. This site is a working CRUD application.
User feedback is provided through alerts. The console displays information as the site is used. App is deployed to Firebase and firebase is used to load information into the app.

onhashchange checks for changes in the url hash and will update the contents of "#pageContentApp" with the associated data.
the data for browse and your-recipe is displayed using jquery to loop through each object in the array. when loading the recipes, the recipe idx is set as the id. view-recipe accesses this id and loads the recipe information for the associated idx. ingredients and instructions are loaded into the "view recipe" and forms by using jquery loops creating a list item `<li></li>` for each item.
RECIPES was created based on the prototype provided and used to display recipes on the browse page allowing the user to browse various recipes other than the ones they create themselves.
\_userProfileInfo.recipes is the user list of recipes stored in firebase.
create-recipe: a newRecipeObj is created from user input on the create-recipe form. this object is then pushed using push() to the local \_userProfileInfo.recipes which is then sent to firebase with updateUserInfo.

The site uses email/password authentication through firebase. Firebase stores the information on the user (userObj) and the user information (recipes). When users sign up, the site creates a blank array named "recipes" in their user document. The user can then create, read, update, and delete this information.

onAuthStateChanged monitors the app for changes in user logging in or out. When a user logs in the \_db, uid, userFullName, and \_userProfileInfo variables are all updated with the users information. These are all reset on signout.
