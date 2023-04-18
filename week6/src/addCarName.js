export let newCar = "";

const carForm = document.getElementById("car");
const carInput = document.getElementById("car-names-input");

carForm.addEventListener("submit", (event) => {
  event.preventDefault();
  newCar = carInput.value;
  newCar = newCar.split(",").map((name) => name.trim());
  newCar.forEach((n) => {
    if (n.length > 5) {
      alert("5글자 이하로 입력하세요 -_-");
      carInput.value = "";
      return;
    }
  });
});
