// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);
// We cn predict thre answers it is write then do not run 

// start the unpredictable compariosons
// console.log("2" > 1);
// console.log("02" > 1);

// o/p is true
// - Becuse the js is convert the string to integer
// - If You compare any values then aware about if you take only " Same Data type values"

// console.log(null > 0);
// console.log(null == 0);
// console.log(null >= 0);

// o/p Is false, false, true

// -Becuse the reason is that an equlity check == and comparisons > <>= <= work diffrenty
// - Comaprisons convert null to a number. treating it as 0 Tha's why null >= 0 is true and (1) null > 0 is false

// console.log(undefined > 0);
// console.log(undefined == 0);
// console.log(undefined >= 0);

// Strict check : It check the values, But also check it data types strictly

console.log("2" === 2);

// Note : Ye kabibhi confudion me dal sakta he mat use karo

/* Type of data type to return data type
     --------------------------------------
    | Type           | Result              |
     --------------------------------------
    | 1> Undefined   |   "Undefined"       |
    | 2> Null        |   "object"          |
    | 3> Boolean     |   "Number"          |
    | 4> String      |   "string"          |
    | 5> Function    |   function object   |
     --------------------------------------
*/


// ++++++++++++++++++++// How to use memory use in java Script //+++++++++++

// Type of memory : Stack memory(Primitive data types me) & heap memory(Non-Primitive data types)

// When use stack memory Then We can have take the copy of the variable
// When use heap memory Then we can have bhetat Reference of varable usmehi changes Honge

// Learn with e.x

let myFirstVariable = "darshandesale"

let mySecondVariable = "SoftWare Engineere"

// I changed the content of second var to asign the copy of first variable

mySecondVariable = myFirstVariable
mySecondVariable = "SoftWare Engineere"

console.log(myFirstVariable);
console.log(mySecondVariable);

let user = {
     email : "darsh@gmail.com",
     upi : "url@ybm"
}

let userTwo = user

userTwo.email = "DesaleDarshan@gamil.com"

console.log(user.email);
console.log(userTwo.email);
/*  The o/p : --> DesaleDarshan@gamil.com
                 DesaleDarshan@gamil.com
                 */
                
// The both reference get the data from same heap not a copy

// In non primtive the also Create the heap of the side of stack
                         // __________             Reference;  ___________________
/* Learn by digram ---> |___user_______|     --------------> |
                        |___myFirstVariable(Copy)_______|    | {
                        |__mySecondVariable________|         |    Key : Pairs (2 or three)
                        |__myFirstVariable________|          |}
                                                             |
                                                             |
*/    


