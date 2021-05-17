  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDPKv08ET5RTwgcCebtaDbPBLmqqFnveFU",
    authDomain: "practicageodulces.firebaseapp.com",
    projectId: "practicageodulces",
    storageBucket: "practicageodulces.appspot.com",
    messagingSenderId: "802523176303",
    appId: "1:802523176303:web:658d6fd907b2797ceb1c9a"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  
  const auth = firebase.auth();

  const db = firebase.firestore();