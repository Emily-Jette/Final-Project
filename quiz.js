let score = 0
let capital = null
const multiplier = 29
const multiplicand = 3
let trueProduct = 0
let userProduct = 0
let computer = null
let movie = null

// question one: get button id and if a or b wrong if c correct
document.getElementById('answer-a').addEventListener('click', wrong)
document.getElementById('answer-b').addEventListener('click', wrong)
document.getElementById('answer-c').addEventListener('click', correct)

// question two: get button id so that can check the capital of turkey is correct
document.getElementById('geography').addEventListener('click', questionTwo)

// question three: gets id from button so function can do math and check if user is correct
document.getElementById('math').addEventListener('click', questionThree)

// question four: gets id of button and checks if it was clicked. if answer a or c wrong and if answer b correct
document.getElementById('music-1').addEventListener('click', wrong)
document.getElementById('music-2').addEventListener('click', correct)
document.getElementById('music-3').addEventListener('click', wrong)

// question five: gets id of button so that function can check if the user's answer is correct
document.getElementById('history').addEventListener('click', questionFive)

// question six: gets id of button so that function can check if the movie is correct
document.getElementById('pop-culture').addEventListener('click', questionSix)

// when the user finishes the quiz they press a button which activates the endGame function
document.getElementById('finish').addEventListener('click', endGame)

// This is to help the user out, so it waits for the user to click the hint button
document.getElementById('help').addEventListener('click', hints)

// this is what happens when the user gets the answer correct
function correct () {
  score = score + 1
  alert('Right on!')
}

// this is what happens when the user gets the answer wrong
function wrong () {
  alert('Better luck next time')
}

// checks question two. first, stores text in the input box into variable. then, checks to see if the answer is correct
function questionTwo () {
  capital = document.getElementById('answer-2').value
  if (capital === 'Ankara') {
    correct()
  } else {
    wrong()
  }
}

// multiplies 29 by 3 . gets the user's answer and turns it into an integer then checks if the two products are the same.
function questionThree () {
  trueProduct = multiplier * multiplicand
  userProduct = document.getElementById('answer-3').value
  userProduct = parseInt(userProduct)
  if (userProduct === trueProduct) {
    correct()
  } else {
    wrong()
  }
}

// puts the user's answer into a variable then checks if the answer is Mark 2 or Mark II
function questionFive () {
  computer = document.getElementById('answer-5').value
  if (computer === 'Mark 2' || computer === 'Mark II' || computer === 'Harvard Mark 2' || computer === 'Harvard Mark II') {
    correct()
  } else {
    wrong()
  }
}

// puts user's answer into a variable then checks if it is correct
function questionSix () {
  movie = document.getElementById('answer-6').value
  if (movie === 'Paddington 2') {
    correct()
  } else {
    wrong()
  }
}

// displays a message depending on what score the user got
function endGame () {
  if (score === 6) {
    alert('Oh my, we’ve got a trivia genius on our hands! You got 100/100. Good job!')
  } else if (score === 5 || score === 4 || score === 3 || score === 2 || score === 1) {
    alert('You were so close.You got ' + score + '/6. Try again to see if you can beat your score!')
  } else {
    alert('You got 0/100. Better luck next time.  Try again to see if you can beat your score!')
  }
}

// Gives a hint for each one of the questions in the form of an alert
function hints () {
  alert('1. He was in One Direction.')
  alert('2. The capital is not Istanbul, it starts with an A.')
  alert('3. What is 3x9 and what is 3x2?')
  alert('4. She has won over 10.')
  alert('5. Grace Hopper worked with this computer at Harvard Univeristy.')
  alert('6. The protagonist of this film loves marmalade.')
}
