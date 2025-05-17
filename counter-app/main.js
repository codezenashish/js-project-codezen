const minusBtn = document.getElementById("minusBtn");
const plusBtn = document.getElementById("plusBtn");
const counter = document.querySelector(".counter");
const incrementByInput = document.getElementById("incrementByInput");
const resetBtn = document.getElementById("resetBtn");

plusBtn.addEventListener("click", function () {
  const counterValue = parseInt(counter.innerText);
  const chnag = parseInt(incrementByInput.value, 10);
  counter.innerText = counterValue + chnag;
});

minusBtn.addEventListener("click", function () {
  const counterValue = parseInt(counter.innerText);
  const chnag = parseInt(incrementByInput.value, 10);
  counter.innerText = counterValue - chnag;
});

resetBtn.addEventListener("click", function () {
  counter.innerText = 0;
  incrementByInput.value = "";
});
