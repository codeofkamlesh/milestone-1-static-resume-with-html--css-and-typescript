// Select elements
const objectiveSection = document.getElementById("objective-section") as HTMLElement;
const certificationSection = document.getElementById("certification-section") as HTMLElement;

const toggleObjectiveButton = document.getElementById("Show/Hide1") as HTMLButtonElement;
const toggleCertificationButton = document.getElementById("Show/Hide2") as HTMLButtonElement;

// Toggle function
const toggleVisibility = (element: HTMLElement) => {
  if (element.style.display === "none") {
    element.style.display = "block";
  } else {
    element.style.display = "none";
  }
};

// Add event listeners for buttons
toggleObjectiveButton.addEventListener("click", () => toggleVisibility(objectiveSection));
toggleCertificationButton.addEventListener("click", () => toggleVisibility(certificationSection));
