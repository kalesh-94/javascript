let name = "kalesh"
const RollNo = 31
let lastName = "patil"
lastName = "mahajan"
name = "kalesh"

let PRN; /// <---------PRN is not defined

lastName = "chudhari" // <------ overwrite on lastName with double variable declaration
// RollNo = 32
console.log(name, lastName, RollNo)
console.table([name, RollNo, lastName, PRN])


///note: dont prefer to use var 
