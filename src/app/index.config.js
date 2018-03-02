(function() {
  'use strict';

  angular
    .module('SceApp')
    .config(config);

  /** @ngInject */
  function config($logProvider, toastrConfig, $mdThemingProvider,$mdDateLocaleProvider) {
    // Enable log
    $logProvider.debugEnabled(true);

    $mdDateLocaleProvider.formatDate = function (date) {
      if (date) {
        var day = date.getDate();
        var monthIndex = date.getMonth();
        var year = date.getFullYear();
    
        return day + '/' + (monthIndex + 1) + '/' + year;
      }
    };

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
