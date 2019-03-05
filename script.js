//console.log("script.js");


document.getElementById("segundoRenglon").innerText += 0;

let arrayDeValores = [];
let arrayDeResultados = [];
let contador = 0;
let operador;
let operadorPresionado = false;

function ingresar(caracterIngresado) {
	console.log("caracterIngresado es " + caracterIngresado);
	contador++;
	//console.log("El contador es " + contador);


	if(!isNaN(caracterIngresado)) {
	console.log("Entro un número");		

		if (contador === 1) {

			document.getElementById("segundoRenglon").innerText = "";		
			document.getElementById("segundoRenglon").innerText += caracterIngresado;		
		} 
		else if (contador > 1) {

			document.getElementById("segundoRenglon").innerText += caracterIngresado;		
		} 
	} else {
		
		//console.log("Entro algo que no es un número");
		if(caracterIngresado === "+") {
			//console.log("if de suma");
			empezarOperacion("+");
		} else if (caracterIngresado === "-") {
			//console.log("else if de resta");
			empezarOperacion("-");
		} else if (caracterIngresado === "x") {
			empezarOperacion("x");
		} else if (caracterIngresado === "/") {
			empezarOperacion("/");	
		} else if (caracterIngresado === "=") {
			//console.log("else if de igual");
			resultado();
		} else if (caracterIngresado === "c") {
			console.log("borrar");
			document.getElementById("primerRenglon").innerText = "";
			document.getElementById("segundoRenglon").innerText = 0;
			contador = 0;
			let operadorPresionado = false;
		}
	}
}

function empezarOperacion(operadorIngresado) {
	operador = operadorIngresado;
	//console.log("empezarOperacion y el operador es " + operador );
	arrayDeValores[0] = Number(document.getElementById("segundoRenglon").innerText);
	console.log("arrayDeValores[0] es " + arrayDeValores[0]);
	document.getElementById("primerRenglon").innerText = document.getElementById("segundoRenglon").innerText += operador;
	document.getElementById("segundoRenglon").innerText = "";
}

function resultado() {
	//console.log("función resultado");
	arrayDeValores[1] = Number(document.getElementById("segundoRenglon").innerText);		
	console.log("arrayDeValores[1] es " + arrayDeValores[1]);

	if (operador === "+") {
		console.log("resultado.suma");
		document.getElementById("primerRenglon").innerText += document.getElementById("segundoRenglon").innerText;
		document.getElementById("primerRenglon").innerText += "=";
		arrayDeResultados[0] = arrayDeValores[0] + arrayDeValores[1];
		document.getElementById("segundoRenglon").innerText = arrayDeResultados[0];
	}
	else if (operador === "-") {
		console.log("resultado.resta");
		document.getElementById("primerRenglon").innerText += document.getElementById("segundoRenglon").innerText;
		document.getElementById("primerRenglon").innerText += "=";
		arrayDeResultados[0] = arrayDeValores[0] - arrayDeValores[1];
		document.getElementById("segundoRenglon").innerText = arrayDeResultados[0];
	}
	else if (operador === "x") {
		console.log("resultado.multiplicacion");
		document.getElementById("primerRenglon").innerText += document.getElementById("segundoRenglon").innerText;
		document.getElementById("primerRenglon").innerText += "=";
		arrayDeResultados[0] = arrayDeValores[0] * arrayDeValores[1];
		document.getElementById("segundoRenglon").innerText = arrayDeResultados[0];
	}
	else if (operador === "/") {
		console.log("resultado.division");
		document.getElementById("primerRenglon").innerText += document.getElementById("segundoRenglon").innerText;
		document.getElementById("primerRenglon").innerText += "=";
		arrayDeResultados[0] = arrayDeValores[0] / arrayDeValores[1];
		document.getElementById("segundoRenglon").innerText = arrayDeResultados[0];
	}
}


// Este es el mapeo de las teclas.
document.addEventListener('keydown', function(event) {
    if (event.keyCode == 49) {
    	ingresar("1");
    }
    else if (event.keyCode == 50) {
    	ingresar("2");
    }
    else if (event.keyCode == 51) {
   		ingresar("3");
    }
    else if (event.keyCode == 52) {
        ingresar("4");
    }
    else if (event.keyCode == 53) {
        ingresar("5");
    }
    else if (event.keyCode == 54) {
        ingresar("6");
    }
    else if (event.keyCode == 55) {
        ingresar("7");
    }
    else if (event.keyCode == 56) {
        ingresar("8");
    }
    else if (event.keyCode == 57) {
        ingresar("9");
    }
    else if (event.keyCode == 48) {
        ingresar("0");
    }
    else if (event.keyCode == 67) {
        ingresar("c");
    }
    else if (event.keyCode == 171) {
        ingresar("+");
    }
    else if (event.keyCode == 173) {
        ingresar("-");
    }
    // No funciona el igual, funciona con el enter.
    else if (event.keyCode == 13) {
        ingresar("=");
    }
    else if (event.keyCode == 8) {
    	ingresar("b");
    }
    else if (event.keyCode == 190) {
    	ingresar(".");
    }
        	// falta la division y la multiplicacion!
}, true);


/*

document.addEventListener('keydown', function(event) {
    
    if (event.keyCode == 47) {
    	console.log("anda el igual");
    	ingresar("=");
    }

}, true);

*/