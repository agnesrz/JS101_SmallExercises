function sumOfSums(numArray) {
  let sumsArray = [];

  for (let endIndex = numArray.length; endIndex > 0; endIndex -= 1) {
    sumsArray.push(numArray.slice(0, endIndex).reduce((a, b) => a + b));
  }

  console.log(sumsArray.reduce((a, b) => a + b));
}

sumOfSums([3, 5, 2]);        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
sumOfSums([1, 5, 7, 3]);     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
sumOfSums([4]);              // 4
sumOfSums([1, 2, 3, 4, 5]);  // 35