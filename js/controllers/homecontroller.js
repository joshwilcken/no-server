angular.module('u20WorldCup')
    .controller('homecontroller', function($scope, homeservice){
    var games = homeservice.getTeams()


     $scope.checkGames = function(games){
        games.filter((key) => {
        console.log("inside CheckedGames", key)
        })
    }
    $scope.checkGames(games);


    $scope.findTeam = function(){
        // $scope.game = games.filter(function(game){
        //     return game.name === country;
        // })
    }

    $scope.groups = homeservice.getGroup()
    console.log($scope.groups)




})