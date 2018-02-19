(function() {
  'use strict';

  describe('controller main', function(){
    var vm;

    beforeEach(module('SceApp'));
    beforeEach(inject(function(_$controller_) {
      vm = _$controller_('MainController');
    }));

  });
})();
