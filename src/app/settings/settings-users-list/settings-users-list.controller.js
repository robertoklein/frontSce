(function() {
  'use strict';

  angular
    .module('SceApp')
    .controller('SettingsUsersListController', SettingsUsersListController);

  /** @ngInject */
  function SettingsUsersListController($mdDialog) {
    var vm = this;

    vm.selectedUsers = [];
    vm.users = [
      {
        id: 1,
        name: 'Alanna',
        email: 'alanna@teste.com',
        address: 'Rua jordão, 333. Conjunto Libra 3. Foz do Iguaçu, PR.',
        cpf: '000.000.000-00',
        rg: '0.000.000-0',
        phone: '(45) 99556624'
      },
      {
        id: 2,
        name: 'Anderson',
        email: 'anderson@teste.com',
        address: 'Rua jordão, 333. Conjunto Libra 3. Foz do Iguaçu, PR.',
        cpf: '000.000.000-00',
        rg: '0.000.000-0',
        phone: '(45) 99556624'
      },
      {
        id: 3,
        name: 'Jean',
        email: 'jean@teste.com',
        address: 'Rua jordão, 333. Conjunto Libra 3. Foz do Iguaçu, PR.',
        cpf: '000.000.000-00',
        rg: '0.000.000-0',
        phone: '(45) 99556624'
      },
      {
        id: 4,
        name: 'Alanna',
        email: 'alanna@teste.com',
        address: 'Rua jordão, 333. Conjunto Libra 3. Foz do Iguaçu, PR.',
        cpf: '000.000.000-00',
        rg: '0.000.000-0',
        phone: '(45) 99556624'
      },
      {
        id: 5,
        name: 'Anderson',
        email: 'anderson@teste.com',
        address: 'Rua jordão, 333. Conjunto Libra 3. Foz do Iguaçu, PR.',
        cpf: '000.000.000-00',
        rg: '0.000.000-0',
        phone: '(45) 99556624'
      },
      {
        id: 6,
        name: 'Jean',
        email: 'jean@teste.com',
        address: 'Rua jordão, 333. Conjunto Libra 3. Foz do Iguaçu, PR.',
        cpf: '000.000.000-00',
        rg: '0.000.000-0',
        phone: '(45) 99556624'
      },
      {
        id: 7,
        name: 'Alanna',
        email: 'alanna@teste.com',
        address: 'Rua jordão, 333. Conjunto Libra 3. Foz do Iguaçu, PR.',
        cpf: '000.000.000-00',
        rg: '0.000.000-0',
        phone: '(45) 99556624'
      },
      {
        id: 8,
        name: 'Anderson',
        email: 'anderson@teste.com',
        address: 'Rua jordão, 333. Conjunto Libra 3. Foz do Iguaçu, PR.',
        cpf: '000.000.000-00',
        rg: '0.000.000-0',
        phone: '(45) 99556624'
      },
      {
        id: 9,
        name: 'Jean',
        email: 'jean@teste.com',
        address: 'Rua jordão, 333. Conjunto Libra 3. Foz do Iguaçu, PR.',
        cpf: '000.000.000-00',
        rg: '0.000.000-0',
        phone: '(45) 99556624'
      }
    ];

    vm.limit = 5;
    vm.page = 1;
    vm.limitOptions = [5, 10, 15, {
      label: "Todos",
      value: function () {
        return vm.users.length;
      }
    }];

    vm.menu = [
      {
        name: "Usuários",
        route: "settings.users_list"
      }
    ];

    vm.hasAnyUserSelected = hasAnyUserSelected;
    vm.toggleAll = toggleAll;
    vm.toggleUser = toggleUser;
    vm.isUserSelected = isUserSelected;
    vm.isAllUsersSelected = isAllUsersSelected;
    vm.isIndeterminate = isIndeterminate;
    vm.offset = offset;
    vm.showRemoveConfirm = showRemoveConfirm;
    vm.noUserSelected = noUserSelected;
    vm.removeSelectedUsers = removeSelectedUsers;

    function hasAnyUserSelected() {
      return vm.selectedUsers.length > 0;
    }

    function noUserSelected() {
      return vm.selectedUsers.length === 0;
    }

    function toggleAll() {

      if (isAllUsersSelected(vm.selectedUsers)) {
        vm.selectedUsers = [];
      }
      else {
        vm.selectedUsers = vm.users.concat([]);
      }
    }

    function toggleUser(user) {
      var index = vm.selectedUsers.indexOf(user);

      if (index > -1) {
        vm.selectedUsers.splice(index, 1);
      } else {
        vm.selectedUsers.push(user);
      }
    }

    function isUserSelected(user, selectedUsers) {
      return selectedUsers.indexOf(user) > -1;
    }

    function isAllUsersSelected(selectedUsers) {
      return vm.users.length !== 0 && selectedUsers.length == vm.users.length;
    }

    function isIndeterminate() {
      return vm.selectedUsers.length !== 0 &&
        vm.selectedUsers.length !== vm.users.length;
    }

    function offset() {
      return (vm.page - 1) * vm.limit;
    }

    function showRemoveConfirm(event, user) {
      // Appending dialog to document.body to cover sidenav in docs app
      var confirm = $mdDialog.confirm()
        .title('Excluir Usuário')
        .textContent('Nome do usuário: ' + user.name)
        .ariaLabel('Lucky day')
        .targetEvent(event)
        .ok('Excluir')
        .cancel('Cancelar');

      $mdDialog.show(confirm).then(onConfirmRemove);

      function onConfirmRemove() {
        removeUser(user);
      }
    }

    function removeUser(user) {
      removeUserFromList(vm.users, user);
      unselectedUser(user);
    }

    function unselectedUser(user) {
      removeUserFromList(vm.selectedUsers, user);
    }

    function removeUserFromList(users, user) {
      var index = users.indexOf(user);
      if (index > -1) {
        users.splice(index, 1);
      }
    }

    function removeSelectedUsers() {
      angular.forEach(vm.selectedUsers, function(selectedUser) {
        removeUserFromList(vm.users, selectedUser);
      });
      vm.selectedUsers = [];
    }

  }
})();
