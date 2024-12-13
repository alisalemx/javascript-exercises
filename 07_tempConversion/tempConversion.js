const convertToCelsius = function (fahrenheitTemp) {
  const celsiusTemp = (fahrenheitTemp - 32) * 5 / 9;

  // Round to one decimal place
  return Math.round(celsiusTemp * 10) / 10;
};

const convertToFahrenheit = function (celsiusTemp) {
  const fahrenheitTemp = (celsiusTemp * 9 / 5) + 32;

  // Round to one decimal place
  return Math.round(fahrenheitTemp * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
