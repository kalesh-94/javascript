// data = {
//     name:"kalesh",
//     num:75591656,
//     pass:"paass11",
//     getuser: function(){
//         console.log("you get all the users");
//         console.log(this);
        
        
//     }
// }

// console.log(data.getuser());



function users (username, roll, isloggedin)
 {  this.username = username
   this.roll = roll
  this.isloggedin = isloggedin
  return this

 }

 const user1 = new users("kalesh",31, "yes") 
 const user2 = new users("hitesh",34, "NO")  ///////without "new" its overwrite the data

 console.log(user1.constructor); /////-----> 
//  console.log(user2);
