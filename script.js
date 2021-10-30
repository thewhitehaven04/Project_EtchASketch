import { createPaintingGrid } from "./js/grid/grid.js";
import { resetEventListener } from "./js/panel/buttons.js";

const gridNode = createPaintingGrid(25, 25);
const main = document.querySelector("main");

main.appendChild(gridNode);

const resetButton = document.querySelect("");
resetButton.addEventListener("click", resetEventListener);
