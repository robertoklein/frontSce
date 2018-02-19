(function() {
  'use strict';

  describe('TemplateController', function(){
    var vm;
    var $scope;
    var $mdSidenav;

    beforeEach(module('SceApp'));
    beforeEach(inject(function(_$controller_, _$rootScope_, _$mdSidenav_) {
      $scope = _$rootScope_.$new();

      vm = _$controller_('TemplateController', {$scope: $scope});
      $mdSidenav = _$mdSidenav_;

      spyOn(vm.sidenavLeft, 'close');
    }));

    it('deve ter uma instância do usuário autenticado', function() {
      expect(vm.user).not.toBe(null);
    });

    it('deve fechar sidenav esquerdo ao mudar de rota', function() {
      vm.sidenavLeft.open();
      $scope.$emit('$stateChangeSuccess');
      expect(vm.sidenavLeft.close).toHaveBeenCalled();
    });


  });
})();
