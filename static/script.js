document.addEventListener('DOMContentLoaded', function() {
    const container = document.querySelector('.container');
    const signInBtn = document.getElementById('signInBtn');
    const registrationForm = document.getElementById('registrationForm');
    const loginForm = document.getElementById('loginForm');

    signInBtn.addEventListener('click', function() {
        loginForm.classList.toggle('hidden');
    });

    registrationForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const formData = new FormData(registrationForm);
        fetch('/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(Object.fromEntries(formData)),
        })
        .then(response => response.json())
        .then(data => {
            alert(data.message);
            if (data.success) {
                registrationForm.reset();
            }
        });
    });

    loginForm.querySelector('form').addEventListener('submit', function(e) {
        e.preventDefault();
        const formData = new FormData(this);
        fetch('/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(Object.fromEntries(formData)),
        })
        .then(response => response.json())
        .then(data => {
            alert(data.message);
            if (data.success) {
                this.reset();
                loginForm.classList.add('hidden');
            }
        });
    });
});