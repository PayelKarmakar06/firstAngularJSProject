(function(){
	var app = angular.module('myModule',['store-directives']);
	app.controller('storeController', ['$http', function($http){
		var store = this;
		store.products = [];
		store.users = [];
		store.userName = "";
		store.password = "";
		store.displayLogin = true;
		store.displayHome = false;
		store.storeName = "";
		$http.get('/src/app/auth/users.json').success(function(data){
			store.users = data;
		});
		store.checkUser = function(){
			angular.forEach(store.users, function(user){
				if(user.userName === store.userName){
					if(user.password === store.password) {
						store.displayLogin = false;
						store.displayHome = true;
						store.storeName = user.storeName;
						return true;
					}
				}
				return false;
			});
		};
		store.logout = function() {
			store.displayLogin = true;
			store.displayHome = false;
			store.userName = "";
			store.password = "";
		};
	}]);
	app.controller('productController', ['$http', '$scope', '$q', function($http, $scope, $q){
		var prod = this;
		var deferred = $q.defer();
		prod.productDetailsView = false;
		prod.productSearchView = false;
		prod.productDetails = "";
		var promiseFunc = function(){
			$http.get('/src/app/product/products.json').then(function(data){
				deferred.resolve(data);
			}, function error(err){
				console.log(err);
				deferred.reject(err);
			});
			return deferred.promise;
		}
		$scope.search = function() {
			promiseFunc().then(function(prod){
				var searchResult = [];
				console.log('$scope.query', $scope.query)
				angular.forEach(prod.data, function(product){
					if ((product.productNumber.toString().indexOf($scope.query) != -1) || (product.description.toLowerCase().indexOf($scope.query.toLowerCase()) != -1) ){
						searchResult.push(product);
					}
				});
				console.log('searchResult', searchResult)
				if(searchResult.length > 1) {
					prod.productDetailsView = false;
					prod.productSearchView = true;
				} else if(searchResult.length == 1) {
					prod.productDetails = searchResult[0];
					prod.productDetailsView = true;
					prod.productSearchView = false;
			};
			return searchResult;
			}, function error(err){
				alert("hi");
			});
		};
		prod.setProduct = function(selectedProduct){
			prod.productDetails = selectedProduct;
			prod.productDetailsView = true;
			prod.productSearchView = false;
		};
	}]);
})();
