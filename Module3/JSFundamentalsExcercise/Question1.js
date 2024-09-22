"" + 1 + 0
console.log(""+ 1 + 0 ) // "" is treated as a string so 1 is converted to a string and concatenated resulting to 10
"" - 1 + 0
console.log("" - 1 + 0 ) // "" - operator tries to convert "" to a number, which is 0, resulting in 0-1+0 = -1
true + false
console.log(true+false) //value of true is 1 and false is 0 so the sum is 1 + 0 = 1
!true
console.log(!true) // result falso as ! or not is used to switch between true & false values
6 / "3"
console.log(6 / "3" ) // result = 2 as js would convert string "3" to number 3
"2" * "3"
console.log("2"  * "3") // result = 6 following the same reasoning as above
4 + 5 + "px"
console.log( 4 + 5 + "px") //result = 9px following concatenating px after adding the values 4 +5
"$" + 4 + 5
console.log("$" + 4 + 5) // result = $45 as $ gets concatenated with 4 then 5
"4" - 2
console.log("4" - 2) // result = 2  as the - converts the string to a number so 4 - 2
"4px" - 2
console.log("4px" - 2) // result = NaN as "4px" is a string that can't be converted tpo a number resulting in a NaN
" -9 " + 5
console.log("-9" + 5) // result = "-9 5" as the string would concatenate the 5
" -9 " - 5
console.log("-9" - 5) // result = -14 as the - converts string to number making the equation -9-5 which = -14
null + 1
console.log(null + 1) // result = 0 + 1 = 1 as value of null is 0
undefined + 1 
console.log(undefined + 1) // result = NaN as undefined doesn't have a value
undefined == null
console.log(undefined == null) //result = true as undefined is loosely translated to null
undefined === null
console.log(undefined===null) //result = false as undefined is not strictly equal to null
" \t \n" - 2
console.log(" \t \n" - 2) //result = -2 as the White space converts the " \t \n" to 0 making the equation 0 - 2 = -2SS

