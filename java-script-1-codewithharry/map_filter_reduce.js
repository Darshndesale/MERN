// Map method

let arr = [45, 23, 21]

let new_arr = arr.map((value) =>{
    console.log(value)
    return value+1
})

console.log(new_arr)

// The magic of the map function take the 3 arguments

let map_arr = [1,2,3,41,2,34]

map_arr.map((value,index,array) =>{
    console.log(value, index, array)
})

// Out put of this code
// value    index     array
// 1        0       [ 1, 2, 3, 41, 2, 34 ]
// 2        1       [ 1, 2, 3, 41, 2, 34 ]
// 3        2       [ 1, 2, 3, 41, 2, 34 ]
// 41       3       [ 1, 2, 3, 41, 2, 34 ]
// 2        4       [ 1, 2, 3, 41, 2, 34 ]
// 34       5       [ 1, 2, 3, 41, 2, 34 ]

//Array Filter Method

let num = [14,2,6,3,3,60]

let odd = num.filter((i) =>{
    return (i%2 != 0) 
})


// Out put of this code
// [ 3, 3 ]

// print the odd number wala array

console.log(odd)

// This print even numbers
let even = num.filter((i) =>{
    return (i%2 == 0) 
})

// print the even number wala array

console.log(even)

// Out put of this code
//[ 14, 2, 6, 60 ]

// Resuce method

let reduce_arr = [1,2,3,4,5]

let new_re_arr = reduce_arr.reduce((h1,h2) =>{
    console.log(h1+" + " +h2+ " = " ,h1+h2)
    return h1+h2
})

console.log(new_re_arr)

// o/p
// ---->   1 + 2 =  3
//         3 + 3 =  6
//         6 + 4 =  10
//         10 + 5 =  15
//         sum ---> 15