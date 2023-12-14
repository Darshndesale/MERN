// what is promises : The promise object represent the eventual complition and failure of an asynchronoise operation and its resulting value
// hamari bhasha : Jo hamane task diy he vo queue me to lag gaya he par vo muze badme compleate or fail ho ke milga usko manage or promise se le ke ayega Promises
// Jaruri nahi sare kam abhi ho : many taks those not complete as the speed of the compute programming calculations : For.e.x File accese direct nahi hoti pehle req kernel ko jati vo hame lake deta he
// Isme hamare pass 2 operations he ki Asy/awit laga le or Promises laga lo Modern jamane me use hota he
// It has also states like pending

// How to create the promises : it is introduce in Es6
// history : Qbrird in early stage Stack overflow

// create : promises give the callback : callback hell
const promiseOne = new Promise(function (resolve, reject) {
  /* kya kam ho sakte he : asyn task : DB calls, creptography, network call
            One question arrive in mind taht the what is perform actualy resolve and reject
            */
  setTimeout(function () {
    console.log("Async task is completed"); // when only this statement here it is not execute after complete the async task : reason Hamne .then or resolve ko kabhi connect hi nahi kiy
    resolve();
  }, 2000);
});

// how to execute
promiseOne.then(function () {
  console.log("Promis is consumed"); // resolve hone ke bad hi ye ayega
}); // the connection .then is directly with the resolve Iske under function milta he See line No: 17

// 2nd way
new Promise(function (resolve, reject) {
  // async
  setTimeout(function () {
    console.log("Async task 2 is complete");
    resolve();
  }, 1000);
}).then(function () {
  console.log("Async 2 resolve");
});

// 3rd promise
const promiseThree = new Promise(function (resolve, reject) {
  // resolve is directly connect he .then se but Ho sakta he ki network se koi data aya ho vo bhi muze pass karna hoga na
  // sikhna padega
  setTimeout(function () {
    // hum data pass kar sakte he resolve me se {object} apka man he ki app kya pass karna chahte ho
    resolve({ username: "darsh", email: "darshan12@gmail.com" });
  }, 1000);
});

// we can take data as
promiseThree.then(function (user) {
  // ham man sakte he ki fun(e) kuch to data a raha he
  console.log(user); // Yes user gives the data from promise in the form of object
});

// promise 4
const promiseFour = new Promise(function (resolve, reject) {
  // Suppose we can Get the information from website or D/B then ..
  setTimeout(function () {
    let error = false;
    if (!error) {
      // error nahi he to resolve karo data obj ki form mr dikhao
      resolve({ farmer_name: "krushana", farm_location: "deobhane", begha: 4 });
    } else {
      // mutlab error aya he to dikhana to padega Ese hawa me to nahi jane dena padega
      reject("Thre is 404 error");
    }
  }, 1000);
});

// resolve ho jayega to resolve().then karke le lenge or Error aya to Catch() use karenge
const promiseRes = promiseFour
  .then((farmer) => {
    // The task is that how to dekhe return ki hue value
    // muze pura object to mil raha
    console.log(farmer);
    return farmer.farmer_name; // ye kaha pe a raha he : checkout 1> Store promise result in valriable -> fail 2> .then chaining => Pass
  })
  .then((farmername) => {
    // this syntax is usefull for D/B connection
    console.log(farmername);
  })
  .catch((error) => { // hamne error bhi define kiya he to vo bhi a raha he
    console.log(error);
  }).finally(() =>{
    console.log("Finally executed ither resolve or rejected");
  })
// NOTE : *** There is multiple case you have encounter "THEN USE FINALLY"
// console.log(promiseRes); Triggered Exception

// for readabliity ke liye new line me .then .catch chalu karo

// Promise Five
// One real fact : When the histesh sir tech in class then it solve the promise using the async awit Handle : Are promise is future chijo ko handle karne kile to he bahi 
const promisFive = new Promise(function(resolve,reject){
    setTimeout(function () {
        let error = true;
        if (!error) {
          // error nahi he to resolve karo data obj ki form mr dikhao
          resolve({ farmer_name: "darshan", farm_location: "deobhane", begha: 10 });
        } else {
          // mutlab error aya he to dikhana to padega Ese hawa me to nahi jane dena padega
          reject("There is Database error");
        }
      }, 1000);
})

// Handle using the Async await
// Create the Async and awit
async function consumePromiseFive(){
    try {
      const value = await promisFive; // awit returns the Promise
      console.log(value); // interesting output
    } catch (error) {
      console.log(error);
    } // 100% handle the error
}

// execute the async function
consumePromiseFive();

// This gives output when error = true : It try to say that apply catch block for seeying the error
// And in case of error = false It execute makhan no problem is generate

// *** PROBLEM : Of async and awit is that it does not handle the error directly
// To esi bat me try and catch block use karo *********8

// ************** We can Use api's To see the behind the seen ****************

// async function getAllUsers(){
//     try {
//       const reponce = await fetch('https://jsonplaceholder.typicode.com/users')
//       // responce is the String form we convert this to Json()
//       const data = await reponce.json();
//       console.log(data);
//     } catch (error) {
//       console.log("error");
//     }
// }

// call the functions
// getAllUsers();

/* ****** OBSERVATION : 
  1> first hume dhyan rakhana ho error ka and actual output ka try and catch ka
  2> Or the most imp thing is that ** Responce d/b , api , network se a raha he time to lagega Isi liye to async awit use kiya
  3> To jaha bhi responce or json() format me convert hone me time lag rha he waha awit lagao
*/

// *********** Isi kam ko hame Try and catch me karna he ************ IMP
fetch('https://jsonplaceholder.typicode.com/users') // Becuse it returns the Promis .then() lagana chalega
.then((responce) => {
  return responce.json(); // We return it with converting json() format
})
.then((data) =>{
  console.log(data);
})
.catch((error) => {
  console.log(error);
})

// YES it give's also same result