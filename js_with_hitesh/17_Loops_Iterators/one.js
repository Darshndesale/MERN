/* Loops basics : For loop
for loop jyada jump karta he
*/
for (let index = 0; index <= 10; index++) {
    // console.log(index);
}
// flow of for loop: 1> first initialize the value --> 2> second compare the conditions true or false --> 3> And directly move to the under the scope --> 4> goes the inc++/dec-- of value --> 5> check condition 6> Initialize ka koi kam nahi 

// loops ke under loop outer and inner loop
// print table from 1 to 10
for (let i = 1; i <= 10; i++) {
    // console.log(`Table of : ${i}`);    
    for (let j = 1; j <= 10; j++) {
        // console.log(`${i} * ${j} = ${i * j}`);
    }
}

let myArr = ['batman', 'spiderman', 'yedaman']

for (let index = 0; index < myArr.length; index++) {
    const element = myArr[index];
    if(element === 'batman'){
        console.log("batman he bhai");
        break
    }
    console.log(element);
}

// The two keyword is in js : break & continue(ignore the statement to print)






