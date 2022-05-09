const token = window.localStorage.getItem('token');
const login = window.localStorage.getItem('login');


if (!login){
    fetch("./data.json")
    .then(response => {
    return response.json();
    })
    .then(data => {
        console.log(data);
        window.localStorage.setItem(`length`, data.length)
        console.log(data.length);
        for (let j = 1; j <= data.length; j++) {
            window.localStorage.setItem(`${j}-title`, data[`${j}`].title)
            window.localStorage.setItem(`${j}-created_day`, data[`${j}`].created_day)
            window.localStorage.setItem(`${j}-words`, data[`${j}`].words)
            window.localStorage.setItem(`${j}-minutes`, data[`${j}`].minutes)
            window.localStorage.setItem(`${j}-comments`, data[`${j}`].comments)
            window.localStorage.setItem(`${j}-short_text`, data[`${j}`].short_text)
            window.localStorage.setItem(`${j}-location`, data[`${j}`].location)
            window.localStorage.setItem(`${j}-long_text`, data[`${j}`].long_text)
            window.localStorage.setItem(`${j}-img`, data[`${j}`].img)
            window.localStorage.setItem(`login`, 'Bor')
        }
    })
}

if(!token){
    document.getElementById('dasds').style.display = 'none'
}
else{
    document.getElementById('dasds').style.display = 'block'
}

document.getElementById('news').innerHTML = ''
var lenth = +window.localStorage.getItem('length')
for (let i = 1; i <= lenth; i++) {
    var title = window.localStorage.getItem(`${i}-title`)
    var created_day = window.localStorage.getItem(`${i}-created_day`)
    var words = window.localStorage.getItem(`${i}-words`)
    var minutes = window.localStorage.getItem(`${i}-minutes`)
    var comments = window.localStorage.getItem(`${i}-comments`)
    var short_text = window.localStorage.getItem(`${i}-short_text`)
    document.getElementById('news').innerHTML += `<div class="news">
    <h1 class="news-title">${title}</h1>
    <div class="p-tags">
        <p class="text-secondary">${created_day}</p>
        <p class="text-secondary">${words}</p>
        <p class="text-secondary">${minutes}</p>
        <p class="text-secondary">${comments}</p>
    </div>
    <p class="news-body">${short_text}</p>
    <a class="href" href="./blogs/${i}.html">Continue...</a>
</div>`
}
