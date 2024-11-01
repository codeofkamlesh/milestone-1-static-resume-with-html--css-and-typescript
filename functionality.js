// Select elements
var objectiveSection = document.getElementById("objective-section");
var certificationSection = document.getElementById("certification-section");
var toggleObjectiveButton = document.getElementById("Show/Hide1");
var toggleCertificationButton = document.getElementById("Show/Hide2");
// Toggle function
var toggleVisibility = function (element) {
    if (element.style.display === "none") {
        element.style.display = "block";
    }
    else {
        element.style.display = "none";
    }
};
// Add event listeners for buttons
toggleObjectiveButton.addEventListener("click", function () { return toggleVisibility(objectiveSection); });
toggleCertificationButton.addEventListener("click", function () { return toggleVisibility(certificationSection); });
