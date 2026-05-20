function launchBrowser(browserName) {

    if (browserName.toLowerCase() === "chrome") {
        console.log("Launching Chrome Browser");
    } else {
        console.log("Launching Other Browser");
    }
}

function runTests(testType) {

    switch (testType) {

        case "smoke":
            console.log("Running Smoke Tests");
            break;

        case "sanity":
            console.log("Running Sanity Tests");
            break;

        case "regression":
            console.log("Running Regression Tests");
            break;

        default:
            console.log("Running Default Smoke Tests");
    }
}

launchBrowser("chrome");
runTests("sanity");