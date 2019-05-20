
// Toggle the "menu--open" class .
const toggleMenu = () => {
     
   menu.classList.toggle('menu--open');
   
  }
  
  const menu = document.querySelector('.menu');
 
  let menuButton = document.querySelector('.menu-button');
  menuButton.addEventListener('click', toggleMenu)
  