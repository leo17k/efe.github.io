const inputEditar = document.getElementById("usuario");
const editarPerfil = document.getElementById("editar-perfil");
const divInput = document.getElementById("input-editar");
const nombreDeUsuario = document.getElementById("nombre-usuario");
const informacion = document.getElementById("informacion");
const guardar = document.getElementById("guardar");
const correo = document.getElementById("Correo");
const tlf = document.getElementById("tlf");
const publ = document.getElementById("publ");
const publa = document.getElementById("publa");
const publb = document.getElementById("publb");
const tlf2 = document.getElementById("tlf2");
const email = document.getElementById("Email");
const imagenInput = document.getElementById('imagen-perfil');
const previewImagen = document.getElementById('preview-imagen');

// Mostrar el formulario de edición
editarPerfil.addEventListener("click", () => {
    divInput.style.display = "block";
    informacion.style.display = "none";
    guardar.style.display = "inline";
    publ.style.display = "none";
    publa.style.display = "none";
    publb.style.display = "none";
});

// Guardar los cambios
guardar.addEventListener("click", () => {
    informacion.style.display = "block";
    divInput.style.display = "none";
    guardar.style.display = "none";
    publ.style.display = "block";
    publa.style.display = "block";
    publb.style.display = "block";
});

// Actualizar el email en el DOM
correo.addEventListener("change", (e) => {
    email.textContent = e.target.value;
});

// Actualizar el teléfono en el DOM
tlf.addEventListener("change", (e) => {
    tlf2.textContent = e.target.value;
});

// Actualizar el nombre de usuario en el DOM
inputEditar.addEventListener("change", (e) => {
    nombreDeUsuario.textContent = e.target.value;
});

// Agregar un evento para la previsualización de la imagen
imagenInput.addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        const imageUrl = URL.createObjectURL(file);
        previewImagen.src = imageUrl;
    }
});