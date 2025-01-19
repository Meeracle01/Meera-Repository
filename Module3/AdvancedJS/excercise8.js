
class Animal {
    constructor(name) {
      this.name = name;
    }
  
    speak() {
      console.log(`${this.name} makes a sound`);
    }
  }
  
  let cat = new Animal("Cat");
  cat.speak(); // "Cat makes a sound"
  