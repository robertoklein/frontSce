(function(){
    'use strict';

    angular.module('SceApp')
    .factory('serachEquimentFactory', function($resource){
        return $resource('/api/equipment/find/:name', {
            name: '@name',
            method: 'GET',
            isArray: true
        });
    })
    .factory('updateEquipListFactory', function($resource){
        return $resource('/api/equipment/updateEquipList',null, {
            'updateList': {
            method: 'POST',
            isArray: true
        }
        });
    })
    .factory('insertLoanOrderFactory', function($resource){
        return $resource('/api/loanOrder',null, {
        });
    })
    .factory('getAllEquipmentsFactory', function($resource){
        return $resource('/api/equipment/getAll', {
        });
    })
    .service('newOrderService', function($q,serachEquimentFactory,updateEquipListFactory,insertLoanOrderFactory,getAllEquipmentsFactory){

        var self = {
            'getSerch' : searchEngine,
            'updateEquipList' : getUpdateEquipList,
            'insertLoanOrder' : insertLoanOrder,
            'getAllEquipments' : getAllEquipments
        };

        function searchEngine(value,data1,data2){
            var d = $q.defer();
            //query pega um array de objetos
            serachEquimentFactory.query({name: value,data1: data1, data2: data2}, function(data){
                d.resolve(data);
            }, function(error){
                d.reject(error);
            });
            return d.promise;
        }

        function getUpdateEquipList(data1,data2,equipments){
            var d = $q.defer();
            updateEquipListFactory.updateList({data1: data1, data2: data2},equipments,function(data){
                d.resolve(data);
            }, function(error){
                d.reject(error);
            });
            return d.promise;
        }

        function insertLoanOrder(loanOrder){
            var d = $q.defer();
            insertLoanOrderFactory.save(loanOrder,function(data){
                d.resolve(data);
            }, function(error){
                d.reject(error);
            });
            return d.promise;
        }

        function getAllEquipments(data1,data2){
            console.log("aqui");
            console.log(data1);
            console.log(data2);
            var d = $q.defer();
            getAllEquipmentsFactory.query({date1: data1, date2: data2},function(data){
                d.resolve(data);
            }, function(error){
                d.reject(error);
            });
            return d.promise;
        }

        return self;
    });
})();