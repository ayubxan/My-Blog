var i = window.location.href.split('/')[4].split('.')[0]
var title = window.localStorage.getItem(`${i}-title`)
var created_day = window.localStorage.getItem(`${i}-created_day`)
var words = window.localStorage.getItem(`${i}-words`)
var minutes = window.localStorage.getItem(`${i}-minutes`)
var comments = window.localStorage.getItem(`${i}-comments`)
var short_text = window.localStorage.getItem(`${i}-short_text`)
var long_text = window.localStorage.getItem(`${i}-long_text`)
var img = window.localStorage.getItem(`${i}-img`)
var location = window.localStorage.getItem(`${i}-location`)
document.getElementById('news').innerHTML = ''
    document.querySelector('title').innerHTML = title
    document.getElementById('news').innerHTML += 
    `
    <div class="news">
            <h1 class="news-title">${title}
            </h1>
            <div class="p-tags">
                <p class="text-secondary">${created_day}</p>
                <p class="text-secondary">${location}</p>
                <p class="text-secondary">${comments}</p>
            </div>
            <p class="news-body">
                ${short_text}
            </p>
            <img src="${img}" class="image" alt="">
            ${long_text}
        </div>`
document.getElementById('ed').addEventListener('click', edit_)

function edit_(){
    window.localStorage.setItem(`edit`, i)
    window.location.href = './edit.html'
}

const token = window.localStorage.getItem('token')
if(!token){
    document.getElementById('ed').style.display = 'none'
}
else{
    document.getElementById('ed').style.display = 'block'
}