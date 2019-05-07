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