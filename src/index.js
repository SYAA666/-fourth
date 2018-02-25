module.exports = function solveEquation(equation) {
    var i = 0; var str = []; var firstNumber; var secondNumber; var thirdNumber;
  var arrayOfSymbols = equation.split(' ');
  var arrayOfNumbers = [];
  while (i < arrayOfSymbols.length) {
      if (arrayOfSymbols[i] == 'x^2' || arrayOfSymbols[i] == 'x' || arrayOfSymbols[i] == '*') delete arrayOfSymbols[i];
      i++;
  }
  i = 0;
  while (i < arrayOfSymbols.length) {
      if (arrayOfSymbols[i] != null) str.push(arrayOfSymbols[i]);
      i++;
  }
  var arr = str.slice(0);
  j = 0;
  var arrayOfStringNumbers = [];
  for (i = 0; i < str.length;i++) {
      if (str[i] == '+' || str[i] == '-') {
          arrayOfStringNumbers[j] = str[i] + str[i + 1];
          j++; i++;
          continue;
      }
      arrayOfStringNumbers.push(str[i]); j++;
  }
  for (i = 0; i < arrayOfStringNumbers.length;i++) {
      arrayOfNumbers[i] = Number(arrayOfStringNumbers[i]);
  }
  firstNumber = arrayOfNumbers[0];
  secondNumber = arrayOfNumbers[1];
  thirdNumber = arrayOfNumbers[2];
  var D;
  var X = [];
  D = secondNumber * secondNumber - 4 * firstNumber * thirdNumber;
  X[0] = Math.round(((-1) * secondNumber - Math.sqrt(D)) / (2 * firstNumber));
  X[1] = Math.round(((-1) * secondNumber + Math.sqrt(D)) / (2 * firstNumber));
  X.sort(compareNumbers);
  return X;
  }

  function compareNumbers(a, b) {
    return a - b;
  }
  