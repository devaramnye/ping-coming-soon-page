const email = document.getElementById("mail");
const form = document.getElementById("form");
const emailError = document.getElementById("error");

email.addEventListener("input", (event) => {
  if (!email.validity.valid) {
    emailError.textContent = "Please provide a valid email address";
    } else {
    emailError.textContent = "";
  }
});

form.addEventListener("submit", (event) => {
  if (!email.validity.valid) {
    event.preventDefault();
    emailError.textContent = "Whoops! It looks like you forgot to add your email";
  }
});