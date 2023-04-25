const carForm = document.getElementById("car");
const carInput = document.getElementById("car-names-input");
class Car {
  constructor(name) {
    this.name = name;
  }
}

export const carList = [];

carForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const newCarNames = carInput.value.split(",").map((name) => name.trim());

  newCarNames.forEach((name) => {
    if (name.length > 5) {
      alert("5글자 이하로 입력하세요 -_-");
      carInput.value = "";
      return;
    }

    const newCar = new Car(name);
    console.log(newCar.name);
    carList.push(newCar.name);
  });
});
