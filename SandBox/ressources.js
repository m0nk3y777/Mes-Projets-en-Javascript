class Tree{
    constructor (xPos,yPos){
        this.health = 20
        this.position = [xPos,yPos]
        this.element = document.createElement("div")
        this.element.classList.add("spriteTree")
        map.appendChild(this.element)
        this.element.style.backgroundImage = "url('src/Tree.png')"
    }

    spawnPosition(){
        this.element.style.left = this.position[0] + "px"
        this.element.style.bottom = this.position[1] + "px"
    }
}

class Rock{
    constructor (xPos,yPos){
        
        this.health = 30
        this.position = [xPos,yPos]
        this.element = document.createElement("div")
        this.element.classList.add("spriteRock")
        map.appendChild(this.element)
        this.element.style.backgroundImage = "url('src/Rock.png')"
        this.healthBar = document.createElement("div")
        this.healthBar.classList.add("rock-healthbar-fill")
        this.element.appendChild(this.healthBar)
    }

    spawnPosition(){
        this.element.style.left = this.position[0] + "px"
        this.element.style.bottom = this.position[1] + "px"
    }
}
