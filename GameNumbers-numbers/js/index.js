$(document).ready(function(){

	var ListNumbers = [];
	var ListColors = ["1BBC9B","E84C3D","F0C40E","E77D22","63AADF"];
	var colorsChar = ["VERDE","ROJO","AMARILLO","NARANJA","AZUL"]
	var numbersTotal = 121;
	var findNumber;
	var numberRandom;
	var help3active = true;
	var numberDelete = [];
	var interval;

	function initGame(){ // Llamando las funciones principales del juego
		initTime();
		createScene();
		findNumberF();
	}

	function createScene(){
		var content = "" //Agregamos el contenido HTML referente a los numeros aleatorios que se van a mostrar en la pantalla
		var GetNumber;

		for(i=1;i<=numbersTotal;i++)
		{

			GetNumber = random(numbersTotal,1); 
			for(j=0; j<=ListNumbers.length-1;j++) // For para hallar los numeros aleatorios
			{
				if(ListNumbers[j] === GetNumber)
				{
					GetNumber = random(numbersTotal,1); // Si encontro un numero igual vuelvame a buscar un numero aleatorio
					j=-1;
				}
			}
			content += '<div style="background-color: #'+ ListColors[random(ListColors.length-1,1)] + '" class="numbers" id="number_'+ GetNumber +'">'+ GetNumber +'</div>';
			ListNumbers.push(GetNumber);
		}

		$("#scene-game").html(content); // El for i se ejecuta 121 veces y va a agregar a SceneGame el contenido de la variable content la cual es donde es creamos las esferas

		createEvent();
	}

	function reinitScene(){

		var content = "";
		for(i=0;i<ListNumbers.length;i++){
			content += '<div style="background-color: #'+ ListColors[random(ListColors.length-1,1)] + '" class="numbers" id="number_'+ ListNumbers[i] +'">'+ ListNumbers[i] +'</div>';
		}
		$("#scene-game").html(content);

		createEvent();
	}

	function createEvent(){
		for(i=0; i<ListNumbers.length;i++){
			$("#number_"+ListNumbers[i]).click(validateNumber); // Creando la accion "Click" a cada una de las esferas
		}
	}

	function findNumberF() //Funcion para buscar el numero aleatorio el cual el usuario debe encontrar 
	{
		numberRandom = random(ListNumbers.length-1,0) // Me trae el numero aleatorio del listado de numeros que recorre
		findNumber = ListNumbers[numberRandom];
		$("#numberFind").text(findNumber);
	}

	function initTime() // Llamando 
	{
		var second = 0;
		var minute = 0;
		var hour = 0;
		$("#second").text(second); // Se asigna el valor de la variable a cada ID del Index
		$("#hour").text(hour);
		$("#minute").text(minute);
		interval = setInterval(function(){ // Creamos una funcion setInterval para que el tiempo del juego transcurra en segundos
			second += 1;
			if(second == 60){ 
				second = 0
				minute +=1;
				$("#minute").text(minute);
			}
			if(minute == 60){
				minute = 0
				hour +=1;
				$("#hour").text(hour);
			}

			$("#second").text(second);
		},1000); // El tiempo en el cual ejecutamos el Interval en Milisegundos
	}

	function validateNumber(e) // Funcion para validar los numeros 
	{
		var id = e.target.id;
		var number = id.split("_")[1]; // Variable para obtener el valor numerico del ID
		if(number == findNumber){
			$("#message").text("Muy bien!");
			$("#help-text").text("");
			ListNumbers.splice(numberRandom,1);
			$(this).animate({
			    width: [ "toggle", "swing" ],
			    height: [ "toggle", "swing" ],
			    opacity: "toggle"
			},500,function(){
				if(ListNumbers.length == 0)
				{
					alert("Felicitaciones has ganado. Tu tiempo es:" + $("#hour").text() +":"+$("#minute").text() +":"+$("#second").text());
					clearInterval(interval)
					initGame();

				}else{
					reinitScene();
					findNumberF();
					help3active = true;
				}
			});

		}else{
			$("#message").text("Te has equivocado! Intentalo nuevamente");
		}

	}

	$("#help1").click(function(){
		var color = $("#number_"+findNumber).css("backgroundColor");
		color = hexc(color);
		color = color.replace("#","").toUpperCase();
		var positionColorArray = ListColors.indexOf(color); // Busca si el texto es igual o parecido
		$("#help-text").text("El numero que estas buscando lo encuentras en una burbuja de color " + colorsChar[positionColorArray]);
	});

	$("#help2").click(function(){

		$("#help-text").text("El numero que estas buscando está entre el " + ListNumbers[numberRandom-1] + " y el " + ListNumbers[numberRandom+1]);		
	});
	
	$("#help3").click(function(){
		if(help3active){
			for(i=0;i<3;i++){
				var numberRand = random(ListNumbers.length-1,1) // Me trae el numero aleatorio del listado de numeros que recorre
				var findNumberdelete = ListNumbers[numberRand];	

				if(ListNumbers[numberRand] == findNumber){
					numberRand = random(ListNumbers.length-1,1);
					findNumberdelete = ListNumbers[numberRand];
				}
				$("#number_" + findNumberdelete).remove();
			}

			help3active = false;
		}
	});

	function random(max,min)
	{
	    return Math.floor((Math.random() * max) + min);
	}

	/*Tomado de http://stackoverflow.com/questions/5999209/how-to-get-the-background-color-code-of-an-element*/
	function hexc(colorval) {
	    var parts = colorval.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
	    delete(parts[0]);
	    for (var i = 1; i <= 3; ++i) {
	        parts[i] = parseInt(parts[i]).toString(16);
	        if (parts[i].length == 1) parts[i] = '0' + parts[i];
	    }
	    var color = '#' + parts.join('');

	    return color;
	}

	initGame();

});
