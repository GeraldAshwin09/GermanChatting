var firebaseConfig = {
  apiKey: "AIzaSyA-bFdVqmHU9fw0BupDESOYpY2TIJWwi7w",
  authDomain: "germanchatapp.firebaseapp.com",
  databaseURL: "https://germanchatapp-default-rtdb.firebaseio.com",
  projectId: "germanchatapp",
  storageBucket: "germanchatapp.appspot.com",
  messagingSenderId: "109808403209",
  appId: "1:109808403209:web:3bcb8f0a4b5d529b0e49d8"
};

// Initialize Firebase
firebase. initializeApp(firebaseConfig);

	user_name = localStorage.getItem("user_name");
	room_name = localStorage.getItem("room_name");

function send()
{
  msg = document.getElementById("msg").value;
  firebase.database().ref(room_name).push({
    name:user_name,
    message:msg,
   
   });

  document.getElementById("msg").value = "";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
         console.log(firebase_message_id);
	       console.log(message_data);
	       name = message_data['name'];
	       message = message_data['message'];
        
         name_with_tag = "<h4> "+ name +"</h4>";
         message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";

         google="<br><img id='thj' src='tic.png'></img>";

        row = name_with_tag + message_with_tag +google;       
        document.getElementById("output").innerHTML += row;
//End code
      } });  }); }
getData();



function logout1() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location.replace("indext.html");
}






