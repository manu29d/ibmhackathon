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
          url: '#/crime'
        },
        {
          title: 'Pollution',
          url: '#/pollution'
        },
        {
          title: 'Accident',
          url: '#/accident'
        }
      ];
    });
})();
