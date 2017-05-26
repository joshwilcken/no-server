angular.module('u20WorldCup', ['ui.router'])
    
    .config(function($stateProvider, $urlRouterProvider){


        $urlRouterProvider.when('', '/')

        $stateProvider
        .state('home', {
            url: '/',
            templateUrl: './html/home.html',
            controller: 'homecontroller'
        })
        .state('matches-results', {
            url: '/matches-results',
            templateUrl: './html/matches-results.html'
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
