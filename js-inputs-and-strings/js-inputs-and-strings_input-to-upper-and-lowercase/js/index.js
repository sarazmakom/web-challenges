console.clear();

const input = document.querySelector('[data-js="first-input"]');
const uppercaseButton = document.querySelector('[data-js="button-uppercase"]');

uppercaseButton.addEventListener("click", () => {
  input.value = input.value.toUpperCase();
});

const secondInput = document.querySelector('[data-js="second-input"]');
const lowercaseButton = document.querySelector('[data-js="button-lowercase"]');

lowercaseButton.addEventListener("click", () => {
  secondInput.value = secondInput.value.toLowerCase();
});
