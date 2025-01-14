// IIFE ----> Imidiatly Invoked Function Execution

(function chai(){
    console.log(`Database Connected`);
    
})();  

(() => {
    console.log(`My database`);
    
})();


((name) => {
    console.log(`${name} is the name in parameter passed`);
    
})("kalesh")