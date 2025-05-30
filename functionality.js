// Getting the display
let display = document.getElementById('display');

// Store the selected currency for conversion when user presses a currency button
let selectedCurrency = null;

// Making the press function active
function press(key) {
    display.innerText += key;
}

// Making the calculate function active
async function calculate() {
    try {
        // If a currency conversion is selected, convert after evaluating the expression
        let expressionResult = eval(display.innerText);
        if (selectedCurrency) {
            display.innerText = 'Converting...';
            const rate = await fetchExchangeRate(selectedCurrency);
            const converted = (expressionResult * rate).toFixed(2);
            display.innerText = `${converted} ${selectedCurrency}`;
            selectedCurrency = null; // Reset currency after conversion
        } else {
            display.innerText = expressionResult;
        }
    } catch (error) {
        display.innerText = 'Error';
        selectedCurrency = null; // Reset in case of error
    }
}

// Making the clearDisplay function active
function clearDisplay() {
    display.innerText = '';
    selectedCurrency = null; // Reset currency too
}

// Simulating Async Exchange Rate Fetch
async function fetchExchangeRate(currency) {
    return new Promise(resolve => {
        setTimeout(() => {
            const rates = {
                KES: 132.75,
                EUR: 0.92,
                GBP: 0.78,
                INR: 83.24,
            };
            resolve(rates[currency]);
        }, 2000);
    });
}

// Standard button functionality for calculator buttons (digits, operators, =, C)
const buttons = document.querySelectorAll('.buttons');

buttons.forEach(button => {
    button.addEventListener('click', async () => {
        const value = button.textContent;

        if (value === '=') {
            await calculate();
        } else if (value === 'C') {
            clearDisplay();
        } else {
            press(value);
        }
    });
});

// Currency buttons set selectedCurrency but do NOT trigger conversion yet
const currencyButtons = document.querySelectorAll('.letters');

currencyButtons.forEach(button => {
    button.addEventListener('click', () => {
        selectedCurrency = button.textContent; // Set selected currency for conversion
    });
});



  