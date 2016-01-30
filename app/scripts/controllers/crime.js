'use strict';

/**
 * @ngdoc function
 * @name ibmhackathonApp.controller:CrimeCtrl
 * @description
 * # CrimeCtrl
 * Controller of the ibmhackathonApp
 */
angular.module('ibmhackathonApp')
  .controller('CrimeCtrl', function ($scope, uiGmapGoogleMapApi) {
    $scope.map = {center: {latitude: 19.4230512, longitude: 78.44712969999999}, zoom: 8};
  });
