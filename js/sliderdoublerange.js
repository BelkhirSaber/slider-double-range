let sliderOne = document.getElementById("slider-1"),
  sliderTow = document.getElementById("slider-2"),
  valueMin = document.getElementById("value-min"),
  valueMax = document.getElementById("value-max"),
  sliderTrack = document.querySelector(".slider-track"),
  sliderMaxValue = parseInt(sliderOne.max),
  minGap = 5;

function slidOne() {
  parseInt(sliderTow.value) - parseInt(sliderOne.value) <= minGap
    ? (sliderOne.value = parseInt(sliderTow.value) - minGap)
    : "";
  valueMin.value = sliderOne.value;
  fillColor();
}

function slidTow() {
  parseInt(sliderTow.value) - parseInt(sliderOne.value) <= minGap
    ? (sliderTow.value = parseInt(sliderOne.value) + minGap)
    : "";
  valueMax.value = sliderTow.value;
  fillColor();
}

function fillColor() {
  let percent1 = (parseInt(sliderOne.value) / sliderMaxValue) * 100;
  let percent2 = (parseInt(sliderTow.value) / sliderMaxValue) * 100;
  sliderTrack.style.background = `
    linear-gradient(to right, #dadae5 ${percent1}%, purple ${percent1}%, purple ${percent2}%, #dadae5 ${percent2}%)
    `;
  // console.log(sliderTrack.style.background);
}

window.onload = function () {
  slidOne();
  slidTow();
};
