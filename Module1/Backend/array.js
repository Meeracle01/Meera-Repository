let seas = ['Black Sea', 'Caribbean Sea', 'North Sea', 'Baltic Sea'];
console.log(seas); // [ 'Black Sea', 'Caribbean Sea', 'North Sea', 'Baltic Sea' ]
seas.push('Red Sea');
console.log(seas); // [ 'Black Sea', 'Caribbean Sea', 'North Sea', 'Baltic Sea', 'Red Sea' ]
seas.push('Arabian Sea');
console.log(seas);
seas.unshift('Adriatic Sea');
console.log(seas)
let rivers = ['Mississippi', 'Amazon', 'Nile'];
let lastRiver = rivers.pop();
console.log(lastRiver);
console.log(rivers);
let firstRiver = rivers.shift();
console.log(firstRiver); 
console.log(rivers);