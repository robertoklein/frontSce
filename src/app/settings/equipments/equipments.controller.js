
(function () {
    'use strict';
  
    angular
      .module('SceApp')
      .controller('settingsEquipmentController', settingsEquipmentController);
  
    /** @ngInject */
    function settingsEquipmentController($q, settingsEquipmentsService,$mdDialog,$scope,settingsCategoryService,$mdToast) {
      var vm = this;

      vm.allEquipments;
      vm.removeEquipment = removeEquipment;
      vm.showConfirmRemove = showConfirmRemove;
      vm.status;
      vm.newEquipment = newEquipment;
      vm.cancel = cancel;
      vm.categories;
      vm.equipment = {};
      vm.insertEquipment = insertEquipment;
      vm.editEquipment = editEquipment;
       
      getAllEquipments();

      function getAllEquipments(){
        settingsEquipmentsService.getAllEquipments().then(function(data){
          vm.allEquipments = data;
        });
      }

      function removeEquipment(equipment){
        settingsEquipmentsService.removeEquipment(equipment).then(function(){
          getAllEquipments();
            $mdToast.showSimple('Equipamento removido com sucesso');
          });
        
      }

      function showConfirmRemove (equipment){
        var confirm = $mdDialog.confirm()
              .title('Excluir equipamento?')
              .textContent('Deseja excluir o equipamento definitavamente?')
              .ok('Confirmar')
              .cancel('Cancelar');
    
        $mdDialog.show(confirm).then(function() {
          removeEquipment(equipment);
        }, function() {
        });
      };

      function getAllCategories(){
        settingsCategoryService.getAllCategory().then(function(data){
          vm.categories = data;
        });
      }

      function newEquipment() {
        getAllCategories();

         $mdDialog.show({
           scope: $scope,
           preserveScope: true,
           templateUrl: 'app/settings/equipments/newEquipment/newEquipment.html',
           parent: angular.element(document.body),
           targetEvent: event,
           clickOutsideToClose: false,
         });
       }

       function cancel(){
           $mdDialog.cancel();
       }

       function insertEquipment(){
        if(vm.equipment.id != null){
          settingsEquipmentsService.editEquipment(vm.equipment).then(function(data){
            $mdDialog.cancel();
            $mdToast.showSimple('Equipamento editado com sucesso');
            vm.equipment = {};
            getAllEquipments();
          }, function(error){
            $mdToast.showSimple('Patrimônio já cadastrado!');
              vm.equipment.serial = "";
              getAllEquipments();
          });
        }else{
          settingsEquipmentsService.createEquipment(vm.equipment).then(function (data) {
            $mdDialog.cancel();
            $mdToast.showSimple('Equipamento cadastrado com sucesso');
            vm.equipment = {};
            getAllEquipments();
            }, function(error){
              $mdToast.showSimple('Patrimônio já cadastrado!');
              vm.equipment.serial = "";
              getAllEquipments();
            });
        }
      }

      function editEquipment(equipment){
        vm.equipment = equipment;
        getAllCategories();
        vm.equipment.category = equipment.category;
        $mdDialog.show({
          scope: $scope,
          preserveScope: true,
          templateUrl: 'app/settings/equipments/newEquipment/newEquipment.html',
          parent: angular.element(document.body),
          targetEvent: event,
          clickOutsideToClose: false,
        });
        }


    }
  })();
  