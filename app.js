let gamesq = [];
let userseq = [];
let started = false;
let level = 0;
let btns = ["green", "red", "blue", "yellow"];

h2 = document.querySelector("h2");

document.addEventListener("keypress", function () {
  if (started == false) {
    console.log("button pressed");
    started = true;
    levelup();
  }
});

function btnFlash(btn) {
  btn.classList.add("flash");
  setTimeout(function () {
    btn.classList.remove("flash");
  }, 100);
}

function levelup() {
  userseq = [];
  level++;
  h2.innerText = `level ${level}`;
  //find random button
  let randnIdx = Math.floor(Math.random() * 4);
  let randColor = btns[randnIdx];
  let randBtn = document.querySelector(`.${randColor}`);
  gamesq.push(randColor);
  console.log(gamesq);
  btnFlash(randBtn);
}
function checkans(idx) {
  if (userseq[idx] === gamesq[idx]) {
    if (userseq.length === gamesq.length) {
      setTimeout(levelup(), 1000);
    }
  } else {
    h2.innerHTML = `Game Over, Your score was <b style="color:green"> ${level}</b> <br>Please press new key`;

    document.querySelector("body").style.backgroundColor = "red";
    setTimeout(function () {
      document.querySelector("body").style.backgroundColor = "white";
    }, 100);
    reset();
  }
}

function btnpressed() {
  let btn = this;
  btnFlash(btn);
  let userColor = btn.getAttribute("id");
  userseq.push(userColor);
  checkans(userseq.length - 1);
}

let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns) {
  btn.addEventListener("click", btnpressed);
}

function reset() {
  started = false;
  userseq = [];
  gamesq = [];
  level = 0;
}
