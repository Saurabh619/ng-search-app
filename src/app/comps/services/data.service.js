(function() {
  'use strict';

  angular.module('banker').factory('DataService', DataService);

  /** @ngInject */
  function DataService($log, $q, $http) {

    var cities = [ "bangalore", "delhi", "mumbai", "jaipur", "udaipur", "chennai" ];
    var headers = [ "ifsc", "bank_id", "bank_name", "branch", "address", "city", "district", "state" ];

    return {
      getCities: function() {
        return cities;
      },
      getHeaders: function() {
        return headers;
      }
    }
  }
})();
