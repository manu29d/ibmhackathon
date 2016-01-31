'use strict';

/**
 * @ngdoc function
 * @name ibmhackathonApp.controller:PollutionCtrl
 * @description
 * # PollutionCtrl
 * Controller of the ibmhackathonApp
 */
(function (){
  angular.module('ibmhackathonApp')
    .controller('PollutionCtrl', function (uiGmapGoogleMapApi, PollutionDataService) {
      var self = this;
      self.map = {center: {latitude: 19.4230512, longitude: 78.44712969999999}, zoom: 6};
      self.pollutionData = PollutionDataService.getData(function (data) {
        if (data) {
          populateMarkers(data)
        }
      });
      function populateMarkers(data) {
        self.markers = data.map(function (obj, index) {
          return {
            latitude: obj.coords.lat,
            longitude: obj.coords.lng,
            data: obj.data,
            level: obj.level,
            id: index,
            icon: 'http://inthespace.net/graphics/icon_google_maps2.png' 
          }
        });
      }
    });
})();
