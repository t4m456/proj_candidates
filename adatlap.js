//-------------Global variables------------------------------//
const dataBox = document.querySelector(".data-box");

let receivedId = localStorage.getItem('id');
const receivedName = localStorage.getItem('name');
const receivedEmail = localStorage.getItem('email');
const receivedTel = localStorage.getItem('tel');
const receivedSkills = localStorage.getItem('skills');
const receivedStatus = localStorage.getItem('status');

const rejectedButton = document.querySelector(".rejected");
const pausedButton = document.querySelector(".paused");
const interviewedButton = document.querySelector(".interviewed");

const likeButton = document.querySelector(".fa-thumbs-up");


let receivedIdString = String(receivedId);

receivedId = parseInt(receivedId);

//----------------Global variables end---------------//

//-------------On adatlap.php Status class operates and shows the status according to MySQL and visualize it using localStorage
class Status{

    triggerStatus(){

rejectedButton.addEventListener("click", () =>{

    $.post("inc/changestatus.inc.php",
  {
    id: receivedId,
    status: "Elutasítva"
    

  });

  localStorage.setItem("status", "Elutasítva");

  window.open('adatlap.php',"_self");


});

pausedButton.addEventListener("click", () =>{

    $.post("inc/changestatus.inc.php",
    {
      id: receivedId,
      status: "Szüneteltetve"
      
  
    });
  
    localStorage.setItem("status", "Szüneteltetve");
  
    window.open('adatlap.php',"_self");

});

interviewedButton.addEventListener("click", () =>{

    $.post("inc/changestatus.inc.php",
  {
    id: receivedId,
    status: "Interjúztatva"
    

  });

  localStorage.setItem("status", "Interjúztatva");

  window.open('adatlap.php',"_self");


});


    }



}

//--------- Like class responsible for the like button function------//

class Like{


    likeButtonTrigger(){
 
        likeButton.addEventListener("click", () =>{

            this.setLikeLogic();

        })

    }

    setLikeLogic(){

        let likeObj = {
            name: receivedName,
            email: receivedEmail,
            tel: receivedTel
           
        }

        let likeObjToStorage = JSON.stringify(likeObj);

        
            if (localStorage.hasOwnProperty(receivedId) === false) {
                
            
            $(".fa-thumbs-up").addClass("liked-trigger");
            

            localStorage.setItem(receivedId, likeObjToStorage);
            }
            
            else if (localStorage.hasOwnProperty(receivedId) === true) {


            $(".fa-thumbs-up").removeClass("liked-trigger");

            localStorage.removeItem(receivedId);
            };
            

    }

}




 window.addEventListener("load", () =>{
  
    if (localStorage.hasOwnProperty(receivedId) === false) {
                
            
        $(".fa-thumbs-up").removeClass("liked-trigger");
    }
    else if (localStorage.hasOwnProperty(receivedId) === true) {


        $(".fa-thumbs-up").addClass("liked-trigger");
    };

    let dataForward ="";

    dataForward +=  `<p>Név: <span class="data-decor">${receivedName}</span></p>
    <p>E-mail: <span class="data-decor">${receivedEmail}</span></p>
    <p>Telefon: <span class="data-decor">${receivedTel}</span></p>
    <p>Kompetenciák: <span class="data-decor">${receivedSkills}</span></p>
    <p>Állapot: <span class="data-decor">${receivedStatus}</span></p>
    `;

    dataBox.innerHTML = dataForward;


    const status = new Status();

    status.triggerStatus();

    const  like = new Like();

    like.likeButtonTrigger();



    });