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

    $scope.$on('$stateChangeSuccess', function() {
      var sidenavLeft = $mdSidenav('sidenav-left');
      sidenavLeft.close();
    });
  }
})();
