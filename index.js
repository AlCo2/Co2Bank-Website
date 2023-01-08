let shownav = document.getElementById("shownav");
let hidenav = document.getElementById("hidenav");
let navbar = document.getElementById("navlist");
let signup = document.getElementById("navbtn");
function show(){
    shownav.style.display = "none";
    hidenav.style.display = "flex";
    navbar.style.display = "flex";
    navbar.style.opacity = 1;
    navbar.style.height = 100 + '%';
    signup.style.display = 'none'
}
function hide(){
    shownav.style.display = "flex";
    hidenav.style.display = "none";
    navbar.style.display = "none";
    signup.style.display = 'block'
}
window.addEventListener("resize", function(event) {
    if(document.body.clientWidth>600){
        shownav.style.display = "none";
        hidenav.style.display = "none";
        navbar.style.display = "flex";  
    }else{
        shownav.style.display = "flex";
        hidenav.style.display = "none";
        navbar.style.display = "none";
        signup.style.display = 'block';
    }
})