// Initialize Firebase
var config = {
  apiKey: "AIzaSyCJUe6lJGDiEOg0ZzkVDOutlUjtTOZk0hA",
  authDomain: "piwko-4c891.firebaseapp.com",
  databaseURL: "https://piwko-4c891.firebaseio.com",
  projectId: "piwko-4c891",
  storageBucket: "piwko-4c891.appspot.com",
  messagingSenderId: "1039773129892"
};
var img = document.getElementById('myimg');
img.addEventListener('load', zaladuj);
function zaladuj(){
  let pre = document.getElementById('pre');
  pre.style.display = 'none';
}
 


firebase.initializeApp(config);
var storage = firebase.storage();

var storageRef = storage.ref();

let EAN = sessionStorage.getItem('EAN');

storageRef.child('images/' + EAN + '.png').getDownloadURL().then(function(url)     {
  // `url` is the download URL for 'images/stars.jpg'

 // This can be downloaded directly:
 var xhr = new XMLHttpRequest();
  xhr.responseType = 'blob';
  xhr.onload = function(event) {
  var blob = xhr.response;
  };
  xhr.open('GET', url);
  xhr.send();

   // Or inserted into an <img> element:
    
     img.src = url;
   }).catch(function(error) {
   // Handle any errors
});

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



//Wylogowanie
function logout(){
    firebase.auth().signOut().then(function() {
        // Sign-out successful.
        window.location.replace('index.html');
      }).catch(function(error) {
        // An error happened.
      });
    }

let email_uzytkownika = sessionStorage.getItem('email_uzytkownika');

let logged_user = document.getElementById('logged_user');
logged_user.innerText = email_uzytkownika;

//inicjalizacja obiektów z html do zmiennych
let beer_name = document.getElementById('beer_name');
let description = document.getElementById('description');
let alcohol = document.getElementById('alcohol');
let ekstract = document.getElementById('ekstract');




//inicjalizacja zmienej dla bazy danych
var db = firebase.firestore();

//pobieranie danych z bazy
var docRef = db.collection("beers").doc(EAN);

docRef.get().then(function(doc) {
    if (doc.exists) {
          console.log("Document data:", doc.data());
        let object = doc.data();
        //wprowadzenie wartosci z bazy do elementow w html
          beer_name.innerHTML = object.name;
          description.innerHTML = object.description;
          alcohol.innerHTML = (object.alcohol + ' %');
          ekstract.innerHTML = (object.ekstract + ' % wag')



          console.log(object.name);
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
}).catch(function(error) {
    console.log("Error getting document:", error);
});