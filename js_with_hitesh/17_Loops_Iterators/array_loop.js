// we are apply the loops on array to fetch data becuse in database and api give the o/p int the form of array

/* for of
In case we declare the arr under : ["", "", ""], [{},{},{}]
*/

const arr = [1,2,3,4,5]
for (const num of arr) { // it is not for object direcly not meaning "array pe bhai"
    console.log(num);
}
// o/p : 1,2,3,4,5

const wellComeMessage = "Welcome to india"
for (const ch of wellComeMessage) {
    // space detect ke liye hum "continue" use karenge
    console.log(ch);
}

// map : map is the object in js also same as objects < store unique values> <folows the order>
const map = new Map()
map.set('IN' , 'india')
map.set('IN' , 'india')
map.set('USA' , 'united state of america')
map.set('AUS' , 'Austrlia')

console.log(map);
/* o/p Map(3) {
  'IN' => 'india',
  'USA' => 'united state of america',
  'AUS' => 'Austrlia'
}
*/

// map using array AND Destructuring
for (const [key, value] of map) {
    console.log(key, '=>',value);
}

// object pe lagayenge
const obj = {
    1 : 'one',
    2 : 'two',
    3 : 'three'
}

/* In objects the for of loop not work to iterate the object
for (const [key, val] of obj) {
    console.log(key, '=>',val);
}
 o/p : obj is not iterable */

// Resolve this problem
for (const key in obj) {
    console.log(`${key} and thre value is ${obj[key]}`);
}

// Arrays pe lagayenge
const programmign = ['js', 'c++', 'java', 'ruby']
for (const key in programmign) {
//    console.log(programmign[key]);
}

// chal raha he

// IMP: for in loop map pe nahi chalega: reason : Map is not iterable

// **************  For Each Loop **************

const coding = ['js', 'c++', 'java', 'ruby']

coding.forEach( function (lag) {
    console.log(lag);
} )

// It the prototype of array when we type array name then it suggest and we pic the for each <step 1: arrname> <step 2: foreach( function (direct accese values) {body})>

// way 2
coding.forEach( (item,index,arr) => {
    console.log(`${item} at index ${index}`);
    // Body;
})

// way 3

// Note : Hamara array ka bap for each hame uska < addrease, Home(arr), log bhi dikha det he( values ) 

// *********** IMP (Array ke under Objects uski value nikalni he)

const student = [
    {
        studName : "darshan",
        studRoll : 15
    },
    {
        studName : "lalit",
        studRoll : 16
    },
    {
        studName : "bari",
        studRoll : 3
    }
]

// hame foreach loop lagayenge
student.forEach( (item) => {
    console.log(`stud Name : ${item.studName} and thre roll no : ${item.studRoll}`);
})

/* Output
stud Name : darshan and thre roll no : 15
stud Name : lalit and thre roll no : 16
stud Name : bari and thre roll no : 3
*/