//singleton
// Object.create


//object literals 

const mySym = Symbol("key1")


const jsUser = {
    name : "Vividh",
    "full name": "vividh rajbhar",
    [mySym] : "mykey1",
    age: 21,
    location: "bengaluru",
    email: "vividh@google.com",
    isLoggedIn : false,
    lastLoginDays :["Monday", "Saturday"]
}

// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["full name"]);
// console.log(jsUser[mySym]);


jsUser.email = "vividh@chatgpt.com"
// Object.freeze(jsUser)
jsUser.email = "vividh@msword.com"

// console.log(jsUser);

jsUser.greeting = function(){
    console.log("Hello js user");
}

jsUser.greetingTwo = function(){
    console.log(`hello js user, ${this.name}`)
}
console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());













