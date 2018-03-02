(function () {
  'use strict';

  angular
    .module('SceApp')
    .controller('ordersController', ordersController);

  /** @ngInject */
  function ordersController($q, ordersService, $mdDialog, $scope,$mdToast) {
    var vm = this;

    vm.getLoan = getLoan;
    vm.loanList = [];
    vm.showLoanDetail = showLoanDetail;
    vm.cancel = cancel;
    vm.loan;
    vm.setDeliveredLoan = setDeliveredLoan;
    vm.setReturnedLoan = setReturnedLoan;

    vm.user = {
      id: 1,
      login: "roberto.klein",
      name: "Roberto Klein",
      isAdmin: true
    };

    vm.comboBox = [
      { id: 1, name: 'Agendamentos' },
      { id: 2, name: 'Devoluções para hoje' },
      { id: 3, name: 'Em aberto' },
      { id: 4, name: 'Em atraso' },
      { id: 5, name: 'Retiradas para hoje' }
    ];

    //inicia o ng-model do combobox com o item 'agendamentos'
    vm.selectedChoice = vm.comboBox[0];

    getFirstComboItem();

    //chama os servico do agendamentos
    function getFirstComboItem() {
      ordersService.getScheduledLoan().then(function (data) {
        vm.loanList = data;
      }, function (error) {
        console.log(error)
      });
    }

    function getLoan() {

      if (vm.selectedChoice.id == 1) {
        getFirstComboItem();
      } else if (vm.selectedChoice.id == 2) {
        ordersService.getDayRefoundLoan().then(function (data) {
          vm.loanList = data;
        }, function (error) {
          vm.loanList = [];
          console.log(error)
        });
      } else if (vm.selectedChoice.id == 3) {
        ordersService.getOpenLoan().then(function (data) {
          vm.loanList = data;
        }, function (error) {
          vm.loanList = [];
          console.log(error)
        });
      } else if (vm.selectedChoice.id == 4) {
        ordersService.getLateLoan().then(function (data) {
          vm.loanList = data;
        }, function (error) {
          vm.loanList = [];
          console.log(error)
        });
      } else if (vm.selectedChoice.id == 5) {
        ordersService.getDayPulloutLoan().then(function (data) {
          vm.loanList = data;
        }, function (error) {
          vm.loanList = [];
          console.log(error)
        });
      }
    }

    function setDeliveredLoan(loan) {
      ordersService.setDeliveredLoan(loan).then(function (data) {
        $mdDialog.cancel();
        $mdToast.showSimple('Entrega de empréstimo confirmado!');
      });
    }

    function setReturnedLoan(loan) {
      console.log("entrou");
      ordersService.setReturnedLoan(loan).then(function (data) {
        $mdDialog.cancel();
        $mdToast.showSimple('Devolução de empréstimo confirmado!');
      });
    }

    function showLoanDetail(loan) {

      vm.loan = loan;
      $mdDialog.show({
        scope: $scope,
        preserveScope: true,
        templateUrl: 'app/settings/orders/orderDetails/orderDetails.html',
        parent: angular.element(document.body),
        targetEvent: event,
        clickOutsideToClose: false,
      });
    }

    function cancel() {
      $mdDialog.cancel();
    }

  }
})();
