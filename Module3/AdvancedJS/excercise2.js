// Exercise 2: Decorators

function logExecutionTime(fn) {
  return function(...args) {
    console.time("Execution Time");
    const result = fn(...args);
    console.timeEnd("Execution Time");
    return result;
  };
}

// A simple function
function add(a, b) {
  return a + b;
}

// Applying the decorator to the add function
const decoratedAdd = logExecutionTime(add);

console.log(decoratedAdd(2, 3)); // Output: Execution Time: (time) | 5

