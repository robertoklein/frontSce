(function() {
  'use strict';

  angular
    .module('templateWeb')
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
    function NavbarController() {
      var vm = this;
    }
  }

})();
