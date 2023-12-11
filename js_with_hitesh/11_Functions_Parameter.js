// Functions in javascript
// Learn the memory management

function sayMyName() {
    console.log("D");
    console.log("A");
    console.log("R");
    console.log("S");
    console.log("H");
    console.log("A");
    console.log("N");
}

// This is only reference of function(Execute)
// sayMyName()

                        // PARAMETERS
function addTwoNumbers(num1,num2) {
    return num1 + num2
}

console.log(addTwoNumbers(3,4));
/* The o/p of without passing the arguments to the functions --> NaN
ii> When we do not return to the function and print the called funnction then is is "UNDEFINED"
iii> After returning the function statements are not execute
*/

// DIFFERENT TYPES OF argument
function loginUderMessage(username = "samu") {
    if(username === undefined) // Or !username (undifined is also treted as false in js)
    {
        console.log("please enter a username");
        return
    }
    return `${username} just login`
}

console.log(loginUderMessage());
// Bhi argument pass nahhi kiya to o/p is :--> UNDEFINED return hoga
// The problem solve for the (Kuch bhi argument diya naho to Parameter me hi initialize karo)

// Funnctions cotinue...
// The situation: In our cart we add diffrent products then we don't know about how many argu pass in there
// --> ans (... (rest operator) & Spread operator)

function calculateCartPrice(...num1) {
    return num1
}
// we pass the multiple values to givenn function then it not generate error but how to solve it
// Using rest of Operator ... To give this all values in Bundled Array
console.log(calculateCartPrice(200,100,300));

// o/p : [ 200,  100, 300]
// interview Qna : when We use val1, val2 then (val1 , val2, ...num1) Then the val1 grap argu value and ... wale he rest of values
// means isme ham jo val1 and val2 mentioned kar diya Hame Ye 2 no chodke ..num baki ki values dega naki sari samghe

// pass the objects to functions

function UserInfo(anyObject) {
    return `Username is ${anyObject.username} and password is ${anyObject.password}`
}
const user = {
    username : "darshan@gmail",
    password: "darshan***"
}
console.log(UserInfo(user)); // To direct pass the object also

// array in functions 
const myNewArray = [100, 200, 300, 40]

function GetArrayValue(getArray) {
    return getArray[3]
}

console.log(GetArrayValue(myNewArray));












