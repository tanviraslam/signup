var app = angular.module('app', []);

// app.run(function($rootScope){
//   $rootScope.alert = function(str){alert(str);};
// });

app.directive('optIn', function(){
  return {
    restrict: 'E',
    templateUrl: "form_template.html",
    transclude: true,
    replace: true
  }
});