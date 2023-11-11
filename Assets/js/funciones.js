$(document).ready(function() {
  $('#dataTable').DataTable( {
    dom: "<'row'<'col-sm-4'l><'col-sm-4 text-center'B><'col-sm-4'f>>" +
    "<'row'<'col-sm-12'tr>>" +
    "<'row'<'col-sm-5'i><'col-sm-7'p>>",
    buttons:[{
      //Botón para Excel
      extend: 'excelHtml5',
      footer: true,
      title: 'Archivo',
      filename: 'Export_File',

      //Aquí es donde generas el botón personalizado
      text: '<span class="badge badge-success "><i class="fas fa-file-excel fa-2x"></i></span>'
  },
  //Botón para PDF
  {
      extend: 'pdfHtml5',
      download: 'open',
      footer: true,
      title: 'Reporte de usuarios',
      filename: 'Reporte de usuarios',
      text: '<span class="badge  badge-danger"><i class="fas fa-file-pdf fa-2x"></i></span>',
      exportOptions: {
          columns: [0, ':visible']
      }
  },

  //Botón para print
  {
      extend: 'print',
      footer: true,
      filename: 'Export_File_print',
      text: '<span class="badge badge-light"><i class="fas fa-print fa-2x"></i></span>'
  },
  
 
]
   
  } );
  
} );
///participantes
$(document).ready(function() {
  $('#dataTable1').DataTable( {
    dom: "<'row'<'col-sm-4'l><'col-sm-4 text-center'B><'col-sm-4'f>>" +
    "<'row'<'col-sm-12'tr>>" +
    "<'row'<'col-sm-5'i><'col-sm-7'p>>",
    buttons:[{
      //Botón para Excel
      extend: 'excelHtml5',
      footer: true,
      title: 'Archivo',
      filename: 'Export_File',

      //Aquí es donde generas el botón personalizado
      text: '<span class="badge badge-success"><i class="fas fa-file-excel fa-2x"></i></span>'
  },
  //Botón para PDF
  {
      extend: 'pdfHtml5',
      download: 'open',
      footer: true,
      title: 'Reporte de usuarios',
      filename: 'Reporte de usuarios',
      text: '<span class="badge  badge-danger"><i class="fas fa-file-pdf fa-2x"></i></span>',
      exportOptions: {
          columns: [0, ':visible']
      }
  },

  //Botón para print
  {
      extend: 'print',
      footer: true,
      filename: 'Export_File_print',
      text: '<span class="badge badge-light"><i class="fas fa-print fa-2x"></i></span>'
  },
  
 
]
   
  } );
  
} );

//cursos 
$(document).ready(function() {
  $('#tblCursos').DataTable( {
    dom: "<'row'<'col-sm-4'l><'col-sm-4 text-center'B><'col-sm-4'f>>" +
    "<'row'<'col-sm-12'tr>>" +
    "<'row'<'col-sm-5'i><'col-sm-7'p>>",
    buttons:[{
      //Botón para Excel
      extend: 'excelHtml5',
      footer: true,
      title: 'Archivo',
      filename: 'Export_File',

      //Aquí es donde generas el botón personalizado
      text: '<span class="badge badge-success"><i class="fas fa-file-excel fa-2x"></i></span>'
  },
  //Botón para PDF
  {
      extend: 'pdfHtml5',
      download: 'open',
      footer: true,
      title: 'Reporte de usuarios',
      filename: 'Reporte de usuarios',
      text: '<span class="badge  badge-danger"><i class="fas fa-file-pdf fa-2x"></i></span>',
      exportOptions: {
          columns: [0, ':visible']
      }
  },

  //Botón para print
  {
      extend: 'print',
      footer: true,
      filename: 'Export_File_print',
      text: '<span class="badge badge-light"><i class="fas fa-print fa-2x"></i></span>'
  },
  
 
]
   
  } );
  
} );



