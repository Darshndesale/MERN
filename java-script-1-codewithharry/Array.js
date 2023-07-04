// let a = [1, 2, 3, 4, 5, null, "not present"];
// console.log(a);

// // accese the array element--
// console.log(a[0]);
// console.log(a[1]);
// console.log(a[2]);
// console.log(a[3]);
// console.log(a[4]);
// console.log(a[5]);
// console.log(a[6]);

// // find the length
// console.log("The length of the array a is ", a.length);

// //change the array elements
// a[6] = "Present";
// //the array is changable
// console.log(a[6]);

// //type check karenge
// console.log(typeof a);

// // home work--
// // we can print the array elements using the loops

// // for(let i=0; i<a.length; i++)
// // {
// //     console.log("The value at index "+i+" = "+a[i])
// // }

// // using for in loop
// for (let arr in a) {
//   console.log("The value at index " + arr + " = " + a[arr]);
// }

// //-----------------ARRAY METHODS--------------------

// //1--> format a string
// let arr = [1, 2, 3, 4, 5];
// let b = arr.toLocaleString()
// console.log(b[3])

// //join method
// let c = arr.join("...")
// console.log(c,typeof b)

// //pop method
// //pop the last element from the array (nikal dena biradri se bahar)

// arr.pop()
// console.log(arr)

// //check out the more methods

// //push method (Same as the pop only push the elelment)

// arr.push(6)
// console.log(arr)

// //shift() method

// console.log(arr.shift())
// console.log(arr)

// //unshift --> its add the element at the start of the array

// console.log(arr.unshift(78))//return new length
// console.log(arr)

// //more methods of the array
// let array1 = [1,2,3,4,5,6,7]
// let array2 = [8,9,10]
// console.log(array1,array1.length)
// delete array1[3]
// console.log(array1,array1.length)

// //it size remains same after the delete any element

// //concate method

// let newarr = array1.concat(array2)
// console.log(newarr)

// // Sort method
// let unsort_arr = [40,3,20,50,1,0,400]
// unsort_arr.sort()
// //do not sort by greater or lesser sort by Alphabetically(0 ...,1....,2....,3..,n...)
// console.log(unsort_arr)

// // Sort by accending

// // 1> We can make a compare function--
// let compare = (a,b) =>{
//   //To sort the array in deccending order when use (B - A)
//   return a-b
// }
// console.log("The accending sorted array is by appying the comapre function to check +ve or -ve value basis")
// unsort_arr.sort(compare)
// console.log(unsort_arr)

// // sort by accending order is stop

// //reverse of array method
// unsort_arr.reverse()
// console.log(unsort_arr)

// // splice and slice

// let splice_arr = [2,5,20,40,1,2]
// // splice_arr.splice(2,3,1555,1559,1554)
// // console.log(splice_arr)

// //Returns the deleted elements
// let deleted_values = splice_arr.splice(2,3,1555,1559,1554)
// console.log(deleted_values)



// // splice method()

// let num = [2,3,4,5,1,2]

// let new_num = num.slice(2)
// console.log(new_num)


// Array using loops

let arr = [3,54,1,2,4]
// for(let i=0; i<arr.length; i++)
// {
//   console.log(arr[i])
// }

//This is for each loop
// arr.forEach((element) => {
//     console.log(elements)
// });

//Array from function

let name = "darshan"
let arr1 = Array.from(name)
console.log(arr1)

// for of loop for array

for(let i of arr)
{
  console.log(i)
}

// for in loop in the Array
// --- Int can return the key value paires using the variable

for(let item in arr)
{
  console.log(arr[item])
}


