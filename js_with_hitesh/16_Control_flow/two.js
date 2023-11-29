// when we check with all values then switch is used
// Tala & Chabi ()
let mon = 3
switch (mon) {
    case 1:
        console.log("january");
        break;
    case 2: // also same for string when mon = "march" : => Case "march"
        console.log("february");
        break;
    case 3:
        console.log("march");
        // break;
    case 4:
        console.log("April");
        break;

    default:
        console.log("Default case match");
        break;
}

// Except defualt

// Interview Interesting : Assume that this is true thi or false thi
// e.g
const userEmail = "darsha@123"

if(userEmail) {
    console.log("Got user email");
} else {
    console.log("Dont't have user email");
}

/* This is interesting thing that the what is the answer of this expresion or code
 o/p is : Got user email // Assume mil gaya true he
 i/p : -> " " || O/p : Don't have user email

Research karenge aoo..
Rule he :
    value : false | 0  | -ve (-1) | BigInt | "" | null | undefined | Nan  (not a number)           

    Baki sub +ve mante he konsi : String ke under kahani badal jati he
    Surprice values TRUE : "0", 'false', [], {}, function() {empty function}
*/

// How to check that array or obj is empty or not : IMP
// if(Array.length === 0) return true;

/* for objects : 
const emptyObj = {}
if(object.key(emptyObj).length === 0) return true;
*/

// ****************** NeW Concept *****************

// Nullish Coalesing Operator (??): null undefined
/* 
When the we interact with the database like firebase, appright Int this case this return the different values not only correct
If any time it returns the null undefined then for anothor is distureb then the devloper used this ?? oprator to handle this situation
e.g:

*/
// Sitiation : null ? Function() --> database se o/p le kea raha he
// let val1 = 5 ?? 10 ---> o/p : 5
// let val1 = null ?? 10  --->10
// let val1 = null ?? null --> null
// let val1 = undefined ?? 10 --> 10

// This operator (??) && (?) this are different
console.log(val1);

// Summery : All time peogram execute not ho then we use control statements like tempature kam jyada






