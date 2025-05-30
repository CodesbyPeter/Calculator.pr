🧮 Simple Calculator — Version 2.0 with Currency Conversion

This is an enhanced version of my simple calculator built using **HTML**, **CSS**, and **JavaScript (ES6)**. Apart from handling basic math operations like addition, subtraction, multiplication, and division, it now includes a **currency converter** that simulates real-world API behavior using **async operations**.

I built this to challenge myself further by learning about **Promises**, **async/await**, and integrating more interactive functionality while keeping a clean UI.

---

🚀 What It Can Do

- Click numbers and math symbols to build a math expression
- Press `=` to see the result
- Press `C` to clear the screen
- Convert the current number to different currencies using:
  - `KES` (Kenyan Shilling)
  - `EUR` (Euro)
  - `GBP` (British Pound)
  - `INR` (Indian Rupee)
- Shows "Error" for invalid expressions (e.g., `2++`)
- Shows “Converting...” during the currency fetch simulation
- Displays converted amount with currency symbol after 2 seconds

---

📚 What I Learned

This version deepened my understanding across the stack and introduced me to asynchronous JavaScript.

✅ **HTML**
- How to structure additional feature buttons into the calculator layout
- How to semantically use button groups and assign new functionality

🎨 **CSS**
- How to preserve the layout design while extending new buttons
- How to style additional currency buttons to match the rest of the calculator

🧠 **JavaScript**
- How to use `async/await` with Promises to simulate real-time data fetching
- How to delay UI actions with `setTimeout()` for better user experience
- How to perform conditional logic based on button text
- How to update the display dynamically using `.value`
- How to prevent issues like invalid input using `try...catch`

---

🔍 How It Works

- `press(key)` adds the number or operator to the display
- `calculate()` evaluates the math expression using `eval()` and displays the result
- `clearDisplay()` resets the display
- `fetchExchangeRate(currency)` simulates fetching a conversion rate asynchronously
- When a currency button (`KES`, `EUR`, `GBP`, `INR`) is clicked:
  - The input is checked if it's a valid number
  - “Converting…” is shown
  - After 2 seconds, the converted result is displayed

---

🧪 Sample Test Inputs

| User Input | Action | Output |
|------------|--------|--------|
| 3 + 2      | `=`    | 5      |
| 8 / 2      | `=`    | 4      |
| 5 * 3      | `=`    | 15     |
| 4 ++       | `=`    | Error  |
| Click C    |        | (clears screen) |
| 100        | `KES`  | 13275.00 KES (after delay) |
| 50         | `EUR`  | 46.00 EUR (after delay) |
| 25         | `GBP`  | 19.50 GBP (after delay) |

---

💬 Personal Reflection

This project taught me the power of asynchronous programming in a very practical way. Even though it simulates an API, it gave me a real feel of handling data delays and how to make users wait comfortably. I also learned how to improve an existing project without breaking it, while keeping the structure clean and readable.

What started as a basic calculator has grown into a more intelligent tool — and so have I. This version proves how small changes using JavaScript can make a big difference in user experience and functionality. I'm proud of how far this has come.

---
