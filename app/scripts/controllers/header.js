'use strict';

/**
 * @ngdoc function
 * @name assesmentNgApp.controller:HeaderCtrl
 * @description
 * # HeaderCtrl
 * Controller of the assesmentNgApp
 */
angular.module('assesmentNgApp')
    .controller('HeaderCtrl', function ($scope, $location) {
        $scope.isActive = function (viewLocation) {
            return viewLocation === $location.path();
        };
    });
