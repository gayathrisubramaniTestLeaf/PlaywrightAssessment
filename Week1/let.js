// Global variable
const browserVersion = "Chrome";

// Function declaration
function getBrowserVersion() {

    if (browserVersion === "Chrome") {

        // Local variable using let
        let browserVersion = "Edge";
    }

    // Printing outside the if block
    console.log("Browser Version:", browserVersion);
}

// Function call
getBrowserVersion();