angular.module('productApp', [])
  .controller('productController', function($scope, $http) {
    $scope.products = [];
  //Fetch all products
    $http.get('/products')
      .then(function(response) {
        $scope.products = response.data;
      }, function(error) {
        console.error('Error fetching products:', error);
      });
  });
