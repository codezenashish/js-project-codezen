const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");
const hexCodeDisplay = document.getElementById("hexCode");
const speedSelect = document.getElementById("speed");

let intervalId;
let currentSpeed = parseInt(speedSelect.value);

const getRandomHex = () => {
  const hex = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};

const changeColor = () => {
  const color = getRandomHex();
  document.body.style.backgroundColor = color;
  hexCodeDisplay.textContent = color;
};

const startChangingColor = () => {
  if (!intervalId) {
    intervalId = setInterval(changeColor, currentSpeed);
  }
};

const stopChangingColor = () => {
  clearInterval(intervalId);
  intervalId = null;
};

speedSelect.addEventListener("change", () => {
  currentSpeed = parseInt(speedSelect.value);
  if (intervalId) {
    stopChangingColor();
    startChangingColor(); // restart with new speed
  }
});

startBtn.addEventListener("click", startChangingColor);
stopBtn.addEventListener("click", stopChangingColor);
