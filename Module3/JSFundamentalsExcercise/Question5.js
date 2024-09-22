//Rewrite the following function using: a) function expression syntax, and b) arrow functionsyntax. Test each version to make sure they work the same.

//Solution below
//Function Expression Syntax
//const getGreeting = function(name) {
  //  return 'Hello ' + name + '!';
//}
//console.log(getGreeting("John"));

//Arrow Function Syntax
const getGreeting = (name) => {
    return 'Hello ' + name + '!';
};
console.log(getGreeting("Meera"));