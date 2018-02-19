(function() {
  'use strict';

  angular
    .module('SceApp')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider) {
    $stateProvider
      .state('template', {
        abstract: true,
        templateUrl: 'app/template/template.html',
        controller: 'TemplateController',
        controllerAs: 'vm'
      });

  }

})();
