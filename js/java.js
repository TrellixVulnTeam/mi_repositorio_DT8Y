$(() => {
const docente1 = document.getElementById("cardUno");
const docente2 = document.getElementById("cardDos");
const docente3 = document.getElementById("cardTres");

const docente1Texto = document.getElementById("textoUno");
const docente2Texto = document.getElementById("textoDos");
const docente3Texto = document.getElementById("textoTres");

//ver con dblclick
docente1.addEventListener("mouseover", function() {
    docente1Texto.style.display = "block";
});
docente2.addEventListener("mouseover", function() {
    docente2Texto.style.display = "block";
});

docente3.addEventListener("mouseover", function() {
    docente3Texto.style.display = "block";
});


docente1.addEventListener("mouseout", function() {
    docente1Texto.style.display = "none";
});
docente2.addEventListener("mouseout", function() {
    docente2Texto.style.display = "none";
});

docente3.addEventListener("mouseout", function() {
    docente3Texto.style.display = "none";
});
/*
$("#tituloDocentes").fadeOut()*/
});