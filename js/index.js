window.onload = function () {
  slideOne();
  slideTow();
};

let sliderOne = document.getElementById("slider-1"),
  sliderTow = document.getElementById("slider-2"),
  displayVAlueOne = document.getElementById("range-1"),
  displayVAlueTow = document.getElementById("range-2"),
  slideTracker = document.querySelector(".slider-tracker"),
  sliderTrackMax = parseInt(sliderOne.max);

let minGap = 1;

function slideOne() {
  parseInt(sliderTow.value) - parseInt(sliderOne.value) <= minGap
    ? (sliderOne.value = parseInt(sliderTow.value) - minGap)
    : "";

  displayVAlueOne.textContent = sliderOne.value;
  fillColor();
}
function slideTow() {
  parseInt(sliderTow.value) - parseInt(sliderOne.value) <= minGap
    ? (sliderTow.value = parseInt(sliderOne.value) + minGap)
    : "";

  displayVAlueTow.textContent = sliderTow.value;
  fillColor();
}

function fillColor() {
  let percent1 = (parseInt(sliderOne.value) / sliderTrackMax) * 100;
  let percent2 = (parseInt(sliderTow.value) / sliderTrackMax) * 100;
  slideTracker.style.background = `
  linear-gradient(to right, #dadae5 ${percent1}%, #22509B ${percent1}%, #22509B ${percent2}%, #dadae5 ${percent2}%)
  `;
  console.log(slideTracker.style.background);
}
