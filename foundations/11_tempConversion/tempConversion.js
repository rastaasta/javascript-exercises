const convertToCelsius = function(temp) {
  convertCels = ((temp - 32) * (5/9));
  cels = Math.round(convertCels * 10) / 10;
  return cels; 
};

const convertToFahrenheit = function(temp) {
  convertFah = (temp * (9/5) + 32);
  fah = Math.round(convertFah * 10) / 10;
  return fah; 
};

console.log(convertToCelsius(100));
console.log(convertToCelsius(32));
console.log(convertToFahrenheit(0));


// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
