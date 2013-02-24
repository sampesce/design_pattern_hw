//factory prototype that takes in the contents of a div (an array of strings) and 
//creates divs with those strings.  It's style options will have to create an instance
//of a sepparate class and will be called from the factory, unknown to the user  

//factory and facade

function divCreator (divContents){


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
		styles.setDefault(div);
		contentMod(div,divContents[i][1]);
		document.body.appendChild(div);
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

function contentMod( div, size ){
	
	var temp = div.innerHTML;
	
	div.innerHTML = '<h' + size + '>' + temp + '</h' + size + '>'; 

}

var divContents = [['Oh','1'], ['My','2'], ['God','3'] , ['Becky','4']];
var myDivs = new divCreator(divContents);