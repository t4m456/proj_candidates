//---------Global variables--------------//
const hamburgerButton = document.querySelector(".nav-icon");
const hamburgerCloseButton = document.querySelector(".close-hamburger");
const hamburgerDOM = document.querySelector(".hamburger-menu");
const hamburgerOverlay = document.querySelector(".hamburger-overlay");

//---------Global variables end--------------//

//-------This class operates the left top MENU---------//
class Hamburger { 
      
  setupHamburgerAPP() {
  
      hamburgerButton.addEventListener("click", this.showHamburger);
      hamburgerCloseButton.addEventListener("click", this.hideHamburger);
  };
  // --------------------eddig----------------------  
  
  showHamburger(){
      hamburgerOverlay.classList.add("transparentBcg");
      hamburgerDOM.classList.add("showhamburger");
      
  }
  
  hideHamburger() {
      hamburgerOverlay.classList.remove("transparentBcg");
      hamburgerDOM.classList.remove("showhamburger");
      
  
  }
  
  };


//-----------End of the objects


window.addEventListener("load", () =>{
  
const hamburger = new Hamburger();

hamburger.setupHamburgerAPP()


    });
  