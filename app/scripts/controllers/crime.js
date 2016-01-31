'use strict';

/**
 * @ngdoc function
 * @name ibmhackathonApp.controller:CrimeCtrl
 * @description
 * # CrimeCtrl
 * Controller of the ibmhackathonApp
 */
(function (){
  angular.module('ibmhackathonApp')
    .controller('CrimeCtrl', function (uiGmapGoogleMapApi, CrimeDataService) {
      var self = this;
      self.map = {center: {latitude: 19.4230512, longitude: 78.44712969999999}, zoom: 6};
      self.crimeData = CrimeDataService.getData(function (data) {
        if (data) {
          populateMarkers(data)
        }
      });
      function populateMarkers(data) {
        self.markers = data.map(function (obj, index) {
          return {
            latitude: obj.coords.lat,
            longitude: obj.coords.lng,
            address: obj.address,
            crimes: obj.crimes,
            data: obj.data,
            id: index,
            icon: 'http://inthespace.net/graphics/icon_google_maps2.png' 
          }
        });
      }
    });
})();
