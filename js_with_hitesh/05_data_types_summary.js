// Why the data types are divided into 2 types (Primitive & non-Primitive)
// -- > In which the data is stored in memory and also accese

// Primitive : 7 types
/*--> i> String
    ii> Number
    iii> undefined
    iv> Symbol : Unique banane ke liye e.g : In adv type of js Then we use the buttons as unique and wrap it in symbol
    v> Boolean
    vi>null
    vii>BigInt
    viii> String
*/


// How to use Symbol

const id = Symbol('123')
const anotheId = Symbol('123')

console.log(id === anotheId);

// Its o/p is : false Becuse the sysbols indicates both to unique (purpose is define uniqueness)

// Or conse data type he (Reference (Non - primptive))
/* 
    Array, Objects, Functions
*/

