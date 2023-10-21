// Obtén referencias a los enlaces de navegación
const enlacemencion = document.querySelector('a[href="#mencion"]');
// Agrega manejadores de eventos a los enlaces


// Función para desplazarse suavemente a la sección correspondiente
function scrollToSection(event) {
    event.preventDefault();
    const targetId = this.getAttribute('href').substring(1); // Obtén el ID de la sección
    const targetSection = document.getElementById(targetId);
    const offset = 70; // Ajusta el desplazamiento vertical

    // Realiza el desplazamiento suave
    window.scrollTo({
        top: targetSection.offsetTop - offset,
        behavior: 'smooth'
    });
}

