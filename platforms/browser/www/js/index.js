
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
      console.log('User: ' + user.email);
    } else {
      // No user is signed in.
      document.getElementById("login_div").style.display = "flex"
      document.getElementById("loggedin_div").style.display = "none";
      document.getElementById("loggedout_div").style.display = "none";
      console.log('Niezalogowany');
    }
  });

//Wylogowanie
function logout(){
firebase.auth().signOut().then(function() {
    // Sign-out successful.
console.log('wylogowano');
  }).catch(function(error) {
    // An error happened.
  });
}

//Logowanie fb
function login_fb(){

  var provider = new firebase.auth.FacebookAuthProvider();
  firebase.auth().signInWithRedirect(provider);

    }


    //logowanie google
    function login_gg(){

      var provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithPopup(provider).then(function(result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        // ...
      }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
      });

    }

    //skanowanie kodu
    let kod = "";
      function scan(){
     //https://www.dynamsoft.com/CustomerPortal/Portal/TrialLicense.aspx
        BarcodeReader.licenseKey = 't0068MgAAAAxT9peWqAbLNI2gDlg9yk8dqzhp5Me5BNCgFIg2p5X+8TPYghCr9cz6TNFlkmkpzOJelNHJaQMWGe7Bszoxoo4=';
        let scanner = new BarcodeReader.Scanner({
        htmlElement: document.getElementById('div-video-container'),
        onFrameRead: results => {console.log(results);},
        onNewCodeRead: (txt, result) => {kod = txt;}
        
     });
     scanner.open();
      }

function pokaz(){
  document.write(kod);
}