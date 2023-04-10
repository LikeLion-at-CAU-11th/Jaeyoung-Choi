const myHandText = document.getElementById("my-hand-text");
const myHandIcon = document.getElementById("my-hand-icon");

const computerText = document.getElementById("computer-hand-text");
const computerIcon = document.getElementById("computer-hand-icon");

const result = document.getElementById("display-result");

const myScore = document.getElementById("my-score");
const comScore = document.getElementById("computer-score");

const rockBtn = document.getElementById("rock");
const scissorsBtn = document.getElementById("scissors");
const paperBtn = document.getElementById("paper");
const resetBtn = document.getElementById("reset-button");
const modeBtn = document.querySelector(".mode-button");
let resultText = result.innerText;

let mScore = 0;
let cScore = 0;

[rockBtn, scissorsBtn, paperBtn].forEach((b) => {
  b.addEventListener("click", displayMyChoice);
}); /*배열 안에 각 값을 돌아가면서 호출하는 것 자주 사용하고 편해서 익숙해지면 좋아요*/

resetBtn.onclick = resetGame;
// reset.addEventListener("click", resetGame);

function changeMode() {
  let body = document.querySelector("body");
  let content = document.querySelector("#contents-wrapper");
  let reset = document.querySelector("#reset-button");
  let button = document.querySelectorAll(".button");
  button = [...button]; /*nodelist를 array로 변경 */

  if (modeBtn.value == "Pink Mode") {
    body.style.backgroundColor = "pink";
    body.style.color = "white";
    // content.style.border = "white 4px solid";
    button.push(content); /*array에 마지막에 요소를 추가 */
    button.forEach((b) => {
      b.style.border = "white 4px solid";
    }); /*앞에서 공부한 forEach */
    reset.style.backgroundColor = "white";
    reset.style.color = "pink";
    modeBtn.value = "Black Mode";
    // modeBtn.classList.add("pink");
  } else {
    body.style.backgroundColor = "white";
    body.style.color = "black";
    // content.style.border = "black 4px solid";
    button.push(content);
    button.forEach((b) => {
      b.style.border = "black 4px solid";
    });
    reset.style.backgroundColor = "black";
    reset.style.color = "white";
    modeBtn.value = "Pink Mode";
    // modeBtn.classList.remove("pink");
  }
  modeBtn.classList.toggle("pink");
  /* classList.toggle === add와 remove를 on/off 방식으로 class를 처리 */
}

function resetGame() {
  myScore.innerText = "0";
  comScore.innerText = "0";
  mScore = 0;
  cScore = 0;
  // window.location.reload(); 페이지를 새로고침 하는 코드
}

// rockBtn.addEventListener("click", displayMyChoice);
// scissorsBtn.addEventListener("click", displayMyChoice);
// paperBtn.addEventListener("click", displayMyChoice);

function displayMyChoice(e) {
  let clickedBtn =
    e.currentTarget.id; /*이벤트핸들러가 호출하는 객체에 대한 참조 */
  let clickedIcon = e.target; /*태그 자체를 의미 */

  /*console.log(clickedBtn); id 자체가 나오고 
  console.log(clickedIcon); 코드 자체가 다 나옴 */

  //   console.log(myHandText);
  //   console.log(myHandIcon);

  myHandText.innerText =
    clickedBtn; /*안에 텍스트를 클릭한 버튼의 텍스트로 바꿔주는 함수 innerText */
  myHandIcon.className =
    clickedIcon.className; /*class를 클릭한 아이콘의 class로 변경 */
  myHandIcon.classList.remove("button");
  /*button을 클래스로 바꿔줬더니 button클래스가 들어가는 문제 발생 -> button클래스 삭제 */
  startGame(clickedBtn);
}

function getComChoice() {
  const randomArr = {
    0: ["rock", "fa-regular fa-hand-back-fist"],
    1: ["scissors", "fa-regular fa-hand-scissors fa-rotate-90"],
    2: ["paper", "fa-regular fa-hand"],
  };

  const randomIndex = Math.floor(Math.random() * 3);

  return randomArr[randomIndex];
}

function displayComChoice(result) {
  computerText.innerText = result[0];
  computerIcon.className = result[1];
}

function changeScore() {
  if (result.innerText === "WIN") {
    myScore.innerText =
      ++mScore; /*++를 변수 앞에다 쓰면 값을 미리 증가시키고 코드 실행 */
    comScore.innerText = --cScore;
  } else if (result.innerText === "LOSE") {
    comScore.innerText = ++cScore;
    myScore.innerText = --mScore;
  }
}

function startGame(myChoice) {
  const error = getComChoice();
  const comChoiceText = error[0];
  const comChoiceIcon = error[1];

  /*문자열 제일 앞글자를 비교해서 비교하는 것 같은데 뭔 말인지 하나도 모르겠음  */
  switch (myChoice[0] + comChoiceText[0][0]) {
    case "rs":
    case "sp":
    case "pr":
      result.innerText = "WIN"; /*옘병 내가 할 줄을 모르는듯 */
      break;

    case "rr":
    case "ss":
    case "pp":
      result.innerText = "DRAW";
      break;

    case "rp":
    case "sr":
    case "ps":
      result.innerText = "LOSE";
      break;
  }

  changeScore();
  displayComChoice([comChoiceText, comChoiceIcon]);
}
