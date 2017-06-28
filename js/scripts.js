//Business Logic
function Calc(numbers){
  this.number = numbers
}

Calc.prototype.add = function(a, b){
  return a + b;
}
exports.addModule = Calc;
