export {
  resetEventListener,
  gridButtonEventListener,
  setupGridPopUpAccentEventListener,
  declineButtonClickListener,
  colorChangePaintListener,
  initColorPicker,
};

import { gridParent, createPaintListener } from "../grid/grid.js";

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
    const height = Number.parseInt(
      document.querySelector("#height-field").value
    );
    const width = Number.parseInt(document.querySelector("#width-field").value);

    if ((height <= 100) & (height > 0) & ((width <= 100) & (width > 0))) {
      const warningMessage = document.querySelector(`#grid-accept__error-msg`);
      if (warningMessage) {
        const parent = warningMessage.parentElement;
        parent.removeChild(warningMessage);
      }

      // Hide the pop-up window
      const popUpWindow = document.querySelector("#grid-message");
      popUpWindow.classList.remove("active");

      // Remove the background blur
      const overlay = document.querySelector("#overlay");
      overlay.classList.remove("active");

      // Remove the existing grid
      gridCleaner(gridId);

      // Setup a new grid
      const newGrid = gridCreator(height, width, paintListener, gridId);
      gridParent.appendChild(newGrid);
    } else {
      // Show the warning message
      const warningMessage = document.createElement("span");
      warningMessage.textContent = `Unable to setup the grid with the defined width and height.`;
      warningMessage.classList.add('grid-message__text');
      warningMessage.id = "grid-accept__error-msg";

      const gridMessageFields = document.querySelector("#grid-message");
      // Prevent warning messages from adding up
      if (!gridMessageFields.querySelector(`#${warningMessage.id}`)) {
        gridMessageFields.appendChild(warningMessage);
      }
    }
  };

  return gridPopupAcceptEventListener;
}

function declineButtonClickListener(event) {
  /* Sets up a listener that closes the pop-up modal window and disables the overlay. */
  const gridMessage = document.getElementById("grid-message");
  gridMessage.classList.remove("active");

  const overlay = document.getElementById("overlay");
  overlay.classList.remove("active");
}

function initColorPicker() {
  const colorPicker = document.getElementById("color-picker");
  colorPicker.value = "#000000";
  return colorPicker;
}

function colorChangePaintListener(event) {
  const color = event.target.value;
  document.addEventListener("mousemove", createPaintListener(color));
}
