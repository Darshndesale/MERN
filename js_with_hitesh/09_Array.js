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
