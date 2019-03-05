app.directive('suggest', function() { 
  return { 
    restrict: 'E', 
    scope: {}, 
    templateUrl: 'directives/suggest.html',
    link: function(scope, element, attrs) {
      
      scope.suggestCreator = function() {
        $('#received-suggestion').fadeIn('slow');
      }
      
      scope.showEmail = function() {
        $('#email').fadeIn('slow');
      }
      
    }
  };
});
