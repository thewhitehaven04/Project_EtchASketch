export { createPaintingGrid };

function createPaintingGrid(height, width) {
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

      // Make the cell black if the cursor is over it
      gridCell.addEventListener("mousemove", (event) =>
        event.target.style.setProperty("background-color", "black")
      );

      gridNode.appendChild(gridCell);
    }
  }

  return gridNode;
}
