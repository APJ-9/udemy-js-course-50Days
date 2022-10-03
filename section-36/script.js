const imagesCr = document.getElementById('imgs')
const images = document.querySelectorAll('#imgs img')

let index = 0;

const leftBtn = document.getElementById('left')
const rightBtn = document.getElementById('right')

// console.log(images.length)

leftBtn.addEventListener('click', () => {
    index--
    if (index >= 0) {
        imagesCr.style.transform = `translateX(${-index * 500}px)`
        // console.log(index)
    }
    else {
        index = images.length - 1
        imagesCr.style.transform = `translateX(${-index * 500}px)`
        // console.log('hai')
    }
})

rightBtn.addEventListener('click', () => {
    index++
    if (index < images.length) {
        imagesCr.style.transform = `translateX(${-index * 500}px)`
        // console.log(index)
    } else {
        index = 0
        imagesCr.style.transform = `translateX(${-index * 500}px)`
        // console.log(index)
    }
})
