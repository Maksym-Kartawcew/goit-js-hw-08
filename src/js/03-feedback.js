import throttle from 'lodash.throttle';

const feedbackForm = document.querySelector(".feedback-form");
const email = feedbackForm.elements.email.value;
const password = feedbackForm.elements.password.value;

feedbackForm.addEventListener("submit", (event) => {
event.preventDefault();


if (!email || !password) {
alert("Please fill in all fields");
return;
}

const formData = {
email: email,
password: password,
};

console.log(formData);
feedbackForm.reset();
});