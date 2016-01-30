'use strict';

/**
 * @ngdoc overview
 * @name ibmhackathonApp
 * @description
 * # ibmhackathonApp
 *
 * Main module of the application.
 */
angular
  .module('ibmhackathonApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'uiGmapgoogle-maps'
  ])
  .config(function (uiGmapGoogleMapApiProvider) {
    uiGmapGoogleMapApiProvider.configure({
      key: 'AIzaSyAnP8o7oxfYthhi6Nlxu8FQMBhm1qRxU0g',
      v: '3.20',
      libraries: 'weather,geometry,visualization'
    });
  })
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
