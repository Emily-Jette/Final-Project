// gets ids from the buttons so that they can be linked to the other html pages
document.getElementById('quiz').addEventListener('click', nextPage) 
document.getElementById('game').addEventListener('click', newPage)
document.getElementById('home').addEventListener('click', backPage)


// the following code, gives the buttons links, so that when they are clicked they go to the other html pages
function nextPage () {
  window.location = 'https://final-project.emilyjette.repl.co/quiz.html'
}

function newPage () {
  window.location = 'https://final-project.emilyjette.repl.co/game.html'
}

function backPage () {
  window.location = 'https://final-project.emilyjette.repl.co/'
}
