(function() {
  'use strict';

  angular
    .module('SceApp')
    .controller('SettingsUsersFormController', SettingsUsersFormController);

  /** @ngInject */
  function SettingsUsersFormController(UserService, $mdToast, $state, $stateParams) {
    var vm = this;

    vm.user = {};

    vm.saveUser = saveUser;

    init();

    function init() {
      findUser();
    }

    function findUser() {
      if ($stateParams.id) {
        // Chamar serviço para preencher usuário
        vm.user = {
          id: 1,
          name: 'Alanna',
          email: 'alanna@teste.com',
          address: 'Rua jordão, 333. Conjunto Libra 3. Foz do Iguaçu, PR.',
          cpf: '000.000.000-00',
          rg: '0.000.000-0',
          phone: '(45) 99556624'
        };
      }
    }

    function saveUser() {
      UserService.insert(vm.user).then(function success(response) {
        $mdToast.showSimple('Usuário cadastrado com sucesso');
        $state.go('settings.users_view({id: response.id})');
      }).catch(function error() {
        $mdToast.show(
          $mdToast.simple()
            .textContent('Erro ao cadastrar usuário')
            .toastClass('md-warn')
        )
      });
      //Ir para a visualização do usuário
      $state.go('settings.users_view', {id: 1});
    }
  }
})();
