(function () {
    'use strict';
  
    angular
      .module('SceApp')
      .controller('myOrdersController', myOrdersController);
  
    /** @ngInject */
    function myOrdersController($q, myOrdersService, $filter, $timeout,$mdDialog,$scope) {
        var vm = this;

        vm.getLoan = getLoan;
        vm.loanList = [];
        vm.showLoanDetail = showLoanDetail;
        vm.cancel = cancel;
        vm.loan;

        vm.comboBox=[
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
        function getFirstComboItem(){
            myOrdersService.getScheduledLoan().then(function (data){              
                vm.loanList = data;
            }, function(error){
                console.log(error)
            });
        }

        function getLoan(){

            if(vm.selectedChoice.id == 1){
                getFirstComboItem();
            }else if(vm.selectedChoice.id == 2){
                myOrdersService.getDayRefoundLoan().then(function (data){                 
                    vm.loanList = data;
                }, function(error){
                    vm.loanList =[];
                    console.log(error)
                });
            }else if(vm.selectedChoice.id == 3){
                myOrdersService.getOpenLoan().then(function (data){                
                    vm.loanList = data;
                }, function(error){
                    vm.loanList =[];
                    console.log(error)
                });
            }else if(vm.selectedChoice.id == 4){
                myOrdersService.getLateLoan().then(function (data){                
                    vm.loanList = data;
                }, function(error){
                    vm.loanList =[];
                    console.log(error)
                });
            }else if(vm.selectedChoice.id == 5){
                myOrdersService.getDayPulloutLoan().then(function (data){               
                    vm.loanList = data;
                }, function(error){
                    vm.loanList =[];
                    console.log(error)
                });
            }
        }

        function showLoanDetail(loan) {
           
           vm.loan = loan;
           
            $mdDialog.show({
              scope: $scope,
              preserveScope: true,
              templateUrl: 'app/main/myOrders/loanOrderDetails/loanOrderDetails.html',
              parent: angular.element(document.body),
              targetEvent: event,
              clickOutsideToClose: false,
            });
          }

          function cancel(){
              $mdDialog.cancel();
          }
    }
  })();
  