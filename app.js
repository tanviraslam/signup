var app = angular.module('app', []);

app.directive('optIn', function(){
  return {
    restrict: 'E',
    templateUrl: "form_template.html",
    transclude: true,
    replace: true
  }
});