(function(){
	var app = angular.module('store-directives', []);
	app.directive('storeTab', function(){
		return{
			restrict: 'E',
			templateUrl: "/src/app/store/store-tab.html"
		};
	});
	app.directive('storeLogin', function(){
		return{
			restrict: 'E',
			templateUrl: "/src/app/auth/store-login.html"
		};
	});
	app.directive('productSearchView', function(){
		return{
			restrict: 'E',
			templateUrl: "/src/app/product/product-search-view.html"
		};
	});
	app.directive('productDetails', function(){
		return{
			restrict: 'E',
			templateUrl: "/src/app/product/product-details.html"
		};
	});
})();