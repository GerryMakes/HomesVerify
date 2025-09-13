function verify() {
    // Prevent form submission for demo
    event.preventDefault();
    
    const form = document.getElementById('myForm');
    const input = document.getElementById('myInput');
    
    if (input.value.trim() === '') {
        input.style.borderColor = '#f56565';
        input.focus();
        return;
    }
    
    // Add loading state
    form.classList.add('loading');
    
    // Simulate API call
    setTimeout(() => {
        form.classList.remove('loading');
        alert('Verification submitted!');
    }, 2000);
}