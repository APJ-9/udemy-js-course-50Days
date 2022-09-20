const toogles = document.querySelectorAll('.faq-toogle')

toogles.forEach(toogle => {
    toogle.addEventListener('click', () => {
        toogle.parentNode.classList.toggle('active')
    })
})
