// The this keyword is Refer the currence context
const user = {
    username : "darshan",
    price : 999,

    welcomeMessage : function() {
        console.log(`${this.username} , Welcome to website`);
    }
}

// user.welcomeMessage()
// user.username = "Sami"
// user.welcomeMessage()

// Kahani : It gives the result Empty Becuse Global ke under koi bhi value nahi he To ye run hoga browser wali js pe 
// And rahi bat Ham sabse jyda jo object run karte he Wo He: +++ Global Window Object +++ Wo he browser me Likke click wale, Key Wale,Form Submit

console.log(this);

// Why the this key word Not use in function 
// --> reason :  

// function chai() {
//     console.log(this);
// }

// chai()

// Output : -> Global Object aya But  Hum Jab this.username karenge tab ye undefined dega only Work in object Not in functions

// Hum Arrow function me try karenge 

const chai = () => {
    console.log(this);
    // In arrow jitna normal function me Global window de rsha tha wo bhi nahi de raha To DIFFRENCE He bhai
}
//  o/p : {}

// How Arrow function declare and use in different Ways

// const add = (num1, num2) => {
//     return num1 + num2 // Exlpicitly return
// }

// console.log(add(10,20));
// output : It is common sysntax

// 2> Implicite Wala sysntax Usme Hame sigle stahement ko ek line me likho or Return likhne ki jarurat nahi Auto

const obj = (num1, num2) => ({username : "hitesh"}) // Bina () ka bhi Also

console.log(obj);



