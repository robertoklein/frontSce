(function(){
    'use strict';

    angular.module('SceApp')
    .factory('getScheduledLoanFactory', function($resource){
        return $resource('/api/loanOrder/scheduled/user/:id', {
            id: '1',
            method: 'GET'
        });
    })
    
    .factory('getDayPulloutFactory', function($resource){
        return $resource('/api/loanOrder/dayPullout/user/:id', {
            id: '1',
            method: 'GET'
        });
    })

    .factory('getLateLoanFactory', function($resource){
        return $resource('/api/loanOrder/lateLoan/user/:id', {
            id: '1',
            method: 'GET'
        });
    })

    .factory('getOpenLoanFactory', function($resource){
        return $resource('/api/loanOrder/openLoan/user/:id', {
            id: '1',
            method: 'GET'
        });
    })

    .factory('getDayRefoundLoanFactory', function($resource){
        return $resource('/api/loanOrder/dayRefound/user/:id', {
            id: '1',
            method: 'GET'
        });
    })
    .service('myOrdersService', function($q,getScheduledLoanFactory,getDayPulloutFactory,getLateLoanFactory,getOpenLoanFactory,getDayRefoundLoanFactory){

        var self = {
            'getScheduledLoan' : getScheduledLoan,
            'getDayPulloutLoan' : getDayPulloutLoan,
            'getLateLoan' : getLateLoan,
            'getOpenLoan' : getOpenLoan,
            'getDayRefoundLoan' : getDayRefoundLoan
        };

        function getScheduledLoan(){
            var d = $q.defer();
            //get pega um objeto
            getScheduledLoanFactory.query(function(data){
                d.resolve(data);
            }, function(error){
                d.reject(error)
            });
            return d.promise;
        }

        function getDayPulloutLoan(){
            var d = $q.defer();
            //get pega um objeto
            getDayPulloutFactory.query(function(data){
                d.resolve(data);
            }, function(error){
                d.reject(error)
            });
            return d.promise;
        }

        function getLateLoan(){
            var d = $q.defer();
            //get pega um objeto
            getLateLoanFactory.query(function(data){
                d.resolve(data);
            }, function(error){
                d.reject(error)
            });
            return d.promise;
        }

        function getOpenLoan(){
            var d = $q.defer();
            //get pega um objeto
            getOpenLoanFactory.query(function(data){
                d.resolve(data);
            }, function(error){
                d.reject(error)
            });
            return d.promise;
        }

        function getDayRefoundLoan(){
            var d = $q.defer();
            //get pega um objeto
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