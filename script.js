const multiStepForm = document.querySelector(".multi-step-form");
const steps = document.querySelectorAll(".step");
const nextStep = document.querySelectorAll(".btn__next");
const previousStep = document.querySelectorAll(".btn__back");

let currentStep = 0;

nextStep.forEach((step) => step.addEventListener("click", handleNextClick));

previousStep.forEach((step) => step.addEventListener("click", handleBackClick));

function handleNextClick() {
  steps[currentStep].classList.remove("active");
  currentStep++;
  steps[currentStep].classList.add("active");
}

function handleBackClick() {
  steps[currentStep].classList.remove("active");
  currentStep--;
  steps[currentStep].classList.add("active");
}
