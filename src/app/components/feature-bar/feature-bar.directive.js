(function() {
  'use strict';

  angular
    .module('templateWeb')
    .directive('appFeatureBar', appFeatureBar);

  /** @ngInject */
  function appFeatureBar() {
    return {
      restrict: 'E',
      templateUrl: 'app/components/feature-bar/feature-bar.html',
      scope: {
        title: '@',
        subtitle: '@',
        srefBack: '@',
        srefOpts: '@',
        tabs: '='
      },
      controller: FeatureBarController,
      controllerAs: 'vm',
      bindToController: true
    };

    /** @ngInject */
    function FeatureBarController($state) {
      var vm = this;

      vm.currentTab = $state.current.name;

      vm.back = back;

      function back() {
        $state.go('^');
      }

    }
  }

})();
