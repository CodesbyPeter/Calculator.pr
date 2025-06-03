// Getting the display
let display = document.getElementById('display');

// Expression string for calculation (only numbers and operators)
let expression = '';

// Store the selected currency
let selectedCurrency = null;

// Mapping operator symbols to JS operators
const operatorMap = {
  '÷': '/',
  '×': '*',
  '−': '-',
  '+': '+',
};

// Update display with current expression
function updateDisplay() {
  display.innerText = expression || '0';
}

// Function to append keys properly with mapping
function press(key) {
  // Clear expression if last display was an error or conversion result (not expression)
  if (
    display.innerText === 'Converting...' ||
    display.innerText === 'Error' ||
    display.innerText.startsWith('Selected currency:')
  ) {
    expression = '';
    selectedCurrency = null; // reset currency on user input
  }
  
  // Map operators or append numbers/dot
  if (key in operatorMap) {
    // Prevent double operators
    if (expression.length === 0) return; // no operator at start
    const lastChar = expression.slice(-1);
    if (['/', '*', '-', '+'].includes(lastChar)) {
      // Replace last operator with new one
      expression = expression.slice(0, -1) + operatorMap[key];
    } else {
      expression += operatorMap[key];
    }
  } else {
    // Append numbers or dot
    expression += key;
  }
  updateDisplay();
}

// Calculate function with conversion
async function calculate() {
  try {
    // eval expression safely assuming sanitized input
    let result = eval(expression);
    if (typeof result !== 'number' || !isFinite(result)) throw new Error('Invalid calculation');

    if (selectedCurrency) {
      display.innerText = 'Converting...';
      const rate = await fetchExchangeRate(selectedCurrency);
      const converted = (result * rate).toFixed(2);
      display.innerText = `${converted} ${selectedCurrency}`;
      // Reset after conversion
      expression = '';
      selectedCurrency = null;
    } else {
      // Show result and reset expression to it
      display.innerText = result;
      expression = String(result);
      selectedCurrency = null;
    }
  } catch {
    display.innerText = 'Error';
    expression = '';
    selectedCurrency = null;
  }
}

// Clear display and reset expression and currency
function clearDisplay() {
  expression = '';
  selectedCurrency = null;
  updateDisplay();
}

// Simulate async exchange fetch
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

// Attach event delegation to calculator
const buttonsContainer = document.querySelector('.calculator_full');
buttonsContainer.addEventListener('click', async (event) => {
  const button = event.target.closest('button');
  if (!button || !buttonsContainer.contains(button)) return;

  const value = button.textContent;

  if (button.classList.contains('letters')) {
    selectedCurrency = value;
    // Show temporary message, then revert to expression display
    const prevDisplay = display.innerText;
    display.innerText = `Selected currency: ${value}`;
    setTimeout(() => {
      updateDisplay();
    }, 1500);
  } else if (button.classList.contains('clear')) {
    clearDisplay();
  } else if (value === '=') {
    await calculate();
  } else {
    press(value);
  }
});

// Initialize display on load
updateDisplay();




  