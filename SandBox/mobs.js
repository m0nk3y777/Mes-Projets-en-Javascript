class Ennemy{
    constructor(xPos, yPos){
        this.position = [xPos,yPos]
        this.speedX = 0.5
        this.speedY = 0.5
        this.health = 100
        this.element = document.createElement("div")
        this.element.classList.add("ennemySprite")
        map.appendChild(this.element)
    }

    spawnPosition(){
        this.element.style.left = this.position[0] + "px"
        this.element.style.bottom = this.position[1] + "px"
    }

    ennemyMouv(){
        distance2player = Math.sqrt((this.position[0] - player.position[0])**2 + (this.position[1]-player.position[1])**2)
        // console.log("Le joueur est éloigné de" + distance2player)
        if (distance2player < RANGE){
            this.position[0] += this.speedX * Math.sign(player.position[0] - this.position[0])
            this.position[1] += this.speedY * Math.sign(player.position[1] - this.position[1])
        }
    }
}