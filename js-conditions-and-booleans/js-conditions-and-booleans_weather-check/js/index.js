// Change this value to test different "weather" conditions.
console.log("What is the weather like today?");
const weather = "snowy";
const temperature = 11;

switch (weather) {
  case "sunny":
    if (temperature > 20) {
      console.log(
        "The sun is shining, the weather is sweet! And it's warm too!"
      );
    } else {
      console.log(
        "The sun is shining, the weather is sweet! A bit chilly though! You might need a light jacket."
      );
    }
    break;
  case "rainy":
    console.log(
      "It's raining men, hallelujah! Put a raincoat or take your umbrella."
    );
    break;
  case "snowy":
    if (temperature < 0) {
      console.log(
        "It's snowing and freezing cold! You might need more layers and a winter jacket if you go outside. Or just stay warm at home."
      );
    } else {
      console.log("It's snowing, stay warm!");
    }
    break;
  default:
    console.log(
      "Sorry, I don't know what the weather is like today! Try to adjust the parameters."
    );
}
// Adjust the "temperature" value to trigger different messages (for Part 2 only).
