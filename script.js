const mainSection = document.getElementById('main')
// console.log(mainSection)

const colors = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71']

function jsonconnection() {

    const xhr = new XMLHttpRequest()

    xhr.open('GET', 'projects.json')

    xhr.onload = function () {
        if (this.status == 200) {
            const projects = JSON.parse(this.responseText)
            const allProjects = projects.projects
            let i = 1
            allProjects.forEach(project => {
                // console.log(i, project)
                const card = document.createElement('div')
                card.classList.add('card')
                card.innerHTML =
                    `
                        <div class="project-number">
                            <span>${i}</span>
                        </div>
                        <div class="details">
                            <p class="projectname">${project.name}</p>
                            <a href="${project.link}"> <button>View Project</button> </a>
                        </div>
                    `
                mainSection.appendChild(card)
                card.style.backgroundColor = randomColor()

                i++
            });


        }
    }

    xhr.send()
}

function randomColor() {
    console.log([Math.floor(Math.random() * colors.length)])
    return colors[Math.floor(Math.random() * colors.length)]

}

jsonconnection()
