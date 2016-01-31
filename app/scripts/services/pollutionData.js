'use strict';
(function () {
  angular.module('ibmhackathonApp')
    .service('PollutionDataService', function ($http) {
      this.getData = function (cb) {
        return $http.get('data/master_accidents_2011.json')
                .then(function (pollutionData) {
                  return cb(pollutionData && pollutionData.data);
                });
      }
    });
})();
