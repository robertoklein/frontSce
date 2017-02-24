(function() {
  'use strict';

  angular
    .module('templateWeb')
    .controller('SettingsUsersListController', SettingsUsersListController);

  /** @ngInject */
  function SettingsUsersListController($mdDialog) {
    var vm = this;

    vm.selectedUsers = [];
    vm.users = [
      {
        name: 'Alanna',
        email: 'alanna@teste.com'
      },
      {
        name: 'Anderson',
        email: 'anderson@teste.com'
      },
      {
        name: 'Jean',
        email: 'jean@teste.com'
      },
      {
        name: 'Alanna',
        email: 'alanna@teste.com'
      },
      {
        name: 'Anderson',
        email: 'anderson@teste.com'
      },
      {
        name: 'Jean',
        email: 'jean@teste.com'
      },
      {
        name: 'Alanna',
        email: 'alanna@teste.com'
      },
      {
        name: 'Anderson',
        email: 'anderson@teste.com'
      },
      {
        name: 'Jean',
        email: 'jean@teste.com'
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
