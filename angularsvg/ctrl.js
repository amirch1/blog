angular.module('App', [])
  .controller('SVGCtrl', function($scope) {
    $scope.selectedColor = "red";
	$scope.colors = ["red","blue","green"];
	$scope.showHandels = true;
  });