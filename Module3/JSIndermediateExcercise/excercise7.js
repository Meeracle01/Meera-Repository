
function Person(name, age) {
    this.name = name;
    this.age = age;
  }
  

  Person.prototype.greet = function() {
    console.log("Hello, my name is " + this.name);
  };
  

  let person1 = new Person("Alice", 25);
  

  person1.greet();
  