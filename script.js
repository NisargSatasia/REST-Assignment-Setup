let currentStep = 1;
const totalSteps = 6;

function showStep(step) {
  for (let i = 1; i <= totalSteps; i++) {
    document.getElementById(`step${i}`).classList.add('hidden');
  }
  document.getElementById(`step${step}`).classList.remove('hidden');
  updateButtons();
}

function nextStep() {
  if (currentStep < totalSteps) {
    currentStep++;
  } else {
    currentStep = 1;
  }
  showStep(currentStep);
}

function prevStep() {
  if (currentStep > 1) {
    currentStep--;
  } else {
    currentStep = totalSteps;
  }
  showStep(currentStep);
}

function updateButtons() {
  document.getElementById('prevBtn').disabled = false;
  document.getElementById('nextBtn').disabled = false;
}

showStep(currentStep);