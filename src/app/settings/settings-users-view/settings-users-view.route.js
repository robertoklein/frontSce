(function() {
  'use strict';

  angular
    .module('SceApp')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider) {
    $stateProvider
      .state('settings.users_view', {
        url: '/users/{id:int}',
        templateUrl: 'app/settings/settings-users-view/settings-users-view.html',
        controller: 'SettingsUsersViewController',
        controllerAs: 'vm'
      });

  }

})();
