//----------------Global variables------------------//
const listOutLiked = document.querySelector(".list-out-liked");
const likedBox = document.querySelector(".liked-box");

let likeToggle = 0;



//----------------Global variables end------------------//


//---------------Modal class responsible for the left hand side menu liked elements-----//
class Modal {

    triggerModal(){

        listOutLiked.addEventListener("click", () =>{

            this.showLiked();

        })


    }
 showLiked(){
    let result = "";

    if (likeToggle === 0){
        
   
        
        for(let i = 0; i < localStorage.length; i++){

            let pureKey = localStorage.key(i);
        
            if(pureKey !== "id" && pureKey !== "status" && pureKey !== "skills" && pureKey !== "name" && pureKey !== "tel" && pureKey !== "email"){
                pureKey = pureKey;
       
        let showLikedObj = JSON.parse(localStorage.getItem(pureKey));
       
        

        if (typeof(showLikedObj) === 'object' && showLikedObj !== null ){

            result += `
            
            <p>${showLikedObj.name}</p>
            <p>${showLikedObj.email}</p>
            <p>${showLikedObj.tel}</p>
            <hr>
            
            `
            likedBox.innerHTML = result;

      
        }
    } 
    }  
    likeToggle = 1;
    
    
    }else if (likeToggle === 1){


        likeToggle = 0;
        
        likedBox.innerHTML = "";
    
         }
      

}

}
//------------End of the class



window.addEventListener("load", () =>{
  
  const modal = new Modal();

  modal.triggerModal();

  

    });