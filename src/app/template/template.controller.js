(function() {
  'use strict';

  angular
    .module('templateWeb')
    .controller('TemplateController', TemplateController);

  /** @ngInject */
  function TemplateController($scope, $mdSidenav) {
    var vm = this;

    vm.user = {
      name: "Anderson Rodrigo Davi",
      email: 'anderson.davi@pti.org.br'
    };

    vm.sidenavLeft = $mdSidenav('sidenav-left');

    $scope.$on('$stateChangeSuccess', function() {
      vm.sidenavLeft.close();
    });
  }
})();
