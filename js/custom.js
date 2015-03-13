var app = angular.module('main', []);
	app.controller("IndexCtrl", ["$scope", function($scope, blocks) {
		var blocks = [
			{ name: "Memory",
				style: "memory",
				text: "Simple memory game. Javascript and JQuery.",
				link: "/memory"
			},
			{ name: "Breakout",
				style: "breakout",
				text: "An old classic by yours truly. HTML5 and Javascript",
				link: '/pong'
			},
			{ name: "Pitchforks",
				style: "pitchforks",
				text: "Protests ...find them and create them. Nodejs, Express, and Twitter API.",
				link: "https://pitchforks.herokuapp.com"
			},
			{ name: "Travelogue",
				style: "travel",
				text: "Traveller's hub. Ruby on Rails, Google Places API and JQuery.",
				link: "https://traveloguek.herokuapp.com"
			},
			{ name: "Police Police",
				style: "police",
				text: "API. Created with Angular and Ruby on Rails.",
				link: "#"
			},
			{ name: "Ordinary Journal",
				style: "ojournal",
				text: "Geographical blogging communities. Ruby on Rails, Angular, CartoDB",
				link: "https://ojournal.herokuapp.com"
			}
		];

		$scope.blocks = blocks;

	}]);

	app.controller("GuestbookCtrl", ["$scope", function($scope) {
		$scope.comments = [];

		var ref = new Firebase('https://tuunefolio.firebaseio.com');
		var commentRef = ref.child("comments");

		$scope.addComment = function() {
			var guest = $scope.guestbook;
			$scope.comments.push(guest);
			guest = '';
			
			// $("#commentForm").submit(function() {
			// 		commentRef.set({ text: guest.val() });
			// 		guest.val('');				
			// });
			
		}
	}]);

	