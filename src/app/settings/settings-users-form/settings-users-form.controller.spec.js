(function() {
  'use strict';

  describe('controllers', function(){
    var vm;

    beforeEach(module('SceApp'));
    beforeEach(inject(function(_$controller_) {
      vm = _$controller_('SettingsUsersFormController');
    }));

  });
})();
