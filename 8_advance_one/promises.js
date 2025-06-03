// const PromiseOne = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log("promise 1 done, database connected successfully with 3sec");
//         resolve()
//     },3000)
// })

// PromiseOne.then(function(){
//     console.log("promise 1 resolved by then");
    
// })




// new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log("promise 2 is done");
//         resolve()
//     },4000)
// }).then(function(){
//     console.log("resolve 2 done");
    
// })






// /////using data passing in resolve

// const PromiseThree = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         resolve({name:"Kalesh", number:"7559166455"}) ////////----------------> object pass kartat mostly
//     },2000)
// })

// PromiseThree.then(function(user){
//     console.log("data is comsumed", user)
// })




// const PromiseFour = new Promise((resolve, reject)=>{
//     setTimeout(function(){
//         console.log("promise 4 by arrow function");
        
//     },1000)
// }).then(function(){
//     console.log("resolved 4");
    
// })


const PromiseFive = new Promise((resolve, reject)=>{
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username:"Rajas", Mail:"rajasmail.com"});
        }
        else{
            reject("Something went Wrong , promise rejected")
        }
    },1000)
})

PromiseFive.then(function(user){  //////////////====> chaining this is very important for database connection
    console.log(user);
    return user.username
})
.then(function(username){
    console.log(username);
})
.catch(function(error){
    console.log(error);
    
})
.finally(()=> console.log("Finally block is executed after then and catch")
)



/////////-----> aysnc await used instead of then catch

const PromiseSix = new Promise((resolve, reject)=>{
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username:"JS", Mail:"rajasmail.com"});
        }
        else{
            reject("JS went Wrong , promise rejected")
        }
    },1000)
})

async function comsumeProSix() {
  try {
    const response = await PromiseSix;
    console.log(response);
  } catch (error) {
    console.log(error);
    
  }
}

comsumeProSix()


async function getAluser() {
   try
    

}

getAluser()
