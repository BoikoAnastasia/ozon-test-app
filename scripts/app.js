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

let previousValue = 0;

const checkValueInput = (value) => {
    if(value < 0 || value > 100) {
        currentValue.value = null;
        return;
    }
    progressBarBreeding(value, leftSpinner, rightSpinner, previousValue);
}

currentValue.addEventListener("input", (e) => checkValueInput(e.target.value))
animateBtn.addEventListener("change",() => toggleClass(progress, "spin"))
hideBtn.addEventListener("change",() => toggleClass(progress, "hide"))