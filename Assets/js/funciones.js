/* Se crea una función llamada frmLogin que toma un parámetro 'e' que probablemente sea un evento (por ejemplo, un evento de envío de formulario). */
function frmLogin(e) {
  e.preventDefault(); // Previene el comportamiento predeterminado del evento (por ejemplo, evitar que el formulario se envíe).

  // Obtener elementos del formulario por su ID
  const usuario = document.getElementById("usuario"); // Obtiene el elemento con ID "usuario"
  const clave = document.getElementById("clave"); // Obtiene el elemento con ID "clave"

  let validacionExitosa = true; // Inicializa una variable booleana como verdadera para rastrear la validación.

  // Comprueba si el campo de usuario o la clave están vacíos.
  if (usuario.value === "" || clave.value === "") {
    alert("Ingrese Usuario y Contraseña"); // Muestra una alerta si alguno de los campos está vacío.
    validacionExitosa = false; // Cambia la variable de validación a falso.
  }

  // Realiza más validaciones si la validación anterior fue exitosa.
  if (validacionExitosa) {
    if (usuario.value === "admin" && clave.value === "admin") {
      // Verifica si el usuario y la clave son "admin".
      window.location = "../Views/panel.html"; // Redirige a la página de panel si coinciden.
    } else {
      alert("Error: El Usuario y la Contraseña no son correctos"); // Muestra un mensaje de error si no coinciden.
    }
  }
}

function frmUsuario() {
  document.getElementById("title").textContent = "Nuevo Usuario";
  document.getElementById("btnAccion").textContent = "Registrar";
  document.getElementById("claves").classList.remove("d-none");
  document.getElementById("frmUsuario").reset();
  document.getElementById("id").value = "";
  $("#nuevo_usuario").modal("show");
}

function frmPart() {
  document.getElementById("title").textContent = "Nuevo Participante";
  document.getElementById("btnAccion").textContent = "Registrar";

  document.getElementById("id").value = "";
  $("#nuevo_part").modal("show");
}

function btnEliminarPart(id) {
  Swal.fire({
    title: "Estas Seguro de Eliminar?",
    text: "Se eliminara de forma permanente!!!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Si!",
    cancelButtonText: "No",
  }).then((result) => {
    if (result.isConfirmed) {
      const url = base_url + "Cursos/eliminar/" + id; //estamos enviando ala controlador
      const http = new XMLHttpRequest();
      http.open("GET", url, true);
      http.send();
      http.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
          //console.log(this.responseText);
          const res = JSON.parse(this.responseText);
          tblcursos.ajax.reload(); //recargar tabla
          alertas(res.msg, res.icono);
        }
      };
    }
  });
}

function registrarPart(e) {
  e.preventDefault();
  const ci = document.getElementById("ci");
  const nombre = document.getElementById("nombre");

  if (ci.value == "" || nombre.value == "") {
    Swal.fire({
      position: "top-end",
      icon: "warning",
      title: "Todo los campos son obligatorios ☺",
      showConfirmButton: false,
      timer: 1500,
    });
  } else {
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Participante registrado con exito ☺",
      showConfirmButton: false,
      timer: 1500,
    });
  }
}
