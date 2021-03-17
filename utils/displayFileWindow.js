const exportWindowOpenBtn = document.querySelector("#exportWindowBtn");
const exportWindow = document.querySelector("#exportWindow");

const importWindowOpenBtn = document.querySelector("#importWindowBtn");
const importWindow = document.querySelector("#importWindow");

exportWindowOpenBtn.addEventListener("click", () => {
  exportWindow.classList.toggle("is-hidden");
});

importWindowOpenBtn.addEventListener("click", () => {
  importWindow.classList.toggle("is-hidden");
});
