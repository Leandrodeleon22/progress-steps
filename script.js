const progress = document.getElementById("progress");
const next = document.getElementById("next");
const prev = document.getElementById("prev");
const circles = document.querySelectorAll(".circle");

let currentActive = 1;

next.addEventListener("click", function () {
  currentActive++;
  if (currentActive >= circles.length) {
    currentActive = circles.length;
  }

  if (currentActive > 1 || circles.length - 1) {
    prev.classList.remove("btn-disable");
  }
  if (currentActive === circles.length) {
    next.classList.add("btn-disable");
  }
  update();
});

prev.addEventListener("click", function () {
  currentActive--;
  if (currentActive < 1) {
    currentActive = 1;
  }

  if (currentActive > 1 || circles.length - 1) {
    prev.classList.remove("btn-disable");
    next.classList.remove("btn-disable");
  }
  if (currentActive === 1) {
    next.classList.remove("btn-disable");
    prev.classList.add("btn-disable");
  }
  update();
});

const update = function () {
  circles.forEach(function (circle, index) {
    circle.classList.remove("circle-active");
  });
  circles[currentActive - 1].classList.add("circle-active");
  progress.style.width = (currentActive - 1) * 33 + "%";
};
