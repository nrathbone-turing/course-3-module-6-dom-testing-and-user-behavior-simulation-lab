// Step 1: Simulate User Behavior
// - Add event listeners for button clicks and form submissions.
// - Use JavaScript to dynamically update the DOM based on user actions.
const button = document.getElementById("simulate-click");
const form = document.getElementById("user-form");
const dynamicContent = document.getElementById("dynamic-content");

function simulateClick() {
    dynamicContent.textContent = "Button was clicked!"
}

function handleFormSubmit(event) {
    event.preventDefault(); // Prevent the page from refreshing
    
    const input = document.getElementById("user-input").value

    // dynamicContent.textContent = "Form submitted!"
    addElementToDOM("dynamic-content", input);
}



document.addEventListener("DOMContentLoaded", () => {

    if (button) {
        button.addEventListener("click", simulateClick);
    }

    if (form) {
        form.addEventListener("submit", handleFormSubmit);
    }
});


// Step 2: DOM Manipulation Functions
// - Implement functions to add, update, and remove DOM elements.
// - Ensure all elements are dynamically created with appropriate attributes and content.

function addElementToDOM(elementId, content) {
    const element = document.getElementById(elementId);

    if (element) {
        element.textContent = content;
    }
}

function removeElementFromDOM(elementID) {
    const element = document.getElementById(elementID);

    if (element) {
        element.remove();
    }
}

// Step 3: Error Handling
// - Display error messages in the DOM for invalid inputs or missing elements.
// - Create reusable functions to handle common error cases.

// Step 4: Reusable Utilities
// - Create modular utility functions, such as createElement(tag, attributes).
// - Ensure all functions follow DRY principles for maintainability.


module.exports = {
    addElementToDOM,
    removeElementFromDOM,
    simulateClick,
    handleFormSubmit
}