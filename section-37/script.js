const container = document.getElementById('container')
const colors = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71']
const SQUARES = 500
for (let i = 0; i < SQUARES; i++) {
    const square = document.createElement('div')
    square.classList.add('square')
    square.addEventListener('mouseenter', () => setColor(square))
    square.addEventListener('mouseleave', () => {
        setTimeout(() => {

            removeColor(square)
        }, 900)
    })
    container.appendChild(square)

}


function setColor(square) {
    const color = getRandomColor()
    square.style.background = color
}
function removeColor(square) {

    square.style.background = '#1d1d1d'
}

function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)]
}