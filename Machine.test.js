const expect = require("chai").expect;
const Machine = require("./Machine");
//AC 1:  As a customer, I want to see that the vending machine has items, so that I can purchase them.

// Given that I approach the vending machine
// when I look at it,
// then I see items inside that I can buy
// seeSelections() returns an array of objects with item and price: [{'crisps': 'Rs 100'}, {'chocolate': 'Rs 350'}, {'mints': 'Rs 70'}]

test("selecting items", () => {
  //Arrange
  const machine = new Machine();
  //Act
  const available = machine.seeSelections();
  //Assert
  expect(available).to.deep.equal([
    { crisps: "Rs 100" },
    { chocolate: "Rs 350" },
    { mints: "Rs 70" },
  ]);
});

