const upBtn = document.querySelector('.up-button')
const downBtn = document.querySelector('.down-button')
const mainSlide = document.querySelector('.main-slide')
const slidesCount = mainSlide.querySelectorAll('div').length
const sideBar = document.querySelector('.sidebar')
const container = document.querySelector('.container')
const height = container.clientHeight

let slideIndex = 0

sideBar.style.top = `-${(slidesCount - 1) * 100}vh`

upBtn.addEventListener('click', () => {
    changeSlide('up')
})
downBtn.addEventListener('click', () => {
    changeSlide('down')
})

function changeSlide(direction){
    if (direction === 'up'){
        slideIndex++
        if (slideIndex === slidesCount){
            slideIndex = 0
        }
    } else if (direction === 'down'){
        slideIndex--
        if (slideIndex < 0){
            slideIndex = slidesCount - 1
        }
    }
    mainSlide.style.transform = `translateY(-${slideIndex * height}px)`
    sideBar.style.transform = `translateY(${slideIndex * height}px)`
}