angular.module('u20WorldCup').controller('matchesController', function($scope, matchesService){

$scope.games = matchesService.getScores()
console.log($scope.games)

})