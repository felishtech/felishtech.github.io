// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyBEWOVJ5VBhb-oIf5-Y3SNiqeJwvO-rgus",
    authDomain: "greenhaven-835b8.firebaseapp.com",
    databaseURL: "https://greenhaven-835b8-default-rtdb.firebaseio.com",
    projectId: "greenhaven-835b8",
    storageBucket: "greenhaven-835b8.appspot.com",
    messagingSenderId: "957724070580",
    appId: "1:957724070580:web:643352cfc7858ad1353de1",
    measurementId: "G-5M36VH3YEL"
  };
  // Initialize Firebase
  //firebase.initializeApp(firebaseConfig);
  //firebase.analytics(); 

  var database = firebase.database().ref("Users");

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      var uid = user.uid;
      // ...

      document.getElementById("loginForm").style.display = "none";
    } else {
      // User is signed out
      // ...
      document.getElementById("loginForm").style.display = "block";
    }
  });

function login()
 {
    var userName =document.getElementById("user_name_field").value;
    var passwordD = document.getElementById("psd_field").value;
    //document.getElementById("loginForm").style.display = "none";

    // if(userName === "Patrick")
    // {
    //   document.getElementById("loginForm").style.display = "none";

    // }
    // else
    // {
    //   window.alert("Access denied")
    // }

    saveMassage(userName,passwordD);

    var newDatabase = database.push();
    newDatabase.set({
      name: userName,
      password:passwordD
    });
    

    firebase.auth().signInWithEmailAndPassword(userName, passwordD)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;
      // ...
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;

      window.alert("Error: " + errorMessage);
    });
 
   
}
