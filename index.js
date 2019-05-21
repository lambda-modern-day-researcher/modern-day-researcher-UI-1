
// Toggle the "menu--open" class .
const toggleMenu = () => {
     
   menu.classList.toggle('menu--open');
   
  }
  
  const menu = document.querySelector('.menu');
 
  let menuButton = document.querySelector('.menu-button');
  menuButton.addEventListener('click', toggleMenu)

  
   class Category {
    constructor(domElement) {
      // assign this.domElement to the passed in domElement
      this.domElement = domElement;
      // this.domElement = document.querySelector('category');
      // create a reference to the ".expandButton" class. 
      this.expandButton = domElement.querySelector('.expandButton');
      // Using your expandButton reference, update the text on your expandButton to say "expand"
      this.expandButton.textContent = ('Open');
      // Set a click handler on the expandButton reference, calling the expandCategory method.
      this.expandButton.addEventListener('click', () => {
        this.expandCategory()
      })
    }
 
    expandCategory() {
      // Using our reference to the domElement, toggle a class to expand or hide the category.
      this.domElement.classList.toggle('category-open')
      if (this.expandButton.textContent == 'Open'){
       this.expandButton.textContent = 'Close';
      }     else{
        this.expandButton.textContent = 'Open';
      }
    }
  }
 
//   START HERE: 
 
//  - Select all classes named ".article" and assign that value to the articles variable.  
 
//  - With your selection in place, now chain .forEach() on to the articles variable to iterate over the articles NodeList and create a new instance of Article by passing in each article as a parameter to the Article class.
 
 
  let categories = document.querySelectorAll('.category');
 categories.forEach(category => {return new Category(category)}
 
  )
  