/* Se crea una función llamada frmLogin que toma un parámetro 'e' que probablemente sea un evento (por ejemplo, un evento de envío de formulario). */
function frmLogin(e) {
  e.preventDefault(); // Previene el comportamiento predeterminado del evento (por ejemplo, evitar que el formulario se envíe).

  // Obtener elementos del formulario por su ID
  const usuario = document.getElementById("usuario"); // Obtiene el elemento con ID "usuario"
  const password = document.getElementById("password"); // Obtiene el elemento con ID "clave"

  let validacionExitosa = true; // Inicializa una variable booleana como verdadera para rastrear la validación.

  // Comprueba si el campo de usuario o la clave están vacíos.
  if (usuario.value === "" || password.value === "") {
    alert("Ingrese Usuario y Contraseña"); // Muestra una alerta si alguno de los campos está vacío.
    validacionExitosa = false; // Cambia la variable de validación a falso.
  }

  // Realiza más validaciones si la validación anterior fue exitosa.
  if (validacionExitosa) {
    if (usuario.value === "admin" && password.value === "admin") {
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
function frmCurso() {
  document.getElementById("title").textContent = "Nuevo Curso ";
  document.getElementById("btnAccion").textContent = "Registrar";

  document.getElementById("id").value = "";
  $("#nuevo_part").modal("show");
}
function frmExpo() {
  document.getElementById("title").textContent = "Nuevo Expositores ";
  document.getElementById("btnAccion").textContent = "Registrar";

  document.getElementById("id").value = "";
  $("#nuevo_part").modal("show");
}
function frmCoor() {
  document.getElementById("title").textContent = "Nuevo Coordinadores  ";
  document.getElementById("btnAccion").textContent = "Registrar";

  document.getElementById("id").value = "";
  $("#nuevo_part").modal("show");
}
function frmlabo() {
  document.getElementById("title").textContent = "Nuevo Laboratorio  ";
  document.getElementById("btnAccion").textContent = "Registrar";

  document.getElementById("id").value = "";
  $("#nuevo_part").modal("show");
}

function frmBuscar() {
  document.getElementById("title").textContent = "Cursos  ";
  $("#nuevo_buscar").modal("show");
}
function frmBuscar1() {
  document.getElementById("title").textContent = "Seleccione una Plantilla";
  $("#nuevo_buscar1").modal("show");
}
//********************************************************************************************************* */
function registrarBusc(e) {
  e.preventDefault();
 
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Curso Selecciona con exito ☺",
      showConfirmButton: false,
      timer: 1500,
    });
    $("#nuevo_buscar").modal("hide"); //ocultar modal

}



function registrarUser(e) {
  e.preventDefault();

  const nombre = document.getElementById("nombre");
  const usuario = document.getElementById("usuario");
  if (usuario.value == "" || nombre.value == "") {
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
      title: "Usuario registrado con exito ☺",
      showConfirmButton: false,
      timer: 1500,
    });
    $("#nuevo_usuario").modal("hide"); //ocultar modal
  }
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

  const nombre = document.getElementById("nombre");
  
  

  if ( nombre.value == "") {
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
    $("#nuevo_part").modal("hide"); //ocultar modal

  }
}

function registrarCoordi(e) {
  e.preventDefault();
  const nombre= document.getElementById("nombre");


  
  if (nombre.value == "" ) {
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
      title: "Registrado con exito ☺",
      showConfirmButton: false,
      timer: 1500,
    });
    $("#nuevo_part").modal("hide"); //para que no se oculte el modal


  }
}
function registrarCursos(e) {
  e.preventDefault();
  const ci = document.getElementById("ci");


  
  if (ci.value == "" ) {
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
      title: "Registrado con exito ☺",
      showConfirmButton: false,
      timer: 1500,
    });
    $("#nuevo_part").modal("hide"); //para que no se oculte el modal


  }
}
function registrarExpo(e) {
  e.preventDefault();
  const nombre = document.getElementById("nombre");


  
  if (nombre.value == "" ) {
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
      title: "Registrado con exito ☺",
      showConfirmButton: false,
      timer: 1500,
    });
    $("#nuevo_part").modal("hide"); //para que no se oculte el modal


  }
}
function registrarLabo(e) {
  e.preventDefault();
  const ci = document.getElementById("ci");


  
  if (ci.value == "" ) {
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
      title: "Registrado con exito ☺",
      showConfirmButton: false,
      timer: 1500,
    });
    $("#nuevo_part").modal("hide"); //para que no se oculte el modal


  }
}
function registrarPermisos(e) {
  e.preventDefault();
 
  Swal.fire({
    position: "top-end",
    icon: "success",
    title: "Permisos Asignado ☺",
    showConfirmButton: false,
    timer: 1500,
  });
  $("#permisos").modal("hide"); //para que no se oculte el modal
}
function frmCambiarPass(e) {
  e.preventDefault();
  const actual= document.getElementById("clave_actual").value;
  const nueva= document.getElementById("clave_nueva").value;
 const confirmar= document.getElementById("confirmar_clave").value;
 if (actual==''|| nueva==''||confirmar=='') {
        alertas ('Todos los campos son obligatorio ☺','warning');
 }else{
    
 }
}

function btnRolesUser(id) {
  $("#permisos").modal("show");

}