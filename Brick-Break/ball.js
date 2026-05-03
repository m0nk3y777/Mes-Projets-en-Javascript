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

    mouv(){
        this.position[1] -= this.speedY
    }
}