/******************************************
 * My Login
 *
 * Bootstrap 4 Login Page
 *
 * @author          Muhamad Nauval Azhar
 * @uri 			https://nauval.in
 * @copyright       Copyright (c) 2018 Muhamad Nauval Azhar
 * @license         My Login is licensed under the MIT license.
 * @github          https://github.com/nauvalazhar/my-login
 * @version         1.2.0
 *
 * Help me to keep this project alive
 * https://www.buymeacoffee.com/mhdnauvalazhar
 * 
 ******************************************/

'use strict';

$(function() {


	$("input[type='password'][data-eye]").each(function(i) {
		var $this = $(this),
			id = 'eye-password-' + i,
			el = $('#' + id);

		$this.wrap($("<div/>", {
			style: 'position:relative',
			id: id
		}));

		$this.css({
			paddingRight: 70
		});
		$this.after($("<div/>", {
			html: '<i class="fa-solid fa-eye"></i>',
			class: 'btn btn-primary btn-sm',
			id: 'passeye-toggle-'+i,
		}).css({
				position: 'absolute',
				right: 5,
				top: ($this.outerHeight() / 2) - 12,
				padding: '2px 7px',
				fontSize: 12,
				cursor: 'pointer',
		}));

		$this.after($("<input/>", {
			type: 'hidden',
			id: 'passeye-' + i
		}));

		var invalid_feedback = $this.parent().parent().find('.invalid-feedback');

		if(invalid_feedback.length) {
			$this.after(invalid_feedback.clone());
		}

		$this.on("keyup paste", function() {
			$("#passeye-"+i).val($(this).val());
		});
		$("#passeye-toggle-"+i).on("click", function() {
			if($this.hasClass("show")) {
				$this.attr('type', 'password');
				$this.removeClass("show");
				$(this).removeClass("btn-outline-primary");
			}else{
				$this.attr('type', 'text');
				$this.val($("#passeye-"+i).val());				
				$this.addClass("show");
				$(this).addClass("btn btn-outline-primary");
				
			}
		});
	});

	$(".my-login-validation").submit(function() {
		var form = $(this);
        if (form[0].checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
		form.addClass('was-validated');
	});
});
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