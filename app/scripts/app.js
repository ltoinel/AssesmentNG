'use strict';

/**
 * @ngdoc overview
 * @name assesmentNgApp
 * @description
 * # assesmentNgApp
 *
 * Main module of the application.
 */
angular
    .module('assesmentNgApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'chart.js'
  ])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl',
                controllerAs: 'main'
            })
            .when('/assesment', {
                templateUrl: 'views/assesment.html',
                controller: 'AssesmentCtrl',
                controllerAs: 'assesment'
            })
            .when('/synthesis', {
                templateUrl: 'views/synthesis.html',
                controller: 'SynthesisCtrl',
                controllerAs: 'synthesis'
            })
            .otherwise({
                redirectTo: '/'
            });
    });
