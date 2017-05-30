'use strict';

angular.module('u20WorldCup', ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.when('', '/');

    $stateProvider.state('home', {
        url: '/',
        templateUrl: './html/home.html',
        controller: 'homecontroller'
    }).state('matches', {
        url: '/matches',
        templateUrl: './html/matches.html',
        controller: 'matchesController'
    }).state('knockout', {
        url: '/knockout',
        templateUrl: './html/knockout.html'
    }).state('host', {
        url: '/host',
        templateUrl: './html/host.html'
    });
});
'use strict';

angular.module('u20WorldCup').controller('homecontroller', function ($scope, homeservice) {
    var games = homeservice.getTeams();

    $scope.checkGames = function (games) {
        games.filter(function (key) {
            console.log("inside CheckedGames", key);
        });
    };
    $scope.checkGames(games);

    $scope.findTeam = function () {
        // $scope.game = games.filter(function(game){
        //     return game.name === country;
        // })
    };

    $scope.groups = homeservice.getGroup();
    console.log($scope.groups);
});
'use strict';

angular.module('u20WorldCup').controller('matchesController', function ($scope, matchesService) {

  $scope.games = matchesService.getScores();
  console.log($scope.games);
});
'use strict';

angular.module('u20WorldCup').service('homeservice', function () {

    function Groups(groupName, teamName1, teamName2, teamName3, teamName4, team1Flag, team2Flag, team3Flag, team4Flag, team1Pts, team2Pts, team3Pts, team4Pts) {
        this.groupName = groupName;
        this.teamName1 = teamName1;
        this.teamName2 = teamName2;
        this.teamName3 = teamName3;
        this.teamName4 = teamName4;

        this.team1Flag = team1Flag;
        this.team2Flag = team2Flag;
        this.team3Flag = team3Flag;
        this.team4Flag = team4Flag;

        this.team1Pts = team1Pts;
        this.team2Pts = team2Pts;
        this.team3Pts = team3Pts;
        this.team4Pts = team4Pts;
    }

    var groupA = new Groups('Group A', 'England', 'South Korea', 'Argentina', 'Guinea', 'https://img.fifa.com/images/flags/4/eng.png', 'https://img.fifa.com/images/flags/4/kor.png', 'https://img.fifa.com/images/flags/4/arg.png', 'https://img.fifa.com/images/flags/4/gui.png', '7', '6', '3', '1');

    var groupB = new Groups('Group B', 'Venezuela', 'Mexico', 'Germany', 'Vanuatu', "https://img.fifa.com/images/flags/4/ven.png", "https://img.fifa.com/images/flags/4/mex.png", "https://img.fifa.com/images/flags/4/ger.png", "https://img.fifa.com/images/flags/4/van.png", '9', '4', '4', '0');

    var groupC = new Groups('Group C', 'Zambia', 'Portugal', 'Costa Rica', 'Iran', "https://img.fifa.com/images/flags/4/zam.png", "https://img.fifa.com/images/flags/4/por.png", "https://img.fifa.com/images/flags/4/crc.png", "https://img.fifa.com/images/flags/4/irn.png", '6', '4', '4', '3');

    var groupD = new Groups('Group D', 'Uruguay', 'Italy', 'Japan', 'South Africa', "https://img.fifa.com/images/flags/4/uru.png", "https://img.fifa.com/images/flags/4/ita.png", "https://img.fifa.com/images/flags/4/jpn.png", "https://img.fifa.com/images/flags/4/rsa.png", '7', '4', '4', '1');

    var groupE = new Groups('Group E', 'France', 'New Zealand', 'Honduras', 'Vietnam', "https://img.fifa.com/images/flags/4/fra.png", "https://img.fifa.com/images/flags/4/nzl.png", "https://img.fifa.com/images/flags/4/hon.png", "https://img.fifa.com/images/flags/4/vie.png", '9', '4', '3', '1');

    var groupF = new Groups('Group F', 'United States', 'Senegal', 'Saudi Arabia', 'Ecuador', "https://img.fifa.com/images/flags/4/usa.png", "https://img.fifa.com/images/flags/4/sen.png", "https://img.fifa.com/images/flags/4/ksa.png", "https://img.fifa.com/images/flags/4/ecu.png", '5', '4', '4', '2');

    var scores = [{
        game1: {
            home: 'Venezuela',
            away: 'Germany',
            score: '2:0'
        },
        game2: {
            home: 'Argentina',
            away: 'England',
            score: '0:3'
        },
        game3: {
            home: 'Vanuatu',
            away: 'Mexico',
            score: '2:3'
        },

        game4: {
            home: 'South Korea',
            away: 'Guinea',
            score: '3:0'
        },
        game5: {
            home: 'Zambia',
            away: 'Portugal',
            score: '2:1'
        },
        game6: {
            home: 'Iran',
            away: 'Costa Rica',
            score: '1:0'
        },
        game7: {
            home: 'South Africa',
            away: 'Japan',
            score: '1:2'
        },
        game8: {
            home: 'Italy',
            away: 'Uruguay',
            score: '0:1'
        },
        game9: {
            home: 'Ecuador',
            away: 'United States',
            score: '3:3'
        },
        game10: {
            home: 'France',
            away: 'Honduras',
            score: '3:0'
        },
        game11: {
            home: 'Saudi Arabia',
            away: 'Senegal',
            score: '0:2'
        },
        game12: {
            home: 'Vietnam',
            away: 'New Zealand',
            score: '0:0'
        },
        game13: {
            home: 'Venezuela',
            away: 'Vanuatu',
            score: '7:0'
        },
        game14: {
            home: 'England',
            away: 'Guinea',
            score: '1:1'
        },
        game15: {
            home: 'South Korea',
            away: 'Argentina',
            score: '2:1'
        },
        game16: {
            home: 'Mexico',
            away: 'Germany',
            score: '0:0'
        },
        game17: {
            home: 'Zambia',
            away: 'Iran',
            score: '4:2'
        },
        game18: {
            home: 'South Africa',
            away: 'Italy',
            score: '0:2'
        },
        game19: {
            home: 'Costa Rica',
            away: 'Portugal',
            score: '1:1'
        },
        game20: {
            home: 'Uruguay',
            away: 'Japan',
            score: '2:0'
        },
        game21: {
            home: 'France',
            away: 'Vietnam',
            score: '4:0'
        },
        game22: {
            home: 'Ecuador',
            away: 'Saudi Arabia',
            score: '1:2'
        },
        game23: {
            home: 'New Zealand',
            away: 'Honduras',
            score: '3:1'
        },
        game24: {
            home: 'Senegal',
            away: 'United States',
            score: '0:1'
        },
        game25: {
            home: 'Germany',
            away: 'Vanuatu',
            score: '3:2'
        },
        game26: {
            home: 'Mexico',
            away: 'Venezuela',
            score: '0:1'
        },
        game27: {
            home: 'Guinea',
            away: 'Argentina',
            score: '0:5'
        },
        game28: {
            home: 'England',
            away: 'South Korea',
            score: '1:0'
        },
        game29: {
            home: 'Costa Rica',
            away: 'Zambia',
            score: ''
        },
        game30: {
            home: 'Portugal',
            away: 'Iran',
            score: ''
        },
        game31: {
            home: 'Japan',
            away: 'Italy',
            score: ''
        },
        game32: {
            home: 'Uruguay',
            away: 'South Africa',
            score: ''
        },
        game33: {
            home: 'Honduras',
            away: 'Vietnam',
            score: ''
        },
        game34: {
            home: 'New Zealand',
            away: 'France',
            score: ''
        },
        game35: {
            home: 'Senegal',
            away: 'Ecuador',
            score: ''
        },
        game36: {
            home: 'United States',
            away: 'Saudi Arabia',
            score: ''
        }
    }];
    this.getTeams = function () {
        return scores;
    };

    this.getGroup = function () {
        return [groupA, groupB, groupC, groupD, groupE, groupF];
    };
});
'use strict';

