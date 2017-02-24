(function() {
  'use strict';

  describe('SettingsController', function(){
    var vm;

    beforeEach(module('templateWeb'));
    beforeEach(inject(function(_$controller_) {

      vm = _$controller_('MainController');
    }));

    it('deve inicializar o item de navegação', function() {
      expect(vm.currentNavItem).not.toBe(null);
    });
  });
})();
