let winCount = 0;
let drawCount = 0;
let loseCount = 0;

function play(playerChoice) {
  const choices = ['rock', 'paper', 'scissors'];
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];

  let result;

  if (playerChoice === computerChoice) {
    result = 'Draw';
    drawCount++;
  } else if (
    (playerChoice === 'rock' && computerChoice === 'scissors') ||
    (playerChoice === 'paper' && computerChoice === 'rock') ||
    (playerChoice === 'scissors' && computerChoice === 'paper')
  ) {
    result = 'Win';
    winCount++;
  } else {
    result = 'Lose';
    loseCount++;
  }

  document.getElementById('win-counter').innerText = winCount;
  document.getElementById('draw-counter').innerText = drawCount;
  document.getElementById('lose-counter').innerText = loseCount;

  document.getElementById('result').innerText = result + '!';
  document.getElementById('result').className = result.toLowerCase();
}
