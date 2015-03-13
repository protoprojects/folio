angular.module('services', [])
	.factory("blocks", ["$scope", function($scope) {
		var myFirebaseRef = new Firebase("https://tuunefolio.firebaseio.com/");

		myFirebaseRef.set({
		  name: name,
		  comment: comment
		  }
		});

		myFirebaseRef.child("location/city").on("value", function(snapshot) {
		  alert(snapshot.val());  // Alerts "San Francisco"
		});
		return {}
	}]);