let score = null
// check this value in which format 
// console.log(typeof score);
// console.log(typeof(score));

//when we decide that we are perform the operations on only number

let valueInNumber = Number(score)
// out : -> converted this score into number 
// console.log(typeof valueInNumber);
// console.log(valueInNumber);
// output :-> NaN converted valueInNumber

// Kya kya conversion me ayega
// 1> number ko ->  number me yes
// 2> true/false -> 1/0
// 3> undefined -> NaN( not n number) But iska jo type vo number hi he
// 4> null -> 0

let isLoggedIn = ""
let booleanLogedIn = Boolean(isLoggedIn)
// console.log(booleanLogedIn);

// output : -> true
/* i/p             o/p
   -------------------
    1    --->     true
    ""   --->     false
    "darsh" --->  true 
    -------------------
*/

let num = 33
let str = String(num)
// console.log(str);
// he to number jaisa buut string he -- > 33

// but there type kya he
// console.log(typeof str);

// output is : -> string

//******************* operations ****************/

let value = 3
let newValue = -value
console.log(newValue);

let str1 = "hello"
let str2 = " darsh"
let str3 = str1 + str2
console.log(str3);

console.log("1" + (2 + 2));
// out put :-> After (lagane ke pehle) o/p -> 122 (But mene specifiy kar diya ki muze kya pehle operaion perform karni he to o/p --> 14)
console.log((1 + 2) + "2");
// output : -> 32
console.log("1" + "2");

// tricky conversion
console.log(+true);
// o/p : -> 1
console.log(+"");
// o/p : -> 0

let num1,num2,num3
//declare value 4 to ever num
num1 = num2 = num3 = 2+2
// this is bad becuse there is no redeable code in industry level there is other engginers review this






