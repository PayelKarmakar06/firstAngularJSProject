// (function () {
//     angular
//     .module('myModule', ['store-directives'])
//     .controller('productController', ['$http', '$scope', '$q', function ($http, $scope, $q) {
//         var prod = this;
//         var deferred = $q.defer();
//         prod.productDetailsView = false;
//         prod.productSearchView = false;
//         prod.productDetails = "";
//         var promiseFunc = function () {
//             $http.get('/src/app/product/products.json').then(function (list) {
//                 console.log('list', list);
//                 prod.productDetails = list.data;
//                 deferred.resolve(list.data);
//             }, function error(err) {
//                 deferred.reject(err);
//             });
//             return deferred.promise;
//         }
//         promiseFunc();
//         $scope.search = function () {
//             promiseFunc().then(function (prod) {
//                 var searchResult = [];
//                 console.log('$scope.query', $scope.query)
//                 angular.forEach(prod.data, function (product) {
//                     if ((product.productNumber.toString().indexOf($scope.query) != -1) || (product.description.toLowerCase().indexOf($scope.query.toLowerCase()) != -1)) {
//                         searchResult.push(product);
//                     }
//                 });
//                 console.log('searchResult', searchResult)
//                 if (searchResult.length > 1) {
//                     prod.productDetailsView = false;
//                     prod.productSearchView = true;
//                 } else if (searchResult.length == 1) {
//                     prod.productDetails = searchResult[0];
//                     prod.productDetailsView = true;
//                     prod.productSearchView = false;
//                 };
//                 return searchResult;
//             }, function error(err) {
//                 alert("hi");
//             });
//         };
//         prod.setProduct = function (selectedProduct) {
//             prod.productDetails = selectedProduct;
//             prod.productDetailsView = true;
//             prod.productSearchView = false;
//         };
//     }]);
// })()