
(function () {
  'use strict';

  angular
    .module('SceApp')
    .controller('newOrderController', newOrderController);

  /** @ngInject */
  function newOrderController($q, newOrderService, $filter, $timeout,$mdDialog,$scope,$mdToast) {
    var vm = this;

    vm.searchEquipment = searchEquipment;
    vm.selectedItemChange = selectedItemChange;
    vm.addSelectedEquipment = addSelectedEquipment;
    vm.equipments = [];
    vm.setDateRefound = setDateRefound;
    vm.resetTableEquipment = resetTableEquipment;
    vm.removeEquipment = removeEquipment;
    vm.showViewOrder = showViewOrder;
    vm.cancel = cancel;
    vm.insertLoanOrder = insertLoanOrder;
    vm.hasUnavailableEquipments = hasUnavailableEquipments;
    vm.showAllEquipments = showAllEquipments;
    vm.allEquipments = [];

    vm.selectedEquipments = [];
    vm.hasAnyEquipmentSelected = hasAnyEquipmentSelected;
    vm.isEquipmentSelected = isEquipmentSelected;
    vm.toggleEquipment = toggleEquipment;
    vm.addEquipments = addEquipments;

    function hasAnyEquipmentSelected() {
      return vm.selectedEquipments.length > 0;
    }

    function toggleEquipment(equipment) {
      var index = vm.selectedEquipments.indexOf(equipment);

      if (index > -1) {
        vm.selectedEquipments.splice(index, 1);
      } else {
        vm.selectedEquipments.push(equipment);
      }
    }

    function isEquipmentSelected(equipment, selectedEquipments) {
      return selectedEquipments.indexOf(equipment) > -1;
    }

    function addEquipments(){
      vm.equipments = vm.selectedEquipments
      vm.cancel();
    }

    vm.user={
      id: 1,
      login: "roberto.klein",
      name: "roberto Klein",
      isAdmin: true
    };
    
    vm.loanOrder ={};

    vm.datePullOut = new Date();
    vm.dateRefound = new Date();
 
    vm.todayDate = new Date();

    function setDateRefound() {
      vm.dateRefound = vm.datePullOut;
    }

    function resetTableEquipment() {
      if (vm.equipments.length) {
        var datePul = vm.datePullOut.toISOString().split('T')[0];
        var dateRef = vm.dateRefound.toISOString().split('T')[0];

        newOrderService.updateEquipList(datePul, dateRef, vm.equipments).then(function (data) {
          vm.equipments = data;
        });
        hasUnavailableEquipments();
      }
    }

    function searchEquipment(query) {
      if (query) {
        return newOrderService.getSerch(query, vm.datePullOut.toISOString().split('T')[0], vm.dateRefound.toISOString().split('T')[0]).then(function (data) {
          if (vm.equipments.length > 0) {
            var data = data.filter(removeDuplicate);
          }
          return data;
        });
      }
    }

    function selectedItemChange(item) {
      vm.selectedEquipment = item;
      if (item !== undefined) {
        addSelectedEquipment(item);
      }
    }

    function removeDuplicate(element) {
      var contem;
      for (var i = 0; i < vm.equipments.length; i++) {
        contem = (vm.equipments[i].id === element.id);
        if (contem) return false;
      }
      return true;
    }

    function addSelectedEquipment(item) {
      vm.equipments.push(item);
      vm.searchText = '';
    }

    function removeEquipment(item) {
      vm.equipments.splice(vm.equipments.indexOf(item),1);
    }

    function showViewOrder() {
      $mdDialog.show({
        scope: $scope,
        preserveScope: true,
        templateUrl: 'app/main/newOrder/viewOrder/viewOrder.html',
        parent: angular.element(document.body),
        targetEvent: event,
        clickOutsideToClose: false,
      });
    }

    function showAllEquipments() {
      getAllEquipments();
      $mdDialog.show({
        scope: $scope,
        preserveScope: true,
        templateUrl: 'app/main/newOrder/allEquipments/allEquipments.html',
        parent: angular.element(document.body),
        targetEvent: event,
        clickOutsideToClose: false,
      });
    }

    function getAllEquipments(){
      var datePul = vm.datePullOut.toISOString().split('T')[0];
      var dateRef = vm.dateRefound.toISOString().split('T')[0];

      newOrderService.getAllEquipments(datePul,dateRef).then(function(data){
        vm.allEquipments = data;
      });
    }

    function cancel() {
      $mdDialog.cancel();
    };

    function insertLoanOrder() {
     
     vm.loanOrder["pullout"] = vm.datePullOut;
     vm.loanOrder["refound"] = vm.dateRefound;
     vm.loanOrder["equipments"] = vm.equipments;
     vm.loanOrder["motivation"] = vm.motivation;
     vm.loanOrder["user"] = vm.user;

      newOrderService.insertLoanOrder(vm.loanOrder).then(function (data) {
        $mdDialog.cancel();
        $mdToast.showSimple('Empréstimo cadastrado com sucesso');
        vm.equipments = [];
        vm.datePullOut = vm.todayDate;
        vm.dateRefound = vm.todayDate;
        });
    }

    function hasUnavailableEquipments(){
      var has = false;
      vm.equipments.forEach(function (e) {
        if (e.unavailable) {
          has = true;
        }
      });
      return has;
    }
  }
})();
