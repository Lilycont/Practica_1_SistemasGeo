var login = () => {
    var email = document.getElementById("email");
    var password = document.getElementById("password");
  
    firebase.auth()
    .signInWithEmailAndPassword(email.value, password.value)
    .then((res) => {
        alert('Se ha iniciado sesion correctamente')
        localStorage.setItem('user', res.user.email);
        window.location.href = "StoreIndex.html"
    })
    .catch((err) => {
      alert('Las credenciales son invalidas')
    });
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