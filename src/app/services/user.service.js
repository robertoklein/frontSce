(function () {
  'use strict';

  angular.module('SceApp')
    .factory('User', User)
    .factory('UserService', UserService);

  /** @ngInject */
  function User($resource) {
    return $resource('/api/users/:userId', {}, {
      update: {method: 'PUT'}
    });
  }

  /** @ngInject */
  function UserService(User) {
    return {
      insert: insert,
      update: update,
      remove: remove,
      query: query,
      findOne: findOne
    };

    function insert(user) {
      return User.save(user).$promise;
    }

    function update(user) {
      return User.update(user).$promise;
    }

    function remove(id) {
      return User.remove({userId: id}).$promise;
    }

    function query(params) {
      return User.query(params).$promise;
    }

    function findOne(id) {
      return User.get({userId: id}).$promise;
    }
  }

})();
