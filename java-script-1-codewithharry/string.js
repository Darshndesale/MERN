// const name1 = 'darshan'
// console.log(name1)

// const name2 = "lalit"
// console.log(name2)

// templet literals

// let boy1 = 'darshan'
// let girl1 = 'riya'

// let sentence = `${boy1} loves ${girl1} ajj bhi`
// console.log(sentence)

//escape sequence character
// let fruit = 'ban\nana'
// console.log(fruit)
// console.log(fruit.length)


//string Methods
let name1 = 'MAMA\''
console.log(name1)
console.log(name1.length)

// string.toUpperCase()
console.log(name1.toLocaleUpperCase())
// string.toLowerCase()
console.log(name1.toLocaleLowerCase())

// slice method-
// we can use to slice string from (2,4) It do not consider 4 it is only slice from 2-3
let str = 'darshan'
console.log(str.slice(2,6))
console.log(str.slice(2))

//replace method-
console.log(str.replace("darsh","harsh"))

//concatination
girl = '   riyu'
console.log(str.concat(" is the love of ",girl))

//trim method
console.log(girl.trim())


// use a fo loop to print string
let s = 'harshal'

for(let i=0; i<s.length; i++)
{
    console.log(s[i])
}


//------------Finaly string is non changeble only make use to pring in diffrenent ways only



