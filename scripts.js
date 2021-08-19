'use strict'
let score = 20
let secretNumber = Math.trunc(Math.random() * 20) + 1
let highscore = 0

const displayMessage = (message) => {
    return (document.querySelector('.message').textContent = message)
}

document.querySelector('.check').addEventListener('click', () => {
    const guess = Number(document.querySelector('.guess').value)

    if (guess === secretNumber) {
        // when player win
        document.querySelector('body').style.backgroundColor = 'green'
        document.querySelector('.number').style.width = ' 30rem'
        document.querySelector('.message').textContent = 'you won!!! yeee'
        document.querySelector('.number').textContent = secretNumber
        if (highscore < score) {
            highscore = score
            document.querySelector('.highscore').textContent = score
        }

        console.log(pevHighScore)
    } else if (!guess && score !== 1) {
        // when there is no numeber
        document.querySelector('.message').textContent = 'no number!'
    } else if (score === 1) {
        // when player lose
        document.querySelector('.message').textContent = 'you lost the game'
    }
    //when score is  wrong
    else if (guess !== secretNumber) {
        document.querySelector('.message').textContent =
            guess < secretNumber
                ? displayMessage('too low!!!')
                : displayMessage('too high!!!')
        score--
        document.querySelector('.score').textContent = score
    }
    document.querySelector('.guess').value = ''
})

document.querySelector('.again').addEventListener('click', () => {
    score = 20

    document.querySelector('body').style.backgroundColor = '#222'
    document.querySelector('.number').style.width = ' 15rem'
    document.querySelector('.score').textContent = 20
    document.querySelector('.guess').value = ''
    document.querySelector('.message').textContent = 'Start guessing...'
    secretNumber = Math.trunc(Math.random() * 20) + 1
    document.querySelector('.number').textContent = '?'
})
