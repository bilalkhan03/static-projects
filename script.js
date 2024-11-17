const display = document.getElementById("display");

// Append value to the display
function append(value) {
  const lastChar = display.value.slice(-1); // Get the last character in the display

  // If the last character is an operator and a new operator is clicked, replace it
  if (['+', '-', '*', '/'].includes(lastChar) && ['+', '-', '*', '/'].includes(value)) {
    display.value = display.value.slice(0, -1) + value;
  } else {
    display.value += value; // Otherwise, append the value
  }
}

// Clear the display
function clearDisplay() {
  display.value = "0";
}

// Delete the last character
function deleteLast() {
  display.value = display.value.slice(0, -1) || "0";
}

// Perform the calculation
function calculate() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }
}

// Calculate the square
function square() {
  try {
    display.value = Math.pow(parseFloat(display.value), 2);
  } catch (error) {
    display.value = "Error";
  }
}

// Calculate the square root
function squareRoot() {
  try {
    display.value = Math.sqrt(parseFloat(display.value));
  } catch (error) {
    display.value = "Error";
  }
 
}

