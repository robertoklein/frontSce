(function() {
  'use strict';

  angular
    .module('SceApp')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider) {
    $stateProvider
      .state('units.list', {
        url: '',
        templateUrl: 'app/measure-units/measure-units-list/measure-units-list.html',
        controller: 'MeasureUnitsListController',
        controllerAs: 'vm'
      });

  }

})();
