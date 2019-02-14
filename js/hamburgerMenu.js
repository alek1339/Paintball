function myFunction() {
    var nav = document.getElementById("nav");
    let li = document.getElementsByTagName('li')

    if (nav.className === "notshowed") {
        nav.className = "showed";
        nav.style.display = "block";

    } else {
        nav.className = "notshowed";
        nav.style.display = "none";

    }
}

function resized(){
    var width = window.outerWidth;
    var nav = document.getElementById("nav");
    let icon = document.getElementsByClassName('icon')
    let li = document.getElementsByTagName('li')

    if(width > 875){
        nav.style.display = "block";
        icon[0].style.display = 'none'
        
        for(let i = 0; i < li.length; i++){
            li[i].style.display = 'inline'
        }
        
    } else {
        nav.style.display = "none";
        icon[0].style.display = 'block'
        
        for(let i = 0; i < li.length; i++){
            li[i].style.display = 'block'
        }

    }

}