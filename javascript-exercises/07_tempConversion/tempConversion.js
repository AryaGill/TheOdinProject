const convertToCelsius = function(fahrenheit) {
  let exactC = (fahrenheit - 32) * 5/9;
  let roundC = Math.round(exactC*10)/10;
  return roundC;
};

const convertToFahrenheit = function(celsius) {
  let exactF = (celsius * 9/5) + 32
  let roundF = Math.round(exactF*10)/10;
  return roundF;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
