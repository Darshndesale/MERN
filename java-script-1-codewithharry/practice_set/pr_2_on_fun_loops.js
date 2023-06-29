// // quetion 1

// let marks ={
//     harry: 90,
//     darsh: 70,
//     love: 92,
//     laxman: 50
// }

// for(let i=0; i<Object.keys(marks).length; i++)
// {
//     console.log("The marks of "+Object.keys(marks)[i]+ " are " + marks[Object.keys(marks)[i]])
// }

// // print this using for in loop
// console.log("\n")
// for(let key in marks)
// {
//     console.log("The marks of "+key+" are "+marks[key])
// }


// // quetion number--

// let cn = 5
// let num
// while(num != cn)
// {
//     num = prompt("Enter the number")
//     alert("Try again you have enter wrong number")
// }
// console.log("you have enter correct number")

// quetion 4

const mean = (a,b,c,d)=>{
    return (a+b+c+d)/4
}

console.log(Math.round(mean(1,2,3,4)))