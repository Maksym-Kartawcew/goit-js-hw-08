import throttle from 'lodash.throttle';
const feedbackForm = document.querySelector('.feedback-form');

// list of listeners

feedbackForm.addEventListener('input', throttle(inputFunction, 500));
feedbackForm.addEventListener('submit', submitFuntion);

//function for saving current values of the form fields
// (key for the storage "feedback-form-state")

function inputFunction(event) {
  const { currentTarget } = event;
  if (!currentTarget) return;
  const {
    elements: { email, message },
  } = event.currentTarget;
  const formData = {
    email: email.value,
    message: message.value,
  };

  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

// function for submiting form
function submitFuntion(event) {
  event.preventDefault();
  const {
    elements: { email, message },
  } = event.currentTarget;
  if (email.value === '' || message.value === '') {
    window.alert('Fill in all the fields');
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
  const email = feedbackForm.elements.email;
  const message = feedbackForm.elements.message;
  if (email && message) {
    email.value = parsedStorageData?.email ?? '';
    message.value = parsedStorageData?.message ?? '';
  }
}

updatePageFields();

