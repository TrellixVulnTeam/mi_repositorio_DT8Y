$(() => {
	class CursoSeleccion{
   
		constructor(eleccion){ 
			this.cursoSeleccion;
			this.nombre = eleccion.nombre
			this.edad = eleccion.edad
			this.email = eleccion.email
			this.cursosIdiomas = eleccion.cursosIdiomas
			this.nivelCurso = eleccion.nivelCurso
			this.materialDeEstudio = eleccion.materialDeEstudio
		}
	
		cursoCompletado(){
			codigoFinal.style.display = "block";
			
		}
		
	}
	
	let aceptacion = document.getElementById("aceptado")
	let miFormulario = document.getElementById("datosCurso")
	let nombre = document.getElementById("nombre")
	let edad = document.getElementById("edad")
	let email = document.getElementById("email")
	let botonNombre = document.getElementById("botonCurso")
	let cursoSeleccion = new CursoSeleccion({nombre:"",edad:"",email:"",})
	let codigoFinal = document.getElementById("codigoQr")
	let fotosDatos = document.getElementById("datosfot")
	botonCurso.onclick = ingresar
	aceptacion.onclick = datosCompletos
	
	function datosCompletos(e){
		alert("Accede a este codigo QR para concretar el pago")
	
	}
	
	function ingresar(){
		let error = document.getElementById("errorNombre")
		
	   if(nombre.value != ""){
	
		   cursoSeleccion.nombre = nombre.value
		   error.innerHTML=""
		   document.getElementById("datosPersonales").style.display = "none"
		   document.getElementById("datosCurso").style.display = "none"
		   document.body.className = ""
		   aceptacion.onclick = "codigo"
		   miFormulario.style.display = "flex"
	   }else{
		   
		  error.innerHTML =  "Ingrese sus datos completos por favor"
	   }
	
	   if(document.getElementById("cursosIdiomas").value != "seleccion"){
	
		cursoSeleccion["cursosIdiomas"] = document.getElementById("cursosIdiomas").value
		}else{
	
		error.innerHTML = "Debe seleccionar un curso. </br>"
		}
	
		if(document.getElementById("nivelCurso").value != "seleccion"){
	
		cursoSeleccion["nivelCurso"] = document.getElementById("nivelCurso").value
		}else{
	
		error.innerHTML += "Debe seleccionar el nivel de la cursada. </br>"
		}
	
	
		if(document.getElementById("materialDeEstudio").value != "seleccion"){
	
		cursoSeleccion["materialDeEstudio"] = document.getElementById("materialDeEstudio").value
		}else{
	
		error.innerHTML += "Debe seleccionar si quieres o no el material de estudio. </br>"
		}
	
	
		if(error.innerHTML == ""){
	
		miFormulario.style.display = "none";
		fotosDatos.style.display = "none";
		cursoSeleccion.cursoCompletado()
	
		}
	
	}

$("#botonCurso").click(function () { 
    console.log(nombre.value + " se ha inscripto al curso de " + cursosIdiomas.value);
});


});