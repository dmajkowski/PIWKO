
document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
    console.log(navigator.camera);
}
// Initialize Firebase
var config = {
  apiKey: "AIzaSyCJUe6lJGDiEOg0ZzkVDOutlUjtTOZk0hA",
  authDomain: "piwko-4c891.firebaseapp.com",
  databaseURL: "https://piwko-4c891.firebaseio.com",
  projectId: "piwko-4c891",
  storageBucket: "piwko-4c891.appspot.com",
  messagingSenderId: "1039773129892"
};
firebase.initializeApp(config);

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

let email_uzytkownika = "";
//Sprawdzenie Czy uzytkownik zalogowany
firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      window.location.assign('main.html')
      console.log('User: ' + user.email);
      email_uzytkownika = user.email;

    } else {
      // No user is signed in.
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
