// Get the result input element
const resultInput = document.getElementById("result");

// Append value to input field
function appendValue(value) {
    resultInput.value += value;
}

// Clear the entire input field
function clearResult() {
    resultInput.value = "";
}

// Delete the last character
function deleteLast() {
    resultInput.value = resultInput.value.slice(0, -1);
}

// Evaluate the result
function calculateResult() {
    try {
        // Check for empty input
        if (resultInput.value === "") {
            alert("Please enter a valid expression!");
            return;
        }

        // Replace exponent symbol (^) with JavaScript's power function (**)
        let expression = resultInput.value.replace(/\^/g, "**");

        // Validate input and evaluate safely
        if (/^[0-9+\-*/().^Mathsqrtlog ]+$/.test(expression)) {
            let result = eval(expression);
            if (result === Infinity || isNaN(result)) {
                alert("Math error! Please check your input.");
                clearResult();
            } else {
                resultInput.value = result;
            }
        } else {
            alert("Invalid input!");
        }
    } catch (error) {
        alert("Error in calculation!");
        clearResult();
    }
}

