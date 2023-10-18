function frmLogin(e){
    e.preventDefault();

    const usuario=document.getElementById("usuario");
    const clave=document.getElementById("clave");

if(usuario.value=="")
{
    alert('Ingrese Usuario');
  
}else if(clave.value==""){
    alert('Ingrese Clave')
  

}


if (usuario.value==="admin" && clave.value==="admin"){
        window.location = "../Views/panel.html";
} else {
    alert('Error el Usuario y la Contraseña')
}

}