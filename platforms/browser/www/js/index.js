
//Dodawanie nowego użytkownika
function signup(){

    var userEmail = document.getElementById("email_field").value;
    var userPass = document.getElementById("password_field").value;

    firebase.auth().createUserWithEmailAndPassword(userEmail, userPass).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
      });
}

//Logowanie sie za pomoca maila i hasla
function login(){

    var userEmail = document.getElementById("email_field").value;
    var userPass = document.getElementById("password_field").value;


    firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;

        window.alert("Error :" + errorMessage);

        // ...
      });

}


//Sprawdzenie Czy uzytkownik zalogowany
firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      document.getElementById("login_div").style.display = "none"
      document.getElementById("loggedin_div").style.display = "flex";
      document.getElementById("loggedout_div").style.display = "none";
    } else {
      // No user is signed in.
      document.getElementById("login_div").style.display = "flex"
      document.getElementById("loggedin_div").style.display = "none";
      document.getElementById("loggedout_div").style.display = "none";
    }
  });

//Wylogowanie
function logout(){
firebase.auth().signOut().then(function() {
    // Sign-out successful.
    document.getElementById("login_div").style.display = "none"
    document.getElementById("loggedin_div").style.display = "none";
    document.getElementById("loggedout_div").style.display = "flex";
  }).catch(function(error) {
    // An error happened.
  });
}

