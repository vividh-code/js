

function sayMyName(){
    console.log("v");
    console.log("i");
    console.log("d");
    console.log("h");
}

// sayMyName()

// function addTwoNumbers(number1 , number2){
//   console.log( number1 + number2);
// }
function addTwoNumbers(number1 , number2){
    // let result = number1+ number2
    // return result
    return number1 + number2
  }

const  result = addTwoNumbers(2,4)

// console.log("result:  ", result);



function loginUserMessage(username="arohi"){
    if(!username){
      console.log("Please enter a username");
      return 
    }
    return `${username} just logged in `
}
// console.log(loginUserMessage("vividh"));
// console.log(loginUserMessage("vividh"));



function calculateCartPrice(val1, val2,...num1){
   return num1
}

// console.log( calculateCartPrice(200, 400, 600, 77000));






const user = {
  username : "vividh",
  price : 888
}
function handleObject(anyObject){
    console.log(`username is ${anyObject.username} and price is ${anyObject.price}`);
}

// handleObject(user)

handleObject({
  username : "sam",
  price : 888
})


const myNewArray =[200, 400, 600, 8000]

function returnSecondValue(getArray){
     return getArray[2]
}
// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 600, 8000]));








