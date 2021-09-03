 var firebaseConfig = {
      apiKey: "AIzaSyBeWsEtGd8BQSgiPy5Kl5CkoU6WIh9wLXA",
      authDomain: "c-94-project-remiel.firebaseapp.com",
      projectId: "c-94-project-remiel",
      storageBucket: "c-94-project-remiel.appspot.com",
      messagingSenderId: "727331905857",
      appId: "1:727331905857:web:9226370c4e6ca1116841c0"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    firebase.initializeApp(firebaseConfig);

      user_name = localStorage.getItem("Username");
      document.getElementById("welcome_user_name").innerHTML = "Welcome "+user_name+"!";

      function addroom() {
             room_name = document.getElementById("room_name").value;
    
            localStorage.setItem("Roomname",room_name);
        
            window.location = "kwitter_page.html";

            firebase.database().ref("/").child(room_name).update({
                  purpose: "Adding Room Name"
            });
      }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
