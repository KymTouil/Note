var myApp = angular.module('note', ['ui.router']);

myApp.config(function($stateProvider, $urlRouterProvider) {
  var loginState = {
    name: 'login',
    url: '/login',
    templateUrl: 'login/login-view.html',
    controller: 'loginController'
  }

  var createState = {
    name: 'create-account',
    url: '/create-account',
    templateUrl: 'create-account/create-view.html',
    controller: 'createController'
  }

  $urlRouterProvider.otherwise('/login');

  $stateProvider.state(loginState);
  $stateProvider.state(createState);
});
