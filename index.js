import './style.css';

const form = document.getElementById('form');

function onSubmit(event) {
    event.preventDefault();
    const first = form.elements["fname"].value;
    const middle = form.elements["Mname"].value;
    const last = form.elements["lname"].value;
    const gender = form.elements["gender"].value;
    const Pnumber = form.elements["Pnumber"].value;
    const email = form.elements["email"].value;
    const address = form.elements["address"].value;


    if (first.length == 0){
        form.elements["fname"].style.border = "2px solid";
        form.elements["fname"].style.borderColor = "red";
      }else {
        form.elements["fname"].style.border = "none";
      }
      if (last.length == 0){
        form.elements["lname"].style.border = "2px solid";
        form.elements["lname"].style.borderColor = "red";
      }else {
        form.elements["lname"].style.border = "none";
      }
      if (middle.length == 0) {
        form.elements["Mname"].style.border = "2px solid";
        form.elements["Mname"].style.borderColor = "red";
      } else {
        form.elements["Mname"].style.borderColor = "none";
      }
      if (Pnumber.length == 0) {
        form.elements["Pnumber"].style.border = "2px solid";
        form.elements["Pnumber"].style.borderColor = "red";
      } else {
        form.elements["Pnumber"].style.borderColor = "none";
      }
      if (email.length == 0){
        form.elements["email"].style.border = "2px solid";
        form.elements["email"].style.borderColor = "red";
      }else {
        form.elements["email"].style.border = "none";
      }
      if (address.length == 0) {
        form.elements["address"].style.border = "2px solid";
        form.elements["address"].style.borderColor = "red";
      } else {
        form.elements["address"].style.borderColor = "none";
      }
      if (first.length == 0 || middle.length == 0 || last.length == 0 || email.length == 0 || Pnumber.length == 0 || address.length == 0 || gender.value == ""){
        const error = document.getElementById('form-errors');
        error.innerHTML = '<p> Some inputs have not been filled or are invalid.</p>';
      }
      
    window.localStorage.setItem('first', first.value);
    window.localStorage.setItem('last', last.value);
    window.localStorage.setItem('middle', middle.value);
    window.localStorage.setItem('gender', gender.value);
    window.localStorage.setItem('Pnumber', Pnumber.value);
    window.localStorage.setItem('email', email.value);
    window.localStorage.setItem('address', address.value);


}


form.addEventListener('submit',onSubmit);