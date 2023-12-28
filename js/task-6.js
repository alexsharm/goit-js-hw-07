function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`
}

const inputField = document.querySelector('input')
const btnCreate = document.querySelector('button[data-create]')
const btnDestroy = document.querySelector('button[data-destroy]')
const box = document.querySelector('#boxes')

function createBoxes(amount) {
    for (let i = 1; i <= amount; i++) {
        let someWidth = 30 + i * 10
        let markup = `<div class="small-box" style="background-color: ${getRandomHexColor()}; width: ${someWidth}px; height: ${someWidth}px"></div>`
        box.insertAdjacentHTML('afterbegin', markup)
    }
}

var inputAmount

inputField.addEventListener('input', (event) => {
    inputAmount = event.currentTarget.value
})

btnCreate.addEventListener('click', () => {
    box.innerHTML = ''
    if (1 <= inputAmount && inputAmount <= 100) createBoxes(inputAmount)
    inputField.value = ''
})

btnDestroy.addEventListener('click', () => {
    box.innerHTML = ''
})
