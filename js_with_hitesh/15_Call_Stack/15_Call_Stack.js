// How to execute the cod in javascript

/* Javascript Execution AudioContext
    All The content in 15_call_stack file Concept cleare
*/

/* Exersize
Crazy   - 0
Amazing - 1
Fire    - 2

Shop Name:
Engine - 0
Foods - 1
Garments - 2

Anothor word:
Bros - 0
Limited - 1
Hub - 2

How to approach this problem:
--> e.g: Fire Engine Hub
 step 1: Random number generate karenge #3 random no generate karenge |/
 step 2: We use basicaly any one datatype was objects |/
 step 3: How to accese this names randomly from this objects using random number
*/

const adJective = {
  1: "Crazy",
  2: "Amazing",
  3: "Fire"
};
const shopName = {
  1: "Engine",
  2: "Food",
  3: "Garment"
};
const word = {
  1: "Bros",
  2: "Limited",
  3: "Hub"
};
let ran = 2
console.log(adJective[ran]);
// This is range
let min = 1;
let max = 3;

function randomNumberGenerator() {
  let ran = Math.floor(Math.random() * (max - min + 1)) + min;
  return ran;
}



let run = 1
do {
  let run = prompt("Continue or not");
  if (run == 1) {
    // hamara kam start ho gaya
    let ran1 = randomNumberGenerator()
    let ran2 = randomNumberGenerator()
    let ran3 = randomNumberGenerator()

    console.log(`${adJective[ran1]} ${shopName[ran2]} ${word[ran3]}`)

  } else {
    run = false;
  }
} while (run);

// ***************** stop ************************


// Dem orun 
// let ran1 = 2
// let ran2 = 1
// let ran3 = 3

    // // hamara kam start ho gaya
    // let ran1 = randomNumberGenerator()
    // let ran2 = randomNumberGenerator()
    // let ran3 = randomNumberGenerator()

    // console.log(`${adJective[ran1]} ${shopName[ran2]} ${word[ran3]}`)


