(function() {
  'use strict';

  angular
    .module('templateWeb')
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
