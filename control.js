const usuario = document.getElementById('usuario');

const contraseña = document.getElementById('contraseña');

const error = document.getElementById('error');

const errorDos = document.getElementById('errorDos')

const form = document.getElementById('formulario');
form.addEventListener('submit', function(event) {
    event.preventDefault();
    let mensajesError = [];
    let mensajesErrorDos = [];


    if (usuario.value === null || usuario.value === '') {
        mensajesError.push('No ingreso su nombre de usuario');
    } else {
        if (/\S+@\S/.test(usuario.value) == false) {
            mensajesError.push('No utilizaste un @');
        }
    }

    if (contraseña.value === null || contraseña.value === '') {
        mensajesErrorDos.push('No ingreso su contraseña');
    }

    error.innerHTML = mensajesError
    errorDos.innerHTML = mensajesErrorDos

})