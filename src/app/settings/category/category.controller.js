(function () {
    'use strict';
  
    angular
      .module('SceApp')
      .controller('settingsCategoryController', settingsCategoryController);
  
    /** @ngInject */
    function settingsCategoryController($q, settingsCategoryService,$mdDialog,$scope,$mdToast) {
      var vm = this;
      vm.newCategory = newCategory;
      vm.getAllCategory = getAllCategory;
      vm.allCategories;
      vm.cancel = cancel;
      vm.insertCategory = insertCategory;
      vm.category = {};
      vm.showConfirmRemove = showConfirmRemove;
      vm.editCategory = editCategory;

      getAllCategory();
      function getAllCategory(){
        settingsCategoryService.getAllCategory().then(function(data){
          vm.allCategories = data;
        });
      }
      function showConfirmRemove (category){
        var confirm = $mdDialog.confirm()
              .title('Excluir categoria?')
              .textContent('Deseja excluir a categoria definitavamente?')
              .ok('Confirmar')
              .cancel('Cancelar');
    
        $mdDialog.show(confirm).then(function() {
          removeCategory(category);
        }, function() {
        });
      };

      function removeCategory(category){
        settingsCategoryService.removeCategory(category).then(function(){
          getAllCategory();
          $mdToast.showSimple('Categoria removida com sucesso');
        });
      }

      function editCategory(category){
      vm.category = category;
      $mdDialog.show({
        scope: $scope,
        preserveScope: true,
        templateUrl: 'app/settings/category/newCategory/newCategory.html',
        parent: angular.element(document.body),
        targetEvent: event,
        clickOutsideToClose: false,
      });
      }

      function insertCategory(){
        settingsCategoryService.createCategory(vm.category).then(function (data) {
          $mdDialog.cancel();
          $mdToast.showSimple('Categoria cadastrada com sucesso');
          vm.category = {};
          getAllCategory();
          });
      }

      function newCategory(){
        $mdDialog.show({
          scope: $scope,
          preserveScope: true,
          templateUrl: 'app/settings/category/newCategory/newCategory.html',
          parent: angular.element(document.body),
          targetEvent: event,
          clickOutsideToClose: false,
        });
      }

      function cancel(){
          $mdDialog.cancel();
      }

    }
  })();
  