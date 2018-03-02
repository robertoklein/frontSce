(function() {
  'use strict';

  angular
    .module('SceApp')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.when('/settings', 'settings/orders');
    $stateProvider
      .state('settings', {
        url: '/settings',
        parent: 'template',
        templateUrl: 'app/settings/settings.html',
        controller: 'SettingsController',
        controllerAs: 'vm'
      })

      .state('settings.orders',{
        url: '/orders',
        views: {
          orders: {
            controller: 'ordersController',
            controllerAs: 'vm',
            templateUrl: 'app/settings/orders/orders.html'
          }
        }
      })

      .state('settings.equipments',{
        url: '/equipments',
        views: {
          equipments: {
            controller: 'settingsEquipmentController',
            controllerAs: 'vm',
            templateUrl: 'app/settings/equipments/equipments.html'
          }
        }
      })
      
      .state('settings.category',{
        url: '/category',
        views: {
          category: {
            controller: 'settingsCategoryController',
            controllerAs: 'vm',
            templateUrl: 'app/settings/category/category.html'
          }
        }
      })
      
      .state('settings.users',{
        url: '/users',
        views: {
          users: {
            controller: 'settingsUsersController',
            controllerAs: 'vm',
            templateUrl: 'app/settings/users/users.html'
          }
        }
      });
  }
})();
