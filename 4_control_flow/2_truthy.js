// false values
// false, 0, -0, 0n, "", null, undefined , NAN



// Truthy values 
// "0", "false", " ", [], {}, function(){}


////____________________Nullish Coleasing operator ------> ??

val = 5 ?? 10

console.log(val)


val1 = null ?? 10
val2 = undefined ?? 10
val3 = undefined ?? 10 ?? 20
console.log(val1)
console.log(val2)
console.log(val3)
