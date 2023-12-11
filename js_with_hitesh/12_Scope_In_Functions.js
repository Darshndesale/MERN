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

// NESTED SCOPE

function func1() {
    const username = "darshan"

    function func1_1() {
      console.log(username);
      const password = "1234"
    }

    // console.log(password) Error

    // func1_1()
}
// The concept is : Chote bado se chin sakte he par Bade choto se nahi
func1()

// o/p : only accese the func1_1 wale me func1 wale variables

// THIS is also called as """""" Closers """"""

// It is  also apply for all The scope level concepts like the If () statement

// ++++++++++++++++ Interesting ++++++++++++++
// Expressions

// console.log(add(5));
const addTwo = function add(num) {
    return num + 2
}

console.log(addTwo(5));
// o/p : 7 After we call the function in this way

// This Trows error becuse the in js the we first simple declare the function and perform operations AND othor side the we Declare the functions anso store the result in Variable SO iT is called As the """""" Hoisting """"""




