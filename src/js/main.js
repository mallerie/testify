function fizz (x) {
  return x;
};

var array = []; 

function fizzBuzz (start, end) {
  for(var i=start; i<=end; i++){
    if(i%5===0 && i%3===0){
        array.push("fizzbuzz");
    }else if(i%5===0){
        array.push("fizz");
    }else if(i%3===0){
        array.push("buzz");
    }else{
        array.push(i);
    }
  }
  return array;
};

export { fizz };
export { fizzBuzz };

