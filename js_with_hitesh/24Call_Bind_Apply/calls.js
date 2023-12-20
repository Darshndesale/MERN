// react v1 me bhi bind use hota tha call bhi tha Ab kaha hi nahi lagana padta but important he
// usecase : => callstack yad ya rahi he kya
/*
    Ab kahani shuru hui ki jab hamare pass calstack thi tab Humare func() ka context jata tha scenario dekho
    1> Only call separate func()
    2> Call inner function also (func() ke under func())
    => then jab hum 2nd scenario dekh rahe the to hamare pass outer fun() ka bhi context he or inner ka call hone ke badd ka bhi he 
    QNA => To muze ye batao ki ye this keyword kisko target karega
    Ans => help lega GE Context

    // Interview : => - window(jab window accese hoga this refers) = {this = window()}
    - node = {this = {} }

    // Call se samjhenge code se Line no 16
*/
function SetUsername(username) {
    // set the user name of current context
    this.username = username;
    console.log("called", this);
}

// give the user details
function createUser(username,email,password) {
    // set the Username at outsource means bahar function me
    SetUsername.call(this,username);

    this.email = email;
    this.password = password;
}

// create the new Instance of to accese all the attribute
let emp1 = new createUser("darshan","darshan@123","darshan@123");
console.log(emp1);
// This give the only createUser { email: 'darshan@123', password: 'darshan@123' } this is not give the username after Call outsource function (I guess the The inner fun() are  call ,write)

// Tho abhi Ye wali call ki situation he
// bhai run to ho raha he par value kaha gayi :
// => reason => Becuse jab hum Setusername call run hua to bahar nikal gaya or uska Exe context bhi bahar nikal gaya To Uske declare variables bhi bahar uske sath chale gaye Sure..

// Reference hold karne ke liye . CALL he na
// => kahani :=> ki jab me ye problem solve karunga to at the time I pass the argument as fun(this, arg..,arg..N) to jisko call kar raha hu to bataya ki me reference lo .call se and Wo fun() bola ki me ja raha hu call stack se mera saman app rakh lo write

/*  real output after that..
createUser {
  username: 'darshan',
  email: 'darshan@123',
  password: 'darshan@123'
}
*/