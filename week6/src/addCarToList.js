const gameDiv = document.getElementById("result");
const gameWinner = document.getElementById("racing-winners");

export function addCarToList(car, n) {
  const newDiv = document.createElement("div");
  newDiv.id = "new-div";
  gameDiv.append(document.createElement("br"));
  gameDiv.append(document.createElement("br"));
  gameDiv.appendChild(newDiv);

  let score = [];
  for (let i = 0; i < car.length; i++) {
    score.push("");
  }
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < car.length; j++) {
      if (car[j] !== "") {
        let tem = Math.floor(Math.random() * 10);
        if (tem >= 4) {
          score[j] += "-";
        }
        const makeDiv = document.createElement("div");
        makeDiv.textContent = `${car[j]}: ${score[j]}`;
        newDiv.appendChild(makeDiv);
      }
    }
    newDiv.appendChild(document.createElement("br"));
  }

  let winnerIdx = [];
  let max_score = Math.max(...score.map((s) => s.length));
  score.forEach((e, idx) => {
    if (e.length == max_score) {
      winnerIdx.push(idx);
    }
  });

  let winner = [];
  winnerIdx.forEach((i) => {
    winner.push(car[i]);
  });
  winner = winner.join(", ");

  gameWinner.innerText = winner;

  document.getElementById("car-names-input").value = "";
  document.getElementById("racing-count-input").value = "";
}
