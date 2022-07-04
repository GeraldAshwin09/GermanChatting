function login()
{
   user_name=document.getElementById("userid").value;
    localStorage.setItem("user_name",user_name);
    window.location="room.html";
}

function info()
{
    window.location="word.html";
}



