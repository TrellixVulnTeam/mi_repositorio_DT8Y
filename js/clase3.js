
let seleccion = prompt("¿Que idioma te gustaria aprender?")
let cursoAleman = 800
let cursoRuso = 700
let cursoItaliano = 900
let cursoFrances = 1000

function precios() {
    alert("Los cursos tiene un costo de " + (cursoAleman + cursoRuso + cursoItaliano + cursoFrances))
}

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
            alert(precios())
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
