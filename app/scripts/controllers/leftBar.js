'use strict';

/**
 * @ngdoc function
 * name ibmhackathonApp.controller:LeftBarCtrl
 * @description
 * # LeftBarCtrl
 * Cotnroller of the ibmhackathon
 */
(function () {
  angular.module('ibmhackathonApp')
    .controller('LeftBarCtrl', function ($location) {
      this.chosen = $location.path() || ''; 
      this.navItems = [
        {
          title: 'Crime',
          url: '#/crime',
	  image: 'images/crime.jpg'
        },
        {
          title: 'Pollution',
          url: '#/pollution',
	  image: 'images/pollution.jpeg'
        },
        {
          title: 'Accident',
          url: '#/accident',
	  image: 'images/accident.jpg'
        }
      ];
    });
})();
