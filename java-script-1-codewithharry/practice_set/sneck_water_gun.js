// this generate the random string
let arr = ["sneck","water","gun"];
// let idx = Math.floor(Math.random()*arr.length);


// console.log(random)

while(true)
{
    let idx = Math.floor(Math.random()*arr.length);
    let random = arr[idx]; 
    console.log(random)

    let deep = prompt("Enter youre choice")

    if(deep == 'sneck' && random == 'water')
    {
        console.log("The winer is deep, deep : "+deep+" and opponent : "+random);
        break;
    }
    else if(deep == 'water' && random == 'sneck')
    {
        console.log("The winer is opponent, deep : "+deep+" and opponent : "+random);
        break;
    }
    else if(deep == 'water' && random == 'gun')
    {
        console.log("The winer is deep, deep : "+deep+" and opponent : "+random);
        break;
    }
    else{
        console.log("The winer is opponet, deep : "+deep+" and opponent : "+random);
        break;
    }

    console.log("Continue..., deep : "+deep+" and opponent : "+random);

    return false;
}



