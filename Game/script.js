const startBtn = document.querySelector('.start')
const screens = document.querySelectorAll('.screen')
const timeList = document.querySelector('.time-list')
const timeEl = document.querySelector('#time')
const board = document.querySelector('#board')
const colors = ['lightgreen', 'blueviolet', 'fuchsia']

startBtn.addEventListener('click', (event) => {
    event.preventDefault()
    screens[0].classList.add('up')
})

let time = 0
let score = 0



timeList.addEventListener('click', event => {
    if (event.target.classList.contains('time-btn')){
        time = parseInt(event.target.getAttribute('data-time'))
    }
    screens[1].classList.add('up')
    startGame()
})

board.addEventListener('click', event => {
    if (event.target.classList.contains('circle')){
        score++
        event.target.remove()
        createRandomCircle()
    }
})

function startGame() {
    setTime(time)
    setInterval(decreaseTime, 1000)
    createRandomCircle()
}

function decreaseTime(){
    if (time === 0){
        finishGame()
    } else {
        let current = --time;
        setTime(current)
        if (current < 10){
        timeEl.innerHTML = `00:0${current}`
    }
    }
}

function setTime(value){
    timeEl.innerHTML = `00:${value}`
}

function finishGame(){
    board.innerHTML = `<h1>Счет: <span class="primary">${score}</span></h1>`
    timeEl.parentNode.classList.add('hide')
}

function createRandomCircle(){
    const circle = document.createElement('div')
    circle.classList.add('circle')
    circle.style.backgroundColor = getRandomColor()
    const size = getRandomNumber(15, 60)
    const {width, height} = board.getBoundingClientRect()
    const x = getRandomNumber(0, (width - size))
    const y = getRandomNumber(0, (height - size))

    circle.style.width = `${size}px`
    circle.style.height = `${size}px`
    circle.style.top = `${y}px`
    circle.style.left = `${x}px`
    
    board.append(circle)
}

function getRandomNumber(min, max){
    return Math.round(Math.random() * (max - min) + min)
}

function getRandomColor(){
    const index = Math.floor(Math.random() * colors.length)
    return colors[index]
}