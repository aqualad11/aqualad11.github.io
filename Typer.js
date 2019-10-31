var Typer={
	text: null,
	textDisplayed: "",
	accessCountimer: null,
	index: 0,
	speed: 8,
	file: "",
	console:"",
	init: function() {
		this.accessCountimer = setInterval(function(){Typer.updLstChr();}, 500);
		/*
		$.get(Typer.file, function(data){
			Typer.text=data;
			Typer.text = Typer.text.slice(0,Typer.text.length-1);

		});
*/

	},

	addFileText: function(text) {
		var cont = this.content();
		this.console = cont.charAt(cont.length-1) == "|" ? cont.substring(0, cont.length-1) : cont;
		this.text = text;
		this.index = 0;
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

		if(Typer.text){

			var cont = this.content() == "" ? " " : this.content();

			if(cont.charAt(cont.length-1) == "|") {
				$("#console").html($("#console").html().substring(0,cont.length-1)); 
			}

			Typer.index += Typer.speed;
			var text = Typer.console + Typer.text.substring(0, Typer.index);
			var rtn = new RegExp("\n", "g");

			$("#console").html(text);
		}
		/*
		if(Typer.textDisplayed == undefined || Typer.textDisplayed != Typer.text){
			var text = Typer.console + Typer.text.substring(0, Typer.index);
			var rtn = new RegExp("\n", "g");

			$("#console").html(text);//.replace(rtn,"<br/>"));

		}
		else {
			if(Typer.index>0){
				Typer.index -= Typer.speed;
			}
		}*/


		
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
	},

	printHeader: function() {
		var cont = this.content();
		if(cont.substring(cont.length-1, cont.length) == "|"){
			$("#console").html($("#console").html().substring(0,cont.length-1));
		}
		cont = cont == null ? "" : this.content();
		$("#console").html(cont + Typer.header)
	},

	printError: function(error) {
		var cont = this.content();
		if(cont.substring(cont.length-1, cont.length) == "|"){
			$("#console").html($("#console").html().substring(0,cont.length-1));
		}
		cont = cont == null ? "" : this.content();
		
		$("#console").html(cont + error);
	},

	clearScreen: function() {
		$("#console").html("");
		Typer.printHeader();
	}
}

export default Typer;