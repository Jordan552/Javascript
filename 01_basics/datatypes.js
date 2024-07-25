// primitive

//7 types : string, number, boolean, null, undefined, symbol, BigInt

const score = 100
const scorevalue = 100.3

const isLoggedIn = false
const outSideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);



// const bigNumber = 1477897807731773817388n



//Refrence (non primitive)

// array, objects, functions

const heros = ["shaktiman", "spiderman", "dodo"];
let myObj = {
    name :"Jordan",
    age: 27,
}

const MyFunction = function(){
    console.log();
}

// console.log(typeof heros);

//*********************************************/
let MyComName = "deadpool-linux"

let MyComName2 = MyComName
MyComName2="Jordan-Linux"

console.log(MyComName);
console.log(MyComName2);

let usr1 = {
    email:"diiw@gmail.com",
    upi:"hdwjnoo@gmail.com",
};
let usr2 = usr1
let usr3 = usr2
usr3.email = "dbuqnoun.commm"
usr2.email = "abcd@google.vom"

console.log(usr1.email);
console.log(usr2.email);
console.log(usr3.email);
