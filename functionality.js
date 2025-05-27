// Getting the display
let display = document.getElementById('display');

// Making the press function active
function press(key) {
    display.innerText += key;
}

// console.log(key);

// Making the calculate function active
function calculate() {
    try {
    // Use of eval to calculate the expressions
    let result = eval(display.innerText);
    display.innerText = result;
 }
    catch (error) {
        display.innerText = 'Error';
    }
}

// Making the clearDisplay function active
function clearDisplay() {
    display.innerText = '';
}