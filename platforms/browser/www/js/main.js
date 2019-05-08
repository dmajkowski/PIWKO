//Wylogowanie
function logout(){
  firebase.auth().signOut().then(function() {
      // Sign-out successful.
      document.getElementById("login_div").style.display = "none"
      document.getElementById("loggedin_div").style.display = "none";
      document.getElementById("loggedout_div").style.display = "flex";
      console.log('Wylogowałęm z main');
    }).catch(function(error) {
      // An error happened.
      console.log('BŁĄD WYLOGOWANIA');
    });
  }