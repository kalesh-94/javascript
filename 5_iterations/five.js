// /callback

function sum(a,b){
    return a+b
}

const calculator = (a,b,sumof)=>(sumof(a,b))


console.log(calculator(5,10,sum));






// function sum(a, b) {
//     return a + b;
// }

// const calculator = (a, b, sumof) => {
//     return sumof(a, b);  // Call the passed function with a and b
// }

// console.log(calculator(5, 10, sum)); // Output: 15



