function myFunction() {
    var x = document.getElementById("nav");
    if (x.className === "notshowed") {
        x.style.display = "block";

    } else {
        x.className = "notshowed";
    }
}

function resized(){
    var width = window.outerWidth;
    var x = document.getElementById("nav");
    let icon = document.getElementsByClassName('icon')

    if(width > 875){
        x.style.display = "block";
        icon[0].style.display = 'none'
        console.log('Over' + width)
        
    } else {
        x.style.display = "none";
        icon[0].style.display = 'block'
        console.log('Over' +  width)
    }

}