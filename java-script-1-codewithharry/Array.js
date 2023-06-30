let a = [1, 2, 3, 4, 5, null, "not present"];
console.log(a);

// accese the array element--
console.log(a[0]);
console.log(a[1]);
console.log(a[2]);
console.log(a[3]);
console.log(a[4]);
console.log(a[5]);
console.log(a[6]);

// find the length
console.log("The length of the array a is ", a.length);

//change the array elements
a[6] = "Present";
//the array is changable
console.log(a[6]);

//type check karenge
console.log(typeof a);

// home work--
// we can print the array elements using the loops

// for(let i=0; i<a.length; i++)
// {
//     console.log("The value at index "+i+" = "+a[i])
// }

// using for in loop
for (let arr in a) {
  console.log("The value at index " + arr + " = " + a[arr]);
}

//-----------------ARRAY METHODS--------------------

//1--> format a string
let arr = [1, 2, 3, 4, 5];
let b = arr.toLocaleString()
console.log(b[3])

//join method
let c = arr.join("...")
console.log(c,typeof b)

//pop method
//pop the last element from the array (nikal dena biradri se bahar)

arr.pop()
console.log(arr)

//check out the more methods

//push method (Same as the pop only push the elelment)

arr.push(6)
console.log(arr)

//shift() method

console.log(arr.shift())
console.log(arr)

//unshift --> its add the element at the start of the array

console.log(arr.unshift(78))//return new length
console.log(arr)





