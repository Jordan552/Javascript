const name = "Awanish"
const repocount = 27

console.log(`hello my name is ${name} and my repocount is ${repocount}`)

const gameName = new String(`Jordan`)

console.log(gameName[0]);
console.log(gameName.__proto__);


console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(4));


const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-2)
console.log(anotherString);

const newStringOne = "  Jordan  "
console.log(newStringOne);
console.log(newStringOne.trim());


const url = "https://jordan552.com/jordan%2/nbody"
console.log(url.replace('%20','-'));
console.log(url.split('/'));
