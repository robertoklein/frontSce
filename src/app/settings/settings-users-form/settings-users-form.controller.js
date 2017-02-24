(function() {
  'use strict';

  angular
    .module('templateWeb')
    .controller('SettingsUsersFormController', SettingsUsersFormController);

  /** @ngInject */
  function SettingsUsersFormController(UserService, $mdToast, $state) {
    var vm = this;

    vm.user = {};

    vm.saveUser = saveUser;

    function saveUser() {
      UserService.insert(vm.user).then(function success(response) {
        $mdToast.showSimple('Usuário cadastrado com sucesso');
        $state.go('settings.users_list');
      }).catch(function error() {
        $mdToast.show(
          $mdToast.simple()
            .textContent('Erro ao cadastrar usuário')
            .toastClass('md-warn')
        )
      });
    }
  }
})();
