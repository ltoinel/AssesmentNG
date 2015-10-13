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
        var assesment = $rootScope.assesment;
        
        // Extract all the categories names into a list of values
        angular.forEach(assesment.categories, function(category, key) {
            categories.push(category.name);
        });

        var data = [];
        var index = 0;
        var responseCount = [];
        
        // For each results we count the value by category
        angular.forEach($rootScope.userResponses, function(responses, key) {
            
             angular.forEach(responses, function(response, key) {
                 
                // If the category doesn't exist we create it
                if (data[response.value] === undefined){
                      data[response.value] = [];
                    for(var i = 0; i < categories.length; i++) {
                        data[response.value].push(0);
                    }
                };
                 
                 // If the index doesn't exist we create it
                if (data[response.value][index] === undefined){
                      data[response.value][index] = 0;
                };
                 
                // We increase the value
                data[response.value][index]++; 
                 
                // We initialize the response count
                if (responseCount[categories[index]] === undefined){
                    responseCount[categories[index]] = 0;
                }
                responseCount[categories[index]]++;
                 
             });
            
            index++;    
        });
        
        console.log(responseCount);
        
        $scope.responseCount = responseCount;
        $scope.labels = categories;
        $scope.data = [];
        $scope.series = [];

        // We push all the list of results defined in the assesment definition
        for (var key in data) {
            
            if (assesment.series[key] !== undefined){
                $scope.data.push(data[key]);
                $scope.series.push(assesment.series[key]);
            }
        }
        
        // Print the page
        function print(){
            window.print();
        }
        
    }]);
