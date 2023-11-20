// Scope is the range variables accese in programms jaise ki var let and const

// Global scope
// let a= 10
// const b= 20
// var c = 30

if (true) {
  // Bloack scope
  let a = 10;
  const b = 20;
  var c = 30;
}

// console.log(a);
// console.log(b);
console.log(c);
// c is accese in global scope This is not expected

// Scenario : Thre are 2 devlopers and they one was declare the var a = 300 in global scope and anothor devloper declare { var a = 30} the dev1 print the a then he confused that I declare value 300 hundread what is this BBecuse of var

// Interview qna : The scope of Browser and Actual Node environment is diffrent
