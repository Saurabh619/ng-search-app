(function() {
  'use strict';

  angular.module('banker').factory('GatewayFactory', GatewayFactory);

  /** @ngInject */
  function GatewayFactory($log, $q, $http) {
    var apiHost = 'https://app.fyle.in/api/';

    var service = {
      apiHost: apiHost,
      execute: execute
    };

    return service;

    function execute(city, limit, offset) {
      if (!limit) {
        limit = 50;
      }

      if (!offset) {
        offset = 0;
      }

      var promise = $q.defer();
      var baseURL = apiHost + 'bank_branches?city=' + city.toUpperCase() + '&offset=' + offset + '&limit=' + limit;
      var headers = {
        headers: {
          'Content-Type': 'application/json'
        }
      }
      $http.get(baseURL, headers).then(function(result) {
        $log.debug('Created object, ', result);
        promise.resolve(result);
      }, function(result) {
        $log.debug("Failed to create object:", result);
        promise.reject(result);
      });
      return promise.promise;
    }
  }
})();
