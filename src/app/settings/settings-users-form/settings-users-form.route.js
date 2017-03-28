(function() {
  'use strict';

  angular
    .module('templateWeb')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider) {
    $stateProvider
      .state('settings.users_form', {
        url: '/users/new',
        templateUrl: 'app/settings/settings-users-form/settings-users-form.html',
        controller: 'SettingsUsersFormController',
        controllerAs: 'vm'
      })
      .state('settings.users_edit', {
        url: '/users/:id/edit',
        templateUrl: 'app/settings/settings-users-form/settings-users-form.html',
        controller: 'SettingsUsersFormController',
        controllerAs: 'vm'
      });

  }

})();
