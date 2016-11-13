'use strict';

/**
 * @ngdoc function
 * @name zuoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the zuoApp
 */
angular.module('zuoApp')
   .controller('ma', function ($scope,$http) {
      $http({
	   	  		method:'get',
	   	  		url:'http://www.somenote.cn:1602/list1'
	   	  	}).success(function(e){
	   	  		$scope.ma=e;
	   	  	})
  })
  .controller('chao', function ($scope,$http) {
      $http({
	   	  		method:'get',
	   	  		url:'http://www.somenote.cn:1602/list2'
	   	  	}).success(function(e){
	   	  		$scope.chao=e;
	   	  	})
  });

