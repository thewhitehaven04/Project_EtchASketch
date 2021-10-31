export { resetEventListener, gridButtonEventListener };

function resetEventListener(event) {
  /* Sets up the event listener that resets grid cell background colors */
  const gridCells = document.querySelectorAll(".grid-cell");
  gridCells.forEach((gridCell) =>
    gridCell.style.removeProperty("background-color")
  );
}

function gridButtonEventListener(event) {
  const overlay = document.querySelector('#overlay');
  overlay.classList.add('active');

  const gridMessageModal = document.querySelector('#grid-message');
  gridMessageModal.classList.add('active');
}
