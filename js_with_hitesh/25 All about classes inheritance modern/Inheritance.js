class AnimalName {
    constructor(animal_Name) {
        this.animal_Name = animal_Name;
    }

    // Notification
    Notify(){
        console.log(`Your animal name is set as ${this.animal_Name}`);
    }
}

// class two which gives the info of animal price, brid, height But along with then we give give there name also to extending the 1st class
class AnimalDetails extends AnimalName{
    constructor(animal_Name,price,brid,height){
        // But we also accese the name of cow repeate but already have the name then we not write the behind scene like (this,name) 
        super(animal_Name); // => this is says that Bhai super se dekho extend kisse hue ho vaha pe jao uska animall_name set kardo write..
        this.price = price;
        this.brid = brid;
        this.height = height;
    }

    // display all detils of 
    displayAnimalDetails(){
        console.log(`***** ${this.animal_Name} Details *****`);
        console.log(`| Animal Name : ${this.animal_Name} |`);
        console.log(`| Animal Price : ${this.price} |`);
        console.log(`| Animal Brid : ${this.brid} |`);
        console.log(`| Animal height : ${this.height} |`);
    }
}

// create the new detils of animal one
let animal1 = new AnimalDetails("Cow", 50000, "Gavran", "5.5 inch");
console.log(animal1.displayAnimalDetails());

let animal2 = new AnimalDetails("Got", 4000, "American Got", "3 inch");
console.log(animal2.displayAnimalDetails());

// check the instances
// console.log(animal1 instanceof AnimalName); // true
// console.log(animal2 instanceof AnimalDetails); // true

/* output
***** Cow Details *****
| Animal Name : Cow |
| Animal Price : 50000 |
| Animal Brid : Gavran |
| Animal height : 5.5 |
*/
