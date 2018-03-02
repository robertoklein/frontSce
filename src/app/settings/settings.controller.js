(function() {
  'use strict';

  angular
    .module('SceApp')
    .controller('SettingsController', SettingsController);

  /** @ngInject */
  function SettingsController($q,settingsService) {
    var vm = this;

    vm.dashboardAdm = {};
    vm.dashboardAdmBackground = 'blue-grey';
    
    settingsService.getDashboardAdm().then(function (data) {
      vm.dashboardAdm = data;
    }, function (error) {
      console.log(error)
    });

  }
})();
