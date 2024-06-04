var randomNumber = Math.floor(Math.random()*10)+1;
var attempts =0;

function checkGuess(){
    var guessInput= document.getElementById('guessInput');
    var guess=Number(guessInput.value);
    var resultMessage= document.getElementById('resultMessage');

    attempts++;
    if (guess===randomNumber){
        resultMessage.textContent="Congratulations! You guessed the number in "+attempts + " attempts.";
        resultMessage.style.color='green';
    }else if(guess> randomNumber){
        resultMessage.textContent='Too high! Try again.';
        resultMessage.style.color='red';
    }else{
        resultMessage.textContent = 'Too low! Try again.';
        resultMessage.style.color ='red';
    }

    guessInput.value ='';
    guessInput.focus();

}