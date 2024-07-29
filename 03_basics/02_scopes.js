let a =400

if(true){
    let a = 10;
    const b = 20;
    // console.log("INNER: ", a);
   
}

// console.log(a);
// console.log(b);


function one(){
    const username ="vividh"

    function two(){
        const website = "youtube"
        // console.log(username);
        
    }
    // console.log(website);
    two()
}
   one()

if (true){
    const username ="vividh";
    if (username === "hitesh"){
        const website =" youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);

//++++++++++++++++++ Intresting ++++++++++++++++++++++//


console.log(addone(5));

function  addone(num){
      return  num +1

}


const addtwo = function(num){
    return +2
}

addtwo(5)













