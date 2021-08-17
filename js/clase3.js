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



let botonAleman = document.getElementById("btnAleman")
      botonAleman.onclick = () =>{alert("Se han inscripto a el curso de aleman")}

let botonRuso = document.getElementById("btnRuso")
      botonRuso.onclick = () =>{alert("Se han inscripto a el curso de ruso")}

let botonItaliano = document.getElementById("btnItaliano")
      botonItaliano.onclick = () =>{alert("Se han inscripto a el curso de italiano")}

let botonFrances = document.getElementById("btnFrances")
      botonFrances.onclick = () =>{alert("Se han inscripto a el curso de frances")}


const enJSON = JSON.stringify(alumno1)