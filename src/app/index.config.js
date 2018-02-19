(function() {
  'use strict';

  angular
    .module('SceApp')
    .config(config);

  /** @ngInject */
  function config($logProvider, toastrConfig, $mdThemingProvider) {
    // Enable log
    $logProvider.debugEnabled(true);

    // Set options third-party lib
    toastrConfig.allowHtml = true;
    toastrConfig.timeOut = 3000;
    toastrConfig.positionClass = 'toast-top-right';
    toastrConfig.preventDuplicates = true;
    toastrConfig.progressBar = true;

    $mdThemingProvider.theme('default')
      .primaryPalette('blue', {
        'default': '800',
        'hue-1': '600',
        'hue-2': '100'
      })
      .accentPalette('grey', {
        'default': '500',
        'hue-1': '50'
      });
  }

})();
