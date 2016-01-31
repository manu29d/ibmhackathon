'use strict';
(function () {
  angular.module('ibmhackathonApp')
    .service('AccidentDataService', function ($http) {
      this.getData = function (cb) {
        return $http.get('data/master_accidents_2012.json')
                .then(function (accidentData) {
                  return cb(accidentData && accidentData.data);
                });
      }
    });
})();
