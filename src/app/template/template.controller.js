(function() {
  'use strict';

  angular
    .module('templateWeb')
    .controller('TemplateController', TemplateController);

  /** @ngInject */
  function TemplateController() {
    var vm = this;

    vm.user = {
      name: "Anderson Rodrigo Davi",
      email: 'anderson.davi@pti.org.br'
    };

  }
})();
