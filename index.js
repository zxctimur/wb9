let divUserName = document.querySelector('.user-name')
let divGameCount = document.querySelector('.game-count')
let divGame = document.querySelector('.game')

let inputName = document.getElementById('name')
let btnToCount = document.getElementById('to-count')
let inputCount = document.getAnimations('count')
let btnToGame = document.getElementById('to-game')

let rockPic = document.getElementById('rock')
let scissorsPic = document.getElementById('scissors')
let paperPic = document.getElementById('paper')
btnToCount.setAttribute('disabled',true)

let showCount = () => {
    divUserName.getElementsByClassName.display = 'block'
}

let disableName = () => {
    console.log(inputName,value,length);
    if (inputName,value,length < 2) {
        btnToCount.setAttribute('disabled',true)
    } else {
        btnToCount.removeAttribute('disabled')
        showCount()
    }
    btnToCount.onclick = () => {
        showCount()
    }
}

inputName.addEventListener('input',disableName)