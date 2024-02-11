// Date and time in js is pain point this is easy in this notes which is in the deep dive Selection

/* Dates
1> The dates are generaly calculate in the miliseconds
2> Starting from 1 january
3> 
*/

let myDate =  new Date()
console.log(myDate.toString());
// o/p : Sun Nov 12 2023 10:54:04 GMT+0530 (India Standard Time)

console.log(myDate.toDateString());
// Only date and week name is printed As: Sun Nov 12 2023

console.log(myDate.toLocaleDateString());
// It gives only date in / seperated format As: 11/12/2023


console.log(myDate.toLocaleTimeString());
// It gives the time in : sperated format as a India standars As: 10:56:43 AM

console.log(myDate.toLocaleString());
// Both time and date is printed in separated special charecter format

console.log(typeof myDate);
// It is object in javascript

// Khudse create karenge Date ko

let myCreatedDate = new Date(2023,10,12) // year,month,day
console.log(myCreatedDate.toDateString());


// Imp : TimeStamp is the importandt for the  compareing dates
// like 23/2/2023 == 23/23/2023 // dificult

let myTimeStamp = Date.now()

console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
// It has many methods to give the date as time in second ,minut

// We can perform deeply dive into date using there get methods
let newDate = new Date();
console.log(newDate.getFullYear());

