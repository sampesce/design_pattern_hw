// factory to generate a user profile page from text data

function createProfile( newUser){
	
	document.body.style.backgroundColor = 'yellow';
	
	if(newUser.firstName && newUser.lastName){
		var name = document.createElement('div');
		name.innerHTML = '<u><h1>' + newUser.firstName + ' ' + newUser.lastName + '</h1></u>'; 
		document.body.appendChild(name);
	}
	if(newUser.age){
		var age = document.createElement('div');
		age.innerHTML = '<h4>' + newUser.firstName + ' is ' + newUser.age + ' years old.</h4>'; 
		age.style.outline = 'dotted thin';
		document.body.appendChild(age);
	}
	if(newUser.address){
		var address = document.createElement('div');
		address.innerHTML = '<h4>' + newUser.firstName + ' lives at ' + newUser.address + '.</h4>'; 
		address.style.outline = 'dotted thin';
		document.body.appendChild(address);
	}
	if(newUser.website){
		var website = document.createElement('div');
		var link = document.createElement('a');
		var linkText = document.createTextNode(newUser.firstName + '\'s super link');
		link.appendChild(linkText);
		link.title = newUser.firstName + '\'s super link';
		link.href = newUser.website;
		website.innerHTML = '<h4>' + newUser.firstName + ' has a personal website:</h4>';
		website.style.outline = 'dotted thin';
		website.appendChild(link);	
		document.body.appendChild(website);
	}
	if(newUser.hasButton){
		
		var buttonDiv = document.createElement('div');
		buttonDiv.innerHTML = '<h4>' + newUser.firstName + ' wanted a button on his/her page!</h4>'; 
		buttonDiv.style.outline = 'dotted thin';
		var button = document.createElement('BUTTON');
		var buttonText=document.createTextNode('a useless button');
		document.body.appendChild(buttonDiv);
		buttonDiv.appendChild(button);
		button.appendChild(buttonText);
		
	}	
}

function user(){

	this.firstName;
	this.lastName;
	this.age;
	this.address;
	this.website;
	this.hasButton = false;
	

};

function setUserData(userData, user){

	user.firstName = userData['firstName'];
	user.lastName = userData['lastName'];
	user.age = userData['age'];
	user.address = userData['address'];
	user.website = userData['website'];
	user.hasButton = userData['hasButton'];


}


var userData ={ firstName: 'Bob',lastName:'Marley',age: '30',address: '21 Bob Street, USA',website: 'bobscrazypage.com',hasButton: true};
var newUser = new user();
setUserData(userData,newUser);
createProfile(newUser);

