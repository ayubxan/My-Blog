
function ready(){

    id = document.getElementById('id').value;
    window.localStorage.setItem(`length`, document.getElementById('length').value )
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
