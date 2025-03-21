
var num = 17;
function cambiarFuenteAumentar() {
  num = num + 1;
  var font = parseInt(num);
  document.getElementById('body').style.fontSize = font + "px";
}

function cambiarFuenteDisminuir() {
  num = num - 1;
  var font = parseInt(num);
  document.getElementById('body').style.fontSize = font + "px";
}

const $form = document.getElementById("form"),
  $email = document.getElementById("email"),
  $consulta = document.getElementById("consulta"),
  $nombre = document.getElementById("nombre"),
  $submit = document.getElementById("submit");

function validateInputs() {
  let isValid = true;
  
  if ($nombre.value.trim() === "") {
    alert("El nombre no puede estar vacío");
    isValid = false;
  }

  if ($email.value.trim() === "") {
    alert("El correo no puede estar vacío");
    isValid = false;
  } else if (!isValidEmail($email.value)) {
    alert("El correo no es válido");
    isValid = false;
  }

  if ($consulta.value.trim() === "") {
    alert("La consulta no puede estar vacía");
    isValid = false;
  }

  return isValid;
}

function isValidEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

$submit.addEventListener("click", (e) => {
  e.preventDefault();
  if (validateInputs()) {
    $form.submit();
  }
});
