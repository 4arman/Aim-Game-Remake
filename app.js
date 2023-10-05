const gameNameText = document.querySelector('.name-start-block')
const startBtnBlock = document.querySelector('.start-btn')
const startBtn = document.querySelector('.st-button')
const secondBlock = document.querySelector('.second-block')
const timeBtn10 = document.querySelector('.time-select-1')
const timeBtn20 = document.querySelector('.time-select-2')
const timeBtn30 = document.querySelector('.time-select-3')
const timeBtn60 = document.querySelector('.time-select-4')
const aimBlock = document.querySelector('.third-block') 
const time = document.querySelector('.time-num')
const score = document.querySelector('.score-num')
const element = document.querySelector('.element')
const elementBlock = document.querySelector('.element-block')
const fourthBlock = document.querySelector('.fourth-block')
const resBtn = document.querySelector('.restart-button')
const result = document.querySelector('.your-score-num')
const colorBlock = document.querySelector('.color-select-block')
const colorSelect1 = document.querySelector('#col-sel-1')
const colorSelect2 = document.querySelector('#col-sel-2')
const colorSelect3 = document.querySelector('#col-sel-3')
const colorSelect4 = document.querySelector('#col-sel-4')

startBtn.addEventListener('click', () => {
    gameNameText.style = `
    margin: 0;
    transform: translate(0, -1000px);
    opacity: 0`
    startBtn.style = `
    box-shadow: 0px 10px 4px #222;
    color: #222;
    border-color: #222;
    text-shadow: none;`
    colorBlock.style = `
    transform: translate(0, -450px);
    transition: 3000ms;
    opacity: 1`
})

function setBallColor(btn) {
    btn.onclick = () => {
        colorBlock.style = `
        transform: translate(0, -1000px);
        transition: 2600ms;
        opacity: 0`
        secondBlock.style = `
        transform: translate(0, -280px);
        transition: 3000ms;
        opacity: 1`
        btn == colorSelect2 ? element.style = 'background-color: #ff0000;' : false
        btn == colorSelect3 ? element.style = 'background-color: #00ff04;' : false
        btn == colorSelect4 ? element.style = 'background-color: #ffc400;' : false
    }
}

setBallColor(colorSelect1)
setBallColor(colorSelect2)
setBallColor(colorSelect3)
setBallColor(colorSelect4)

function randomNumber(min,max) {
    return Math.random() * (max - min) + min
}

let num = randomNumber(10, 450)

function setGameTime(btn, timing) {
    btn.addEventListener('click', () => {
    secondBlock.style = `display: none;`
    colorBlock.style = `display: none`
    aimBlock.style = `
    display: flex;
    justify-content: center;
    align-items: center;`  
    time.textContent = timing

    const interval = setInterval(() => {
        time.textContent -= 1
        if(time.textContent == 0) {
            clearInterval(interval)
            aimBlock.style = `
            display: none;`
            fourthBlock.style = `
            display: block`
            result.textContent = score.textContent
            resBtn.style = 'display: flex'
        }
    },1000)

    elementBlock.style = `
    top: ${num}px;
    bottom: ${num}px;
    left: ${num}px;
    right: ${num}px`
    })

    element.onclick = () => {
        function randomNumber(min,max) {
            return Math.random() * (max - min) + min
        }

        let rannum = randomNumber(80,450)

        function rdNumber(min,max) {
            return Math.random() * (max - min) + min
        }

        let ran = rdNumber(80,450)

        score.textContent++ 

        elementBlock.style = `
        top: ${rannum}px;
        bottom: ${rannum}px;
        left: ${ran}px;
        right: ${ran}px`
        }
}

setGameTime(timeBtn10, 10)
setGameTime(timeBtn20, 20)
setGameTime(timeBtn30, 30)
setGameTime(timeBtn60, 60)

resBtn.addEventListener('click', () => {
    score.textContent = 0
    fourthBlock.style = 'display: none'
    colorBlock.style = `
    transform: translate(0, -300px);
    display: flex;
    opacity: 1;
    transition: 0;`
    function colorClick(select) {
        select.addEventListener('click', () => colorBlock.style = 'display: none;')
    }
    colorClick(colorSelect1)
    colorClick(colorSelect2)
    colorClick(colorSelect3)
    colorClick(colorSelect4)
})
