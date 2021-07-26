const objeto = [
	{	
		Cursos: "Aleman",
		Inicial: "Martes",
		Intermedio: "Lunes",
		Avanzado: "Jueves",
		Profesional: "Viernes",
	},
	{	
		Cursos: "Ruso",
		Inicial: "Martes",
		Intermedio: "Lunes",
		Avanzado: "Jueves",
		Profesional: "Viernes",
	},
    {
        Cursos: "Frances",
        Inicial: "Martes",
        Intermedio: "Lunes",
        Avanzado: "Jueves",
        Profesional: "Viernes",
    },
    {
        Cursos: "Italiano",
        Inicial: "Martes",
        Intermedio: "Lunes",
        Avanzado: "Jueves",
        Profesional: "Viernes",
    },
]



const hacerTabla = (objeto) => {

	let servicios = document.getElementById("servicios");
	let tabla = document.createElement("table");
	tabla.setAttribute("class", "table");

	let thead = document.createElement("thead");
	let filaHead = document.createElement("tr");

	for (let i = 0; i<1; i++) {
		for(let clave in objeto[i]) {
			let th = document.createElement("th");
			th.textContent = clave;
			filaHead.appendChild(th);
		}
	}

	thead.appendChild(filaHead);
	tabla.appendChild(thead);

	for (let i = 0; i < objeto.length; i ++) {
		let fila = document.createElement("tr");

		for (let clave in objeto[i]) {
			let celda = document.createElement("td");
			celda.textContent = objeto[i][clave];
			fila.appendChild(celda);
		}
		
		tabla.appendChild(fila)		
	}

	servicios.appendChild(tabla);

}

hacerTabla(objeto);
