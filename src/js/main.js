function fizz (x) {
  return x;
};

var array = [];

function fizzBuzz (start, end) {
  var array = []; 
  for(var i=start; i<=end; i++){
    if(i%5===0 && i%3===0){
        array.push("FizzBuzz");
    }else if(i%5===0){
        array.push("Fizz");
    }else if(i%3===0){
        array.push("Buzz");
    }else{
        array.push(i);
    }
  }
  return array;
};

export { fizz };
export { fizzBuzz };

