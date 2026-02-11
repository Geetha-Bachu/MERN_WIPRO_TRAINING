const { expect } = require("chai");
const salary = require("../salary");

describe("Salary Calculator", () => {

  describe("Gross Salary", () => {

    it("should calculate gross salary correctly", () => {
      const result = salary.calculateGrossSalary(30000, 10000, 5000);
      expect(result).to.equal(45000);
    });

    it("should handle zero allowance", () => {
      const result = salary.calculateGrossSalary(30000, 10000, 0);
      expect(result).to.equal(40000);
    });

  });

  describe("Tax Calculation", () => {

    it("should return zero tax for salary <= 250000", () => {
      expect(salary.calculateTax(200000)).to.equal(0);
    });

    it("should calculate 5% tax for salary <= 500000", () => {
      expect(salary.calculateTax(400000)).to.equal(20000);
    });

    it("should calculate 10% tax for salary > 500000", () => {
      expect(salary.calculateTax(600000)).to.equal(60000);
    });

  });

  describe("Net Salary", () => {

    it("should calculate net salary after tax", () => {
      const gross = 500000;
      const tax = salary.calculateTax(gross);
      const net = salary.calculateNetSalary(gross, tax);
      expect(net).to.equal(475000);
    });

  });

});