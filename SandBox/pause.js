let isPaused = false
const element = document.createElement("div")
element.innerHTML = "Pause"
const menus = []

function pause(){
    document.addEventListener("keydown",(e)=>{
        if (!isPaused){
            if(e.key === "Escape"){
                isPaused = true
                element.classList.add("pause")
                map.appendChild(element)
            }
        } else {
                if (e.key === "Escape") {
                element.classList.remove("pause")
                map.removeChild(element)
                isPaused = false
            }
        }
    })
}