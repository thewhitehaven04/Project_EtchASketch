export {
  createPaintingGrid,
  createPaintListener,
  removePaintingGrid,
  gridParent,
};

let gridParent = document.querySelector(".main-flex");

function createPaintListener(color) {
  /** Helper function that creates the event listener than changes the color of the element
   * @color {String} - the color's HEX representation
   */
  const paintListener = (event) => {
    /* We use the class check in order to allow for event delegation without applying
    color to borders of the parent element */
    if (event.target.matches(".grid-cell")) {
      event.target.style.setProperty("background-color", color);
    }
  };
  return paintListener;
}

function createPaintingGrid(
  height,
  width,
  paintListener,
  gridId,
  paintingGridClass = "painting-grid"
) {
  /** Creates a painting grid with the defined height and width.
   * @param {Number} height - the number of grid cells in vertical dimension
   * @param {Number} width - the number of grid cells in horizontal dimension
   * @param {Function} paintListener - the event listener to be called upon mouse being over a cell
   * @param {String} gridId - id of the grid being created
   * @param {String} paintingGridClass
   * @returns {Node} gridNode - the element with grid-cells attached to it
   */

  // Create a div styled with the 'display: grid' property
  const gridNode = document.createElement("div");
  gridNode.id = gridId;
  gridNode.classList.add(paintingGridClass);

  gridNode.style.setProperty("grid-template-columns", `repeat(${width}, 1fr)`);
  gridNode.style.setProperty("grid-template-rows", `repeat(${height}, 1fr)`);

  for (let currentHeight = 0; currentHeight < height; currentHeight++) {
    for (let currentWidth = 0; currentWidth < width; currentWidth++) {
      const gridCell = document.createElement("div");
      gridCell.classList.add("grid-cell");
      gridNode.appendChild(gridCell);
    }
  }
  // Make the cell black if the cursor is over it
  gridNode.addEventListener("mousemove", paintListener);
  return gridNode;
}

function removePaintingGrid(gridId) {
  /* Removes the active painting grid from the page 
  @param {String} gridId - id of the grid being removed
  */
  gridParent.removeChild(document.getElementById(gridId));
}
