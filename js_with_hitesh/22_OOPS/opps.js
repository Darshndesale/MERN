const user = {
    username : "hitesh", // Ye sari properties he
    loginCounts: 10,
    sinedIn: true,

    getUserDetails: function () {
        console.log("Successsfuly fetch the value..");
        // console.log(`Username ${this.username}`); // It throus error becuse isko pata hi nahi he he ki kiski bat ho rahi rahi he
        console.log(`Username : ${this.username}`); // it works
        // only print this
        console.log(this); // idhar kiya to ye Current obj ka sara info dega
    }
 } // yahi to Object literals he

 // Hum ise kese accese karte he 
 console.log(user.loginCounts);
console.log(user.getUserDetails());

// Note : Bat rahi ki hum jab browser me gaye to usne hame prototype and methods() diye
// for e.g : map() to mene arr liya arr[1,2,3,4,5] to map ko kese pata ki 5 cho ke uper lagana he
// Ans => To isme concept ata he " Current Context " Which is " This " Ye batata he ki hum kurrent kispe he Last wala munday alag he Ajj ka alag and Ane wala alag to samjho

// Focus karo Object pe hum This se khelenge

// Undefined ke bare me bad me bat karenge
// or yaha acese kiya to : 
console.log(this);
// ye dega only { koi bhi current context avilable nahi he }
// or browser jab hum isi ko run karenge 
// => To browser me pehle se hi bohot sara context hota he to vo vo dega : YAD karo

// ************** Constructor *************
// const promiseone = new Promise();
const date = new Date();
// new key word is used for to make different instances with single object
// But in oothor case we have requered diffrent context then it say you have special contex and sma efor all

// new Also called Constructor Function()
// We create fun() : It has only single Execution contest Reusability
function User2(username, loginCount, password) {
    // Ab hum dekhenge current contex ka power : Hamne he wala OOp ke time sikha tha ki (simple e.g he current fun() me)
    this.username = username;
    this.loginCounts = loginCount;
    this.password = password;

    // interesting thisng when return karenge to jo object hoga wo return hoga
    return this; // ye nahi bhi likha to bhi Implicitly dega
}

const user2 = new User2("darsh", 8, "darsh123");
// probelm is generate dekho age
const user3 = new User2("virat",18, "vir@123");
// user3 mene print nahi kiya taribhi hame print kar ke de raha he becuse overide on the user2
// Solution : => 
console.log(user2.constructor); // [function : User] khudka reference
console.log(user3);
// output :User2 { username: 'darsh', loginCounts: 8, password: 'darsh123' }    
// User2 { username: 'virat', loginCounts: 18, password: 'vir@123' }   
// It gives the output as This under values and some othor also becuse: socho Ki hamne jab Function me this use kiya to Global context de raha tha

/* How new works
1> when new is declare Empty object is create : {}
2> constructor() call hota he new ke under : all the values are inject in there
3> finaly de deta he
*/
