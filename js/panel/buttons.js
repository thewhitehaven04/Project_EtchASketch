export { resetEventListener };

function resetEventListener(event) {
  /* Sets up the event listener that reset grid cell background colors */
  const gridCells = document.querySelectorAll(".grid-cell");
  gridCells.forEach((gridCell) =>
    gridCell.style.removeProperty("background-color")
  );
}
