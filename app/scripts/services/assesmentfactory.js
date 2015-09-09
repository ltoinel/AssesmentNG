'use strict';

/**
 * @ngdoc service
 * @name assesmentNgApp.assesmentFactory
 * @description
 * # assesmentFactory
 * Factory in the assesmentNgApp.
 */
angular.module('assesmentNgApp')
    .factory('assesmentFactory', ['$http', function ($http) {

        var factory = {};

        factory.getAssesment = function () {
            return $http.get('api/assesment.json');
        }


        factory.sendResponses = function (data) {
            return $http.post('platform/api/assesment/responses', data);
        }

        return factory;
    }]);
