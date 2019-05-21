
// Toggle the "menu--open" class .
const toggleMenu = () => {
     
   menu.classList.toggle('menu--open');
   
  }
  
  const menu = document.querySelector('.menu');
 
  let menuButton = document.querySelector('.menu-button');
  menuButton.addEventListener('click', toggleMenu)

  
   class Category {
    constructor(domElement) {
      
      this.domElement = domElement;
    
      this.expandButton = domElement.querySelector('.expandButton');
      
      this.expandButton.textContent = ('Open');
      
      this.expandButton.addEventListener('click', () => {
        this.expandCategory()
      })
    }
 
    expandCategory() {
     
      this.domElement.classList.toggle('category-open')
      if (this.expandButton.textContent == 'Open'){
       this.expandButton.textContent = 'Close';
      }     else{
        this.expandButton.textContent = 'Open';
      }
    }
  }
 

 
  let categories = document.querySelectorAll('.category');
 categories.forEach(category => {return new Category(category)}
 
  )
  