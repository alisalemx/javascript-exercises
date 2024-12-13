const leapYears = function (year) {
  if (year % 4 === 0) {
    if (year % 100 === 0) {
      // False if divisible by 100
      // True if divisible by 100 and 400
      return year % 400 === 0;
    }
    // True if divisible by 4
    return true;
  }
  return false;
};

// Do not edit below this line
module.exports = leapYears;
