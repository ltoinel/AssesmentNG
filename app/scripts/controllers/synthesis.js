'use strict';

/**
 * @ngdoc function
 * @name assesmentNgApp.controller:SynthesisCtrl
 * @description
 * # SynthesisCtrl
 * Controller of the assesmentNgApp
 */
angular.module('assesmentNgApp')
    .controller('SynthesisCtrl', ['$scope', '$rootScope', function ($scope, $rootScope) {

        var categories = [];

        // Extract all the categories names
        angular.forEach($rootScope.assesment.categories, function(category, key) {
            categories.push(category.name);
        });
    
        console.log(categories);
        
        var result = [];
        var index = 0;
        angular.forEach($rootScope.userResponses, function(responses, key) {
            
             angular.forEach(responses, function(response, key) {
                 
                if (result[response.value] === undefined){
                      result[response.value] = [];
                    for(var i = 0; i < categories.length; i++) {
                        result[response.value].push(0);
                    }
                };
                if (result[response.value][index] === undefined){
                      result[response.value][index] = 0;
                };
                result[response.value][index]++;
             });
            
            index++;    
        });
  
        $scope.labels = categories;
        $scope.data = [];
        
        // We add all the list on the data list
        angular.forEach(result, function(list, key) {
              $scope.data.push(list);
        });
        
        console.log($scope.data);
        
        $scope.showModal = false;
    }]);
