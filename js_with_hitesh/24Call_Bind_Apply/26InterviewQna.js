// The quetion was Ki : To the value of constant pi = 3.14 then change this value with reason or not chnaged then also reason
// Object.getOwnPropertyDescriptor()

// pehle bat karte he MATH.PI ki universal constant
console.log(Math.PI);
Math.PI = 12; // Overide Ki he par kuch 
console.log(Math.PI);

// Me touch kyu nahi kar pa raha hu Chalo dekhte he
// Ye wala Object ka method hame Properties mil sakti e
// IMP: Math is bada module he PI ek value he 
let descripter =Object.getOwnPropertyDescriptor(Math, "PI")
// console.log(descripter);
// console.log(descripter.writable);

/* Output in deteil
    {
  value: 3.141592653589793, This is hard coded value jo js engine ne likhi he
  writable: false, This properties in js engine(browser or node ke under) very indepth indeatail hardcoded he ki ise change nahi kar sakte(kitni bhi bar overide karne ki koshish karo)
  enumerable: false,
  configurable: false
}

Note: hum hamare object ki values ko ese de sakte he kya Ki humara framework koi use kare to unko hum harcoded value de de ki change na kar paye
POSSIBLE HE BHAI
*/

// *************** Example of this in detailed ************
// 1> declare own Object
let obj = {
    chai: "greenTea",
    price: 150,
    available: true
}

// 2> Hum iski property direct nahi le sakte becuse it's Object To jaise hamne Math me PI ki mani this isme name ki mano
// console.log(Object.getOwnPropertyDescriptor(obj, "chai"));
/* output ye raha
    {
  value: 'greenTea',
  writable: true,
  enumerable: true,
  configurable: true
}
*/

// 3> ab mera hi code he mene hi banaya he to muze control do na phir ched pau properties ko To chalo
Object.defineProperty(obj, 'chai', {
    writable: false,
    enumerable: false
})

// 4> print karenge after kya kaha ni chal rahi Headers
// console.log(Object.getOwnPropertyDescriptor(obj, "chai"));

/*output
    {
  value: 'greenTea',
  writable: false,
  enumerable: false,
  configurable: true
}
*/

// 5 : for of loop lagate he
// for (const [key,value] of obj) {
//     console.log(`key : ${key} | value : ${value}`);
// }

// out : Obje is not iterable kyuki obj iterable nahi he
// solution : hamare pass or ek property ho ti "entries(objName)"

// 6> entrie prop lagayenge
for (const [key,value] of Object.entries(obj)) {
      if(typeof value != "function"){ // ye function raha to it gets print the function as it is
        console.log(`key : ${key} | value : ${value}`);
      }
    }

/* output: only gives enumerable = true wali key:value
key : price | value : 150
key : available | value : true

******** After appling the enumerable true : then 
key : chai | value : greenTea
key : price | value : 150
key : available | value : true
*/

// Note: This is usefulll for backend becuse hame dekhna hoga ki ye accesable kyu nahi ho raha to pata hona chahiye