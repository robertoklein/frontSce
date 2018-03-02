(function() {
  'use strict';

  angular
    .module('SceApp')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($urlRouterProvider) {
    $urlRouterProvider.otherwise('/newOrder');
  }

})();
