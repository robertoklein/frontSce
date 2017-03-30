(function() {
  'use strict';

  angular
    .module('templateWeb')
    .controller('MeasureUnitsListController', MeasureUnitsListController);

  /** @ngInject */
  function MeasureUnitsListController($mdDialog) {
    var vm = this;

    vm.selectedUnits = [];
    vm.units = [
      {
        id: 1,
        name: 'Kg',
        precision: 3,
      },
      {
        id: 2,
        name: 'Hz',
        precision: 3,
      },
      {
        id: 3,
        name: 'V',
        precision: 2,
      },
      {
        id: 4,
        name: 'W',
        precision: 3,
      },
      {
        id: 5,
        name: 'm',
        precision: 5,
      }
    ];

    vm.limit = 5;
    vm.page = 1;
    vm.limitOptions = [5, 10, 15, {
      label: "Todos",
      value: function () {
        return vm.units.length;
      }
    }];

    vm.hasAnyUnitSelected = hasAnyUnitSelected;
    vm.toggleAll = toggleAll;
    vm.toggleUnit = toggleUnit;
    vm.isUnitSelected = isUnitSelected;
    vm.isAllUnitsSelected = isAllUnitsSelected;
    vm.isIndeterminate = isIndeterminate;
    vm.offset = offset;
    vm.showRemoveConfirm = showRemoveConfirm;
    vm.noUnitSelected = noUnitSelected;
    vm.removeSelectedUnits = removeSelectedUnits;
    vm.showEditPrompt = showEditPrompt;

    function hasAnyUnitSelected() {
      return vm.selectedUnits.length > 0;
    }

    function noUnitSelected() {
      return vm.selectedUnits.length === 0;
    }

    function toggleAll() {

      if (isAllUnitsSelected(vm.selectedUnits)) {
        vm.selectedUnits = [];
      }
      else {
        vm.selectedUnits = vm.units.concat([]);
      }
    }

    function toggleUnit(unit) {
      var index = vm.selectedUnits.indexOf(unit);

      if (index > -1) {
        vm.selectedUnits.splice(index, 1);
      } else {
        vm.selectedUnits.push(unit);
      }
    }

    function isUnitSelected(unit, selectedUnits) {
      return selectedUnits.indexOf(unit) > -1;
    }

    function isAllUnitsSelected(selectedUnits) {
      return vm.units.length !== 0 && selectedUnits.length == vm.units.length;
    }

    function isIndeterminate() {
      return vm.selectedUnits.length !== 0 &&
        vm.selectedUnits.length !== vm.units.length;
    }

    function offset() {
      return (vm.page - 1) * vm.limit;
    }

    function showEditPrompt(event, unit) {
      $mdDialog.show({
        controller: 'MeasureUnitsFormController',
        controllerAs: 'vm',
        templateUrl: 'app/measure-units/measure-units-form/measure-units-form.tmpl.html',
        parent: angular.element(document.body),
        targetEvent: event,
        clickOutsideToClose: true,
        locals: {
            unit: unit
        }
      })
      .then(function(unit) {
        $mdToast.showSimple('Unidade cadastrado com sucesso');
      }, function() {
      });
    }

    function showRemoveConfirm(event, unit) {
      // Appending dialog to document.body to cover sidenav in docs app
      var confirm = $mdDialog.confirm()
        .title('Excluir Unidade')
        .textContent('Unidade: ' + unit.name)
        .ariaLabel('Lucky day')
        .targetEvent(event)
        .ok('Excluir')
        .cancel('Cancelar');

      $mdDialog.show(confirm).then(onConfirmRemove);

      function onConfirmRemove() {
        removeUnit(unit);
      }
    }

    function removeUnit(unit) {
      removeUnitFromList(vm.units, unit);
      unselectedUnit(unit);
    }

    function unselectedUnit(unit) {
      removeUnitFromList(vm.selectedUnits, unit);
    }

    function removeUnitFromList(units, unit) {
      var index = units.indexOf(unit);
      if (index > -1) {
        units.splice(index, 1);
      }
    }

    function removeSelectedUnits() {
      angular.forEach(vm.selectedUnits, function(selectedUnit) {
        removeUnitFromList(vm.units, selectedUnit);
      });
      vm.selectedUnits = [];
    }

  }
})();
