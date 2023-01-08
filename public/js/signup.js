const signupFormHandler = async (event) => {
    event.preventDefault();

    const usernameNew = document.querySelector('#username-signup');
    const passwordNew = document.querySelector('#password-signup');

    const response = await fetch('/api/user/signup', {
        method: 'POST',
        body: JSON.stringify({
            username: usernameNew.value,
            password: passwordNew.value,
        }),
        headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok) {
        document.location.replace('/');
    } else {
        alert('Unable to signup');
    }
};

document
    .querySelector('.signup-form')
    .addEventListener('submit', signupFormHandler);