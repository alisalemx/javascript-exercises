const reverseString = function (string) {
  let chars = string.split("");
  let reversedChars = chars.reverse();

  return reversedChars.join("");
};

// Do not edit below this line
module.exports = reverseString;
