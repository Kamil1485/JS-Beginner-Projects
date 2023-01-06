const resultDisplay = document.querySelector('#result')//?boş
const choicesDisplay = document.querySelector('#choices')//boş
const choices = ['rock', 'paper', 'scissors']

const handleClick = (e) => {
  getResults(e.target.innerHTML/*tıklanan buton hangisi rock felan .innerHTML ile butonun textini alıyor yani rock butonun* */, /*bilgisayarın  sectigi bu diziden alıyor direkt*/choices[Math.floor(Math.random() * choices.length)])
}
choices.forEach(choice => {
  const button = document.createElement('button')//!her bir dizi elemanı adında buton olusturdu bu ve altındaki kod 
  button.innerHTML = choice
  button.addEventListener('click', handleClick)
  choicesDisplay.appendChild(button)
})

const getResults = (userChoice, computerChoice) => {
  switch (userChoice + computerChoice) {
    case 'scissorspaper':
    case 'rockscissors':
    case 'paperrock':
      resultDisplay.innerHTML = 'You chose ' + userChoice + ' and the computer chose ' + computerChoice + ' , YOU WIN!'
      break
    case 'paperscissors':
    case 'scissorsrock':
    case 'rockpaper':
      resultDisplay.innerHTML = 'You chose ' + userChoice + ' and the computer chose ' + computerChoice + ' , YOU LOSE!'
      break
    case 'scissorsscissors':
    case 'rockrock':
    case 'paperpaper':
      resultDisplay.innerHTML = 'You chose ' + userChoice + ' and the computer chose ' + computerChoice + ' , ITS A DRAW!'
      break
  }
}
