//Which of the following console.log messages will print? Why?
if (0) console.log('#1 zero is true') // Will not print as 0 is a false value, since the condition evaluates to false, the console.log() will not run
if ("0") console.log('#2 zero is true') // Will print as a 0 within "" has a true value
if (null) console.log('null is true') //Will not print as null has a false value 
if (-1) console.log('negative is true') //This will print as any non-zero value in JS evaluates to a true consition
if (1) console.log('positive is true') // This will also print due tpo the same reason as above