(function() {
  'use strict';

  angular
    .module('redirectTo', [])
    .run(runRedirectTo);

  /** @ngInject */
  function runRedirectTo($rootScope, $state) {

    /**
     * suporte ao atributo 'redirectTo' na definição de rotas
     */
    $rootScope.$on('$stateChangeStart', function(evt, to, params) {
      if (to.redirectTo) {
        evt.preventDefault();
        var state = null;
        if (typeof to.redirectTo === 'function') {
          state = to.redirectTo(evt, to, params);
        } else {
          state = to.redirectTo;
        }
        $state.go(state, params);
      }
    });
  }

})();
