// salary.js
function calculateGrossSalary(basic, hra, allowance) {
  return basic + hra + allowance;
}

function calculateNetSalary(gross, tax) {
  return gross - tax;
}

function calculateTax(salary) {
  if (salary <= 250000) return 0;
  if (salary <= 500000) return salary * 0.05;
  return salary * 0.1;
}

module.exports = {
  calculateGrossSalary,
  calculateNetSalary,
  calculateTax
};