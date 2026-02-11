const { expect } = require("chai");
const calculator = require("../calculator");

describe("Calculator", () => {

  it("add two numbers", () => {
    expect(calculator.add(2,3)).to.equal(5);
  });

  it("subtract two numbers", () => {
    expect(calculator.subtract(5,3)).to.equal(2);
  });

  it("multiply two numbers", () => {
    expect(calculator.multiply(2,3)).to.equal(6);
  });

});
