const timeSelect = document.getElementById("timeSelect"); //time select option
const startButton = document.getElementById("startButton"); //start button
const clickButton = document.getElementById("clickButton"); //click button
const timeLeftText = document.getElementById("timeLeft"); //time left text
const scoreText = document.getElementById("score"); //score text
let timeLeft = 5; //time left in seconds
let score = 0; //score
startButton.addEventListener("click", startGame); //start game when start button is clicked
clickButton.addEventListener("click", incrementScore); //increment score when click button is clicked
timeSelect.addEventListener("change", function () {
    //update time left when time select option is changed
    timeLeft = parseInt(this.value);
    timeLeftText.textContent = timeLeft;
});
function startGame() {
    //start the game
    score = 0; //reset score
    scoreText.textContent = score; //update text
    timeLeftText.textContent = timeLeft;
    clickButton.disabled = false; //enable click button
    startButton.disabled = true; //disable start button
    timeSelect.disabled = true; //disable time select option
    const timer = setInterval(() => {
        //update timer every second
        timeLeft--;
        timeLeftText.textContent = timeLeft;
        if (timeLeft <= 0) {
            //end game when time is up
            clearInterval(timer);
            endGame();
        }
    }, 1000);
}
function incrementScore() {
    //increase score
    score++;
    scoreText.textContent = score; //update text
}
function endGame() {
    //end the game
    clickButton.disabled = true; //disable click button
    startButton.disabled = false; //enable start button
    timeSelect.disabled = false; //enable time select option
}
