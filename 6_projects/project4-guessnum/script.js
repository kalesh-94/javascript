let randomnum = parseInt(Math.random() *100 +1)

const submit = document.querySelector("#subt")
const userInput = document.querySelector("#guessField")
const guessSlot = document.querySelector(".guesses")
const remaninig = document.querySelector(".lastResult")
const lowOrHi = document.querySelector(".lowOrHi")
const startOver = document.querySelector(".resultParas")

const p = document.createElement("p")

let prevGuess = []
let numGuess = 1

let playGame = true

if(playGame){
    submit.addEventListener("click", function(e){
        e.preventDefault();
        const guess = parseInt(userInput.value);
        validateGuess(guess);
        console.log(guess);
        
    })
}

function validateGuess(guess) {
    if(isNaN(guess)){
        displaymessage("please enter a valid number")
    }
    else if(guess<1 || guess> 100){
        displaymessage("please enter a number between 1 to 100")
    }
    else{
        prevGuess.push(guess)
        if(numGuess===11){
            DisplayGuess(guess)
            displaymessage(`Game overrr. Random number was ${randomnum}`)
            endGame()
        } else{
            DisplayGuess(guess)
            checkGuess(guess)
        }
    }
    
}

function checkGuess(guess) {
    if(guess === randomnum){
        displaymessage(`You guessd it right`)
        endGame()
    } else if(guess < randomnum){
        displaymessage(`Number is Too loww`)
    } else if(guess > randomnum){
        displaymessage(`Number is too high`)
    }

}

function DisplayGuess(guess){
    userInput.value = " ";
    guessSlot.innerHTML += `${guess}, `;
    numGuess++;
    remaninig.innerHTML =  `${11-numGuess}`;


}
function displaymessage(message){
    lowOrHi.innerHTML =`<h2>${message}</h2>`;


}

function endGame(){
    userInput.value = "";
    userInput.setAttribute("disabled", "");
    p.classList.add("button");
    p.innerHTML = `<h2 id="newGame"> Start New Game</h2>`;
    startOver.appendChild(p);
    playGame = false;
    NewGame();


}
function NewGame(){
    const NewGameButton = document.querySelector("#newGame");
    NewGameButton.addEventListener("click", function(e){
        randomnum = parseInt(Math.random() *100+1);
        prevGuess = [];
        numGuess =1 
        guessSlot.innerHTML = "";
        remaninig.innerHTML = `${11-numGuess}`;
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);
        playGame=true;
    })

}