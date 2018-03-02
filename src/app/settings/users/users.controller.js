(function () {
  'use strict';

  angular
    .module('SceApp')
    .controller('settingsUsersController', settingsUsersController);

  /** @ngInject */
  function settingsUsersController($q,settingsUserService) {
    var vm = this;

    vm.allUsers;
    vm.getAllUsers = getAllUsers;

    getAllUsers();

    function getAllUsers() {
      settingsUserService.getAllUsers().then(function (data) {
        vm.allUsers = data;
      });
    }

  }
})();
