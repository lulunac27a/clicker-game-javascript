const timeSelect = document.getElementById('timeSelect');
const startButton = document.getElementById('startButton');
const clickButton = document.getElementById('clickButton');
const timeLeftText = document.getElementById('timeLeft');
const scoreText = document.getElementById('score');
let timeLeft = 5;
let score = 0;
startButton.addEventListener('click', startGame);
clickButton.addEventListener('click', incrementScore);
timeSelect.addEventListener('change', function () {
    timeLeft = parseInt(this.value);
    timeLeftText.textContent = timeLeft;
});
function startGame() {
    score = 0;
    scoreText.textContent = score;
    timeLeftText.textContent = timeLeft;
    clickButton.disabled = false;
    startButton.disabled = true;
    timeSelect.disabled = true;
    const timer = setInterval(() => {
        timeLeft--;
        timeLeftText.textContent = timeLeft;
        if (timeLeft <= 0) {
            clearInterval(timer);
            endGame();
        }
    }, 1000);
}
function incrementScore() {
    score++;
    scoreText.textContent = score;
}
function endGame() {
    clickButton.disabled = true;
    startButton.disabled = false;
    timeSelect.disabled = false;
}