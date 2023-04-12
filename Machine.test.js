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

// AC2 : As a customer, I want to know how much money I have deposited, so that I know what I can purchase.

// Given I am using the vending machine,
// when I insert money,
// then I see the total I have deposited on a screen.
// deposit(100) returns 'You have deposited Rs 100'
// The machine should accept bills in these amounts: 10, 20, 50, 100, 500

test("depositing money", () => {
  //Arrange
  const machine = new Machine();
  const result = "You have deposited Rs 100";
  //Assert
  expect(machine.deposit(100)).to.be.equal(result);
});

  //AC 3:As a customer, I want to add additional money, so that I can use the denominations I have to purchase an item.
  
  // Given I have deposited money in the vending machine,
  // when I deposit additional money,
  // then I see the new total on a screen.
  // After depositing Rs 100, deposit(50) returns 'You have deposited Rs 150'
  
  test("depositing more money", () => {
    //Arrange
    const machine = new Machine();
    const result = "You have deposited Rs 150";
    //Act
    machine.deposit(100);
    //Assert
    expect(machine.deposit(50)).to.be.equal(result);
  });