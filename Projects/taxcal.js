function calculateTax() {
  const salary = parseFloat(document.getElementById('salary').value);
  const dearnessAllowance = parseFloat(document.getElementById('dearnessAllowance').value);
  const houseRentAllowance = parseFloat(document.getElementById('houseRentAllowance').value);
  const travelAllowance = parseFloat(document.getElementById('travelAllowance').value);

  const taxableIncome = salary + (dearnessAllowance * 0.8) + (houseRentAllowance * 0.3) + (travelAllowance * 0.1);

  let tax = 0;

  if (taxableIncome <= 250000) {
    tax = 0;
  } else if (taxableIncome <= 500000) {
    tax = (taxableIncome - 250000) * 0.05;
  } else if (taxableIncome <= 1000000) {
    tax = 250000 * 0.05 + (taxableIncome - 500000) * 0.2;
  } else {
    tax = 250000 * 0.05 + 500000 * 0.2 + (taxableIncome - 1000000) * 0.3;
  }

  const cess = tax * 0.04;


  const totalTax = tax + cess;


  document.getElementById('totalTaxDisplay').textContent = `₹${totalTax.toFixed(2)}`;
}