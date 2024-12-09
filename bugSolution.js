function myFunction(a, b) {
  if (a === 0 || b === 0) {
    return "Division by zero is not allowed"; // Handle zero values gracefully
  } else {
    return a / b; 
  }
}
console.log(myFunction(10, 2)); // Output: 5
console.log(myFunction(10, 0)); // Output: Division by zero is not allowed
console.log(myFunction(0, 5));  //Output: Division by zero is not allowed