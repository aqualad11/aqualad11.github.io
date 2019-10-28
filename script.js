/*
var Typer={
	text: null,
	accessCountimer:null,
	index:0, 
	speed:2,
	file:"", 
	accessCount:0,
	deniedCount:0, 
	init: function(){
		console.log("init");

		Typer.accessCountimer=setInterval(function(){Typer.updLstChr();},500); 
		$.get(Typer.file,function(data){
			Typer.text=data;
			Typer.text = Typer.text.slice(0, Typer.text.length-1);
		});
	},
 
	content:function(){
		return $("#console").html();
	},
 
	write:function(str){
		$("#console").append(str);
		return false;
	},
 
	addText:function(key){
		
		if(key.keyCode == 18){
			Typer.accessCount++; 
			
			if(Typer.accessCount >= 3){
				Typer.makeAccess(); 
			}
		}
		
    		else if(key.keyCode == 20){
			Typer.deniedCount++; 
			
			if(Typer.deniedCount >= 3){
				Typer.makeDenied(); 
			}
		}
		
    		else if(key.keyCode == 27){ 
			Typer.hidepop(); 
		}
		
    		else if(Typer.text){ 
			var cont=Typer.content(); 
			if(cont.substring(cont.length-1,cont.length) == "|") 
				$("#console").html($("#console").html().substring(0,cont.length-1)); 
			if(key.keyCode != 8){ 
				Typer.index+=Typer.speed;	
			}
      		else {
			if(Typer.index > 0) 
				Typer.index-=Typer.speed;
			}
			var text=Typer.text.substring(0,Typer.index)
			var rtn= new RegExp("\n", "g"); 
	
			$("#console").html(text.replace(rtn,"<br/>"));
			window.scrollBy(0,50); 
		}
		
		if ( key.preventDefault && key.keyCode != 122 ) { 
			key.preventDefault()
		};  
		
		if(key.keyCode != 122){ // otherway prevent keys default behavior
			key.returnValue = false;
		}
	},
 
	updLstChr:function(){ 
		var cont=this.content(); 
		
		if(cont.substring(cont.length-1,cont.length)=="|") 
			$("#console").html($("#console").html().substring(0,cont.length-1)); 
		
		else
			this.write("|"); // else write it
	}
}
 
function replaceUrls(text) {
	var http = text.indexOf("http://");
	var space = text.indexOf(".me ", http);
	
	if (space != -1) { 
		var url = text.slice(http, space-1);
		return text.replace(url, "<a href=\""  + url + "\">" + url + "</a>");
	} 
	
	else {
		return text
	}
}

Typer.speed=3;
Typer.file="jonathanascencio.txt";
Typer.init();
 
var timer = setInterval(t(), 30);
function t() {
	console.log("t()");
	Typer.addText({"keyCode": 123748});
	
	if (Typer.index > Typer.text.length) {
		clearInterval(timer);
	}
}
*/
var Typer={
	text: null,
	accessCountimer: null,
	index: 0,
	speed: 2,
	file: "",
	accessCount: 0,
	deniedCount: 0,
	init: function() {
		console.log("init");
		Typer.accessCountimer = setInterval(function(){Typer.updLstChr();}, 500);
		console.log(Typer.file);
		$.get(Typer.file, function(data){
			Typer.text=data;
			Typer.text = Typer.text.slice(0,Typer.text.length-1);
			console.log("text = " + Typer.text + " index = " + Typer.index);

		});
		console.log("text = " + Typer.text + " index = " + Typer.index);

	},
	
	content: function(){
		return $("#console").html();
	},

	write: function(str){
		$("#console").append(str);
		return false;
	},

	addText: function(key){
		//console.log("text = " + Typer.text + " index = " + Typer.index);

		if(key.keyCode==18){
			console.log("here0");
			Typer.accessCount++;

			if(Typer.accessCount >= 3){
				Typer.makeAccess();
			}
		}
		else if(key.keyCode==20){
			console.log("here1");

			Typer.deniedCount++;

			if(Typer.deniedCount >= 3){
				Typer.makeDenied();
			}
		}
		else if(key.keyCode==27){
			console.log("here2");

			Typer.hidepop();
		}
		else if(Typer.text){
			console.log("here3");

			var cont = Typer.content() == "" ? " " : Typer.content();
			console.log("cont = " + cont);

			if(cont.substring(cont.length-1,cont.length) == "|") {
				$("#console").html($("#console").html().substring(0,cont.length-1)); 
			}
			if(key.keyCode != 8){
				Typer.index += Typer.speed;
			}
		}
		else {
			console.log("here4: " + Typer.index);
			if(Typer.index>0){
				Typer.index -= Typer.speed
			}
		}
		var text = Typer.text.substring(0,Typer.index);
		var rtn = new RegExp("\n", "g");
		$("#console").html(text.replace(rtn,"<br/>"));
		window.scrollBy(0,50);

		if(key.preventDefault && key.keyCode != 122){
			key.preventDefault();
		}
		else if(key.keyCode != 122){
			key.returnValue = false;
		}
			
		
	},

	updLstChr: function() {
		var cont = this.content();
		if(cont.substring(cont.length-1, cont.length) == "|"){
			$("#console").html($("#console").html().substring(0,cont.length-1));
		}
		else {
			this.write("|");
		}
	}
}

function replaceUrls(text){
	var http = text.indexOf("http://");
	var space = text.indexOf(".me ", http);

	if(space != -1){
		var url = text.slice(http, space-1);
		return text.replace(url, "<a href=\"" + url + "</a>");
	}
	else {
		return text;
	}
}

Typer.speed = 3;
Typer.file = "jonathanascencio.txt";
Typer.init();


//setTimeout(function timer(){setInterval(t(), 30);}, 1000);
var timer = setInterval(t, 30);

function t() {
	console.log("t()");
	Typer.addText({"keyCode": 123748});

	if(Typer.text && Typer.index > Typer.text.length){
		console.log("clearInterval");
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
		removeInput();
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
	if(input.length > 0){
		var cont = Typer.content();
		if(cont.substring(cont.length-1, cont.length) == "|"){
			$("#console").html($("#console").html().substring(0,cont.length-1));
		}
		var len = $("#console").html().length;
		$("#console").html($("#console").html().substring(0,len-1));
		input = input.substring(0, input.length-1);
	}
	

}