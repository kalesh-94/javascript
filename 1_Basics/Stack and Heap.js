
///Stack ---> Primitive
let name = "kalesh"
let anothername = name
anothername = "newkalesh"
console.log(name);
console.log(anothername);



/// heap =---> Non primitive
let user1 = {
    email: "kalesh@mail",
    id:"1"
}

let user2 = user1
user2.email= "newkalesh@mail "
console.log(user1.email)
console.log(user2.email)
