// Obtén el botón de abrir el modal y el modal en sí
var openModalBtn = document.getElementById("openModalBtn");
var modal = document.getElementById("modal");

var openModalBtn1 = document.getElementById("openModalBtn1");
var modal1 = document.getElementById("modal1");

// Obtén el botón de cerrar el modal
var closeModalBtn = document.getElementById("closeModalBtn");
var closeModalBtn1 = document.getElementById("closeModalBtn1");

// Asigna una función para abrir el modal
openModalBtn.onclick = function() {
    modal.style.display = "block";
}
openModalBtn1.onclick = function() {
    modal1.style.display = "block";
}
// Asigna una función para cerrar el modal
closeModalBtn.onclick = function() {
    modal.style.display = "none";
}
closeModalBtn1.onclick = function() {
    modal1.style.display = "none";
}

// Cierra el modal si el usuario hace clic fuera de él
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
