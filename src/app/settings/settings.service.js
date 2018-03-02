(function(){
    'use strict';

    angular.module('SceApp')
    .factory('dashboardAdmFactory', function($resource){
        //aqui o id do usuario vai vir pelo jwt
        return $resource('/api/dashboard/admin');
    })
   
    .service('settingsService', function($q,dashboardAdmFactory){

        var self = {
            'getDashboardAdm' : getDashboardAdm,
        };

        function getDashboardAdm(){
            var d = $q.defer();
            //get pega um objeto
            dashboardAdmFactory.get(function(data){
                d.resolve(data);
            }, function(error){
                d.reject(error)
            });
            return d.promise;
        }
        return self;
    });
})();