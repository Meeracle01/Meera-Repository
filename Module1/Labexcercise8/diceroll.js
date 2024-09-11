function generatedice(roll) { 
    let randomNumber = Math.random();
    let diceRoll = Math.floor(randomNumber * roll) + 1;
    console.log(diceRoll)
}

generatedice(6)
generatedice(10)
generatedice(6)
generatedice(10)
generatedice(6)
generatedice(10)
generatedice(6)
generatedice(10)