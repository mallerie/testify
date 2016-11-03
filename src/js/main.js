function fizz () {
  // TODO
  return 4;
};

function fizzBuzz (start, end) {
  // Write fizzBuzz here once fizz is finished.
  var array = [];
  for (var i = start; i <= end; i++) {
    if (i % 3 === 0) {
      array.push(fizz);
    } else {
      array.push(i);
    }
  }
  return array;
};

export { fizz };
export { fizzBuzz };

