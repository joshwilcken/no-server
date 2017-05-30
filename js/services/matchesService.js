angular.module('u20WorldCup').service('matchesService', function(){
    
      this.getScores= function(){
        return scores
    }

    var scores = [
             {
                home: 'Venezuela',
                away: 'Germany',
                score: '2:0',
                highlights: 'https://www.youtube.com/watch?v=tbb93c-ypw0'
            },
            {
                home: 'Argentina',
                away: 'England',
                score: '0:3',
                highlights: "https://www.youtube.com/watch?v=g4it4KcO6eE"
            },
             {
                home: 'Vanuatu',
                away: 'Mexico',
                score: '2:3',
                highlights: "https://www.youtube.com/watch?v=J0dCqgVqIfM"
            },
             {
                home: 'South Korea',
                away: 'Guinea',
                score: '3:0',
                highlights: "https://www.youtube.com/watch?v=SS7FtZ-gL9I"
            },
             {
                home: 'Zambia',
                away: 'Portugal',
                score: '2:1',
                highlights: "https://www.youtube.com/watch?v=5nLRFZx8usc"
            },
            {
                home: 'Iran',
                away: 'Costa Rica',
                score: '1:0',
                highlights: "https://www.youtube.com/watch?v=RudUI62mSHs"
            },
             {
                home: 'South Africa',
                away: 'Japan',
                score: '1:2',
                highlights: "https://www.youtube.com/watch?v=rkiviHjvZb0"
            },
            {
                home: 'Italy',
                away: 'Uruguay',
                score: '0:1',
                highlights: "https://www.youtube.com/watch?v=cfXvn3FkJMo"
            },
            {
                home: 'Ecuador',
                away: 'United States',
                score: '3:3',
                highlights: "https://www.youtube.com/watch?v=VrXNFX2YBzY"
            },
             {
                home: 'France',
                away: 'Honduras',
                score: '3:0',
                highlights: "https://www.youtube.com/watch?v=1eSfpwBe-qA"
            },
             {
                home: 'Saudi Arabia',
                away: 'Senegal',
                score: '0:2',
                highlights: "https://www.youtube.com/watch?v=HwxHpBYds-c"
            },
             {
                home: 'Vietnam',
                away: 'New Zealand',
                score: '0:0',
                highlights: "https://www.youtube.com/watch?v=URyhy9EMDlM"
            },
             {
                home: 'Venezuela',
                away: 'Vanuatu',
                score: '7:0',
                highlights: "https://www.youtube.com/watch?v=0p6VWSpIyc8"
            },
             {
                home: 'England',
                away: 'Guinea',
                score: '1:1',
                highlights: "https://www.youtube.com/watch?v=TsFpI5QeOOw"
            },
             {
                home: 'South Korea',
                away: 'Argentina',
                score: '2:1',
                highlights: "https://www.youtube.com/watch?v=QcAzAub1KUQ"
            },
             {
                home: 'Mexico',
                away: 'Germany',
                score: '0:0',
                highlights: "https://www.youtube.com/watch?v=dq6X7TJNnFs"
            },
            {
                home: 'Zambia',
                away: 'Iran',
                score: '4:2',
                highlights: "https://www.youtube.com/watch?v=Di9Z-YWsINo"
            },
             {
                home: 'South Africa',
                away: 'Italy',
                score: '0:2',
                highlights: "https://www.youtube.com/watch?v=p1YfuBQkE5g"
            },
             {
                home: 'Costa Rica',
                away: 'Portugal',
                score: '1:1',
                highlights: "https://www.youtube.com/watch?v=3OMPzuDjd5w"
            },
             {
                home: 'Uruguay',
                away: 'Japan',
                score: '2:0',
                highlights: "https://www.youtube.com/watch?v=LkzZZJw3_Oc"
            },
             {
                home: 'France',
                away: 'Vietnam',
                score: '4:0',
                highlights: "https://www.youtube.com/watch?v=DTrdEFpFdiA"
            },
             {
                home: 'Ecuador',
                away: 'Saudi Arabia',
                score: '1:2',
                highlights: "https://www.youtube.com/watch?v=PuYao599wjA"
            },
             {
                home: 'New Zealand',
                away: 'Honduras',
                score: '3:1',
                highlights: "https://www.youtube.com/watch?v=bu65YrwgqUc"
            },
             {
                home: 'Senegal',
                away: 'United States',
                score: '0:1',
                highlights: "https://www.youtube.com/watch?v=irAeDUvgD8Q"
            },
             {
                home: 'Germany',
                away: 'Vanuatu',
                score: '3:2',
                highlights: "https://www.youtube.com/watch?v=bZvPvhVlMtg"
            },
             {
                home: 'Mexico',
                away: 'Venezuela',
                score: '0:1',
                highlights: "https://www.youtube.com/watch?v=rjQ6j92gDGI"
            },
             {
                home: 'Guinea',
                away: 'Argentina',
                score: '0:5',
                highlights: "https://www.youtube.com/watch?v=GYVReNrwMbQ"
            },
             {
                home: 'England',
                away: 'South Korea',
                score: '1:0',
                highlights: "https://www.youtube.com/watch?v=gYjIeqR-KPs"
            },
             {
                home: 'Costa Rica',
                away: 'Zambia',
                score: '1:0',
                highlights: "https://www.youtube.com/watch?v=tuKmTGcDpJI"
            },
             {
                home: 'Portugal',
                away: 'Iran',
                score: '2:1',
                highlights: "https://www.youtube.com/watch?v=O4rfq3rwOW0"
            },
             {
                home: 'Japan',
                away: 'Italy',
                score: '2:2',
                highlights: "https://www.youtube.com/watch?v=3nl2ijN_uRA"
            },
             {
                home: 'Uruguay',
                away: 'South Africa',
                score: '0:0',
                highlights: "https://www.youtube.com/watch?v=lbsP_arHBkE"
            },
             {
                home: 'Honduras',
                away: 'Vietnam',
                score: '2:0',
                highlights: "https://www.youtube.com/watch?v=DTKDPSqYcwY"
            },
             {
                home: 'New Zealand',
                away: 'France',
                score: '0:2',
                highlights: "https://www.youtube.com/watch?v=dxOGCaEZmCA"
            },
             {
                home: 'Senegal',
                away: 'Ecuador',
                score: '0:0',
                highlights: "https://www.youtube.com/watch?v=1qbLAdskdBU"
            },
             {
                home: 'United States',
                away: 'Saudi Arabia',
                score: '1:1',
                highlights: "https://www.youtube.com/watch?v=gdP-sp44Nr0"
            }, 
    ]


})