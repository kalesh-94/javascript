///using class


// class User {

//     constructor (name, mail,pass) {
//         this.name= name
//         this.mail= mail
//         this.pass= pass
        
//     }

//     emcryptpass(){
//         return `${this.pass}@abs`
//     }
//     chnagename(){
//         return `${this.name.toUpperCase()}`
//     }
    
// }

// const user1 = new User("Tony", "tony@mail.com", "ironh123")

// console.log(user1.emcryptpass());
// console.log(user1.chnagename());


//behind the scene what happend ?

function User(name, mail,pass){
    this.name= name
    this.mail= mail
    this.pass= pass

}


User.prototype.emcryptpass = function(){
      return `${this.pass}@abs`

}
User.prototype.changename = function(){
      return `${this.name.toUpperCase()}`

}

let user1 = new User("Bruce", "banner@mail.com","hulk0l")

console.log(user1.emcryptpass());
console.log(user1.changename());

