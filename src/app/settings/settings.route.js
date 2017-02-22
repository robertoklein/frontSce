(function() {
  'use strict';

  angular
    .module('templateWeb')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider) {
    $stateProvider
      .state('settings', {
        url: '/settings',
        parent: 'template',
        templateUrl: 'app/settings/settings.html',
        controller: 'SettingsController',
        controllerAs: 'vm'
      });

  }

})();
