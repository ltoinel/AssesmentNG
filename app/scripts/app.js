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
    'ngTouch'
  ])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl',
                controllerAs: 'main'
            })
            .when('/contact', {
                templateUrl: 'views/contact.html',
                controller: 'ContactCtrl',
                controllerAs: 'contact'
            })
            .when('/assesment', {
                templateUrl: 'views/assesment.html',
                controller: 'AssesmentCtrl',
                controllerAs: 'assesment'
            })
            .otherwise({
                redirectTo: '/'
            });
    });
