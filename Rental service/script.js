const locationBtn = document.querySelector('#location')
const locationField = document.querySelector('.search__field-location')
const priceBtn = document.querySelector('#price')
const priceField = document.querySelector('.search__field-price')
const arrowBtnLocation = document.querySelector('#svg__location')
const arrowBtnPrice = document.querySelector('#svg__price')
const spanLocation = document.querySelector('#location>span')
const spanPrice = document.querySelector('#price>span')

locationBtn.addEventListener('click', ()=> {
    locationField.classList.toggle('hidden')
    if (!arrowBtnLocation.classList.contains('open')) {
        arrowBtnLocation.classList.add('open');
        arrowBtnLocation.classList.remove('close')
    } else if (arrowBtnLocation.classList.contains('open')) {
        arrowBtnLocation.classList.add('close')
        arrowBtnLocation.classList.remove('open')
    }
})
priceBtn.addEventListener('click', ()=> {
    priceField.classList.toggle('hidden')
    if (!arrowBtnPrice.classList.contains('open')) {
        arrowBtnPrice.classList.add('open');
        arrowBtnPrice.classList.remove('close')
    } else if (arrowBtnPrice.classList.contains('open')) {
        arrowBtnPrice.classList.add('close')
        arrowBtnPrice.classList.remove('open')
    }
})
locationField.addEventListener('click', (event)=> {
    spanLocation.innerText = event.target.innerText
    arrowBtnLocation.classList.add('close')
    arrowBtnLocation.classList.remove('open')
    locationField.classList.add('hidden')
})
priceField.addEventListener('click', (event)=> {
    spanPrice.innerText = event.target.innerText
    arrowBtnPrice.classList.add('close')
    arrowBtnPrice.classList.remove('open')
    priceField.classList.add('hidden')
})
