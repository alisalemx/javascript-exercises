const sumAll = function (first, last) {
  // Detect invalid inputs early on
  if (
    !Number.isInteger(first) ||
    !Number.isInteger(last) ||
    first < 0 ||
    last < 0
  ) {
    return "ERROR";
  }

  // Swap first and last if first is bigger
  if (first > last) {
    const temp = first;
    first = last;
    last = temp;
  }

  const iterations = last - first;
  let sum = first;

  for (let i = 1; i <= iterations; i++) {
    sum += (first + i);
  }

  return sum;
};

// Do not edit below this line
module.exports = sumAll;
