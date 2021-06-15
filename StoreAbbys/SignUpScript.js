var signup = () => {
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    var username = document.getElementById("username");

    if(email.value == '' || password.value == '') {
    alert('Ningun campo debe de estar vacío')
    } else if (password.value.length < 8) {
    alert('La contraseña debe de ser mayor a 8 caracteres')
    } else {
    console.log("registrando")
    firebase.auth()
    .createUserWithEmailAndPassword(email.value, password.value)
    .then(() => {
        db.collection('usuarios').add({
            usuario: username.value,
            email: email.value
       })
       .then(() => window.location.href = "loginstore.html");
    })
    .catch(() => {
        alert('Se produjo un error inesperado')
    });
    }
}



var validar = () => {
    var checkTP = document.getElementById('checkTP')
    var btnAceptar = document.getElementById('btnAceptar')
    if (checkTP.checked) {
      document.getElementById("divSelect").style.display = "none";
      btnAceptar.disabled = false
    } else {
      document.getElementById("divSelect").style.display = "block";
      btnAceptar.disabled = true
    }
  }