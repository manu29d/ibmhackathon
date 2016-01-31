'use strict';

/**
 * @ngdoc function
 * @name ibmhackathonApp.controller:AccidentCtrl
 * @description
 * # AccidentCtrl
 * Controller of the ibmhackathonApp
 */
(function (){
  angular.module('ibmhackathonApp')
    .controller('AccidentCtrl', function (uiGmapGoogleMapApi, AccidentDataService) {
      var self = this;
      self.map = {center: {latitude: 19.4230512, longitude: 78.44712969999999}, zoom: 6};
      self.accidentData = AccidentDataService.getData(function (data) {
        if (data) {
          populateMarkers(data)
        }
      });
      function populateMarkers(data) {
        self.markers = data.map(function (obj, index) {
          obj.id = index;
          obj.icon = 'http://inthespace.net/graphics/icon_google_maps2.png' 
          return obj;
        });
      }
    });
})();
