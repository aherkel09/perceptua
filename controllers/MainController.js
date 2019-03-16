app.controller('MainController', ['$scope', '$routeParams', function($scope, $routeParams) { 
  $scope.title = 'perceptua';
  
  $scope.featured = {
    id: 2,
    name: 'Ludwig van Beethoven',
    medium: 'Music',
  };
  
  $scope.upcoming = [
    {
      id: 3,
      name: 'Johannes Brahms',
      medium: 'Music',
    }
  ];
  
  $scope.all = [
    {
      id: 0,
      name: 'Maxfield Parrish',
      medium: 'Art',
    },
    {
      id: 1,
      name: 'Stanley Kubrick',
      medium: 'Film',
    }
  ];
  
  if ($routeParams.id) {
    $scope.creator = $scope.all[$routeParams.id];
  }
}]);
  
