(function() {
  'use strict';

  angular
    .module('templateWeb')
    .directive('appSidenav', appSidenav);

  /** @ngInject */
  function appSidenav() {
    return {
      restrict: 'E',
      replace: false,
      templateUrl: 'app/components/sidenav/sidenav.html',
      scope: {
      },
      controller: SidenavController,
      controllerAs: 'vm',
      bindToController: true
    };

    /** @ngInject */
    function SidenavController() {
      var vm = this;

    }
  }

})();
