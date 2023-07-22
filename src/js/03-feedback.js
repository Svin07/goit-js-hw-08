import throttle from "lodash.throttle";
const STORAGE_KEY = 'feedback-form-state';
const refs = {
    form: document.querySelector(".feedback-form")
   };

refs.form.addEventListener("input", throttle(onFormInput,500));
refs.form.addEventListener("submit", onFormSubmit);

let formData = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
const {email, message} = refs.form.elements;

function onFormInput(event) {
    formData[event.target.name] = event.target.value;

    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

populateForm();

function populateForm() {
    const localData = JSON.parse(localStorage.getItem(STORAGE_KEY));

    if(localData){
     email.value = localData.email || '';
     message.value = localData.message || '';
     
    }

    
}
function onFormSubmit(evt) {

    evt.preventDefault();
    if (email.value === "" || message.value === ""){
        alert("Будь ласка, заповніть форму!")
     }
     else{
     console.log(formData);
     evt.currentTarget.reset();
     localStorage.removeItem(STORAGE_KEY);
     formData = {};}
}