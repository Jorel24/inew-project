angular.module('productApp', [])
  .controller('productController', function($scope, $http) {
    console.log('ProductController initialized');
    $scope.products = [];
  
//Fetch all products from the server
    $http.get('/products')
      .then(function(response) {
        $scope.products = response.data;
      }, function(error) {
        console.error('Error fetching products:', error);
      });
  });
