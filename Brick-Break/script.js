const grid = document.getElementById("grid")
const scoreDisplay = document.querySelector(".score")
let score = 0
document.addEventListener("keydown",mouv)
let timerId

const userSpawn = [350,10]
let currentPosition = userSpawn
let posX = currentPosition[0]

const user = document.createElement("div")
user.classList.add("user")
grid.appendChild(user)

const ball = new Ball(390, 50)

function spawnUser(){
    user.style.left = currentPosition[0] + "px"
    user.style.bottom = currentPosition[1] + "px"
}

function mouv(e){
    // console.log(e.key)
    switch(e.key){
        case "ArrowLeft":
            if(currentPosition[0] > 0){
                currentPosition[0] -= 10
                spawnUser()
            }
            break

        case "ArrowRight":
            if(currentPosition[0] < boardWidth - 100 ){
                currentPosition[0] += 10
                spawnUser()
            }
            break
    }
}

function checkCollisions(){
    for (let i = 0 ; i< blocks.length ; i++){
        if( ball.position[1] >= blocks[i].bottomLeft[1]-20 &&
            ball.position[1] <= blocks[i].topLeft[1]  &&
            ball.position [0] >= blocks[i].bottomLeft[0] &&
            ball.position [0] <= blocks[i].bottomRight[0]
         ){ 
            const allBlocks = document.querySelectorAll(".block")
            allBlocks[i].classList.remove("block")
            ball.speedY *= -1
            // console.log("COLLISION !!")
            blocks.splice(i, 1)
            score += 10;
            scoreDisplay.innerHTML = String(score)
            break
         }
    }
}

timerId = setInterval(() => ball.mouvBall(), 30)
document.addEventListener("keydown",mouv)
drawBlocks()
spawnUser()
ball.spawn()
ball.mouvBall()

