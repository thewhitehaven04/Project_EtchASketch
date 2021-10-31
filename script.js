import {
  createPaintingGrid,
  createPaintListener,
  setPaintingGridColor,
} from "./js/grid/grid.js";
import {
  gridButtonEventListener,
  resetEventListener,
  setupGridPopUpAccentEventListener,
} from "./js/panel/buttons.js";

let currentPaintListener = createPaintListener("#000000");
let gridNode = createPaintingGrid(12, 12, currentPaintListener);
// Set up a global that references the active grid

const main = document.querySelector("main");
main.appendChild(gridNode);

const resetButton = document.getElementById("reset-button");
resetButton.addEventListener("click", resetEventListener);

const gridbutton = document.getElementById("grid-button");
gridbutton.addEventListener("click", gridButtonEventListener);

const popUpGridAccept = document.getElementById("grid-accept");
const acceptEventListener = setupGridPopUpAccentEventListener(gridNode)
popUpGridAccept.addEventListener(gridButtonEventListener);
