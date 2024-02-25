
// Starting to practice the javascript from sratch
// 1> datatypes
// const a = 10;
// let b = 10;
// we check what is difference also
// a = b+c; // we don't modified becuse it is constant
// console.log(a);

// {
//     var c = 10;
//     let ans = b + c;
// }

// ans = ""
// console.log(typeof(ans));
// console.log(b + " " + c);
// console.log("Answer is : ", ans);

// let a = BigInt(5);
// console.log(typeof(a));
// console.log(typeof Object);
// console.log(typeof(null));

// conversion
// let t = null;
// console.log(typeof t);


// const str = new String("DARSHAN");
// console.log(str);

// console.log(str.toLowerCase());
// console.log(str);
// let temp = str.split('D','%20');
// console.log(temp);

// Math in js
// let money = 13243.456;
// console.log(money.toFixed(1));

// console.log(Math.round(3.6));

// console.log(Math.floor(6.7));

// random fuctionality
// console.log(Math.floor(Math.random() * 100) + 1);

// same for this using formula
// let maxi = 30
// let mini = 25

// console.log(Math.floor(Math.random() * (maxi-mini+1)) + mini);

// Date in js

// let date = new Date();
// console.log(date.toLocaleDateString());

// Array

let arr = [1,2,3,4,5]
console.log(typeof arr);

console.log(arr.pop());
let slice_res = arr.slice(1,3)
console.log(slice_res);
console.log(arr);

console.log(arr);
let splice_res = arr.splice(1,3)
console.log(splice_res);
console.log(arr);

// let converted_arr = Array.from("darshan");
// console.log(converted_arr);

// objects
let mysym = Symbol("key1")
let obj = {
    "name" : "darshan",
    [mysym] : "key1",
    age : 17.5,
    designation : "Frontend devloper",
    location : "Deobhane",
    login : false,
    lastLoginDay : ["monday", "saturday"]
}

// console.log(obj[mysym]);


// this keyword
let u = {
    1:2,
    name:"darshan",
    // create the function here
    print_name: function (){
        console.log(this.name, " bhai");
    }
}

// u.print_name()

function chai() {
    console.log(this);
}
// chai()

// arrow functions

// let arrow_fun = () => (console.log("hi arrow functions"))
// arrow_fun()

// iffi function
// (function database_Connection() {
//     console.log("Database succssesfully created..");
// })();

// Loops iterator

let myarr = ["a", "b", "c", "d"];

// myarr.forEach((i) => {
//     console.log(i);
// })

// filters

const number_arr = [1,2,3,4,5,6,7,8,9,10]
// let even = number_arr.filter((num) => {
//     return num%2 == 0;
// })

// console.log("Even array : ",even);

// map
// let updated = number_arr.map((val) => {
//     return val+2
// })
// console.log(updated);

// reduce 
// let sum = number_arr.reduce((acc,curr_val) => {
//     console.log(`${acc} + ${curr_val} = ${acc+curr_val}`);
//     return acc + curr_val;
// })

// console.log(sum);

// for of loop => array , map , strings

// for in loop => objects and further as well like array , strings
const obj2 = {
    1 : 'one',
    2 : 'two',
    3 : 'three'
}

// for(let key in obj2) {
//     console.log(`${key} : ${obj2[key]}`);
// }

// for each loop hack


// Asyncronise javascript

// setInterval(()=>{
//     alert("darshan dikha me 2 seconds ke")
// },5000)

let sayDarshan = () => {
    console.log("darshan mehnat karte raho saflata milegi bhai daro mat");
}

// execute as well
// setTimeout(sayDarshan,3000)

// let stop = setInterval(()=> {
//     console.log("Say hi..");
// })

// setTimeout(()=> {
//     console.log("First num 1");
// },1000)
// console.log("First num 1");
setTimeout(()=> {
    // console.log("Second num 2");
},0)
// console.log("Third num 3");
// setTimeout(()=> {
//     console.log("Third num 3");
// },2000)

// Advance version of asyncronice programming
