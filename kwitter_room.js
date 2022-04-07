const firebaseConfig = {
  apiKey: "AIzaSyBylEUMI794x63tAShixcsS5bo4_f6HAc4",
  authDomain: "kwitter-3fc09.firebaseapp.com",
  databaseURL: "https://kwitter-3fc09-default-rtdb.firebaseio.com",
  projectId: "kwitter-3fc09",
  storageBucket: "kwitter-3fc09.appspot.com",
  messagingSenderId: "769667397488",
  appId: "1:769667397488:web:6aafc350d1949aa89a01b5"
};
// Initialize Firebase
//const app = initializeApp(firebaseConfig);

firebase.initializeApp(firebaseConfig);



user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
      Room_names = childKey;
     
    });
  });

}





function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "index.html";
}

