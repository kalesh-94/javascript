// const User = new Object()
// User.id = 1
// User.name = "Johny baba"
// User.ismale = false

// console.log(User);
// const RegularUser = {
//     user_name : {
//         fullName: {
//             Firsrt_Name:"kalesh",
//             middle: "uttam",
//             Last : "mahajan"
//         }
//     }
// }
// console.log(RegularUser.user_name?.fullName.Last);




obj1 = {1:"id", 2:"kalesh"} 
obj2 = {3:"id2", 4:"name2"}
// obj3 = {obj1, obj2}
// console.log(obj3); /////__________________.>>>>>>object inside object problem creates hence>>>>>>>>>>>>
obj3 = Object.assign({}, obj1, obj2)
console.log(obj3);
