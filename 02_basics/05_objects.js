//singleton 

// const tinderUser = new Object();     //=> singleton object  

const tinderUser = {}      //=> non singleton object 
tinderUser.id = "123abcd"
tinderUser.name ="sam"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
      email:"some@gmail.com",
      fullname:{
        userfullname:{
            firstname :"vividh",
            lastname:"rajbhar"
        }
      }
}
// console.log(regularUser.fullname.userfullname.firstname);


const obj1 = {1:"a", 2 : "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5:"a", 6:"b"}

// const obj3 = {obj1 , obj2}
// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 ={...obj1, ...obj2, ...obj4}
// console.log(obj3);


const users = [
    {
        id : 1,
        email: "v@gmail.com"
    },
    {
        id : 1,
        email: "v@gmail.com"
    },
    {
        id : 1,
        email: "v@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));



const course = {
    coursename : "js in hindi ",
    price : "999",
    courseInstructor : "vividh",

}

// course.courseInstructor 

const {courseInstructor: instructor} = course
// console.log(courseinstructor);
console.log(instructor);


// {
//     "name": "vividh",
//     "courseName": "react in hindi",
//     "price": "free",
// }

[
    {},
    {},
    {}
]



