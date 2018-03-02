(function() {
  'use strict';

  angular
    .module('SceApp')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider) {
    $stateProvider
      .state('main', {
        abstract: true,
        url: '',
        parent: 'template',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'vm'
      })

      .state('main.newOrder',{
        url: '/newOrder',
        views: {
          newOrder: {
            controller: 'newOrderController',
            controllerAs: 'vm',
            templateUrl: 'app/main/newOrder/newOrder.html'
          }
        }
      })

      .state('main.myOrders',{
        url: '/myOrders',
        views: {
          myOrders: {
            controller: 'myOrdersController',
            controllerAs: 'vm',
            templateUrl: 'app/main/myOrders/myOrders.html'
          }
        }
      });
  }

})();
