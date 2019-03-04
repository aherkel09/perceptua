app.controller('MainController', ['$scope', function($scope) { 
  $scope.title = 'perceptua';
  $scope.featured = {
    name: 'Johannes Brahms',
    medium: 'Music',
  };
  $scope.older = [
    {
      name: 'Maxfield Parrish',
      medium: 'Art',
    },
    {
      name: 'Stanley Kubrick',
      medium: 'Film',
    }
  ];
}]);

function hideContent(ev) {
  $(ev.target).closest('.content-container').fadeOut('slow');
}

function showContent(content) {
  $(content + '-container').show();
}
