const buttons = document.querySelectorAll(".button")

const body = document.querySelector("body")
const h1 = document.querySelector(".h1")

buttons.forEach(function (button){
    console.log(button);

    button.addEventListener('mousemove', function (e){
        console.log(e);
        console.log(e.target);
        
        if(e.target.id =="red"){
            body.style.backgroundColor = e.target.id
        }
        if(e.target.id =="gray"){
            body.style.backgroundColor = e.target.id
        }
        if(e.target.id =="black"){
            body.style.backgroundColor = e.target.id
            h1.style.color = "white"
        }
        else{
             h1.style.color = "black"
        }
        if(e.target.id =="green"){
            body.style.backgroundColor = e.target.id
        }
    })
    
})
































