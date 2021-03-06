import {
  createPaintingGrid,
  createPaintListener,
  gridParent,
  removePaintingGrid,
} from "./js/grid/grid.js";

import {
  gridButtonEventListener,
  resetEventListener,
  setupGridPopUpAccentEventListener,
  declineButtonClickListener,
  colorChangePaintListener,
  initColorPicker,
} from "./js/panel/buttons.js";

let currentPaintListener = createPaintListener("#000000");
let gridId = "grid";
let newGrid = createPaintingGrid(24, 24, currentPaintListener, gridId);

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

const colorPicker = initColorPicker();
colorPicker.addEventListener("change", colorChangePaintListener);