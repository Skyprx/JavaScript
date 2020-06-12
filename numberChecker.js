function check(num){
    return num > 90
  }

var numFilter = [2, 71, 98, 105, 81, 41, 777].filter(check); 
console.log(numFilter);

// Returns a array of numbers if the numbers in the array are
// greater than 90