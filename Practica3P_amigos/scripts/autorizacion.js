auth.onAuthStateChanged((user) => {
  if (user) {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        db.collection("amigos")
          .doc(user.uid)
          .update({
            coordenadas: {
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
            },
          });
      });
    }

    db.collection("amigos").onSnapshot(
      (snapshot) => {
        obtieneAmigos(snapshot.docs);
        configuraMenu(user);
      },
      (err) => {}
    );

    var name, email, photoUrl, uid, emailVerified;

    name = user.displayName;
    email = user.email;
    photoUrl = user.photoURL;
    emailVerified = user.emailVerified;
    uid = user.uid;
  } else {
    obtieneAmigos([]);
    configuraMenu();
  }
});

const formaregistrate = document.getElementById("formaregistrate");

formaregistrate.addEventListener("submit", (e) => {
  e.preventDefault();

  const correo = formaregistrate["rcorreo"].value;
  const contrasena = formaregistrate["rcontrasena"].value;

  auth
    .createUserWithEmailAndPassword(correo, contrasena)
    .then((cred) => {
      return db.collection("amigos").doc(cred.user.uid).set({
        nombre: formaregistrate["rnombre"].value,
        telefono: formaregistrate["rtelefono"].value,
        direccion: formaregistrate["rdireccion"].value,
      });
    })
    .then(() => {
      $("#registratemodal").modal("hide");
      formaregistrate.reset();
      formaregistrate.querySelector(".error").innerHTML = "";
    })
    .catch((err) => {
      formaregistrate.querySelector(".error").innerHTML = mensajeError(
        err.code
      );
    });
});

const salir = document.getElementById("salir");

salir.addEventListener("click", (e) => {
  e.preventDefault();
  auth.signOut().then(() => {
    alert("Amigo, saliste del sistema :D");
  });
});

function mensajeError(codigo) {
  let mensaje = "";

  switch (codigo) {
    case "auth/wrong-password":
      mensaje = "La contraseña no es correcta";
      break;
    case "auth/user-not-found":
      mensaje = "El usuario no se encuentra registrado";
      break;
    case "auth/weak-password":
      mensaje = "La contraseña debe de tener al menos 6 caracteres";
      break;
    default:
      mensaje = "Upsi! No se pudo registrar al usuario";
  }
  return mensaje;
}

const formaingresar = document.getElementById("formaingresar");

formaingresar.addEventListener("submit", (e) => {
  e.preventDefault();
  let correo = formaingresar["correo"].value;
  let contrasena = formaingresar["contrasena"].value;

  auth
    .signInWithEmailAndPassword(correo, contrasena)
    .then((cred) => {
      $("#ingresarmodal").modal("hide");
      formaingresar.reset();
      formaingresar.querySelector(".error").innerHTML = "";
    })
    .catch((err) => {
      formaingresar.querySelector(".error").innerHTML = mensajeError(err.code);
    });
});

entrarGoogle = () => {
  var provider = new firebase.auth.GoogleAuthProvider();

  firebase
    .auth()
    .signInWithPopup(provider)
    .then(function (result) {
      var token = result.credential.accessToken;
      var user = result.user;

      const html = `
                <p>Nombre: ${user.displayName}</p>
                <p>Correo: ${user.email}</p>
                <img src="${user.photoURL}" width="50px">
            `;
      datosdelacuenta.innerHTML = html;

      $("#ingresarmodal").modal("hide");
      formaingresar.reset();
      formaingresar.querySelector(".error").innerHTML = "";
    })
    .catch(function (error) {});
};
