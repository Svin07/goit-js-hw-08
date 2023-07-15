import throttle from "lodash.throttle";

const refs = {


input: document.querySelector(".feedback-form input"),
textarea: document.querySelector(".feedback-form textarea"),
form: document.querySelector(".feedback-form")
};

refs.input.addEventListener("input", throttle(onformInput), 500);
refs.textarea.addEventListener("input", ontextareaInput);
refs.form.addEventListener("submit", onFormSubmit);



let feedbackFormState = {
    
}

populatteTextArea()

function onFormSubmit(evt) {
 evt.preventDefault();

 if (feedbackFormState.email === "" || feedbackFormState.message === ""){
    return 
 }
 console.log(`email: ${refs.input.value}, message: ${refs.textarea.value}`);
 evt.currentTarget.reset();
 localStorage.removeItem("feedback-form-state");

}

function populatteTextArea() {
    
    const sevedMessage = JSON.parse(localStorage.getItem("feedback-form-state"));
    if (sevedMessage){
    
    refs.input.value = sevedMessage.email;
    refs.textarea.value = sevedMessage.message;
    }
    else {
        feedbackFormState = {};
    }
}

function onformInput(evt) {
 
 feedbackFormState.email = evt.currentTarget.value;
 localStorage.setItem("feedback-form-state", JSON.stringify(feedbackFormState));
    
}

function ontextareaInput(evt) {
    
 feedbackFormState.message = evt.currentTarget.value;
 localStorage.setItem("feedback-form-state", JSON.stringify(feedbackFormState));

}




    