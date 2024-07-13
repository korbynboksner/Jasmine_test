window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

function setupIntialValues() {
  const defaultValues = {
    amount: 10000,
    years: 10,
    rate: 5.0,
  };

  document.getElementById("loan-amount").value = defaultValues.amount;
  document.getElementById("loan-years").value = defaultValues.years;
  document.getElementById("loan-rate").value = defaultValues.rate;

  update();
}

function update() {
  const currentValues = getCurrentUIValues();
  const monthlyPayment = calculateMonthlyPayment(currentValues);
  updateMonthly(monthlyPayment);
}

function calculateMonthlyPayment(values) {
  const principal = values.amount;
  const monthlyRate = values.rate / 100 / 12;
  const numberOfPayments = values.years * 12;

  const monthlyPayment = (principal * monthlyRate) / (1 - Math.pow((1 + monthlyRate), -numberOfPayments));
  return monthlyPayment.toFixed(2);
}

function updateMonthly(monthly) {
  document.getElementById("monthly-payment").textContent = `Monthly Payment: $${monthly}`;
}
