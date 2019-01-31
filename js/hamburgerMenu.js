function myFunction() {
    var x = document.getElementById("nav");
    if (x.className === "notshowed") {
        x.style.display = "block";
        x.className = "showed";

    } else {
        x.className = "notshowed";
        x.style.display = "none";
    }
}

function resized(){
    var width = window.outerWidth;
    var x = document.getElementById("nav");
    if(width > 860){
        x.style.display = "inline";
    }
    if(width <= 860){
        x.style.display = "none";
    }

}