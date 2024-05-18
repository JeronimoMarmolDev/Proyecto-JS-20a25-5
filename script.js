function validateForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
    var gender = document.querySelector('input[name="gender"]:checked');
    var interest = document.getElementById('interest').value;
    var file = document.getElementById('file').value;

    if (name === '' || email === '' || message === '' || !gender || interest === '' || file === '') {
        alert('Por favor completa todos los campos obligatorios.');
        return false;
    }
    return true;
}

