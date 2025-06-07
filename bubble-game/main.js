let timer = 5;
let scor = 0;
let hitRun = 0;

function ScourEval() {
  scor += 10;
  document.querySelector("#scorChack").textContent = scor;
}

function hit() {
  hitRun = Math.floor(Math.random() * 10);
  document.querySelector("#hitScour").textContent = hitRun;
}

function makeBabble() {
  let cullter = "";

  for (let i = 1; i <= 216; i++) {
    let rendm = Math.floor(Math.random() * 10);
    cullter += `<div class="bubble">${rendm}</div>`;
  }
  document.querySelector(".pnbg").innerHTML = cullter;
}

function runeTime() {
  let tx = setInterval(() => {
    if (timer >= 0) {
      document.querySelector("#runtime").textContent = timer;
      timer--;
    } else {
      clearInterval(tx);
      document.querySelector("#bubblePrant").innerHTML = "";
    }
  }, 1000);
}

document.querySelector("#bubblePrant").addEventListener("click", (e) => {
  let clickNum = Number(e.target.textContent);
  console.log(clickNum);
  if (clickNum === hitRun) {
    ScourEval();
    hit();
    makeBabble();
  }
});

hit();
runeTime();
makeBabble();
