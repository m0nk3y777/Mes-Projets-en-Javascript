class Ennemy{
    constructor(xPos, yPos){
        this.position = [xPos,yPos]
        this.speedX = 2
        this.speedY = 2
        this.health = 100
        this.element = document.createElement("div")
        this.element.classList.add("ennemySprite")
        map.appendChild(this.element)
        this.direction = "face"
    }

    spawnPosition(){
        this.element.style.left = this.position[0] + "px"
        this.element.style.bottom = this.position[1] + "px"
    }

    ennemyMouv(){}
}