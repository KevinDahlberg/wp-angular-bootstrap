angular.module('wp', ['ngRoute', 'ngSanitize'])
.config(function($routeProvider, $locationProvider) {

    $routeProvider
    .when('/', {
        templateUrl: localized.partials + 'main.html',
        controller: 'Main'
    })
    .when('/:slug', {
        templateUrl: localized.partials + 'content.html',
        controller: 'Content'
    })
    .otherwise({
        redirectTo: '/'
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

})

.controller('Content',
        ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {
          console.log('content controller loaded');
            $http.get('/wp-json/wp/v2/posts/?filter[name]=' + $routeParams.slug).then(function(res){
              console.log(res);
                $scope.post = res.data[0];
            });
}]);
