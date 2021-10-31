import {
  createPaintingGrid,
  createPaintListener,
  setPaintingGridColor,
  gridParent,
  removePaintingGrid,
} from "./js/grid/grid.js";
import {
  gridButtonEventListener,
  resetEventListener,
  setupGridPopUpAccentEventListener,
  declineButtonClickListener
} from "./js/panel/buttons.js";

let currentPaintListener = createPaintListener("#000000");
let gridId = "grid";
let newGrid = createPaintingGrid(60, 60, currentPaintListener, gridId);

gridParent.appendChild(newGrid);

const resetButton = document.getElementById("reset-button");
resetButton.addEventListener("click", resetEventListener);

const gridbutton = document.getElementById("grid-button");
gridbutton.addEventListener("click", gridButtonEventListener);

const popUpGridAccept = document.getElementById("grid-accept");
const acceptEventListener = setupGridPopUpAccentEventListener(
  createPaintingGrid,
  gridId,
  currentPaintListener,
  removePaintingGrid
);
popUpGridAccept.addEventListener("click", acceptEventListener);

const popUpDecline = document.getElementById("grid-decline");
popUpDecline.addEventListener("click", declineButtonClickListener);