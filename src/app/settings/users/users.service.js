(function(){
    'use strict';

    angular.module('SceApp')
    .factory('getAllUsersFactory', function($resource){
        return $resource('/api/user');
    })
    
    .service('settingsUserService', function($q,getAllUsersFactory){

        var self = {
           'getAllUsers' : getAllUsers
        };

        function getAllUsers(){
            var d = $q.defer();
            getAllUsersFactory.query(function(data){
                d.resolve(data);
            }, function(error){
                d.reject(error)
            });
            return d.promise;
        }
    
        return self;
    }); 
})();

