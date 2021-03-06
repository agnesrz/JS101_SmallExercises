/*
input: string
output: number
rules:
  -do not use parseInt() or Number() or any other standard conversion method
  -assume all characters in input string are numeric
  -validate input?
  -don't worry about leading +/- signs or invalid characters
model: Take an input string and convert it to an integer.
example:
  -console.log(stringToInteger("4321") === 4321); // logs true
  -console.log(stringToInteger("570") === 570); // logs true
algorithm:
  -convert string to array
    -use split() method
  -loop through each item in array
    -use map method
    -set result of map method to new array
    -check whether item matches number 0-9, enclosed in ''
      -use switch statement
      -if match, add associated numeral to new array
    -coerce all items in new array together
      -use reduce(method)
  -return new array


// my solution
function stringToNumber(string) {
  let numberArray = string.split('').map(item => {
    switch (item) {
      case '0':
        return 0;
      case '1':
        return 1;
      case '2':
        return 2;
      case '3':
        return 3;
      case '4':
        return 4;
      case '5':
        return 5;
      case '6':
        return 6;
      case '7':
        return 7;
      case '8':
        return 8;
      case '9':
        return 9;
    }
  });

  let result = 0;

  let counter = numberArray.length;

  let multiplier = 1;

  console.log(numberArray[counter]);

  do {
    result += (numberArray[counter - 1] * multiplier);
    counter -= 1;
    multiplier *= 10;
  } while (counter > 0);

 return result;

}

console.log(stringToNumber("4321") === 4321); // logs true
console.log(stringToNumber("570") === 570); // logs true
*/

// further exploration exercise
const NUMCHART = {
  0: 0,
  1: 1,
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9,
  A: 10,
  B: 11,
  C: 12,
  D: 13,
  E: 14,
  F: 15,
  G: 16
};

function hexadecimalToInteger(string) {
  let array = string.toUpperCase().split("").map(char => NUMCHART[char]);

  let total = 0;
  let counter = array.length - 1;

  for (let ind = 0; ind < array.length; ind += 1) {
    total += array[ind] * Math.pow(16, counter);
    counter -= 1;
  }

  return total;
}

console.log(hexadecimalToInteger('4D9f') === 19871);
console.log(hexadecimalToInteger('4D9f') === 19871);