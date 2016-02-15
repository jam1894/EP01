// Area Circulo

    var radio = prompt ("Introduce el radio")
    Math.PI
    var multiplicacion = radio*radio*Math.PI
    console.log("El área es "+multiplicacion+"");



-------------------------------------------------------------------------------------

//area triangulo


var base = prompt ("Introduce la base")
var altura = prompt ("Introduce la altura")
var multiplicacion = (1/2)*base*altura
console.log("El área es "+multiplicacion+"");


------------------------------------------------------------------------------------------

// Area Cuadrado

    var lado = prompt ("Introduce el tamaño del cuadrado")
    var multiplicacion = lado*lado
    console.log("El área es "+multiplicacion+"");

    -------------------------------------------------------------------------------------

    // Cuantas vocales hay en una palabra

    var palabra = "Murcielago";
    var conta = 0;

    palabra = palabra.toLowerCase();

    for (var i = 0; i < palabra.length; i++)
    {
    	if ((palabra.charAt(i)=='a') || (palabra.charAt(i)=='e') ||
          (palabra.charAt(i)=='i') || (palabra.charAt(i)=='o') ||
          (palabra.charAt(i)=='u'))
    	{
        conta++;
      }

    }
    console.log(" La palabra "+palabra+" Tiene "+conta+" vocales ");

-----------------------------------------------------------------------------------------------------

// consonantes

var palabra = prompt ("Introduce una palabra");
var ArrayLetras = [["b"],["c"],["d"],["f"],["g"],["h"],["j"],["k"],["l"],["m"],["n"],["p"],["q"],["r"],["s"],["t"],
["v"],["w"],["x"],["y"],["z"]];
var conta = 0;

  palabra = palabra.toLowerCase();
  //ArrayLetras = ArrayLetras.toLowerCase();
	for (var i = 0; i < palabra.length; i++)
		{
			if(palabra.charAt(i) == ArrayLetras[0] || palabra.charAt(i) == ArrayLetras[1] || palabra.charAt(i) == ArrayLetras[2]
      || palabra.charAt(i) == ArrayLetras[3] || palabra.charAt(i) == ArrayLetras[4] || palabra.charAt(i) == ArrayLetras[5]
      || palabra.charAt(i) == ArrayLetras[6] || palabra.charAt(i) == ArrayLetras[7] || palabra.charAt(i) == ArrayLetras[8]
      || palabra.charAt(i) == ArrayLetras[9] || palabra.charAt(i) == ArrayLetras[10] || palabra.charAt(i) == ArrayLetras[11]
      || palabra.charAt(i) == ArrayLetras[12] || palabra.charAt(i) == ArrayLetras[13] || palabra.charAt(i) == ArrayLetras[14]
      || palabra.charAt(i) == ArrayLetras[15] || palabra.charAt(i) == ArrayLetras[16] || palabra.charAt(i) == ArrayLetras[17]
      || palabra.charAt(i) == ArrayLetras[18] || palabra.charAt(i) == ArrayLetras[19] || palabra.charAt(i) == ArrayLetras[20] )
			{
				conta++;
      }
		}
console.log(" La palabra "+palabra+" tiene "+conta+" consonantes");





-----------------------------------------------------------------------------------------------------


    // Numero Capicua

    String.prototype.reverse = Numero
    var Numero = prompt ("Introduce un numero");
    var NumeroInverso = Numero.reverse;

          if (Numero == NumeroInverso)
          {
              console.log("La palabra '"+Numero+"' SI es Capicua");
          }
          else
          {
            console.log("La palabra '"+Numero+"' NO es Capicua");

          }
