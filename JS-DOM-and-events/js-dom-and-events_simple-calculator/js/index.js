console.clear();

let operand1 = 12;
const operand2 = 4;

// ----- Mathematical Operations -----

// Step 1: Use `document.querySelector` to select each button by its `data-js` attribute.

// --v-- write your code here --v--
const addButton = document.querySelector('[data-js="add"]');
const subtractButton = document.querySelector('[data-js="subtract"]');
const multiplyButton = document.querySelector('[data-js="multiply"]');
const divideButton = document.querySelector('[data-js="divide"]');
const exponentButton = document.querySelector('[data-js="exponent"]');
const moduloButton = document.querySelector('[data-js="modulo"]');
// --^-- write your code here --^--

/* 
Step 2: Add event listeners for each mathematical operation:

For each operation (add, subtract, multiply, divide, exponent, and modulo):
1. Add an event listener to the corresponding button.
2. Within the event listener, perform the operation using `operand1` and `operand2`.
3. Store the result in a variable.
4. Log the result to the console.
*/

// --v-- write your code here --v--
addButton.addEventListener("click", () => {
  const result = operand1 + operand2;
  console.log("Addition: " + operand1 + " + " + operand2 + " = " + result);
});
subtractButton.addEventListener("click", () => {
  const result = operand1 - operand2;
  console.log("Subtraction: " + operand1 + " - " + operand2 + " = " + result);
});
multiplyButton.addEventListener("click", () => {
  const result = operand1 * operand2;
  console.log(
    "Multiplication: " + operand1 + " * " + operand2 + " = " + result
  );
});
divideButton.addEventListener("click", () => {
  const result = operand1 / operand2;
  console.log("Division: " + operand1 + " / " + operand2 + " = " + result);
});
exponentButton.addEventListener("click", () => {
  const result = operand1 ** operand2;
  console.log(
    "Exponentiation: " + operand1 + " ** " + operand2 + " = " + result
  );
});
moduloButton.addEventListener("click", () => {
  const result = operand1 % operand2;
  console.log("Modulo: " + operand1 + " % " + operand2 + " = " + result);
});
// --^-- write your code here --^--

// ----- Update the First Operand -----

/*
In the following section, update the value of `operand1` using the buttons in the "Update the First Operand" section.
Each button should adjust the value of `operand1` and log the new value to the console.

Hint: To allow `operand1` to be updated, you might need to change its declaration.

Step 1: Select each button for updating `operand1` by its `data-js` attribute.
Step 2: Add event listeners to update `operand1` based on the button clicked. Log the updated value to the console.
*/

// --v-- write your code here --v--
const increaseOp1by1 = document.querySelector('[data-js="increase-by-one"]');
const increaseOp1by5 = document.querySelector('[data-js="increase-by-five"]');
const decreaseOp1by1 = document.querySelector('[data-js="decrease-by-one"]');
const decreaseOp1by5 = document.querySelector('[data-js="decrease-by-five"]');
const multiplyOp1by2 = document.querySelector('[data-js="multiply-by-two"]');
const divideOp1by2 = document.querySelector('[data-js="divide-by-two"]');

increaseOp1by1.addEventListener("click", () => {
  operand1 + 1;
  console.log("Increased by 1");
});
increaseOp1by5.addEventListener("click", () => {
  operand1 + 5;
  console.log("Increased by 5");
});
decreaseOp1by1.addEventListener("click", () => {
  operand1 - 1;
  console.log("Decreased by 1");
});
decreaseOp1by5.addEventListener("click", () => {
  operand1 - 5;
  console.log("Decreased by 5");
});
multiplyOp1by2.addEventListener("click", () => {
  operand1 * 2;
  console.log("Multiplied by 2");
});
divideOp1by2.addEventListener("click", () => {
  operand1 / 2;
  console.log("Divided by 2");
});
// --^-- write your code here --^--
