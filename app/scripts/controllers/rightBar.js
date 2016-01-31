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
        text: 'Bangalore Rider Dies in Race Track Accident.'
      }, { text: 'Amazon employees looted; victims claim cops refused to help.' }];
    });
})();
