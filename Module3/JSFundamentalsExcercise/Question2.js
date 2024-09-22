//Which of the below are not giving the right answer? Why are they not correct? How can we fix them?
let three = "3"
let four = "4"
let thirty = "30"
//The variables above are all strings which might make JS to solve these expressions diffrently


//what is the value of the following expressions?
let addition = three + four
console.log(addition);//Result = "34", SInce both 3 & 4 are strings, the + operates a concatenation
let multiplication = three * four
console.log(multiplication); // result = 12 as the * converts the strings to numbers
let division = three / four
console.log(division); //result = 0.75 as the / also forces a numeric conversion
let subtraction = three - four
console.log(subtraction); //result = -1, same reasoning as previous
//let lessThan1 = three < four
//console.log(lessThan1); //result = true because when you compare strings with < they are compared lexicographically and since 3 comes before 4 the result is true
//If you wanted to make the above equation numeric we'd need to convert the strings to numbers instead to below
let lessThan1 = Number(three) < Number(four);
console.log(lessThan1); //Check result now
//let lessThan2 = thirty < four
//console.log(lessThan2); //result = False as lexicographically 30 is bigger than 4 as string comparision would check 1st digit of each string and "3" is bigger than "4" in that instance
//Fix as below
let lessThan2 = Number(thirty) < Number(four); 
console.log(lessThan2)