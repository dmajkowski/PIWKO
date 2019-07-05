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
BarcodeReader.licenseKey = 't0127lQMAAA+QXkpMt0TbBEhI/JoOV3bv8eREci5ir/e6kklrmqOU8vpqZ2czB2I7ZjV+OJMk3lhker8n1DsDT7ksU13yU5WdlbcUSpiVMCthVsKshNkJsxNmJ8xOmJ0wJ2FOwpyEOQlzfWv9RG0mmqwbQdX4W/2bITK72bgBKuCxeQ==';
let scanner = new BarcodeReader.Scanner({
htmlElement: document.getElementById('div-video-container'),
onFrameRead: results => {console.log(results);},
onNewCodeRead: (txt, result) => {kod = txt; sessionStorage.setItem("EAN", kod); window.location.replace('product_page.html');}

});
scanner.open();

}

let email_uzytkownika = sessionStorage.getItem('email_uzytkownika');

let logged_user = document.getElementById('logged_user');
logged_user.innerText = email_uzytkownika;


// //przekazuje zeskanowany kod do pamieci
// localStorage.setItem("EAN_code", kod);

//console loggs
console.log('main.html');
console.log('User:   ' + email_uzytkownika);
console.log('KOD: ' + kod);