const Codingnums = [1,2,4,5,6,7,8,9,21,22,33,44,55,66]

const mynums = Codingnums.filter((num)=>num>5)
                                            .map((num)=>num*10)
                                            .map((num)=>num-1)  
                                            //// this is called as chaining (function chaining)
console.log(mynums);


