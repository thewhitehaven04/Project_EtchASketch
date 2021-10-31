export {
  resetEventListener,
  gridButtonEventListener,
  setupGridPopUpAccentEventListener,
};

import { removePaintingGrid } from "../grid/grid.js";

function resetEventListener(event) {
  /* Sets up the event listener that resets grid cell background colors */
  const gridCells = document.querySelectorAll(".grid-cell");
  gridCells.forEach((gridCell) =>
    gridCell.style.removeProperty("background-color")
  );
}

function gridButtonEventListener(event) {
  const overlay = document.querySelector("#overlay");
  overlay.classList.add("active");

  const gridMessageModal = document.querySelector("#grid-message");
  gridMessageModal.classList.add("active");
}

function setupGridPopUpAccentEventListener(
  gridToRemove,
  gridCreator,
  paintListener,
  rootReference = document.querySelector("main")
) {
  /* Sets up a listener that removes the active grid and replaces it with the new one 
  with user-defined dimensions 

  @param {Node} gridToRemove - the grid to be removed when the listener is called;
  @param {Function} gridCreator - the function to call in order to create the new grid 
  */
  const gridPopupAcceptEventListener = (event) => {
    /* Sets up a listener that adjusts grid sizes depending on 
  user input in height and width fields of the pop-up */

    // Hide the pop-up window
    const popUpWindow = document.querySelector("#grid-message");
    popUpWindow.classList.remove("active");

    const height = Number.parseInt(
      document.querySelector("#height-field").textContent
    );
    const width = Number.parseInt(
      document.querySelector("#width-field").textContent
    );

    // Remove the old
    removePaintingGrid(gridToRemove);

    // Setup a new grid
    const newGrid = gridCreator(height, width, paintListener);
    rootReference.appendChild(newGrid);
  };

  return gridPopupAcceptEventListener;
}
