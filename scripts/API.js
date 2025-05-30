
export const progressBarBreeding = (inputVal, leftSpinner, rightSpinner, previousValue) => {
    const value = Math.max(0, Math.min(100, inputVal));

    const angleRight = Math.min(value, 50) * 3.6 - 45;
    const angleLeft = value > 50 ? (value - 50) * 3.6 - 45 : -45;

    if (value > previousValue) {
        if (value <= 50) {
            rightSpinner.style.transform = `rotate(${angleRight}deg)`;
            leftSpinner.style.transform = "rotate(-45deg)";
        } else {
            rightSpinner.style.transform = "rotate(135deg)";
            setTimeout(() => {
                leftSpinner.style.transform = `rotate(${angleLeft}deg)`;
            }, 300);
        }
    } else {
        if (value >= 50) {
            leftSpinner.style.transform = `rotate(${angleLeft}deg)`;
            setTimeout(() => {
                rightSpinner.style.transform = "rotate(135deg)";
            }, 300);
        } else {
            leftSpinner.style.transform = "rotate(-45deg)";
            setTimeout(() => {
                rightSpinner.style.transform = `rotate(${angleRight}deg)`;
            }, 300);
        }
    }
    previousValue = value;
};

export const toggleClass = (progress, className) => {
    progress.classList.toggle(className);
}