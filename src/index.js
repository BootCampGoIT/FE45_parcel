import './sass/main.scss';

const button = document.querySelector('.user-button');
const form = document.forms.userForm;
console.log('form :>> ', form);
button.disabled = true;

const data = {
  name: '',
  email: '',
};

const setValue = e => {
  data[e.target.name] = e.target.value;
  console.log(e.target.validity.valid);

  console.log('data :>> ', data);
  if (data.name && data.email) {
    if (form.elements.name.validity.valid && form.elements.email.validity.valid) {
      button.disabled = false;
    }
  } else button.disabled = true;
};

form.addEventListener('input', setValue);
