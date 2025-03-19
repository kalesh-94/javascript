const myarr = [1,2,3,,4,5,6]

// const total = myarr.reduce( (acc,currval)=>(acc+currval),0)  
//  ======> usefull in shopping total case

// console.log(total);












// const Total = myarr.reduce(function arrtotal(acc,currval){
//     return acc-currval

// },10)

// console.log(Total);









const Total = myarr.reduce(function arrtotal(acc,currval){
    console.log(`acuumulator is: ${acc}, current value is: ${currval}`);
    
    return acc-currval


},0)

console.log(Total);