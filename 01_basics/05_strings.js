const name = "Vividh"
const repoCount =50
//console.log(name + repoCount + "value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('vividh-hc')

console.log(gameName[0]);
console.log(gameName.__proto__);


console.log((gameName.length));
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('v'));

const newString = gameName.substring(0, 4);
console.log(newString);