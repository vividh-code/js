const user ={
    username: "vividh",
    price : 888,

    welcomeMessage : function(){
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }
}

// user.welcomeMessage()
// user.username= "sam"
// user.welcomeMessage()

// console.log(this);


// function chai(){
//     let username ="vividh"
//     console.log(this.username);
// }


// chai()



const chai = () => {

    let username ="vividh"
    console.log(this);

}

// chai()

// const addTwo= (num1, num2) =>{
//     return num1+ num2
// }

// console.log (addTwo(2,4));

// const addTwo= (num1, num2) => num1+ num2
// const addTwo= (num1, num2) => (num1+ num2)

const addTwo= (num1, num2) => ({username: "vividh"})  //object return 



console.log (addTwo(2,4));













