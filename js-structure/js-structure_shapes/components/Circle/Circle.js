export default function Circle(getRandomColors) {
  const circle = document.createElement("div");
  circle.classList.add("circle");
  circle.addEventListener("click", () => {
    circle.style.backgroundColor = getRandomColors();
  });
  return circle;
}
