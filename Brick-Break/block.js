const blockWidth = 100
const blockHeight = 20
const boardWidth = 700
const boardHeight = 400

class Block {
    constructor(xPos, yPos){
        this.bottomLeft = [xPos,yPos]
        this.bottomRight = [xPos + blockWidth, yPos]
        this.topRight = [xPos + blockWidth,yPos + blockHeight]
        this.topLeft = [xPos , yPos + blockHeight]
    }
}

const blocks = [
    new Block (30,270),
    new Block (140,270),
    new Block (250,270),
    new Block (360,270),
    new Block (470,270),
    new Block (580,270),
    new Block (90,300),
    new Block (200,300),
    new Block (310,300),
    new Block (420,300),
    new Block (530,300),
]

function drawBlocks(){
    for( let i=0 ; i<blocks.length ; i++ ){
        const block = document.createElement("div")
        block.classList.add("block")
        block.style.left = blocks[i].bottomLeft[0] + "px"
        block.style.bottom = blocks[i].bottomLeft[1] + "px"
        grid.appendChild(block)
    }
}