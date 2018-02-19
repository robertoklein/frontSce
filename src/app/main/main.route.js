(function() {
  'use strict';

  angular
    .module('SceApp')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider) {
    $stateProvider
      .state('main', {
        url: '/',
        parent: 'template',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'vm'
      });

  }

})();
