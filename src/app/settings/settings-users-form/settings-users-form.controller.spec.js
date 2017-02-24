(function() {
  'use strict';

  describe('controllers', function(){
    var vm;

    beforeEach(module('templateWeb'));
    beforeEach(inject(function(_$controller_) {
      vm = _$controller_('SettingsUsersFormController');
    }));

  });
})();
