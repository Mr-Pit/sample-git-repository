//------Tip Calculator------

const billTotalInCents = 67500;
const partySize = 4;
const tipPercentage = 20;
// Do not edit above this line

var tipTotal = billTotalInCents * tipPercentage;
let tipPerPerson = tipTotal / partySize;
console.log(tipPerPerson);

//------Find LArgest Number------

function maxNumber() {

  return Math.max(...arguments);

}

// Do not edit below this line
function testMaxNumber() {
  console.log(maxNumber(10, 0, 20, 3, 19) === 20);
  console.log(maxNumber(-21, -4, -109, -1) === -1);
  console.log(maxNumber(27) === 27);
}

testMaxNumber();

