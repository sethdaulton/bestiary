const logout = async () => {
    const response = await fetch('/api/user/logout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok) {
        document.location.replace('/');
        alert('Logout successful');
    } else {
        alert('Unable to logout');
    }
};

document
    .querySelector('#logout-link')
    .addEventListener('click', logout);