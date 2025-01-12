///This keyword


const user = {
    name : "kalesh",
    role: "developer",

    website: function() {
        console.log(`${this.name}, you are the user..`);
        // console.log(this);
        

    }
}

// console.log(user.website())
// // user.name = "22kar"
// // console.log(user.website())


// console.log(this); ////_--------globle context is node env thats why we get empty object of env



// function coffee(){
//     console.log(this);
     
// }
// coffee()



///+++++++++++++++++++++++ Arrow fun +++++++++++++++

// const add = (num1, num2) => {
//     return num1 + num2
// }

// console.log(add(1,2))


const newdder = (num1, num2) => (num1+num2)

console.log(newdder(3,5));

