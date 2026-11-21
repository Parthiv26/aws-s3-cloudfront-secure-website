
// Display a welcome message in the browser console
console.log("Welcome to my AWS CloudFront Secure Website!");

// Run JavaScript after the HTML document has loaded
document.addEventListener("DOMContentLoaded", function () {

    console.log("Website loaded successfully.");

    // Find the button and message elements
    const testButton = document.getElementById("testButton");
    const message = document.getElementById("message");

    // Check whether the elements exist
    if (testButton && message) {

        // Add click functionality
        testButton.addEventListener("click", function () {

            message.textContent = "Success! JavaScript is working correctly.";

            console.log("JavaScript button clicked successfully.");

        });

    } else {
        console.error("Required HTML elements were not found.");
    }

});
