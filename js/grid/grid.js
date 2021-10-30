export { createPaintingGrid, createPaintListener, setPaintingGridColor };

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

function createPaintingGrid(height, width, paintListener) {
  /** Creates a painting grid with the defined height and width.
   * @param {Number} height - the number of grid cells in vertical dimension
   * @param {Number} width - the number of grid cells in horizontal dimension
   * @returns {Node} gridNode - the element with grid-cells attached to it
   */

  // Create a div styled with the 'display: grid' property
  const gridNode = document.createElement("div");
  gridNode.classList.add("painting-grid");

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

function setPaintingGridColor(paintListener) {
  /** Sets the marker color.
   * @param {NodeList} gridCells - NodeList of gridCells the mousemove eventListener to be applied to
   */
  const gridCells = document.querySelectorAll(".grid-cell");
  gridCells.forEach((gridCell) =>
    gridCell.addEventListener("mousemove", paintListener)
  );
}
