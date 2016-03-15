import utils from "./utils";

let nivel       = 1,
    operacion   = "+",
    setActivado = false,
    operadores  = ["/", "*", "-", "+"],
    ecuacion    = "",
    respuestaValor = 0;

let operacionValor = () =>
{
    let op1 = 0,
        op2 = 0;
    //let resultado = "";
    switch (nivel)
    {
      case 1://Nivel Uno..
             op1 = Math.floor(Math.random() * 10);
             op2 = Math.floor(Math.random() * 10);
             //debugger;
             ecuacion = op1 + operacion + op2;
             break
    }
    respuestaValor = eval(ecuacion);
    utils.accesoDOM("lcd").innerHTML = `${ecuacion} = ${respuestaValor} `;
    //operacionValor
    //return resultado;
};
//console.log("Hola Mundo");
let presionaTecla = opc =>
{
    //Saber si se ha presionado la opción de SET...
    if(opc.toLowerCase() === "set" || setActivado)
    {
        //Saber si se ha presionado "go"...
        if(opc.toLowerCase() !== "go")
        {
            //Imprimir las opciones...
            if(utils.isNumber(opc))
            {
                //Saber si el número está en un nivel de 1 a 5...
                if(Number(opc) >= 1 && Number(opc) <= 5)
                {
                    nivel = Number(opc);
                }
                //console.log("Número");
            }
            else
            {
                for(let i = 0; i < operadores.length; i++)
                {
                    if(opc === operadores[i])
                    {
                        operacion = operadores[i];
                        break;
                    }
                }
            }
            utils.accesoDOM("lcd").innerHTML = `L${nivel}&nbsp;&nbsp;OP&nbsp;${operacion}`;
            setActivado = true;
        }
        else
        {
            setActivado = false;
            utils.accesoDOM("lcd").innerHTML = "";
            operacionValor();
            //let resultado = operacionValor();
            //console.log(resultado, eval(resultado));
        }
    }
    else
    {
        if(utils.isNumber(opc))
        {
          // encadenaRespuesta += operacion;
          // utils.accesoDOM("lcd").innerHTML = `${ecuacion} = ${encadenaRespuesta}`;
          // if (encadenaRespuesta.length === String(respuestaValor).length)
          // {
          //   if (respuestaValor === )
          //   {
          //
          //   }
          // }
            //Se debe mostrar una ecuación de forma aleatoria en el LCD...
            //Se debe validar que la respuesta dada por el usuario sea válida...
            //Se debe validar que la operación que se haga es relacionada al valor que está guardada en ecuación...
            console.log(`Número seleccionado: ${opc}`);
        }
    }
};

let crearBotones = () =>
{
    let posicion = {
                        left : 66,
                        bottom : 221
                   };

    let opciones     = ["set", "0", "go"],
        inciaNumero = 7;
    for(let i = 0; i < 4; i++)
    {
        for(let c = 0; c < 4; c++)
        {
            let data = c <= 2 ?
                       (inciaNumero > 0 ? (inciaNumero + c) : opciones[c])
                       : operadores[i];
            let style = `left: ${posicion.left + (c * 53)}px;
                         bottom: ${posicion.bottom - (i * 62)}px;`;
            let elementoDIV = `<div class = "tecla" style = "${style}" data = ${data} id = "${i}_${c}"></div>`;
            utils.accesoDOM("carcasa").insertAdjacentHTML('afterbegin', elementoDIV);
            utils.accesoDOM(`${i}_${c}`).addEventListener('click', event =>
            {
                let valor = utils.accesoDOM(event.target.id).getAttribute("data");
                presionaTecla(valor)
            });
        }
        inciaNumero -= 3;
    }
    operacionValor();
};
crearBotones();
