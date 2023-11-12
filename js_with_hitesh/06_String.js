const name = "hitesh"
const repocnt = 50

// console.log("Darshan repo count is " + repocnt + " value");
// This aaproach is outdated not use 

// The new feature is used for interpolation (combine the string)
// console.log(`Hello my name is ${name} ans my repo count is ${repocnt}`);

// Interesting consept of string or new declaration
const gameName = new String("pokimon")

// console.log(gameName);
/*  out put jo var me he vahi dega but isko browser me dal ke dekho object return karega
String {'pokimon'}
0: "p"
1: "o"
2: "k"
3: "i"
4: "m"
5: "o"
6: "n"

it has key : value pairs to accece also methods of prototype
*/

/*console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.indexOf("m")) // index dega mention wala char ka
console.log(gameName.charAt(4)); // location dedo
*/

const newSubStr = gameName.slice(2,5); // 5 = 5 - 1 = 4 tak dega Becuse of '0 based indexing'
console.log(newSubStr);

//substring wala
const anothorStr = gameName.substring(8,3)
console.log(anothorStr);

const trimStr = "    hello     "
console.log(trimStr);
console.log(trimStr.trim());

// replace 
let url = "https://darshan.com//darshan%20desale"
console.log(url.replace('%20','-'));  // (Kisko search karu , aur kisse replace karu)

// keyword include he ya nahi
console.log(url.includes('darshan')); // return boolean value

// Split method
console.log(gameName.split("-",1));
