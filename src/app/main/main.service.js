(function(){
    'use strict';

    angular.module('SceApp')
    .factory('dashboardFactory', function($resource){
        return $resource('/api/dashboard/user/1');
    })
    .factory('serachEquimentFactory', function($resource){
        return $resource('/api/equipment/find/:name', {name: '@name', method: 'GET', isArray: true});
    })
    .service('mainService', function($q,dashboardFactory,serachEquimentFactory){

        var self = {
            'getDashboardUsr' : getDashboardUsr,
            'getSerch' : searchEngine
        };

        function getDashboardUsr(){
            var d = $q.defer();

            dashboardFactory.get(function(data){
                d.resolve(data);
            }, function(error){
                d.reject(error)
            });
            return d.promise;
        }

        function searchEngine(value){
            var d = $q.defer();
            serachEquimentFactory.query({name: value}, function(data){
                d.resolve(data);
            }, function(error){
                d.reject(error);
            });
            return d.promise;
        }

        return self;
    });
})();