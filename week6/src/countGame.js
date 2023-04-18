import { newCar } from "./addCarName.js";
import { addCarToList } from "./addCarToList.js";

export function countGame(event) {
  event.preventDefault();
  addCarToList(newCar, document.getElementById("racing-count-input").value);
}
