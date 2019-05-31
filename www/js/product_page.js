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



//Wylogowanie
function logout(){
    firebase.auth().signOut().then(function() {
        // Sign-out successful.
        window.location.replace('index.html');
      }).catch(function(error) {
        // An error happened.
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
onNewCodeRead: (txt, result) => {kod = txt; let strona = kod + ".html"; window.location.replace(strona);}

});
scanner.open();

}

let email_uzytkownika = sessionStorage.getItem('email_uzytkownika');

let logged_user = document.getElementById('logged_user');
logged_user.innerText = email_uzytkownika;
