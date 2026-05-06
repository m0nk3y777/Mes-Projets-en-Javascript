class Personnage {
    constructor(xPos, yPos){
        this.position = [xPos,yPos]
        this.speedX = 3
        this.speedY = 3
        this.health = 100
        this.element = document.createElement("div")
        this.element.classList.add("sprite")
        map.appendChild(this.element)
    }
    spawnPosition(){
        this.element.style.left = this.position[0] + "px"
        this.element.style.bottom = this.position[1] + "px"
    }

    mouvPersonnage(){
            if (direction.Bas){
                this.position[1] -= this.speedY
                console.log("Deplacement vers le bas")
            } else if (direction.Haut){
                this.position[1] += this.speedY
                console.log("Deplacement vers le haut")
            }else if (direction.Droite){
                this.position[0] += this.speedX
                console.log("Deplacement vers la droite")
            }else if (direction.Gauche){
                this.position[0] -= this.speedX
                console.log("Deplacement vers la gauche")
            }
        this.checkLimits()
        this.checkCollisions()
        this.spawnPosition()
    }

    checkLimits(){
        if (this.position[0] <= 0){
            console.log("Sortie de map")
            this.position [0] = 0
        }

        if (this.position[0] >= mapWidth - playerWidth ){
            console.log("Sortie de map")
            this.position [0] = mapWidth - playerWidth
        }

        if (this.position[1] >= mapHeight - playerHeight ){
            console.log("Sortie de map")
            this.position [1] = mapHeight - playerHeight
        }

        if (this.position[1] <= 0 ){
            console.log("Sortie de map")
            this.position [1] = 0
        }
    }

    checkCollisions(){
        if (this.position[0] + playerWidth > ennemy.position [0] 
            && this.position[0]  < ennemy.position[0] + EnnemyWidth
            && this.position[1] + playerHeight > ennemy.position[1]
            && this.position[1]< ennemy.position[1] + EnnemyHeight ){
                console.log("COLLISION!!")
                if (this.position[0] - ennemy.position[0] > 0){
                    this.position[0] = ennemy.position[0]+EnnemyWidth
                } else if (this.position[0] - ennemy.position[0] < 0){
                    this.position[0] = ennemy.position[0]-EnnemyWidth
                } 
                if (this.position[1] - ennemy.position[1] > 0){
                    this.position[1] = ennemy.position[1]+EnnemyHeight
                } else if (this.position[1] - ennemy.position[1] < 0){
                    this.position[1] = ennemy.position[1]-EnnemyHeight
                }
        }   
    }
}
