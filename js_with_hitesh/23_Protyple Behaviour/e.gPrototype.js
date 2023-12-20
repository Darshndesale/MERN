// e.g of Prototype wala section start
// goal => I have one string this is my name and I accese my name with neglating "  spaces  "

let myName = "darshan    "; // String.trim().length => de rahe the bhai dhyan rakho DT kya he

// console.log(myName.length); // This give the lengeth of this "darshan"
// ok yaha tak thik tha par Magic
console.log(myName.length); // when I accese the length after injecting white spaces "darshan     "
// this give me the wrong output Becuse including the " spaces "

// *** But how handle with this : kuch bolenge ki (Trim() se kar lunga) Low IQ wali bate nahi hame bag samjhana he bhai chalo...
// console.log(myName.trim().length); // correct o/p

// Interview quetion : ki Hum (str.trim().length) ko convert karke (str.truelength()) kar sakte he kya Interesting
// => solution At Line.No : 92

// kahani pe chalte he

// suppose me Object me heroes : power
let heroesPow = {
    thor : "hammer",
    spiderman : "sling",

    // or ek function declare karta usme me kisi ek ki pow dspaly()
    getPower : function() {
        console.log(`The power of thor is ${this.thor}`);
    }
}

// But me ase accese kar sakta hu kya obj.method()
// heroesPow.darshan(); // nahi Iske liye hame Browser me heroesPower ka prototypes me chekck karna hoga but nahi mila

// ** But Hum inject to kar sakte he na
// to chalo.. inject karte he
/*
    but steps : 1> start kaise karenge ese nhai heroesPow.prototype : reason => because esa ho ki hum Object ho to uske based hi chalu kare 
    => Becuse as As the temp.js file line 15 to 17 To we give the power to obj then Array,string,fun Also accese this power
*/
// vahi kam yaha karenge
Object.prototype.darshan = function() {
    console.log("darshan is present in all objects");
}

// run to karenge
heroesPow.darshan();
// output : darshan is present in all objects

// Experiment karenge : ki ye array se accese karte he
let stack = ["pop","push","top"]
console.log(stack.darshan());
// output : darshan is present in all objects

// Experiment 2 : As the protyple behaviour Hum array me ye property inject karenge and obj accese karenge => top ke liye only obj
Array.prototype.darshan2 = function() {
    console.log("darshan lo obj ne dhond hi liya");
}

// heroesPow.darshan2(); // accese to nahi he
// stack.darshan2(); ha he accese lower herarchi ke pass

// Note : Bhai bhai power nahi share kar sakte Lekin Path ko hi power de de to
// Note : Suppose apne prototype likha to sub ke liye hoga esa nahi sabke liye alag alag he

// ******************* Inheritance ***************
// => kisi or ki properties app accese kar sakte ho

let user = {
    name: "darshan"
}

let Teacher = {
    makevideo: true
}

let TeachersOnlineStatus = {
    status: "offline"
}

let TASupport = {
    makeAss: "js assignment",
    fulltime: true,
    // ab ek syntax he ki hume teachers status properties bhi chahiye
    __proto__: TeachersOnlineStatus // ab mil gaya isko accese
}

// bahar bhi de sakte he

// ******** Modern syntax *****
// Object.setPrototypeOf(TeachersOnlineStatus,Teacher);

// Hum jo array ki problem solve karne ka try karna chahte the mil gaya
let name = "harshal     ";

// prototype creation and inject in String as a method
String.prototype.trueLength = function() {
    console.log(this); // this me kya he current context
    console.log(`True length is : ${this.trim().length}`);
}

name.trueLength();
// finally output is : [String: 'harshal     ']
// True length is : 7






