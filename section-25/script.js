const header = document.getElementById('header')
const title = document.getElementById('title')
const excerpt = document.getElementById('excerpt')
const profile_img = document.getElementById('profile_img')
const nameA = document.getElementById('name')
const date = document.getElementById('date')

const animated_bgs = document.querySelectorAll('.animated-bg')
const animated_bg_texts = document.querySelectorAll('.animated-bg-text')

setTimeout(getData, 2500)

function getData(){
 header.innerHTML = `<img src ="https://source.unsplash.com/random/150x150&fit=crop&w=2100&q=80"/>`
title.innerHTML = 'Lorem ipsum dolor sit amet'
excerpt.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore perferendis'
profile_img.innerHTML = `<img src="https://randomuser.me/api/portraits/men/40.jpg" alt="profile pic" />`
nameA.innerHTML = 'John Doe'
date.innerHTML = 'Oct 08, 2022'

animated_bgs.forEach(bg=> bg.classList.remove('animated-bg'))
animated_bg_texts.forEach(bg.classList.remove('animated-bg-text'))
}

