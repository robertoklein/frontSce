(function() {
  'use strict';

  angular
    .module('templateWeb')
    .controller('MeasureUnitsFormController', MeasureUnitsFormController);

  /** @ngInject */
  function MeasureUnitsFormController($mdDialog, unit) {
    var vm = this;

    vm.unit = unit || {};

    vm.cancel = cancel;
    vm.save = save;

    init();

    function init() {
      if (unit) {
        vm.title = "Editar Unidade de Medida";
      } else {
        vm.title = "Nova Unidade de Medida";
      }
    }

    function hide() {
      $mdDialog.hide();
    };

    function cancel() {
      $mdDialog.cancel();
    };

    function save() {
      if (vm.unit.id) {
        insertUnit();
      } else {
        updateUnit();
      }
      hide(vm.unit);
    };

    function insertUnit() {
      //Chamar serviço para cadastrar unidade
    }

    function updateUnit() {
      //Chamar serviço para atualizar unidade
    }
  }
})();
