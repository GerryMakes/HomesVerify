function verify(event) {
    event.preventDefault(); // Fix: pass event from the form

    const form = document.getElementById('myForm');
    const input = document.getElementById('myInput');
    const userId = input.value.trim();

    if (userId === '') {
        input.style.borderColor = '#f56565';
        input.focus();
        return;
    }

    form.classList.add('loading');

    fetch('https://your-replit-url/check_member', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ user_id: userId })
    })
    .then(response => response.json())
    .then(data => {
        form.classList.remove('loading');
        alert(data.message || 'Unexpected response.');
    })
    .catch(error => {
        form.classList.remove('loading');
        alert('Error contacting server.');
        console.error(error);
    });
}
