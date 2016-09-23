window.addEventListener("load", function() {
	var contenedor = document.getElementById("contenedor");
	var agregarLista = document.getElementById("añadirLista");
	var formulario = document.getElementById("form");

	agregarLista.addEventListener("click", function(e){
		e.preventDefault();
		var boton = document.createElement("button");
		newLista(contenedor);
	});

	function newLista(contenedor){
		añadirLista.style.display = "none";

		var formulario = document.createElement("form");
		contenedor.appendChild(formulario).classList.add("styleForm");

		var input = document.createElement("input");
		formulario.appendChild(input).classList.add("styleInput");

		var boton = document.createElement("button");
		formulario.appendChild(boton).classList.add("styleButton");

		var textAgregar = document.createTextNode("Guardar");
		boton.appendChild(textAgregar);

		boton.addEventListener("click", function(e){
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
		});
	};
}); 