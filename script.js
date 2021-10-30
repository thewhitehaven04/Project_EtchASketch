import {
  createPaintingGrid,
  createPaintListener,
  setPaintingGridColor,
} from "./js/grid/grid.js";
import { resetEventListener } from "./js/panel/buttons.js";

let currentPaintListener = createPaintListener("#000000");

const gridNode = createPaintingGrid(12, 12, currentPaintListener);
const main = document.querySelector("main");

main.appendChild(gridNode);

const resetButton = document.getElementById("reset-button");
resetButton.addEventListener("click", resetEventListener);