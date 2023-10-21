// Obtén el botón de abrir el modal y el modal en sí
var openModalBtn = document.getElementById("openModalBtn");
var modal = document.getElementById("modal");

var frmpart = document.getElementById("frmpart");
var nuevo_part = document.getElementById("nuevo_part");


// Obtén el botón de cerrar el modal
var frmpartclo = document.getElementById("frmpartclo");
var closeModalBtn = document.getElementById("closeModalBtn");

// Asigna una función para abrir el modal
openModalBtn.onclick = function() {
    modal.style.display = "block";
}
frmpart.onclick = function() {
    nuevo_part.style.display = "block";
}
// Asigna una función para cerrar el modal
closeModalBtn.onclick = function() {
    modal.style.display = "none";
}
frmpartclo.onclick = function() {
    nuevo_part.style.display = "none";
}

// Cierra el modal si el usuario hace clic fuera de él
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
