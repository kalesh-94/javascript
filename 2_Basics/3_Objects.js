/// there are two methods to declare--->
// 1. object literals -->> obje = {}
//2. contructor method ----> object.create-----> singleton forms

const mysym = Symbol("This is Symbol")
ion = {
    name : "kalesh",
    roll : 31,
    prn : 221107031,
    [mysym] : "This is Symbol",
    users : ["kalesh", "Aai"]

}

// console.log(ion["name"]) //// use this instead of *******
// console.log(ion.name)   ////>>>>> this 
// // console.log(ion["[mysym]"])
// // console.log(typeof ion["mysym"])

// console.log(ion[mysym])
// console.log(typeof [mysym])


// Object.freeze(ion) /////this is freez after this we cant do changes in object
// console.log(ion)

// ion.om = "ommahajan"
// console.log(ion);


// adding function into object--------------->>>>
ion.greeting = function(){
    console.log(`this is Function, and here is my ${this.name} name`);
    
}

console.log(ion);

console.log(ion.greeting);

