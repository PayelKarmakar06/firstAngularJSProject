(function(){
	var app = angular.module('store-directives', []);
	app.directive('storeTab', function(){
		return{
			restrict: 'E',
			templateUrl: "store-tab.html"
		};
	});
	app.directive('storeLogin', function(){
		return{
			restrict: 'E',
			templateUrl: "store-login.html"
		};
	});
	app.directive('productSearchView', function(){
		return{
			restrict: 'E',
			templateUrl: "product-search-view.html"
		};
	});
	app.directive('productDetails', function(){
		return{
			restrict: 'E',
			templateUrl: "product-details.html"
		};
	});
})();