(function() {
  'use strict';

  angular
    .module('SceApp')
    .directive('appNavbar', appNavbar);

  /** @ngInject */
  function appNavbar() {
    return {
      restrict: 'E',
      templateUrl: 'app/components/navbar/navbar.html',
      scope: {
        user: '='
      },
      controller: NavbarController,
      controllerAs: 'vm',
      bindToController: true
    };

    /** @ngInject */
    function NavbarController($mdSidenav) {
      var vm = this;

      vm.toggleSidenavLeft = buildToggler('sidenav-left');

      function buildToggler(navId) {
        return fn;

        function fn() {
          $mdSidenav(navId).toggle();
        }
      }

    }
  }

})();
