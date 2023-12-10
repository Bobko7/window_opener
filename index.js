const url = document.getElementById("url");
let current;
document.addEventListener("keypress", (event) =>{
    if(event.key == "o"){
        let u = url.value;
        current = window.open(u, "_blank");
    }
    if(event.key == "c"){
        current.close();
    }
});