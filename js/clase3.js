
let seleccion = prompt("¿Que idioma te gustaria aprender?")
let cursoAleman = 800
let cursoRuso = 700
let cursoItaliano = 900
let cursoFrances = 1000

switch (seleccion.toLocaleUpperCase()){
    case "ALEMAN":
        alert("El curso de Aleman tiene un costo de " + cursoAleman);
        break;
    case "RUSO":
        alert("El curso de Ruso tiene un costo de " + cursoRuso);
        break;
    case "ITALIANO":
        alert("El curso de Italiano tiene un costo de " + cursoItaliano);
        break;
    case "FRANCES":
        alert("El curso de Frances tiene un costo de " + cursoFrances);
        break;
    case "TODOS":
        precios();
        break;
    default:
        alert("Por ahora no podemos ayudarte pero lo haremos pronto")
}

let costoLibros = 1500
let envioLibros = 200
let libros = prompt("¿Te gustaria obtener los libros?")

function precios() {
    alert("El material de estudio tiene un costo de " + (costoLibros + envioLibros))
}

switch (libros.toUpperCase()){
        case "SI":
            precios()
            console.log("La ganancia en la venta de libros es " + (costoLibros * 0.5))
            break;
        case "NO":
            alert("Perfecto")
            break;
        default:
            alert("No entendimos tu respuesta")
            break;
}


let nombreIngresado = prompt("Ingresa tu nombre");
let apellidoIngresado = prompt("Ingresa tu apellido");
let edadIngresada = prompt("Ingresa tu edad");
let emailIngresado = prompt("Ingresa tu email");

class Alumno{
    constructor(nombre, apellido,edad,email) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.email = email;
    }
    hablar(){
        console.log(this.nombre, this.apellido, "(" + this.edad + " años)",this.email + " se inscribio en un curso de " + seleccion);
    }
}
const alumno1 = new Alumno(nombreIngresado, apellidoIngresado, edadIngresada, emailIngresado);
alumno1.hablar();

class Cursos{
    constructor(docente, materialDeEstudio, dia, horario) {
        this.docente = docente;
        this.materialDeEstudio = materialDeEstudio;
        this.dia = dia;
        this.horario = horario;
    }
    inscripcion(){
        alert("Bienvenid@, las clases seran dictadas por " + this.docente + " los dias " + this.dia + " a las " + this.horario);
    }
}

const InscriptoCurso = new Cursos("Graciela Wamba", "Con libros", "Martes", "20.00 hs");
InscriptoCurso.inscripcion();

const alumno2 = new Alumno("Juan", "Perez", 25, "jperez@gmail.com");
const alumno3 = new Alumno("Martina", "Gonzales", 35, "mgonzalez@gmail.com");
const alumno4 = new Alumno("Josefina", "Gomez", 20, "jgomez@gmail.com");

let arrayAlumnos = [alumno1,alumno2,alumno3,alumno4];

arrayAlumnos.sort(function (a, b) {
    if (a.nombre.toUpperCase() > b.nombre.toUpperCase()) {
      return 1;
    }
    if (a.nombre.toUpperCase() < b.nombre.toUpperCase()) {
      return -1;
    }
    return 0;
  });
  console.log(arrayAlumnos);


const objeto = [
	{	
		arquero: "Juan",
		defensor1: "Miguel",
		defensor2: "Hernán",
		medio: "Armando",
		delantero1: "Jorge",
		delantero2: "José",
	},
	{	
		arquero: "Marcelo",
		defensor1: "Hernán",
		defensor2: "Matías",
		medio: "Armando",
		delantero1: "José",
		delantero2: "Julián",
	},
]


const hacerLista = (objeto) => {
	let html = "";

	let servicios = document.getElementById("servicios");

	for (let i = 0 ; i < objeto.length; i++) {
		let ul = document.createElement("ul");

		for (let clave in objeto[i]) {
			let li = document.createElement("li")
			/*console.log(clave);
			console.log(objeto[i][clave]);*/
			li.textContent = clave + ": " + objeto[i][clave];
			ul.appendChild(li);
		}
		servicios.appendChild(ul);
	}

}

hacerLista(objeto);