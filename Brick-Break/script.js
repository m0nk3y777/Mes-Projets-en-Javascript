const grid = document.getElementById("grid")
const score = document.getElementsByClassName("score")
document.addEventListener("keydown",mouv)

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
    console.log(e.key)
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



document.addEventListener("keydown",mouv)
drawBlocks()
spawnUser()
ball.spawn()
ball.mouv()
