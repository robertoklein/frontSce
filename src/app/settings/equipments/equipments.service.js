(function(){
    'use strict';

    angular.module('SceApp')
    .factory('getAllSettingsEquipmentsFactory', function($resource){
        return $resource('/api/equipment');
    })
    .factory('insertEquipmentFactory', function($resource){
        return $resource('/api/equipment',null, {
            'createEquipment': {
            method: 'POST'
        }
        });
    })
    .factory('deleteEquipmentFactory', function($resource){
        return $resource('/api/equipment/delete',null, {
            'delEquipment': {
            method: 'PUT'
        }
        });
    })
    .factory('editEquipmentFactory', function($resource){
        return $resource('/api/equipment',null, {
            'editEquipment': {
            method: 'PUT'
        }
        });
    })
   
    .service('settingsEquipmentsService', function($q,getAllSettingsEquipmentsFactory,insertEquipmentFactory,deleteEquipmentFactory,editEquipmentFactory){

        var self = {
            'getAllEquipments' : getAllEquipments,
            'createEquipment' : createEquipment,
            'removeEquipment' : removeEquipment,
            'editEquipment' : editEquipment
        };

        function getAllEquipments(){
            var d = $q.defer();
            getAllSettingsEquipmentsFactory.query(function(data){
                d.resolve(data);
            }, function(error){
                d.reject(error)
            });
            return d.promise;
        }

        function createEquipment(equipment){
            var d = $q.defer();
            insertEquipmentFactory.createEquipment(equipment,function(data){
                d.resolve(data);
            }, function(error){
                d.reject(error);
            });
            return d.promise;
        }

        function editEquipment(equipment){
            var d = $q.defer();
            editEquipmentFactory.editEquipment(equipment,function(data){
                d.resolve(data);
            }, function(error){
                d.reject(error);
            });
            return d.promise;
        }

        function removeEquipment(equipment){
            var d = $q.defer();
            //query pega um array de objetos
            deleteEquipmentFactory.delEquipment(equipment, function(data){
                d.resolve(data);
            }, function(error){
                d.reject(error);
            });
            return d.promise;
        }
     
        return self;
    }); 
})();