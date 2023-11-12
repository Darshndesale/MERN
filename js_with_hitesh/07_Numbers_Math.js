// Number or maths in fist part as Number

/// isne auomatic define kar liya ki ye Number he
const acc_Bal = 10000
console.log(acc_Bal);

// it direcly making from god upper se 
let ph_bal = new Number(100)
console.log(ph_bal);

// outPut:
// 10000
// [Number: 100]

// methods provide by Number proto

console.log(acc_Bal.toString().length);

//It is most useful for the ecomerse application to custer who not see the more precisions values in application
console.log(acc_Bal.toFixed(2));

// presision bohot interesting he
let num = 123.8965
console.log(num.toPrecision(9));

/* i/p   o/p               des
   2      1.2e+2            This may only priorotize befor decimal not after decimal (means exponential)

   3      124               This may return roundup value 

   >length 123.896500       Zero is append len - precision mention in argument



*/

const hundread = 100000

// It gives the understandable indian corency wise , is attahed with hundread
console.log(hundread.toLocaleString('en-IN'));


// ++++++++++++++++ Maths ++++++++++++++++

// ye sari values return kar raha he 
// console.log(Math);

// console.log(Math.abs(2-4));
// console.log(Math.round(3.6));

// apna control hoga 
// console.log(Math.ceil(3.6));
// console.log(Math.floor(3.6));

// working of math method

// When we multiply the value then its sheeft by one and give the result as like e.g 0.4453456 ---> 4.45334567
// Also answer is 0 return then we add 1

console.log(Math.random());
console.log(Math.floor(Math.random() * 100) + 1); // random number is betn 1-100

// trick of define min max & Yad rakho
const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max-min + 1)) + min);
// This formula is used for to generate the user define random numbers between the range






