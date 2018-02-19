(function() {
  'use strict';

  angular
    .module('SceApp')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider) {
    $stateProvider
      .state('settings.users_list', {
        url: '/users',
        templateUrl: 'app/settings/settings-users-list/settings-users-list.html',
        controller: 'SettingsUsersListController',
        controllerAs: 'vm'
      });

  }

})();
