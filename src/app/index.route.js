(function() {
  'use strict';

  angular
    .module('templateWeb')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
  }

})();
