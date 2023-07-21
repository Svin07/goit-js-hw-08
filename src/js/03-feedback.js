import throttle from "lodash.throttle";

const refs = {
    input: document.querySelector(".feedback-form input"),
    textarea: document.querySelector(".feedback-form textarea"),
   };

const form = document.querySelector(".feedback-form");

form.addEventListener("input", throttle(pushFormData,500));

form.addEventListener("submit", onFormSubmit);

let formData = {email:"", message:""};


function pushFormData(event) {
    formData[event.target.name] = event.target.value;

    localStorage.setItem("feedback-form-state", JSON.stringify(formData));
}
const localData = JSON.parse(localStorage.getItem("feedback-form-state"));
populatteTextArea();

function populatteTextArea() {

    if(localData === null )
    
    {return}
    if(localData.email && localData.message){
        
        refs.input.value = localData.email;
    refs.textarea.value = localData.message;
    formData.email = localData.email;
    formData.message = localData.message;
      }
else
        {console.log("є пусті поля");
        
    }

    
}
function onFormSubmit(evt) {

    evt.preventDefault();
    if (refs.input === "" || refs.textarea === ""){
        console.log("Будь ласка, заповніть поля!")
     }
     console.log(formData);
     evt.currentTarget.reset();
     localStorage.removeItem("feedback-form-state");
     formData = {email:"", message:""};
}