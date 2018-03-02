(function(){
    'use strict';

    angular.module('SceApp')
    .factory('getScheduledLoanFactory', function($resource){
        return $resource('/api/loanOrder/scheduled');
    })

    .factory('getDayPulloutFactory', function($resource){
        return $resource('/api/loanOrder/dayPullout');
    })

    .factory('getLateLoanFactory', function($resource){
        return $resource('/api/loanOrder/lateLoan');
    })

    .factory('getOpenLoanFactory', function($resource){
        return $resource('/api/loanOrder/openLoan');
    })

    .factory('getDayRefoundLoanFactory', function($resource){
        return $resource('/api/loanOrder/dayRefound');
    })
    .factory('setDeliveredLoanFactory', function($resource){
        return $resource('/api/loanOrder/deliveredLoan',null, {
            'setDelivered': {
                method: 'PUT'
            }
        });
    })
    .factory('setReturnedLoanFactory', function($resource){
        return $resource('/api/loanOrder/returnedLoan',null, {
            'setDelivered': {
                method: 'PUT'
            }
        });
    })

    .service('ordersService', function($q,getScheduledLoanFactory,getDayPulloutFactory,getLateLoanFactory,
               getOpenLoanFactory,getDayRefoundLoanFactory,setDeliveredLoanFactory,setReturnedLoanFactory){

        var self = {
            'getScheduledLoan' : getScheduledLoan,
            'getDayPulloutLoan' : getDayPulloutLoan,
            'getLateLoan' : getLateLoan,
            'getOpenLoan' : getOpenLoan,
            'getDayRefoundLoan' : getDayRefoundLoan,
            'setDeliveredLoan' : setDeliveredLoan,
            'setReturnedLoan' : setReturnedLoan
        };

        function setDeliveredLoan(loanOrder){
            var d = $q.defer();
            setDeliveredLoanFactory.setDelivered(loanOrder,function(data){
                d.resolve(data);
            }, function(error){
                d.reject(error);
            });
            return d.promise;
        }

        function setReturnedLoan(loanOrder){
            var d = $q.defer();
            setReturnedLoanFactory.setDelivered(loanOrder,function(data){
                d.resolve(data);
            }, function(error){
                d.reject(error);
            });
            return d.promise;
        }

        function getScheduledLoan(){
            var d = $q.defer();
            //get pega um objeto
            //query pega um array de objetos
            getScheduledLoanFactory.query(function(data){
                d.resolve(data);
            }, function(error){
                d.reject(error)
            });
            return d.promise;
        }

        function getDayPulloutLoan(){
            var d = $q.defer();
            getDayPulloutFactory.query(function(data){
                d.resolve(data);
            }, function(error){
                d.reject(error)
            });
            return d.promise;
        }

        function getLateLoan(){
            var d = $q.defer();
            getLateLoanFactory.query(function(data){
                d.resolve(data);
            }, function(error){
                d.reject(error)
            });
            return d.promise;
        }

        function getOpenLoan(){
            var d = $q.defer();
            getOpenLoanFactory.query(function(data){
                d.resolve(data);
            }, function(error){
                d.reject(error)
            });
            return d.promise;
        }

        function getDayRefoundLoan(){
            var d = $q.defer();
            getDayRefoundLoanFactory.query(function(data){
                d.resolve(data);
            }, function(error){
                d.reject(error)
            });
            return d.promise;
        }
    
        return self;
    }); 
})();