angular.module('app').config(function($stateProvider,$urlRouterProvider){

  $urlRouterProvider.when("","/");
  $urlRouterProvider.otherwise("/");

  $stateProvider.state('/login', {
    url:'/login',
    templateUrl:'js/login/login.template.html',
    controller: 'LoginCtrl'
  })
  .state('/home', {
    url:'/home',
    templateUrl:'js/home/home.template.html',
    controller: 'HomeCtrl'
  })

  });
