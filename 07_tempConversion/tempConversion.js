const convertToCelsius = function(aTempValueFahrenheit) {
  return parseFloat(((aTempValueFahrenheit - 32) * 5/9).toFixed(1));
};

const convertToFahrenheit = function(aTempValueCelsius) {
  return parseFloat((aTempValueCelsius * 9/5 + 32).toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
