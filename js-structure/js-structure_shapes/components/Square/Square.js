export function Square(getRandomColors) {
  const square = document.createElement("div");
  square.classList.add("square");
  square.addEventListener("click", () => {
    square.style.backgroundColor = getRandomColors();
  });
  return square;
}
