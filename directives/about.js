app.directive('about', function() { 
  return { 
    restrict: 'E', 
    scope: {}, 
    templateUrl: 'directives/about.html',
    link: function(scope, element, attrs) {
      $('#about').click(function() {
        $('about').first().fadeIn();
      }
      scope.hideAbout = function() {
        $('about').first().fadeOut();
      }
    }
  };
});
