// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('socialAuth', ['ionic','firebase','com.htmlxprs.socialAuth.controllers','com.htmlxprs.socialAuth.services'])

.run(function($ionicPlatform,$state,$rootScope,userSession) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }

    $state.go('login');

    $rootScope.$on('$firebaseSimpleLogin:login', function(event, user) {
        userSession.user=user;
        $state.go('home');
    });

    $rootScope.$on('$firebaseSimpleLogin:error', function(event, error) {
         console.log('Error logging user in: ', error);
    });

    $rootScope.$on('$firebaseSimpleLogin:logout', function(event) {
          $state.go('login');
    });
  });
}).config(['$stateProvider',function($stateProvider){

        $stateProvider.state('login',{
            url:'/login',
            controller:'LoginController',
            templateUrl:'views/login.html'

        }).state('home',{
            url:'/home',
            controller:'HomeController',
            templateUrl:'views/home.html'

//this doesn't work at all
        // }).state('app',{
        //     url:'/app',
        //     abstract: true,
        //     templateUrl:'views/menu.html'
        //     controller:'AppCtrl',

        }).state('apply',{
            url:'/apply',
            // controller: 'ApplyController',
            templateUrl:'views/apply.html'

        }).state('apply2',{
            url:'/apply2',
            templateUrl:'views/apply2.html'    

        }).state('done',{
            url:'/done',
            templateUrl:'views/done.html'  

        }).state('legal',{
            url:'/legal',
            templateUrl:'views/legal.html'      

        }).state('about',{
            url:'/about',
            templateUrl:'views/about.html'       

        });

// totally fucks it up for some reason... but ideally would have this
  // $urlRouterProvider.otherwise('/home');
}]);

