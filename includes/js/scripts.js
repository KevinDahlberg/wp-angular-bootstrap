angular.module('wp', ['ngRoute'])
.config(function($routeProvider, $locationProvider) {
    $routeProvider
    .when('/', {
        templateUrl: localized.partials + 'main.html',
        controller: 'Main'
    });
})

.controller('Main', function($scope, $http, $routeParams) {
  console.log('controller loaded');

    function getPosts () {
    $http.get('/wp-json/wp/v2/posts/').then(function(res){
      console.log(res.data);
        $scope.posts = res.data;
    });
  }

  getPosts();

});
