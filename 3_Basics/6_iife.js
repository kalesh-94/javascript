// IIFE ----> Imidiatly Invoked Function Execution
/// its prevents function from global pollution of delcaration
////
(function chai(){
    console.log(`Database Connected`);
    
})();  

(() => {
    console.log(`My database`);

    
})();


((name) => {
    console.log(`${name} is the name in parameter passed`);
    
})("kalesh")



