(function() {
  'use strict';

  angular
    .module('SceApp')
    .controller('TemplateController', TemplateController);

  /** @ngInject */
  function TemplateController($scope, $mdSidenav) {
    var vm = this;

    vm.user = {
      name: "Anderson Rodrigo Davi",
      email: 'anderson.davi@pti.org.br'
    };

    vm.sidenavLeft = null;

    $scope.$on('$stateChangeSuccess', function() {
      vm.sidenavLeft = $mdSidenav('sidenav-left');
      vm.sidenavLeft.close();
    });
  }
})();
