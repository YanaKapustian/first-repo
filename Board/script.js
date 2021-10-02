const board = document.querySelector('#board')
const SQUARES_NUMBER = 420
const colors = ['#ffb8f7', '#c88fff', '#ff99df', '#ffa6a3', '#ffa594']

for (let i = 0; i < SQUARES_NUMBER; i++){
    const square = document.createElement('div')
    square.classList.add('square')
    board.append(square)

    square.addEventListener('mouseover', () => {
        setColor(square) 
    })
    square.addEventListener('mouseleave', () => {
        removeColor(square) 
    })
}

function setColor(element) {
    const color = getRandomColor()
    element.style.backgroundColor = color;
    element.style.boxShadow = `0 0 10px ${color}`
}
function removeColor(element) {
    element.style.backgroundColor = '#1d1d1d'
    element.style.boxShadow = `0 0 2px #111`
}

function getRandomColor(){
    const index = Math.floor(Math.random() * colors.length)
    return colors[index]
}