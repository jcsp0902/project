var app = angular.module('onload', [
                                    'ngRoute'
                                ]);

app.config(function($routeProvider){
    $routeProvider
    .when('/',
    {
        controller: 'inventory',
        templateUrl: 'partials/inventory.html'
    })
    .when('/pos',
    {
        controller: 'POS',
        templateUrl: 'partials/POS/pos.html'
    })
    .otherwise(
    {
        redirectTo: '/'
    })
});

