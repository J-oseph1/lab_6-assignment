/****************** YOUR NAME: Youssef Khedr

The instructions describe the missing logic that is needed; you will translate these into JavaScript in the places indicated.

You are encouraged to use the provided naming convention for ease of review.
*/

/****************** create variables ******************/
/* create variables to hold the values for modelName and duration */

let modelName = "XYZ";
let duration = 0;

/****************** helper function ******************/
/* create a function called recalculate() which will
    - create a variable to represent the calculated-cost span element. That will look something like:
        // let costLabel = document.getElementById("calculated-cost");
    - check the value of the modelName variable, and use that to calculate the new total cost:
        e.g. if modelName is currently "XYZ", duration * 100 gives us the new total cost.
        if modelName is currently "CPRG", duration * 213 gives us the new total cost.
    - set the value of the calculated-cost element's innerHTML to this new value
*/

function recalculate() {
    let costLabel = document.getElementById("calculated-cost");
    if (costLabel) {
        let cost = 0;

        if (modelName === "XYZ") {
            cost = duration * 100;
        } else if (modelName === "CPRG") {
            cost = duration * 213;
        }

        costLabel.innerHTML = cost.toFixed(2);
    } else {
        console.error("Error: 'calculated-cost' element not found in DOM.");
    }
}

/****************** model button logic ******************/

/* 
- first, create a variable to represent the "Switch Model" pseudo-button (hint: can use getElementById)
- second, create a function called changeModel() which checks the value of the model name variable. This function will:
    - create a variable to represent the model-text span element
    - if modelName is currently "XYZ", change the value of modelName to "CPRG", and change the innerHTML of the model-text span element to "Model CPRG"
    - if modelName is currently "CPRG", change the value of modelName to "XYZ", and change the innerHTML of the model-text span element to "Model XYZ"
    - then, recalculate() the total cost.
- finally, uncomment the following line of JavaScript to have this function run automatically whenever the pseudo-button is clicked: */

// Move the changeModel function outside of the inner block
function changeModel() {
    let modelText = document.getElementById("model-text");

    if (modelName === "XYZ") {
        modelName = "CPRG";
        modelText.innerHTML = "Model CPRG";
    } else {
        modelName = "XYZ";
        modelText.innerHTML = "Model XYZ";
    }

    recalculate();
}

function initializeModelButton() {
    let modelButton = document.getElementById("model-button");

    if (modelButton) {
        modelButton.addEventListener("click", changeModel);
    } else {
        console.error("Error: 'model-button' element not found in DOM.");
    }
}

/****************** duration button logic ******************/
/*  - first, create a variable to represent the "Change Duration" pseudo-button.
    - then, create a function called changeDuration() that will
        - create a variable to represent the duration-text span element
        - prompt() the user for a new duration
        - save the result of the prompt() to the duration variable
        - change the innerHTML of the duration-text span element to this new value
        - recalculate() the total cost/
    - finally, attach this function to the "Change Duration" pseudo-button, so it runs whenever the button is clicked.
*/

// Move the changeDuration function outside of the inner block
function changeDuration() {
    let durationText = document.getElementById("duration-text");
    let newDuration = prompt("Enter the new duration in days:");

    if (!isNaN(newDuration) && newDuration > 0) {
        duration = parseInt(newDuration);
        durationText.innerHTML = duration;
        recalculate();
    } else {
        alert("Please enter a valid positive number for the duration.");
    }
}

function initializeDurationButton() {
    let durationButton = document.getElementById("duration-button");

    if (durationButton) {
        durationButton.addEventListener("click", changeDuration);
    } else {
        console.error("Error: 'duration-button' element not found in DOM.");
    }
}

// Initialize both buttons after the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
    initializeModelButton();
    initializeDurationButton();
});
