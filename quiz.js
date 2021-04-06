let score = 0
let capital = null

// this is what happens when the user gets the answer correct
function correct() {
  score = score + 1
  alert('Right on! You have ' + score + ' point(s)')
}
// this is what happens when the user gets the answer wrong
function wrong() {
  alert('Better luck next time')
}

// question one: get button id and if a or b wrong if c correct
document.getElementById('answerA').addEventListener('click', wrong)
document.getElementById('answerB').addEventListener('click', wrong)
document.getElementById('answerC').addEventListener('click', correct)

// question two: get button id so that can check the capital of turkey is correct
document.getElementById('geography').addEventListener('click', questionTwo)

// checks question two. first, stores text in the input box into variable. then, checks to see if the answer is correct
function questionTwo () {
  capital = document.getElementById('answer2').value
  if( capital === 'Ankara'){
    correct()
  } else {
    wrong()
  }
}
