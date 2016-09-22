window.addEventListener("load", function() {
	var contListas = document.getElementById("contListas");
	var contenedor = document.getElementById("contenedor");
	var añadirLista = document.getElementById("añadirLista");
	añadirLista.addEventListener("click", function(){
		newLista(contenedor);
	});
	function newLista(contenedor){
		añadirLista.style.display = "none";

		var formulario = document.createElement("form");
		contenedor.appendChild(formulario).classList.add("styleForm");

		var input = document.createElement("input");
		formulario.appendChild(input).classList.add("styleInput");

		var boton = document.createElement('button');
		formulario.appendChild(boton).classList.add("styleButton");

		var textAñadir = document.createTextNode("Guardar");
		boton.appendChild(textAñadir);
	};
});
   