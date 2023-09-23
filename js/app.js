document.addEventListener("DOMContentLoaded", function () {
  //* formulario
  let form = document.querySelector("#login-form");
  //* email
  let email = document.querySelector("#input-email");
  //* password
  let password = document.querySelector("#password-input");

  //* una funcion para validar
//* la funcion "validate" retorna valor verdadero o falso
  function validate()  {
    let emailValue = email.value; //* Captura lo que el usuario escribio en el input email

    //* regex (expresiones regulares)
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    //*if
    //* escribe correo

    if (!emailRegex.test(emailValue)) {
      //* la parte del true
      document.querySelector("#emailHelp").innerHTML =
        "Por favor, ingrese un correo valido";
      return false; //* el return indica que se termina  funcion no se ejecuta nada mas!.
    }

    let passwordValue = password.value;
    if (!(passwordValue.length >= 6)) {
      document.querySelector("#passwordHelp").innerHTML =
        "La contrasenia debe tener al menos 6 caracteres";
      return false;
    }

    //Otra forma de ver la validacion

    // if(!(passwordValue.length >= 6)) {
    //     document.querySelector('#passwordHelp').innerHTML = "La contrasenia debe tener al menos 6 caracteres"
    //    return false;//
    //* Continuo con la siguiente linea * correo valido y contraenia valida

    return true;
  }
form.addEventListener("submit", function(event) {
    if(!validate()) {
        event.preventDefault();
        //* se impide que wel formulario se envie
    } else {
        alert("Enviamos el formulario, campos validos!")
    }
})

});
