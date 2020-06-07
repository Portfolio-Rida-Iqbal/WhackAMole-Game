let score = 0;

scoreBoard = document.getElementById('score')

const holeList = document.getElementsByClassName('hole')

setInterval ( function () {
    const assignMole = Math.floor(Math.random() * holeList.length)
    holeList[assignMole].classList.toggle('mole')
} ,200)

const game = document.getElementById('whack-a-mole')
game.addEventListener('click', function(event) {
    if(event.target.matches('.mole')){
        score++
        event.target.classList.remove('mole')
        scoreBoard.innerText = score
    }
})