let boxDiv = document.getElementById('box')
let containerDiv = document.getElementById('container')
let offsetBoxX, offsetBoxY
let maxX = containerDiv.offsetLeft + containerDiv.offsetWidth - boxDiv.offsetWidth
let maxY = containerDiv.offsetTop + containerDiv.offsetHeight - boxDiv.offsetHeight
let mouseDown = false
const downHandler = (e) => {
    mouseDown = true
    offsetBoxX = e.x - e.target.offsetLeft
    offsetBoxY = e.y - e.target.offsetTop

    boxDiv.addEventListener('pointermove', moveHandler)
}

const moveHandler = (e) => {
    if (mouseDown) {
        let newX = e.x - offsetBoxX
        let newY = e.y - offsetBoxY

        if (newX < containerDiv.offsetLeft) newX = containerDiv.offsetLeft
        if (newY < containerDiv.offsetTop) newY = containerDiv.offsetTop
        if (newX > maxX) newX = maxX
        if (newY > maxY) newY = maxY
        boxDiv.style.left = `${newX}px`
        boxDiv.style.top = `${newY}px`
    }

}


const upHandler = (e) => {
    mouseDown = false
    // console.log('mouse up')
    boxDiv.removeEventListener("pointermove", moveHandler)
}

boxDiv.addEventListener('pointerdown', downHandler)
document.body.addEventListener('pointerup', upHandler)
// document.body.addEventListener('pointermove', e=>console.log(e.x, e.y))