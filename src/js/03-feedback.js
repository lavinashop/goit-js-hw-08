import throttle from 'lodash.throttle';
const inputForm = document.querySelector('.feedback-form');
const formFieldKey = 'feedback-form-state';
const inputValue = JSON.parse(localStorage.getItem(formFieldKey)) || {};
inputForm.addEventListener('input', throttle(formFields, 500));
inputForm.addEventListener('submit', formSubmit);

function formFields(evt){
    if (evt.target.nodeName === "INPUT") {
        inputValue.email = evt.target.value; 
    } else if(evt.target.nodeName === "TEXTAREA") {
        inputValue.message = evt.target.value;  
    }
   localStorage.setItem(formFieldKey, JSON.stringify(inputValue))  
}
function formSubmit(event){
event.preventDefault()
console.log(inputValue);
event.currentTarget.reset();
localStorage.removeItem(formFieldKey);
};
function updateData(){
if (localStorage.getItem(formFieldKey)) {
    const parcedValues = JSON.parse(localStorage.getItem(formFieldKey)|| "")
    inputForm.elements.email.value = parcedValues.email || "";
    inputForm.elements.message.value = parcedValues.message || "";
}
}
updateData()