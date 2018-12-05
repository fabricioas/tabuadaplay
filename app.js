var taboadaApp = angular.module('taboadaApp', []);

taboadaApp.controller('TaboadaController', function TaboadaController($scope,$http) {
  $http.get("taboada1.json").then(function(response) {
      $scope.taboada1 = response.data;
      });
  $http.get("taboada2.json").then(function(response) {
          $scope.taboada2 = response.data;
          });
});
