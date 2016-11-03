function fizz (x) {
  return x;
};

function fizzBuzz (start, end) {
  var array = [];
  for (var i = start; i <= end; i++) {
    if (i % 15 === 0) {
      array.push(fizzbuzz);
    } else if (i % 5 === 0 ) {
      array.push(buzz);
    } else if (i % 3 === 0 ){
      array.push(fizz);
    }
  }
  return array;
};

export { fizz };
export { fizzBuzz };

