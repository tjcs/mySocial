
angular.module('com.htmlxprs.socialAuth.services',[])
    .value('FIREBASE_REF','https://dazzling-torch-8834.firebaseio.com')
    .value('userSession',{});

//Uncaught ReferenceError: require is not defined
var Firebase = require("firebase");

// Error: Firebase is not defined OR getting 
//FIREBASE WARNING: FirebaseRef.auth() being deprecated. 
//Please use FirebaseRef.authWithCustomToken() instead.   ---????

var ref = new Firebase("https://dazzling-torch-8834.firebaseio.com");
ref.authAnonymously(function(error, authData) {
  if (error) {
    console.log("Login Failed!", error);
  } else {
    console.log("Authenticated successfully with payload:", authData);
  }
});

// Firebase ref = new Firebase("https://<YOUR-FIREBASE-APP>.firebaseio.com");
// ref.addAuthStateListener(new Firebase.AuthStateListener() {
//     @Override
//     public void onAuthStateChanged(AuthData authData) {
//         if (authData != null) {
//             // user is logged in
//         } else {
//             // user is not logged in
//         }
//     }
// });