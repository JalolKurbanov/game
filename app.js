let input = document.querySelector('.input'),
    btn = document.querySelector('.btn'),
    timeOut = document.querySelector('.time'),
    gameBlock = document.querySelector('.game__block'),
    gameTime = 0,
    score = 0,
    interval = 0;
    
btn.addEventListener('click', (event) => {
    event.preventDefault()
    if(input.value > 4) {
        gameTime = input.value
        input.value = ''
        score = 0
        clearInterval(interval)
        start()
        let result = document.querySelector('.result')
        if(result) {
            result.style.display = 'none'
        }
    }
})

gameBlock.addEventListener('click', (event) => {
    if(event.target.classList.contains('active')||event.target.classList.contains('active-c')||event.target.classList.contains('active-tr')) {
        score++
        event.target.remove()
        createBall()
    }
})



function start() {
    timeOut.innerHTML = gameTime
    interval = setInterval(() => {
        decreaseTime()
    }, 1000);
    createBall()
    btn.disabled = true
}

function decreaseTime() {
    if(gameTime == 0) {
        endGame()
    }else {
        let currentTime = --gameTime
        timeOut.innerHTML = currentTime
    }
}

function endGame() {
    gameBlock.innerHTML = `<h2 class="result">Вы набрали: ${score} очков</h2>`
    btn.disabled = false
}

function createBall() {
    let ball = document.createElement('div')
    ball.classList.add(randomFigure())
    let size = Math.round(Math.random()*(100-20)+20)
    let coor = gameBlock.getBoundingClientRect()
    let x = random(0, coor.width - size)
    let y = random(0, coor.height - size)
    
    ball.style.width = size + 'px'
    ball.style.height = size + 'px'
    ball.style.top = y + 'px'
    ball.style.left = x + 'px'
    ball.style.background = 'red';
    
    gameBlock.append(ball)
    
}

function random(min,max) {
    return Math.floor(Math.random() * (max + 1 - min) + min)
}

function randomFigure(){
    let i = Math.floor(Math.random()*(4-1)+1);
    if(i==1){
        return 'active'
    } else if(i==2){
        return 'active-c'
    }else{
        return 'active-tr'
    }
}
function randomColor(){
    console.log(`rgb(${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)})`);
    return `rgb(Math.floor(${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)})`
    
}