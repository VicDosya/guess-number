/*HTML resources */
const guessInput = document.querySelector('#guessInput');
const submitButton = document.querySelector('#submitButton');
const numUsed = document.querySelector('#numUsed');
const numAttempt = document.querySelector('#numAttempt');
const resetButton = document.querySelector('#resetButton');
const numCheck = document.querySelector('#numCheck');

numAttempt.innerText = 10;


/* Random Number Creator*/
let guessRandomNumber = randomNumber();
/*console.log(guessRandomNumber);*/ 
function randomNumber() {
    return Math.floor(Math.random() * 100);
};
window.onload = randomNumber();

/* Make a function the stores the guess numbers */
const storeNum = function (guessNumber) {
    guessNumber = Number(guessInput.value);
    console.log(guessNumber);
    if (guessNumber > guessRandomNumber) {
        numCheck.textContent = "Your guess is ABOVE the number.";
        console.log("Above");
    }
    else if (guessNumber < guessRandomNumber) {
        numCheck.textContent = "Your guess is BELOW the number.";
        console.log("Below");
    }
    else {
        numCheck.textContent = " ";
        console.log("Perfect");
    }

    /* Winner */
    if (guessNumber === guessRandomNumber) {
        console.log("Winner!");
        numCheck.textContent = " ";
        numAttempt.textContent = "WINNER!";
        submitButton.disabled = true;
    }
};

/*Make a function that stores into numUsed const*/
const addNumbers = function () {
    numUsed.textContent += "  " + guessInput.value;
};

/* Decrease the remaining attempts function */
function decreaseAttempts() {
    if (numAttempt.innerText > 0) {
        numAttempt.innerText--;
    }
    else {
        submitButton.disabled = true;
        resetButton.disabled = false;
        console.log("Game Over");  /*Fire the reset function here*/
        numCheck.textContent = " ";
    }
};

/* Reset input data function */
const resetInput = function () {
    guessInput.value = guessInput.innerText;
};

/* Reset the game function */
const resetGame = function () {
    window.location.reload();
};


/* Make a button click able to boot the storeNum & addNumbers function */
submitButton.addEventListener('click', storeNum);
submitButton.addEventListener('click', addNumbers);
submitButton.addEventListener('click', decreaseAttempts);
submitButton.addEventListener('click', resetInput);
resetButton.addEventListener('click', resetGame);