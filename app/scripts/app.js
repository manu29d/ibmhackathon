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
      libraries: 'places'
    });
  })
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/crime', {
        templateUrl: 'views/crime.html',
        controller: 'CrimeCtrl',
        controllerAs: 'crime'
      })
      .when('/pollution', {
        templateUrl: 'views/pollution.html',
        controller: 'PollutionCtrl',
        controllerAs: 'pollution'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
