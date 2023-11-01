//Declare constants
const accountId = 12345

// It is used for declare variables
let accountEmail = "darshandesale"
var accountPassword = "1221"

accountCity = "Dhule"

// accountId = 2 not allowed

accountEmail = "desale_darsh"
accountPassword = "2504"
accountCity = "Mumbai"

// it is undefined datatype 
let accountState;

// console.log(accountId);

// print in table (key - value)

console.table([accountEmail,accountId,accountPassword,accountCity,accountState]);

/* Note : 
    1 -- var -> In var thre is no scope is present it is publicaly
    e.g:
    var public_scope = "kahi bhi use karo"

    2 --> let -> This is scope based datatype 
    e.g
    {
        let scope_inner = "Use karo";
    }

    3 --> let accountState;
    output :--> Undefined
*/