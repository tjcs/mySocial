

angular.module('com.htmlxprs.socialAuth.controllers',[]).controller('LoginController',['$scope', 'FIREBASE_REF','$firebaseSimpleLogin','userSession',function($scope,FIREBASE_REF,$firebaseSimpleLogin,userSession){

    userSession.auth=$firebaseSimpleLogin(new Firebase(FIREBASE_REF));

    $scope.login=function(provider){
        userSession.auth.$login(provider);
    }

}]).controller('HomeController',['$scope','userSession',function($scope,userSession){

    $scope.user=userSession.user;

    $scope.logout=function(){
        userSession.auth.$logout();
    }

}])


// THIS PART IS WHAT IS NOT WORKING

.controller("ApplyController", function($scope, $firebaseObject) {
	$scope.rangeValue = undefined;

  var ref = new Firebase("https://dazzling-torch-8834.firebaseio.com/");

ref.authAnonymously(function(error, authData) {
  if (error) {
    console.log("Login Failed!", error);
  } else {
    console.log("Authenticated successfully with payload:", authData);
  }
});

	$scope.addValue = function(newValue){
		console.log(newValue);
		$scope.values.$add({
			title: newValue,
		})
	}
})



.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
  
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});
  
  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
});


// .controller('AdoptCtrl', function($scope, $stateParams, $firebase, $log, $location) {

//   var ref = new Firebase('https://ionic-seed.firebaseio.com/data/');
//   $scope.adopters = $firebase(ref);
    
//   $scope.createAdopter = function (adopter) {
//       var ref = $scope.adopters.$add(adopter);
//       $scope.adopter = {};
//       $log.info("Your data has been saved to https://ionic-seed.firebaseio.com/data/" + ref.name() + ".json");
//       alert("Saved!");
//       $location.path("/");
//   };
// });
