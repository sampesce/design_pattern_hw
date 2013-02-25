// facade function and abstraction 
// calculating the number of employees at work
// on any given day.  It involves function calls
// to several functions without the user knowing

function showNumEmployees(div){

	var sum = supplyChainNum();
	sum += businessIntelNum();
	sum += financeNum();
	sum += marketingNum();
	sum += demandChainNum();
	sum += infoTechNum();
	
	sendToScreen(div, sum);

	decorateScreen('default');
	
}

// all return arbitrary amounts since the number
// is insignificant 

function supplyChainNum(){
	var numEmployees = 20;
	return numEmployees;
}
function businessIntelNum(){
	var numEmployees = 30;
	return numEmployees;
}
function financeNum(){
	var numEmployees = 40;
	return numEmployees;
}
function marketingNum(){
	var numEmployees = 30;
	return numEmployees;
}
function demandChainNum(){
	var numEmployees = 20;
	return numEmployees;
}
function infoTechNum(){
	var numEmployees = 15;
	return numEmployees;
}
function sendToScreen(div, num){
	div.innerHTML = '<h1>Number of employees at work: ' + num + '</h1>';
	document.body.appendChild(div);
}
function decorateScreen(color){
	if(color === 'default'){
		document.body.style.backgroundColor = 'gray';
	}else{
		document.body.style.backgroundColor = color;
	}
	
}

// one call to showNumEmployees() 

var div = document.createElement("div");
showNumEmployees(div);