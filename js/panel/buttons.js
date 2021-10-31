export {
  resetEventListener,
  gridButtonEventListener,
  setupGridPopUpAccentEventListener,
  declineButtonClickListener
};

import { gridParent, removePaintingGrid } from "../grid/grid.js";

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
  gridCreator,
  gridId,
  paintListener,
  gridCleaner
) {
  /** Sets up a listener that removes the active grid and replaces it with the new one 
  with user-defined dimensions 
  * @param {Function} gridCreator - the function to call in order to create the new grid 
  * @param {String} gridId - id of the grid being created 
  * @param {Function} paintListener - the function that defines the color to be applied upon mouseover
  * @param {Function} gridCleaner - the function to call to remove the previous grid
  */
  const gridPopupAcceptEventListener = (event) => {
    /* Sets up a listener that adjusts grid sizes depending on 
  user input in height and width fields of the pop-up */

    // Hide the pop-up window
    const popUpWindow = document.querySelector("#grid-message");
    popUpWindow.classList.remove("active");

    // Remove the background blur
    const overlay = document.querySelector("#overlay");
    overlay.classList.remove("active");

    // Remove the existing grid
    gridCleaner(gridId);

    // Setup a new grid
    const height = Number.parseInt(
      document.querySelector("#height-field").value
    );
    const width = Number.parseInt(document.querySelector("#width-field").value);
    const newGrid = gridCreator(height, width, paintListener, gridId);
    gridParent.appendChild(newGrid);
  };

  return gridPopupAcceptEventListener;
}

function declineButtonClickListener(event) {
  /* Sets up a listener that closes the pop-up modal window and disables the overlay. */
  const gridMessage = document.getElementById("grid-message");
  gridMessage.classList.remove("active");
  
  const overlay = document.getElementById('overlay');
  overlay.classList.remove("active");
}
