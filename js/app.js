'use strict';

var motoApp = angular.module('motoApp', [
    'ngRoute',
    'motoAppAnimations',
    'motoAppCtrls',
    'motoAppServices'
]);

motoApp.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider.when('/motos', {
            templateUrl: 'vistas/moto-list.html',
            controller: 'MotoListCtrl'
        }).when('/motos/:motoId', {
            templateUrl: 'vistas/moto-detail.html',
            controller: 'MotoDetailCtrl'
        }).otherwise({
            redirectTo: '/motos'
        });
    }]);