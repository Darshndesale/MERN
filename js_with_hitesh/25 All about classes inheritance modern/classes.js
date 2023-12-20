// Es6 ke bad ke kahani he sara kam new keyword vahi se hi milta he
// hum karenge User ka password encript
class User {
    // constructor
    constructor(username,email,password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }

    // method define karenge
    encryptPassword(){
        return `${this.password}***`;
    }

    // change username
    changeUserName(){
        return `${this.username.toUpperCase()}`;
    }
}

// create an object of user class
let User1 = new User("darsh","darshandesale18@","darshan*");
console.log(User1.encryptPassword());

// IMP : Behind the scene
function User(username,email,password) {
    this.username = username;
    this.email = email;
    this.password = password;
}

// creating the protypes to add anothor functions
User.prototype.encryptPassword = function() {
    return `${this.password}***`; // same kam ho raha he jaise ki class me
}

let User2 = new User("harsh","@@", "###");
console.log(User2.encryptPassword());

// yes kam ho raha he : Output => ###***