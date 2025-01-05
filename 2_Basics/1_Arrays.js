const arr= [1,2,3,5, "k"]
console.log(typeof arr)
console.log(arr[4])


////Array methods

const myarr = new Array(1,2,3,4,5)
myarr.push(6)
console.log(myarr)
myarr.pop() ////---------> no aurgument just removes the last element   
console.log(myarr)


myarr.unshift(99) /// add the number at start of arr
console.log(myarr)
myarr.shift() 
console.log(myarr)

console.log(myarr.includes(9))