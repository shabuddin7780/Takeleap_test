/*var a = 10;
var b = 5;
var sum = a + b;
console.log("Sum using var:", sum); // Output: 15

let x = 20;
let y = 4;
let product = x * y;
console.log("Product using let:", product); // Output: 80

const num1 = 50;
const num2 = 10;
const division = num1 / num2;
console.log("Division using const:", division); // Output: 5 
*/


/*
const array = [1, 2, 3, 4, 5];

// Custom map function
function customMap(arr, callback) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i], i, arr));
  }
  return result;
}
console.log('Map:', customMap(array, (num) => num * 2)); // [2, 4, 6, 8, 10]

// Custom filter function
function customFilter(arr, callback) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i], i, arr)) {
      result.push(arr[i]);
    }
  }
  return result;
}
console.log('Filter:', customFilter(array, (num) => num > 3)); // [4, 5]

// Custom reduce function
function customReduce(arr, callback, initialValue) {
  let accumulator = initialValue;
  for (let i = 0; i < arr.length; i++) {
    accumulator = callback(accumulator, arr[i], i, arr);
  }
  return accumulator;
}
console.log('Reduce:', customReduce(array, (acc, num) => acc + num, 0)); // 15

// Custom flatMap function
function customFlatMap(arr, callback) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    const mappedValue = callback(arr[i], i, arr);
    result.push(...mappedValue);
  }
  return result;
}
console.log('FlatMap:', customFlatMap(array, (num) => [num, num * 2])); // [1, 2, 2, 4, 3, 6, 4, 8, 5, 10]
*/





/*
// Main function
function greet(name, callback) {
  console.log('Hello, ' + name);
  callback(); // Execute the callback
}

// Callback function
function askQuestion() {
  console.log('How are you today?');
}

// Call the main function with the callback
greet('NXTWAVE', askQuestion);
// Output:
// Hello, NXTWAVE
// How are you today?

*/





function reverseString(str) {
  // Step 1: Convert the string to an array
  const strArray = str.split('');
  
  // Step 2: Reverse the array
  const reversedArray = strArray.reverse();
  
  // Step 3: Join the array back into a string
  const reversedString = reversedArray.join('');
  
  return reversedString;
}

// Example usage
const input = 'NXTWAVE';
const output = reverseString(input);
console.log('Reversed string:', output); // Output: 'EVAWTXN'



