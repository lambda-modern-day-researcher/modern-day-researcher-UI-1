
class TabLink {
    constructor(element) {
      
      this.element = element
      
      this.data = this.element.dataset.tab
      
      this.itemElement = document.querySelector(`.tabs-item[data-tab='${this.data}']` )
      
      this.tabItem = new TabItem(this.itemElement)
     
      this.element.addEventListener('click', () => {this.select(element)})
    };
  
    select(element) {
  
  
            
      let links = document.querySelectorAll('.tabs-link')
     
  
      Array.from(links).forEach(link => {
      link.classList.remove('tabs-link-selected')
            
    });
     
      this.element.classList.add("tabs-link-selected")
     
      this.tabItem.select()
    }
  }
  
  class TabItem {
    constructor(element) {
        this.element = element
     
    }
  
    select() {
      
      
      let items = document.querySelectorAll('.tabs-item')
  
      
      items.forEach(item => {
      item.classList.remove('tabs-item-selected')
         })
     
      this.element.classList.add("tabs-item-selected")
    }
  }
  
  
  
  let links = document.querySelectorAll('.tabs-link');
  links.forEach(link =>{
   new TabLink(link);
  });