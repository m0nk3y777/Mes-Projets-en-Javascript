class Personnage {
    constructor(xPos, yPos){
        this.position = [xPos,yPos]
        this.speedX = 1
        this.speedY = 1
        this.health = 100
        this.element = document.createElement("div")
        this.element.classList.add("sprite")
        this.element.style.backgroundImage = "url('src/ToguFace.png')"
        map.appendChild(this.element)
    }
    spawnPosition(){
        this.element.style.left = this.position[0] + "px"
        this.element.style.bottom = this.position[1] + "px"
    }

    mouvPersonnage(){
            if (direction.Bas){
                this.position[1] -= this.speedY
                this.element.style.backgroundImage = "url('src/ToguFace.png')"
                console.log("Deplacement vers le bas")
            } else if (direction.Haut){
                this.position[1] += this.speedY
                console.log("Deplacement vers le haut")
                this.element.style.backgroundImage = "url('src/ToguBack.png')"
            }else if (direction.Droite){
                this.position[0] += this.speedX
                this.element.style.backgroundImage = "url('src/ToguRight.png')"
                console.log("Deplacement vers la droite")
            }else if (direction.Gauche){
                this.position[0] -= this.speedX
                this.element.style.backgroundImage = "url('src/ToguLeft.png')"
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

        isNear = false
        
        rocks.forEach(rock => {
            if (this.position[0] + playerWidth > rock.position[0]
                && this.position[0] < rock.position[0] + RockWidth
                && this.position[1] + playerHeight > rock.position[1]
                && this.position[1] < rock.position[1] + RockHeight) {

                const superpoX = Math.min(this.position[0] + playerWidth, rock.position[0] + RockWidth) - Math.max(this.position[0], rock.position[0])
                const superpoY = Math.min(this.position[1] + playerHeight, rock.position[1] + RockHeight) - Math.max(this.position[1], rock.position[1])

                if (superpoX < superpoY) {
                    if (this.position[0] > rock.position[0]) {
                        this.position[0] = rock.position[0] + RockWidth
                    } else {
                        this.position[0] = rock.position[0] - playerWidth
                    }
                } else {
                    if (this.position[1] > rock.position[1]) {
                        this.position[1] = rock.position[1] + RockHeight
                    } else {
                        this.position[1] = rock.position[1] - playerHeight
                    }
                }
            }

            if( rock.position[0] - (this.position[0] + playerWidth) < 5 &&  
                this.position[0] - (rock.position[0] + RockWidth) < 5 &&  
                this.position[1] - (rock.position[1] + RockHeight) < 5 &&
                rock.position[1] - (this.position[1] + playerHeight) < 5){
                    isNear = true
                    console.log("MINABLE")
                }
        });   
    }


}
