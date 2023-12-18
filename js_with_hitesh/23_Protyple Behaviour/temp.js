// Prototyple behavior of javascript it is imp tto how ho js is behaves
/* samjh ana chahiye
    1> mechanism of js
    2> Browser me samgenge
*/

const newHero = ['hilk', "spiderman"];
/*
* JS behaviour 1> Js has defualyt behaviour is "ProtoTyple behaviour"
=> Why : Js har nahi manti jab user ne request to vo bahi nahi mil rahi to js ek layer upper jake check karti he like child -> uska parent -> uska bhi parent Untill usko null nahi mi jaye
=> details : 1> accese of new Keyword 2> this 3> prototyple inheritance iske through aya he
e.g : Ab samjhega : ki Jo hum array ko brow me run karke prototype dekhte he uske under itna methods or alag chije kyu hotti Becuse js under jane ka kosish karta he SAMJHE

** Rukta kaha he : becuse hum jab protype ko click kar rahe he to uske under bhi prototype he
=> Dig se samjhenge             Array -> object -> (koi parent nahi hota he(sara uska hi hota he)) -> NULL
                                String -> Object -> NULL (Same)
                                function -> Obj -> NULL
*/

// Ab hoe Functions what is this Object he yan nahi chala code se samjhte he
function func1(num) {
    return num*5;
}
console.log(func1(5));
/*
Observe : 1> Ki hum jab func1() call kar rahe that is fine tab vo function he but 2>
        2> Ki hum jab usko func1.power => That is accesable but why => 
        3> Abhi sab object he to Protype bhi dekh lete he => to func1.prototype dega kya to chalo output dekhte he

        ** Output : => 1> (argu->5) => 25 2> Power -> 2 hi kyu 3> {Object} : Ye to pata chal gaya ki jo function hota he vo object bhi or function bhi he
*/

// *IMP to yesi bat he to hum jaise ki array ke prototype . se accese kar sakte he to HAMARE bhi to prototype inject kar sakte he So Ans Is Yes Chalo code se samjhe

function userIncreament(username,score) {
    // agar mene same type ke username,score banaye to kya me unko direct use kar sakta hu To Ans is nahi
    // username = username : is the abiguous statement hame batna hoga ki kiska kon : Jiska se kam chalayenge "This"
    this.username = username;
    this.score = score;
}

// ab khudka proto banayenge
// 1> (actual fun ka nam).prototype.(userDefineFunctioName) = function likho()
userIncreament.prototype.increament = function() {
    // score++; // ye nahi chalega becuse hame batana hoga ki kiska score inc++ karu Ye se to bohot ate he calls to ab => ans45
    this.score++;
}
userIncreament.prototype.printScore = function() {
    console.log(`Score is ${this.score}`); // auto this lagata he js genious
}

// Ab time he hamare pass 2 log he vo use karna chahte he ye prototype of function
const emp1 = new userIncreament("darshan",1); // This not work becuse Reason is on Line 54
const emp2 = new userIncreament("sai",5);
// call bhi karna padega
emp1.increament();
emp1.printScore(); // jab new se nahi bataya ki property konsi he to ERROR => emp1.printScore();

// because there is 2 members are need to accese those function but we don't give this to same context (Somple bhasha me unko hame alag alag position or object or Instance dena padega) 
// => new => is solution itni ramayan iske liye hi to INTERVIEW QNA he bhai

// Easy example of new Prototype => next file me

