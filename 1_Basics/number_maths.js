// const num = 5454545452000000000000000000n
// console.log(typeof(num))

const newnum = new Number(100.6554)
// console.log(typeof newnum)
console.log(newnum)

const n1 = newnum.toString()
console.log(n1.length)
console.log(newnum.toFixed(3))
console.log(newnum.toPrecision(3))  ///------> to make precision value

let a = 100000
console.log(a.toLocaleString())
/////+++++++++++++ Maths ++++++++++++++++++

// console.log(Math)
// console.log(Math.abs(-3))
// console.log(Math.ceil(5.6))
// console.log(Math.floor(1.2))
// console.log(Math.min(11,2,5,6))
// console.log(Math.max(-1,3,66,3333))


// console.log(Math.random())
console.log((Math.random()*10) +1)

///_-----> to give radom values between the given range from 10 to 20
let min = 10
let max= 20
console.log(Math.floor(Math.random() * (max - min +1) + min))
