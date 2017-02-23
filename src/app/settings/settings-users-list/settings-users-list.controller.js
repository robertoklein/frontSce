(function() {
  'use strict';

  angular
    .module('templateWeb')
    .controller('SettingsUsersListController', SettingsUsersListController);

  /** @ngInject */
  function SettingsUsersListController() {
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

    vm.hasAnyUserSelected = hasAnyUserSelected;
    vm.toggleAll = toggleAll;
    vm.toggleUser = toggleUser;
    vm.isUserSelected = isUserSelected;

    function hasAnyUserSelected() {
      return vm.selectedUsers.length > 0;
    }

    function toggleAll() {
      if (vm.selectedUsers.length == 0 || vm.selectedUsers.length < vm.users.length) {
        vm.selectedUsers = vm.users;
      } else {
        vm.selectedUsers = [];
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
  }
})();
