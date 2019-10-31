
import Typer from './Typer.js';
var input = "";

// data 
var commands = ["ls", "cat", "help", "clear"];
var files = ["welcome.txt", "aboutme.txt", "contactme.txt", "resume.txt"];

// Add header to Typer
$.get("data/header.txt", function(data){
	var header = data;
	Typer.addHeader(header.slice(0, header.length-1));
	Typer.printHeader();
	var first = "cat welcome.txt";
	addKey(first);
	input = "";
});


// add initial welcome message
$.get("data/welcome.txt", function(data){
	var welc = data;

	Typer.addFileText(welc.slice(0, welc.length));

	Typer.init();
});


//Typer.file = "header.txt";
//Typer.init();



function interval() {
	var timer = setInterval(t, 30);

	function t() {
		Typer.addText();

		if(Typer.text && Typer.index > Typer.text.length){
			clearInterval(timer);
			Typer.printHeader();
		}
	}
}

interval();

//var first = "cat welcome.txt";
//addKey(first);
//enterCommand(first);
//input = "";

// listen to keys
document.addEventListener('keydown', function(event) {
	// key is a letter
	if(event.keyCode >= 65 && event.keyCode <= 90){//letters
		if(event.shiftKey){
			addKey(String.fromCharCode(event.keyCode));
		}
		else{
			addKey(String.fromCharCode(event.keyCode+32));
		}
	}
	else if(event.keyCode == 190){//period
		addKey(".");
	}
	else if(event.keyCode == 32){//space
		addKey(" ");
	}
	else if(event.keyCode == 8){//backspace
		if(input.length > 0){
			removeInput();
		}
	}
	else if(event.keyCode == 13){//enter
		enterCommand(input);
		input = "";
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

function enterCommand(command){
	var com = command.split(" ");
	if(!commands.includes(com[0])){
		var notFound = "<p>"+com[0]+": command not found<p>"
		Typer.printError(notFound);
		Typer.printHeader();
	}
	else {
		switch(com[0]){
			case "help":
				$.get("data/help.txt", function(data){
					Typer.addFileText(data);
					interval();
				});
				break;
			case "ls":
				$.get("data/dir.txt", function(data){
					Typer.addFileText(data);
					interval();
				});
				break;
			case "cat":
				if(com.length == 1){
					var error = "<p>missing file name<p>"
					Typer.printError(error);
					Typer.printHeader();
				}
				else {
					if(files.includes(com[1]))
					{
						var file = "data/"+com[1];
						$.get(file, function(data){
							Typer.addFileText(data);
							interval();
						})
					}
					else {
						var notExist = "<p>exception: file does not exist<p>";
						Typer.printError(notExist);
						Typer.printHeader();
					}
				}
				break;
			case "clear":
				Typer.clearScreen();

		}
	}
}
