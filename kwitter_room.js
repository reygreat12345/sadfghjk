
const firebaseConfig = {
      apiKey: "AIzaSyDfjPTa-d4RJWXp7xIDMOQP1Lg1NWmrPOA",
      authDomain: "fufu-fffff.firebaseapp.com",
      databaseURL: "https://fufu-fffff-default-rtdb.asia-southeast1.firebasedatabase.app",
      projectId: "fufu-fffff",
      storageBucket: "fufu-fffff.appspot.com",
      messagingSenderId: "968395003880",
      appId: "1:968395003880:web:195a10f49818fc1fcb365d"
    };
    
    // Initialize Firebase
 firebase.initializeApp(firebaseConfig);
    user_name = localStorage. getItem("user-name")
     document.getElementById("user-name").innerHTML = "welcome" + user_name
     function addRoom () {
          room_name = document.getElementById("room_name").value
       firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
       });

       localStorage.setItem("room_name", room_name);
       window.location = "kwitter_page.html"; 
     }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      row = "<div class='room_name' id="+ romm_name+" onclick='redirectToRoomName(this.id)'">+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      });});}
getData();
function redirectToRoomName(name){
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}
