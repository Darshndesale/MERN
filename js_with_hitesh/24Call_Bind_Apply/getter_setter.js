class User{
    constructor(email,password){
        this.email = email;
        this.password = password; // jab mene isko comment kiya that to geter set not work on this values of password pehle yaha initialize hoga bad me getter or setter
    }

    // we declare the getter
    get password(){
        return this._password.toUpperCase();
    }

    // set the password
    set password(value){
        this._password = value; // set yaha kiya or return line no 9 pe kiya in different form
    }

    // Email ke liye setter or getter
    get email(){
        return this._email.toUpperCase();
    }

    set email(value) {
        // console.log(value);
        this._email = value;
    }
}

/*
Basicaly bat yesi he ki hum simply Iser se uska password . lagakele sakte he But In case or scenario hame Finegreen control chahiye hota he
* jaise ki muzese koi password chahta he to me use return karu messeage ki not shareablr or encrypeted password
* customize code karne ke liye isme bhi getter or setter 
* it defult in class
*/

let darshan = new User("desale","dar@123");
console.log(darshan.password); // this is not only accesable for the Getter iske sath setter bhi lagega Compulsary
// after declring the  setter also isko confuse ho raha he ki kisko set kar rahe ho fun() ko ya constructor se ABIGUITY

// sollution 1> naya variable laga do to store set hue value _password

// basic yesa he ki jab value set kar rahe he tab alag or dene ke time alag set kar sakte he Which is our control

// email ke liye bhi karte he
// call karna padega email ke liye
console.log(darshan.email);

// ********** This is anothor way of using to declare the  setters and getters in earlyier stage
function way2(email,password) {
    this._email = email;
    this._password = password;

    // declare the seters using the Object becuse 
    Object.defineProperty(this, 'email', {
        get: function() {
            return this._email.toUpperCase();
           },
           set: function (value) {
             this.email = value;
           }
    })

}

let obj2 = new way2("darshan@123", "ff*69");

// acese the value
console.log("this email : ",obj2.email);

// ********* Example behine the Array prop Length ************
/* basicaly the concept is that 
   hum jub array ki length mangate he to vo direct get nahi hoti first length ko array ke upper For loop laga na padta he uske badd vo hame return karta he length
*/

// class size{
//     constructor(array,length){
//         this.length = 0;
//     }

//     get length(){
//         return this._length;
//     }

//     set length(array) {
//         for (const i in array) {
//             this._length = this._length + 1;
//         }
//     }
// }

// // accese the length of the array
// let array = [1,2,3,4,5,6,7]
// let length = new size(array,0);
// console.log(length.length);

// ******* Not work ******

// interview quetion 
let undefine 
console.log(undefine);
// this gives out put as "Undefined" becuse usme hamne kuch dala hi nahi he

// or not define
console.log(notdefine);

// output : notdefine is not defined "Isko mene define hi nahi kiya he"
