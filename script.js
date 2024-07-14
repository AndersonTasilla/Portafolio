let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}
function seleccionar(){
  //oculto el menu una vez que selecciono una opcion
  document.getElementById("nav").classList = "";
  menuVisible = false;
}
document.addEventListener('DOMContentLoaded', function () {
  var emailLink = document.getElementById('email-link');
  var email = 'andersontasilla.dev' + '@gmail.com'; // Ajusta esto con tu dirección de correo
  emailLink.addEventListener('click', function (event) {
      event.preventDefault(); // Previene la redirección
      window.location.href = 'mailto:' + email;
  });
});