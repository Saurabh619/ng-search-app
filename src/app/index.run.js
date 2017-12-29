(function() {
  'use strict';

  angular
    .module('banker')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
