var taboadaApp = angular.module('taboadaApp', []);

taboadaApp.controller('TaboadaController', function TaboadaController($scope, $http) {
  $scope.multiplicador = 1;
  novaTaboada = function(){
    $scope.taboada = [
      { multiplicando: 1 },
      { multiplicando: 2 },
      { multiplicando: 3 },
      { multiplicando: 4 },
      { multiplicando: 5 },
      { multiplicando: 6 },
      { multiplicando: 7 },
      { multiplicando: 8 },
      { multiplicando: 9 },
      { multiplicando: 10 }
    ];
  }
  $scope.conferir = function() {
    for (i in $scope.taboada) {
      if ($scope.multiplicador * $scope.taboada[i].multiplicando == $scope.taboada[i].produto) {
        $scope.taboada[i].validColor = "black";
      } else {
        $scope.taboada[i].validColor = "red";
      }
    }
  }
  $scope.proximo = function() {
    $scope.multiplicador = $scope.multiplicador + 1;
    novaTaboada();
  }
  novaTaboada();
});
