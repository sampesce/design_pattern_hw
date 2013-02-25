// observer pattern for customers who subscribe to a 
// restaurant so they can get a deal on a meal there


// observer class
function customer(name,email){

	this.userName = name;
	this.email = email;
	// amount reduced based on the deal
	this.discount = 0;
	
	this.dealNow = function(num){
		this.discount = num;
		this.sendEmail();	
	};
	
	this.calculatePrice = function(restaurant){
		return (restaurant.currentPrice - this.discount);
	};
	this.sendEmail = function(){
		// arbitrary email sending code to let customer know of deal
		// var message = 'You just received a discount';
		// mail(this.email,message);
	}

};


function restaurant(name,number,email){

	this.name = name;
	this.number = number;
	this.email = email;
	this.currentPrice = 50;
	
	this.observerList = new Array();
	
	this.subscribe = function(observer){
		this.observerList.push(observer);
	};
	this.unsubscribe = function(observer){
		observer.discount = 0;
		this.observerList.splice(this.observerList.indexOf(observer), 1);
	};
	
	this.notifySubs = function(num){
		for(var i=0; i<this.observerList.length;i++){
			this.observerList[i].dealNow(num);
		}
	};
	
};

document.body.style.backgroundColor = 'green';

// create a restaurant and two customers (observers)

var newRestaurant = new restaurant('Outback Steakhouse','999-999-9999', 'outback@outback.com');
var customer1 = new customer('John', 'john@gmail.com');
var customer2 = new customer('Bob', 'bob@gmail.com');

// create two divs just to show the difference when subscribed

var before = document.createElement('div');
before.style.outline = 'dotted';
var after = document.createElement('div');
after.style.outline = 'dotted';
before.innerHTML = '<h2>' + customer1.userName + ' would normally pay $' + customer1.calculatePrice(newRestaurant) + '</h2>';
document.body.appendChild(before);

// customer1 subscribes to the restaurant

newRestaurant.subscribe(customer1);

// the restaurant now makes all observers away of the new deal

newRestaurant.notifySubs(20);
after.innerHTML = '<h2>' + customer1.userName + ' now pays $' + customer1.calculatePrice(newRestaurant) + ' after subscribing</h2>';
document.body.appendChild(after);

newRestaurant.unsubscribe(customer1);

