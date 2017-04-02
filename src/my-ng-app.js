
angular
	.module('my-ng-app', [])
	.controller('SampleController', SampleController);

function SampleController($scope) {
	$scope.name = "Hardik";

	$scope.showMessage = true;
	$scope.clickMe = clickMe;

	$scope.customers = [{
		name: "Hardik Kaji",
		address: "Surat",
		emailId: "Hardikkaji@gmail.com"
	}, {
		name: "Amiras Modi",
		address: "San Jose",
		emailId: "Amirasmodi@gmail.com"
	}, {
		name: "Mukesh Modi",
		address: "San Jose",
		emailId: "mukeshmodi@gmail.com"
	}];

	function clickMe() {
		$scope.showMessage = !$scope.showMessage;
	}
}
