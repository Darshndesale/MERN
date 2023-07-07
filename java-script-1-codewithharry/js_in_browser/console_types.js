// console types

// it print the all the console objects
// console.log(console)

console.log("Hi darshan")

// console.error method show in red clor background
console.error("Hey do not click , here")

// This csn follow any given condition is true the not act athorwise act
console.assert(55>53)

// This is the console object table

// e.g-
obj = {'darsh' : 20, 
        'lalit' : 21, 
        'bari'  :  3, 
        'mohit' : 4
    }

console.table(obj)

// o/p
// (index)     Value
// darsh	    20
// lalit	    21
// bari	        3
// mohit	    4

// warning
//info

//console.time

console.time("a")
console.timeEnd("a")

//check the time for run the for loop

console.time("ForLoop")
for(let i=0; i<5; i++)
{
    console.log()
}
console.timeEnd("ForLoop")

console.time("while:")
let i=0
while(i<5)
{
    console.log()
    i++
}
console.timeEnd("while:")

