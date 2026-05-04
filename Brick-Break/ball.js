class Ball {
    constructor(xPos, yPos){
        this.position = [xPos, yPos]
        this.speedX = 2
        this.speedY = 2
        this.element = document.createElement("div")
        this.element.classList.add("ball")
        grid.appendChild(this.element)
    }

    spawn(){
        this.element.style.left = this.position[0] + "px"
        this.element.style.bottom = this.position[1] + "px"
    }

    mouvBall(){
    ball.position[1] -= this.speedY
    ball.position[0] += this.speedX

    if(ball.position[1] <= currentPosition[1] + 18 && 
        this.speedY > 0 &&
        ball.position [0] >= currentPosition[0] &&
        ball.position[0] <= currentPosition[0] + blockWidth ){
        this.speedY *= -1
    }

    if (ball.position[1] >= boardHeight - 20){
        this.speedY *= -1
    }

    if (ball.position[0] >= boardWidth - 20){
        this.speedX *= -1
    } 

    if (ball.position[0] < 0){
        this.speedX *= -1
    } 

    if(ball.position[1] <= 0){
        clearInterval(timerId)
        scoreDisplay.innerHTML = "YOU LOOSE !"
        grid.style.border = "solid 1px red"
        document.removeEventListener("keydown", mouv)
        return
    }

    if(blocks.length === 0){
        clearInterval(timerId)
        scoreDisplay.innerHTML = "YOU WIN !"
        document.removeEventListener("keydown", mouv)
        return
    }


    checkCollisions()
    ball.spawn()
}


    
}

