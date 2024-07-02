//Primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt


const score =100
const scoreValue = 100.3

const isLoggedIN = false
const outsideTemp = null
let userEmail;

const id = Symbol('321')
const anotherId = Symbol('321')

// console.log(id === anotherId);

const bigNumber = 3673737638437n


//Refrence (NonPreitive)

//Array, Objects, Functions

const heros = ["riddhi", "vani", "ritika"]
let myobj = {
    name : "vividh",
    age: "24",
}
     
const myFunction = function(){
    console.log("Hello riddhi");
}

// console.log(typeof myFunction);

///*********************************************//
//Stack (Preitive) , Heap(Non-Primitive)

let myfirstName = "vividh";
let anotherName = myfirstName
anotherName  = "bhardwaj"

console.log(anotherName);
// console.log(myfirstName);


let userOne ={
    email: "user@java.com",
    upi : "use@ybl"
}

let userTwo = userOne
userTwo.email = "ridhhi@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);










