// quetion 1

let arr = [10,2,30,4,50]

// let a = prompt("Enter the item to add")
// let a = 6

// a = Number.parseInt(a)

// arr.push(a)

// console.log(arr)

// quetion 2

// Same logic as quetion 1 only run the do while loop untill the user i/p the 0 then stop to adding the items in the array

// quetion 3

let new_arr = arr.filter((value) => {
    return value%10 == 0
})

console.log(new_arr)

// quetion 4

//swure karke bhejo

let num = [1,4,3,2,50]

let square = num.map((x) =>{
    return x*x
})

console.log(square)

// quetion 5

let num2 = [1,2,3,4,5]

let fact = num2.reduce((x,y) => {
    return x*y
})

console.log(fact)
