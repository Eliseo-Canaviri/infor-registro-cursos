const FormRegistro = document.querySelector('#FormRegistro');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const usuarioInput = document.querySelector('#usuario');
const passwordInput = document.querySelector('#password');

FormRegistro.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = nameInput.value;
    const email = emailInput.value;
    const usuario = usuarioInput.value;
    const password = passwordInput.value;

    const Users = JSON.parse(localStorage.getItem('users')) || [];
    const RegistrarUsuario = Users.find(user => user.usuario === usuario);

    if (RegistrarUsuario) {
        return Swal.fire({
            icon: 'warning',
    title: 'El Usuario Ya Existe!',
    showClass: {
      popup: 'animate__animated animate__fadeInDown'
    },
    hideClass: {
      popup: 'animate__animated animate__fadeOutUp'
    }
  })
    } else {
        Users.push({ name, email, usuario, password });
        localStorage.setItem('users', JSON.stringify(Users));
        alertas('Usuario Registro Exitoso ☺', 'success');
        setTimeout(() => {
            window.location.href = 'login.html';
        }, 2000); // Redireccionar después de 2 segundos
    }
});

function alertas(mensaje, icono) {
    Swal.fire({
        position: 'top-end',
        icon: icono,
        title: mensaje,
        showConfirmButton: false,
        timer: 2000
    });
}
