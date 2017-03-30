(function() {
  'use strict';

  angular
    .module('templateWeb')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider) {
    $stateProvider
      .state('units', {
        url: '/units',
        parent: 'template',
        templateUrl: 'app/measure-units/measure-units-list/measure-units-list.html',
        controller: 'MeasureUnitsListController',
        controllerAs: 'vm'
      });

  }

})();
