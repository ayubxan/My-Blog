var id = window.localStorage.getItem(`edit`)
var title = window.localStorage.getItem(`${id}-title`)
var day = window.localStorage.getItem(`${id}-created_day`)
var words = window.localStorage.getItem(`${id}-words`)
var minutes = window.localStorage.getItem(`${id}-minutes` )
var comments = window.localStorage.getItem(`${id}-comments`)
var txt = window.localStorage.getItem(`${id}-short_text` )
var img = window.localStorage.getItem(`${id}-img`)
var loc = window.localStorage.getItem(`${id}-location`)
var txt2 = window.localStorage.getItem(`${id}-long_text`)


document.getElementById('title').value = title
document.getElementById('day').value = day
document.getElementById('words').value = words
document.getElementById('minutes').value = minutes
document.getElementById('comments').value = comments
document.getElementById('short_text').value = txt
document.getElementById('img').value = img
document.getElementById('location').value = loc
document.getElementById('log_text').value =txt2



function ready(){
    window.localStorage.setItem(`${id}-title`, document.getElementById('title').value )
    window.localStorage.setItem(`${id}-created_day`, document.getElementById('day').value )
    window.localStorage.setItem(`${id}-words`, document.getElementById('words').value )
    window.localStorage.setItem(`${id}-minutes`, document.getElementById('minutes').value )
    window.localStorage.setItem(`${id}-comments`, document.getElementById('comments').value )
    window.localStorage.setItem(`${id}-short_text`, document.getElementById('short_text').value )
    window.localStorage.setItem(`${id}-img`, document.getElementById('img').value )
    window.localStorage.setItem(`${id}-location`, document.getElementById('location').value )
    window.localStorage.setItem(`${id}-long_text`, document.getElementById('log_text').value)
    window.location.href = '../index.html';
}