angular.module('u20WorldCup').service('matchesService', function () {

    this.getScores = function () {
        return scores;
    };

    var scores = [{
        home: 'Venezuela',
        away: 'Germany',
        score: '2:0',
        highlights: 'https://www.youtube.com/watch?v=tbb93c-ypw0'
    }, {
        home: 'Argentina',
        away: 'England',
        score: '0:3',
        highlights: "https://www.youtube.com/watch?v=g4it4KcO6eE"
    }, {
        home: 'Vanuatu',
        away: 'Mexico',
        score: '2:3',
        highlights: "https://www.youtube.com/watch?v=J0dCqgVqIfM"
    }, {
        home: 'South Korea',
        away: 'Guinea',
        score: '3:0',
        highlights: "https://www.youtube.com/watch?v=SS7FtZ-gL9I"
    }, {
        home: 'Zambia',
        away: 'Portugal',
        score: '2:1',
        highlights: "https://www.youtube.com/watch?v=5nLRFZx8usc"
    }, {
        home: 'Iran',
        away: 'Costa Rica',
        score: '1:0',
        highlights: "https://www.youtube.com/watch?v=RudUI62mSHs"
    }, {
        home: 'South Africa',
        away: 'Japan',
        score: '1:2',
        highlights: "https://www.youtube.com/watch?v=rkiviHjvZb0"
    }, {
        home: 'Italy',
        away: 'Uruguay',
        score: '0:1',
        highlights: "https://www.youtube.com/watch?v=cfXvn3FkJMo"
    }, {
        home: 'Ecuador',
        away: 'United States',
        score: '3:3',
        highlights: "https://www.youtube.com/watch?v=VrXNFX2YBzY"
    }, {
        home: 'France',
        away: 'Honduras',
        score: '3:0',
        highlights: "https://www.youtube.com/watch?v=1eSfpwBe-qA"
    }, {
        home: 'Saudi Arabia',
        away: 'Senegal',
        score: '0:2',
        highlights: "https://www.youtube.com/watch?v=HwxHpBYds-c"
    }, {
        home: 'Vietnam',
        away: 'New Zealand',
        score: '0:0',
        highlights: "https://www.youtube.com/watch?v=URyhy9EMDlM"
    }, {
        home: 'Venezuela',
        away: 'Vanuatu',
        score: '7:0',
        highlights: "https://www.youtube.com/watch?v=0p6VWSpIyc8"
    }, {
        home: 'England',
        away: 'Guinea',
        score: '1:1',
        highlights: "https://www.youtube.com/watch?v=TsFpI5QeOOw"
    }, {
        home: 'South Korea',
        away: 'Argentina',
        score: '2:1',
        highlights: "https://www.youtube.com/watch?v=QcAzAub1KUQ"
    }, {
        home: 'Mexico',
        away: 'Germany',
        score: '0:0',
        highlights: "https://www.youtube.com/watch?v=dq6X7TJNnFs"
    }, {
        home: 'Zambia',
        away: 'Iran',
        score: '4:2',
        highlights: "https://www.youtube.com/watch?v=Di9Z-YWsINo"
    }, {
        home: 'South Africa',
        away: 'Italy',
        score: '0:2',
        highlights: "https://www.youtube.com/watch?v=p1YfuBQkE5g"
    }, {
        home: 'Costa Rica',
        away: 'Portugal',
        score: '1:1',
        highlights: "https://www.youtube.com/watch?v=3OMPzuDjd5w"
    }, {
        home: 'Uruguay',
        away: 'Japan',
        score: '2:0',
        highlights: "https://www.youtube.com/watch?v=LkzZZJw3_Oc"
    }, {
        home: 'France',
        away: 'Vietnam',
        score: '4:0',
        highlights: "https://www.youtube.com/watch?v=DTrdEFpFdiA"
    }, {
        home: 'Ecuador',
        away: 'Saudi Arabia',
        score: '1:2',
        highlights: "https://www.youtube.com/watch?v=PuYao599wjA"
    }, {
        home: 'New Zealand',
        away: 'Honduras',
        score: '3:1',
        highlights: "https://www.youtube.com/watch?v=bu65YrwgqUc"
    }, {
        home: 'Senegal',
        away: 'United States',
        score: '0:1',
        highlights: "https://www.youtube.com/watch?v=irAeDUvgD8Q"
    }, {
        home: 'Germany',
        away: 'Vanuatu',
        score: '3:2',
        highlights: "https://www.youtube.com/watch?v=bZvPvhVlMtg"
    }, {
        home: 'Mexico',
        away: 'Venezuela',
        score: '0:1',
        highlights: "https://www.youtube.com/watch?v=rjQ6j92gDGI"
    }, {
        home: 'Guinea',
        away: 'Argentina',
        score: '0:5',
        highlights: "https://www.youtube.com/watch?v=GYVReNrwMbQ"
    }, {
        home: 'England',
        away: 'South Korea',
        score: '1:0',
        highlights: "https://www.youtube.com/watch?v=gYjIeqR-KPs"
    }, {
        home: 'Costa Rica',
        away: 'Zambia',
        score: '1:0',
        highlights: "https://www.youtube.com/watch?v=tuKmTGcDpJI"
    }, {
        home: 'Portugal',
        away: 'Iran',
        score: '2:1',
        highlights: "https://www.youtube.com/watch?v=O4rfq3rwOW0"
    }, {
        home: 'Japan',
        away: 'Italy',
        score: '2:2',
        highlights: "https://www.youtube.com/watch?v=3nl2ijN_uRA"
    }, {
        home: 'Uruguay',
        away: 'South Africa',
        score: '0:0',
        highlights: "https://www.youtube.com/watch?v=lbsP_arHBkE"
    }, {
        home: 'Honduras',
        away: 'Vietnam',
        score: '2:0',
        highlights: "https://www.youtube.com/watch?v=DTKDPSqYcwY"
    }, {
        home: 'New Zealand',
        away: 'France',
        score: '0:2',
        highlights: "https://www.youtube.com/watch?v=dxOGCaEZmCA"
    }, {
        home: 'Senegal',
        away: 'Ecuador',
        score: '0:0',
        highlights: "https://www.youtube.com/watch?v=1qbLAdskdBU"
    }, {
        home: 'United States',
        away: 'Saudi Arabia',
        score: '1:1',
        highlights: "https://www.youtube.com/watch?v=gdP-sp44Nr0"
    }];
});
//# sourceMappingURL=bundle.js.map
