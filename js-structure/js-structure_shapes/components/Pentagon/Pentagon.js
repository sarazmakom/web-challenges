export function Pentagon(getRandomColors) {
  const pentagon = document.createElement("div");
  pentagon.classList.add("pentagon");
  pentagon.addEventListener("click", () => {
    pentagon.style.backgroundColor = getRandomColors();
  });
  return pentagon;
}
