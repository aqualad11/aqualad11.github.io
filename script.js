/*class Typer {
	text = null;
	accessCountimer = null;
	index = 0;
	speed = 3;
	file = "";
	header = "";

	constructor(headerFile) {
		self.accessCountimer = setInterval(function(){this.updLstChr();}, 500);
		$.get(headerFile, function(data){
			self.header = data;
			self.header = self.header.slice(0,self.header.length-1);
		});
		//self.addHeader();
	}

	content() {
		return $("#console").html();
	}

	write(str) {
		$("#console").append(str);
		return false;
	}

	addText() {
		if(self.text){

			var cont = self.content() == "" ? " " : self.content();

			if(cont.substring(cont.length-1,cont.length) == "|") {
				$("#console").html($("#console").html().substring(0,cont.length-1)); 
			}
			if(key.keyCode != 8){
				self.index += self.speed;
			}
		}
		else {
			if(self.index>0){
				self.index -= self.speed
			}
		}
		var text = self.text.substring(0,self.index);
		var rtn = new RegExp("\n", "g");
		$("#console").html(text.replace(rtn,"<br/>"));
		window.scrollBy(0,50);
	}


	updLstChr() {
		var cont = $("#console").html();
		if(cont.substring(cont.length-1, cont.length) == "|"){
			$("#console").html($("#console").html().substring(0,cont.length-1));
		}
		else {
			this.write("|");
		}
	}

	addHeader() {
		var cont = this.content()//$("#console").html();
		if(cont.substring(cont.length-1, cont.length) == "|"){
			$("#console").html($("#console").html().substring(0,cont.length-1));
		}

		$("#console").html($("#console").html() + self.header);
	}

}

function Typer(){
	this.text = null;
	this.accessCountimer = null;
	this.index = 0;
	this.speed = 2;
	this.file = "";


	this.init = function() {
		let upd = this.updLstChr;
		this.accessCountimer = setInterval(upd, 500);
		$.get(this.file, function(data){
			this.text=data;
			this.text = this.text.slice(0,this.text.length-1);

		});

	}
	
	this.content = function(){
		return $("#console").html();
	}


	this.write = function(str){
		$("#console").append(str);
		return false;
	}

	this.addText = function(key){
		if(this.text){

			var cont = this.content() == "" ? " " : this.content();

			if(cont.substring(cont.length-1,cont.length) == "|") {
				$("#console").html($("#console").html().substring(0,cont.length-1)); 
			}
			if(key.keyCode != 8){
				this.index += this.speed;
			}
		}
		else {
			if(this.index>0){
				this.index -= this.speed
			}
		}
		var text = this.text.substring(0,this.index);
		var rtn = new RegExp("\n", "g");
		$("#console").html(text.replace(rtn,"<br/>"));
		window.scrollBy(0,50);

	}

	this.updLstChr = function() {
		var cont = this.content;
		console.log("cont = " + cont);
		if(cont == undefined){
			this.write("|");
		}
		if(cont.substring(cont.length-1, cont.length) == "|"){
			$("#console").html($("#console").html().substring(0,cont.length-1));
		}
		else {
			this.write("|");
		}
	}

	this.addHeader = function(header) {
		this.header = header;
		var cont = this.content();
		if(cont.substring(cont.length-1, cont.length) == "|"){
			$("#console").html($("#console").html().substring(0,cont.length-1));
		}
		cont = cont == null ? "" : this.content();
		$("#console").html(cont + header)
	}
}
*/
//TODO: figure out how to set 
var Typer={
	text: null,
	textDisplayed: "",
	accessCountimer: null,
	index: 0,
	speed: 2,
	file: "",
	accessCount: 0,
	deniedCount: 0,
	init: function() {
		this.accessCountimer = setInterval(function(){Typer.updLstChr();}, 500);
		/*
		$.get(Typer.file, function(data){
			Typer.text=data;
			Typer.text = Typer.text.slice(0,Typer.text.length-1);

		});
*/

	},
	
	content: function(){
		return $("#console").html();
	},

	write: function(str){
		$("#console").append(str);
		return false;
	},

	addText: function(){
		var cont = "";
		var oldIndex = self.index;
		console.log("displayed = " + self.textDisplayed + " text = " + self.text);
		if(self.text){

			var cont = this.content() == "" ? " " : this.content();

			if(cont.substring(cont.length-1,cont.length) == "|") {
				$("#console").html($("#console").html().substring(0,cont.length-1)); 
			}

			self.index += self.speed;
		}
		if(self.textDisplayed == undefined || self.textDisplayed != self.text){
			console.log("here index = " + self.index);
			var start = self.textDisplayed == undefined ? 0 : self.textDisplayed.length;
			var text = self.text.substring(start, self.index);
			var rtn = new RegExp("\n", "g");
			$("#console").html($("#console").html() + text.replace(rtn,"<br/>"));
			self.textDisplayed = self.textDisplayed == undefined ? text : self.textDisplayed + text;

		}
		else {
			if(self.index>0){
				self.index -= self.speed;
			}
		}


		
		console.log("ret = " + rtn);
		window.scrollBy(0,50);

	},

	updLstChr: function() {
		var cont = this.content();
		if(cont.substring(cont.length-1, cont.length) == "|"){
			$("#console").html($("#console").html().substring(0,cont.length-1));
		}
		else {
			this.write("|");
		}
	},

	addHeader: function(header) {
		this.header = header;
		var cont = this.content();
		if(cont.substring(cont.length-1, cont.length) == "|"){
			$("#console").html($("#console").html().substring(0,cont.length-1));
		}
		cont = cont == null ? "" : this.content();
		$("#console").html(cont + header)
	}
}


$.get("header.txt", function(data){
	var header = data;
	Typer.addHeader(header.slice(0, header.length-1));
});

$.get("welcome.txt", function(data){
	var welc = data;
	self.text = welc.slice(0, welc.length-1);
	console.log("text 1 = " + self.text);
	console.log("data = " + data);

	Typer.init();
});


//Typer.file = "header.txt";
//Typer.init();


var timer = setInterval(t, 30);

function t() {
	Typer.addText();

	if(Typer.text && Typer.index > Typer.text.length){
		clearInterval(timer);
	}
}

var input = "";
// listen to keys
document.addEventListener('keydown', function(event) {
	// key is a letter
	if(event.keyCode >= 65 && event.keyCode <= 90){
		if(event.shiftKey){
			addKey(String.fromCharCode(event.keyCode));
		}
		else{
			addKey(String.fromCharCode(event.keyCode+32));
		}
	}else if(event.keyCode == 8)
	{
		if(input.length > 0){
			removeInput();
		}
	}
});


function addKey(key) {
	var cont = Typer.content();
	if(cont.substring(cont.length-1, cont.length) == "|"){
		$("#console").html($("#console").html().substring(0,cont.length-1));
	}

	$("#console").html($("#console").html() + key);
	input += key;
}

function removeInput(){
	var cont = Typer.content();
	if(cont.substring(cont.length-1, cont.length) == "|"){
		$("#console").html($("#console").html().substring(0,cont.length-1));
	}
	var len = $("#console").html().length;
	$("#console").html($("#console").html().substring(0,len-1));
	input = input.substring(0, input.length-1);
}
