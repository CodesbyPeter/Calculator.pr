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

// Buttons functionality
const buttons = document.querySelectorAll('.buttons button');

// Standard button functionality
buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.textContent;

    if (value === '=') {
      try {
        display.value = eval(display.value);
      } catch {
        display.value = 'Error';
      }
    } else if (value === 'C') {
      display.value = '';
    } else if (!value.startsWith('to')) {
      display.value += value;
    }
  });
});

// Currency conversion logic
function setupCurrencyButton(buttonId, currencyCode, symbol) {
  const btn = document.getElementById(buttonId);
  btn.addEventListener('click', async () => {
    const amount = parseFloat(display.value);

    if (isNaN(amount) || amount <= 0) {
      display.value = 'Invalid $ amount';
      return;
    }

    display.value = 'Fetching...';

    try {
      const rate = await fetchExchangeRate(currencyCode);
      const result = amount * rate;
      display.value = `${symbol} ${result.toFixed(2)}`;
    } catch {
      display.value = 'Error';
    }
  });
}

// Setup 4 currency buttons
setupCurrencyButton('toKES', 'KES', 'KES');
setupCurrencyButton('toEUR', 'EUR', '€');
setupCurrencyButton('toGBP', 'GBP', '£');
setupCurrencyButton('toINR', 'INR', '₹');


// Javascript onclick functionality
async function handleCurrencyConversion(currency) {
    const currentValue = parseFloat(display.value);
  
    if (isNaN(currentValue)) {
      display.value = 'Enter number';
      return;
    }
  
    display.value = 'Converting...'; // show loading message
  
    const rate = await fetchExchangeRate(currency);
    const converted = (currentValue * rate).toFixed(2);
  
    display.value = `${converted} ${currency}`;
  }
  