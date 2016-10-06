window.addEventListener("load", cargarPagina);

var contenedor = document.getElementById("contenedor");
var agregarLista = document.getElementById("agregarLista");
var contListas = document.getElementById("contListas");
// var formulario = document.getElementById("formulario");
var botonInicio = document.getElementById("botonInicio");

var contador = 1;


function cargarPagina (e){
	e.preventDefault();
	agregarLista.addEventListener("click", newLista);
};
function newLista(e){
	e.preventDefault();
	agregarLista.style.display = "none";

	var formulario = document.createElement("form");
	contenedor.appendChild(formulario).classList.add("styleForm");

	formulario.addEventListener("dragenter", entraArrastrar);
	formulario.addEventListener("dragover", arrastrarSobre);
	formulario.addEventListener("drop", soltar);

	function entraArrastrar(){
		this.classList.add("over");
	}

	function arrastrarSobre(){
		e.preventDefault();
	}

	function soltar(){
		var idArrastrado = e.dataTransfer.getData("text");
		var elementoArrastrado = document.getElementById(idArrastrado);
		var temporal = this.innerHTML;
		this.insertBefore(elementoArrastrado, this.childNodes[1]);
		this.classList.remove("over");
	}

	var input = document.createElement("input");
	input.focus();
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
		formulario.appendChild(tittleLista).classList.add("bold");

		var enlace = document.createElement("a");
		enlace.href = "#";
		var textoEnlace = document.createTextNode("Añadir una tarjeta ...");
		enlace.appendChild(textoEnlace);
		formulario.appendChild(enlace).classList.add("enlaceTarjeta");

		listaSiguiente();
		enlace.addEventListener("click", añadirTarjeta);

		function añadirTarjeta(e){
			e.preventDefault();
			enlace.style.display = "none";
			var añadirTarjeta = document.createElement("textarea");
			añadirTarjeta.classList.add("textArea");
			// formulario.insertBefore(añadirTarjeta, formulario.childNodes[3]);
			formulario.appendChild(añadirTarjeta);

			var botonAñadir = document.createElement("button");
			botonAñadir.classList.add("styleButton");
			// formulario.insertBefore(botonAñadir, formulario.childNodes[4]);
			formulario.appendChild(botonAñadir);

			var textAgregar = document.createTextNode("Añadir");
			botonAñadir.appendChild(textAgregar);

			botonAñadir.addEventListener("click", guardarTexto);

			function guardarTexto(e){
				e.preventDefault();
				var guardarTexto = document.createElement("div");
				guardarTexto.setAttribute("id", "guardarTexto" + contador);
	
				var textoTextArea = añadirTarjeta.value;
				guardarTexto.innerHTML = textoTextArea;
				formulario.insertBefore(guardarTexto, formulario.childNodes[3]);
				guardarTexto.classList.add("styleDiv");

				añadirTarjeta.style.display = "none";
				botonAñadir.style.display = "none";
				enlace.style.display = "inline-block";

				guardarTexto.addEventListener("dragstart", empiezaArrastrar);
				guardarTexto.addEventListener("dragend", terminarArrastrar);
				guardarTexto.draggable = true;

				contador++; 

				function empiezaArrastrar(e){
					e.preventDefault();
					e.dataTransfer.setData("text", this.id);
					this.style.opacity = "0.4";
				}

				function terminarArrastrar(e){
					this.style.opacity = null;
				}
			}
		}
	}
};

function listaSiguiente(){
	contListas.appendChild(agregarLista);
	agregarLista.style.color = "#fff";
	agregarLista.style.display = "inline-block";
	formulario.style.display = "inline-block";
};
// nodoQueSeráPadreDelNuevoNodo.insertBefore(nuevoNodo, nodoAntesDelQueHaremosLaInserción);