(function() {
  'use strict';

  describe('controller main', function(){
    var vm;

    beforeEach(module('templateWeb'));
    beforeEach(inject(function(_$controller_) {
      vm = _$controller_('MainController');
    }));

  });
})();
