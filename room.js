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
firebase. initializeApp(firebaseConfig)
  
  
    user_name = localStorage.getItem("user_name");
    console.log(user_name);
  
  document.getElementById("name").innerHTML = "Welcome " + user_name + "!";
  
  function addroom()
  {
    room_name = document.getElementById("roomname").value;
  
    firebase.database().ref("/").child(room_name).update({
      purpose : "adding room name"
    });
  
      localStorage.setItem("room_name", room_name);
      
      window.location = "chat.html";      
  }
                          
  function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
         Room_names = childKey;
         console.log("Room Name - " + Room_names);
        row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
        document.getElementById("output").innerHTML += row;
      });
    });
  
  }
  
  getData();
  
  function redirectToRoomName(name)
  {
    console.log(name);
    localStorage.setItem("room_name", name);
      window.location = "chat.html";
  }
  
  function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  
      window.location = "indext.html";
  }
  

  

  