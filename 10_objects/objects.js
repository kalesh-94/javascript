console.log(Math.PI);
Math.PI = 5
const descriptor = Object.getOwnPropertyDescriptor(Math, "PI")
console.log(descriptor);





const user = {
    name:'kalesh',
    id:1331,
    party:"yes"
}

for (const [key,value] of Object.entries(user)) {
    console.log(`${key} and ${value}`);
}


Object.defineProperty(user, "name", {
    writable:false,
    enumerable:false,

})

console.log(Object.getOwnPropertyDescriptor(user, "name"));

for (const [key,value] of Object.entries(user)) {     /////------->
// iterable on name will not work , only id and party will iterable
    console.log(`${key} and ${value}`);
}