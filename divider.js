let leftDiv = document.getElementById('left')
let rightDiv = document.getElementById('right')
let vrDiv = document.getElementById('vr')
let mouseDown = true
let root = document.body.style
let mousedownHandler = (e) => {
    mouseDown = true
    // console.log('mouse down', mouseDown)
    document.body.addEventListener('pointermove', mousemoveHandler)
}
let mousemoveHandler = (e) => {
    // console.log('mouse moving', e.x)
    if (mouseDown) {
        let leftWidth = (e.x / window.innerWidth) * 100
        let rightWidth = 100 - leftWidth
        root.setProperty('--width-left', `${leftWidth}%`)
        root.setProperty('--width-right', `${rightWidth}%`)
        console.log(root.getPropertyValue('--width-left'))
        console.log(root.getPropertyValue('--width-right'))
    }

}
let mouseupHandler = (e) => {
    mouseDown = false
    vrDiv.removeEventListener('pointermove', mousemoveHandler)
    // console.log('mouse down', mouseDown)
}
vrDiv.addEventListener('pointerdown', mousedownHandler)

document.body.addEventListener('pointerup', mouseupHandler)
// document.body.addEventListener('pointermove', ev => console.log(ev.x))
