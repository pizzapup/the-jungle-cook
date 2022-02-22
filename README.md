# [The Jungle Cook](https://arhcertclass.web.app/)


## Application Overview (the-jungle-cook)
> - [The Jungle Cook App](https://arhcertclass.web.app/)
> - [AdobeXD Prototype](https://xd.adobe.com/spec/000d9233-c620-4eb6-5884-adaea1a04abb-763c/Links)

Functional site based on [AdobeXD Prototype](https://xd.adobe.com/spec/000d9233-c620-4eb6-5884-adaea1a04abb-763c/Links). Site is responsive for desktop, tablet, and mobile devices. This site is a working CRUD application. 
User feedback is provided through alerts. The console displays information as the site is used. App is deployed to Firebase and firebase is used to load information into the app.

The site uses email/password authentication through firebase. Firebase stores the information on the user (userObj) and the user information (recipes). When users sign up, the site creates a blank array named "recipes" in their user document. The user can then create, read, update, and delete this information.

onAuthStateChanged monitors the app for changes in user logging in or out. When a user logs in the \_db, uid, userFullName, and \_userProfileInfo variables are all updated with the current user information. These are all reset on signout.

page content is loaded into the #pageContentApp div on index.html on hashchange. the hero class changes with hashchange. the galleries for browse and your-recipes are displayed using jquery loops. browse uses the local, hardcoded array RECIPES, and your-recipes loads data from the user document in firebase. RECIPES was created based on the prototype provided and used to display recipes on the browse page allowing the user to browse various recipes other than the ones they create themselves. from these galleries the user can view, edit, and delete each recipe. view-recipe loads the full recipe information onto the screen using the id of the selected recipe (there is no html page for view-recipe - the hash is changed through jquery). ingredients and instructions are display using jquery loops creating a list item `<li></li>` for each item.

- view: view full recipe details
- edit-recipe: loads recipe details into edit form for user to make changes
- delete: deletes recipe from user database

while using the create and edit forms the user can add and delete ingredients and instructions until they are ready to submit the recipe. the list will be reloaded and displayed while changes are made.

the user is updated in firebase using updateUserInfo()
create-recipe: a newRecipeObj is created from user input on the create-recipe form. this object is then pushed using push() to the local \_userProfileInfo.recipes which is then sent to firebase with updateUserInfo.

> Browse, save, and create recipes at [The Jungle Cook](https://arhcertclass.web.app/)
