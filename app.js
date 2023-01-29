let projects = document.querySelector('.projects')
// let repos = document.querySelectorAll('.card')
// let reposTitle = document.querySelector('.project-title')
let url = 'https://api.github.com/users/karimabdallah1996/repos'

fetch(url)
.then((response) => response.json())
.then((data) => {
  for(let i = 0; i < data.length; i++){
    let repos = document.createElement('div')
    repos.className = 'card'
    projects.appendChild(repos)
    let repoLink = document.createElement('a')
    repoLink.href = `https://github.com/KarimAbdallah1996/${data[i].name}`
    repos.appendChild(repoLink)
    let repoTitle = document.createElement('h3')
    repoTitle.innerText = data[i].name
    repoLink.appendChild(repoTitle)
    let repoImage = document.createElement("img")
    // repoImage.src = `https://raw.githubusercontent.com/KarimAbdallah1996/${data[0].name}/main/${data[0].name}`
    repoImage.alt = `${data[i].name} image`
    repoLink.appendChild(repoImage)
    }
  });



