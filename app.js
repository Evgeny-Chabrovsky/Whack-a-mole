const square = document.querySelectorAll(".square");
const mole = document.querySelectorAll(".mole");
const timeLeft = document.querySelector("#time-left");
let score = document.querySelector("#score");

let result = 0;
let currentTime = timeLeft.textContent;

function randomSquare() {
  square.forEach((className) => {
    className.classList.remove("mole");
  });
  let randomPosition = square[Math.floor(Math.random() * 9)];
  randomPosition.classList.add("mole");
  hitPosition = randomPosition.id;
}

square.forEach((id) => {
  id.addEventListener("mouseup", () => {
    if (id.id === hitPosition) {
      result = result + 1;
      score.textContent = result;
    }
  });
});

function countDown() {
  currentTime--;
  timeLeft.textContent = currentTime;
  randomSquare();
  if (currentTime === 0) {
    alert("GAME OVER! Your final score is " + result);
    result = 0;
    currentTime = 30;
    score.textContent = 0;
  }
}

let timer = setInterval(countDown, 1000);
