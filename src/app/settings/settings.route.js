(function() {
  'use strict';

  angular
    .module('SceApp')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.when('/settings', 'settings/users');

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
