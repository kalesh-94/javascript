const form = document.querySelector("form")

form.addEventListener("submit", function(e){
    e.preventDefault();
    const height =  parseInt(document.querySelector("#height").value);
    const weight =  parseInt(document.querySelector("#weight").value);
    const result = document.querySelector(".result");
    const status = document.querySelector(".status");
    result.innerHTML = "";
    status.innerHTML = "";

    if(height == "" || isNaN(height) || height < 0){
        
        result.innerHTML  = "Enter the valid Height";
      
    } else if(weight == "" || isNaN(weight) || weight < 0){
    
        result.innerHTML  = "Enter the valid Weight"
        
    }
    else {
        const bmi = parseFloat((weight / ((height**2) / 10000)).toFixed(2))
        result.innerHTML = `<span>${bmi}</span>`
        if (bmi < 18.5) {
            status.innerHTML = "Status: Underweight";
        } 
        else if (bmi >= 18.5 && bmi <= 24.9) {
            status.innerHTML = "Status: Normal Weight";
        } 
        else if (bmi >= 25 && bmi <= 29.9) {
            status.innerHTML = "Status: Overweight";
        } 
        else if (bmi >= 30) {
            status.innerHTML = "Status: Obese";
        }

    }
});








