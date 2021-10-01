const placeholders = document.querySelectorAll('.placeholder')
const item = document.querySelector('.item')

placeholders.forEach((placeholder) => {
    placeholder.addEventListener('dragover', dragover)
    placeholder.addEventListener('dragenter', dragenter)
    placeholder.addEventListener('dragleave', dragleave)
    placeholder.addEventListener('drop', dragdrop)
})

item.addEventListener('dragstart', dragstart)
item.addEventListener('dragend', dragend)

function dragstart (event){
    event.target.classList.add('hold')
    setTimeout(() => {
        event.target.classList.add('hide')
    }, 0)

}
function dragend (event){
    event.target.classList.remove('hold', 'hide')
}

function dragover (event){
    event.preventDefault()
}
function dragenter (event){
    event.target.classList.add('hovered')
}
function dragleave (event){
    event.target.classList.remove('hovered')
}
function dragdrop (event){
    event.target.append(item)
    event.target.classList.remove('hovered')
}