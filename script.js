function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

function increase()
{
 document.getElementById("img").style.width = '600px'  
}

function decrease()
{
document.getElementById("img").style.width= ''    
}