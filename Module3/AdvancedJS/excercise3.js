// Exercise 3: Applying Context

function greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
  
  const person = {
    name: "Meera"
  };
  
  // Use `call` to apply the context
  greet.call(person); // "Hello, my name is Meera"
  
  // Use `apply` to apply the context
  greet.apply(person); // "Hello, my name is Meera"
  