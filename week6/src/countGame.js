import { carList } from "./addCarName.js";
import { addCarToList } from "./addCarToList.js";

export function countGame(event) {
  event.preventDefault();
  addCarToList(carList, document.getElementById("racing-count-input").value);
  document.getElementById("car-names-input").value = "";
}
