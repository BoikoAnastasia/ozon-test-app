// import
import { progressBarBreeding, toggleClass } from './API.js';
// progress bar
const progress = document.querySelector('.progress__bar');
const leftSpinner = document.querySelector(".left .spinner");
const rightSpinner = document.querySelector(".right .spinner");
//buttons
const currentValue = document.querySelector("#current-value");
const animateBtn = document.querySelector("#animate__btn");
const hideBtn = document.querySelector("#hide__btn");

const checkValueInput = (value) => {
    if(value < 0 || value > 100 || value.length > 3) {
        currentValue.value = null;
        progressBarBreeding(0, leftSpinner, rightSpinner);
        return;
    }
    progressBarBreeding(value, leftSpinner, rightSpinner);
}

currentValue.addEventListener("input", (e) => checkValueInput(e.target.value))
animateBtn.addEventListener("change",() => toggleClass(progress, "spin"))
hideBtn.addEventListener("change",() => toggleClass(progress, "hide"))