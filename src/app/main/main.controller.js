
(function () {
  'use strict';

  angular
    .module('SceApp')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($q, mainService, $filter, $timeout) {
    var vm = this;

    vm.dashboardUsr = {};

    vm.dashboardUsrBackground = 'default-primary-500';
    
    mainService.getDashboardUsr().then(function (data) {
      vm.dashboardUsr = data;
    }, function (error) {
      console.log(error)
    });

   
  }
})();
