'use strict';

/**
 * @ngdoc function
 * name ibmhackathonApp.controller:RightBarCtrl
 * @description
 * # RightBarCtrl
 * Cotnroller of the ibmhackathon
 */
(function () {
  angular.module('ibmhackathonApp')
    .controller('RightBarCtrl', function () {
      this.tweets = [{
        text: 'Someone tweeted my ass'
      }];
      this.news = [{
        text: 'Someone made a news out of it'
      }];
    });
})();
