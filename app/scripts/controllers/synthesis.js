'use strict';

/**
 * @ngdoc function
 * @name assesmentNgApp.controller:SynthesisCtrl
 * @description
 * # SynthesisCtrl
 * Controller of the assesmentNgApp
 */
angular.module('assesmentNgApp')
    .controller('SynthesisCtrl', function ($scope) {

        $scope.labels = ["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"];

        $scope.data = [
    [65, 59, 90, 81, 56, 55, 40],
    [28, 48, 40, 19, 96, 27, 100]
  ];
    
        $scope.showModal = false;
    });
