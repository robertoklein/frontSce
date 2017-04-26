(function() {
  'use strict';

  angular
    .module('templateWeb')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('units', {
        url: '/units',
        parent: 'template',
        redirectTo: 'units.list',
        templateUrl: 'app/measure-units/measure-units.html'
      });

  }

})();
