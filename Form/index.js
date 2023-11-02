document.addEventListener('DOMContentLoaded', function() {
    const inputForm = document.getElementById('inputForm');
    const outputName = document.getElementById('outputName');
    const outputEmail = document.getElementById('outputEmail');
    const outputMessage = document.getElementById('outputMessage');
    const outputDiv = document.getElementById('output');

    inputForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        outputName.textContent = name;
        outputEmail.textContent = email;
        outputMessage.textContent = message;

        outputDiv.style.display = 'block';
    });
});
