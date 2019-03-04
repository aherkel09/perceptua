app.directive('about', function() { 
  return { 
    restrict: 'E', 
    scope: {}, 
    templateUrl: 'directives/about.html',
    link: function(scope, element, attrs) {
      scope.hideAbout = function() {
        $('about').first().hide();
      }
    }
  };
});
