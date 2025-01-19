

function Animal(name) {
    this.name = name;
  }
  
  // Add a method to the Animal prototype
  Animal.prototype.speak = function() {
    console.log(`${this.name} makes a sound`);
  };
  
  let dog = new Animal("Dog");
  dog.speak(); // "Dog makes a sound"
  