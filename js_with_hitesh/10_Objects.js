let obj = {v : 1,v2: 2, v3:3}
console.log(typeof obj);

// singleton : When we make the object with constructor
// How to make the singleton object :---> Object.create()

// Using literals(objects)
// 1. Declare Symbol
let mysym = Symbol("key1")

// 2. Declare objet to act the Symbol to KeyboardEvent
const myInfoObj = {
    "name" : "darshan",
    [mysym] : "key1",
    age : 17.5,
    designation : "Frontend devloper",
    location : "Deobhane",
    login : false,
    lastLoginDay : ["monday", "saturday"]
}

// 3. Accese the Symbol type key : value in the Object
console.log(myInfoObj[mysym]);
console.log(typeof myInfoObj[mysym]);
// How to accese 
// 1st tarika
console.log(myInfoObj.name) // bad Practice

// 2nd tarika Indutry level tarika
console.log(myInfoObj["designation"]); // Becuse the key are treat as string "designation"


// Interview question : --> print sysmbol using declare in object
/* 
1. Declare the symbol : let mysym = Symbol("key1")
2. Act the Symbol in object
3. Use there sysntax of declaring symbol in object : --> [mysym] : "key1"
4. And accese the Symbol from the object using Syntax as  : --> myInfoObj[mysym]
*/

// How to change the values in the object
myInfoObj.age = 18

// freez or lock : > koi bhi value change na kar sake
// Object.freeze(myInfoObj)
myInfoObj.age = 22
console.log(myInfoObj);


// Part 2 : Object
// const instaUser = new Object()

const regularUser = {
    emailid :  "darhsan@123",
    fullname : {
        userfullname : {
            firstname : "darsh",
            lastname : "desale"
        }
    }
}

// Object nesting is possible and we are accese as following
console.log(regularUser.fullname.userfullname.firstname);
// o/p : darsh

// How to combine the objects

let obj1 = {1: "a", 2: "b"}
let obj2 = {3: "a", 4: "b"}
let obj3 = {5: "a", 6: "b"}

// const obj4 = Object.assign({}, obj1, obj2, obj3)
// the sysntax is simple to understand as (Target : {}, sourse : objects)

// console.log(obj4);
// o/p : { '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }  

// new regular syntax for spread 
const newObj = {...obj1, ...obj2}
console.log(newObj);
// o/p : { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

// The objects are in the array when we fetch the data from database

const user = [
    {
        id : 1,
        email: "darsh@gmail"
    },
    {
        id : 1,
        email: "darsh@gmail"
    },
    {
        id : 1,
        email: "darsh@gmail"
    }
]

// How to accese
// Syntax : Array he to :---> user[idx].(for Obj)
console.log(user[1].email);
// o/p :--> darsh@gmail

// we can convert the keys and values in object to ARRAY
console.log((regularUser));

console.log(Object.keys(regularUser));
// The interesting thing was the It returns the Array of keys mention as argument
// o/p : [ 'emailid', 'fullname' ]
// Advantage : i> To apply loops and accese the values | ii>  use in different location using working with d/b

// How to check the more about onjects USE INSPECT ELEMENT and run the js On BROWSER


