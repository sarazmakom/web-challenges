// Change this value to test different "weather" conditions.
console.log("What is the weather like today?");
const weather = "sunny";

switch (weather) {
  case "sunny":
    console.log("The sun is shining, the weather is sweet!");
    break;
  case "rainy":
    console.log("It's raining men, hallelujah!");
    break;
  case "snowy":
    console.log("Let it snow, let it snow, let it snow!");
    break;
  default:
    console.log("Sorry, I don't know what the weather is like today!");
}
// Adjust the "temperature" value to trigger different messages (for Part 2 only).
const temperature = 22;
