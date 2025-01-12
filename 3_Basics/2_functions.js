// function loginusers (username){
//     return `${username} this user just logined`
// }

// const user = loginusers("kalesh")
// console.log(user);


// function loginusers (username){
//     return `${username} this user just logined`
// }

// console.log(loginusers("kalesh"))





// function loginusers (username){
//     if(!username || username===undefined){
//         console.log("please enter a username");
//         return
//     }
//     return `${username} this user just logined`
// }

// console.log(loginusers())




// function loginusers (username='sam'){
//     if(!username || username===undefined){
//         console.log("please enter a username");
//         return
//     }
//     return `${username} this user just logined`
// }

// console.log(loginusers())



function loginusers (username='sam'){
    if(!username || username===undefined){
        console.log("please enter a username");
        return
    }
    return `${username} this user just logined`
}

console.log(loginusers("kalesh"))