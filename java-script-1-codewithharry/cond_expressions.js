const a = 'c'
console.log("Hey whats your age ")
//input prompt is use

// type casting is
// a = Number.parseInt(a)

console.log(typeof a)

// if(a < 0)
// {
//     console.log("invalid age")
// }
// else if(a < 9){
//     console.log("you are a kid ")
// }
// else if(a < 18 && a >= 9)
// {
//     console.log("you are think to drive after the age compleating 18 ")
// }
// else 
// {
//     console.log("you are eligible for driving ")
// }


switch (a){
    case 'a':
        console.log("we can typed the later a")
        break;
    case 'b':
        console.log("we can typed the later b")
        break;
    case 'c':
        console.log("we can typed the later c")
        break;
    case 'd':
        console.log("we can typed the later d")
        break;
    
}

let age = 18

let ans = (age == 45) ? "you are drive" : "can't drive"

console.log(ans)

