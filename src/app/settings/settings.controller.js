(function() {
  'use strict';

  angular
    .module('templateWeb')
    .controller('SettingsController', SettingsController);

  /** @ngInject */
  function SettingsController($state) {
    var vm = this;

    vm.currentNavItem = $state.current.name;
  }
})();
