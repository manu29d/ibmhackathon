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
    .controller('RightBarCtrl', function ($http, $location) {
      var self = this;
      $http.get('data/master_tweets.json').then(function (tweets){ 
        self.tweets = $location.path().substr(1) && tweets.data.results[$location.path().substr(1)].tweets
      });
      this.news = [{
        text: 'Someone made a news out of it'
      }];
    });
})();
