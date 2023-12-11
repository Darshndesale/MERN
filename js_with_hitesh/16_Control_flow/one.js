// The program in control flow in which the the program will run and at that time anothor program willl not run this continnues so on

// 1> if statement

let isUserLogdIn = true;
if (2 !== "3") { // also literal false work
    console.log("executed...");
}

// <, >, <=, >=, ==, !=, (===, !==) => strictly check the conditions
// Hum yaha pe pehla example of temprature (temp > 41) (temp === 41) in if statement

let bal = 100
if(bal > 50) console.log("recharge Sucsessfuly"); // But this is unreadable code

// How to check 2 or moe conditions : else if ki bat chalu he
if(bal < 50) {
    console.log("< 50");

} else if (bal == 100) {
    console.log(" === 100");

} else if (bal > 50) {
    console.log(" > 100");

} else {
    console.log("kuch nahi");
}

// How to use in real world
const isUserLogdIn2 = true
const debitCard = true

if(isUserLogdIn2 && debitCard)
{
    console.log("Allow to buy course");
}

const loggedInFromGoogle = true
const loggedInFromEmail = false

if(loggedInFromEmail || loggedInFromGoogle)
{
    console.log("Allow to buy course");
}

