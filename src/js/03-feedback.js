import throttle from 'lodash.throttle';

const feedbackForm = document.querySelector('.feedback-form');
const formData = {};

feedbackForm.addEventListener('input', throttle(inputFunction, 500));
feedbackForm.addEventListener('submit', submitFunction);

//function for saving current values of the form fields
function inputFunction(event) {
  formData[event.target.name] = event.target.value;
  const feedbackData = JSON.stringify(formData);
  localStorage.setItem('feedback-form-state', feedbackData);
}

// function for submitting form
function submitFunction(event) {
  event.preventDefault();
  const { email, message } = event.currentTarget.elements;
  if (email.value === '' || message.value === '') {
    alert('Fill in all the fields');
    return;
  }
  const formData = {
    email: email.value,
    message: message.value,
  };
  console.log(formData);
  localStorage.removeItem('feedback-form-state');
  feedbackForm.reset();
}

// function for checking the storage and filling fields after page-update
function updatePageFields() {
  const storageData = localStorage.getItem('feedback-form-state');
  const parsedStorageData = JSON.parse(storageData);
  if (parsedStorageData) {
    const { email, message } = feedbackForm.elements;
    email.value = parsedStorageData.email || '';
    message.value = parsedStorageData.message || '';
  }
}

updatePageFields();
document.addEventListener('DOMContentLoaded', updatePageFields);


// import throttle from 'lodash.throttle';

// const feedbackForm = document.querySelector('.feedback-form');
// const emailEl = document.querySelector('input');
// const messageEl = document.querySelector('textarea');
// const STORAGE_KEY = 'feedback-form-state';

// // List of listeners
// feedbackForm.addEventListener('input', throttle(inputFunction, 500));
// feedbackForm.addEventListener('submit', submitFunction);

// // Function for saving current values of the form fields
// function inputFunction(event) {
//   let feedbackFormData = localStorage.getItem(STORAGE_KEY);
//   if (feedbackFormData) {
//     feedbackFormData = JSON.parse(feedbackFormData);
//   } else {
//     feedbackFormData = {};
//   }
//   feedbackFormData[event.target.name] = event.target.value;
//   localStorage.setItem(STORAGE_KEY, JSON.stringify(feedbackFormData));
// }

// // Function for submitting form
// function submitFunction(event) {
//   event.preventDefault();
//   const { elements: { email, message } } = event.currentTarget;
//   if (email.value === '' || message.value === '') {
//     alert('Fill in all the fields');
//     return;
//   }
//   const formData = {
//     email: email.value,
//     message: message.value,
//   };
//   console.log(formData);
//   localStorage.removeItem(STORAGE_KEY);
//   feedbackForm.reset();
// }

// // Function for checking the storage and filling fields after page-update
// function fillFormFields() {
//   const savedFormData = localStorage.getItem(STORAGE_KEY);
//   if (savedFormData) {
//     const parsedFormData = JSON.parse(savedFormData);
//     emailEl.value = parsedFormData.email ? parsedFormData.email : '';
//     messageEl.value = parsedFormData.message ? parsedFormData.message : '';
//   }
// }

// fillFormFields();
// document.addEventListener('DOMContentLoaded', fillFormFields);
