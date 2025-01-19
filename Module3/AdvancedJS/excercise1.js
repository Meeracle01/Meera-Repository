

function outerFunction(outerVariable) {
    return function innerFunction(innerVariable) {
      console.log("Outer Variable:", outerVariable);
      console.log("Inner Variable:", innerVariable);
    };
  }
  
  const closureExample = outerFunction("outerValue");
  closureExample("innerValue");
  // Output:
  // Outer Variable: outerValue
  // Inner Variable: innerValue
  