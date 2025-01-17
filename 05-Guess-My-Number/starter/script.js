'use strict';

/* console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = '💥 Correct Number';

console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;
document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
 */

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // When there is no input
  if (!guess) {
    displayMessage('⚠ No number');
  } else if (guess === secretNumber) {
    displayMessage('💥 Correct Number!');

    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;

      // When guess is wrong
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '🔼 Too high!' : '🔽 Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You lost the game');
    }
  }
});
/*     // When guess is too high
  } else if (guess > secretNumber) {
    if (score < 1) {
      document.querySelector('.message').textContent = 'You lost the game';
    } else {
      document.querySelector('.message').textContent = '🔼 Too high!';
      score--;
      document.querySelector('.score').textContent = score;
    }
    // When guess is too low
  } else if (guess < secretNumber) {
    if (score < 1) {
      document.querySelector('.message').textContent = 'You lost the game';
    } else {
      document.querySelector('.message').textContent = '🔽 Too low!';
      score--;
      document.querySelector('.score').textContent = score;
    }
  }
}); */

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});

/* let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // When there is no input
  if (!guess) {
    document.querySelector('.message').textContent = '⚠ No number';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '💥 Correct Number!';

    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // When guess is too high
  } else if (guess !== secretNumber) {
    if (score < 1) {
      document.querySelector('.message').textContent = 'You lost the game';
    } else {
      document.querySelector('.message').textContent = `${guess > secretnumber ? '🔼 Too high': '🔽 Too low'  }!`;
      score--;
      document.querySelector('.score').textContent = score;
    }
    // When guess is too low
  } else if (guess < secretNumber) {
    if (score < 1) {
      document.querySelector('.message').textContent = 'You lost the game';
    } else {
      document.querySelector('.message').textContent = '🔽 Too low!';
      score--;
      document.querySelector('.score').textContent = score;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
}); */
