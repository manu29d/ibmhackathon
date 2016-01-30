'use strict';

/**
 * @ngdoc function
 * @name ibmhackathonApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ibmhackathonApp
 */
angular.module('ibmhackathonApp')
  .controller('MainCtrl', function ($scope, uiGmapGoogleMapApi) {
    $scope.map = {center: {latitude: 19.4230512, longitude: 78.44712969999999}, zoom: 8};
    uiGmapGoogleMapApi.then(function (maps) {
      console.log(maps);
    });
  });
