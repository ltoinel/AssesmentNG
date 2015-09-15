'use strict';

/**
 * @ngdoc function
 * @name assesmentNgApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the assesmentNgApp
 */
angular.module('assesmentNgApp')
    .controller('MainCtrl', ['$scope', 'assesmentFactory', function ($scope, assesmentFactory) {

        // Retreive the JSON form from Webservices
        assesmentFactory.getAssesmentList().success(function (data) {

            $scope.assesmentList = data;

        }).error(function (error) {
            console.log("error: " + JSON.stringify(error));
        });

    }]);
