const elForm = document.querySelector('.form');
const elEmailInput = document.querySelector('#login');
const elPasswordInput = document.querySelector('#password');

elForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = elEmailInput.value;
    const password = elPasswordInput.value;

    fetch('https://reqres.in/api/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email,
            password
        })
    }).then(res => res.json())
        .then(data => {
            if(data){
                window.localStorage.setItem('token', data.token);
                window.location.href = './index.html';
            }
        }
        )
});
