
class Compra {
	constructor (objeto) { //este es el método más abstracto. Quizás te vaya quedando más claro cuando veas los otros métodos
		//en vez de pasar un objeto al constructor, podría tomar los valores del formulario html. Directamente. No lo recomendaría, pero es una opción
		this.nombre = objeto.nombre;
		this.apellido = objeto.apellido;
		this.email = objeto.email;
		this.producto = objeto.producto;
		this.nivel = objeto.nivel;
		this.material = objeto.material;

		//fijate que estas variables sirven para darme cuenta si está ok o no cada campo
		//voy a ejecutar validar, y dentro de validar, voy a cambiar a true si está ok.
		this.validarNombre = false;
		this.validarApellido = false;
		this.validarEmail = false;
		this.validarProducto = false;
		this.validarNivel = false;
		this.validarMaterial = false;

	}

	validar() {
		/*----------------- Valido el nombre ------------ */
		if (this.nombre == null || this.nombre == undefined || this.nombre == false || this.nombre == '') { 
		/*acá valido que no sea null, undefined, false o ''*/

			console.log(this.nombre)
			console.log("nombre no está bien") //para que veas que pasa por acá. Puede no estar
			this.validarNombre = false;
		} else {
			console.log("nombre está bien") //para que veas que pasa por acá. Puede no estar
			this.validarNombre = true;
		}

		/*----------------- Valido el apellido ------------ */
		if (this.apellido == null || this.apellido == undefined || this.apellido == false || this.apellido == '') { 
		/*acá valido que no sea null, undefined, false o ''*/
			console.log(this.apellido)
			console.log("Apellido no está bien") //para que veas que pasa por acá. Puede no estar
			this.validarApellido = false;
		} else {
			console.log("Apellido está bien") //para que veas que pasa por acá. Puede no estar
			this.validarApellido = true;
		}
		if (this.email == null || this.email == undefined || this.email == false || this.email == '') { 
			/*acá valido que no sea null, undefined, false o ''*/
				console.log(this.email)
				console.log("email no está bien") //para que veas que pasa por acá. Puede no estar
				this.validarEmail = false;
		} else {
				console.log("email está bien") //para que veas que pasa por acá. Puede no estar
				this.validarEmail = true;
		}

		/*----------------- Valido el producto ------------ */
		if (this.producto == 0) { 
		/*acá valido que no sea "Seleccione una opción". */
			console.log(this.producto)
			console.log("Producto no está bien") //para que veas que pasa por acá. Puede no estar
			this.validarProducto = false;
		} else {
			console.log("Producto está bien") //para que veas que pasa por acá. Puede no estar
			this.validarProducto = true;
		}
		if (this.nivel == 0) { 
			/*acá valido que no sea "Seleccione una opción". */
				console.log(this.nivel)
				console.log("nivel no está bien") //para que veas que pasa por acá. Puede no estar
				this.validarNivel = false;
		} else {
				console.log("nivel está bien") //para que veas que pasa por acá. Puede no estar
				this.validarNivel = true;
		}
		if (this.material == 0) { 
			/*acá valido que no sea "Seleccione una opción". */
				console.log(this.material)
				console.log("material no está bien") //para que veas que pasa por acá. Puede no estar
				this.validarMaterial = false;
		} else {
				console.log("material está bien") //para que veas que pasa por acá. Puede no estar
				this.validarMaterial = true;
		}		
	}

	modificarDOM() {
		/* esta es la última función. Toma los datos validarNombre, validarApellido y validarProducto y dice algo en el DOM. No recomedaría usar DOM dentro de la clase,
		pero pedagógicamente me parece que te puede quedar más claro.
		Vi que en tu caso, lo hiciste todo junto (tampoco estaría mal)*/

		//como sé que voy a usar los mensaje del HTML, los tomo 
		const mensajeNombre = document.getElementById('mensajeNombre')
		const mensajeApellido = document.getElementById('mensajeApellido')
		const mensajeEmail = document.getElementById('mensajeEmail')
		const mensajeProducto = document.getElementById('mensajeProducto')
		const mensajeNivel = document.getElementById('mensajeNivel')
		const mensajeMaterial = document.getElementById('mensajeMaterial')

		//nombre
		if (this.validarNombre == false) {
			mensajeNombre.innerHTML = "<span style='color:red;'>Falta el nombre</span>";
		} else {
			mensajeNombre.innerHTML = "";
		}

		//apellido
		if (this.validarApellido == false) {
			mensajeApellido.innerHTML = "<span style='color:red;'>Falta el apellido</span>";
		} else {
			mensajeApellido.innerHTML = "";
		}
		//Email
		if (this.validarEmail == false) {
			mensajeEmail.innerHTML = "<span style='color:red;'>Falta el email</span>";
		} else {
			mensajeEmail.innerHTML = "";
		}
		//producto
		if (this.validarProducto == false) {
			mensajeProducto.innerHTML = "<span style='color:red;'>Falta el producto</span>";
		} else {
			mensajeProducto.innerHTML = "";
		}
		//nivel
		if (this.validarNivel == false) {
			mensajeNivel.innerHTML = "<span style='color:red;'>Falta el nivel</span>";
		} else {
			mensajeNivel.innerHTML = "";
		}		
		//material
		if (this.validarMaterial == false) {
			mensajeMaterial.innerHTML = "<span style='color:red;'>Falta el material</span>";
		} else {
			mensajeMaterial.innerHTML = "";
		}

		//caso todos ok
		if (this.validarNombre == true && this.validarApellido == true && this.validarEmail == true && this.validarProducto == true && this.validarNivel == true && this.validarMaterial == true) {
			const form = document.getElementById('form')
			codigoFinal.style.display = "block";
			datosForm.style.display = "none";
			
			
		}
	}
}
let codigoFinal = document.getElementById("codigoQr")
let datosForm = document.getElementById("datosForm")

//la función enviar hace el nexo entre los valores del formulario y la clase
function enviar(event) {
	event.preventDefault();

	//tomo los valores del formulario
	const nombreForm = document.getElementById('nombre').value
	const apellidoForm = document.getElementById('apellido').value
	const emailForm = document.getElementById('email').value
	const productoForm = document.getElementById('producto').value
	const nivelForm = document.getElementById('nivel').value
	const materialForm = document.getElementById('material').value

	//creo el objeto. Con los datos del formulario:
	const formulario = new Compra({nombre: nombreForm, apellido: apellidoForm, email:emailForm, producto: productoForm, nivel: nivelForm, material: materialForm});

	formulario.validar(); //valido. Este método me setea los datos validarNombre, validarApellido, validarProducto

	formulario.modificarDOM();

}

//el botón que vincula a la función enviar. Guarda que llamo al form (no al botón)
const botonForm = document.getElementById('form');
botonForm.addEventListener('submit', enviar);

