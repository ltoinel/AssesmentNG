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


        factory.getAssesmentList = function () {
            return $http.get('api/list.json');
        }

        factory.getAssesment = function (assesmentPath) {
            return $http.get('api/' + assesmentPath);
        }


        factory.sendResponses = function (data) {
            return $http.post('platform/api/assesment/responses', data);
        }

        return factory;
    }]);
