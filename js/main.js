window.addEventListener("load", cargarPagina);

var contenedor = document.getElementById("contenedor");
var agregarLista = document.getElementById("agregarLista");
var contListas = document.getElementById("contListas");
var formulario = document.getElementById("formulario");
var botonInicio = document.getElementById("botonInicio");


function cargarPagina (e){
	e.preventDefault();
	agregarLista.addEventListener("click", newLista);
};

function newLista(e){
	e.preventDefault();
	agregarLista.style.display = "none";

	var formulario = document.createElement("form");
	contenedor.appendChild(formulario).classList.add("styleForm");

	var input = document.createElement("input");
	formulario.appendChild(input).classList.add("styleInput");

	var boton = document.createElement("button");
	formulario.appendChild(boton).classList.add("styleButton");
 
	var textAgregar = document.createTextNode("Guardar");
	boton.appendChild(textAgregar);

	boton.addEventListener("click", nuevaTarjeta);

		function nuevaTarjeta(e){
		e.preventDefault();
		input.style.display = "none";
		boton.style.display = "none";

		var textoLista = input.value;
		var tittleLista = document.createElement("div");
		tittleLista.innerHTML = textoLista;
		formulario.appendChild(tittleLista);

		var enlace = document.createElement("a");
		enlace.href = "#";
		var textoEnlace = document.createTextNode("Añadir una tarjeta ...");
		enlace.appendChild(textoEnlace);
		formulario.appendChild(enlace).classList.add("enlaceTarjeta", "enlaceTarjeta:hover");

		listaSiguiente();
		};

		function listaSiguiente(e){
			contListas.appendChild(agregarLista);
			agregarLista.style.color = "#fff";
			agregarLista.style.display = "block";
			agregarLista.classList.add("left");
		}
};

// function nuevaTarjeta(e){
// 	e.preventDefault();
// 	input.style.display = "none";
// 	boton.style.display = "none";

// 	var textoLista = input.value;
// 	var tittleLista = document.createElement("div");
// 	tittleLista.innerHTML = textoLista;
// 	formulario.appendChild(tittleLista);

// 	var enlace = document.createElement("a");
// 	enlace.href = "#";
// 	var textoEnlace = document.createTextNode("Añadir una tarjeta ...");
// 	enlace.appendChild(textoEnlace);
// 	formulario.appendChild(enlace).classList.add("enlaceTarjeta", "enlaceTarjeta:hover");

// 	contenedor.insertBefore(agregarLista, contenedor[0]);
// 	agregarLista.classList.add("tarjetaNuevaD");
// };



// function agregarLista(e){

// 	e.preventDefault();
// 	// var boton = document.createElement("button");
// 	newLista();
// }