// My Code
// const search = document.querySelector('.search')
// const searchBtn = document.querySelector('.btn')
// let state=false

// searchBtn.addEventListener('click',()=>{
// // console.log('hello')
// if(state===false){
// 	search.classList.add('active')
// 	state = true
//     // console.log(state)
// } else {
// 	search.classList.remove('active')
// 	state = false
// 	}
// })

//Project Code
const search = document.querySelector('.search')
const btn = document.querySelector('.btn')
const input = document.querySelector('.input')

btn.addEventListener('click', () => {
	search.classList.toggle('active')
	input.focus()
})
