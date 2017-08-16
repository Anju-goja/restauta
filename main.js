//$('#user-email').on('input',function() {
//        var email = $('#user-email').val()
//        var message = 'Welcome Back, ' + email;
//        $('.welcome-message').text(message);
//    });
var foodieApp = angular.module('foodieApp',['ngRoute']);
foodieApp.config(function ($routeProvider) {
	$routeProvider
	.when('/',{
		templateUrl: 'pages/login.html',
		controller: 'loginController'
	})
	.when('/home',{
		templateUrl: 'pages/main.html',
		controller: 'mainController'
	})
	.when('/restaurant/:id', {
		templateUrl: 'pages/restaurant.html',
		controller: 'restaurantController'
	})
})

foodieApp.controller('mainController',function($scope) {
	$scope.restaurants = [{
	name: 'Khaana khazana',
	address: '38/39, Level 1, Block E , Inner Circle, Jammu',
	location: 'Jammu',
	category: 'Casual Dining, hotel',
	vote: '4.2',
	cuisines: 'Modern Indian',
	cost: '2200',
	hours: '12 Noon to 1 AM (Mon-Sun)',
	image: 'http://shreejifastfood.citybusinesspages.in/uploads/product_images/0TS-Paneer%20Tawa%20Masala.jpg'
},
                          {
	name: 'KFC',
	address: 'Gandhi nagar, Sector 34, Jammu',
	location: 'Jammu',
	category: '',
	vote: '4.6',
	cuisines: 'Rolls, Fast Food',
	cost: '1700',
	hours: '1 PM to 10:30 PM(Mon-Sun)',
	image: 'https://www.kth.se/blogs/satu/files/2017/02/1.jpg'
},
                          {
	name: 'Dominozz',
	address: 'T 1-107, 2nd floor near big bazaar canal Road, Jammu',
	location: 'Jammu',
	category: 'Casual Dining, restaurant',
	vote: '4.0',
	cuisines: 'Japanese, Chinese, italian',
	cost: '1400',
	hours: '  12 Noon to 11 PM (Mon-Sun)',
	image: 'https://1.bp.blogspot.com/-063pLym99pk/WLQOtMuo6pI/AAAAAAAAATU/4Kw6ryz1W4YFmC2l5vOD5IHhOG0rWUy2wCLcB/s640/dominos.jpg'
},
                          {
	name: 'Pizza Hut',
	address: '1st Floor, Indira theatre Jammu',
	location: '1st Floor, Indira theatre Jammu',
	category: 'Casual Dining,Caffe',
	vote: '3.9',
	cuisines: 'Italian, Pizza, Cafe',
	cost: '1000',
	hours: '8:30Am to 9PM (Mon-Sun)',
	image:'http://cdn.pizzahut.co.kr/IPizzahut/mobile/menu/pizza/MENU_IMG_P_MC_SS.png',
}];
})

                          
                          
                          
                          
foodieApp.controller('loginController',function($scope,$location) {
	$scope.goToHome = function() {
		// console.log('Do Something')
		$location.url('home')
	}
})
foodieApp.controller('restaurantController',function($scope,$routeParams,$http) {
	$scope.restaurantId = $routeParams.id;
	$scope.ingredients = [];
	var restaurants =
     [{
	name: 'Khaana khazana',
	address: '38/39, Level 1, Block E , Inner Circle, Connaught Place',
	location: 'Connaught Place',
	category: 'Casual Dining, Bar',
	vote: '4.2',
	cuisines: 'Modern Indian',
	cost: '2200',
	hours: '12 Noon to 1 AM (Mon-Sun)',
    bestDish: {
	name: 'Corn Pizza',
	image: 'http://noblepig.com/images/2016/06/Avocado-and-Three-Bean-Salad-is-perfect-for-a-summertime-barbecue-side-dish.JPG'
    },
         
	image: 'https://b.zmtcdn.com/data/pictures/chains/2/308022/dabd30bd0b000ea859ada9a08a0132fc.jpg'
},
                          {
	name: 'KFC',
	address: 'Booth 41, Sector 34, Chandigarh',
	location: 'Chandigrah',
	category: '',
	vote: '4.6',
	cuisines: 'Rolls, Fast Food',
	cost: '1700',
	hours: '1 PM to 10:30 PM(Mon-Sun)',
    bestDish: {
	name: 'vegetable Pizza',
	image: 'https://images.pexels.com/photos/2232/vegetables-italian-pizza-restaurant.jpg?h=350&auto=compress&cs=tinysrgb'
    },
	image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnUBTcmsQb7w3YlL1Nwt08t8xoxyMBpvKVkkQBkW4WAXhxsu-k'
},
                          {
	name: 'dominozz',
	address: 'T 1-107, 1st Floor, One Horizon Centre, Golf Course Road, Gurgaon',
	location: 'Connaught Place',
	category: 'Casual Dining, Bar',
	vote: '4.0',
	cuisines: 'Japanese, Chinese, Thai',
	cost: '1400',
	hours: '  12 Noon to 11 PM (Mon-Sun)',
    bestDish: {
	name: 'Pasta',
	image: 'https://images.pexels.com/photos/64208/pexels-photo-64208.jpeg?h=350&auto=compress&cs=tinysrgb'
    },
	image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0TN-R0OiyveXxPe2PQkcXsYOXdOm_1IwoLmt_B-FsaIylQ0is'
},
                          {
	name: 'Pizza Hut',
	address: '1st Floor, One Horizon Center, Golf Course Road, Gurgaon',
	location: 'One Horizon Center, Golf Course',
	category: 'Casual Dining,Caffe',
	vote: '3.9',
	cuisines: 'Italian, Pizza, Cafe',
	cost: '1000',
	hours: '8:30Am to 9PM (Mon-Sun)',
    bestDish: {
	name: 'Corn Pizza',
	image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnUBTcmsQb7w3YlL1Nwt08t8xoxyMBpvKVkkQBkW4WAXhxsu-k'
    },
	image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeLzjuPjm8BslLlghSNxRKoCcgW9X_c_oAPr2cBUrUb4fo9yIPMQ',
}];
    
    
	$scope.restaurant = restaurants[$routeParams.id - 1];
   $scope.getIngredients = function(url) {
	var data = '{"inputs":[{"data":{"image":{"url":"' + url + '"}}}]}'
	$http({
		'method': 'POST',
		'url': 'https://api.clarifai.com/v2/models/bd367be194cf45149e75f01d59f77ba7/outputs',
		'headers': {
			'Authorization': 'Key cb16853fb3d748d4999d863c4512cefa',
			'Content-Type': 'application/json'
		},
		'data': data
	}).then(function (response) {
				var ingredients = response.data.outputs[0].data.concepts;
				for (var i =0;i < ingredients.length;i++) {
				$scope.ingredients.push(ingredients[i].name);
				}
  			})
    		// $('.ingredients').html(list);
    		console.log(list);
        }, function (xhr) {
        	console.log(xhr);
        }
	})
                       