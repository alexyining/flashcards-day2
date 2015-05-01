var app = angular.module('flashCards', []);

app.factory('FlashCardsFactory', function($http) {
    return {
        getFlashCards: function() {
            return $http.get('/cards').then(function(res) {
                    return res.data;
            });
        }
    };
});