const add = function(a,b) {
  return a + b;
};

const subtract = function(a, b) {
	return a - b
};

const sum = function(values) {
  return values.reduce((a,b) => {return a + b},0);
};

const multiply = function(values) {
  
  return values.reduce((a,b) => {return a*b},1);
};

const power = function(a,b) {
	let i = 1;
  let total = a;
  while (i < b) {
    total = total * a;
    i++
  }
  if (b == 0) {total = a}
  return total;
};

const factorial = function(num) {
	const factorialArray = [];
  while (num > 0) {
    factorialArray.push(num);
    num--;
  }
  console.log(factorialArray);
  return factorialArray.reduce((a,b) => {return a * b;},1);
  
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
