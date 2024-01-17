let CurrentValue = 0

const countElement = document.getElementById('counter');
const addElement = document.getElementById('increase');
const subElement = document.getElementById('decrease');

function updateDisplay() {
    countElement.textContent = CurrentValue;
}

function increaseValue() {
    CurrentValue++;
    updateDisplay();
}

function decreaseValue() {
    if(CurrentValue > 0) {
        CurrentValue--;
        updateDisplay();
    }
}

increase.addEventListener('click', increaseValue);
decrease.addEventListener('click', decreaseValue);

updateDisplay();