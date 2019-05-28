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


//console loggs
console.log('main.html');
console.log('User:   ' + email_uzytkownika);
console.log('KOD: ' + kod);


////API///

// var request = new XMLHttpRequest()

// request.open('GET', 'https://world.openfoodfacts.org/api/v0/product/737628064502.json', true)
// request.onload = function() {
//   // Begin accessing JSON data here
//   var data = JSON.parse(this.response)

//   if (request.status >= 200 && request.status < 400) {
//     data.forEach(product => {
//       console.log(product.code)
//     })
//   } else {
//     console.log('error')
//   }
// }

// request.send()



// const ul = document.getElementById('authors');
const url = 'https://world.openfoodfacts.org/product/5901559140009';
// fetch(url)
//   .then(function(data) {
//     // Here you get the data to modify as you please
//     let kodzik = data.json();
//     console.log(kodzik);
//     })
//   .catch(function(error) {
//     // If there is any error you will catch them here
//   });   
let skrap = '';
fetch(url)
    .then(response => response.json())
    .then(json => {console.log('wczesniej: ' + json.code), skrap = json.code})
    .then(json => console.log("to" + skrap));


