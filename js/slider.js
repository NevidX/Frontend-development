const slides = document.getElementsByClassName("slider__slide");
const slider = document.getElementById("slider");
const left_btn = document.getElementById("left");
const right_btn = document.getElementById("right");
const firstSlide = 1;
const lastSlide = slides.length;
let sliderPos = 0;
let activeSliderIndex = 1;
slider.style.transform = "translateX(0%)";
left_btn.addEventListener("click", () => {
	if (activeSliderIndex == firstSlide) {
		activeSliderIndex = lastSlide;
		sliderPos = -100 * (lastSlide - 1);
		moveSlide(sliderPos);
	} else {
		activeSliderIndex -= 1;
		sliderPos += 100;
		moveSlide(sliderPos);
	}
});

right_btn.addEventListener("click", () => {
	if (activeSliderIndex == lastSlide) {
		activeSliderIndex = firstSlide;
		sliderPos = 0;
		moveSlide(sliderPos);
	} else {
		activeSliderIndex += 1;
		sliderPos -= 100;
		moveSlide(sliderPos);
	}
});

function moveSlide(X) {
	slider.style.transform = "translateX(" + X + "%)";
}
