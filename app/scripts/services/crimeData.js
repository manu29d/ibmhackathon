'use strict';
(function () {
  angular.module('ibmhackathonApp')
    .service('CrimeDataService', function ($http) {
      this.getData = function (cb) {
        return $http.get('data/master_crime.json')
                .then(function (crimeData) {
                  return cb(crimeData && crimeData.data);
                });
      }
    });
})();
