const mainSection = document.getElementById('main')
// console.log(mainSection)

function jsonconnection() {

    const xhr = new XMLHttpRequest()

    xhr.open('GET', 'projects.json')

    xhr.onload = function () {
        if (this.status == 200) {
            const projects = JSON.parse(this.responseText)
            // console.log(projects)
            for (const key in projects) {
                // console.log(typeof (projects[key]), projects[key])
                const allProjects = projects[key]
                let i = 1
                allProjects.forEach(project => {
                    // console.log(i, project)
                    const card = document.createElement('div')
                    card.classList.add('card')
                    card.innerHTML = `
                            <div class="project-number">
                                <span>${i}</span>
                            </div>
                            <div class="details">
                                <p class="projectname">${project.name}</p>
                                <a href="${project.link}"> <button>View Project</button> </a>
                            </div>
                        `
                    mainSection.appendChild(card)
                    i++
                });
            }

        }
    }

    xhr.send()
}

jsonconnection()
