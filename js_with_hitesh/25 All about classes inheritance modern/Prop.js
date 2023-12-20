class User {
    constructor(username){
        this.username = username;
    }

    // method
    logMe(){
        console.log(`Username ${this.username}`);
    }

    // Condition when user make his object then it got the UNIQUE ID
    static createId(){ // It is not accese same object or different class also After Inherited
        return `123`;
    }
}

let darshan = new User("darshan");
console.log(darshan.createId()); // when we try to accese this method but restricted becuse it has static Ched chad mat karo apke liye nahi he

