(function(){
    'use strict';

    angular.module('SceApp')
    .factory('dashboardFactory', function($resource){
        //aqui o id do usuario vai vir pelo jwt
        return $resource('/api/dashboard/user/1');
    })
   
    .service('mainService', function($q,dashboardFactory){

        var self = {
            'getDashboardUsr' : getDashboardUsr,
        };

        function getDashboardUsr(){
            var d = $q.defer();
            //get pega um objeto
            dashboardFactory.get(function(data){
                d.resolve(data);
            }, function(error){
                d.reject(error)
            });
            return d.promise;
        }
        return self;
    });
})();