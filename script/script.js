// Obtener los elementos del formulario
var form = document.getElementById("login-form");
var username = document.getElementById("username");
var password = document.getElementById("password");

// Agregar un evento al formulario
form.addEventListener("submit", function (event) {
  event.preventDefault();
  // Validar los datos de ingreso
  if (username.value === "admin" && password.value === "1234") {
    // Redirigir a la página index.html
    window.location.href = "index.html";
  } else {
    // Mostrar un mensaje de error
    alert("Usuario o contraseña incorrectos, por favor inténtelo nuevamente");
  }
});



