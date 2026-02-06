function toggleMenu() {
    document.getElementById('menu').classList.toggle("active");
    document.getElementById('overlay').classList.toggle("active");
}

function cerrarMenu() {
    document.getElementById('menu').classList.remove("active");
    document.getElementById('overlay').classList.remove("active");
}

function mostrarSeccion(id) {
    document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
    document.getElementById(id).classList.add('active');
    cerrarMenu();
}

function limpiarFormulario() {
    document.querySelectorAll("#contacto input, #contacto textarea")
        .forEach(campo => campo.value = "");
}