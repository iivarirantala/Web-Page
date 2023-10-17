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

document.querySelector('#dog').addEventListener('click', function () {
  fetch('https://dog.ceo/api/breeds/image/random')
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then((myContent) => {
      myImage.src = myContent['message'];
    })
    .catch((error) => {
      console.error('Error:', error);
     
    });
}, false);
