/*jslint plusplus: true */
/*jslint node: true */
/*global angular, console */

'use strict';

/**
 * @ngdoc function
 * @name assesmentNgApp.controller:AssesmentCtrl
 * @AssesmentCtrl
 * # AssesmentCtrl
 * Controller of the assesmentNgApp
 */
angular.module('assesmentNgApp')
    .controller('AssesmentCtrl', ['$scope', '$rootScope','$routeParams', '$location', 'assesmentFactory', function ($scope, $rootScope, $routeParams, $location, assesmentFactory) {

        // Index
        $scope.currentQuestion = 0;
        $scope.currentCategory = 0;
        $scope.responseCount = 0;
        $scope.userResponses = {};

        // Retrieve the JSON form from Webservices
        assesmentFactory.getAssesment($routeParams.assesmentPath).success(function (data) {

            $scope.assesment = data;
            $scope.questionCount = 0;
  
            // Count the questions
            angular.forEach($scope.assesment.categories, function (value, key) {
                $scope.questionCount = $scope.questionCount + value.questions.length;
            });

        }).error(function (error) {
            console.log("error: " + JSON.stringify(error));
        });

        // Send the responses
        $scope.sendResponses = function () {

            assesmentFactory.sendResponses($scope.userResponses).success(function (data) {
                console.log("Succes: " + JSON.stringify(data));
            }).error(function (error) {
                console.log("Error: " + JSON.stringify(error));
            });
            
            $rootScope.userResponses = $scope.userResponses;
            $rootScope.assesment = $scope.assesment;

           $('#finishForm').modal('toggle');
            $('.modal-backdrop').remove();      
            $location.path("synthesis"); 
             
        }

        // Save the user's response into a map
        $scope.saveResponse = function (response) {

            // Initialize the array
            if ($scope.userResponses[$scope.currentCategory] === undefined) {
                $scope.userResponses[$scope.currentCategory] = [];
            }

            // We count the response as a new response if it was empty
            if ($scope.userResponses[$scope.currentCategory][$scope.currentQuestion] === undefined && response !== undefined) {
                $scope.responseCount++;
            }

            // Save the response
            $scope.userResponses[$scope.currentCategory][$scope.currentQuestion] = response;

            // Global progression calculation
            $scope.progression = Math.round($scope.responseCount / $scope.questionCount * 100);

        };

        // Change the current category
        $scope.changeCategory = function (categoryId) {
            $scope.currentCategory = categoryId;
            $scope.currentQuestion = 0;
        };

        // Change the current question in the same category
        $scope.changeQuestion = function (questionId) {
            $scope.currentQuestion = questionId;
        };


        // Go to the next question 
        $scope.nextQuestion = function () {
            // Next question or next category
            if ($scope.currentQuestion < ($scope.assesment.categories[$scope.currentCategory].questions.length - 1)) {
                $scope.currentQuestion++;

            } else if ($scope.currentCategory < ($scope.assesment.categories.length - 1)) {
                $scope.currentQuestion = 0;
                $scope.currentCategory++;
            }
        };

        // Go to the previous question
        $scope.previousQuestion = function () {
            // Next question or next category
            if ($scope.currentQuestion > 0) {
                $scope.currentQuestion--;

            } else if ($scope.currentCategory > 0) {
                $scope.currentQuestion = 0;
                $scope.currentCategory--;
            }
        };

        // Check if it is the last question
        $scope.isLastQuestion = function () {

            return $scope.assesment.categories !== undefined && ($scope.currentQuestion == ($scope.assesment.categories[$scope.currentCategory].questions.length - 1) && $scope.currentCategory == ($scope.assesment.categories.length - 1));
        };

    }]);
