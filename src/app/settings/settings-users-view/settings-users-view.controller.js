(function() {
  'use strict';

  angular
    .module('SceApp')
    .controller('SettingsUsersViewController', SettingsUsersViewController);

  /** @ngInject */
  function SettingsUsersViewController($mdDialog, $mdToast, $state, $stateParams) {
    var vm = this;

    vm.user = {};
    vm.showRemoveConfirm = showRemoveConfirm;

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

    function showRemoveConfirm(event) {
      // Appending dialog to document.body to cover sidenav in docs app
      var confirm = $mdDialog.confirm()
        .title('Excluir Usuário')
        .textContent('Nome do usuário: ' + vm.user.name)
        .ariaLabel('Lucky day')
        .targetEvent(event)
        .ok('Excluir')
        .cancel('Cancelar');

      $mdDialog.show(confirm).then(onConfirmRemove);

      function onConfirmRemove() {
        removeUser(vm.user);
      }
    }

    function removeUser(user) {
      //Chamar serviço para remover usuário
      $mdToast.showSimple('Usuário removido com sucesso');
      $state.go('settings.users_list');
    }
  }
})();
