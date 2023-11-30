// we delare the array for understanding of more about the for each loop

const myArr = ["java", "c++", "python", "ruby"]
// When we apply the for each loop on arr then the interesting thing was we do not able to returns the value in for each loop
// try..
const item = myArr.forEach( (item) => {
    console.log(item);
    return item
})
console.log(item);

// o/p is Undefined : This means that the for each loop not return any value

// ********************************* Filters **************************8

// Then move to solution : Filters
const arr = [1,2,3,4,5,6,7,8,9,10]
const oddNum = arr.filter( (item) => (item%2 == 0))
console.log(oddNum);

// output : [ 2, 4, 6, 8, 10 ] this returns the values in the form of array

// Mistake Generalty I make is that 
const ismeBraketHe = arr.filter( (item) => {
    return item%2 == 0 // In this case this expresion wrap in in { This not implicitly return Hme manualy RETURN rite karna padega}
})

// Way 2 : Using For Each loop AND if()

const numsArr = []

arr.forEach( (num) => {
    if(num % 2 == 0)
    {
        numsArr.push(num)
    }
})

console.log(numsArr);
// o/p : [ 2, 4, 6, 8, 10 ] same output

// Filters With example : Books example
const books = [
    {name: 'c++ book', publishDate: 2001, version: 0.1, genre: 'science'},
    {name: 'js book', publishDate: 1920, version: 0.1, genre: 'History'},
    {name: 'ruby book', publishDate: 2001, version: 0.1, genre: 'science'},
    {name: 'java book', publishDate: 1920, version: 0.1, genre: 'science'},
    {name: 'no name', publishDate: 2001, version: 0.1, genre: 'History'},
    {name: 'Kangaru', publishDate: 2032, version: 0.1, genre: 'History'}
]

// Accese the books data where genre === 'History'
const userBooks = books.filter( (bk) => bk.genre === 'History' )

console.log(userBooks);

/* output : 
[
  {
    name: 'js book',
    publishDate: 1920,
    version: 0.1,
    genre: 'History'
  },
  {
    name: 'no name',
    publishDate: 1920,
    version: 0.1,
    genre: 'History'
  },
  {
    name: 'Kangaru',
    publishDate: 1920,
    version: 0.1,
    genre: 'History'
  }
]
*/

for (const item of userBooks) {
    if(item.publishDate > 2000) {
        // console.log(`This book name as ${item.name} has purchasedate is ${item.publishDate}`);
    }

}
/* output : This book name as no name has purchasedate is 2001
This book name as Kangaru has purchasedate is 2032
*/


// ***************************** MAP ****************************** IMP
let num = [1,2,3,4,5,6,7,8,9]

let new_arr = num.map((value) =>{
    console.log(value)
    return value+1
})

console.log(new_arr);
// The out put after add the 1 in each value : [46,24,22]

/* Chaining method
   => In chaining we use the nested map under the map also use the filters
*/
// example

const halfAndPlusOne = num
            .map( (num) => num * 10)
            .map( (num) => num+1) // In this statement it use the first map updated values in array usme + 1 karega
            .filter( (num) => num < 50) // In map only Based on True or False

console.log(halfAndPlusOne);
/* After chaining Output is : 
 [ 11, 21, 31, 41 ]
*/

// ***************************** Reduced ************
const oneToFive = [1,2,3,4,5]
/*
Syntax Reduce :
const resuce = arr.reduce( (accumalator,currentVal) accumalator + currentVal , initialize = 0)

example : sum os array values 2> Shoping kart Bills When add new product then total sum nikalo bhai
*/
const result = oneToFive.reduce( (acc,curr_val) => {
    console.log(`${acc} + ${curr_val} = ${curr_val + acc}`);
    return acc + curr_val
},0)

console.log(result);

/* output  :
1 + 2 = 3
3 + 3 = 6
6 + 4 = 10
10 + 5 = 15
15
*/

// Shoping kart Example using the reduce method

const courses = [
    {
        courseName: "DSA",
        price: 4499
    },
    {
        courseName: "MERN",
        price: 5999
    },
    {
        courseName: "Mobile Application",
        price: 3999
    },
    {
        courseName: "Python",
        price: 1999
    }
]

// Problem statement is : to display youre purchase couses total on screen
let init = 0
let total = courses.reduce( (init,curr_Course) => {
    return init + curr_Course.price;
}, init)

console.log(total);
// output : Total of course : 16496






