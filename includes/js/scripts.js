angular.module('wp', ['ngRoute'])
.config(function($routeProvider, $locationProvider) {
    $routeProvider
    .when('/', {
        templateUrl: localized.partials + 'main.html',
        controller: 'Main'
    })
})

.controller('Main', function($scope, $http, $routeParams) {
  console.log('controller loaded');
    // $http.get('wp-json/wp/v2/posts/').success(function(res){
    //   console.log(res);
        // $scope.posts = res;
    // });
});
