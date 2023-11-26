// IIFE : imidietly invoked function expression

/* Why we use the iife : 
    i> When my programm just start execution and my database file is imidietly connected with d/b to fetch data in file
    ii> Global scope is not poluted the function under the declaration
*/

// How to declare iife (Fun defination) (Execution call Also ARGUMENT)
(function db1(num) {
    // This is named IFFE
    console.log(`DB Connected ${num}`);
})(1);

// invoked automaticaly or manualy hum bhi invoked kar sakte he simple function bana ke
// It is not run when any argument was passed HUM 

// Interview answer : Global scope ke jo bhi variable he  Or jo bhi vaha declare kiye he usko polution avoid karne ke liye

// Othor case to run the anothor function 
( ()=> {
    console.log("DB connect two");
})();

// Isko context pata nahi chal raha tha Isliye end hamne ; se kiya
// Arrow function also run 


