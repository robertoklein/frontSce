(function(){
    'use strict';

    angular.module('SceApp')
    .factory('getAllSettingsCategoryFactory', function($resource){
        return $resource('/api/category');
    })
    .factory('insertCategoryFactory', function($resource){
        return $resource('/api/category',null, {
            'createCategory': {
            method: 'POST'
        }
        });
    })
    .factory('deleteCategoryFactory', function($resource){
        return $resource('/api/category/delete',null, {
            'delCategory': {
            method: 'PUT'
        }
        });
    })
   
   
    .service('settingsCategoryService', function($q,getAllSettingsCategoryFactory,insertCategoryFactory,deleteCategoryFactory){

        var self = {
            'getAllCategory' : getAllCategory,
            'createCategory' : createCategory,
            'removeCategory' : removeCategory
        };

     

        function getAllCategory(){
            var d = $q.defer();
            //get pega um objeto
            getAllSettingsCategoryFactory.query(function(data){
                d.resolve(data);
            }, function(error){
                d.reject(error)
            });
            return d.promise;
        }

        function createCategory(category){
            var d = $q.defer();
            insertCategoryFactory.createCategory(category,function(data){
                d.resolve(data);
            }, function(error){
                d.reject(error);
            });
            return d.promise;
        }

        function removeCategory(category){
            console.log(category.name);
            var d = $q.defer();
            //query pega um array de objetos
            deleteCategoryFactory.delCategory(category, function(data){
                d.resolve(data);
            }, function(error){
                d.reject(error);
            });
            return d.promise;
        }
     

     
     

        return self;
    }); 
})();