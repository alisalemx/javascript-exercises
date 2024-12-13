const palindromes = function (text) {
  let trimmedText = text
    .toLowerCase()
    .replace(/[^a-z0-9]/g, '');
  let reversedText = trimmedText
    .split('')
    .reverse()
    .join('');

  return trimmedText === reversedText;
};

// Do not edit below this line
module.exports = palindromes;
