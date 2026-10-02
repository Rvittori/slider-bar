
const minInputValue = document.querySelector(".min-input");
const maxInputValue = document.querySelector(".max-input");
const minRangeValue = document.querySelector(".min-range");
const maxRangeValue = document.querySelector(".max-range");
const gap = 1000;

minInputValue.addEventListener("input", function() {
    let minValue = parseInt(minInputValue.value);
    let maxValue = parseInt(maxRangeValue.value);

    if (minValue + gap > maxValue) {
        minValue = maxValue - gap;
    }
    
    minRangeValue.value = minValue;
    minInputValue.value = minValue;
    });

maxInputValue.addEventListener("input", function() {
    let minValue = parseInt(minInputValue.value);
    let maxValue = parseInt(maxInputValue.value);

    if (maxValue < minValue + gap) {
        maxValue = minValue + gap;
    }
    maxRangeValue.value = maxValue;
    maxInputValue.value = maxValue;
    });

minRangeValue.addEventListener("input", function() {
    let minValue = parseInt(minRangeValue.value);
    let maxValue = parseInt(maxRangeValue.value);

    if (minValue + gap > maxValue) {
        minValue = maxValue - gap;
    }
    
    minRangeValue.value = minValue;
    minInputValue.value = minValue;
});

maxRangeValue.addEventListener("input", function() {
    let minValue = parseInt(minRangeValue.value);
    let maxValue = parseInt(maxRangeValue.value);

    if (maxValue < minValue + gap) {
        maxValue = minValue + gap;
    }

    maxRangeValue.value = maxValue;
    maxInputValue.value = maxValue;
});