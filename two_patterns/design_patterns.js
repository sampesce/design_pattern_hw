// factory prototype that takes in the contents of a div (an array of strings/numbers) and 
// creates divs with those strings.  Style options will be implemented through use of an instance
// of a sepparate class and will be called from the factory, unknown to the user.  The factory 
// also calls another function to set the text size  

//factory and facade

// main class / factory

function divCreator (divContents, savedDivs){

	document.body.style.backgroundColor = 'orange';
	
	var size = 0;

	if( Object.prototype.toString.call( divContents ) === '[object Array]' ) {
		size = divContents.length;
	}
	else if( typeof divContents === 'string' ) {
		size = 1;
	}
	else{
		alert('Incorrect argument passed to divCreator');
		return;
	}
	
	var styles = new divStyles();
	
	for(var i=0; i < size; i++){
		var div = document.createElement("div");
		div.innerHTML = divContents[i][0];
		if (i%2 == 0){
			div.style.backgroundColor = 'gray';
		}
		styles.setDefault(div);
		contentMod(div,divContents[i][1]);
		document.body.appendChild(div);
		savedDivs[i] = div;
	}

	this.colorSet = function( div, color ){
		styles.setColor(div,color);
	};
	this.heightSet = function( div, height ){
		styles.setColor(div, height);
	};
	this.widthSet = function( div, width){
		styles.setColor(div,width);
	};
	

};

// function abstracted in main class

function divStyles(){

		this.defaultColor = 'red';
		this.defaultHeight = '100px';
		this.defaultWidth = '100px';

		this.setDefault = function( div ){
			div.style.color = this.defaultColor;
			div.style.height = this.defaultHeight;
			div.style.width = this.defaultWidth;
		};
		this.setColor = function( div, color ){
			div.style.color = color;
		};
		this.setHeight = function( div, height ){
			height += 'px';
			div.style.height = height;
		};
		this.setWidth = function( div, width){
			width += 'px';
			div.style.width = width;
		};
		
		

};

// function abstracted in main class

function contentMod( div, size ){
	
	var temp = div.innerHTML;
	
	div.innerHTML = '<h' + size + '>' + temp + '</h' + size + '>'; 

}

// usage of factory/facade.  The divCreator factory takes in an array of
// contents to put in the divs/sizes for the content and a blank array to 
// hold references to the created divs.  The call to colorSet() shows
// addition facade being used because the user doesn't actually know that 
// another class/prototype is being used to alter the div (it's not actually-
// coming from the divCreator class.)

var savedDivs = new Array();
var divContents = [['Oh','1'], ['My','2'], ['God','3'] , ['Becky','4']];
var myDivs = new divCreator(divContents, savedDivs);
myDivs.colorSet(savedDivs[0],'blue');