console.clear();

import { getRandomColor } from "./utils/randomColor.js";
import Circle from "./components/Circle/Circle.js";
import { Square } from "./components/Square/Square.js";
import { Pentagon } from "./components/Pentagon/Pentagon.js";

const root = document.getElementById("root");
const circleElement = Circle(getRandomColor);
const pentagonElement = Pentagon(getRandomColor);
const squareElement = Square(getRandomColor);

root.append(circleElement, pentagonElement, squareElement);
