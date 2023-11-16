// array With inerview pespective

const myArray = [0, 1, 2, 3, 4, 5]
console.log(myArray);

myArray.push(10)
console.log(myArray);
// In array thre is create shellow copy to share there pointed reference to the output
// The array has also in browser first inspect-->declare array--->print array--->opendouble protocol under the protocol 

// methods to push and pop
myArray.pop()


// unshift to append values in start
myArray.unshift(-1)
// The problem is that when add todo then thre are large todo then all are shifted is heavy task But we are enginnere not mush focuse on optimize first 

myArray.shift()
// it remove or the shift elements to left



console.log(myArray.includes(9));
console.log(myArray.indexOf(4)); // return type Number

// slice and splice diffrence with lerning

const myN1 = myArray.slice(1,3)
console.log(`Array A : ${myN1}`);
console.log(`Array B : ${myArray}`);

const myN2 = myArray.splice(1,3)
console.log(`Array C : ${myN2}`);
console.log(`Array B : ${myArray}`);

/* The diffrence is : The slice gives the lese than one edrg vaues
And splice is return range between all values [ THIS ANSWER IS WRONG ]

Actual Ans : The observe the answer with splice command and actual array Also myaaray is changed to cut from 1-3

Output: 
Array A : 1,2
Array B : 0,1,2,3,4,5
Array A : 1,2,3
Array B : 0,4,5
*/

// Part 2 : Array
// Prototypes Power ko samzo

// push arra int array

const fruitArray = ['mango','jam','papita','shitafal','kevi']
const animalArray = ['elephant','Montkey','donkey']
// fruitArray.push(animalArray)

// console.log(fruitArray);

// the fruit array is treat the animal arraay as only single element

// 2nd approach to concatinate
const newConcatinateArray = fruitArray.concat(animalArray)
console.log(newConcatinateArray);

//It returs new concatinate array

// kach ka glass spred kar rahe he ... 
const spreadArray1 = [...animalArray, ...fruitArray]
console.log(spreadArray1);

// Arr ->> arr -> arr
const arrayUnderArray = [1, 2, 3, 4, [5, 6, 7], 7, 8, [7, 8]]
const flatArray = arrayUnderArray.flat(Infinity)
console.log(flatArray);
/*
[
  1, 2, 3, 4, 5,
  6, 7, 7, 8, 7,
  
*/

// How to check isthis array and also when this is not arr then convert as array
console.log(Array.isArray("Hitesh"));
console.log(Array.from("Hitesh"));
// o/p : false  * [ 'H', 'i', 't', 'e', 's', 'h' ]

// Interesting case for interviews To convert the object to array [key : value]
console.log(Array.from({name : "Hitesh"})); // It returns the empty [] array
// This may ambiguous to make whether the array of key or value

let val1 = 100
let val2 = 200
let val3 = 300

// To convert the values variables in Array
console.log(Array.of(val1,val2,val3));
[ 100, 200, 300 ]