function add_user(){
    user_name = document.getElementById("B").value;
    localStorage.setItem("user-name",user_name);
    window.location = "kwitter_room.html"
}