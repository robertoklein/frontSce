
(function () {
  'use strict';

  angular
    .module('SceApp')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($q, mainService, $filter, $timeout) {
    var vm = this;

    vm.dashboardAdm = {};
    vm.searchEquipment = searchEquipment;
    vm.selectedItemChange = selectedItemChange;
    vm.addSelectedEquipment = addSelectedEquipment;
    vm.equipments = [];

    function searchEquipment(query) {
      if (query) {
        return mainService.getSerch(query).then(function (data) {

          if(vm.equipments.length > 0){
          var data = data.filter(removeDuplicate);
        }
          return data;
          //esse data é o que aparece no autocomplete
        });
      }
    }

    function selectedItemChange(item) {
      vm.selectedEquipment = item;
      if (item !== undefined) {
        addSelectedEquipment(item);
      }
    }

    function removeDuplicate(element){
      var contem;
      for(var i=0; i < vm.equipments.length; i++){
        contem = (vm.equipments[i].name === element.name);
          if(contem) return false;
      }
      return true;
    }

    function addSelectedEquipment(item) {
      vm.equipments.push(item);
    }

    mainService.getDashboardUsr().then(function (data) {
      vm.dashboardAdm = data;
    }, function (error) {
      console.log(error)
    });
  }
})();
