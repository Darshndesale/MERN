// for(let i=0; i<5; i++)
// {
//     console.log(i)
// }

//program to add first natural numbers
// let n = 3
// n = Number.parseInt(n);
// let sum = 0
// for(let i=1; i<=n; i++)
// {
//     sum += i
// }

// console.log("Sum of first "+n+" Natural numbers is "+sum)

// Find factorial for n
let num = 3
let fact =1 

for(let i=1; i<=num; i++)
{
    fact = fact * i;
}

console.log("The factorial is :",fact)

//for n loop
//it is based on the objects

let obj = {
    darsh: 80,
    lalit: 78,
    sai: 90,
    shiv: 50,
    dixit: 70
}

// print the keys and its values
for(let a in obj)
{
    console.log("The marks of "+a+" are " + obj[a])
}

//for of loof

for(let b of "darsh")
{
    console.log("The marks of "+b+" are " + obj[b])
}
