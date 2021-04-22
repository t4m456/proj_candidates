//--------------------------Global variables-----------------------//
const candidatesBox = document.querySelector(".candidates-box");
const rejectedButton = document.querySelector(".rejected");
const pausedButton = document.querySelector(".paused");
const interviewedButton = document.querySelector(".interviewed");

let candidateId ="";
let candidateName = "";
let candidateEmail = "";
let candidateTel = "";
let candidateSkills = "";
let candidateStatus = "";

let candidateObj = {};
let candidateArr = [];

candidateArr.length = 0;

let clickedValue ="";

//--------------------------Global variables end-----------------------//

class Candidates{

async getCandidates(){
    
  try{
    let result = await fetch('inc/candidates.fetch.inc.php');
    let data = await result.json();

    let mydbcontent = data;

    mydbcontent = mydbcontent.map(elem => {
      
      const candidatesId = elem.id;
      const candidatesName = elem.name;
      const candidatesEmail = elem.email;
      const candidatesTel = elem.tel;
      const candidatesSkills = elem.skills;
      const candidatesStatus = elem.status;

      return {candidatesId,candidatesName, candidatesEmail, candidatesTel, candidatesSkills, candidatesStatus}
    });
    
    return mydbcontent;

}

catch (error) {
    console.log(error);
 }


}
     filterCandidates(candidates){
        //--------------Reject----------------//
             rejectedButton.addEventListener("click", () =>{
                $( ".candidates-box" ).removeClass( "changing-candidate-box-center");
                $( ".candidates-box" ).removeClass( "changing-candidate-box-right");
                $( ".candidates-box" ).addClass( "changing-candidate-box-left");
             
             candidateArr.length = 0;

                candidates.forEach(elem => {
                candidateId = elem.candidatesId;
                 candidateName = elem.candidatesName;
                 candidateEmail = elem.candidatesEmail;
                 candidateTel = elem.candidatesTel;
                 candidateSkills = elem.candidatesSkills;
                 candidateStatus = elem.candidatesStatus;

                if (candidateStatus === "" || candidateStatus === "Elutasítva"){
                    
                    candidateArr.push(
                        
                        candidateObj = {
                            id: candidateId,
                            name : candidateName,
                            email: candidateEmail,
                            tel: candidateTel,
                            skills: candidateSkills,
                            status: candidateStatus
                        }
                           

                    )    
                    
                }
               

            });
                
            this.displayCandidates();
             
             
        });
        //--------------Reject end----------------//

        //--------------Paused----------------//
        pausedButton.addEventListener("click", () =>{
            $( ".candidates-box" ).removeClass( "changing-candidate-box-left");
            $( ".candidates-box" ).removeClass( "changing-candidate-box-right");

            $( ".candidates-box" ).addClass( "changing-candidate-box-center");
            
            candidateArr.length = 0;

            candidates.forEach(elem => {
                candidateId = elem.candidatesId;
                 candidateName = elem.candidatesName;
                 candidateEmail = elem.candidatesEmail;
                 candidateTel = elem.candidatesTel;
                 candidateSkills = elem.candidatesSkills;
                 candidateStatus = elem.candidatesStatus;

                if (candidateStatus === "" || candidateStatus === "Szüneteltetve"){
                    
                    candidateArr.push(
                        
                        candidateObj = {
                            id: candidateId,
                            name : candidateName,
                            email: candidateEmail,
                            tel: candidateTel,
                            skills: candidateSkills,
                            status: candidateStatus
                        }        

                    )   

                } 
                
              });
              this.displayCandidates();
             
        });
        //--------------Paused end----------------//

         //--------------Interviewed----------------//
         interviewedButton.addEventListener("click", () =>{
            $( ".candidates-box" ).removeClass( "changing-candidate-box-center");
            $( ".candidates-box" ).removeClass( "changing-candidate-box-left");

            $( ".candidates-box" ).addClass( "changing-candidate-box-right");
            candidateArr.length = 0;
            candidates.forEach(elem => {
                candidateId = elem.candidatesId;
                 candidateName = elem.candidatesName;
                 candidateEmail = elem.candidatesEmail;
                 candidateTel = elem.candidatesTel;
                 candidateSkills = elem.candidatesSkills;
                 candidateStatus = elem.candidatesStatus;

                if (candidateStatus === "" || candidateStatus === "Interjúztatva"){
                    
                    candidateArr.push(
                        
                        candidateObj = {
                            id: candidateId,
                            name : candidateName,
                            email: candidateEmail,
                            tel: candidateTel,
                            skills: candidateSkills,
                            status: candidateStatus
                        }
                       
                    )     

                }
                     
              });
             
              this.displayCandidates();
        });
        //--------------Interviewed end----------------//

       
    }

     displayCandidates(){
       
    let content ="";

candidateArr.forEach(elem =>{

    content += `
    <button type="button" class="candidate-button" id="${elem.id}" onclick="getValue(this.id)">
    ${elem.name}
</button>
    `;

    candidatesBox.innerHTML = content;

});

}

chosenCandidate(candidates){
    

        let whatValue = clickedValue;

        const index = candidates.map(e => e.candidatesId).indexOf(whatValue);

    localStorage.setItem("id", candidates[index].candidatesId);
    localStorage.setItem("name", candidates[index].candidatesName);
    localStorage.setItem("email", candidates[index].candidatesEmail);
    localStorage.setItem("tel", candidates[index].candidatesTel);
    localStorage.setItem("skills", candidates[index].candidatesSkills);
    localStorage.setItem("status", candidates[index].candidatesStatus);

}

           
  }

//----------------End of the objects

window.addEventListener("load", () =>{
    

    const candidates = new Candidates();
    const candidates1 = new Candidates();
    
    window.getValue = (value) => {
        
        clickedValue = value;

        candidates1.getCandidates().then(content => {

            candidates1.chosenCandidate(content);

            window.open('adatlap.php');
        })


    };

   

    candidates.getCandidates().then(content => {


        candidates.filterCandidates(content);

       
    });

    });