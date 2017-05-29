angular.module('u20WorldCup', ['ui.router'])
    
    .config(function($stateProvider, $urlRouterProvider){


        $urlRouterProvider.when('', '/')

        $stateProvider
        .state('home', {
            url: '/',
            templateUrl: './html/home.html',
            controller: 'homecontroller'
        })
        .state('matches', {
            url: '/matches',
            templateUrl: './html/matches.html',
            controller: 'matchesController'
        })
        .state('knockout', {
            url: '/knockout',
            templateUrl: './html/knockout.html'
        })
        .state('host', {
            url: '/host',
            templateUrl: './html/host.html'
        })


    })
