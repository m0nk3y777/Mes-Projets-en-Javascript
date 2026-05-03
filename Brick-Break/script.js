const grid = document.getElementById("grid")
const score = document.getElementsByClassName("score")

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

function mouv(){
    addEventListener("keydown", (e) => {
        if (e.key === "ArrowLeft" && posX > 0){
            posX -= 10
        } else if (e.key === "ArrowRight" && posX < boardWidth - blockWidth ){
            posX += 10
        }
        user.style.left = posX + "px"
    })
}

mouv()
drawBlocks()
spawnUser()
ball.spawn()
ball.mouv()
